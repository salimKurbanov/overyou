const methodList = document.querySelector('.method_list');
const links = document.querySelectorAll('.link');

const stopPropagation = (e) => {
    e.stopPropagation();
}

const openMethodList = (e) => {
    e.stopPropagation();
    links.forEach(link => link.classList.toggle('disabled'));
    methodList.classList.toggle('active');
}

const openHeaderAcordeon = () => {
    const acordeon = document.querySelector('.acordeon')
    acordeon.classList.toggle('active')
}

window.addEventListener('click', () => {
    methodList.classList.remove('active')
})