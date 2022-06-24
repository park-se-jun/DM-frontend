import http from "./http-common";

class DefaultDataService {
    getAll() { return http.get("/authority/all/defaultdata"); }
}

export default new DefaultDataService();