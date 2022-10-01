function addthese (num){

    // This phase makes a list from 1 to the number
    let templist = [];
    let i=1;
    while (num !=0 ){
        templist.push(num);
        num = num -i;
    }
    // --------------
    let sum = 0;
    templist.forEach(el=>sum=sum + el
    )

    return console.log(sum);
}

addthese(600)
/* 
Other solutions:

function addUp(num) {
    return (num * (num + 1))/2;
  }

function addUp(num) {
if (num === 1) return 1;
return num + addUp(num - 1);
}

function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

let addUp = n => (n * (n + 1)) / 2

function addUp(num) {
	return (!num) ? 0 : num + addUp(num-1)
}

function addUp(num) {
  var total = 0;
  for (var i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

const addUp = n => Array
	.from({ length: n + 1 }, (v, i) => i)
	.reduce((a, b) => a + b);

addUp=n=>n*++n/2

function addUp(num) {
  var result = 0;
  for(var i=0; i <= num; i++){
    result = result + i;
  }
  return result;

function addUp(num) {
  var result = 0;
  for (var i = 0; i <= num; i++) {
    result = result + i;
  }
  return result;
}

*/
