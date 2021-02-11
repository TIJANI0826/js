function addTogether() {
    var checkNumber = function(number){
        if(Number.isInteger(number) === false){
            return undefined;
        }else{
            return number;
        }
    }
    if(arguments.length === 1){
        var a = checkNumber(arguments[0]);
        if(a === undefined){
            return undefined;
        }else{
            return function(arg2){ 
                var b = checkNumber(arg2);
                if(a === undefined || b === undefined){
                    return undefined;
                }
                else{
                    return a + b;
                }
            }
        }
    }
    else{
        var a = checkNumber(arguments[0]);
        var b = checkNumber(arguments[1]);
        if(a === undefined || b === undefined){
            return undefined;
        }else{
          return a + b
        }
    }
    return sum;
}
console.log(addTogether(4)([2]));