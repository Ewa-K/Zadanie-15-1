/*Zadanie pierwsze*/

const name1= 'Hello';	
const name2 = 'World';	
const names = (`${name1} ${name2}`);										
console.log(names);	

/*Zadanie drugie*/

const multiply = (a = 1, b = 1) => a * b;
multiply(2 ,5);

/*Zadanie trzecie*/

const avarage = (...args) => console.log(args.reduce((sum, next) => sum + next) / args.length);	
avarage(1, 2, 3);

/*Zadanie czwarte*/

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
avarage(...grades);

/*Zadanie piąte*/

const differentValues = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstname, , lastname] = differentValues;
console.log(firstname);
console.log(lastname);

