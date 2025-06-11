import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// event handlers
wss.on("connection", function(socket) {
    console.log("user connected")
        socket.send("helllo")
    
})