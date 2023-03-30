import './styles/main.scss'

function Menu(e){
    let list = document.getElementById('menu');
    e.name === 'menu' ? (e.name = 'close', list.classList.remove('hidden'), list.classList.add('flex')): (e.name = 'menu', list.classList.add('hidden'), list.classList.remove('flex'))
}

window.Menu = Menu;