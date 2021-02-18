var $videohover = $('.videohover')
$videohover.on('mouseenter focus', function(){
    $videohover.get(0).play();
});

$videohover.on('mouseout blur', function(){
    $videohover.get(0).pause();
});