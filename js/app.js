

// Первый урок
//console.log('Hello world');

// Второй урок
// всегда ставить ; после каждой инструкции
/*
ДОМАШКА
Создай новый проект, подключи к нему файл script.js и
в строгом режиме выведи в консоль фразу «Я учу JS»

Так же напиши в комментарии какой вариант вызовет ошибку:
*/
/*
//Вариант №1
console.log('Учим JS')

//Вариант №2
console.log('JS')
console.log('Учим')

//Вариант №3
console.log('Учим') console.log('JS')

//Вариант №4
console.log('Учим);
console.log('JS');
*/
//Ну и конечно же, учи теорию.


//=================================================

/*
// ТОЧКА С ЗАПЯТОЙ
console.log('Учим JS');
['Учим', 'JS'].forEach(alert);
*/

/*
ЗНАЧЕНИЯ
В JavaScript есть несколько типов значений (values):
фиксированные значения (литералы), значения констант
и значения переменных.
*/
/*
//Примеры литералов
25							// литерал целого числа
23.8						// литерал дробного числа
'JavaScript'			// литерал строки
"JavaScript"			// литерал строки
[]							// литерал массива
[15,7,89]				// литерал массива
{}							// литерал объекта
{
	name: 'Фрилансер',
	surname: 'по жизни'
}							// литерал объекта
(ab|bc)					// литерал регулярного выражения

// В языках программирования константы и переменные
// используются для хранения значений данных.
const MAX_VALUE = 17;				// константа
var section = 'JS';					// переменная
let arr = ['HTML','CSS','JS'];	// переменная
*/

/*
ОПЕРАТОРЫ
В JavaScript имеется очень много различных операторов.
Они обозначают операцию, которую нужно произвести.
*/
/*
//Примеры операторов
//* / + - = и т.д.
console.log('Учим' + ' JS');
*/

/*
ВЫРАЖЕНИЯ
Выражение (expression) - это комбинация значений,
переменных и операторов, которые либо присваивают
переменной значение, либо возвращают какое-то
значение без его присваивания.
*/

/*
//Примеры выражения
let num = 4; //выражение присвоения
console.log(num);
'Учим' + 'JS'; //выражение без присвоения
*/

/*
КЛЮЧЕВЫЕ СЛОВА
Инструкции JavaScript часто начинаются с ключевого слова
(keyword). Оно (ключевое слово) предназначено для того, чтобы
определить какое действие JavaScript необходимо выполнить.
*/
/*
//Примеры ключевого слова
let num = 'Учим JS'; //указывает браузеру создать переменную
console.log(num);
*/

/*
БЛОК ИНСТРУКЦИЙ
JavaScript инструкции можно сгруппировать с помощью так
называемого блока, по сути фигурных скобок {...}.
Как правило, используется в функциях, циклах и так далее..
*/
/*
//Примеры блока инструкций
function name() {
	console.log('Учим');
	console.log('JS');
}
name();
*/


/*
КОММЕНТАРИИ
Не все инструкции JavaScript являются выполняемыми.
Код после двойных косых черт // или
между /* и * / рассматривается как комментарий.
*/

// Это комментарий
/*
	Это многострочный
	комментарий
*/


/*
ЧУВСТВИТЕЛЬНОСТЬ К РЕГИСТРУ
JavaScript является регистрозависимым языком.
Это значит, что ключевые слова, переменные,
имена функций и другие идентификаторы языка
должны содержать одинаковые наборы прописных и строчных букв.
*/
//Пример
//console.log('Учим JS'); //Без ошибок
//conSole.log('Учим JS'); //Ошибка


/*
ПРОБЕЛЫ
Рекомендуется добавлять пробелы в инструкции,
чтобы сделать код более читаемым.
JavaScript игнорирует несколько пробелов.
*/
/*
//Следующие строки эквивалентны:
let str = 'Текст';
let str='Текст';
*/
/*
	Как правило пробелы принято
	размещать вокруг операторов: =, +, -, * и /.
*/

/*
ДЛИННА СТРОКИ
Для лучшей читаемости кода рекомендуется избегать строк
с длиной более 80 символов. Если JavaScript инструкция имеет
большую длину, то её желательно разорвать.
В большинстве случае разрыв инструкции лучше осуществить
после какого-нибудь оператора.
*/
/*
//Пример
document.getElementById('text').innerHTML =
	'Текст для некого поля';
*/

/*
КАВЫЧКИ
В JavaScript могут использоваться одинарные,
двойные либо обратные кавычки, подробнее о них поговорим
в выпуске про строки. На данный момент нужно помнить,
что открытая кавычка без закрытой вызовет ошибку и наоборот.
*/

/*
//Пример
console.log('Учим JS'); // Одинарные
console.log("Учим JS"); // Двойные
console.log(`Учим JS`); // Обратные
*/


/*
Строгий режим "use strict";

console.log('Учим JS');

//"use strict" ниже игнорируется -
//он должен быть в первой строке

"use strict";

// строгий режим НЕ активирован
*/


//Урок 3


//  let - клчевое слово для объявления пременной

// let userInfo = {
// 	name: 'V',
// 	age: 30,
// 	address: {
// 		city: "dhdhdhhd"
// 	}	
// }
// for (const key in userInfo.address){
// 	console.log(userInfo.address[key]);
// }


// let userInfo = {};
// userInfo.name = "V";
// console.log(userInfo);
// userInfo.age = 30;
// console.log(userInfo);
// userInfo.name = "L";
// console.log(userInfo);
// delete userInfo.name;console.log(userInfo);

// Ширина скролла
// ___________________
// let scrollWidth = Math.max(
// 	document.body.scrollWidth, document.documentElement.scrollWidth,
// 	document.body.offsetWidth, document.documentElement.offsetWidth,
// 	document.body.clientWidth, document.documentElement.clientWidth
// );
// console.log(scrollWidth)

// const wind = window.innerWidth;
// console.log(wind)

// const scroll = wind - scrollWidth;
// console.log(scroll)
// ___________________________

// Заставьте браузер прокрутиться на 100px сверху спустя секунду после открытия страницы
// _____________________________
// function t(){
// 	window.scrollTo(0, 100);
// }

// setTimeout(t, 1000);
// _____________________________

// форма поиска, которая открывается по клику на иконку и закрывается по клику на любое место,
// сделать счетсик, закрытие на клавишу esc

// const searchInp = document.querySelector('.search__input');
// const searchLimit = searchInp.getAttribute('maxlength');
// const searchCount = document.querySelector('.search__counter span');

// searchCount.innerHTML = searchLimit;

// searchInp.addEventListener("keyup", searchSetCounter);
// searchInp.addEventListener("kedown", function(event) {
// 	if (event.repeat) searchSetCounter();
// });

// function searchSetCounter() {
// 	const searchCounterResult = searchLimit - searchInp.value.length;
// 	searchCount.innerHTML = searchCounterResult
// };

// const SearchBoby = document.querySelector('.search');
// document.addEventListener("click", search);

// function search(event) {
// 	if (event.target.closest('.search__button')) {
// 		SearchBoby.classList.toggle('_active');
// 	}
// 	if (!event.target.closest('.search')) {
// 		SearchBoby.classList.remove('_active');
// 	}
// }

let json1 = '{"ProfileId":"12w562qrx","PersonInfo":{"Name":"Василий Иванов","BirthDate":"12-09-1990","Citizenship":"Russian Federation"},"CardInfo":[{"CardNumber":"1234000145293333","CardName":"MASTERCARD GOLD","ExpDate":"21-05-2020"},{"CardNumber":"1234000145293232","CardName":"MIR КЛАССИЧЕСКАЯ","ExpDate":"20-12-2019"},{"CardNumber":"1234890456793131","CardName":"VISA CLASSIC","ExpDate":"30-02-2019"}]}'

let json = JSON.parse(json1)

  function getCardsArrayExpDate(json, date) {
	const lastNum = [];
	for(var i=0; i < json.CardInfo.length; i++){
		json.CardInfo[i].ExpDate = json.CardInfo[i].ExpDate.split("-").reverse().join("-")
		if (new Date(date) > new Date(json.CardInfo[i].ExpDate)) {
			lastNum.push(json.CardInfo[i].CardNumber.slice(-4))
		}
	}
	if (lastNum.length !=0) {
		console.log(lastNum)
	} else {
		console.log (null)
	}
  }

  getCardsArrayExpDate(json, '2022-02-02')


  
  
  
