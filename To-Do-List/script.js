"use strict";

// 구현 기능
// 1. 추가 버튼(+) 클릭 시, 아이템 추가
// 2. Enter시 아이템 추가
// 3. 삭제 버튼(x) 클릭 시, 아이템 삭제
// 4. 오늘 할일, 내일 할일, 모두 보기 버튼

const addBtns = document.querySelectorAll(".todos__add");
const deleteBtn = document.querySelector(".todos__delete");
const inputs = document.querySelectorAll(".todos__input");
const todosItems = document.querySelectorAll(".todos__items");
const nav = document.querySelector(".options");
const todos = document.querySelectorAll(".todos > section");

nav.addEventListener("click", (event) => {
    if (event.target.className.includes("options__today")) {
        todos[0].classList.add("open");
        todos[1].classList.remove("open");
    } else if (event.target.className.includes("options__tomorrow")) {
        todos[1].classList.add("open");
        todos[0].classList.remove("open");
    } else if (event.target.className.includes("options__both")) {
        todos[0].classList.add("open");
        todos[1].classList.add("open");
    }
});

// 추가 버튼 클릭 시 handleInput 함수 실행
addBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        handleInput(index);
    });
});

// input value 입력 후, enter키 눌렀을 시, handleInput 함수 실행
inputs.forEach((input, index) => {
    input.addEventListener("keyup", (event) => {
        if (!input.value) return;
        if (event.key == "Enter") {
            handleInput(index);
        }
    });
});

// 새로운 to-do 목록을 만드는 함수이다.
function createItem(text, index) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const icon = document.createElement("i");

    span.innerText = text;

    icon.setAttribute("class", "fas fa-times todos__delete");
    li.setAttribute("class", "todos__item");

    li.appendChild(span);
    li.appendChild(icon);

    icon.addEventListener("click", () => {
        deleteItem(li, index);
    });

    todosItems[index].appendChild(li);
}

// to-do 목록을 삭제하는 함수이다.
function deleteItem(li, index) {
    todosItems[index].removeChild(li);
}

// input을 제어하고, createItem을 호출하는 함수이다.
function handleInput(index) {
    const text = inputs[index].value;
    inputs[index].value = "";
    inputs[index].focus();
    if (!text) return;

    createItem(text, index);
}
