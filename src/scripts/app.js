import InputSection from './components/input_section';
import PageSection from './components/page_section';
import UpdateSection from './components/update_section';
import CommentSection from './components/comment_section';
import PageHandler from './utils/page_handler';
import HttpHandler from './utils/http_handler';

export default class App {
    constructor($target) {
        const commentSection = new CommentSection({ $target });

        const pageHandler = new PageHandler();

        const pageSection = new PageSection({
            $target,
            onClick: function (e) {
                httpHandler.requestHttp("GET", { page: pageHandler.newPage(e.target.id) });
            }
        });

        const inputSection = new InputSection({
            $target
        });

        const updateSection = new UpdateSection({
            $target,
            onClick: function (e) {
                const author = document.getElementById("name-input").value;
                const comment = document.getElementById("content-input").value;

                if (inputForm.inputValidation(author, comment)) {
                    httpHandler.requestHttp("POST", JSON.stringify(inputForm.getValues()));
                }
            }
        });

        const httpHandler = new HttpHandler({
            onGet: function (result) {
                if (result.length > 0) {
                    commentSection.makeCommentList(result);
                    pageHandler.update();
                }
            }
        });
    }
}