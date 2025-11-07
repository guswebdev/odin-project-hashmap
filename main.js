import { HashMap } from "./HashMap.js";
import { HashSet } from "./HashSet.js";

const test = new HashMap();
const testSet = new HashSet();

//Valores de HashMap
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

//Valores de HashSet
testSet.set("apple");
testSet.set("banana");
testSet.set("carrot");
testSet.set("dog");
testSet.set("elephant");
testSet.set("frog");
testSet.set("grape");
testSet.set("hat");
testSet.set("ice cream");
testSet.set("jacket");
testSet.set("kite");
testSet.set("lion");

console.log(test.printTable());
console.log(testSet.printTable());
