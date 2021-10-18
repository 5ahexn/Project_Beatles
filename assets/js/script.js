$(document).ready(function() {
    // navigation bar toggle
    $('#navbar-toggler').click(function() {
        $('.navbar-collapse').slideToggle(44);
    })
})

//navbar bg change on scroll
$(window).scroll(function() {
    let pos = $(window).scrollTop();
    if (pos > 100) {
        $('.navbar').addClass('cng-navbar');
    } else {
        $('.navbar').removeClass('cng-navbar');
    }
})