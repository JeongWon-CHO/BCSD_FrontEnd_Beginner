// Expression interpolation (표현식 삽입법)
let a = 12;
let b = 7;
let c = "최예은";
let str = `저는 ${a + b}살이고, ${c}을 좋아합니다.`;
console.log(str);   //저는 19살이고, 최예은을 좋아합니다.





// Tagged templates
const ramenList = [
    {
        brand: '농심',
        items: ['신라면','짜파게티','참치마요','둥지냉면']
    },
    {
        brand: '삼양',
        items: ['삼양라면', '불닭볶음면']
    },
    {
        brand: '오뚜기',
        itmes: []
    }
];

console.log(`구매가능한 ${ramenList[0].brand}의 라면 : ${ramenList[0].items}`);
//구매가능한 농심의 라면 : 신라면,짜파게티,참치마요,둥지냉면
console.log(`구매가능한 ${ramenList[1].brand}의 라면 : ${ramenList[1].items}`);
//구매가능한 삼양의 라면 : 삼양라면,불닭볶음면
console.log(`구매가능한 ${ramenList[2].brand}의 라면 : ${ramenList[2].items}`);
//구매가능한 오뚜기의 라면 : undefined





//템플릿 리터럴
console.log(`string text line 1
string text line 2`);



// Nesting templates (중첩 템플릿)
const classes = `header ${ isLargeScreen() ? '' :
                `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;



// JS
document.querySelector("#id-checkbox").addEventListener(
    "click",
    function (event) {
        document.getElementById("output-box").innerHTML +=
        "죄송합니다! <code>preventDefault()</code> 때문에 체크할 수 없어요!<br>";
        event.preventDefault();
    },
    false,
);