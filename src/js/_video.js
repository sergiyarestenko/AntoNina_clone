this.setPlayers = function (el) {

    if (el.hasClass('gt-video-pop')) {
        self.setPopPlayer(el)
    } else {
        self.setStaticPlayer(el)
    }


};


this.setPopPlayer = function (el) {
    el.find(".gt-video-switch").on("click", function () {
        self.fixBody();
        var bodyWrapper = $("#gt-body-wrapper");
        bodyWrapper.append('' +
            '<div id = "gt-youtube-wrapper"   class="gt-youtube-wrapper container test">' +
            '<div id = "gt-youtube-close" class = "gt-slider-clone-close"></div>' +
            '<div id = "gt-youtube" class="gt-youtube test1"></div></div>');
        self.createPopVideo(el);


        bodyWrapper.show();

    });
};

this.createPopVideo = function (el) {
    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('gt-youtube', {
            width: 600,
            height: 400,
            videoId: el.attr("data-youtube"),
            playerVars: {
                playlist: el.attr("data-youtube"),
                color: "white",
                loop: 1,
                autoplay: 1
                // disablekb: 0,
                // controls: 0
            },
            events: {
                onReady: initialize
            }
        });
    }

    onYouTubeIframeAPIReady();

    function initialize() {
        player.mute();
        player.playVideo();


    }

    $('#gt-youtube-close').on('click',function () {
        self.destroyPopVideo(player);
    });

};

this.destroyPopVideo = function (player) {
    $('#gt-youtube-close').off();
    $('#gt-youtube-wrapper').remove();
    player.destroy();
    $("#gt-body-wrapper").hide();
}



this.setStaticPlayer = function (el) {
    el.find(".gt-video-switch").on("click", function () {
        $(this).addClass("gt-open");
        el.addClass("gt-open");
        self.addYouTube(el);
    });
};


this.addYouTube = function (el) {
    var player,
        elId = "gt-video-" + el.index();

    el.find(".gt-video-switch").hide('slow');

    el
        .find(".gt-video-inner")
        .attr("id", elId)
        .addClass("gt-video-foreground");

    function onYouTubeIframeAPIReady() {
        player = new YT.Player(elId, {
            width: 600,
            height: 400,
            videoId: el.attr("data-youtube"),
            playerVars: {
                playlist: el.attr("data-youtube"),
                color: "white",
                loop: 1,
                autoplay: 1
                // disablekb: 0,
                // controls: 0
            },
            events: {
                onReady: initialize
            }
        });
    }

    onYouTubeIframeAPIReady();

    function initialize() {
        player.mute();
        player.playVideo();
        el.addClass("gt-video-on");
        el.find(".gt-video-uncover").on('click', playFullScreen);
        el.find(".gt-video-pause").on('click', function () {
            player.pauseVideo();
        });
        el.find(".gt-video-play").on("click", function () {
            player.playVideo();
        });
    }

    function playFullScreen() {
        console.log('playFullScreen');
        var iframe = el.find('iframe')[0];
        var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
        if (requestFullScreen) {
            requestFullScreen.bind(iframe)();
        }
    }

};


if ($("div").is(".gt-video")) {
    var tag = document.createElement("script");
    tag.type = "text/javascript";
    tag.src = "https://www.youtube.com/player_api";
    var lastScriptTag = $("script")[$("script").length - 1];
    lastScriptTag.parentNode.insertBefore(tag, lastScriptTag);
    $('.gt-video').each(function () {
        self.setPlayers($(this));
    })

}