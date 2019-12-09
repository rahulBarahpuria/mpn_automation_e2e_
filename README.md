# RialtoAutomation_Cypress

Setup:

    1. Move to directory where package.json exists. here  > cd RialtoAutomation_Cypress
    2. Then node module install  > npm install
  
 Running Test Cases:
 
    how to open Cypress Launcher, run tests ?
      > npx cypress open
      
    how to run all tests under cypress/specs folder headless mode ?
      > npx cypress run
    
    how to run only particular test file ?
      headless
      > npx cypress run --spec <path to specific test file>
     
      head mode
      > npx cypress run --spec <path to specific test file> --headed
      
    how to run test only on INT/QA/Beta/Prod. etc...
      > npx cypress run --env configFile=mpnqa --spec "<path to specific test file >"
   
  
