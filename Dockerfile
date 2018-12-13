
FROM mhart/alpine-node:6.5

MAINTAINER Aurélien Hervé <mail@aurelien-herve.com>

RUN mkdir /urlShortenerApp
WORKDIR /urlShortenerApp

RUN npm install -g nodemon typescript@2.6 tslint yarn

ADD ./package.json .
ADD ./yarn.lock .
RUN yarn