// tarefa 1
//let n = 5
//let s = "*";
//let line = "";

//for (let i = 0; i < n; i+=1){
    //line = s + line;
//}

//for (let i = 0; i < n; i += 1){
    //console.log(line)
//}    
//


// tarefa 2
//let n = 5
//let s = "*";
//let line = "";

//for (let i = 0; i < n; i+=1){
    // line = line + s;
    // console.log(line);
//}


// tarefa 3
//let n = 5
//let s = "*";
//let line = "";
//let position = n;

//for (let l = 0; l <=n; l+=1){
    //for (let c = 0; c <=n; c+=1){
        //if (c < position){
            //line = line + " ";
        //}else{
            //line = line + s;
        //}
    //}
    //console.log(line);
    //line = "";
    //position -= 1;
    
    
//}


// tarefa 4

let n = 5
let asterisco = "*";
let line = "";
let position = n;

let midMatrix = (n + 1) / 2;
let left = midMatrix;
let right = midMatrix;


for (let l = 0; l <= midMatrix; l+=1){
    for (let c = 0; c <=n; c+=1){
        if (c > left && c < right){
            line = line + asterisco;
        }else{
            line = line + " ";
        }
    }
    console.log(line);
    line = "";
    right += 1;
    left -= 1;
    
    
}


