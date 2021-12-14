const fetch = require('node-fetch');
const io = require('socket.io')(sys.config.admin.internal);

// 1. Google Chat 봇 - WebHook URI
const webhookURL = 'https://chat.googleapis.com/v1/spaces/AAAAf3Z-Ykw/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=4jPwg2OpQWBI2Lh0AduueJo7FFaN3katsv6hn7CCb24%3D';


const servers = {};

io.on('connection', function (socket) {
  socket.on('permit', function (args) {
    socket.name = args.name;
    socket.local = args.local;
    socket.join(args.name);
    socket.emit('permit');

    if (typeof servers[args.name] === 'undefined') {
      servers[args.name] = {};
    }
    servers[args.name][socket.id] = socket;

    sys.log(args.name + ' connected');
  });
});

// 데이터 메세지
const data = JSON.stringify({
  'text': '[manager][127.0.0.1] 여기로 시스템 오류 메세지를 날립니다.',
});

fetch(webhookURL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
  body: data,
}).then((response) => {
  console.log(response);
});
