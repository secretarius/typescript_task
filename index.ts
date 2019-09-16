function doCalculating(
  a: number,
  b: number,
  c: number
) {
  return (a * b) + c
}

var result = doCalculating(1, 3, 5)
console.log("doCalculating(): " + result);

// 

var myString: string = "test";
var myNumber: number = 1;
var myBoolean: boolean = true;



myString = myNumber.toString();
myBoolean = (myString === "test");
if (myBoolean) {
  myNumber = 1;
}

// Утиная типизация
var complexType = { name: "Alex", id: 2 };
complexType = { id: 2, name: "Olha" };

var complexObject = {
  id: 2,
  name: 'testObject'
}

console.log(`complexObject = ${JSON.stringify(complexObject)}`);

// Масиви
var arrayOfNumbers: number[] = [1, 2, 4];
arrayOfNumbers = [3, 4, 5, 6, 7, 8, 9];
console.log(`arrayOfNumbers : ${arrayOfNumbers}`);


// Масиви строк
var arrayOfStrings: string[] = ["first", "second", "thrid"];
// Цикл for
for (var i = 0; i < arrayOfStrings.length; i++) {
  console.log(` arrayOfStrings[${i}] = ${arrayOfStrings[i]}`);
}
// Цикл for..in
for (var itemKey in arrayOfStrings) {
  var itemValue = arrayOfStrings[itemKey];
  console.log(`arrayOfStrings[${itemKey}] = ${itemValue}`);
}
// Цикл for..of
for (var arrayItem of arrayOfStrings) {
  console.log(`arrayItem = ${arrayItem}`);
}

// Перечисления enum
enum DoorState {
  Open,
  Closed,
  Ajar
}

var openDoor = DoorState.Open;
console.log(`openDoor is: ${openDoor}`);

var closedDoor = DoorState["Closed"];
console.log(`closedDoor is: ${closedDoor}`);

//Перечисления строковие
enum DoorStateString {
  Open = "open",
  Closed = "closed",
  Ajar = "ajar"
}

var openDoorString = DoorStateString.Open;
console.log(`openDoorString is: ${openDoorString}`);

//Перечисления с использованием синтаксиса массива
var ajarDoor = DoorState[2];
console.log(`ajarDoor is : ${ajarDoor}`)

//оставшиися параметри
function testArguments(...argArray: number[]) {
  if (argArray.length > 0) {
    for (var i = 0; i < argArray.length; i++) {
      console.log(`argArray[${i}] = ${argArray[i]}`)
    }
  }
}

testArguments(9);
testArguments(1, 2, 3);

//функции обратного визова в js6
// var callbackFunction = function(text) {
//   console.log('inside callbackFunction' + text);
// }

// function doSomethingWithACallback(initialText, callback) {
//   console.log('inside doSomethingWithACallback' + initialText);
//   callback(initialText);
// }

// doSomethingWithACallback('my text', callbackFunction);


//функции обратного визова в ts анотирование
var callbackFunction = function(text: string) {
  console.log('inside callbackFunction' + text);
}

function doSomethingWithACallback(
  initialText: string,
  callback: (initialText: string) => void) {
  console.log('inside doSomethingWithACallback' + initialText);
  callback(initialText);
}

//error! doSomethingWithACallback('my text', 'is not a function it is string'); 
doSomethingWithACallback('my text', callbackFunction);

//Union types Обєдиненние типи
var unionType: string | number;
unionType = 1;
console.log(`unionType : ${unionType}`);
unionType = "test";
console.log(`unionType : ${unionType}`);

//Type guards
function addWithTypeGuard(
  arg1: string | number,
  arg2: string | number
): string | number {
  if (typeof arg1 === "string") {
    console.log('first argument is a string');
    return arg1 + arg2;
  }
  if (typeof arg2 === "number" && typeof arg2 === "number") {
    console.log("both arguments are number");
    return arg1 + arg2;
  }
  console.log('default return');
  return arg1.toString() + arg2.toString();
}

console.log(`addWithTypeGuard(1,2)= ${addWithTypeGuard(1, 2)}`);
console.log(`addWithTypeGuard("1", "2") = ${addWithTypeGuard("1", "2")}`);
console.log(`addWithTypeGuard(1, "2") = ${addWithTypeGuard(1, "2")}`);

//Type aliases Псевдоними типов
type StringOrNumber = string | number;
function addWithAlias(
  arg1: StringOrNumber,
  arg2: StringOrNumber
) {
  return arg1.toString() + arg2.toString();
}

// Null and undefined
function testUndef(test: null | number) {
  console.log('test parameter :' + test);
}
testUndef(1);
testUndef(null);

let x: number | undefined;
x = 1;
x = undefined;
//x = null; error TS2322: Type 'null' is not assignable to type 'number | undefined'

//unknown 
let unknownType: unknown = "an unknown string";
console.log(`unknownType : ${unknownType}`);
unknownType = 1;
console.log(`unknownType : ${unknownType}`);

let numberType: number;
//numberType = unknownType; error TS2322: Type 'unknown' is not assignable to type 'number'

numberType = <number>unknownType; //приведение unknownType к типу number

//Object rest and spread

let firstObj = { id: 1, name: "firstObj" };
let secondObj = { ...firstObj };
console.log(`secondObj : ${JSON.stringify(secondObj)}`)


let nameObj = { name: "Alex" };
let idObj = { id: 1 };
let obj3 = { ...nameObj, ...idObj }
console.log(`obj3 : ${JSON.stringify(obj3)}`);

let objPrec1 = { id: 1, name: "object prec 1" };
let objPrec2 = { id: 1001, description: "object prec 2 descripton" }
let obj4 = { ...objPrec1, ...objPrec2 };
console.log(`objPrec3 : ${JSON.stringify(obj4)}`);

let firstArray = [1, 2, 3, 4, 5];
console.log(`firstArray=${firstArray}`);
firstArray = [...firstArray, 6, 7, 8];
console.log(`firstArray=${firstArray}`);

let secondArray = [
  { id: 1, name: "name1" },
  { id: 2, name: "name2" }
]
console.log(`secondArray : ${JSON.stringify(secondArray)}`);
secondArray = [
  { id: -1, name: "name-1" },
  ...secondArray,
  { id: 3, name: "name3" }
]
console.log(`secondArray : ${JSON.stringify(secondArray)}`);

//Tuple кортежи
let tupleType: [string, boolean];
tupleType = ["test", false];
//tupleType = ["test"]; //error TS2322: Type '[string]' is not assignable to type '[string, boolean]'
console.log(`tupleType[0] : ${tupleType[0]}`);
console.log(`tupleType[1] : ${tupleType[1]}`);
let [t1, t2] = tupleType;
console.log(`t1 : ${t1}`)
console.log(`t2 : ${t2}`)

// Optional tuple Необязательные элементы кортежа
let optionalTuple: [string, boolean?];
optionalTuple = ["test", false];
console.log(`optionalTuple : ${optionalTuple}`);
optionalTuple = ["test"];
console.log(`optionalTuple : ${optionalTuple}`);

//Кортежи и синтаксис оператора остатка
function useTupleAsRest(...args: [number, string, boolean]) {
let [arg1, arg2, arg3] = args;
console.log(`arg1: ${arg1}`);
console.log(`arg2: ${arg2}`);
console.log(`arg3: ${arg3}`);
}
useTupleAsRest(1, "stringValue", false);
