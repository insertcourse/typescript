const button: HTMLButtonElement = document.getElementById('inputForm--button') as HTMLButtonElement; // +버튼 , 타입지정
const add: HTMLInputElement = document.getElementById('inputForm--add') as HTMLInputElement; //todolist추가
const remove: HTMLButtonElement = document.getElementById('delete') as HTMLButtonElement; //모두삭제
const result: HTMLElement = document.getElementById('addTodo--text') as HTMLElement //입력 창 

function addTodo() {
    if (!add.value) {
        alert('내용을 입력하세요!');
    } 
    if (add.value) {
        const list: HTMLLIElement = document.createElement("li");
        const del: HTMLButtonElement = document.createElement('button');
        list.innerHTML = add.value;
        result.appendChild(list);
        list.appendChild(del);       
        del.innerText = "x";      
        del.style.cssText = "font-size: 20px; border: none; display: flex; margin: 8px 10px 0 auto; cursor: pointer;"
        del.addEventListener("click", deleteList); 
        add.value = ""; //초기화
    }
}


function deleteList(event: MouseEvent) {
    const { target } = event; // 이벤트 객체의 target 속성을 분해 
    const remove1 = (target as HTMLElement).parentElement as HTMLLIElement;
    remove1.remove();
}

function allClearList() {
    remove.innerText = '';     
}

button.addEventListener('click', addTodo);
remove.addEventListener('click', allClearList);