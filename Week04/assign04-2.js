document.querySelector("#id-checkbox").addEventListener(
    "click",
    function (event) {
        document.getElementById("output-box").innerHTML +=
        "죄송합니다! <code>preventDefault()</code> 때문에 체크할 수 없어요!<br>";
        event.preventDefault();
    },
    false,
);

/*
//1. 고전이벤트사용
문서객체선택.on이벤트타입명 = function(이벤트객체매개변수){

}

//2. addEventLister()사용
문서객체선택.addEventListener('이벤트타입',function(이벤트객체매개변수){

});
*/