const quadrado = document.querySelector('.square')
const radius = document.querySelectorAll('input')


radius.forEach((input) => {
    input.addEventListener('input', ({target}) => {onChangeInput(target)})
})

function onChangeInput(target) {
    switch (target.getAttribute('id')) {
        case "topL":
            quadrado.style.borderTopLeftRadius = target.value + 'px'
            break
        case "topR":
            quadrado.style.borderTopRightRadius = target.value + 'px'
            break
        case "botL":
            quadrado.style.borderBottomLeftRadius = target.value + 'px'
            break
        case "botR":
            quadrado.style.borderBottomLeftRadius = target.value + 'px'
            break
    }
}