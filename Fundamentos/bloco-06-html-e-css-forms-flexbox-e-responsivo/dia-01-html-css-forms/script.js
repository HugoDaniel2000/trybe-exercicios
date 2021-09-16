const name = document.querySelector('[name=name]');
const email = document.querySelector('[name=email]');
const cpf = document.querySelector('[name=cpf]')
const adress = document.querySelector('[name=adress]');
const city = document.querySelector('[name=city]');
const resumeCurriculo = document.querySelector('[name=curriculo]');
const role = document.querySelector('[name=cargo]');
const discriptRole = document.querySelector('[name=decript-role]');
const date = document.querySelector('[name=date]')
const selectedOptions = document.getElementById('state-options');
const state = document.getElementsByTagName('option')

function createOptions (){
  const arrayStates = ['RJ', 'SP', 'BA', 'PE', 'RS', 'MG',]
  for (let index = 0; index < arrayStates.length ; index += 1) {
  const option =  arrayStates[index];
  const createOptions = document.createElement('option');
  createOptions.innerText = option;
  createOptions.value = option;
  selectedOptions.appendChild(createOptions);
  }
}
createOptions();

const handleSubmit = function(event){
  event.preventDefault();
}

const validateData = function(){
  if (name.value.length === 0){
    alert('Nome inválido');
  }
  if (email.value.length === 0){
    alert('Email inválido');
  }
  if (cpf.value.length === 0){
    alert('CPF inválido');
  }
  if (adress.value.length === 0){
    alert('Endereço inválido');
  }
  if (city.value.length === 0){
    alert('Cidade inválida')
  }
  if (resumeCurriculo.value.length === 0){
    alert('Resumo inválido');
  }
  if (role.value.length === 0){
    alert('Cargo inválido');
  }
  if(discriptRole.value.length === 0 ){ 
  alert('Descrição inválida')
  }
}

const selectState =  function(event){
  event.target.value
}

window.onload = function (){
  createOptions();
  const button = document.querySelector('.submit-button')
  button.addEventListener('click', handleSubmit);
  button.addEventListener('click', validateData);
  button.addEventListener('click', selectState);
  button.addEventListener('click', dateForm);
}

const clearButton =  document.querySelector('.clear-button');
const input = document.querySelectorAll('input');
const textArea = document.querySelector('textarea');
clearButton.addEventListener('click', function(){
  for(let index = 0; index < input.length; index += 1){
    input[index].value = '';
  }
  textArea.value = '';
})

clearButton.addEventListener('click', handleSubmit);

const dateForm =  function(){
let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
  if(!regex.test(date.value)){
    return {
      message: 'Data: Formato inválido'
    };
  }
  let splitted = date.value.split('/');
  let day = splitted[0];
  let month = splitted[1];
  let year = splitted[2];
  if(day < 0 || day > 30){
    return {
      message: 'Dia inválido'
    };
  }
  if(month < 0 || month > 12){
    return {
      message: 'Mês inválido'
    }
  }
  if(year < 0) {
    return {
      message: 'Ano inválido'
    };
  }
  return true;
}
