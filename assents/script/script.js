/*ANIMAÇÃO INICIAL*/
let frase = document.querySelector('.first-titulo')
let mudar = document.querySelector('.mudanca1')

setTimeout(() => {
    frase.style.transition = 'all 1s ease-out'
    frase.style.opacity = '1'
    frase.style.transform = 'translateY(0px)'
}, 2000);

setTimeout(() => {
    mudar.style.transition = 'all 1s ease-out'
    mudar.style.opacity = '0'
}, 5000);
setTimeout(() => {
    mudar.innerHTML = 'produtos'
    mudar.style.opacity = '1'
}, 6000);
setTimeout(() => {
    mudar.style.opacity = '0'
}, 9000);
setTimeout(() => {
    mudar.innerHTML = 'atendimento'
    mudar.style.opacity = '1'
}, 10000);

setTimeout(() => {
    mudar.style.opacity = '0'
}, 13000);

setTimeout(() => {
    mudar.innerHTML = 'soluções'
    mudar.style.opacity = '1'
}, 14000);

/*ANIMAÇÃO DAS PATAS*/
let p1 = document.querySelector('#p1')
let p2 = document.querySelector('#p2')
let p3 = document.querySelector('#p3')
let p4 = document.querySelector('#p4')
let p5 = document.querySelector('#p5')
let p6 = document.querySelector('#p6')

setInterval(() => {
    setTimeout(() => {
        p2.style.transition = 'all 1.5s ease-in-out';
        p2.style.opacity = '1'
        p3.style.transition = 'all 1.5s ease-in-out';
        p3.style.opacity = '0'
    }, 1000);
    setTimeout(() => {
        p1.style.transition = 'all 1.5s ease-in-out'
        p1.style.opacity = '1'
        p2.style.opacity = '0'
    }, 3000);
    setTimeout(() => {
        p3.style.opacity = '1'
        p1.style.opacity = '0'
    }, 5000);
}, 6000);

setInterval(() => {
    setTimeout(() => {
        p5.style.transition = 'all 1.5s ease-in-out';
        p5.style.opacity = '1'
        p6.style.transition = 'all 1.5s ease-in-out';
        p6.style.opacity = '0'
    }, 1000);
    setTimeout(() => {
        p4.style.transition = 'all 1.5s ease-in-out'
        p4.style.opacity = '1'
        p5.style.opacity = '0'
    }, 3000);
    setTimeout(() => {
        p6.style.opacity = '1'
        p4.style.opacity = '0'
    }, 5000);
}, 6000);


/*MUDANÇA DOS PRODUTOS*/
/*ICONES*/
let sd1 = document.querySelector('#sd1')
let sd2 = document.querySelector('#sd2')
let sd3 = document.querySelector('#sd3')
let sd4 = document.querySelector('#sd4')
sd1.addEventListener('click', movimento1)
sd2.addEventListener('click', movimento2)
sd3.addEventListener('click', movimento3)
sd4.addEventListener('click', movimento4)
/*---*/
let se1 = document.querySelector('#se1')
let se2 = document.querySelector('#se2')
let se3 = document.querySelector('#se3')
let se4 = document.querySelector('#se4')
se4.addEventListener('click', movimento5)
se3.addEventListener('click', movimento6)
se2.addEventListener('click', movimento7)
se1.addEventListener('click', movimento8)


/*SEÇÃO DOS PRODUTOS */
let racoes = document.querySelector('#racoes')
let medicamentos = document.querySelector('#medicamentos')
let suplementos = document.querySelector('#suplementos')
let agropecuaria = document.querySelector('#agropecuaria')
let vacinas = document.querySelector('#vacinas')

/*INDICADORES*/
let i1 = document.querySelector('#i1')
let i2 = document.querySelector('#i2')
let i3 = document.querySelector('#i3')
let i4 = document.querySelector('#i4')
let i5 = document.querySelector('#i5')

function movimento1(){
    /*SETAS*/
    sd1.style.display = 'none'
    se1.style.display = 'flex'
    sd2.style.display = 'flex'

    /*ENTRADA*/
    medicamentos.style.zIndex = '1'
    medicamentos.style.opacity = '1'
    medicamentos.style.position = 'static'
    medicamentos.style.transition = 'all 0.5s ease-out'

    /*SAIDA*/
    racoes.style.zIndex = '-1'
    racoes.style.opacity = '0'
    racoes.style.position = 'absolute'
    racoes.style.transition = 'all 0.5s ease-out'

    /*INDICADOR*/
    i1.style.backgroundColor = 'transparent'
    i1.style.border = '1px solid #0EABCE'
    i2.style.backgroundColor = '#0EABCE'
    i2.style.border = 'none'
}

function movimento2(){
    /*SETAS*/
    sd2.style.display = 'none'
    se1.style.display = 'none'
    sd3.style.display = 'flex'
    se2.style.display = 'flex'

    /*ENTRADA*/
    suplementos.style.zIndex = '1'
    suplementos.style.opacity = '1'
    suplementos.style.position = 'static'
    suplementos.style.transition = 'all 0.5s ease-out'

    /*SAIDA*/
    medicamentos.style.zIndex = '-1'
    medicamentos.style.opacity = '0'
    medicamentos.style.position = 'absolute'

    /*INDICADOR*/
    i2.style.backgroundColor = 'transparent'
    i2.style.border = '1px solid #0EABCE'
    i3.style.backgroundColor = '#0EABCE'
    i3.style.border = 'none'
}

function movimento3(){
    /*SETAS*/
    se2.style.display = 'none'
    sd3.style.display = 'none'
    se3.style.display = 'flex'
    sd4.style.display = 'flex'
    

    /*ENTRADA*/
    agropecuaria.style.zIndex = '1'
    agropecuaria.style.opacity = '1'
    agropecuaria.style.position = 'static'
    agropecuaria.style.transition = 'all 0.5s ease-out'

    /*SAIDA*/
    suplementos.style.zIndex = '-1'
    suplementos.style.opacity = '0'
    suplementos.style.position = 'absolute'

    /*INDICADOR*/
    i3.style.backgroundColor = 'transparent'
    i3.style.border = '1px solid #0EABCE'
    i4.style.backgroundColor = '#0EABCE'
    i4.style.border = 'none'
}

function movimento4(){
    /*SETAS*/
    se3.style.display = 'none'
    sd4.style.display = 'none'
    se4.style.display = 'flex'
    

    /*ENTRADA*/
    vacinas.style.zIndex = '1'
    vacinas.style.opacity = '1'
    vacinas.style.position = 'static'
    vacinas.style.transition = 'all 0.5s ease-out'

    /*SAIDA*/
    agropecuaria.style.zIndex = '-1'
    agropecuaria.style.opacity = '0'
    agropecuaria.style.position = 'absolute'

    /*INDICADOR*/
    i4.style.backgroundColor = 'transparent'
    i4.style.border = '1px solid #0EABCE'
    i5.style.backgroundColor = '#0EABCE'
    i5.style.border = 'none'
}

function movimento5(){
    /*SETAS*/
    se4.style.display = 'none'
    se3.style.display = 'flex'
    sd4.style.display = 'flex'

    /*ENTRADA*/
    agropecuaria.style.zIndex = '1'
    agropecuaria.style.opacity = '1'
    agropecuaria.style.position = 'static'

    /*SAIDA*/
    vacinas.style.zIndex = '-1'
    vacinas.style.opacity = '0'
    vacinas.style.position = 'absolute'
    vacinas.style.transition = 'all 0.5s ease-out'

    /*INDICADOR*/
    i5.style.backgroundColor = 'transparent'
    i5.style.border = '1px solid #0EABCE'
    i4.style.backgroundColor = '#0EABCE'
    i4.style.border = 'none'
}

function movimento6(){
    /*SETAS*/
    se3.style.display = 'none'
    sd4.style.display = 'none'
    se2.style.display = 'flex'
    sd3.style.display = 'flex'
    

    /*ENTRADA*/
    suplementos.style.zIndex = '1'
    suplementos.style.opacity = '1'
    suplementos.style.position = 'static'

    /*SAIDA*/
    agropecuaria.style.zIndex = '-1'
    agropecuaria.style.opacity = '0'
    agropecuaria.style.position = 'absolute'

    /*INDICADOR*/
    i4.style.backgroundColor = 'transparent'
    i4.style.border = '1px solid #0EABCE'
    i3.style.backgroundColor = '#0EABCE'
    i3.style.border = 'none'
}

function movimento7(){
    /*SETAS*/
    se2.style.display = 'none'
    sd3.style.display = 'none'
    se1.style.display = 'flex'
    sd2.style.display = 'flex'

    /*ENTRADA*/
    medicamentos.style.zIndex = '1'
    medicamentos.style.opacity = '1'
    medicamentos.style.position = 'static'

    /*SAIDA*/
    suplementos.style.zIndex = '-1'
    suplementos.style.opacity = '0'
    suplementos.style.position = 'absolute'

    /*INDICADOR*/
    i3.style.backgroundColor = 'transparent'
    i3.style.border = '1px solid #0EABCE'
    i2.style.backgroundColor = '#0EABCE'
    i2.style.border = 'none'
}

function movimento8(){
    /*SETAS*/
    se1.style.display = 'none'
    sd2.style.display = 'none'
    sd1.style.display = 'flex'
    

    /*ENTRADA*/
    racoes.style.zIndex = '1'
    racoes.style.opacity = '1'
    racoes.style.position = 'static'

    /*SAIDA*/
    medicamentos.style.zIndex = '-1'
    medicamentos.style.opacity = '0'
    medicamentos.style.position = 'absolute'

    /*INDICADOR*/
    i2.style.backgroundColor = 'transparent'
    i2.style.border = '1px solid #0EABCE'
    i1.style.backgroundColor = '#0EABCE'
    i1.style.border = 'none'
}
