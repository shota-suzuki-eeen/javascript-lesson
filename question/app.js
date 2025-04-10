// 基礎編 問題
// Q1 変数
let nickname = 'すずしょう';
let age = 26;
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + 'です。');

// Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// Q4 配列×オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

// Q5 四則演算
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / playerList.length);

// Q6 関数
function sayHello() {
  console.log('Hello');
};

sayHello();

let sayWorld = function () {
  return 'World';
};

console.log(sayWorld());

// Q7 メソッド
// let user = {
//   name: 'John',
//   age: 26,
//   bloodType: 'A',
//   favorite: 'card',
// };
user.birthday = '2000-09-27'
console.log(user);

function sayHallo() {
  console.log('Hello!');
}

user.sayHallo = sayHallo();

// Q8 引数
let calc = {
  add(x, y) {
    console.log(x + y);
  },
  subtract(x, y) {
    console.log(x - y);
  },
  multiply(x, y) {
    console.log(x * y);
  },
  divide(x, y) {
    console.log(x / y);
  }
};

calc.add(3, 4);
calc.subtract(11, 1);
calc.multiply(7, 7);
calc.divide(10, 2);

// Q9 返り値
function remainder(x, y) {
  return x % y;
};

console.log('5を3で割ったあまりは' + remainder(5, 3) + 'です。');

// Q10 スコープ
// function foo() {
//   let x = 1;
// }
// console.log(x);

// Q10 回答
// console.log(x);で出力しようとしているxは関数fooのローカル変数である為、スコープ外となりうまく参照することが出来ていない。
// その為console.log(x);での出力は未定義となりエラーが発生する。

// 応用編 問題
// Q1 標準組み込みオブジェクト
console.log(Math.random());

// Q2 コールバック関数
function sayHalloWorld() {
  console.log('Hello World!');
}

setTimeout(sayHalloWorld, 3000);

// Q3 if
let num = 18;
if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
};

// Q4 for
let numbers = [];
for (let i = 0; i < 100; i++) {
  // console.log(i);
  numbers.push(i);
};

console.log(numbers);

// Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < mixed.length; i++) {
  // console.log(mixed[i]);
  if (typeof mixed[i] === 'number' && mixed[i] % 2 === 0) {
    console.log('even');
  } else if (typeof mixed[i] === 'number' && mixed[i] % 2 !== 0) {
    console.log('odd');
  } else {
    console.log('not number');
  };
};