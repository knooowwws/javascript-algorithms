/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    if (str === ' ' || str === '') {return 'str'}
    if (str.endsWith(' ')) {
        return str[0].toUpperCase() + str.slice(1)
    }

    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize('молодость ')); // "Молодость Всё Простит"
console.log(capitalize(' ')); // "Молодость Всё Простит"