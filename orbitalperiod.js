function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var new_arr = []
  for(let i = 0;i < arr.length;i++){
      var r = earthRadius + arr[i]['avgAlt'];
      var orbitalPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow(r,3)/GM));
      obj = { 'name' : arr[i]['name'], 'orbitalPeriod': orbitalPeriod}
      new_arr.push(obj);
  }
  
  
  return new_arr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));