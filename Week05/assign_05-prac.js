const newDiv = document.createElement("div");
newDiv.classList = 'divvv';
document.body.append(newDiv);

const newBtn = document.createElement("button");
newDiv.append(newBtn);
newBtn.innerText = "버튼";
newBtn.classList = 'btnnn';

newBtn.addEventListener('click', () => {
    const newDiv2 = document.createElement("div");
    document.body.append(newDiv2);
    newDiv2.classList = 'divvv2';
    newDiv2.innerText = "11월 16일 오후 7시 방송제 \n'소민'이랑 꼭 오세요 \n1등 상품이 소니 헤드셋이랍니다";
})