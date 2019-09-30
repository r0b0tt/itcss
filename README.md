# @r0b0t/itcss 

[![npm](https://img.shields.io/npm/v/@r0b0t/itcss.svg)](https://www.npmjs.com/package/@r0b0t/itcss)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@r0b0t/itcss.svg)](https://www.npmjs.com/package/@r0b0t/itcss)
[![https://img.shields.io/npm/l/@r0b0t/itcss](https://img.shields.io/npm/l/@r0b0t/itcss)](https://github.com/r0b0tt/itcss/blob/master/LICENSE)

Creates the folder structure for the ITCSS methodology.  
```
1. Settings
2. Tools
3. Generic
4. Elements
5. Objects
6. Components
7. Utilities
```

Install the package globally.  
```$xslt
$ npm install -g @r0b0t/itcss
```
Run itcss and specify your main sass file. This imports the various base files into your main sass file.
```
$ itcss --file=main.scss
```
or
```
$ itcss --file=main.sass
```

You can also use the package without installing it using NPX.
```
$ npx @r0b0t/itcss --file=main.scss
```
or
```
$ npx @r0b0t/itcss --file=main.sass
```
