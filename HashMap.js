export class HashMap {
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
      for (let [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }
  //ACTUALIZA EL VALOR DE LA CLAVE
  set(key, value) {
    if (typeof key !== "string")
      throw new Error("Only string keys are supported");

    const index = this.hash(key);
    this.limitarIndex(index);

    const bucket = this.buckets[index];

    if (this.has(key)) {
      bucket[0] = [key, value];
    } else {
      bucket.push([key, value]);
      this.size++;
    }

    if (this.size > this.capacity * this.loadFactor) {
      this.resize();
    }
  }
  //DEVUELVE EL VALOR ASIGNADO O DEVUELVE NULL
  get(key) {
    const index = this.hash(key);

    this.limitarIndex(index);

    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return null;
  }
  //DEVUELVE UN BOOLEAN VERIFICANDO SI EXITE O NO EN LA TABLA
  has(key) {
    const index = this.hash(key);

    this.limitarIndex(index);

    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true;
      }
    }
    return false;
  }
  //ELIMINAR LA ENTRADA CON ESA CLAVE Y DEVOLVER TRUE, SI NO EXITE DEVUELVE FALSE
  remove(key) {
    const index = this.hash(key);

    this.limitarIndex(index);

    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  //DEVUELVE EL NUMERO DE CLAVES EN LA TABLA
  length() {
    let cont = 0;

    for (let i = 0; i < this.buckets.length; i++) {
      cont++;
    }
    return cont;
  }
  //ELIMINA TODAS LAS ENTRADAS
  clear() {
    this.buckets.splice(0, this.buckets.length);
  }
  //DEVUELVE UN ARRAY QUE CONTIENE TODAS LAS CLAVES
  keys() {
    const arr = [];

    const buckets = this.buckets;
    for (let i = 0; i < buckets.length; i++) {
      for (let j = 0; j < buckets[i].length; j++) {
        if (buckets[i][j]) {
          arr.push(buckets[i][j][0]);
        }
      }
    }
    return arr;
  }
  //DEVUELVE UN ARRAY CON TODOS LOS VALORES
  values() {
    const arr = [];

    const buckets = this.buckets;
    for (let i = 0; i < buckets.length; i++) {
      for (let j = 0; j < buckets[i].length; j++) {
        if (buckets[i][j]) {
          arr.push(buckets[i][j][1]);
        }
      }
    }
    return arr;
  }
  //DEVUELVE UN ARRAY DE ARRAY CON CADA PARA CLAVE-VALOR [[k1,v1],[k2,v2]]
  entries() {
    const arr = [];

    const buckets = this.buckets;
    for (let i = 0; i < buckets.length; i++) {
      for (let j = 0; j < buckets[i].length; j++) {
        if (buckets[i][j]) {
          arr.push([buckets[i][j][0], buckets[i][j][1]]);
        }
      }
    }
    return arr;
  }

  printTable() {
    console.log("Contenido de la tabla hash:");
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        console.log(
          `Bucket ${i}: ${this.buckets[i]
            .map(([key, value]) => `(${key}: ${value})`)
            .join(", ")}`
        );
      }
    }
  }
}
