
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

const handleSubmit = function(event){
  event.preventDefault();
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

const picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    // dateString is the result of `toString` method
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
});

new JustValidate('.js-form', {
  
  rules: {  
    name: {
      required: true,
      minLength: 3,
      maxLength: 40
    },
    email: {
      required: true,
      email: true,
      maxLength: 50
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    address: {
      required: true,
      maxLength: 200
    },
    city: {
      required: true,
      maxLength: 28
    },
    states: {
      required: true,
    },
    tipo: {
      required: true,
    },
    text: {
      required: true,
      maxLength: 1000
    },
    office: {
      required: true,
      maxLength: 40
    },
    description: {
      required: true,
      maxLength: 500
    },
    date: {
      required: true,
    }
  },
  messages: {
    name: {
      required: 'Campo obrigatório',
      minLength: 'Quantidade de caracteres insuficiente',
      maxLength: 'O limite é de 40 caracteres.',
    },
    email: {
      required: 'Campo obrigatório',
      email: 'email não é válido',
      maxLength: 'O limite é de 50 caracteres.'
    },
    cpf: {
      required: 'Campo obrigatório',
      maxLength: 'O limite é de 11 caracteres.'
    },
    address: {
      required: 'Campo obrigatório',
      maxLength: 'O limite é de 200 caracteres.'
    },
    city: {
      required: 'Campo obrigatório',
      maxLength: 'O limite é de 28 caracteres.'
    },
    states: {
      required: 'Campo obrigatório',
    },
    tipo: {
      required: 'A escolha de um item é obrigatória.',
    },
    text: {
      required: 'Campo obrigatório',
      maxLength: 'O limite é de 1000 caracteres.'
    },
    office: {
      required: 'Campo obrigatório',
      maxLength: 'O limite é de 40 caracteres.'
    },
    description: {
      required: 'Campo obrigatório',
      maxLength: 'O limite é de 500 caracteres.'
    },
    date: {
      required: 'Campo obrigatório',
    }
  },
  
})


