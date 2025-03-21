const scenaries_items = document.querySelectorAll('.scenaries_item');

const openDescription = (e) => {
    const parentElement = e.target.closest('.scenaries_item')
    if(!parentElement.classList.contains('active') && !parentElement.classList.contains('e') && !parentElement.classList.contains('g')) {
        scenaries_items.forEach(item => item.classList.remove('active'))
        parentElement.classList.add('active')
    }
}