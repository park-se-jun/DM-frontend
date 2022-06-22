import http from "./http-common";

class TutorialService {
  getAll(params) {
    return http.get("/authority/user/tutorial", { params });
  }

  get(id) {
    return http.get(`/authority/user/tutorial/${id}`);
  }

  create(data) {
    return http.post("/authority/user/tutorial", data);
  }

  update(id, data) {
    return http.put(`/authority/user/tutorial/${id}`, data);
  }

  delete(id) {
    return http.delete(`/authority/user/tutorial/${id}`);
  }

  deleteAll() {
    return http.delete("/authority/user/tutorial");
  }
}

export default new TutorialService();