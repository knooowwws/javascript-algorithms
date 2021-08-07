/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 *
*/

function anagram(str1, str2) {
    // Напишите код здесь
    const arr1 = str1.toLowerCase().split("").sort();
    const arr2 = str2.toLowerCase().split("").sort();
    for (let i=0; i<arr1.length; i++) {
        if(arr1.length===arr2.length) {
            if (arr1[i]===arr2[i]){
                return true
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Finder')); // true
console.log(anagram('hello', 'bye')); // false