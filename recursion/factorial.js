function factorial(number){
    if(number == 0){
        return 1;
    }else{
        return number * factorial(number-1)
    }
}
console.log(factorial(1))