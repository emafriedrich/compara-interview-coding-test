FROM node

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run test-coverage

RUN npm run after-30-days
