import './styles/main.scss'

function Menu(e){
    let list = document.getElementById('menu');
    e.name === 'menu' ? (e.name = 'close', list.classList.remove('hidden')): (e.name = 'menu', list.classList.add('hidden'))
}

window.Menu = Menu;