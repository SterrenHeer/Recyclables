$.get('header.html',function(response){ 
    $('.header').html(response);
    $('.burger_button, .burger_close, .burger a, .burger button').click(() => {
        $('.burger').toggleClass('flex');
    });
    $(window).on( "resize", () => {
        $('.burger').removeClass('flex');
    });
    $(window).on( "resize scroll", () => {
        $('.header_dropdown :checked').prop('checked', false);
    });
    $('.header_dropdown a').click(() => {
        $('.header_dropdown :checked').prop('checked', false);
    });
    document.addEventListener('click', outsideClickListener)
    function outsideClickListener ({ target }) {
        let dropdowns = []
        document.querySelectorAll('.header_dropdown').forEach((element) => {
            dropdowns.push(element)
        })
        let contains = dropdowns.some((element) => element.contains(target))
        if (!contains) {
            $('.header_dropdown :checked').prop('checked', false);
        } 
    }
    if (document.querySelector('.consult') != null) {
        modal('[data-modal]', 'data-close', '.consult');
        modal('[data-thanks]', 'data-close', '.thanks');
    }
    $('input[name="phone"]').mask("+375 (99) 999-99-99");
});
$.get('footer.html',function(response){ 
    $('.footer').html(response);
    if (document.querySelector('.consult') != null) {
        modal('[data-modal]', 'data-close', '.consult');
        modal('[data-thanks]', 'data-close', '.thanks');
    }
});

$('input[name="phone"]').mask("+375 (99) 999-99-99");

// let baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
// let newUrl = baseUrl + '?utm_source=yandex&utm_medium=cpc&utm_campaign=%7Bcampaign_name_lat%7D&utm_content=%7Bad_id%7D&utm_term=%7Bkeyword%7D';
// history.pushState(null, null, newUrl);

let utms_names = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

utms_names.forEach(name => {
    let utm_inputs = document.querySelectorAll(`.${name}`);
    utm_inputs.forEach(input => {
        input.value = new URL(window.location.href).searchParams.get(`${name}`);
    });
});  
$( ".addresses_item" ).on( "click", function() {
    let link = `https://yandex.ru/map-widget/v1/?ll=${$( this ).attr('data-1')}%2C${$( this ).attr('data-2')}&z=12`
    document.querySelector('.addresses_map').setAttribute('src', link)
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

if (document.querySelector('.addresses_items') != null) {
    tabs('.addresses_header', '.addresses_items', '.addresses_headers', 'active');
}

if (document.querySelector('.consult') != null) {
    modal('[data-modal]', 'data-close', '.consult');
    modal('[data-thanks]', 'data-close', '.thanks');
}

$("form").submit(function (event) {
    event.preventDefault();
    let name = event.target.classList.value.slice(0, -5);
    let formData = new FormData(event.target);
    sendPhp(name, formData);
});

function sendPhp(name, data) {
    $.ajax({
        url: `./php/send_telegram.php`,
        type: 'POST',
        cache: false,
        data: data,
        dataType: 'html',
        processData: false,
        contentType: false,
        success: function (data) {
            $(`.${name}_form`).trigger('reset');
            if (name == 'consult') {
                closeModal(`.${name}`)
            }
            openModal('.thanks');
            setTimeout(function(){
                closeModal('.thanks');
            },5000)
        }
    });
}
