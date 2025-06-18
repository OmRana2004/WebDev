import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// event handlers
wss.on("connection", function(socket) {
    console.log("user connected")
    
     socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    })
    
})