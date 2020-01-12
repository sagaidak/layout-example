$(function () {

    /* Fixed Header */
    let header = $('#header');
    let intro = $('#intro');
    let introHeight = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function () {
        introHeight = intro.innerHeight();
        scrollPos = $(window).scrollTop();

        if (scrollPos > introHeight) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    });

    /* Smooth Scroll */
    $("[data-scroll]").on('click', function (e) {
        e.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        console.log(elementId);
        console.log(elementOffset);

        $('html, body').animate({
            scrollTop: elementOffset - 50
        });
    });

    /* Burger Nav Toggle*/
    $('#navToggle').on('click', function () {
        $('#nav').toggleClass('show');
    });

    /* Testimonials Slider */
    let slider = $('#tSlider');

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
});