// advance arrays:
const array=[1,2,10,16]
const double = []

const newArray = array.forEach((num)=>{double.push(num*2)})
console.log(newArray)


// map, filter, reduce:
// always have a return element. pure function, no side effect
const mapArray = array.map((num)=>{
	return num * 2
});


//in case of a single parameter, can omit the brackets.
// if function just returns, can omit the {}:

const mapArray = array.map(num=> num * 2);

// filter:

const filterArray = array.filter(num => {
	return num > 5
	}
)

// reduce: (accumulator initiated to 0)
const reduceArray = array.reduce((accumulator, num) =>{
	return accumulator + num
}, 0)