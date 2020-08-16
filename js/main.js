$(function () {


    // navbar toggle
    $('.navbar-toggler').click(function () {
        $('.navbar-toggler').toggleClass('change');
    });

    // sticky nabvar less padding
    $(window).scroll(function () {

        let position = $(this).scrollTop();
        if (position >= 718) {
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
        }

    })


    // back-to-top

    $(window).scroll(function () {

        let position = $(this).scrollTop();
        if (position >= 718) {
            $('#back-to-top').addClass('scrolltop');

        } else {
            $('#back-to-top').removeClass('scrolltop');

        }

    })

    //smooth scroll

    $('.nav-item a, .header-link, #back-to-top').click(function (link) {
        link.preventDefault();

        let target = $(this).attr('href');

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - 25
        }, 3000);
    })




    $("#header, .info").ripples({
        dropRadius: 25,
        perturbance: 0.6,

    });
});

// magnificPopup
$(function () {
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        }
    });

});





