const HashTable = require('./hast_table')
const str = 'structure'

function findFirstRep(str) {
  const table = new HashTable();
  for (const char of str) {
    if (table.get(char)) {
      return char
    }
    table.set(char, 1);
  }

}

console.log(findFirstRep(str))