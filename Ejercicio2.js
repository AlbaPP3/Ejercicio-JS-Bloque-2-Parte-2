//Con el método reduce() se itera sobre cada objeto en el array y se acumula los valores de la propiedad especificada en un nuevo array
/*function getValues(arr, propName) {
  return arr.reduce((result, obj) => {
    result.push(obj[propName]);
    return result;
  }, []);

}
//Ejemplo
const people = [
  { name: "Juanma", alt: 1.87 },
  { name: "Maria", alt: 1.68 },
  { name: "Ale", alt: 1.90 }
];

const alt = getValues(people, "alt");
console.log(alt); */

//Con el método map() itera sobre cada objeto en el array y devuelve un nuevo array con los valores de la propiedad especificada
function getValues(arr, propName) {
  return arr.map(obj => obj[propName]);
}
const people = [
  { name: "Juanma", alt: 1.87 },
  { name: "Maria", alt: 1.68 },
  { name: "Ale", alt: 1.90 }
];
const alt = getValues(people, "alt");
console.log(alt);