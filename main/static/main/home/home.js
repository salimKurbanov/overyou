const nature = document.querySelector('.nature_element_grid');
const nature_items = nature.querySelectorAll('.grid_item');
const main_element = nature.querySelector('.main_element');
const scenaries_items = document.querySelectorAll('.scenaries_item');
const tabs = document.querySelectorAll('.tab')
const sliders = {
    1: document.getElementById('activities_slider_1'),
    2: document.getElementById('activities_slider_2'),
    3: document.getElementById('activities_slider_3'),
}

const openDescription = (e) => {
    const parentElement = e.target.closest('.scenaries_item')
    const windowWidth = window.innerWidth

    if(parentElement.classList.contains('e') || parentElement.classList.contains('g')) return

    if(windowWidth > 768) {
        if(!parentElement.classList.contains('active')) {
            scenaries_items.forEach(item => item.classList.remove('active'))
            parentElement.classList.add('active')
        }
    } else{
        parentElement.classList.toggle('active')
    }
}

const switchTab = (event, number) => {
    if(event.target.classList.contains('active')) return

    tabs.forEach(item => item.classList.remove('active'))
    Object.values(sliders).forEach(item => item.classList.remove('active'))
    
    event.target.classList.add('active')
    sliders[number].classList.add('active')
}

const openNatureElement = (e, name) => {
    e.stopPropagation()

    e.currentTarget.classList.toggle('open')

    nature_items.forEach(item => {
        if(item !== e.currentTarget) item.classList.remove('open')
    })
    
    const noOpenClass = Array.from(nature_items).every(item => !item.classList.contains('open'));
    
    if(noOpenClass) {
        main_element.className = 'main_element';
    } else {
        main_element.className = `main_element ${name}`
    }
}

window.addEventListener('click', () => {
    const noOpenClass = Array.from(nature_items).every(item => !item.classList.contains('open'));

    if(noOpenClass) return

    nature_items.forEach(item => item.classList.remove('open'))
    main_element.className = 'main_element';
})

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#main_slider', {
        // type: 'loop', 
        // perPage: 6,
        arrows: false,
        pagination: false,
        fixedWidth : '160px',
        fixedHeight: '240px',
        drag: false,
        gap: '40px',
        breakpoints: {
            640: {
              gap: '20px',
            },
            992: {
              drag: true
            }
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

    new Splide('#method_slider', {
        type: 'fade',
        perPage: 1,
        arrows: false,
        pagination: true,
        rewind: true,
    }).mount();
});