function truthCheck(collection, pre) {
        var results = [];
        for( var k=0;k<collection.length;k++){ if( collection[k].hasOwnProperty(pre)) {
            if(!collection[k][pre]){
                results.push(false);
            }
            else{
                results.push(true);
            }
        }
        else{
            results.push(false)
        }
        }
        return results.every(function (x) {
            return x == true;
            
        })

}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));

