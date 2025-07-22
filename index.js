const menu = document.querySelector('.menu')
const itens = document.querySelector('.itens')

const buttonPopup = document.querySelector('#popup')
const modal = document.querySelector('dialog')
const x = document.querySelector('#x')
function clickMenu() {
    menu.classList.toggle('ativo')
    itens.classList.toggle('ativado')
}

function abrirPopup() {
    modal.showModal()
}

function fecharPopup(){
    modal.close()
}
