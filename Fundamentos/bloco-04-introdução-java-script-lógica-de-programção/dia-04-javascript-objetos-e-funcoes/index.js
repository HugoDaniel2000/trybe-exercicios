
//  Part 1 -  Objetos e for / in 

// Tarefa 1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "Sim"
  };

let info_2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: "Sim"
};
  

  //console.log("Bem-vinda, " + info.personagem);
//


// Tarefa 2
    
  //console.log(info.recorrente);


//



// Tarefa 3

  //for (const key in info) {
    //console.log(key);
//}
   

// Tarefa 4  

    //for (const key in info) {
        //console.log(info[key]);
//}


// Tarefa 5
    //for (const key in info && info_2) {
        //if (
            //key === 'recorrente' &&
            //info[key] === 'Sim' &&
            //info_2[key] === 'Sim'
          //) {
            //console.log('Ambos recorrentes');
          //} else {
            //console.log(info[key] + ' e ' + info_2[key]);}
    //}
// 
      

// Part 2 -  Funções    


// Tarefa 1

//function palindramo( word ) {

    //let reverse = word.split("").reverse().join("");
   // if (reverse === word){
      //  return true;
    //}else{
        //return false;
    //}
    
//}


//console.log( palindramo("arara"));

// tarefa 2
//function maxValue(value){
    //let max = 0;
    //for (let index in value){
       // if(value[max] < value[index] ){
         //   max = index;
        //}
    
   // } 
    //return max;
//}
//console.log(maxValue([2, 3, 6, 7, 10, 1]));

// tarefa 3
//function minValue (value){
    //let min = 0;
    //for (let index in value){
       // if(value[min] > value[index] ){
         //   min = index;
        //}   
    //}
    //return min;
//}
//console.log(minValue([2, 4, 6, 7, 10, 0, -3]))

// tarefa 4

 //function maxName (name){
   //  let max = name[0];
    //for (let index in name){
      //  if (max.length < name[index].length){
        //    max = name[index]
        //}
    //}return max;
    
 //}
 //console.log(maxName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// tarefa 5

//function repeat(value){
  //  number = 3
    //for (let index in value){
      //  if (value[number] === value[index]){
        //    number = value[index];

        //}
    //}
  //  return number;
//}
//console.log(repeat([2, 3, 2, 5, 8, 2, 3]));


// tarefa 6

//function somatório(n){
    //soma = 0
    //for (let index = 0; index <= n; index += 1){
       // soma += index;       
    //}
    //return soma;
//}
//console.log(somatório(5));

//tarefa 7

function verifyWord(stringWord, stringEnd){

    let reverseWord = stringWord.split("").reverse().join("");
    let reverseEnd = stringEnd.split("").reverse().join("");
    let result;
    
    for (let index in reverseWord && reverseEnd){
        if(reverseWord[index] !== reverseEnd[index]){
            result = false
            
        }else{
            result = true
        }
    } 

    return result;
}    


console.log(verifyWord("trybe", "be"));
