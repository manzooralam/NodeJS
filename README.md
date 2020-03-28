# NodeJS:

Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.

When you install NODE we get three command :
``node,
npm & 
npx `` all these come build with node, so node is a wrapper around  v8 so v8.

V8 is a javaScript engine 

## e.g.
```
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
Now, run your web server using node app.js. Visit http://localhost:3000 and you will see a message saying "Hello World".

Ref: [https://nodejs.org/en/docs/guides/getting-started-guide/](https://nodejs.org/en/docs/guides/getting-started-guide/)
