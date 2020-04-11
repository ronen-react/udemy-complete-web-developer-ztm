const player = 'bob';
let experience = 100
let wizardLevel = false;
if (experience > 90){ 
	let wizardLevel = true;
}
#
const ob = {
	rr: 5,
	ff: false
	ee='rr'
}

const {rr,ff} = ob;

##
const name = 'john snow'

const obj = {
	[name]: 'hello',
	[1+2]: 'hhh'

}
##
const a = 'soow'
const b = true
const c = {};

// if key and value are the same:
const obj = {
  a,
  b,
  c
}

// Template strings:
const name= 'john'
const age = 34
const pet = 'horse'
const grr1 = `Hello ${name} you seem to be ${age+5} what is your ${pet}`;


// default argumetns:
function greet(name='', age=30, pet='cat'){
	return `Hello ${name} you seem to be ${age+5} what is your ${pet}`
}

// symbols()

let sym1=Symbol();
let sym2=Symbol('foo');
let sym3=Symbol('foo');

// arrow functions
function add(a,b) {
	return a+b
}

add = (a,b) =>a+b;