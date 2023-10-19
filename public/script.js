const socket=io('/')
const myvideo = document.createElement("video");
myvideo.muted = false
const videogrid = document.getElementById("video-grid")

let myvideoStream
navigator.mediaDevices.getUserMedia({
    video: true, audio: true,
}).then(stream => { myVideoStream  = stream; addVideoStream(myVideo, stream) });

socket.emit('join-room');


const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => { video.play(); })
    videogrid.append(video)
}