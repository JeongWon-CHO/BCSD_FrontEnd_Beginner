/*
function showMessage(from, text = 'no text') {
    alert(from + ': ' + text);
}
showMessage('Ann');

let s = "My name is " + "JeongWon";
alert(s);


let x = 2;
alert( +x );

alert( +true );
alert( +"" );

let a = (1 + 2, 3 + 4);

alert( a ); // 7 (3 + 4의 결과)


alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

alert( '2' > 1 ); // true
alert( '01' == 1 ); // true

alert( 0 == false ); // true
alert( '' == false ); // true

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)


alert( 1 || 0 );

alert( null || 1 );
alert( null || 0 || 1 );

alert( undefined || null || 0 );



// 첫 번째 피연산자가 truthy이면,
// AND는 두 번째 피연산자를 반환합니다.
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// 첫 번째 피연산자가 falsy이면,
// AND는 첫 번째 피연산자를 반환하고, 두 번째 피연산자는 무시합니다.
alert( null && 5 ); // null
alert( 0 && "아무거나 와도 상관없습니다." ); // 0
*/
alert( !null );
alert( !!null );

alert( !!"non-empty string" ); // true
alert( !!null ); // false

alert( alert(1) && alert(2) );