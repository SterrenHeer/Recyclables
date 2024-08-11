$.get('header.html',function(response){ 
    $('.header').html(response);
    $('.burger_button, .burger_close, .burger a, .burger button').click(() => {
        $('.burger').toggleClass('flex');
    });
});
