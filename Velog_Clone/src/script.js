const body = document.getElementsByTagName("body")[0];
const peroidBtn = document.querySelector(".nav__period-btn");
const peroidWrapper = document.querySelector(".nav__period-wrapper");
const peroidItems = document.querySelectorAll(".period__item");
const periodSelected = document.querySelector(".period__selected");
const headerMenuBtn = document.querySelector(".header__item--menu");
const headerMenu = document.querySelector(".header__menu");
const posts = [...document.querySelectorAll(".post")];
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close");
const createPostBtn = document.querySelector(".header__item--btn-new");

// 기간 선택 dropdown을 표시하는 버튼의 클릭 이벤트 리스너
peroidBtn.addEventListener("click", () => {
    peroidWrapper.classList.toggle("active");
});

// 기간 선택 dropdown 아이템들의 클릭 이벤트 리스너
peroidItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        selectPeriod(item, index);
    });
});

// 헤더의 메뉴를 보여주는 버튼의 클릭 이벤트 리스너
headerMenuBtn.addEventListener("click", () => {
    headerMenu.classList.toggle("active");
});

// 각각의 post를 클릭 시, 모달창을 띄우는 이벤트 리스너
posts.forEach((post, index) => {
    post.addEventListener("click", () => {
        controlModal(post);
    });
});

// 새글 작성 버튼의 이벤트 리스너
createPostBtn.addEventListener("click", () => {
    const link = "./tag.html";
    location.href = link;
});

// Period Dropdown 함수
function selectPeriod(item, selectedIdx) {
    let text = item.innerText;
    periodSelected.innerHTML = text;

    peroidItems.forEach((item, idx) => {
        if (idx !== selectedIdx) item.classList.remove("selected");
    });

    item.classList.add("selected");
    peroidWrapper.classList.remove("active");
}

// Modal 창을 표시, 삭제하는 함수
function controlModal(post) {
    const modalPost = post.cloneNode(true);
    const closeBtn = document.createElement("button");

    modalPost.classList.add("post__modal");
    modalPost.classList.remove("post");

    closeBtn.classList.add("modal__close");
    closeBtn.innerHTML = `<i class="far fa-times-circle"></i>`;

    modal.appendChild(modalPost);
    modal.appendChild(closeBtn);

    modal.classList.add("active");
    body.style.overflow = "hidden";

    // Modal 창 닫기 버튼
    closeBtn.addEventListener("click", () => {
        modal.removeChild(modalPost);
        modal.removeChild(closeBtn);
        modal.classList.remove("active");
        body.style.overflow = "scroll";
    });
}
