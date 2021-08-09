/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 *
*/

function fizzBuzz(num) {
    // Напишите код здесь
    const array = [];
    for (let i = 1; i <= num; i++) {
        array[i] = i;
        if (i % 3 === 0 && i % 5 === 0) {
            array[i] = "FizzBuzz";
        }
        else if (i % 5 === 0) {
            array[i] = "Buzz";
        }
        else if (i % 3 === 0) {
            array[i] = "Fizz";
        }
        console.log(array[i])
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(30));