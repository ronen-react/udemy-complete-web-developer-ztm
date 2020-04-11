// closure
const first = ()=>{
	const greet = 'Hi';
	const second = ()=>{
		alert(greet);
	}
	return second
}

const newFunc = first();
newfunc();


//  Currying

const multiply = (a,b)=> a*b;
const curriedMultply = (a)=>(b)=>a*b;
curriedMultply(3)(4);
multiplyBy5=curriedMultply(5);

// compose.
// f and g are functions:
const compose = (f,g)=>(a)=>f(g(a));
const sum=(num)=>n+1;
compose(sum,sum)(5)

//  side effects, functional purity:
side effect on a:
let a = 1;
sunction b(){
	a = 2
}