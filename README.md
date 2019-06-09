## Permission-Generator-Microservice
A light microservice for generating event permissions

[![view docs](https://img.shields.io/badge/docs-view%20API%20documentation-orange.svg)](https://abhishekkushwaha4u.github.io/Permission-Generator-Microservice/)

 
### What this API offers

- [X] Night permission generator
- [X] Event permission generator
- [X] Send event to externals
- [X] Send event to external students
- [ ] Fetch event details directly from Hades
- [ ] Send Permission document to the mailer service

<br/>

### Getting started
Permission generator is a microservice which is a part of [Project Hades](https://github.com/GDGVIT/Project-Hades.git). 

```bash
# clone your copy
$ git clone https://github.com/GDGVIT/Permission-Generator-Microservice

# Navigate inside the project
$ cd Permission-Generator-Microservice
```

<br/>

#### Installing Packages

To install all the required packages, run:

```bash
# Install all dependancies
$ npm install

# Run the project
$ npm start
```
This will start an instance in production

<br/>

#### Starting in dev mode

```bash
# Install hot reloader
$ sudo npm install -g nodemon 

# Start the project in dev mode
$ npm run dev
```
This will allow hot reloading of the application
