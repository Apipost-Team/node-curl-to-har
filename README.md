# node-curl-to-har
 

Transpile curl commands into Har Object for node.js

Installation

```js
npm install node-curl-to-har
```
Usage

```js
const nodeCurlToHar = require('node-curl-to-har');
const curl= `curl 'http://www.apipost.cn/' `
const har=nodeCurlToHar(curl);
console.log(har)
/*
logs:
[{"request":{"method":"GET","url":"http://www.apipost.cn/","httpVersion":"HTTP/1.1","cookies":[],"headers":[],"queryString":[],"headersSize":-1,"bodySize":-1}}]
*/
```

#License
MIT © Apipost-Team

