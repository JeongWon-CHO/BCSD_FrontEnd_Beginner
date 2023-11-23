/*
var x = 100;
var y = x;

x = 99;

console.log(y);	// 100;


var x = { count : 100 };
var y = x;

x.count = 99;

console.log(y);	// 99


var list1 = [1, 2, 3];	// 메모리 주소 : 8765e 라고 가정
var list2 = [1, 2, 3];	// 메모리 주소 : 9524d 라고 가정

var isSame = list1 === list2;

console.log(isSame); // false


var list3 = [ 1, 2, 3];
var list4 = list3;

var isSame = list3 === list4;

console.log(isSame);	// true
*/

var updateAge = function () {
    this.age++;
};	// '메모리 주소 : 4737d' 라고 가정

var son = {
	age : 3,
    growUp : updateAge
};

var daugther = {
	age : 7,
    growUp : updateAge
};

var mother = {
	age : 38,
    growUp : updateAge,
    children : [ son, daugther ]
};

var father = {
	age : 38,
    growUp : updateAge,
    wife : mother,
    children : [ son, daugther ]
};

// Ex 3.1
if (father.growUp === son.growUp) {	// 4737d === 4737d
	console.log('성장 가능');
}	// 성장 가능

// Ex 3.2
if (father.children === mother.children) {
	console.log('부부!');
}	// false로 console이 찍히지 않음