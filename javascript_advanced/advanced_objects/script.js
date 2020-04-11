// reference type
const object1 = {val: 10};
const object2=object1;
const object3 = {val: 10};
object1.val=15



// context

console.log(this == window)
//  true
// this refers to object it is inside of.

// now let's see:
const object4 = {
	a: function(){
		console.log(this)
	}
}
object4.a()

// instansiation

class Player{
	constructor(name, type){
		ths.name = name;
		this.type = type;
	}
}


class Wizard rxtend Player{
	constructor(name, type){
		super(name, type);
	}

}