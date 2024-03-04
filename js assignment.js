const numbers = [12,34,76,123,56,8,2,988,90,345]




//What is the sum of all numbers in the array?

function sumArr(arr){
    return Math.max(...arr)
}

function largeNum2(arr){
    return arr.sort((a,b)=>b-a)[0]
}

function smallNum2(arr){
    return arr.sort((b,a)=>a-b)[0]
}

//how many numbers in the array are divisible by 2
function even(arr){
    return arr.filter(num => num % 2 ==0).length + 'numbers'
}

//find the average of all numbers in the array

function avgArr(arr){
    const len = arr.length
    const sum = (arr.reduce((q,w)=>q+w,0))
}

//create a new array with only the numbers greater than 50
function fifty(arr){
    return arr.filter(num=> num > 50)
}

//check if all numbers in the array are even
function isEven(arr){
    return arr.map(num => num % 2 ==0 ? 'isEven' :'isOdd')
}

//find the index of number 76
function anyNum(arr, num){
    return arr.indexOf(num)
}
console.log(isEven(numbers))



const names = ['Alice','Bob','Charlie', 'Darlington', 'Emma','Fiona','George','Hannah', 'joy', 'julia'];


// how many names are there in the array
function namAny(names){

 return names.length   
}
console.log(namAny(names))

// is 'charlie' included in the array
function findName(names){
return check(names.includes('charlie'))   
} 

console.log(findName)
// find the longest names in the array
function lngName(names){
 return names.sort((a,b)=>b.length-a.length)[0] 
}
console.log(lngName(names))
// find the shortest names in the array
function smallName(names){
    return names.sort((a,b)=>a.length-b.length)[0]
}
console.log(smallName(names))
// create a new array with all names in the upperCase letters
function newArr(student){
    return student.map(a => a.toUpperCase())
}
console.log(newArr(names))
// sort  the names in alphabetical order
function order(names){
    return names.sort()
}
console.log(order(names))
// check if all array contains five character
function five(names){
    return names.filter(names => names.length < 5)
}
console.log(five(names))
// replace Alice with eleanor in the array 
function rePlace(names){
    return names.map(names => names === 'Alice' ? 'eleanor' : names)
}
console.log(rePlace(names))
// find the index of emma in the array
function eMma(arr){
    return arr.indexOf('Emma')
}
console.log(eMma)
// concatenate all names in the array into a single string seperated by coma
function conc(names){
    return names.join(0)
}
console.log(conc(names))













