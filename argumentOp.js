function addTogether() {
    var args = [];
    var sum = 0;
    function checkNumber(number){
        if(Number.isInteger(number) === false){
            return undefined;
        }
    }
    for (var i = 0; i < arguments.length; ++i){
        args[i] = arguments[i];
        checkNumber(args[i]);
        else{
            sum = sum + args[i]
        }
    }
    return sum ;
}

console.log(addTogether(4));