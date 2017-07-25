 var pseudo = prompt ("votre pseudo");
var reponse =["salut" , "sa va et toi","moi, c'est eva enchanté ","moi ? nan toi d'abord","j'ai 35 ans","dis moi tous"];
var index = 0;
jQuery(function ($) {


$('.envoi').submit(function(tchat){
  if (messageClear !== "") {


    var message =$('#messageEnvoyer').val();
    var messageClear = message.trim();
$('#affichage').append('<img src="img/roko.jpg">'+'<p>'+ pseudo +" " +":"+" "+ message +'</p>');
$('#messageEnvoyer').val("");
setTimeout(function () {

$('#affichage').append('<img src="img/eva.jpg">'+'<p>'+"eva longoria"+" "+":"+" "+ reponse[index] +'</p>');
index++;
}, 2000);





}
return false
})
});
