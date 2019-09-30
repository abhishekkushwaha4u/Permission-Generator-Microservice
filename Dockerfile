# https://github.com/marcbachmann/node-html-pdf/issues/233#issuecomment-417251026
FROM node:8.11.3-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# Add support for https on wget
RUN apk update && apk add --no-cache wget && apk --no-cache add openssl wget && apk add ca-certificates && update-ca-certificates

# Add phantomjs
RUN wget -qO- "https://github.com/dustinblackman/phantomized/releases/download/2.1.1a/dockerized-phantomjs.tar.gz" | tar xz -C / \
    && npm config set user 0 \
    && npm install -g phantomjs-prebuilt
    
# Add fonts required by phantomjs to render html correctly
RUN apk add --update ttf-dejavu ttf-droid ttf-freefont ttf-liberation ttf-ubuntu-font-family && rm -rf /var/cache/apk/*

COPY package.json package.json

RUN npm i 

COPY . . 

EXPOSE 8000

CMD ["npm", "start"]
