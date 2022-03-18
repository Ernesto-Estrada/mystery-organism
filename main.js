// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//console.log(mockUpStrand());

// Factory funcion

const pAequorFactory = (number, arrDNA) => {
  return {
    specimenNum: number,
    dna: arrDNA,
    mutate() {
      let baseToMutate = Math.floor(Math.random() * arrDNA.length);
      let newBase = returnRandBase();
      while (arrDNA[baseToMutate] === newBase) {
        newBase = returnRandBase();
      }
      console.log('Base to mutate: ' + arrDNA[baseToMutate] + ' . DNA index: ' + baseToMutate + '\nNew base: ' + newBase);
      this.dna[baseToMutate] = newBase;
    }
  };
}

//const p1 = pAequorFactory(1, mockUpStrand());
//console.log(p1.mutate());






