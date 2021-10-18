const peroidBtn = document.querySelector(".nav__period-btn");
const peroidWrapper = document.querySelector(".nav__period-wrapper");
const peroidItems = document.querySelectorAll(".period__item");
const periodSelected = document.querySelector(".period__selected");

peroidBtn.addEventListener("click", () => {
    peroidWrapper.classList.toggle("active");
});

peroidItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        selectPeriod(item, index);
    });
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
