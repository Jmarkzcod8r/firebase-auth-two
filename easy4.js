// function shiftToLeft(x, y) {
//     // console.log('asd');
// 	return x * 2 ** y
// }
// console.log(shiftToLeft(10, 3));

/**
Other Solutions:

const shiftToLeft = (x, y) => x * 2 ** y

const shiftToLeft = (x, y) => x * 2 ** y


 */

str='apple'
function redundant(str) {
	str = str
	function f1 (str){
		return str
	}
	return f1
}