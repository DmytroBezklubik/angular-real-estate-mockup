$(window).on('load', function() {
    $('.carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        adaptiveHeight: true
    });
    $('.gallery-main').flickity({
        sync: '.gallery-nav',
        draggable: true,
        contain: true,
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true,
        setGallerySize: false
    });
    
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
    var $carousel = $('.carousel').flickity();


// previous
$('.right-side').on('click', function () {
    $carousel.flickity('next');
});

$('.left-side').on('click', function () {
    $carousel.flickity('previous');
});

// $('.featured-body').flickity({
//     autoPlay: false,
//     prevNextButtons: true,
//     pageDots: true,
//     draggable: true,
//     wrapAround: true,
//     selectedAttraction: 0.015,
//     friction: 0.25
// });


// FLICKITY SLIDER
//
//   Variables
//

// Play with this value to change the speed
let tickerSpeed = 0.5;

let flickity = null;
let isPaused = false;
const slideshowEl = document.querySelector('.js-slideshow');


//
//   Functions
//

const update = () => {
    if (isPaused) return;
    if (flickity.slides) {
        flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
        flickity.selectedIndex = flickity.dragEndRestingSelect();
        flickity.updateSelectedSlide();
        flickity.settle(flickity.x);
    }
    window.requestAnimationFrame(update);
};

const pause = () => {
    isPaused = true;
};

const play = () => {
    if (isPaused) {
        isPaused = false;
        window.requestAnimationFrame(update);
    }
};


//
//   Create Flickity
//
//////////////////////////////////////////////////////////////////////

flickity = new Flickity(slideshowEl, {
    autoPlay: false,
    prevNextButtons: true,
    pageDots: true,
    draggable: true,
    wrapAround: true,
    selectedAttraction: 0.015,
    friction: 0.25
});
flickity.x = 0;


//
//   Add Event Listeners
//
//////////////////////////////////////////////////////////////////////

slideshowEl.addEventListener('mouseenter', pause, false);
slideshowEl.addEventListener('focusin', pause, false);
slideshowEl.addEventListener('mouseleave', play, false);
slideshowEl.addEventListener('focusout', play, false);

flickity.on('dragStart', () => {
    isPaused = true;
});

//
//  Input + SumoSelect
//
///////////////////////////////////////////////////////////

// home 
$('#header .pfrom-select').change(function() {
    $('#header .pfrom-select option:selected').each(function(i) {
        $('#header input.pfrom-input').val($(this).val());
    });
});

$('#header .pto-select').change(function() {
    $('#header .pto-select option:selected').each(function(i) {
        $('#header input.pto-input').val($(this).val());
    });
});

// header -> navbar
$('#advanced-search .pfrom-select').change(function() {
    console.log('price');
    $('#advanced-search .pfrom-select option:selected').each(function(i) {
        $('#advanced-search input.pfrom-input').val($(this).val());
    });
});

$('#advanced-search .pto-select').change(function() {
    $('#advanced-search .pto-select option:selected').each(function(i) {
        $('#advanced-search input.pto-input').val($(this).val());
    });
});


//
//   Start Ticker
//
//////////////////////////////////////////////////////////////////////

update();

});
