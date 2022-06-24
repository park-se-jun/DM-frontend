import http from "./http-common";

class MatchService {
    getAll(params) {
        return http.get("/authority/all/match", { params });
    }

    get(id) {
        return http.get(`/authority/all/match/${id}`);
    }

    getUser(id) {
        return http.get(`/authority/user/match/${id}`);
    }

    create(data) {
        return http.post("/authority/user/match", data);
    }

    update(id, data) {
        return http.put(`/authority/user/match/${id}`, data);
    }

    delete(id) {
        return http.delete(`/authority/user/match/${id}`);
    }

    deleteAll() {
        return http.delete("/authority/user/match");
    }

    findByWord(word) {
        return http.get(`/authority/all/match?word=${word}`);
    }
}

export default new MatchService();