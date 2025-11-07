export class HashSet {
  capacity = 16;
  loadFactor = 0.75;
  buckets = new Array(this.capacity).fill(null).map(() => []);
  size = 0;

  hash(key) {
    let hashCode = 0;

    const numPrimo = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (numPrimo * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  limitarIndex(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
  }

  resize() {
    this.capacity = this.capacity * 2;
    const oldBuckets = this.buckets;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;

    for (let bucket of oldBuckets) {
      for (let key of bucket) {
        this.set(key);
      }
    }
  }

  set(key) {
    if (typeof key !== "string")
      throw new Error("Only string keys are supported");

    const index = this.hash(key);
    this.limitarIndex(index);

    const bucket = this.buckets[index];

    if (this.has(key)) {
      bucket[0] = key;
    } else {
      bucket.push(key);
      this.size++;
    }

    if (this.size > this.capacity * this.loadFactor) {
      this.resize();
    }
  }

  get(key) {
    const index = this.hash(key);

    this.limitarIndex(index);

    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] === key) {
        return bucket[i];
      }
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);

    this.limitarIndex(index);

    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      //console.log(bucket[i]);
      if (bucket[i] === key) {
        return true;
      }
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);

    this.limitarIndex(index);

    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  clear() {
    this.buckets.splice(0, this.buckets.length);
  }

  length() {
    let cont = 0;

    for (let i = 0; i < this.buckets.length; i++) {
      cont++;
    }
    return cont;
  }

  keys() {
    const arr = [];

    const buckets = this.buckets;
    for (let i = 0; i < buckets.length; i++) {
      for (let j = 0; j < buckets[i].length; j++) {
        arr.push(buckets[i][j]);
      }
    }
    return arr;
  }

  printTable() {
    console.log("Contenido de la tabla hash:");
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        console.log(`Bucket ${i}: ${this.buckets[i]}`);
      }
    }
  }
}
