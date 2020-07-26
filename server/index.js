const express = require("express");
const app = express();
const server = require("http").createServer(app);
const sockets = require("socket.io").listen(server);
const port = 5000;

const lines = [
    {
        key: 0,
        chegada: "18:00",
        linha: "255",
        saida: "19:00",
        coords: {
            latitude: -10.997099,
            longitude: -37.30666,
        },
    },
    {
        key: 1,
        chegada: "18:00",
        linha: "255",
        saida: "19:00",
        coords: {
            latitude: -11.000778,
            longitude: -37.320732,
        },
    },
];

sockets.on("connection", (socket) => {
    console.log(socket.id + " Connected");
    socket.emit("setup", lines);

    sockets.on("disconnect", (socket) => {
        console.log("> User Disconnected");
    });
});

server.listen(port, () => console.log("Server listening on port: " + port));
