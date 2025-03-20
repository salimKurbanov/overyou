// Переменные
const methodList = document.querySelector('.method_list'); 
const links = document.querySelectorAll('.link');
const acordeon = document.querySelector('.acordeon')  
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

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