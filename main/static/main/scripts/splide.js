document.addEventListener('DOMContentLoaded', function () {
    new Splide('#main_slider', {
        // type: 'loop', 
        // perPage: 6,
        arrows: false,
        pagination: false,
        fixedWidth : '160px',
        fixedHeight: '240px',
        gap: '40px',
        breakpoints: {
            640: {
              gap: '20px',
            },
          },
    }).mount();
});