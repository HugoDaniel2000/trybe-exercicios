// Part 1

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias."Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  return`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone:${order.phoneNumber}, R. ${order.address.street}, ${order.address.number}, AP: ${order.address.apartment}`;
}

// console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias. Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  // Modifique o nome da pessoa compradora.
  // Modifique o valor total da compra para R$ 50,00.
  let novoObjeto = {};
  const novo = Object.assign(novoObjeto, order);
  novoObjeto.name = "Luiz Silva";
  novoObjeto.payment = 50
  console.log(novo);
  let nome = novoObjeto.name;
  let sabores = Object.keys(novoObjeto.order.pizza).join(', ');
  let bebida = novoObjeto.order.drinks.coke.type;
  let valor = novoObjeto.payment;
  return `Olá ${nome}, o total do seu pedido de ${sabores} e ${bebida} é de R$ ${valor},00.`
}

console.log(orderModifier(order));



//<------------------------------------------------------------------------------------------------------->//


// Part 2

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1- Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const adicionaTurno = (objeto, chave, valor) => objeto[chave] = valor;

console.log(adicionaTurno(lesson2, 'turno', 'manhã'));
// console.log(lesson2);

// 2- Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listaKeys = (objeto) => Object.keys(objeto);
// console.log(listaKeys(lesson3));

// 3- Crie uma função para mostrar o tamanho de um objeto.
const tamanhoObjeto = (objeto) => Object.keys(objeto).length;
// console.log(tamanhoObjeto(lesson3));

// 4- Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const valoresObjeto = (objeto) => Object.values(objeto);
//  console.log(valoresObjeto(lesson3));

// 5- Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
let newObject = {}; // objeto criado para colocar o resultado da função.
const concatenaObjetos = (newObject) => {
  let objeto = Object.assign(newObject, {lesson1}, {lesson2}, {lesson3});
  return objeto;
}
console.log(concatenaObjetos(newObject));

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const alunoTotal1 = lesson1.numeroEstudantes;
const alunoTotal2 = lesson2.numeroEstudantes;
const alunoTotal3 = lesson3.numeroEstudantes;

const totalAlunos = (turma1, turma2, turma3) => {
  return turma1 + turma2 + turma3
}

// console.log(totalAlunos(alunoTotal1, alunoTotal2, alunoTotal3));

// 7- Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const valorChaveIndice = (objeto, number) => {
  return Object.values(objeto)[number];
}

console.log(valorChaveIndice(lesson3, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
const verificaPar = (objeto, key, value) => {
  let arrayRetorno = Object.entries(objeto);
  for (let index = 0; index < arrayRetorno.length; index += 1){
    console.log(arrayRetorno[index]);
    if((arrayRetorno[index][0] === key) && (arrayRetorno[index][1] === value)) {
      return true
    }
  }
  return false
}

console.log(verificaPar(lesson3, 'materia', 'Português'));