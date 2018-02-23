FROM node

RUN mkdir -p ./webapp/app

WORKDIR ./webapp/

COPY LICENSE package.json ./

RUN npm install --only=production

COPY app ./app/

EXPOSE 8080

CMD [ "npm", "start" ]