const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //set header for content
  res.setHeader("content-type", "text/html");
  let path = "./view/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/afar.html":
      path += "afar.html";
      res.statusCode = 200;
      break;
    case "/amhara.html":
      path += "amhara.html";
      res.statusCode = 200;
      break;
    case "/gambella.html":
      path += "gambella.html";
      res.statusCode = 200;
      break;
    case "/gurage.html":
      path += "gurage.html";
      res.statusCode = 200;
      break;
    case "/oromo.html":
      path += "oromo.html";
      res.statusCode = 200;
      break;
    case "/sidama.html":
      path += "sidama.html";
      res.statusCode = 200;
      break;
    case "/snnpr.html":
      path += "snnpr.html";
      res.statusCode = 200;
      break;
    case "/somalia.html":
      path += "somalia.html";
      res.statusCode = 200;
      break;
    case "/tigray.html":
      path += "tigray.html";
      res.statusCode = 200;
      break;
    case "/wolayta.html":
      path += "wolayta.html";
      res.statusCode = 200;
      break;
    case "/contribute.html":
      path += "contribute.html";
      res.statusCode = 200;
      break;
    case "/explore.html":
      path += "explore.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  //send an html file

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);

      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
