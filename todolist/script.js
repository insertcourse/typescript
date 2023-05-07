"use strict";
const button = document.getElementById('inputForm--button'); // +버튼 , 타입지정
const add = document.getElementById('inputForm--add'); //todolist추가
const remove = document.getElementById('delete'); //모두삭제
const result = document.getElementById('addTodo--text'); //입력 창 
function addTodo() {
    if (!add.value) {
        alert('내용을 입력하세요!');
    }
    else {
        const list = document.createElement("li");
        const del = document.createElement('button');
        list.innerHTML = add.value;
        result.appendChild(list);
        list.appendChild(del);
        del.innerText = "x";
        del.style.cssText = "font-size: 20px; border: none; display: flex; margin: 8px 10px 0 auto; cursor: pointer;";
        del.addEventListener("click", deleteList);
        add.value = ""; //초기화
    }
}
function deleteList(event) {
    const remove1 = event.target.parentElement; //선택한 목록 한개만 지우기, target 속성을 HTMLElement로 지정
    remove1.remove();
}
function allClearList() {
    remove.innerText = '';
}
button.addEventListener('click', addTodo);
remove.addEventListener('click', allClearList);
