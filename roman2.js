function convertToRoman(num) {
    var arr_romans = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
    var equiv_num = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    var roman_equiv = [1,5,10,50,100,500,1000]
    var new_array = []
    var new_num = 0;
    
    for(let i=equiv_num.length-1; i>-1; i--){
        new_array.push(Math.trunc(num/equiv_num[i]) * equiv_num[i]);
        num = num - (Math.trunc(num/equiv_num[i]) * equiv_num[i]);
    }
    var temp_array = new_array.length-1;
    var temp_push_in = []
    for (let i = 0; i < temp_array; i++) {
        if (new_array[i] != 0 ) {
            temp_push_in.push(new_array[i]);
        }
    }
 
    return temp_push_in;
}
console.log(convertToRoman(1002));