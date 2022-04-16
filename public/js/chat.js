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

  document.querySelector('.user_logged').innerHTML += `
    <img
      class="avatar_user_logged"
      src=${avatar}
    />
    <strong id="user_logged">${name}</strong>
  `;

  console.log(name, avatar, email);
  socket.emit('start_chat', {
    email,
    name,
    avatar,
  });

  socket.on('new_users', (data) => {
    addUser(data);
  });

  socket.on('get_users', (users) => {
    console.info('get_users', users);

    users.forEach(addUser);
  });
}
onLoad();

function addUser(user) {
  const userList = document.getElementById('users_list');
  userList.innerHTML += `
    <li
      class="user_name_list"
      id="user_${user._id}"
      idUser="${user._id}"
    >
      <img
        class="nav_avatar"
        src=${user.avatar}
      />
      ${user.name}
    </li>
`;
}
