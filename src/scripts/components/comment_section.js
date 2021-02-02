export default class CommentSection {
    constructor({ $target }) {
        this.init($target);
    }

    init($target) {
        const listContainer = document.createElement('div');
        listContainer.id = "comment-board";

        $target.appendChild(document.createElement("strong")).appendChild(listContainer);
    }

    makeCommentList(results) {
        const board = document.getElementById("comment-board");
        const frag = document.createDocumentFragment();
        const ulElement = document.createElement("ul");

        this.removeAllChilds(board);

        results.forEach(result => {
            const authorText = document.createTextNode(result.author);
            const commentText = document.createTextNode(result.comment);
            const idText = document.createTextNode(new Date(result.id));
            const liElement = document.createElement("li");

            liElement.appendChild(authorText);
            liElement.appendChild(document.createElement("br"));
            liElement.appendChild(idText);
            liElement.appendChild(document.createElement("br"));
            liElement.appendChild(commentText);
            ulElement.appendChild(liElement);
            frag.appendChild(ulElement);
        });

        board.appendChild(frag);
    }

    removeAllChilds(elem) {
        while (elem.lastElementChild) {
            elem.removeChild(elem.lastElementChild);
        }
    }
}