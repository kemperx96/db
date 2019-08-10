

          $(document).ready(function() {
            const $nickname = $('#namexxx');
            const $rank = $('#rankxxx');
            const $guild = $('#guildxx');
            const $gender = $('#genderxxx');
            const $signup = $('#signup');
            const $messageForm = $('#message-form');

            const $messageForm2 = $('.msgbox');
            const $messageBox2 = $('#message2');
            const $chat2 = $('#chatxxx');

            const $registoForm = $('#signup');
            const $messageBox = $('#message');
            var $chat = $('#chat');
            const $usersxx = $('#usernames');
            const usersxxx2 = $("#users");
            const userse = $("#userse");

                  var supportChat = $("#support-chat"),
                  messagesWr = supportChat.find("#messages"),
                  messages = supportChat.find("#messages ul"),
                  chatInput = supportChat.find("#chatInput"),
                  users = supportChat.find("#users"),
                  online = supportChat.find("#online"),
                  total = supportChat.find("#total"),
                  selected = supportChat.find("#selected"),
                  me = supportChat.find("#me"),
                  broadcast = supportChat.find("#broadcast"),
                  userId = '';

            $("#cashfree").on( 'click', function() {

            });



            $('#game_main_buttons1').click(function(){

              location.href ="logout.php";
            });

            $('#reup').on( "click", function() {

              var s = "s";
              $.ajax({
                url: './channel.php',
                type: 'POST',
                data: { server: s},
                success: function (s) {
                  var s = s.split('_');
                  if(s[0]=='ok'){
                   var s1= s[1];
                   var s2= s[2];
                   var s3= s[3];
                   var s4= s[4];
                   $('#s1').html(s[1]);
                   $('#s2').html(s[2]);
                   $('#s3').html(s[3]);
                   $('#s4').html(s[4]);
                   console.log("Los servidores se han actualizado correctamente");  
                 }else {
                   console.log("Los servidores no se han actualizado correctamente");  
                 }
               },
               error: function() {
                console.log("Los servidores no se han actualizado correctamente");  
              }
            });

            });
            //setInterval(function() {$("#amigos").load(document.URL+" #amigos>*","");}, 1000);

            $("body").attr("oncontextmenu", "return false"); 

            $("#prev").hide();

            $("#rankxxx").hide();

            var urank =  $('#rankxxx').text();

            $('#viewall').click(function(e) {
              e.preventDefault();
              $("#friend").show();
              $('#viewall').removeClass('button_viewall').addClass('button_viewallx');
              $("#friends").removeClass('button_friendsx').addClass('button_friends');
              e.preventDefault();
            });

            $('#friends').click(function(e) {
              e.preventDefault();
              $("#friend").hide();
              $('#viewall').removeClass('button_viewallx').addClass('button_viewall');
              $("#friends").removeClass('button_friends').addClass('button_friendsx');   

            });

            $('.button_buddyl').click(function(e) {
              e.preventDefault();
              $("#chatbuddy").hide();
              //$("#chatbuddy").show();
            });

            $("#s1").on( "click", function() {
              $("#prev").show();
              $("#load").removeClass('waitx').addClass('wait');

              $('#game_main_buttons1').removeClass('button_exit').addClass('button_exitoff');
              $("#game_main_buttons2").removeClass('button_buddy').addClass('button_buddyoff');
              setTimeout("location.href = 'server'",3000); 
            });

            $("#reloud").on( "click", function() {
              setTimeout("location.href = './'"); 
            });

            if ($rank.text() === '24') {

            }else{
              var filter = ['mierda', 'puta'],
              reg = new RegExp("(" + filter.join("|") + ")", "g");

              var filter2 = ['/bcm'],
              reg2 = new RegExp("(" + filter2.join("|") + ")", "g");

         
            // chat general
          }

          var find = ["<3", ":)", ":D", ";)", ":(", ":p", ";p", ":'("];
          var replace = ["\u2764\uFE0F", "\uD83D\uDE03", "\uD83D\uDE00","\uD83D\uDE09","\uD83D\uDE12","\uD83D\uDE1B","\uD83D\uDE1C","\uD83D\uDE22"];

          $messageForm.submit( e => {
            e.preventDefault();
            socket.emit('send message', $messageBox.val().replace(reg, "******").replace(reg2, "").replace(new RegExp("(" + find.map(function(i){return i.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")}).join("|") + ")", "g"), function(s){ return replace[find.indexOf(s)]}).replace(/</g, "&lt;").replace(/>/g, "&gt;"), data => {
              $chat.append(`<p class="error">${data}</p>`)
            });
            $messageBox.val('');
          });


          (function(e){e.backward_timer=function(t){var n={seconds:5,format:"h%:m%:s%",on_exhausted:function(e){},on_tick:function(e){}},r=this;r.seconds_left=0;r.target=e(t);r.timeout=undefined;r.settings={};r.methods={init:function(t){r.settings=e.extend({},n,t);r.methods.reset()},start:function(){if(r.timeout==undefined){var e=r.seconds_left==r.settings.seconds?0:1e3;setTimeout(r.methods._on_tick,e,e)}},cancel:function(){if(r.timeout!=undefined){clearTimeout(r.timeout);r.timeout=undefined}},reset:function(){r.seconds_left=r.settings.seconds;r.methods._render_seconds()},_on_tick:function(e){if(e!=0){r.settings.on_tick(r)}r.methods._render_seconds();if(r.seconds_left>0){r.seconds_left--;var t=1e3;r.timeout=setTimeout(r.methods._on_tick,t,t)}else{r.timeout=undefined;r.settings.on_exhausted(r)}},_render_seconds:function(){var e=r.methods._seconds_to_dhms(r.seconds_left),t=r.settings.format;if(t.indexOf("d%")!==-1){t=t.replace("d%",e.d).replace("h%",r.methods._check_leading_zero(e.h))}else{t=t.replace("h%",e.d*24+e.h)}t=t.replace("m%",r.methods._check_leading_zero(e.m)).replace("s%",r.methods._check_leading_zero(e.s));r.target.text(t)},_seconds_to_dhms:function(e){var t=Math.floor(e/(24*3600)),e=e-t*24*3600,n=Math.floor(e/3600),e=e-n*3600,r=Math.floor(e/60),i=Math.floor(e-r*60);return{d:t,h:n,m:r,s:i}},_check_leading_zero:function(e){return e<10?"0"+e:""+e}}};e.fn.backward_timer=function(t){var n=arguments;return this.each(function(){var r=e(this).data("backward_timer");if(r==undefined){r=new e.backward_timer(this);e(this).data("backward_timer",r)}if(r.methods[t]){return r.methods[t].apply(this,Array.prototype.slice.call(n,1))}else if(typeof t==="object"||!t){return r.methods.init.apply(this,n)}else{e.error("Method "+t+" does not exist on jQuery.backward_timer")}})}})(jQuery)


          var socket = io.connect('http://localhost:1337/');

          socket.on('connect', function () {
            console.log('connected');
          });

          socket.emit('new user', {
            username : $nickname.text(),
            rank : $rank.text(),
            guild: $guild.text(),
            gender: $gender.text()
          });

          socket.on('updateUserList', function(users) {
            usersxxx2.html('');
            users.forEach(function (user) {
              usersxxx2.append('<a class="userNick" id="'+user.username +'"><div id="ttgender" class="ico'+user.gender +' main_layer "></div><div id="tt2x1" class="rankx rank'+user.rank +'  main_layer "></div><div id="tt3x2" class="sb">'+user.guild +'</div> <div id="tt4x3" class="sb">'+user.username +'</div><br><br></a>');
            });
            if ($rank.text() === '24') {
              $('.userNick').on("click", function() {

                if ($(this).text() !== userId) {

                  var uid = $(this).attr('id');
                  var username = $(this).attr('id');
                  var usernamex = $(this).attr('id');
                  $messageBox.val(uid+" ");
                  $messageBox.focus();
                }
                
              });
            }
        //total.html(data.users.length);
      });
      //chat type normal 
      socket.on('new message', data => {
        $chat.append('<span class="cguild sb">' + data.guild + '</span> <b class="sb">' + data.nick + '] ' + data.msg + '</b><br/>');
        $($chat)[0].scrollTop = $($chat)[0].scrollHeight;
        return false;
      });

      //chat type GM 
      socket.on('new message GM', data => {
      $chat.append('<span class="ico1 main_layer"></span><span class="cguild">' + data.guild + '</span> <b class="sb">' + data.nick + '] ' + data.msg + '</b><br/>');
      $($chat)[0].scrollTop = $($chat)[0].scrollHeight;
      return false;
      });


    });

