# base image
FROM cypress/browsers:node10.2.1-chrome74

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/cypress
RUN mkdir -p /usr/src/app/reports
WORKDIR /usr/src/app

# install cypress
ADD package.json /usr/src/app/
COPY cypress /usr/src/app/cypress
ADD cypress.json /usr/src/app/
ADD reporter-config.json /usr/src/app/
ADD start.sh /usr/src/app/
ADD CUPexecuteinfo.csv /usr/src/app/
ADD CAPexecuteinfo.csv /usr/src/app/

RUN chmod +x /usr/src/app/start.sh

# install node modules

RUN echo installing npm modules..
RUN pwd

RUN ls -ltr

RUN npm install


# confirm the cypress install
RUN ./node_modules/.bin/cypress verify



ENTRYPOINT ["/usr/src/app/start.sh"]