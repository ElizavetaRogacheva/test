$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        navClass: ['.testimonials-prev', '.testimonials-next'],
        responsive: {
            320: {
                items: 1 
            },
            800: {
                items: 3
            },
            1200: {
                items: 3,
                nav: true
            }
        }
    });
  });

  