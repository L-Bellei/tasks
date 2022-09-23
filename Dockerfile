FROM node:slim

LABEL maintaner="Leonardo Bellei"

LABEL desc="Api for control of your daily tasks"

WORKDIR /usr/src/app

COPY ./package*.json ./  

COPY prisma ./prisma/

COPY ./.env ./

COPY tsconfig.json ./

COPY . . 

RUN npm install

RUN npx prisma generate

EXPOSE 3030

CMD [ "npm", "run", "dev" ]