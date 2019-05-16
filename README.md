<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  

# Description

API for serving personalized ads according to a picture of people looking at the camera at a given moment.

# Technologies
- [NodeJS](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
- [NestJS](https://nestjs.com/)

# Getting started

## Prerequisites

Download and install: 
- [NodeJS LTS](https://nodejs.org/)
- [VSCode](https://code.visualstudio.com/)
- [Git](https://git-scm.com/downloads)
- [NPM](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Install recommended extensions for this workspace (open extensions and search `@recommended`) (VSCode)
- Software for data representation of SQL databases (eg: [HeidiSQL](https://www.heidisql.com/))
- [Postman](https://www.getpostman.com/downloads/)

## Clone the repository

```bash
$ git clone git@github.com:mluksic/dragonhack-api.git
```

## Switch to the repo folder

```bash
$ cd dragonhack-api
```

## Install dependencies

```bash
$ npm install
```

# Running the app

1. Install [Docker](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/) if you haven't done it yet.

2. Run Docker service for database (PostgreSQL) environment:

```bash
# setup postgres database inside docker container
npm run docker:up
```

3. Run application:

```bash
# development
$ npm run start:dev
```

```bash
# production
$ npm run start:prod
```

----------

# Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Swagger documentation

To see API documentation, open [Swagger](http://localhost:3000/api/docs/) while running the application.

# Postman

1. Install [Postman](https://www.getpostman.com/downloads/) if you haven't done it yet.
2. Click `Import` button in upper left corner
3. Import [dragonhack-api.postman_collection.json](dragonhack-api.postman_collection.json) and [dragonhack-api.postman_environment.json](dragonhack-api.postman_environment.json) files
4. Select `dragonhack-api` environment in upper right corner corner
5. While running the application, you can use API with requests provided or write your own requests

# Contributors

- [Miha Lukšič](https://github.com/mluksic)