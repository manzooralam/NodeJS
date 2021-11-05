# NodeJS:

Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.

When you install NODE we get three command :
``node,
npm & 
npx `` all these come build with node, so node is a wrapper around  v8 so v8.

V8 is a javaScript engine 

## How do I start with Node.js after I installed it?
Once we have installed Node.js, let's build our first web server. Create a file named app.js containing the following contents:
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
Now, run your web server using ```$node app.js```. Visit http://localhost:3000 and you will see a message saying "Hello World".

## Nodemon watching enable:
#### Step 1: ```$ npm init``` , package.json file will be created
#### Step 2: ``` "start":"node app.js", "dev": "nodemon app.js", // add these lines``` ,
in to the package.json file 
#### Step 3: Run ``` $ npm run dev ``` ,
Nodemon will start
#### Step 3: Check the Project folder name will be sitting to the same folder as, ```name: projectName

Ref: [https://nodejs.org/en/docs/guides/getting-started-guide/](https://nodejs.org/en/docs/guides/getting-started-guide/)
