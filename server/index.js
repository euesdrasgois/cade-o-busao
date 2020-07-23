const express = require("express");
const app = express();
const server = require("http").createServer(app);
const sockets = require("socket.io").listen(server);
const port = 3000;

const buses = {
    bus1: {
        coords: {
            latitude: -10.9993773,
            longitude: -37.3131371,
        },
    },
};

sockets.on("connection", (socket) => {
    console.log("Connected");
    socket.emit("buses", buses);

    socket.on("driver-update", (socket, localization) => {
        buses[socket.id] = localization;
    });

    sockets.on("disconnect", (socket) => {
        console.log("> User Disconnected");
    });
});

server.listen(port, () => console.log("Server listening on port: " + port));
