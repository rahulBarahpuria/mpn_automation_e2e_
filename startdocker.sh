echo starting docker container...parameters - $1, $2, $3, $4
testVenue=$1
app=$2
n=$3
testcategory=$4
echo Starting docker container passing args: $testVenue, $app, $n, $testcategory
docker run -v C:/rahul/cypressautomation/mpn_automation_e2e_master/reports:/usr/src/app/mochawesome-report -v C:/rahul/cypressautomation/mpn_automation_e2e_master/reports:/usr/src/app/reports rialto_automation:0.1 $testVenue $app $n $testcategory
echo Container Started