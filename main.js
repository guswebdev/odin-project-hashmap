import { HashMap } from "./HashMap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.set("elephant", "grey");

test.set('moon', 'silver')
test.set('escucho', 'musica')
test.set('hola', 'saludo')
test.set('hello', 'ingles')
test.set('goodbye', 'despedida')
/*
test.set("apple", "blue");
test.set("frog", "violet");
*/
console.table(test.entries())

//console.log(test.length())
//console.log(test.capacity)

console.log(test.printTable());
