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
      break;
    case "/afar":
      path += "afar.html";
      break;
    case "/amhara":
      path += "amhara.html";
      break;
    case "/gambella":
      path += "gambella.html";
      break;
    case "/gurage":
      path += "gurage.html";
      break;
    case "/oromo.html":
      path += "oromo.html";
      break;
    case "/sidama":
      path += "sidama.html";
      break;
    case "/snnpr":
      path += "snnpr.html";
      break;
    case "/somalia":
      path += "somalia.html";
      break;
    case "/tigray.html":
      path += "tigray.html";
      break;
    case "/wolayta":
      path += "wolayta.html";
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
