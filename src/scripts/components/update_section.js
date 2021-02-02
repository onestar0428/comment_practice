export default class UpdateSection {
    constructor({ $target, onClick }) {
        this.target = $target;
        this.onClick = onClick;
        this.init();
    }

    init() {
        const commentBtn = document.createElement("button");
        commentBtn.id = "comment-button";
        commentBtn.addEventListener("click", this.onClick);

        const commentText = document.createTextNode("작성");
        commentBtn.appendChild(commentText);

        this.target.append(commentBtn);
    }
}
