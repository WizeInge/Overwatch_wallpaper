window.$ = window.jQuery = require('jquery')

//Hover img
$.each($('.wallpaper'), function(){
  $(this).on('mouseenter', function(){
    $(this).css('width', '320')
  })
  $(this).on('mouseleave', function(){
    $(this).css('width', '120')
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

//Loader
setTimeout(function(){
    $('#loader').fadeToggle()
    clearInterval(addPoint);
}, 8000)

var addPoint = setInterval(function(){
    $('#textLoad').append('.')
}, 2000)
