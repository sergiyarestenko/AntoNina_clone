this.deskTopMenuScroll = function () {
    if (docWindow.scrollTop() > gtHeader.outerHeight()) {
        gtHeader.addClass("gt-header-scrolled");
    } else {
        gtHeader.removeClass("gt-header-scrolled");
    }
};


if ($("*").is(".gt-top-plane")) {
    $('.gt-header').addClass('gt-header-plane-top')
};