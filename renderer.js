window.$ = window.jQuery = require('jquery')

//Quit App Btn
 const remote = require('electron').remote;

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
    $('#displayFs').fadeToggle();
    $('#flou').fadeToggle();
    $('#displayFs').css('background', 'url(' + $(this).find('img').attr('src') + ') center center');
  })
})

$('#displayFs').on('click', function(){
  $('#displayFs').fadeToggle();
  $('#flou').fadeToggle();
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
