const nature = document.querySelector('.nature_element_grid');
const nature_items = nature.querySelectorAll('.grid_item');
const main_element = nature.querySelector('.main_element');
const scenaries_items = document.querySelectorAll('.scenaries_item');
const tabs = document.querySelectorAll('.tab')
let intervalId; // Глобальная переменная для хранения ID
const sliders = {
    1: document.getElementById('activities_slider_1'),
    2: document.getElementById('activities_slider_2'),
    3: document.getElementById('activities_slider_3'),
}

// Функция открытия сценариев
const openDescription = (e) => {
    const parentElement = e.target.closest('.scenaries_item') // Находим выбраный элемент
    const windowWidth = window.innerWidth

    if(parentElement.classList.contains('e') || parentElement.classList.contains('g')) return //Если элемент имеет класс e или g то ничего не делаем

    if(windowWidth > 768) { //Определяем ширинуэкрана
        // На всех устройствах больше телефона
        if(!parentElement.classList.contains('active')) {
          scenaries_items.forEach(item => item.classList.remove('active'))
          parentElement.classList.add('active')
        }
      } else{
        // Если на телефоне
        scenaries_items.forEach(item => item.classList.remove('active'))
        parentElement.classList.add('active')
    }
}

// Переключение сценариев
const switchDescription = () => {

    const main_scenaries = document.querySelectorAll('.scenaries_item.main')
    const secondary_scenaries = document.querySelectorAll('.scenaries_item.secondary')

    const randomMainIndex = Math.floor(Math.random() * main_scenaries.length);
    const randomMainElement = main_scenaries[randomMainIndex]

    const randomSecondaryIndex = Math.floor(Math.random() * secondary_scenaries.length);
    const randomSecondaryElement = secondary_scenaries[randomSecondaryIndex]

    if(randomMainElement.classList.contains('active')) {
        switchDescription()
        return
    }

    const mainAttribute = randomMainElement.getAttribute('data-id')
    const secondaryAttribute = randomSecondaryElement.getAttribute('data-id')

    randomMainElement.classList.remove('main')

    setTimeout(() => {
      randomMainElement.setAttribute('data-id', secondaryAttribute)
      randomMainElement.classList.remove(mainAttribute)
      randomMainElement.classList.add('secondary')
      randomMainElement.classList.add(secondaryAttribute)
  
      randomSecondaryElement.setAttribute('data-id', mainAttribute)
      randomSecondaryElement.classList.remove('secondary')
      randomSecondaryElement.classList.remove(secondaryAttribute)
      randomSecondaryElement.classList.add('main')
      randomSecondaryElement.classList.add(mainAttribute)  
    }, 2000)
}

// Идентификатор интервала
const interval = () => {
  intervalId = setInterval(switchDescription, 3000);
};

// Запуск интервала
interval(); 

// Остановка интервала
const stopSwitch = () => {
  const windowWidth = window.innerWidth

  if(windowWidth > 991) {
    clearInterval(intervalId); 
  }
};

// Запуск интервала
const startSwitch = () => {
  const windowWidth = window.innerWidth

  if(windowWidth > 991) {
    intervalId = setInterval(switchDescription, 3000); 
  }
}

// Переключение табов
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

// Слайдеры
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