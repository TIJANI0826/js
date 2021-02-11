// function gcd(number1, number2) {
//     let results = [];
//     let count = number1 > number2 ? number1 : number2;
//     for(let i=0;i<count;i++){
//         if(number1 % i == 0 && number2 % i==0){
//             results.push(i);  
//         }
//     }
//     return results[results.length -1]
// }
// console.log(gcd(12,15))

function gcd2(number1,number2){
    // let results = [];
    let num = number1 < number2 ? number1 : number2;
    function abc(a,b,count){
        if(a % count == 0 && b % count == 0){
            return count;
        }
        else{
            return abc(a,b,count-1);
        }
    }
    let results =  abc(number1,number2,num);
    return results;
    
}
console.log(gcd2(2154,458))


function bettergcd(a,b){
    if(!b){
        return a
    }else{
        return bettergcd(b, a%b)
    }

}
console.log(bettergcd(2154,458))