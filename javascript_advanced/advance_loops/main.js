const basket = ['apples', 'orranges', 'grapes']
const detailedBasket = {

'apples': 3, 'orranges': 44, 'grapes': 32
}
// 1. old way:
for (let i=0; i<basket.length; i++){
	console.log(basket[i]);
}

// 2 forEach
basket.forEach(element =>{
	console.log(item);
})


// 3 for of. iterating arrays, strings
for (item of basket){
	console.log(item);
}

// 4 for in
// enumarating - object

for (item in detailedBasket){
	console.log(item);
}
