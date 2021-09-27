const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();
console.log(`Os números ${oddsAndEvens.sort(function(a, b){return a-b})} se encontram ordenados de forma crescente !`);

const fatorial = (n) => {
  let fator = 1;
  for (let index = 2; index <= n; index += 1) {
     fator = fator * index;
  }
  return fator
}

console.log(fatorial(8));

const fatorialRecursivo = (n) => n > 1 ? n * fatorialRecursivo(n-1) : 1;

console.log (fatorialRecursivo(5))

const maiorPalavra = (string) => {
  const split = string.split(' ');
  let maior = 0;
  let bigWord = '';
  for(let index = 0; index < split.length; index += 1){
    if (maior < split[index].length){
      maior = split[index].length;
      bigWord = split[index];
    }
  }
  return bigWord
}

console.log(maiorPalavra("andre é foda demais"));