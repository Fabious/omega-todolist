FROM node

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 1234

CMD ["yarn", "start"]
