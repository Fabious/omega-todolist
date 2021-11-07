FROM node

WORKDIR /usr/src/app

COPY package.json /app
COPY yarn.lock /app
RUN yarn install

COPY . .

EXPOSE 1234

CMD ["yarn", "start"]
