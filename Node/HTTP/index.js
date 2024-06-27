const http = require("http");

const server = http.createServer((req, res) => {
  //! req ---> Matlb jo frontend se aata hai

  if (req.url === "/") {
    res.end("Home Page");
  }
  if (req.url === "/profile") {
    res.end("Profile Page");
  } else {
    // res.writeHead(404);
    res.end("Page not found");
  }
});

server.listen(3000);
