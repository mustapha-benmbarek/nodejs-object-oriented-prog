/* @title: <<nodejs-object-oriented-prog>> program written in Node.js.
 * @desc: A simple starter using object oriented programming.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.0
 */

const Person = require('./person');

class Employee extends Person {
    constructor(id, name, age, gender) {
        super(name, age, gender);
        this.id = id;
    }

    get matricule() {
        return 'Employee ID: ' + this.id;
    }
};

module.exports = Employee;
