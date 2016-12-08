//Quit App Btn
const remote = require('electron').remote;
window.$ = window.jQuery = require('jquery')

const closeAppBtn = document.getElementById('closeApp')
closeAppBtn.addEventListener('click', function(){
  console.log("closeApp")
  var window = remote.getCurrentWindow();
  window.close();
})

//Hover img
$.each($('.wallpaper'), function(){
  $(this).on('mouseenter', function(e){
    console.log(e);
    $(this).css('width', '250')
  })
  $(this).on('mouseleave', function(e){
    console.log(e);
    $(this).css('width', '120')
  })
})
