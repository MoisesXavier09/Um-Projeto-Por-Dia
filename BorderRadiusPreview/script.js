const quadrado = document.querySelector('.quadrado')
const radius = document.querySelectorAll('input')


radius.forEach((input) => {
    input.addEventListener('input', ({target}) => {onChangeInput})
})

function onChangeInput(target) {
    return console.log(target);
    // switch (target.getAttribute('id')) {
    //     case "topE":
    //         quadrado.style.borderTopLeftRadius = target.value + 'px'
    //         break
    //     default:
    //         console.log('banana');
    // }
}