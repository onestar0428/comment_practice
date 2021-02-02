export default class InputSection {
    constructor({ $target }) {
        this.target = $target
        this.init();
    }

    init() {
        const inputContainer = document.createElement("div");
        inputContainer.id = "input-container";

        const nameText = document.createTextNode("이름");
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.id = "name-input";
        inputContainer.appendChild(document.createElement("strong")).appendChild(nameText);
        inputContainer.appendChild(nameInput);
        inputContainer.appendChild(document.createElement("br"));

        const contentText = document.createTextNode("본문");
        const contentInput = document.createElement("input");
        contentInput.type = "text";
        contentInput.id = "content-input";
        inputContainer.appendChild(document.createElement("strong")).appendChild(contentText);
        inputContainer.appendChild(contentInput);

        this.target.appendChild(inputContainer);
    }

    getValues() {
        const author = document.getElementById("name-input").value;
        const comment = document.getElementById("content-input").value;

        return { author: author, comment: comment };
    }

    inputValidation(name, content) {
        let validation = true;

        if (name.length < 1 || content.length < 10) {
            alert("이름은 최소 1 글자, 본문은 최소 10 글자 이상 입력해주세요.");
            validation = false;
        }

        return validation;
    }
}
