const input = document.querySelector('#input')
const alert = document.querySelector('.alert')
const btn = document.querySelector('#btn')
const result = document.querySelector('.result')

input.addEventListener('keydown', (e) => {
    // const keyCode = e.keyCode ||  e.wich
    // if (keyCode !== 48 && keyCode !== 49 && keyCode !== 8 && keyCode !== 46 && keyCode !== 37 && keyCode !== 39)
    //     e.preventDefault()
    if (Number(e.key) > 1 )
        e.preventDefault()

    if (input.value.length > input.maxLength)
        input.value = input.value.slice(0, input.maxLength)
})

btn.addEventListener('click', () => {
    if (input.value.length > 8){
        alert.innerText = "Erro! Passou de 8 dígitos, só é permitido 8 dígitos no campo."
    }
    value = parseInt(input.value, 2)
    if (isNaN(value)) {
        alert.innerText = "Erro! Apenas é permitido dígitos de 0 e 1."
        result.innerText = "Resultado: " 
    } else {
        alert.innerText = ""
        result.innerText = "Resultado: " + value
    }
})
