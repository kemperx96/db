$(document).ready(function(){
 
    var janelas =  new Array();
    
    function abrir_janelas(x){
        $(".useritem a ").each(function(){
           var link = $(this);
           var id = link.attr('id');
           if(id === x){
               link.click();
           }
        });
    }
    

    function verificar_msgs(){
        setInterval(function(){
            
            $.post('mensagens.php',{action:'verificar'},function(data){
             if(data !== ''){
                 for(i in data){
                    abrir_janelas(data[i]);
                    $(".miniwindow").scrollTop($(".miniwindow")[0].scrollHeight); 
                }                   
            }else{} 
        },'Json');
            
        },1000);
    }
    verificar_msgs();
    
    $("#janelas").on('click',function(){
        $.post('mensagens.php',{action:'ler_msg'},function(data){
         if(data !== ''){
             $(".miniwindow").addClass('lida') ;
             $(".miniwindow ").scrollTop($(".miniwindow" )[0].scrollHeight);               
         }else{} 
     },'Json');
    });
    //<span class="rank rank rank20"></span> 
    //<a href="javascript:void(0);"<div class="chatDialogProfile lobby2"></div></a>
    function add_janelas(uid,username){
        var html_add='<div class="miniwindow main_layer" id="jan_' + uid + '"><div class="usernametop" id="' + uid + '"><font color="white">' + username + '</font><a href="javascript:void(0);" class="fechar lobby2" ></a></div><div class="corpo"><div class="mensagens"><div class="listar"></div></div></div><input type="text" class="msgbox" id="' + uid + '"  maxlength="150" /></div>';
        
        $("#janelas").append(html_add);
        $( '#jan_' + uid + '' ).draggable();
    }
    //var miniwindow = 
    
    $(".useritem").on('click',function(){

        if($(this).children('a').attr('class') === 'comecar'){
            var uid = $(this).children('a').attr('id');
            var username = $(this).children('a').html();            
            janelas.push(uid);
            
            for (var i = 0; i < janelas.length; i++) {
                if (janelas[i] === undefined) {         
                  janelas.splice(i, 1);
                  i--;
                   $(".miniwindow").scrollTop($(".miniwindow")[0].scrollHeight); 
              }
          }
          $(this).children('a').removeClass('comecar');
          add_janelas(uid,username);
             $(".miniwindow").scrollTop($(".miniwindow")[0].scrollHeight); 
          return false;
      }
      
      
  });



    $("body").delegate('a.fechar','click',function(){
       
        $(this).parent().parent().hide();
         var id = $(this).parent().attr('id');
          $(".useritem").children('a#'+id).addClass('comecar')
         $(".miniwindow #" + id).hide();
         var n = janelas.length;
         for(i=0;i<n;i++){
             if(janelas[i] !== undefined){
                alert("!");
                 if(janelas[i] === id){
                     delete janelas[i];
                     alert("2");
            //$.post('server2.php',{
            //        id: id,
            //    },function(data){  
            //    });
                         
                 }
             }
         }
          
    });
    



     $('body').delegate(".msgbox",'keydown',function(e){
         //alert(e.keyCode);
        var campo = $(this);
        var mensagem  =  campo.val();
        var to = $(this).attr('id');
        var rank = $(this).attr('rank');
        if(e.keyCode === 13){
            if($.trim(mensagem) !== ''){
                $.post('mensagens.php',{
                    mensagem: mensagem,
                    id_para: to,
                    action:'insert'
                },function(data){
                  //console.log("--- " + data + " ---");
                    $("#jan_"+to+" .mensagens .listar").append(data);
                    campo.val('');
                     $(".miniwindow").scrollTop($(".miniwindow")[0].scrollHeight);      
                });
            }else{
                 $("#mensagem").val();
            }
        }
    });
    
    setInterval(function(){
        $.post('mensagens.php',{
            action:'retrieve',
            array:janelas
        },function(data){
            if(data !== ''){
                for(i in data){
                    $("#jan_"+i+" .mensagens .listar").html(data[i]);
    $(' .mensagens').scrollTop($('.mensagens')[0].scrollHeight);
       $(".miniwindow").scrollTop($(".miniwindow")[0].scrollHeight); 
                }
            }else{
                console.log(data + "ERRRO");
            }
        },'Json');
    },1000);
    
    
    
});
