const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //With static file path
  //---------------------
  // if(req.url === '/') {
  //     fs.readFile(path.join(__dirname, 'public', 'index.html'),
  //     (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { 'Content-Type': 'text/html' });
  //         res.end(content);
  //         console.log(content)

  //     });

  // }
  // if(req.url === '/api/users') {
  // const users = [
  //     { name: 'Bob Smith', age: 40 },
  //     { name: 'John Doe', age: 30 }
  // ];

  // res.writeHead(200, {'Content-Type': 'application/json'});
  // res.end(JSON.stringify(users));
  // }

  //With dynamic file path
  //----------------------
  //Build the path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  //Get the extension
  let extname = path.extname(filePath);

  //Set Initial content type
  let contentType = "text/html";

  //Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
    case ".png":
      contentType = "image/png";
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  //Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //means PAGE NOT FOUND
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      //Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
