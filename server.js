const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      status: "online",
      project: "Aide Animal API"
    }));
    return;
  }

  res.writeHead(404);
  res.end("Not Found");
});

server.listen(PORT, () => {
  console.log(`Aide Animal API démarrée sur le port ${PORT}`);
});
