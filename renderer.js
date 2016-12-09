window.$ = window.jQuery = require('jquery')
const remote = require('electron').remote;
const path = require('path');
const wallpaper = require('wallpaper');

//Notification
var opt = [];
var dir = '';
function notify(){
  if(opt != null){
    new Notification(opt[0].title, opt[0]);
  }
}
  $('#set').on('click', function(){
    wallpaper.set(dir).then(() => {
      notify()
    });
})

//Quit App Btn
 $('#closeApp').on('mouseover', function(){
   $('#textClose').fadeToggle();
 })
 $('#closeApp').on('mouseleave', function(){
   $('#textClose').fadeToggle();
 })
 $('#closeApp').on('click', function(){
   var window = remote.getCurrentWindow();
   window.close();
 })

//Hover img
$.each($('.wallpaper'), function(){
  $(this).on('mouseenter', function(){
    $(this).css('width', '320')
  })
  $(this).on('mouseleave', function(){
    $(this).css('width', '100')
  })
})

//OnClick img
$.each($('.wallpaper'), function(){
  $(this).on('click', function(){
    $('#displayFs').fadeToggle()
    $('#flou').fadeToggle()
    $('#displayFs').css('background', 'url(' + $(this).find('img').attr('src') + ') no-repeat center center /cover');
    opt = [{
              title: 'Done :)',
              body: 'Wallpaper ' + $(this).find('img').attr('src') + ' set !',
              icon: path.join(__dirname, $(this).find('img').attr('src'))
          }]
    dir = $(this).find('img').attr('src')
    $('#set').fadeIn('slow').show()
  })
})

$('#displayFs').on('click', function(){
  $('#displayFs').fadeToggle()
  $('#flou').fadeToggle()
  $('#set').fadeIn('slow').hide()
})

//width .content dynamic
var wallCount = $('.wallpaper').length
var wallTot = 115 * wallCount
$('.content').width(wallTot)

//Loader
setTimeout(function(){
    $('#loader').fadeToggle()
    clearInterval(addPoint);
}, 8000)

var addPoint = setInterval(function(){
    $('#textLoad').append('.')
}, 2000)
