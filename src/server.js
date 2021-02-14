const http = require('http');

const url = require('url');

const query = require('querystring');
const mediaHandler = require('./mediaResponses.js');
const htmlHandler = require('./htmlResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {

  '/': htmlHandler.getIndex,
  '/page1': htmlHandler.getPage1,
  '/page2': htmlHandler.getPage2,
  '/page3': htmlHandler.getPage3,
  '/party.mp4': mediaHandler.getParty,
  '/bird.mp4': mediaHandler.getBird,
  '/bling.mp3': mediaHandler.getBling,
    notFound: htmlHandler.getIndex,

};

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const {
    pathname,
  } = parsedUrl;
  const params = query.parse(parsedUrl.query);

  if (urlStruct[pathname]) {
    urlStruct[pathname](request, response, params);
  } else {
    urlStruct.notFound(request, response, params);
  }

  /* Dated Method */
  //    if (pathname === '/') {
  //        htmlHandler.getIndexResponse(request, response)
  //    } else if (pathname === '/random-number') {
  //        jsonHandler.getRandomNumberResponse(request, response, params)
  //    } else {
  //        htmlHandler.getErrorResponse(request, response)
  //    }
  //
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
