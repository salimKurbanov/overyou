document.addEventListener('DOMContentLoaded', function () {
    new Splide('#stanislav_slider', {
        type: 'fade',
        perPage: 1,
        arrows: false,
        pagination: true,
        rewind: true, 
    
    }).mount();
});
