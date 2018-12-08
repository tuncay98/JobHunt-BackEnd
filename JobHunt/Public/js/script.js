/* =================================
            Preloader
==================================== */

$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

/* =================================
            Featured Jobs
==================================== */

$('.fav-job').on('click', function() {
    $(this).toggleClass('active');
});

/* =================================
            Slick Slader
==================================== */

$(function() {
    $("#reviews-carousel").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slide: 'div',
        fade: false,
        infinite: true,
        pauseOnFocus: true,
    });
});

/* =========================================
              Navigation
============================================ */

/* Show & Hide White Navigation */
$(function() {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function() {

        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            // Show white nav
            $(".home-header nav").addClass("white-nav-top");

            // Show dark logo
            $(".home-header .navbar-brand img").attr("src", "http://placehold.it/178x40");

            // Show back to top button
            $("#back-to-top").fadeIn();

        } else {

            // Hide white nav
            $(".home-header nav").removeClass("white-nav-top");

            // Show logo
            $("home-header .navbar-brand img").attr("src", "http://placehold.it/178x40");

            // Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

/* =========================================
              Mobile Menu
============================================ */

$(function() {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function() {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
        $("#mobile-nav").css("height", "0%");
    });

});

/* =================================
            Scroll Up
==================================== */

$(function() {
    $('.scrollup').click(function() {
        $('html,body').animate({
            scrollTop: $('#home').offset().top
        }, 1500);
    });
});

/* =================================
            Account Popup
==================================== */

$(function() {

    $('.signin-popup').on('click', function() {
        $('.signin-popup-box').fadeIn('fast');
        $('html').addClass('no-scroll');
    });
    $('.close-popup').on('click', function() {
        $('.signin-popup-box').fadeOut('fast');
        $('html').removeClass('no-scroll');
    });

    /* Signup Popup */
    $('.signup-popup').on('click', function() {
        $('.signup-popup-box').fadeIn('fast');
        $('html').addClass('no-scroll');
    });
    $('.close-popup').on('click', function() {
        $('.signup-popup-box').fadeOut('fast');
        $('html').removeClass('no-scroll');
    });
    
});