// Отримання числа від користувача
let number;
number = prompt(`Введіть число:`);

// Функція для розрахунку суми цифр числа
function sumOfDigits(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += parseInt(num[i], 10);
  }
  return sum;
}

// Розрахунок суми цифр числа
let result;
result = sumOfDigits(number);

// Виведення результату
alert("Сума цифр числа " + number + " дорівнює " + result);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введіть число: ', (answer) => {
  // Тут можна виконати обчислення з отриманим числом
  console.log(`Ви ввели: ${answer}`);

  rl.close();
});