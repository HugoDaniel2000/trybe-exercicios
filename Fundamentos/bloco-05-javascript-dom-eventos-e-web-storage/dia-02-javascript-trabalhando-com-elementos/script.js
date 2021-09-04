function tagH1(){
    let body = document.getElementsByTagName("body")[0];
    let addH1 = document.createElement("h1");
    addH1.innerText = "Exercício 5.2 - JavaScript DOM";
    body.appendChild(addH1);
}
tagH1();

function tagMain() {
    let body = document.getElementsByTagName("body")[0];
    let addMain = document.createElement("main");
    addMain.className = "main-content";
    body.appendChild(addMain);
}
tagMain();

function tagSection() {
    let main = document.getElementsByTagName("main")[0];
    let addSection = document.createElement("section")
    addSection.className = "center-content";
    main.appendChild(addSection);
}
tagSection();

function tagP() {
    let section = document.getElementsByTagName("section")[0];
    let addP = document.createElement("p")
    addP.innerText = "Exercicios tops demais"
    section.appendChild(addP);
}
tagP();

function tagSection2() {
    let main = document.getElementsByTagName("main")[0];
    let addSection2 = document.createElement("section")
    addSection2.className = "left-content";
    main.appendChild(addSection2);
}
tagSection2();

function tagSection3() {
    let main = document.getElementsByTagName("main")[0];
    let addSection3 = document.createElement("section")
    addSection3.className = "right-content";
    main.appendChild(addSection3);
}
tagSection3()

function imageSection() {
    let section = document.getElementsByTagName("section")[1];
    let addImage = document.createElement("img")
    addImage.className  = "small-image"
    addImage.src = "https://picsum.photos/200"; 
    section.appendChild(addImage);
}
imageSection();

function UlSection() {
    let section = document.getElementsByTagName("section")[2];
    let addUl = document.createElement("ul");
    section.appendChild(addUl);
}
UlSection()

function Ul_Li(){
    let listNumber = ['Um', 'dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez']
    let listN = [];
    let ul = document.getElementsByTagName("ul")[0];
    for(let index = 0; index < listNumber.length; index += 1){
        let listN = listNumber[index];
        let list  = document.createElement('li');
        list.innerText = listN;
        ul.appendChild(list)
    }
}
Ul_Li();

function addH3(){
    let main = document.getElementsByTagName("main")[0];
    for(let index = 0; index < 3; index +=1  ){
        let addH3 = document.createElement('h3');
        main.appendChild(addH3)
    }
}
addH3();
    








