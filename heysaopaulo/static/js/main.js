$(function () {
    $('.container').fitVids();
    $('#navspy').bind('click', 'ul li a', function(event) {
        $.scrollTo(event.target.hash, 250);
        event.preventDefault();
    });
});
