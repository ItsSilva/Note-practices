import * as R from "ramda"; //Importing the entire library.
const sentence = "this is a example sentence with ramda";
const capitalSentence = R.toUpper(sentence);
console.log(capitalSentence); //THIS IS A EXAMPLE SENTENCE WITH RAMDA

console.log(capitalSentence); //This is a example sentence with lodash

import {sum, mul} from "./utils/utilsMath.js"; //Module import.
const value0 = sum(10, 20);
console.log(value0); //30

import upperCaseLetters from "./utils/upperCase.js"; //Default import.
console.log(upperCaseLetters("hello")); //HELLO

import dates from "./utils/date.js"; //Default import.
console.log(dates("2020-10-10")); //10/10/2020