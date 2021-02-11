function range(a,b) {
    let l = [];
    if(b-a==1 ||  a== b){
        return l.push(a);
    }else{
        l.push(a);
        return range(a+1,b);
    }
    return l ;
}

console.log(range(2,6))