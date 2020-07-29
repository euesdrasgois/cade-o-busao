import express from "express";
import http from "http";
import io from "socket.io";

const app = express();
const server = http.createServer(app);
const sockets = io.listen(server);
const port = 5000;

const lines = [
    {
        linha: "255",
        horarios: {
            idas: [6, 9, 12, 16, 22],
            proxIda: 0,
            voltas: [7.5, 10.5, 13.5, 17.5, 23],
            proxVolta: 0,
        },
        coords: {
            latitude: -10.997099,
            longitude: -37.30666,
        },
    },
    {
        linha: "377",
        horarios: {
            idas: [6, 9, 12, 16, 22],
            proxIda: 0,
            voltas: [7.5, 10.5, 13.5, 17.5, 23],
            proxVolta: 0,
        },
        coords: {
            latitude: -10.997099,
            longitude: -37.30666,
        },
    },
];

sockets.on("connection", (socket) => {
    console.log(socket.id + " Connected");
    socket.emit("setup", lines);
});

sockets.on("disconnect", (socket) => {
    console.log("> User Disconnected");
});

server.listen(port, () => console.log("Server listening on port: " + port));
