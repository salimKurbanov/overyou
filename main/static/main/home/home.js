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
