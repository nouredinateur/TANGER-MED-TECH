const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require('cors');

let port = 1997 || process.env.PORT;

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`,)
})