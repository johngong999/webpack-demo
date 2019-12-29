import { test } from './test.js';
import "core-js";
let arrowFunction = (...params) => {
    console.log(params);
    const arg = params.map(item => item + 1);
    return arg;
}
let a = Promise.resolve(2);
console.log('hello world');
test();
arrowFunction([1,2,3]);