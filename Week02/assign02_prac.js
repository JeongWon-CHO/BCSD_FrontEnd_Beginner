const ul = document.getElementById("ul");
const userInput = document.getElementById("input").value;


const add = () => {
    const userInput = document.getElementById("input").value;
    const li = document.createElement("li");

    const delBtn = document.createElement("button");
    const comBtn = document.createElement("button");
    
    delBtn.id ='delBtn'
    comBtn.id ='comBtn'

    li.innerText = userInput;

    delBtn.innerText = "삭제"
    comBtn.innerText = "완료"

    li.appendChild(delBtn);
    li.appendChild(comBtn);
    ul.appendChild(li);

    delBtn.addEventListener('click', () => ul.removeChild(li));
    comBtn.addEventListener('click', () => {
        li.style.textDecorationLine = "line-through";
        li.style.textDecorationColor = "red";
    });
}


const btn = document.getElementById("btn");

btn.addEventListener('click', add);