function convertToRoman(num) {
    var obj_roman = {
        1: 'I',
        5 : 'V',
        10 : 'X',
        50 : 'L',
        100 : 'C',
        500 : 'D',
        1000: 'M',
    } 
    //num = String(num);
    if(num ==  5){
        return obj_roman[5];
    }
    if(num == 10){
        return obj_roman[10];
    }
    if(num == 50){
        return obj_roman[50];
    }
    if(num == 100){
        return obj_roman[100];
    }
    if(num == 500) {
        return obj_roman[500]
    }
    if(num == 1000 ){
        return obj_roman[1000]
    }

    //less than 5
    if(num < 5){
        if(num < 4){
            var sum = obj_roman[1];
            for(let i=0;i<num-1;i++){
                sum += obj_roman[1];
            }
            return sum;
        }
        else{
            return obj_roman[1]+obj_roman[5]
        }
    }

    //between 5 and 9
    function less_than_five_greater_than_nine(num){
        if(num > 5 && num < 10){
            if(num > 5 && num <= 8){
                var sum = obj_roman[5];
                for(let i=0;i<3;i++){
                    sum += obj_roman[1];
                }
                return sum;
            }
            else{
                return obj_roman[1]+obj_roman[10]
            }
        }
    }
    //between 10 and 19
    function greater_ten_less_19(){
        if(num > 10 && num < 19){
            var num_1 = num-10;
            if(num_1 < 5){
                if(num_1 < 4){
                    var sum_less_than_five = obj_roman[1];
                    for(let i=0;i<num_1-1;i++){
                        sum_less_than_five += obj_roman[1];
                    }
                }
                return sum_less_than_five
            }
            else if(num_1 > 5){
                for(let i=0;i<num_1-1;i++){
                    sum_less_than_five += obj_roman[1];
                }
            }
        }
        else{
            return 
        }
    }
    

}

console.log(convertToRoman(18));