import './styles/main.scss'

function Menu(e){
    let list = document.getElementById('menu');
    e.name === 'menu' ? (e.name = 'close'): (e.name = 'menu')
}

window.Menu = Menu;