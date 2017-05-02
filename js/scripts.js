var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var arr = allNames.concat(femaleNames,maleNames);
var newName = 'Marian'

if ( allNames.indexOf(newName) === -1 ) {
    allNames.push(var newName);
} 