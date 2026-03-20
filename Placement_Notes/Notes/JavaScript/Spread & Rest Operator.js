// console.log(num);
// let num = 20;

// Spread Operation => '...'

/*
    Object -> {key1 : value1, key2 : value2, key3:value3};
    {
        id : 101,
        name : "Ram",
        location : "Chennai",
        number : 00123
    }


*/

//Arrays

// let arr = [2,4,10,25,true,["red","Blue","Green"],22.5];
// console.log(arr[5]);
// console.log(arr[5][1]);


//Object

let obj = {
        id : 101,
        name : "Ram",
        location : "Chennai",
        number : 123,
        arr : ["red","blue","Green"]
    };
// obj = {...obj, number:1512121}
// console.log(obj);
// console.log(obj.name);
// console.log(obj["location"]);
// for(let k in obj){
//     console.log(k, obj[k]);
// }


// obj = {...obj,department:'cse'};
// console.log(obj)

// let arr1 = [1,2,3,4,5,6]
// let arr2 = ['hadhim','bhargav','daya']
// let arr3 = [...arr1,...arr2]
// console.log(arr3)
// console.log(typeof arr1)
// console.log(typeof arr2)
// console.log(typeof arr3)


// Rest Operator ==> '...'

// function method1(a,...b){
//     console.log(a);
//     console.log(b);
// }
// method1(10,20,30,40,50)


let a = obj;
// let name = obj;
let {location} = obj;
let {box,name,id} = obj;

console.log(a)
console.log(box)
console.log(location)
console.log(name)
console.log(id)