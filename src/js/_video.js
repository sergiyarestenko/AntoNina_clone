this.setMediaPlayer = function (el) {
    var controls = el.closest('.m-video-holder').find('.m-video-controls'),
        play = controls.find('.m-video-controls-play'),
        pause = controls.find('.m-video-controls-pause'),
        resize = controls.find('.m-video-controls-resize'),
        mute = controls.find('.m-video-controls-mute');


    el.mediaelementplayer({
        poster: el.data('img'),
        // When using jQuery's `mediaelementplayer`, an `instance` argument
        // is available in the `success` callback
        success: function (me, node, instance) {
            console.log(me);
            console.log(node);
            console.log(instance);

            play.on('click', function () {
                if(me.paused){
                    me.play();
                }else{
                    me.pause();
                }

            });

            resize.on('click', function () {
                me.setPlayerSize('100%', 'auto');

            });
            mute.on('click', function () {
                if(me.muted){
                    me.setMuted(false);
                }else{
                    me.setMuted(true);
                }
            });
            function setPlayerFullScreenSize(){
                console.log('setPlayerFullScreenSize')
                return("'100%', 'auto'")
            }

        }
    });




};

this.setMediaPlayerSrc = function () {
    var tag = document.createElement("script");
    tag.type = "text/javascript";
    tag.src = "./libs/mediaelement-and-player.js";
    var lastScriptTag = $("script")[0];
    lastScriptTag.parentNode.insertBefore(tag, lastScriptTag);
};


if ($("video").is(".m-video")) {
    $('.m-video').each(function () {
        self.setMediaPlayer($(this));
    })

}


