alert('Задание 1');
let a = 10;
alert(a);
a = 20;
alert(a);
alert('Задание 2');
let year = 2007;
alert(`Год выпуска первого айфона ${year}.`);
alert('Задание 3');
let name = 'Брендан Эйх';
alert(`Имя создателя языка JavaScript ${name}`);
alert('Задание 4');
a = 10;
let b = 2;
alert(`Сумма ${a + b}`);
alert(`Разность ${a - b}`);
alert(`Произведение ${a * b}`);
alert(`Частное ${a / b}`);
alert('Задание 5');
let result = b ** 5;
alert(`2^5=${result}`);
alert('Задание 6');
a = 9;
alert(`Остаток деления ${a % b}`);
alert('Задание 7');
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);
alert('Задание 8');
let age = prompt('Сколько вам лет?');
alert(`Вам всего лишь ${age}. У Вас всё ещё впереди)`);
alert('Задание 9');
const user = {
    name: ' Петя',
    age: '25',
    isAdmin: '0',
};
user['city of residence'] = 0;
user.age = 40;
delete user['cite of residence'];
info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);
alert('Задание 10');
name = prompt('Как Вас зовут?');
confirm(`Вы уверены, что Вас зовут ${name}?`);
