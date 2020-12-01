let names = ['Edi', 'Bebe', 'Eric', 'Vero', 'Chris'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
 let upperCaseNames = names[index].toUpperCase();
  upperNames.push(upperCaseNames);
}

console.log(upperNames);