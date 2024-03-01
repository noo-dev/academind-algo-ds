class HashTable {
  constructor() {
    this.size = 1000
    this.buckets = Array(this.size).fill(null); 
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
    this.buckets[keyHash] = value;
  }

  get(key) {
    const keyHash = this.hash(key);
    return this.buckets[keyHash];
  }
}

module.exports = HashTable;

