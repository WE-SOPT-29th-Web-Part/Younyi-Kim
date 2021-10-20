const input = document.querySelector(".tags__input");
const body = document.getElementsByClassName("body")[0];

input.addEventListener("keyup", (event) => {
    if (!input.value) return;
    if (event.key === "Enter") {
        const value = input.value;
        const tag = document.createElement("p");

        tag.classList.add("tag__item");
        tag.innerText = value;

        input.before(tag);

        input.value = "";

        // 태그 클릭 시, 삭제
        tag.addEventListener("click", () => {
            tag.remove();
        });
    }
});
