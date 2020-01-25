var arr = [2, 3, 6, 8, 9, 4, 10, 12, 14, 22, 51, 40, 69]
// it's about map

// var newArr = [];
// for(var i=0; i<arr.length; i++){
//     newArr.push(arr[i])
// }

// newArr;

// var res = arr.map((value) => value-2);
// res;

// function myMap(arr, callBack){
//     var newArr = [];

//     for(var i =0; i< arr.length; i++){
//         newArr.push(callBack(arr[i]))
//     }
//     return newArr;
// }

// var a = myMap(arr, function (value) {
//     return value+2
// })

// console.log(a);

var x = arr.reduce((a, b) => {
    return a + b;
})

console.log(x);
