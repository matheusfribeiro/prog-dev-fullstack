const cidades = {
    sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],
    rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],
}

let formulario = document.querySelector("#formCidade")
let selectEstado = document.querySelector("#selectEstado")
let labelCidade = document.querySelector("#labelCidade")


selectEstado.onchange = function() {
    labelCidade.classList.add("cidadeOpen")
    this.classList.remove("inputError")
    let span = selectEstado.nextSibling.nextSibling
    span.innerText = ''
    

    let opcoes
    let selecionar = "<option> -- Selecione uma cidade -- </option>"
    if (selectEstado.value === "Sao Paulo") {
        for (let cont = 0; cont < cidades.sp.length; cont++) {
            opcoes += `<option>${cidades.sp[cont]}</option>`
            document.querySelector("#selectCidade").innerHTML = selecionar + opcoes
        }
    } else if (selectEstado.value === "Rio de Janeiro") {
        for (let cont = 0; cont < cidades.rj.length; cont++){
            opcoes += `<option>${cidades.rj[cont]}</option>`
            document.querySelector("#selectCidade").innerHTML = selecionar + opcoes
        }
    } else if (selectEstado.value === "") {
        labelCidade.classList.remove("cidadeOpen")
    }
}

formulario.onsubmit = function(evento) {
    evento.preventDefault()

    let inputEstado = document.forms['formCidade']['estado']
    let inputCidade = document.forms['formCidade']['cidade']
    
    let temErro = false

    if (!inputEstado.value) {
        temErro = true
        inputEstado.classList.add('inputError')

        let span = inputEstado.nextSibling.nextSibling
        span.innerText = 'Você deve selecionar um estado!'
    } else {
        inputEstado.classList.remove('inputError')

        let span = inputEstado.nextSibling.nextSibling
        span.innerText = ''
    }

    if (inputCidade.value === "-- Selecione uma cidade --") {
        temErro = true
        inputCidade.classList.add('inputError')

        let span = inputCidade.nextSibling.nextSibling
        span.innerText = 'Você deve selecionar uma cidade!'
    } else {
        inputCidade.classList.remove('inputError')

        let span = inputCidade.nextSibling.nextSibling
        span.innerText = ''
    }

    if (temErro === false) {
        formulario.submit()
    }
}

