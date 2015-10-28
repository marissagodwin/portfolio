var $btn = $('.btn-video');
var $video = $('.aw-video').get(0);

$btn.on('click', function () {
    $video.pause();
    
});