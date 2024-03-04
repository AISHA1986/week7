const arr1 = [1,12,3,4,5,7,678,6,99,8]
const arr2 = new Array()
const student = 'debare kosi aisha'.split(' ')

console.log(student(0))
console.log(student.length)

student.push('joshua')

const fewStds = ['kehinde','philips', 'ebade']
student.unshift('chukwuemeka','darlington')

student.shift()

student.pop()

student.splice(2,0,'promise')

student.splice(3,2, ...['efosa','franc','habeeb','aramide'])

student.splice(4,1)

student.sort((a,b)=> b.length - a.length)

student.reverse()

console.log(student)

arr1.sort((x,y)=>y-x)

const students2 = student.slice()

students2.pop()

student.push('john')

const student3 = [...student]

student3.pop()

const student4 = student.slice(0,5)


const eStd = student.find(name => name .endsWith('e'))

const eStds = student.filter(name => name.endsWith('e'))

const containsAB = student.filter(name => name.includes('a') && name.includes('b'))

function addTen(x){
    return x + 10
}

function TS(x){
    return x >= 30 && x <= 70
}

const upper = student => student.replace(student[0],student[0].toUpperCase())

function uppers(student){
    return student.replace(student[0], student[0].toUpperCase())
}

function sortData(a,b){
    return b-a
}


const toUpper = student.map(upper)




console.log(student.join('-'))
console.log(arr1)

