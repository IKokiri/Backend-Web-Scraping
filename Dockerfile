FROM node:14-alpine

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY package*.json ./
COPY tsconfig.json ./
# copy source code to /app/src folder
COPY . .

RUN npm install
RUN npm run build

EXPOSE 9000

CMD [ "npm", "start"]