body.on('click', function (event) {
    // console.log(event.target);

});


if ($("*").is(".gt-menu-news")) {
    $('.gt-menu-news').find('a').on('click', function (event) {
        event.preventDefault();
        $('.gt-menu-news').find('li').removeClass('gt-active');
        $(this).parent().addClass('gt-active');
        console.log('temp func')
    })

    // todo temp func
}


///////search-block
var searchBlock = $('#gt-search-block');
var searchBlockInput = $('#gt-search-block-input');


$('.gt-open-search').each(function () {
    $(this).on('click', function () {
        self.openSearchBlock()
    });
});

$('#gt-search-block-close').on('click', function () {
    self.closeSearchBlock();
});

searchBlockInput.on('blur', function () {
    self.showCrossInSearchBlock()
});
$('#gt-search-block-clear').on('click', function () {
    self.clearSearchBlockInput()
});


this.openSearchBlock = function () {
    self.fixBody();
    searchBlock.addClass('gt-open');
};
this.closeSearchBlock = function () {
    self.unfixBody();
    self.clearSearchBlockInput();
    searchBlock.removeClass('gt-open')
};


this.showCrossInSearchBlock = function () {
    if ($.trim(searchBlockInput.val())) {
        if (!searchBlockInput.hasClass('gt-dirty')) {
            searchBlockInput.addClass('gt-dirty')
        }
    } else {
        if (searchBlockInput.hasClass('gt-dirty')) {
            searchBlockInput.removeClass('gt-dirty')
        }
    }
};

this.clearSearchBlockInput = function () {
    searchBlockInput.val('');
    console.log(searchBlockInput.val());
    if (searchBlockInput.hasClass('gt-dirty')) {
        searchBlockInput.removeClass('gt-dirty')
    }
};