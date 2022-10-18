str='apple'
function redundant(str) {
	str = str
	function f1 (str){
		return str
	}
	return f1
}