const button = document.getElementById('btconverter')
const select =document.getElementById('seletortMoeda')

const dolar = 5.17
const euro = 5.52
const bitcoin = 0.0000086

const convertervalores = () => {
    const valorinput = document.getElementById('valorReal').value
    const valorrealtexto = document.getElementById('valor_real_texto')
    const valordolartexto = document.getElementById('valor_dolar_texto')
    
   
    valorrealtexto.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }).format(valorinput)


if(select.value === "US$ Dólar americano"){
    valordolartexto.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }).format(valorinput / dolar)
}

if(select.value === '€ Euro'){
    valordolartexto.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency', currency: 'EUR' }).format(valorinput / euro)

}

if(select.value === '฿ Bitcoin'){
    valordolartexto.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BTC' }).format(valorinput / bitcoin)

}

    valorrealtexto.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }).format(valorinput)

    
}


mudarmoeda = () =>{
    const trocademoeda = document.getElementById('moeda2')
    const trocandobandeira =document.getElementById('USA_bandeira')

    if(select.value === 'US$ Dólar americano'){
        trocademoeda.innerHTML = 'US$ Dólar americano'
        trocandobandeira.src = "./assiten/usa.png"
    }

    if(select.value === '€ Euro'){
        trocademoeda.innerHTML = '€ Euro'
        trocandobandeira.src = "./assiten/euro.png"
    }

    if(select.value === '฿ Bitcoin'){
        trocademoeda.innerHTML = '฿ Bitcoin'
        trocandobandeira.src = "./assiten/bit.png"
    }
    convertervalores()    
}

button.addEventListener('click', convertervalores)
select.addEventListener('change',mudarmoeda )
