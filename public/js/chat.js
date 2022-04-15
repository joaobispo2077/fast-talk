const socket = io("http://localhost:3333");
socket.on("chat_initialized", data => {
  console.log(data);
})