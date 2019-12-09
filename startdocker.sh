echo starting docker container...parameters - $1, $2, $3
n=$1
app=$2
testcat=$3
echo Starting docker container passing args: $n, $app, $testcat
docker run -v C:/rahul/cypressautomation/mpn_automation_e2e_master/reports:/usr/src/app/mochawesome-report -v C:/rahul/cypressautomation/mpn_automation_e2e_master/reports:/usr/src/app/reports rialto_automation:0.1 $n $app $testcat
echo Container Started