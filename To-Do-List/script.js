"use strict";

// 1. add 버튼을 눌렀을 때, list가 추가되도록
const addBtn = document.querySelector(".todos__add");
const deleteBtn = document.querySelector(".todos__delete");
const input = document.querySelector(".todos__input");
const todosItems = document.querySelector(".todos__items");

function addTodoItem(index) {
    const item = document.createElement("li");
    item.classList.add("todos__item");

    item.innerHTML = `
        <div class="todos__name">${input.value}</div>
        <button class="todos__delete">
            <i class="fas fa-times"></i>
        </button>
    `;
    input.value = "";
    todosItems.appendChild(item);

    // deleteBtn.addEventListener("click", () => {
    //     console.log("remove");
    //     item.removeChild();
    // });
}

addBtn.addEventListener("click", () => {
    addTodoItem();
});

// addBtns.forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//         addTodoItem(index);
//     });
// });

// 2. Enter를 눌렀을 때도, item을 추가한다.
// inputs.forEach((input, index) => {
//     input.addEventListener("click", () => {
//         addTodoItem(index);
//     });
// });
input.addEventListener("keyup", (event) => {
    if (input.value == "") return;
    if (event.key == "Enter") {
        addTodoItem();
    }
});

const nav = document.querySelector(".options");
const todos = document.querySelectorAll(".todos > section");

console.log(todos);
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
