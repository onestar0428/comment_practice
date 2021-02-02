export default class PageSection {
    constructor({$target, onClick}) {
        const pageBtnContainer = document.createElement("div");
        pageBtnContainer.id = "page-button-container";
        pageBtnContainer.addEventListener("click", onClick);

        const prevBtn = document.createElement("button");
        prevBtn.id = "prev-button";
        prevBtn.innerHTML = "이전";
        pageBtnContainer.appendChild(prevBtn);

        const nextBtn = document.createElement("button");
        nextBtn.id = "next-button";
        nextBtn.innerHTML = "다음";
        pageBtnContainer.appendChild(nextBtn);

        $target.appendChild(pageBtnContainer);
    }
}