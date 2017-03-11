# to-array.js

[![license](https://img.shields.io/github/license/patrickkempff/vidjo.js.svg?maxAge=2592000)]()

A micro library for dealing with array conversion.

## Installation

To include toArray in your project, first install with npm.

```
$ npm install convert-to-array
```

### Usage
```js
import toArray from 'convert-to-array';

toArray([1,2,3]) // => [1,2,3]
toArray("item1") // => ["item1"]
toArray(undefined || false || null) // => []

```
