echo Building docker image...

docker build -t rialto_automation:0.1 .

echo docker image is built

echo starting docker container...parameters - $1, $2, $3
n=$1
app=$2
testcat=$3
echo Starting docker container passing args: $n, $app, $testcat
docker run -v C:/github/REP_Automation/RialtoAutomation_Cypress/reports:/usr/src/app/mochawesome-report -v C:/github/REP_Automation/RialtoAutomation_Cypress/reports:/usr/src/app/reports rialto_automation:0.1 $n $app $testcat
echo Container Started


 