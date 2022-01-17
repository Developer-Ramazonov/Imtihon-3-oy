var a = 10000

function isComplex(a){
    let sum = 0;
    for(let i = 1; i<=a/2; i++){
        if(a%i === 0){
            sum += i;
        }
    }

    return a===sum
}

for(let i = 1; i<=a; i++){
    if(isComplex(i)){
        console.log(i);
    }
}