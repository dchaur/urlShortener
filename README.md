# urlShortener

Create your own URL shortener REST-API and consume it using Vue.js

## Getting Started

This is a REST-API based on NodeJS, Express and Mongo, to generate short URL's you need a place to store generated short url code with original URL and a server like nginx to match short url code with the original one

### Prerequisites

To run this project you will need nginx in order to resolve short URL's

Add following location inside your nginx.conf:

```
// Find 'api/route/$parameter' inside src/server/routes
location ~* "^/[0-9a-z@]{5,15}$"  {
    rewrite ^/(.*)$ http://localhost:8000/api/route/$1 redirect;
}
```

### Installing

To get started locally, follow these instructions:

1. If you haven't done it already, [make a fork of this repo](https://github.com/dchaur/urlShortener/fork).
1. Clone to your local computer using `git`.
1. Make sure that you have Node 10.9 or later installed. See instructions [here](https://nodejs.org/en/download/).
1. Make sure that you have `yarn` installed; see instructions [here](https://yarnpkg.com/lang/en/docs/install/).
1. Run `yarn` (no arguments) from the root of your clone of this project.
1. Run `yarn link` to add all custom scripts we use to your global install.

## Running the API

Inside the cloned repo run

```
yarn run dev
```

The server will initialize using port 8000

### API structure

Inside src you will finda very easy structure:

```
controllers
db
 - models
server
  - routes
  app
  server
```

## Running front

To test API there is a Vue.js + Bootstrap project inside frontend folder. Check inside to find

```
controllers
components
 URLShortener
APIService.js
```

APIService is used to point API and resolve customer requests

```
Generate short URL
POST http://localhost:8000/api/create/url/
{
	"baseUrl":"yourLongUR",
	"shortBaseUrl":"the path to resolve the short URL"
}
```

## Built With

- [Vue.js](https://vuejs.org/) - The web framework used
- [Yarn](https://github.com/yarnpkg/yarn) - Dependency Management
- [Valid URL](https://github.com/ogt/valid-url) - URI validation
- [Short ID](https://github.com/dylang/shortid) - Creation of short non-sequential url-friendly unique ids

## Authors

- **Daniel Chaur** - _Initial work_

## License

This project is licensed under the MIT License

## Acknowledgments

- Personal growth
- Inspiration
- Self challenging
