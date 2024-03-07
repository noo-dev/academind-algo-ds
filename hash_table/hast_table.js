class HashTable {
  constructor() {
    this.size = 16
    this.buckets = Array(this.size).fill(null).map(() => [])
  }

  hash(key) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0)
    }

    return hash % this.size;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    const bucketArray = this.buckets[keyHash]
    const storedElement = bucketArray.find((el) => {
      return el.key === key
    })
    if (storedElement) {
      storedElement.val = value 
    } else {
      bucketArray.push({key: key, val: value})
    }
  }

  get(key) {
    const keyHash = this.hash(key);
    const bucketArray = this.buckets[keyHash]
    const storedElement = bucketArray.find(el => el.key === key)
    return storedElement;
  }

  showInfo() {
    for (const key in this.buckets) {
      if (this.buckets[key] !== null) {
        console.log(key, this.buckets[key]);
      }
    }
  }
}


const table1 = new HashTable();
for (const char of "academind") {
  table1.set(char, char)
}for (const char of "hello") {
  table1.set(char, char)
}for (const char of "does this work") {
  table1.set(char, char)
}

console.log(table1.showInfo())

module.exports = HashTable;

