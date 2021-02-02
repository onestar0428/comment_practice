export default class PageHandler {
    constructor() {
        let page = 1;
        let lastOperation = "";

        this.newPage = (id) => {
            lastOperation = id;
            switch (id) {
                case "next-button":
                    return page + 1;
                case "prev-button":
                    return page - 1;
            }
            return page;
        }

        this.update = () => {
            switch (lastOperation) {
                case "next-button":
                    ++page;
                    break;
                case "prev-button":
                    --page;
                    break;
            }
            lastOperation = "";
        }
    }
}