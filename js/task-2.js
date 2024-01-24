// Задача 2. Композиція масивів
// ВИКОНУЙ ЦЕ ЗАВДАННЯ У ФАЙЛІ task-2.js
// Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray(масив), secondArray(масив) і
// maxLength(число).Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі
//  елементи з secondArray.

// Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength
// елементів.
// В іншому випадку функція повинна повернути весь новий масив.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.У консоль будуть виведені
//  результати її роботи.
function makeArray(first1, second2, maxLength) {
  const result1 = first1.slice(first1);

  for (const result of second2) {
    result1.push(result);
  }
  if (maxLength < result1.length) {
    return result1.slice(0, maxLength);
  } else {
    return result1;
  }
}
// function makeArray(arr1, arr2, maxLength) {
//   let arrTotal = arr1.slice(arr1);
//   for (let a of arr2) {
//     arrTotal.push(a);
//   }
//   if (arrTotal.length > maxLength) {
//     return arrTotal.slice(0, maxLength);
//   } else return arrTotal;
// }
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
