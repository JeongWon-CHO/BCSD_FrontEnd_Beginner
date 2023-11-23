/*
let name = prompt("이름을 입력하세요", [""]);
alert(`당신의 이름은 ${name}입니다.`);

let isStudent = prompt("이름을 입력해 주세요.", [""]);

if (isStudent == "조정원") {
    alert("환영합니다, 관리자 님!");
}
else {
    alert("접근 권한이 없습니다");
}

a = 1;
b = 2;
let result = (a + b < 4) ? "미만" : "이상";
alert(result);


while (condition) {
    // 코드
    // 반복문 본문(body)라 불림
}

let i = 5
do {
    alert("do 블록 실행");
    i--;
}
while (i > 3);


let i = 0;
for (; i < 3; i++) {
  alert( i ); // 0, 1, 2
}

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    alert(i);
}
*/
/*
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`(${i},${j})의 값`, '');
        if (!input) break outer;
    }
}
alert('완료!');


for (let i = 1; i <= 10; i++) {
    i++;
    alert(i);
}



const obj = {
    name: 'curryyou',
    job: 'engineer'
}

for (const key in obj){
    console.log(`${key} : ${obj[key]}`);
}
// name : curryyou
// job : engineer



const arr = [10, 20, 30];
for (const item of arr){
    console.log(item); // 10, 20, 30 출력
}



[10, 20, 30].forEach((value, index, array)=>{
    console.log(`${index} : ${value}`); // 0 : 10, 1 : 20, 2: 30 출력
})


const map_reuslt = [1, 2, 3, 4].map((value, index, array)=>{
    console.log(value); // 1, 2, 3, 4 출력
    return value*10; // 각 요소에 10을 곱한 값을 배열로 반환
})

console.log(map_reuslt);  
// [ 10, 20, 30, 40 ]
*/

const filter_result = [1, 2, 3, 4].filter((value, index, array) => {
    console.log(value);
    return value % 2 == 0;
})

const filter_result = [1, 2, 3, 4].filter((value, index, array)=>{
    console.log(value); // 1, 2, 3, 4 출력
    return value%2 == 0; // value가 짝수인 값들을 배열로 반환
})

console.log(filter_result); 
// [ 2, 4 ]