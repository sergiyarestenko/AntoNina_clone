this.columnPartnership = function () {
    $("#gt-partnership").addClass('gt-partnership-column');
};
this.rowPartnership = function () {
    $("#gt-partnership").removeClass('gt-partnership-column');
};


if ($("*").is("#gt-partnership")) {
    $('#gt-partnership-row').on('click', self.rowPartnership)
    $('#gt-partnership-column').on('click', self.columnPartnership)
    if ($("*").is("#gt-partnership-menu")) {
        $("#gt-partnership-menu").find('div').each(function () {
            $(this).on('click', function () {
                self.scrollToArticle($(this).attr('data-href'));
            });
        });
    }
}
