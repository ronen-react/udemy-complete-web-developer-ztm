// .padstart .padend
'Turtle'.padStart(10)
//  reuslt:
'          Turtle'

'Turtle'.padEnd(10)
//  reuslt:
'Turtle         '


// trailing commas in parameters function list...
const fun = (a,b,c,d,) ={
	console.log(a)
}

fun(1,2,3,4,)

/// Object.values Object.entries:
// before we had Objecy.keys
Object.entries
Objecy.values
Objecy.keys

let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr.Grinch'
}

Object.keys(obj).foreach((key, index) =>{
	console.log(key, obj[key])
}

Object.values(obj).foreach(value=> {
		console.log(value)
})

// entries: key and value:
Object.entries(obj).foreach(value=> {
		console.log(value)
})

// example: replace username# by #:

// entries: key and value:
Object.entries(obj).map(value=> {
	return value[1] + value[0].replace{'username', ''}

})
result:
['Santa0', 'Rudolf1', 'Mr.Grinch2']

// async - in later chapters
