function palindrome(text){
    var a = text.replace(/[\W_]+/g,'').toLowerCase();
    var b = text.replace(/[\W_]+/g,'').toLowerCase().split('').reverse().toString();
    b = b.replace(/[\W_]+/g,'')
    var c = a == b ? true : false;
    return c

}

console.log(palindrome("My age is 0, 0 si ega ym."));