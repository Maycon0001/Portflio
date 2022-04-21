const $html = document.querySelector('html')
const $checkbox = document.querySelector('#flexSwitchCheckDefault')

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})