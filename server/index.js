import express from "express";
import http from "http";
import io from "socket.io";

const app = express();
const server = http.createServer(app);
const sockets = io.listen(server);
const port = 5000;

const lines = [
    {
        key: 0,
        linha: "255",
        horarios: {
            idas: [6, 9, 12, 16, 19],
            proxIda: 0,
            voltas: [7.5, 10.5, 13.5, 17.5, 20.5],
            proxVolta: 0,
        },
        coords: {
            latitude: -10.997099,
            longitude: -37.30666,
        },
    },
    {
        key: 1,
        linha: "177",
        horarios: {
            idas: [6, 9, 12, 16, 19],
            proxIda: 0,
            voltas: [7.5, 10.5, 13.5, 17.5, 20.5],
            proxVolta: 0,
        },
        coords: {
            latitude: -11.000778,
            longitude: -37.320732,
        },
    },
];

function proxIdaCalc(line) {
    for (const idaId in line.horarios.idas) {
        const ida = line.horarios.idas[idaId];
        const dif_now = compare(ida, getTime());
        const dif_prox = compare(ida, line.horarios.proxIda);
        if (dif_now >= 0) {
            if (dif_prox !== 0) {
                line.horarios.proxIda = ida;
                return;
            }
        }
    }
}

function proxVoltaCalc(line) {
    for (const voltaId in line.horarios.voltas) {
        const volta = line.horarios.voltas[voltaId];
        const dif_now = compare(volta, getTime());
        const dif_prox = compare(volta, line.horarios.proxVolta);
        if (dif_now >= 0) {
            if (dif_prox !== 0) {
                line.horarios.proxVolta = volta;
                return;
            }
        }
    }
}

sockets.on("connection", (socket) => {
    console.log(socket.id + " Connected");
    for (const lineId in lines) {
        const line = lines[lineId];
        proxIdaCalc(line);
        proxVoltaCalc(line);
    }
    socket.emit("setup", lines);

    sockets.on("disconnect", (socket) => {
        console.log("> User Disconnected");
    });
});

function compare(i, j) {
    const minutes_i = i * 60;
    const minutes_j = j * 60;
    return minutes_i - minutes_j;
}

function getTime() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var result = hour + minute / 60;
    return result;
}

server.listen(port, () => console.log("Server listening on port: " + port));
