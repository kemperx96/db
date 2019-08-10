    var server     = require('http').createServer(),
    io         = require('socket.io')(server),
    port       = 1337;



    const { Users } = require('./utils/users');
    const { Rooms } = require('./utils/room');
    let users2 = {};
    const users = new Users();
    io.on('connection', function (socket){


      socket.on('new user', (data, cb) => {
        socket.nickname = data.username;
        socket.rank = data.rank;
        socket.guild = data.guild;
        socket.gender = data.gender;
        users2[socket.nickname] = socket;
        users.removeUser(socket.nickname);
        users.addUser( socket.rank, socket.guild, socket.nickname, socket.gender );
        io.sockets.emit('updateUserList', users.getUserList());
      });
      
      socket.on('disconnect', data => {
        users.removeUser(socket.nickname);
        const user = users.removeUser(socket.id);
        io.sockets.emit('updateUserList', users.getUserList());
      });


      socket.on('send message', (data, cb) => {
          //var msg = data.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");
          var msg = data.trim();

          if (socket.rank  === "24") {

            var urlMatcher = /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/gi;
            var msg = data.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(urlMatcher, '<a target="_blank" href="' + '$1' + '">$1</a>');

            io.sockets.emit('new message GM', {
              msg,
              nick: socket.nickname,
              guild: socket.guild,
            }); 
          }else{
            io.sockets.emit('new message', {
              msg,
              nick: socket.nickname,
              guild: socket.guild,
            }); 
          }

          
        });             


      
    });




    server.listen(port);
    console.log('SocketIO > listening on port ' + port)