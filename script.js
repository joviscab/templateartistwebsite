$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 1
                }
            }
        ]
    });

 // Código JavaScript para animação suave de rolar para a âncora
    $('a[href^="#"]').on('click', function(e){
        e.preventDefault();

        let target = $(this).attr('href');
        if ($(target).length) {
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 800);
        }
    });
});