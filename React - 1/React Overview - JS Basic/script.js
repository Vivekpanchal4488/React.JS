// Basic JavaScript to create and append an h1 element with "Hello World" text

var h1 = document.createElement('h1')
h1.innerHTML = "Hello World";
document.body.appendChild(h1);

// Import and Export 
import name from './app.js';
import {a} from './app.js';

console.log(a);
console.log(name);
