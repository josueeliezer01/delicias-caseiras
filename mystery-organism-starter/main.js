// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

/*
  pAequorFactory:
  Cria um objeto que representa um P. aequor.
  
  Parâmetros:
    - specimenNum: um número que identifica o organismo (único para cada objeto).
    - dna: um array com 15 bases que representa a sequência de DNA.
  
  O objeto retornado possui as seguintes propriedades e métodos:
    - specimenNum: identificador do organismo.
    - dna: array de bases.
    - mutate(): seleciona uma base aleatória no DNA e a substitui por uma outra base (diferente da original).
    - compareDNA(otherPAequor): compara o DNA deste organismo com o de outro e imprime a porcentagem de bases em comum.
    - willLikelySurvive(): retorna true se pelo menos 60% das bases forem 'C' ou 'G'; caso contrário, retorna false.
*/
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,

    // Método para simular uma mutação: altera uma base aleatória para outra (diferente da original)
    mutate() {
      // Escolhe um índice aleatório no array dna
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      const currentBase = this.dna[randomIndex];

      // Lista de possíveis bases (exceto a atual)
      const dnaBases = ["A", "T", "C", "G"];
      const possibleBases = dnaBases.filter((base) => base !== currentBase);

      // Seleciona aleatoriamente uma nova base dentre as possíveis
      const newBase =
        possibleBases[Math.floor(Math.random() * possibleBases.length)];

      // Atualiza o array de DNA com a nova base
      this.dna[randomIndex] = newBase;

      // Retorna o DNA mutado
      return this.dna;
    },

    // Método para comparar o DNA com o de outro objeto pAequor
    compareDNA(otherPAequor) {
      let commonCount = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherPAequor.dna[i]) {
          commonCount++;
        }
      }
      let percentage = (commonCount / this.dna.length) * 100;
      console.log(
        `Specimen #${this.specimenNum} and specimen #${
          otherPAequor.specimenNum
        } have ${percentage.toFixed(2)}% DNA in common.`
      );
    },

    // Método que verifica se o organismo provavelmente sobreviverá (60% ou mais de 'C' ou 'G')
    willLikelySurvive() {
      let countCG = 0;
      for (let base of this.dna) {
        if (base === "C" || base === "G") {
          countCG++;
        }
      }
      return countCG / this.dna.length >= 0.6;
    },
  };
};

// Cria 30 instâncias de pAequor que provavelmente sobreviverão
const survivingInstances = [];
let specimenNum = 1;

while (survivingInstances.length < 30) {
  // Cria um novo P. aequor com DNA aleatório
  const newPAequor = pAequorFactory(specimenNum, mockUpStrand());

  // Se o organismo tem 60% ou mais de 'C' e 'G', ele é considerado apto para sobreviver
  if (newPAequor.willLikelySurvive()) {
    survivingInstances.push(newPAequor);
  }
  specimenNum++;
}

// Exemplo de uso dos métodos:

// 1. Mutação: altera uma base aleatória e mostra o novo DNA
console.log("DNA original do specimen #1:", survivingInstances[0].dna);
console.log("DNA após mutação:", survivingInstances[0].mutate());

// 2. Comparação de DNA entre dois organismos (se existirem pelo menos 2)
if (survivingInstances.length >= 2) {
  survivingInstances[0].compareDNA(survivingInstances[1]);
}

// 3. Exibe os 30 organismos que provavelmente sobreviverão
console.log("30 Organisms likely to survive:", survivingInstances);
