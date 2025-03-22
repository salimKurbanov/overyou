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

    new Splide('#over_you_slider', {
      type: 'fade',
      perPage: 1,
      arrows: false,
      pagination: true,
      rewind: true, 
  
    }).mount();

    new Splide('#about_slider', {
      type: 'fade',
      perPage: 1,
      arrows: true,
      pagination: false,
      rewind: false,
      breakpoints: {
          768: {
            arrows: false,
            pagination: true,
          }
      }
  
    }).mount();

    new Splide('#activities_slider_1', {
      // type: 'loop',
      // perPage: 1,
      arrows: true,
      pagination: false,
      rewind: false,
      gap: '40px',
      breakpoints: {
          991: {
            arrows: false,
          }
      }
  
    }).mount();
    new Splide('#activities_slider_2', {
      // perPage: 1,
      arrows: true,
      pagination: false,
      rewind: false,
      gap: '40px',
      breakpoints: {
          991: {
            arrows: false,
          }
      }
  
    }).mount();
    new Splide('#activities_slider_3', {
      arrows: true,
      pagination: false,
      rewind: false, 
      gap: '40px',
      breakpoints: {
          991: {
            arrows: false,
          }
      }
  
    }).mount();
});