document.addEventListener('DOMContentLoaded', function () {
    const stanislavSlider = document.querySelector('#stanislav_slider');
    if (stanislavSlider) {
        new Splide(stanislavSlider, {
            type: 'fade',
            perPage: 1,
            arrows: false,
            pagination: true,
            rewind: true, 
        }).mount();
    }

    const waterSlider = document.querySelector('#water_slider');
    if (waterSlider) {
        new Splide(waterSlider, {
            type: 'fade',
            perPage: 1,
            arrows: false,
            pagination: true,
            rewind: true,
        }).mount();
    }
});