function bitwiseAND(n1,n2){

    const bitn1 =(n1.toString(2))
    let Arr1 = Array.from(bitn1)

    const bitn2 =(n2.toString(2))
    let Arr2 = Array.from(bitn2)

    let length1 = Arr1.length
    let length2 = Arr2.length

    const diff = length1 - length2
    const absdiff = Math.abs(diff)

    function addtostart(absdiff, array){
        let i;
        for (i=0; i<absdiff;i++){
        array.unshift('0')
        }
    }

    if (length1<length2){
        addtostart(absdiff,Arr1)
        console.log(Arr1)
    } else {
        addtostart(absdiff,Arr2)
        console.log(Arr2)

    }

    console.log(Arr1)
    console.log(Arr2)

    let abslength =  Arr1.length

    function And(abslength, array1, array2){
        let i;
        let tempArr = [];
        for (i=0; i<abslength;i++){
            tempArr.push(array1[i]*array2[i]);

        }
        return tempArr // This function returns an array    
    }
    console.log(And(abslength, Arr1, Arr2))
    
    const OutArr = And(abslength, Arr1, Arr2)
    const strin = (JSON.stringify(OutArr));
    console.log(strin.replaceAll(',',''));
    const output = (strin.replaceAll(',',''))
    console.log(typeof(strin));
    console.log(typeof(OutArr))
 
    return output
}

console.log(bitwiseAND(7,12))

function bitwiseOR(n1,n2){

    const bitn1 =(n1.toString(2))
    let Arr1 = Array.from(bitn1)

    const bitn2 =(n2.toString(2))
    let Arr2 = Array.from(bitn2)

    let length1 = Arr1.length
    let length2 = Arr2.length

    const diff = length1 - length2
    const absdiff = Math.abs(diff)

    function addtostart(absdiff, array){
        let i;
        for (i=0; i<absdiff;i++){
        array.unshift('0')
        }
    }

    if (length1<length2){
        addtostart(absdiff,Arr1)
        console.log(Arr1)
    } else {
        addtostart(absdiff,Arr2)
        console.log(Arr2)

    }

    console.log(Arr1)
    console.log(Arr2)

    let abslength =  Arr1.length

    function OR(abslength, array1, array2){
        let i;
        let tempArr = [];
        for (i=0; i<abslength;i++){
            if (array1[i]+array2[i] >0 ){
                tempArr.push(1)
            } else { tempArr.push(0)}

        }
        return tempArr // This function returns an array    
    }
    console.log(OR(abslength, Arr1, Arr2))
    
    const OutArr = OR(abslength, Arr1, Arr2)
    const strin = (JSON.stringify(OutArr));
    console.log(strin.replaceAll(',',''));
    const output = (strin.replaceAll(',',''))
    console.log(typeof(strin));
    console.log(typeof(OutArr))
 
    return output
}

console.log(bitwiseOR(6,23))


function bitwiseXOR(n1,n2){

    const bitn1 =(n1.toString(2))
    let Arr1 = Array.from(bitn1)

    const bitn2 =(n2.toString(2))
    let Arr2 = Array.from(bitn2)

    let length1 = Arr1.length
    let length2 = Arr2.length

    const diff = length1 - length2
    const absdiff = Math.abs(diff)

    function addtostart(absdiff, array){
        let i;
        for (i=0; i<absdiff;i++){
        array.unshift('0')
        }
    }

    if (length1<length2){
        addtostart(absdiff,Arr1)
        console.log(Arr1)
    } else {
        addtostart(absdiff,Arr2)
        console.log(Arr2)

    }

    console.log(Arr1)
    console.log(Arr2)

    let abslength =  Arr1.length

    function XOR(abslength, array1, array2){
        let i;
        let tempArr = [];
        for (i=0; i<abslength;i++){
            if (array1[i]===array2[i] ){
                tempArr.push(0)
            } else { tempArr.push(1)}

        }
        return tempArr // This function returns an array    
    }
    console.log(XOR(abslength, Arr1, Arr2))
    
    const OutArr = XOR(abslength, Arr1, Arr2)
    const strin = (JSON.stringify(OutArr));
    console.log(strin.replaceAll(',',''));
    const output = (strin.replaceAll(',',''))
    console.log(typeof(strin));
    console.log(typeof(OutArr))
 
    return output.replaceAll(']','').replaceAll('[','')
}

console.log(bitwiseXOR(6,23))