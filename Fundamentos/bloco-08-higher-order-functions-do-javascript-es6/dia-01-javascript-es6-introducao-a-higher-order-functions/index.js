const nameContarct = (fullname) => {
  const email =  fullname.toLowerCase().split(' ').join('_');
  return {fullname, email:`${email}@trybe.com`};
};

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
// console.log(newEmployees(nameContarct));

// tarefa 2

const comparatedNumber = (number,myNumber) => myNumber=== number;

const lotteryResult = (myNumber,func) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return func(myNumber,number) ? 'Parabéns! Você ganhou' : 'Tente novamente'
}

// console.log(lotteryResult(1,comparatedNumber));

// tarefa 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const evaluator = (student,gabarito) => {
  let point = 0;
  for(let index = 0; index < gabarito.length; index += 1 ){
    (student.includes(gabarito[index])) 
    ? point += 1
    : point -= 0.5;
  }
  return point
}


const contador = (student, gabarito, func) => func(student, gabarito);

// console.log(contador(STUDENT_ANSWERS, RIGHT_ANSWERS, evaluator));


// BÔNUS

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (obj) => {
  const minDamage = 15;
  const maxDamage = obj.strength
  obj.damage = Math.floor(Math.random() * ((maxDamage + 1) - minDamage)) + minDamage;
  return obj
}

// console.log(dragonDamage(dragon));


const warriorDamage = (obj) => {
  const minDamage = obj.strength;
  const maxDamage = obj.strength * obj.weaponDmg;
  obj.damage = Math.floor(Math.random() * ((maxDamage + 1) - minDamage)) + minDamage;
  return obj
};

// console.log(warriorDamage(warrior));

const mageDamage = (turno, obj) => {
  const minDamage = obj.intelligence;
  const maxDamage = obj.intelligence * 2;
  let Damage = obj.damage = Math.floor(Math.random() * ((maxDamage + 1) - minDamage)) + minDamage;
  
  for(let index = 0; index < turno; index += 1){
    if (obj.mana < 15) { 
      obj.mana -= 0;
      return "Não possui mana suficiente"
    }
    obj.mana -= 15
  }  
  let Mana = obj.mana
  const power = Object.assign({}, {Mana},{Damage});
  return power;
};

// mageDamage(1, mage);

// BONUS : Parte 2;

const gameActions = {
  WARRIOR : (obj1,func1,func2,obj2) => {
    func1(obj1).healthPoints = func1(obj1).healthPoints - func2(obj2).damage
    return func1(obj1).healthPoints 
  },

  MAGE : (turno,obj1,func1,func2,obj2) => {
    func1(obj1).healthPoints = func1(obj1).healthPoints - func2(turno, obj2).Damage
    return func1(obj1).healthPoints 
  },

  DRAGON: (obj1,func1,func2,obj3,obj2) => {
    func1(obj1).healthPoints = func1(obj1).healthPoints - func2(obj2).damage
    obj3.healthPoints = obj3.healthPoints - func2(obj2).damage
    return func1(obj1).healthPoints, obj3.healthPoints 
  }
};

console.log(gameActions.WARRIOR(dragon,dragonDamage,warriorDamage, warrior));
console.log(gameActions.MAGE(1,dragon,dragonDamage,mageDamage, mage));
console.log(gameActions.DRAGON(warrior,warriorDamage,dragonDamage,mage, dragon));


console.log(warrior);
console.log(mage);
console.log(dragon);
// console.log(mageDamage(1,mage));
