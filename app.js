const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify(["sd", "x", "y"]));
    res.end();
  }
});
// server.on("connection", socket => {
//   console.log("New connection...");
// });
server.listen(3000);

console.log("listening on port 3000");
