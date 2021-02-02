export default class HttpHandler {
    constructor({ onGet }) {
        this.onGet = onGet;
        this.init();
    }

    init() {
        this.requestHttp("GET");
    }

    requestHttp(method, data) {
        const httpRequest = new XMLHttpRequest();
        let url = "http://localhost:9999/api/comments";

        if (data && data.hasOwnProperty("page")) {
            url += `/page/${data.page}`;
        }

        httpRequest.open(method, url, true);
        httpRequest.setRequestHeader("Content-Type", "application/json");
        httpRequest.send(data);

        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState !== XMLHttpRequest.DONE) return;

            if (httpRequest.status === 200) {
                switch (method) {
                    case "GET":
                        this.onGet(JSON.parse(httpRequest.responseText));
                        break;
                    case "POST":
                        this.requestHttp("GET");
                        break;
                }
            } else {
                alert(`Status ${httpRequest.status}:\n${method} 요청에 실패하였습니다.\n잠시 후 다시 시도해 주세요.`);
            }
        }
    }
}
