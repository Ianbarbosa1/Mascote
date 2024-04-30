//hora
let hora = new Date().getHours()


//PROMOÇÕES
let firsten = document.getElementById('p1')
let seconden = document.getElementById('p2')
let trethen = document.getElementById('p3')
let quarten = document.getElementById('p4')

let promocoes = [
    `Bom+dia,+Queria+saber+mais+da+promoção+da+produto-1+de+100,00`,
    `Boa+tarde,+Queria+saber+mais+da+promoção+da+produto-1+de+100,00`,
    `Boa+noite,+Queria+saber+mais+da+promoção+da+produto-1+de+100,00`,

    `Bom+dia,+Queria+saber+mais+da+promoção+da+produto-2+de+150,00`,
    `Boa+tarde,+Queria+saber+mais+da+promoção+da+produto-2+de+150,00`,
    `Boa+noite,+Queria+saber+mais+da+promoção+da+produto-2+de+150,00`,

    `Bom+dia,+Queria+saber+mais+da+promoção+do+produto-3+de+200,00`,
    `Boa+tarde,+Queria+saber+mais+da+promoção+do+produto-3+de+200,00`,
    `Boa+noite,+Queria+saber+mais+da+promoção+do+produto-3+de+200,00`,

    `Bom+dia,+Queria+saber+mais+da+promoção+da+produto-4+de+250,00`,
    `Boa+tarde,+Queria+saber+mais+da+promoção+da+prouto-4+de+250,00`,
    `Boa+noite,+Queria+saber+mais+da+promoção+da+produto-4+de+250,00`
]


if(hora >= 6 && hora <= 12){
        firsten.innerHTML = `<a href="https://wa.me/5521995462321?text=${promocoes[0]}"><img src="./SRC/Assents/imagens/produtos em promoção/fundo-nulo.png"></a>`
        seconden.innerHTML = `<a href="https://wa.me/5521995462321?text=${promocoes[3]}"><img src="./SRC/Assents/imagens/produtos em promoção/fundo-nulo.png"></a>`
        trethen.innerHTML = `<a href="https://wa.me/5521995462321?text=${promocoes[6]}"><img src="./SRC/Assents/imagens/produtos em promoção/fundo-nulo.png"></a>`
        quarten.innerHTML = `<a href="https://wa.me/5521995462321?text=${promocoes[9]}"><img src="./SRC/Assents/imagens/produtos em promoção/fundo-nulo.png"></a>`
    }
    else if(hora >= 13 && hora <= 17){
        firsten.innerHTML += `<a href="https://wa.me/5521995462321?text=${promocoes[1]}"><img src="./SRC/Assents/imagens/produtos em promoção/fundo-nulo.png"></a>`
        seconden.innerHTML += `<a href="https://wa.me/5521995462321?text=${promocoes[4]}"><img src="./SRC/Assents/imagens/produtos em promoção/fundo-nulo.png"></a>`
        trethen.innerHTML += `<a href="https://wa.me/5521995462321?text=${promocoes[7]}"><img src="./SRC/Assents/imagens/produtos em promoção/fundo-nulo.png"></a>`
        quarten.innerHTML += `<a href="https://wa.me/5521995462321?text=${promocoes[10]}"><img src="./SRC/Assents/imagens/produtos em promoção/fundo-nulo.png"></a>`
    }
    else if(hora >= 18 && hora <= 23){
        firsten.innerHTML += `<a href="https://wa.me/5521995462321?text=${promocoes[2]}"><img src="./SRC/Assents/imagens/produtos em promoção/fundo-nulo.png"></a>`
        seconden.innerHTML += `<a href="https://wa.me/5521995462321?text=${promocoes[5]}"><img src="./SRC/Assents/imagens/produtos em promoção/fundo-nulo.png"></a>`
        trethen.innerHTML += `<a href="https://wa.me/5521995462321?text=${promocoes[8]}"><img src="./SRC/Assents/imagens/produtos em promoção/fundo-nulo.png"></a>`
        quarten.innerHTML += `<a href="https://wa.me/5521995462321?text=${promocoes[11]}"><img src="./SRC/Assents/imagens/produtos em promoção/fundo-nulo.png"></a>`
    }
    else if(hora >= 1 && hora <= 5){
        firsten.innerHTML += `<a href="https://wa.me/5521995462321?text=${promocoes[2]}"><img src="./SRC/Assents/imagens/produtos em promoção/fundo-nulo.png"></a>`
        seconden.innerHTML += `<a href="https://wa.me/5521995462321?text=${promocoes[5]}"><img src="./SRC/Assents/imagens/produtos em promoção/fundo-nulo.png"></a>`
        trethen.innerHTML += `<a href="https://wa.me/5521995462321?text=${promocoes[8]}"><img src="./SRC/Assents/imagens/produtos em promoção/fundo-nulo.png"></a>`
        quarten.innerHTML += `<a href="https://wa.me/5521995462321?text=${promocoes[11]}"><img src="./SRC/Assents/imagens/produtos em promoção/fundo-nulo.png"></a>`
}


/* ---ABERTURA DOS MODAIS DE ESCOLHAS--- */ 
function AbRacoes(){
    let modal = document.getElementById('open-one');
    modal.classList.add("abrir");
    

    modal.addEventListener('click', (e) => {
        if(e.target.id === 'invisivel'|| e.target.id === 'fechar'){
            modal.classList.remove('abrir')
        }
    })
}

function AbMedicamentos(){
    let modal = document.getElementById('open-two');
    modal.classList.add("abrir");
    

    modal.addEventListener('click', (e) => {
        if(e.target.id === 'invisivel'|| e.target.id === 'fechar'){
            modal.classList.remove('abrir')
        }
    })
}

function AbSuplementos(){
    let modal = document.getElementById('open-tree');
    modal.classList.add("abrir");
    

    modal.addEventListener('click', (e) => {
        if(e.target.id === 'invisivel'|| e.target.id === 'fechar'){
            modal.classList.remove('abrir')
        }
    })
}

function AbAgro(){
    let modal = document.getElementById('open-four');
    modal.classList.add("abrir");
    

    modal.addEventListener('click', (e) => {
        if(e.target.id === 'invisivel'|| e.target.id === 'fechar'){
            modal.classList.remove('abrir')
        }
    })
}

function AbVacinas(){
    let modal = document.getElementById('open-five');
    modal.classList.add("abrir");
    

    modal.addEventListener('click', (e) => {
        if(e.target.id === 'invisivel'|| e.target.id === 'fechar'){
            modal.classList.remove('abrir')
        }
    })
}

/* ---------------------------------*/ 


let filial11 = document.getElementById('jardim-one')
let filial12 = document.getElementById('areal-one')

let frase = [
   'Bom+dia,+gostaria+de+saber+mais+sobre+as+rações',
   'Boa+tarde,+gostaria+de+saber+mais+sobre+as+rações',
   'Boa+noite,+gostaria+de+saber+mais+sobre+as+rações',

   'Bom+dia,+gostaria+de+saber+mais+sobre+os+medicamentos',
   'Boa+tarde,+gostaria+de+saber+mais+sobre+os+medicamentos',
   'Boa+noite,+gostaria+de+saber+mais+sobre+os+medicamentos',

   'Bom+dia,+gostaria+de+saber+mais+sobre+os+suplementos',
   'Boa+tarde,+gostaria+de+saber+mais+sobre+os+suplementos',
   'Boa+noite,+gostaria+de+saber+mais+sobre+os+suplementos',

   'Bom+dia,+gostaria+de+saber+mais+sobre+os+produtos+agropecuários',
   'Boa+tarde,+gostaria+de+saber+mais+sobre+os+produtos+agropecuários',
   'Boa+noite,+gostaria+de+saber+mais+sobre+os+produtos+agropecuários',

   'Bom+dia,+gostaria+de+saber+mais+sobre+as+vacinas',
   'Boa+tarde,+gostaria+de+saber+mais+sobre+as+vacinas',
   'Boa+noite,+gostaria+de+saber+mais+sobre+as+vacinas'
]


 //RAÇÕES
if (hora >= 6 && hora <= 12){
    filial11.innerHTML = `<a href="https://wa.me/5521995462321?text=${frase[0]}">JARDIM IMPERIAL</a>`
}
else if(hora >= 13 && hora <= 17){
    filial11.innerHTML = `<a href="https://wa.me/5521995462321?text=${frase[1]}">JARDIM IMPERIAL</a>`
}
else if(hora >= 18 && hora <= 23){
    filial11.innerHTML = `<a href="https://wa.me/5521995462321?text=${frase[2]}">JARDIM IMPERIAL</a>`
}
//------
if (hora >= 6 && hora <= 12){
    filial12.innerHTML = `<a href="https://wa.me/5521999510269?text=${frase[0]}">AREAL</a>`
}
else if(hora >= 13 && hora <= 17){
    filial12.innerHTML = `<a href="https://wa.me/5521999510269?text=${frase[1]}">AREAL</a>`
}
else if(hora >= 18 && hora <= 23){
    filial12.innerHTML = `<a href="https://wa.me/5521999510269?text=${frase[2]}">AREAL</a>`
}


 //MEDICAMENTOS
let filial21 = document.getElementById('jardim-two')
let filial22 = document.getElementById('areal-two')

 if (hora >= 6 && hora <= 12){
 filial21.innerHTML = `<a href="https://wa.me/5521995462321?text=${frase[3]}">JARDIM IMPERIAL</a>`
}
else if(hora >= 13 && hora <= 17){
    filial21.innerHTML = `<a href="https://wa.me/5521995462321?text=${frase[4]}">JARDIM IMPERIAL</a>`
 }
else if(hora >= 18 && hora <= 23){
 filial21.innerHTML = `<a href="https://wa.me/5521995462321?text=${frase[5]}">JARDIM IMPERIAL</a>`
}
//------
if (hora >= 6 && hora <= 12){
    filial22.innerHTML = `<a href="https://wa.me/5521999510269?text=${frase[3]}">AREAL</a>`
}
else if(hora >= 13 && hora <= 17){
    filial22.innerHTML = `<a href="https://wa.me/5521999510269?text=${frase[4]}">AREAL</a>`
}
else if(hora >= 18 && hora <= 23){
    filial22.innerHTML = `<a href="https://wa.me/5521999510269?text=${frase[5]}">AREAL</a>`
}

//SUPLEMENTOS
let filial31 = document.getElementById('jardim-tree')
let filial32 = document.getElementById('areal-tree')

 if (hora >= 6 && hora <= 12){
 filial31.innerHTML = `<a href="https://wa.me/5521995462321?text=${frase[6]}">JARDIM IMPERIAL</a>`
}
else if(hora >= 13 && hora <= 17){
    filial31.innerHTML = `<a href="https://wa.me/5521995462321?text=${frase[7]}">JARDIM IMPERIAL</a>`
}
else if(hora >= 18 && hora <= 23){
 filial31.innerHTML = `<a href="https://wa.me/5521995462321?text=${frase[8]}">JARDIM IMPERIAL</a>`
}
//------
if (hora >= 6 && hora <= 12){
    filial32.innerHTML = `<a href="https://wa.me/5521999510269?text=${frase[6]}">AREAL</a>`
}
else if(hora >= 13 && hora <= 17){
    filial32.innerHTML = `<a href="https://wa.me/5521999510269?text=${frase[7]}">AREAL</a>`
}
else if(hora >= 18 && hora <= 23){
    filial32.innerHTML = `<a href="https://wa.me/5521999510269?text=${frase[8]}">AREAL</a>`
}

//AGROPECUÁRIO
let filial41 = document.getElementById('jardim-four')
let filial42 = document.getElementById('areal-four')

 if (hora >= 6 && hora <= 12){
    filial41.innerHTML = `<a href="https://wa.me/5521995462321?text=${frase[9]}">JARDIM IMPERIAL</a>`
}
else if(hora >= 13 && hora <= 17){
    filial41.innerHTML = `<a href="https://wa.me/5521995462321?text=${frase[10]}">JARDIM IMPERIAL</a>`
}
else if(hora >= 18 && hora <= 23){
    filial41.innerHTML = `<a href="https://wa.me/5521995462321?text=${frase[11]}">JARDIM IMPERIAL</a>`
}
//------
if (hora >= 6 && hora <= 12){
    filial42.innerHTML = `<a href="https://wa.me/5521999510269?text=${frase[9]}">AREAL</a>`
}
else if(hora >= 13 && hora <= 17){
    filial42.innerHTML = `<a href="https://wa.me/5521999510269?text=${frase[10]}">AREAL</a>`
}
else if(hora >= 18 && hora <= 23){
    filial42.innerHTML = `<a href="https://wa.me/5521999510269?text=${frase[11]}">AREAL</a>`
}

//VACINA
let filial51 = document.getElementById('jardim-five')
let filial52 = document.getElementById('areal-five')

 if (hora >= 6 && hora <= 12){
    filial51.innerHTML = `<a href="https://wa.me/5521995462321?text=${frase[12]}">JARDIM IMPERIAL</a>`
}
else if(hora >= 13 && hora <= 17){
    filial51.innerHTML = `<a href="https://wa.me/5521995462321?text=${frase[13]}">JARDIM IMPERIAL</a>`
}
else if(hora >= 18 && hora <= 23){
    filial51.innerHTML = `<a href="https://wa.me/5521995462321?text=${frase[14]}">JARDIM IMPERIAL</a>`
}
//------
if (hora >= 6 && hora <= 12){
    filial52.innerHTML = `<a href="https://wa.me/5521999510269?text=${frase[12]}">AREAL</a>`
}
else if(hora >= 13 && hora <= 17){
    filial52.innerHTML = `<a href="https://wa.me/5521999510269?text=${frase[13]}">AREAL</a>`
}
else if(hora >= 18 && hora <= 23){
    filial52.innerHTML = `<a href="https://wa.me/5521999510269?text=${frase[14]}">AREAL</a>`
}



