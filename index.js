/* @title: <<nodejs-object-oriented-prog>> program written in Node.js.
 * @desc: A simple starter using object oriented programming.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.0
 */

const Person = require('./domain/person');
const Employee = require('./domain/employee');
const Department = require('./domain/department');


// List of Persons (instantiation)
const person1 = new Person('Sofia', 36, 'Female');
const person2 = new Person('Frank', 38, 'Male');
const person3 = new Person('Lynn', 42, 'Female');

console.log('\n-----------------------------------------------');
console.log(`Person : ${person1.greeting}`);
console.log(`Person : ${person2.greeting}`);
console.log(`Person : ${person3.greeting}`);


// List of Employees (instantiation)
const employee1 = new Employee('89000', 'Michael', 30, 'Male');
const employee2 = new Employee('89001', 'Richard', 45, 'Male');
const employee3 = new Employee('89002', 'Claudia', 27, 'Female');

console.log('\n-----------------------------------------------');
console.log(employee1.matricule + ' - ' + employee1.greeting);
console.log(employee2.matricule + ' - ' + employee2.greeting);
console.log(employee3.matricule + ' - ' + employee3.greeting);


// List of Departments (Static)
console.log('\n-----------------------------------------------');
Department.list().forEach(item => {
    console.log(`Department : ${item}`);
});