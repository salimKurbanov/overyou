const scenaries_items = document.querySelectorAll('.scenaries_item');

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
        // fixedWidth : '160px',
        // fixedHeight: '240px',  
    
    }).mount();

    new Splide('#about_slider', {
        type: 'fade',
        perPage: 1,
        arrows: true,
        pagination: false,
        rewind: true,
        // fixedWidth : '160px',
        // fixedHeight: '240px',  
        breakpoints: {
            768: {
              arrows: false,
              pagination: true,
            }
        }
    
    }).mount();

    new Splide('#method_slider', {
        type: 'fade',
        perPage: 1,
        arrows: false,
        pagination: true,
        rewind: true,
        // fixedWidth : '160px',
        // fixedHeight: '240px', 
    }).mount();
});


const nature = document.querySelector('.nature_element_grid');
const nature_items = nature.querySelectorAll('.grid_item');
const main_element = nature.querySelector('.main_element');

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