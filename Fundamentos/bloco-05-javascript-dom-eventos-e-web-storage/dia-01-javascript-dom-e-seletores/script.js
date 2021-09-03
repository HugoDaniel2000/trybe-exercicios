/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.*/
 
function doisAnos(){
    let a =document.getElementById("text");
    a.innerText = "Me vejo como um programador de sucesso";
    
}
doisAnos();

function corTrybe() {
    let b = document.getElementsByClassName("main-content")[0];
    b.style.background = "rgb(76,164,109)";
}
corTrybe();

function whiteBox() {
    let c = document.getElementsByClassName("center-content")[0];
    c.style.background = "white";
}
whiteBox();

function textH1() {
    let d = document.getElementsByClassName("title")[0];
    d.innerText = "Exercício 5.1 - JavaScript";
}
textH1()    

function textMax() {
    let e = document.getElementsByTagName("p")[0];
    e.innerHTML = e.innerHTML.toUpperCase();
}
textMax();
 
function conteúdoConsol(){
    let f = document.getElementsByTagName("p");
    for (let index = 0; index < f.length; index += 1) {
       console.log(f[index].innerHTML); 
    }
}
conteúdoConsol();

