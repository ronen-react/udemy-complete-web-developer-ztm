const array = [1,2,3,[4,5],6]
let dd = array.flat()
const array = [1,2,3,[4,[5]],6]
let dd = array.flat(2)

// flatMap


const array = [1,2,3,[4,5],6]
const flatArray = array.flatMap(rr => {
	rr+6
})

// trimStart trimEnd
uu = '   werwerwerew'
vv = 'erwerwerw    '
uu.trimStart()
vv.trimEnd()
