//tarefa 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//console.log(numbers);

// tarefa 2

 //let soma = 0;
   // for(let i = 0; i < numbers.length; i+=1){
        //soma += numbers[i];
    //}console.log(soma);
//

// tarefa 3 e 4

//let soma = 0;
//for (let i = 0; i < numbers.length; i+=1){
    //soma += numbers[i]; 
//}
//let ari = soma / numbers.length;
//console.log(ari);
//if(ari > 20){
    //console.log("valor maior que 20");
//} else{
    //console.log("valor menor ou igual a 20")
//}


// tarefa 5

//var maior = 0;
//for(let i = 0; i<numbers.length; i+=1){
    //if (numbers[i] > maior){
        //maior = numbers[i]
    //}
//}console.log(maior);

// tarefa 6
//let soma =  0
//for(let i = 0; i < numbers.length; i+=1){
    //if (numbers[i] % 2!==0){
        //soma+=1
    //} 
//} 

//if (soma===0){
    //console.log("nenhum valor ímpar encontrado");
//}else{
    //console.log(soma);
//}

// tarefa 7
//var menor = numbers[0];
//for (let i = 1; i < numbers.length; i+=1){
    //if (numbers[i] < menor){
        //menor = numbers[i];
    //}
//} console.log(menor);

//tarefa 8

//let array = [];
    //for (let i = 0; i <= 25; i+=1){
        //array.push(i);
    //}
    //console.log(array);

//    


// tarefa 9

//for (let div of array) {
     //div/= 2;
 //console.log(div);
//}

// tarefa bônus

// requisito 1
//for (let index = 1; index < numbers.length; index += 1) {
    //for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      //if (numbers[index] < numbers[secondIndex]) {
        //let position = numbers[index];
        //numbers[index] = numbers[secondIndex];
        //numbers[secondIndex] = position;
      //}
    //}
  //}
//console.log(numbers)


// requisito 2

//for (let index = 1; index < numbers.length; index += 1) {
    //for (let secondIndex = 0; secondIndex < index; secondIndex +=1) {
      //if (numbers[index] > numbers[secondIndex]) {
        //let position = numbers[index];
        //numbers[index] = numbers[secondIndex];
        //numbers[secondIndex] = position;
      //}
    //}
  //}
//console.log(numbers)


// requisito 3
let arrayMulti = [];

for (let i = 0; i < numbers.length; i+=1){
        if ( i +1 < numbers.length){
            arrayMulti.push(numbers[i] * numbers[i+1]);
        }
        else {
            arrayMulti.push(numbers[i] * 2)
        }
    }

console.log(arrayMulti);


