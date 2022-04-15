/* eslint-disable no-undef */
const socket = io('http://localhost:3333');

socket.on('chat_initialized', (data) => {
  console.log(data);
});

function onLoad() {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');
  const avatar = urlParams.get('avatar');
  const email = urlParams.get('email');

  console.log(name, avatar, email);
  socket.emit('start_chat', {
    email,
    name,
    avatar,
  });
}
onLoad();
