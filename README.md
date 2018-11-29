# @r0b0t/itcss 
## In development.

[![npm](https://img.shields.io/npm/v/@r0b0t/itcss.svg)](https://www.npmjs.com/package/@r0b0t/itcss)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@r0b0t/itcss.svg)](https://www.npmjs.com/package/@r0b0t/itcss)

Removes all spaces from a string.

## Install

```
$ npm install @r0b0t/itcss
```

## Usage

```js
const itcss = require("@r0b0t/itcss");

itcss("So much space!");
//=> "Somuchspace!"

itcss(1337);
//=> Uncaught TypeError: itcss wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```