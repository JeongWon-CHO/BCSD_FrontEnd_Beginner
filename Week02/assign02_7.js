/* Ex_1
const mode = document.getElementById("jsmode");

mode.addEventListener("click", function() {
    if (mode.innerText === "바뀌기 전 text") {
        mode.innerText = "바뀐 text!";
    } 
    else {
        mode.innerText = "바뀌기 전 text";
    }
});
*/



/* Ex_2
wbtn = document.getElementById("white_btn");

wbtn.addEventListener("click", function() {
    document.getElementById("target").className = "white";
});


bbtn = document.getElementById("black_btn");

bbtn.addEventListener("click", function() {
    document.getElementById("target").className = "black";
});


borderbtn = document.getElementById("border_btn");

borderbtn.addEventListener("click", function() {
    document.getElementById("target").classList.add("border");
});
*/



/* Ex_3 클릭시, 보여주고, 클릭시, 숨기고
const btn = document.getElementById("btn");
const private = document.querySelector(".hide")

btn.addEventListener("click", ()=>{
    if(btn.innerText === "hide"){
        private.style.display="none"
        btn.innerText = "show"
    }
    else{
        private.style.display="block"
        btn.innerText = "hide"
    }
});
*/



/* getElementByClassName() 예시
let elements = document.getElementsByClassName("class-name");

for (int i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "새로운 내용";
}
*/