import http from "../http-commons";

class NewsDataService {
    getAll() {
        return http.get("/news");
    }

    findByTitle(title) {
        return http.post(`/news/${title}`);
    }

    get(id) {
        return http.get(`/news/${id}`);
    }

    updateNewsTitle(id, title) {
        return http.put(`/news/title?newsId=${id}&title=${title}`);
    }

    updateNewsContent(id, content) {
        return http.put(`/news/title?newsId=${id}&content=${content}`);
    }

    create(data) {
        return http.post("/news", data);
    }
}

export default new NewsDataService();