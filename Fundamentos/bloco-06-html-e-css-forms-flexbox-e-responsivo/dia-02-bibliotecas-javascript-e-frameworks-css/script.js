const selectedOptions = document.getElementById('state-options');
function createOptions (){
  const arrayStates = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
  for (let index = 0; index < arrayStates.length ; index += 1) {
  const option =  arrayStates[index];
  const createOptions = document.createElement('option');
  createOptions.innerText = option;
  createOptions.value = option;
  selectedOptions.appendChild(createOptions);
  }
}
createOptions();

let picker = new Pikaday({ field: document.getElementById('datepicker')});
