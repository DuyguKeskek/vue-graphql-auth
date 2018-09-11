# [vue-graphql-auth](https://www.npmjs.com/package/vue-graphql-auth)

vue-graphql-auth is a basic authentication template for VueJS apps using a GraphQL backend. It allows you to easily setup your own authentication by changing the GraphQL endpoint.

## Installation

```bash
# installing the preset package
npm i vue-graphql-auth --save
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Usage

Cd into src folder. In main.js, simply change `__SIMPLE_API_ENDPOINT__` with your actual GraphQL endpoint.

``` js
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: '__SIMPLE_API_ENDPOINT__'
})
```
