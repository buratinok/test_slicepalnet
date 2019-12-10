
//slick carousel
const slickEquipment = function () {
    $(function () {
         $('.slider .slider__nav').slick({
            centerMode: true,
            arrows:true,
             dots: true,
            centerPadding: '0',
            adaptiveHeight: true,
            mobileFirst: false,
            slidesToShow: 1,
             nextArrow: `<a class="btn btn-light slick-slider__next position-absolute border rounded-circle px-3 py-2" role="button">
            <i class="text-info fas fa-angle-left"></i>
            <span class="sr-only">Next</span>
            </a>`,
             prevArrow: `<a class="btn btn-light slick-slider__prev position-absolute border rounded-circle px-3 py-2" role="button">
            <i class="text-info fas fa-angle-right"></i>
            <span class="sr-only">Previous</span>
            </a>`,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        centerPadding: '0px',
                        variableWidth: true,
                        respondTo: 'window',
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        centerPadding: '0px',
                        variableWidth: false,
                        slidesToShow: 1,
                        vertical: true,

                    }
                }
            ]
        });
    });

}

export default slickEquipment;