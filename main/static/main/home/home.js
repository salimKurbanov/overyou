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