const express = require('express');
const { Socket } = require('socket.io');
const app = express()
const port = 3000
const { v4: uuidv4 } = require('uuid');
app.set("view engine", "ejs");
app.use(express.static("public"));
const server = require('http').Server(app);
const io = require('socket.io')(server)




app.get('/', (req, res) => {
    res.redirect(`/${uuidv4()}`)

})

app.get('/:room', (req, res) => {
    res.render(__dirname + '/views/room.ejs', { roomId: req.params.room })
})

io.on('connection', Socket => {
    Socket.on("join-room", () => {
        console.log("We have joined the room");
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



