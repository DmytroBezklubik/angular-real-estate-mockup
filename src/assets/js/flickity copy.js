// external js: flickity.pkgd.js, flickity-sync.js
$(function () {
    $('.gallery-main').flickity({
        sync: '.gallery-nav',
        draggable: true,
        contain: true,
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true,
        setGallerySize: false
    });
});
$(function () {
    $('.gallery-nav').flickity({
        asNavFor: '.gallery-main',
        prevNextButtons: false,
        pageDots: false,
        contain: true,
        draggable: true,
        wrapAround: true,
        cellAlign: 'left',
        freeScroll: true
    });
});
$(function () {
    var $carousel = $('.carousel').flickity();

    // previous
    $('.right-side').on('click', function () {
        $carousel.flickity('next');
    });

    $('.left-side').on('click', function () {
        $carousel.flickity('previous');
    });
});
// $(function () {
//     // Play with this value to change the speed
//     let tickerSpeed = 0.8;
//     let flickity = null;
//     let isPaused = false;
//     const slideshowEl = document.querySelector('.js-slideshow');

//     //   Functions
//     const update = () => {
//         if (isPaused) return;
//         if (flickity.slides) {
//             flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
//             flickity.selectedIndex = flickity.dragEndRestingSelect();
//             flickity.updateSelectedSlide();
//             flickity.settle(flickity.x);
//         }
//         window.requestAnimationFrame(update);
//     };

//     const pause = () => {
//         isPaused = true;
//     };

//     const play = () => {
//         if (isPaused) {
//             isPaused = false;
//             window.requestAnimationFrame(update);
//         }
//     };

//     //   Create Flickity
//     flickity = new Flickity(slideshowEl, {
//         autoPlay: false,
//         prevNextButtons: true,
//         pageDots: true,
//         draggable: true,
//         wrapAround: true,
//         selectedAttraction: 0.015,
//         friction: 0.25
//     });
//     flickity.x = 0;

//     //   Add Event Listeners
//     slideshowEl.addEventListener('mouseenter', pause, false);
//     slideshowEl.addEventListener('focusin', pause, false);
//     slideshowEl.addEventListener('mouseleave', play, false);
//     slideshowEl.addEventListener('focusout', play, false);

//     flickity.on('dragStart', () => {
//         isPaused = true;
//     });
// });
// $(function () {
//     update();
// });


