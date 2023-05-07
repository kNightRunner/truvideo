FROM node:18.7.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g ts-node

RUN mkdir -p /usr/src/app/uploads

COPY . .

RUN npm run build

EXPOSE 3000

ENV SEED_DATABASE=false

CMD [ "npm", "run", "start-check-seed" ]
