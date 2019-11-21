/* @title: <<nodejs-object-oriented-prog>> program written in Node.js.
 * @desc: A simple starter using object oriented programming.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.0
 */

class Department {
    static list() {
        return [
            "Information Technology",
            "Human Resources",
            "Finance",
            "Marketing",
            "Sales"
        ];
    }
};

module.exports = Department;