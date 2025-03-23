// Переменные
const methodList = document.querySelector('.method_list'); 
const links = document.querySelectorAll('.link');
const acordeon = document.querySelector('.acordeon')  
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const tabContent = document.querySelector('.chat_modal .body .tab_content')

// Функция для остановки всплытия события (stopPropagation)
const stopPropagation = (e) => {
    e.stopPropagation();
}

// Функция для открытия/закрытия списка методов
const openMethodList = (e) => {
    e.stopPropagation(); 
    links.forEach(link => link.classList.toggle('disabled')); 
    methodList.classList.toggle('active'); 
}

// Функция для закрытия всего списка
const closeList = () => {
    methodList.classList.remove('active') 
    links.forEach(link => link.classList.remove('disabled'));
    acordeon.classList.remove('active') 
}

// Функция для открытия/закрытия аккордеона
const openHeaderAcordeon = () => {
    acordeon.classList.toggle('active') 
}


const openPanel = (e) => {
    e.stopPropagation()
    menu.classList.remove('close')
    menu.classList.add('open')
}

const closePanel = () => {
    if(menu.classList.contains('open')) {
        menu.classList.add('close')
        menu.classList.remove('open')
    }
}

// Закрытие по клику в пустую область
window.addEventListener('click', () => {
    closeList(); 
    closePanel()
});

const openChatTabs = (e) => {
    e.stopPropagation()
    const container = e.currentTarget.closest('.tabs')
    
    const allTabs =  tabContent.querySelectorAll('.form')
    const openClass = Array.from(allTabs).every(item => item.classList.contains('active'));
    console.log(allTabs)
    if(openClass) {
        allTabs.forEach(item => item.classList.remove('active'))
        tabContent.style.height = `0px`
    }

    container.classList.add('open')
}

const switchChatTab = (e, name) => {
    e.stopPropagation()
    const container = e.currentTarget.closest('.tabs')
    if(name == 'teltegram') {
        container.querySelector('.tab_title h5').textContent = 'Телеграм'
    } else {
        container.querySelector('.tab_title h5').textContent = 'Email'
    }

    const tab = document.getElementById(`${name}_form`)

    tab.classList.add('active')

    const h = tab.offsetHeight

    tabContent.style.height = `${h}px`

    container.classList.remove('open')
}