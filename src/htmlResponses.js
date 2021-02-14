const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page1 = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const page3 = fs.readFileSync(`${__dirname}/../client/client3.html`);
// const notFound = fs.readFileSync(`${__dirname}/../client/notFound.html`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};
const getPage1 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page1);
  response.end();
};
const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page2);
  response.end();
};
const getPage3 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page3);
  response.end();
};

// const get404Response = (request, response, params) => {
//  response.writeHead(404, { 'Content-Type': 'text/html' });
//  response.write(notFound);
//  console.log('notfound');
//  response.end();
// };

module.exports = {
  getIndex,
  getPage1,
  getPage2,
  getPage3,
  // get404Response,
};
