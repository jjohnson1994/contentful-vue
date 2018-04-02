# Contentful Vue
A Vue JS plugin for the Contentful API. 
Also checkout the [Contentful API docs][1] and [Contentful NPM Package docs][2] because this plugin just wrapps those.

## Installation
#### Node
Using npm:

```
npm i contentful-vue
```

Using yarn:

```
yarn add contentful-vue
```

#### Browser

```html
<script src='https://unpkg.com/contentful-vue'></script>
```

## Useage
Inside main.js
```javascript
import ContentfulVue from "./ContentfulVue";

Vue.use(ContentfulVue, {
  space: YOUR - SPACE,
  accessToken: YOUR - ACCESS - TOKEN
});
```
Now inside any Vue component you can `this.$contentful` to access the Contentful API.

### Examples
Some basic examples are shown bellow but the [Contentful API docs][1] and [Contentful NPM Package docs][2] are a lot more useful.

#### Get Space
``` javascript
this.$contentful
  .getSpace()
  .then((res) => {
    ...
  })
  .catch((error) => {
    ...
});
```

#### Get all Entries
```javascript
this.$contentful
  .getEntries()
  .then((res) => {
    ...
  })
  .catch((error) => {
    ...
  })
```
With Pagination
```javascript
const query = {
  skip: 0,
  limit: 10,
};

this.$contentful
  .getEntries(query)
  .then((res) => {
    ...
  })
  .catch((error) => {
    ...
  })
```
With Pagination and Search
```javascript
const query = {
  skip: 0,
  limit: 10,
  query: query,
};

this.$contentful
  .getEntries(query)
  .then((res) => {
    ...
  })
  .catch((error) => {
    ...
  })
```

#### Get Entry
```javascript
this.$contentful
  .getEntry(ENTRY-ID)
  .then((res) => {
    ...
  })
  .catch((error) => {
    ...
  })
```

[1]: https://www.contentful.com/developers/docs/references/content-delivery-api/
[2]:https://www.npmjs.com/package/contentful
