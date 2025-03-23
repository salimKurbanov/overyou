// Переменные
const methodList = document.querySelector('.method_list'); 
const links = document.querySelectorAll('.link');
const acordeon = document.querySelector('.acordeon')  
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const chat = document.querySelector('.chat_modal')
const tabContent = document.querySelector('.chat_modal .body .tab_content')
const chatTab = document.querySelector('.chat_modal .body .tabs')
const chatBtn = document.getElementById('chat_button')
const chatForm = document.getElementById('chat_form')
let type = ''


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
    closeChat()
});

const openChat = (e) => {
    e.stopPropagation()
    chat.classList.add('open')
}

const closeChat = () => {
    if(!chat.classList.contains('open')) return

    chatForm.reset()
    chat.classList.remove('open')
    tabContent.querySelectorAll('.form').forEach(item => item.classList.remove('active'))
    tabContent.style.height = `0px`
    chatTab.classList.remove('open')
}

const openChatTabs = (e) => {
    e.stopPropagation()
    
    const allTabs =  tabContent.querySelectorAll('.form')
    const hasActiveTab = Array.from(allTabs).some(tab => tab.classList.contains('active'));

    if(hasActiveTab) {
        allTabs.forEach(item => item.classList.remove('active'))
        tabContent.style.height = `0px`
        chatBtn.disabled = true;
        chatForm.reset()
    }

    chatTab.classList.add('open')
}

const switchChatTab = (e, name) => {
    e.stopPropagation()
    if(name == 'telegram') {
        type = 'telegram'
        chatTab.querySelector('.tab_title h5').textContent = 'Телеграм'
    } else {
        type = 'email'
        chatTab.querySelector('.tab_title h5').textContent = 'Email'
    }

    const tab = document.getElementById(`${name}_form`)

    tab.classList.add('active')

    chatBtn.disabled = false;

    const h = tab.offsetHeight

    tabContent.style.height = `${h}px`

    chatTab.classList.remove('open')
}

const sendForm = async (e) => {
    e.preventDefault()

    const formData = new FormData(chatForm)
    const data = {type: type}

    if(type == 'telegram') {
        data['telegram'] = formData.get('telegram')
        data['name'] = formData.get('name_telegram')
        data['message'] = formData.get('message_telegram')
    } else {
        data['email'] = formData.get('email')
        data['name'] = formData.get('name_email')
        data['message'] = formData.get('message_email')
    }

    // formData.forEach((value, key) => data[key] = value)
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

    console.log(data)

    try {
        const res = await fetch('/process_form/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken
            },
            body: JSON.stringify(data)
        })

        if(res.ok) {
            console.log(res)
        }
    } catch (err) {
        console.log(err)
    }
}