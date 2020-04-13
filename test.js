
function kthBiggestFrequency(a, k){
  var index = 1000;
  var result = -1;
  var obj1 = countOccurrences(a);
  var arr = Object.values(obj1);
  console.log(arr);
  arr.sort((x, y) => y-x);
  console.log(arr);
  var bigFre = arr[k-1];
  console.log(bigFre);
  var arr2 = [];
  for(var i in obj1){
      if(obj1[i] == bigFre){
          arr2.push(i);
          console.log(arr2);
      }
  }
  if(arr2.length > 0){
          for(var num of arr2)
          {
            console.log('num: ', num);
            console.log('a: ', a);
            console.log('index: ', a.indexOf(num));
              if(a.indexOf(parseInt(num)) < index){
                  index = a.indexOf(parseInt(num));          
              }
          
          }
          result = a[index];
  } 
  return result;
}

function countOccurrences(arr) {
      return arr.reduce(function(x1,x2){
        var check = x1[x2] + 1;
        if(check){
          x1[x2] = check;
        }else{
          x1[x2] = 1;
        }
        return x1;
      }, {});
}
arr1 = [1,1,1,3,2,3,2,4,4,4,1];
kthBiggestFrequency([1,1,1,3,2,3,2,4,4,4,1], 3);


