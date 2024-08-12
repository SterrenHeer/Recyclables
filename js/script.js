$.get('header.html',function(response){ 
    $('.header').html(response);
    $('.burger_button, .burger_close, .burger a, .burger button').click(() => {
        $('.burger').toggleClass('flex');
    });
});
$.get('footer.html',function(response){ 
    $('.footer').html(response);
});

if (document.querySelector('.reviews_sub_field') != null) {
    slider({
        containerSelector: '.reviews_sub .container',
        slideSelector: '.reviews_sub_slide',
        nextSlideSelector: '.reviews_sub_next',
        prevSlideSelector: '.reviews_sub_prev',
        wrapperSelector: '.reviews_sub_wrapper',
        fieldSelector: '.reviews_sub_field',
        indicatorsClass: 'reviews_sub_indicators',
        elementsPerPage: 4, 
        elementsPerPageMobile: 1,
        columnGap: 1.458,
        swipe: true,
    });
}
