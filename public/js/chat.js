/* eslint-disable no-undef */
const socket = io('http://localhost:3333');

let chatRoomId = null;

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
  socket.emit('start_view', {
    email,
    name,
    avatar,
  });

  socket.on('user_entered', (user) => {
    const isUserAlreadyExists = document.getElementById(`user_${user._id}`);
    if (!isUserAlreadyExists) {
      addUser(user);
    }
  });

  socket.on('get_users', (users) => {
    console.info('get_users', users);

    users.forEach((user) => {
      if (user.email !== email) {
        addUser(user);
      }
    });
  });

  socket.on('new_message', (data) => {
    console.log('receive new message event');
    console.log('new_message', data);
  });
}

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

document.getElementById('users_list').addEventListener('click', (event) => {
  if (event.target && event.target.matches('li.user_name_list')) {
    const idUser = event.target.getAttribute('idUser');

    socket.emit(
      'start_chat',
      {
        idUser,
      },
      (room) => {
        console.log('chatRoom', room);
        chatRoomId = room.chatRoomId;
      },
    );
  }
});

document
  .getElementById('user_message')
  .addEventListener('keypress', (event) => {
    // socket.emit('typing', {
    //   email,
    // });

    if (event.key === 'Enter') {
      const text = event.target.value;
      console.log('message', text);

      const data = {
        text,
        chatRoomId,
      };

      socket.emit('message', data);

      event.target.value = '';
    }
  });

onLoad();
