$(document).ready(function() {
    const anchors = document.querySelectorAll('.buttonToBlock');
    $('.programs__slide').magnificPopup({
        type: 'iframe',
        // mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
    $('.works__slide').magnificPopup({
        type: 'iframe',
        // mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
    if (document.documentElement.clientWidth <= 1170) {
        $('.programs__slider').slick({
            infinite: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            centerMode: true,
        });
    }
    if (document.documentElement.clientWidth <= 1170) {
        $('.works__slider').slick({
            infinite: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            centerMode: true,
        });
    }
    $('.reviews__slider').slick({
        infinite: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: `
            <button class="reviews__slider-arrow reviews__slider-prev">
                <svg class="icon" width="7" height="11">
                    <use xlink:href="./img/sprite.svg#slider-arrow"></use>
                </svg>
            </button>
        `,
        nextArrow: `
            <button class="reviews__slider-arrow reviews__slider-next">
                <svg class="icon" width="7" height="11">
                    <use xlink:href="./img/sprite.svg#slider-arrow"></use>
                </svg>
            </button>
        `,
        responsive: [
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    variableWidth: true,
                }
            },
        ]
    });
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
        anchor.addEventListener('touched', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
});