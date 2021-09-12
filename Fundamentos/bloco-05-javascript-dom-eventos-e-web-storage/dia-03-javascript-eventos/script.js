function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
// Tarefa 1
function arrayList(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    
    let ul = document.querySelector('#days');
    for (let index = 0; index < dezDaysList.length; index += 1){
      let day = dezDaysList[index];
      if(day === 4 || day === 11 || day === 18){
      let li = document.createElement('li');
      li.className = "day friday";
      li.innerHTML = day;
      ul.appendChild(li);
    }
    else if(day === 24 || day === 31){
      let li = document.createElement('li');
      li.className = "day holiday";
      li.innerHTML = day;
      ul.appendChild(li);
    }
    else if (day === 25 ){
      let li = document.createElement('li');
      li.className = "day holiday friday";
      li.innerHTML = day;
      ul.appendChild(li);
    }
    else {let li = document.createElement('li');
      li.className = "day";
      li.innerHTML = day;
      ul.appendChild(li);
    }
  }  

}  
arrayList();


// Tarefa 2
function createButton(buttonName){
let divButtons = document.querySelector('.buttons-container');
let createButton =  document.createElement('button');
createButton.innerHTML = buttonName;
createButton.id = 'btn-holiday'
divButtons.appendChild(createButton);
}
createButton('Feriados');

// Tarefa 3
const buttonHoliday = document.querySelector('#btn-holiday');
const color = "grey";
const newColor = 'red';

buttonHoliday.addEventListener('click',function(){
let holiday = document.querySelectorAll('.holiday');
for(let index =  0; index < holiday.length; index += 1){
  if(holiday[index].style.color === newColor){
    holiday[index].style.color= "grey";
  }else{
    holiday[index].style.color ='red';
  }
}
}) 


//Tarefa 4
function createButtonFriday(buttonName){
  let divButtons = document.querySelector('.buttons-container');
  let createButtonFriday =  document.createElement('button');
  createButtonFriday.innerHTML = buttonName;
  createButtonFriday.id = 'btn-friday'
  divButtons.appendChild(createButtonFriday);
}
createButtonFriday('Sexta-Feira');


// tarefa 5
const buttonFriday = document.querySelector('#btn-friday');
buttonFriday.addEventListener('click',function(){
  let friday = document.querySelectorAll('.friday');
  let newFriday = "SEXTA!";
  let listFridays = [4, 11, 18, 25];
  for (let index = 0; index < friday.length; index += 1){
    if (friday[index].innerHTML !== newFriday){
      friday[index].innerHTML = newFriday;
    }else {
      friday[index].innerHTML = listFridays[index];
      
    }
}})

// Tarefa 6
const day =  document.querySelector('#days');
day.addEventListener('mouseover',function(event){
  event.target.style.fontSize = '30px';
  event.target.style.fontWeight = '600';
})

day.addEventListener('mouseout',function(event){
  event.target.style.fontWeight = '200';
  event.target.style.fontSize = '20px';
})

// Tarefa 7
function myTasks(task){
  let divTask = document.querySelector('.my-tasks');
  let myTask = document.createElement('span');
  myTask.innerText = task;
  divTask.appendChild(myTask)  
}
myTasks("Dia de projeto");

// Tarefa 8
function taskColor(color){
  let divTask = document.querySelector('.my-tasks')
  let colorTask = document.createElement('div');
  colorTask.className = 'task'
  colorTask.style.background = color;
  divTask.appendChild(colorTask)
}
taskColor("green")

// Tarefa 9

const task = document.querySelector('.task')
let selectedTask = document.getElementsByClassName('task selected')
task.addEventListener('click', function(event){
  if(selectedTask.length === 0){
  event.target.className = 'task selected'}
  else {
    event.target.className = 'task'
    console.log(event);
  }
})


//Tarefa 10

