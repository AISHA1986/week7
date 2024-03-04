const efosa = document.querySelectorAll('ol li')
const aramide = document.getElementsByTagName('p')[0]

const letters = aramide.textContent
const names = ['muhmmad', 'aisha']
//alert(letters)
//length property
efosa[0].innerHTML = '<strong>length property: </strong>'+letters.length
efosa[1].innerHTML = '<strong>first character:</strong>'+ letters.length[0]
efosa[2].innerHTML = '<strong>last character:</strong>'+ letters[letters.length-1]
efosa[3].innerHTML = '<strong>index of a prticular str : </strong>'+ letters.indexOf('x')
efosa[4].innerHTML = '<strong>index of  particular str :</strong>'+ letters.indexOf('o', letters.indexOf('dog'))
efosa[5].innerHTML = '<strong>index of a particular str :</strong>'+ letters.lastIndexOf('o', letters.indexOf('jump'))
efosa[6].innerHTML = '<strong>index of a str that does not exist:</strong>'+ letters.lastIndexOf('O')
efosa[7].innerHTML = '<strong>Uppercase : </strong>'+letters.toLocaleUpperCase()
efosa[8].innerHTML = '<strong>Lowercase : </strong>'+letters.toLocaleLowerCase()
efosa[9].innerHTML = '<strong>find  character at a particular index:</strong>'+ letters.charAt(10)
efosa[10].innerHTML ='<strong>Replace \'jump\' with \'walk\': </strong>' + letters.replace('jump','walk')
efosa[11].innerHTML = '<strong>Replace all \'o\' with \'0\': </strong>' + letters.replaceAll('o','0')
efosa[12].innerHTML = '<strong>converts a str to an array: </strong>' + letters.split('')
efosa[13].innerHTML = '<strong>cut a part of a str: </strong>' + letters.slice(letters.lastIndexOf('the'))
efosa[14].innerHTML = '<strong>cut a part of a str: </strong>' + letters.slice()
efosa[15].innerHTML = '<strong>add array name: </strong>' + ' '.concat(...names)
efosa[16].innerHTML = '<strong>add a name </strong>'+' muhmmad '.concat(aisha )
efosa[17].innerHTML = '<strong>names that start with \'p\ : </strong> '+ names.filter(name => name.startsWith('p'))
efosa[18].innerHTML = '<strong>names that end with \'e\': </strong>' + names.filter(name => name.endsWith('e'))
efosa[19].innerHTML = '<strong>names that end with \'r\' : </strong>' + names.filter(name => name.includes('r'))




console.log(aramide.textcontent)










