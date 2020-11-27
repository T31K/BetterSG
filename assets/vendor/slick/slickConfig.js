$(document).ready(function(){
    $('.carousel').slick({
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    })

    $('.about-carousel').slick({
        speed: 300,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    })
    
    $('.test').slick({
        arrow: false,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    })
})

// responsive: [
    // {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       arrows: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    //   // You can unslick at a given breakpoint now by adding:
    //   // settings: "unslick"
    //   // instead of a settings object
    // ]