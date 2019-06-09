FROM node

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm i 

COPY . . 

EXPOSE 8000

CMD ["npm", "start"]
