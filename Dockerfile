FROM node:8-slim

WORKDIR /usr/src/formviz
COPY . /usr/src/formviz

RUN yarn prep
