let a = 5;
let b = 10;
let b = a; 
b++;
console.log(a)
console.log(b)

// by ref:

let obj1 = {name: 'rrr', password: '123'}
let obj2 = obj1 // by ref

// by ref:
let c = [1,2,3,4,5]
let d = c;
d,push(1334234324)

// by val:

let c = [1,2,3,4,5]
let d = [].concat(c)
d.push(1334234324)


let obj = {a: 'a', b: 'b', c: 'c'}
obj.c=5
let clone = Object.assign({}, obj);
let clone2 = {...obj}
# just an idea deep copy - but takes much time if object is big:
let superClone= JSON.parse(JSON.stringify(obj))





