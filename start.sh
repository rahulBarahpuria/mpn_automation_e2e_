#!/bin/bash
echo Running docker container
# PATH=$PATH:/usr/src/app/node_modules/.bin
# PATH=$PATH:/usr/local/bin/node:/usr/local/bin/nodejs:/usr/local/bin/npm:/usr/local/bin/npx
# export PATH
cd /usr/src/app
# $1=Test Venue, $2=application (mpn/rep), $3=number of parallel nodes, $4=test category (22.x.x, REG, QA, initiative)
echo Args passed $1, $2, $3, $4


testVenue=$1
application=$2
totalNodes=$3
testcategory=$4

#based on test category, pick up target files from info.csv files

#read info.csv files

infofile="/usr/src/app/CUPexecuteinfo.csv"
if [ "$application" = "cap" ]
then
	
infofile="/usr/src/app/CAPexecuteinfo.csv"
fi

executeDir=/usr/src/app/cypress/execute
mkdir -p $executeDir

echo Reading Info file...

while IFS=',' read -r path releasenumber REGornot QAornot initiative
do
	echo path: $path
	echo releasenumber: $releasenumber
	echo REGornot: $REGornot
	echo QAornot: $QAornot
	echo Initiative: $initiative
	
	if [[ ( "$testcategory" == "REG" && "$REGornot" == "Y" ) || ( "$testcategory" == "QA" && "$QAornot" == "Y" ) || ( "$testcategory" == "$releasenumber" ) || ( "$testcategory" == "$initiative" ) ]]
	then
		echo COPYING $path $executeDir
		cp $path $executeDir
	fi
	
done < "$infofile"

echo Info file read complete.

cd $executeDir

totalSpecs=$(ls $executeDir | wc -l)

echo Total specs=$totalSpecs

if [ $totalSpecs -lt $totalNodes ]
then
	echo "Number of parallel node containers is more than total test files. Decreasing parallel number of nodes."
	totalNodes=$totalSpecs
fi

specPerNode=$((totalSpecs/totalNodes))
remain=$((totalSpecs%totalNodes))
if [ $remain -gt 0 ]
then
	specPerNode=$((specPerNode+1))
fi



startIndex=0

endIndex=$((specPerNode-1))
currentNode=1
files=($executeDir/*.js)
configFile=mpnintegration

case "$testVenue" in
	"broadcloud-qa-dc") configFile=mpnqa
	;;
	"broadcloud-beta-dc") configFile=mpnbeta
	;;
	"broadcloud-tier3-dc") configFile=mpnt3
	;;
esac
	
	
# none
# broadcloud-production-eu-dc
# broadcloud-production-au-dc
# broadcloud-beta-dc
# broadcloud-qa-dc
# broadcloud-integration-dc
# broadcloud-production-us-dc
# broadcloud-tier3-dc
# broadcloud-production-jp-dc
# broadcloud-vzmm-dc

npxcmd="npx cypress run --env configFile=$configFile --spec"
resultcmd=""
tailcmd="--reporter-options configFile=reporter-config.json"
while [ $currentNode -le $totalNodes ]
do
	echo For Node = $currentNode
	
	# create a directory where the current segment of test files reside and execute
	mkdir -p $executeDir/segment$currentNode
	pwd
	ls -ltr
	echo Start copying test files to $currentNode node
	while [ $startIndex -le $endIndex -a ${files[$startIndex]} ]
	do	
		echo COPYING ${files[$startIndex]} to $executeDir/segment$currentNode
		cp ${files[$startIndex]} $executeDir/segment$currentNode
		
		startIndex=$((startIndex + 1))
		
	done
	pwd
	specfolder=cypress/execute/segment$currentNode/*.js
	
	resultcmd=("${resultcmd} \"${npxcmd} '${specfolder}' ${tailcmd}\"")
	
	currentNode=$((currentNode+1))
	endIndex=$((endIndex+specPerNode))
done

cd /usr/src/app
resultcmd=("npx concurrently ${resultcmd}")
echo "Result command is - $resultcmd"
cat > npmscript.sh << EOF1
$resultcmd
npx mochawesome-merge --reportDir cypress/results > reports/mochawesome_merge.json
npx mochawesome-report-generator reports/mochawesome_merge.json
EOF1
sh npmscript.sh

