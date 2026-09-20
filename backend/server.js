const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Backend is running");
});

server.listen(3000, "0.0.0.0", () => {
    console.log("Backend running on port 3000");
});