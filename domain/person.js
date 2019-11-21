/* @title: <<nodejs-object-oriented-prog>> program written in Node.js.
 * @desc: A simple starter using object oriented programming.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.0
 */

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    get greeting() {
        return `My name is ${this.name}, ${this.age} years old, and I am a ${this.gender}`;
    }
};

module.exports = Person;