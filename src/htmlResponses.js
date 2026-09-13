const fs = require('fs');
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const page3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const serveFile = (request, response, content) => {
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write(content);
    response.end();
};

const getIndex = (request, response) => serveFile(request, response, index);
const getPage2 = (request, response) => serveFile(request, response, page2);
const getPage3 = (request, response) => serveFile(request, response, page3);

module.exports = {
    getIndex,
    getPage2,
    getPage3
}