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
    },
    compareDNA(pObj) {
      let dnaInCommon = 0;
      for (let i = 0; i < this.dna.length; i++) {
        for (let j = 0; j < pObj.dna.length; j++) {
          if (i === j && this.dna[i] === pObj.dna[j]) {
            dnaInCommon++;
          }
        }
      }
      //console.log(dnaInCommon);
      console.log(`The specimens share a ${((dnaInCommon / 15) * 100.).toFixed(2)}% of DNA.`);
      //console.log(this.dna);
      //console.log(pObj.dna);
    },
    willLikelySurvive() {
      dnaToSurvive = 0;
      this.dna.forEach(dna => {
        if (dna === 'C' || dna === 'G') {
          dnaToSurvive++;
        }
      });
      let result = ((dnaToSurvive / 15) * 100).toFixed(2);
      console.log('Chances to survive: ' + result);
      if (result >= 60) {
        return true
      } else {
        return false;
      }
    },
    complementStrand() {
      let complementSrand = [];
      this.dna.forEach(base => {
        switch (base) {
          case 'A':
            complementSrand.push('T');
          break;
          case 'T':
            complementSrand.push('A');
          break;
          case 'C':
            complementSrand.push('G');
          break;
          case 'G':
            complementSrand.push('C');
          break;
          default:
            console.log('Something wrong happened!');
          break          
        }
      });
      //console.log(this.dna);
      return complementSrand;
    }
  };
}

const p1 = pAequorFactory(1, mockUpStrand());
//const p2 = pAequorFactory(2, mockUpStrand());
//console.log(p1.mutate());
//console.log(p1.compareDNA(p2));

//console.log(p1.willLikelySurvive());

const batch = [];

for (let i = 1; i <= 30; i++) {
  let specimen = pAequorFactory(i, mockUpStrand());
  while (!specimen.willLikelySurvive) {
    specimen= pAequorFactory(i, mockUpStrand());
  }
  batch.push(specimen);
}

//console.log(batch);

//console.log(p1.complementStrand());






