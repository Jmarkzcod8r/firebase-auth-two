function matchOuses(step){
    if (step>0){
        if (step===1){
        let output = 6;
        return output 
        } else {
        let  output = (step * 6) - (step - 1);
        return output 
        }   } else {
            return 0
        }

}
    // return console.log(output);


console.log(matchOuses(87))

/*
Other Solutions:

function matchHouses(step) {
	return step === 0 ? 0 : 5 * step + 1;
}

function matchHouses(step) {
	if(step === 0) {
		return 0;
	}else{
		return (step*6)-(step -1);
	}
}

let matchHouses=n=>!n?0:5*n+1;

function matchHouses(step) {
	if (step) {
		return (step * 5) + 1;
	}
	
	return 0;
}

matchHouses = a => a && a*5+1

function matchHouses(step) {
	if (step === 0) return 0;
	if (step === 1) return 6;
	return matchHouses(step - 1) + 5
}

matchHouses = a => a && a*5+1

const matchHouses = s => s * 5 + !!s

function matchHouses(step) {
	return step!==0 ? (step*6)-(step-1) : 0;
}

function matchHouses(step) {
	if (step == 0 ) {
		return 0
	} else {
		return (step * 5)+ 1
	}
}





*/