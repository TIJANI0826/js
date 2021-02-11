function steamrollArray(arr) {
    var results = [];
    function flatten(data, outputArray) {
            data.forEach(function (element){
                if(Array.isArray(element)) {
                    flatten(element, outputArray);
                } else {
                    outputArray.push(element);
                }
            });
    }
    flatten(arr, results);
    return results;
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));