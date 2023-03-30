import './styles/main.scss'

function Menu(e){
    e.name === 'menu' ? e.name = 'close': e.name = 'menu'
}

window.Menu = Menu;