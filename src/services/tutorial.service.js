import http from "./http-common";

class TutorialService {
  getAll(params) {
    return http.get("/authority/all/tutorial", { params });
  }

  get(id) {
    return http.get(`/authority/all/tutorial/${id}`);
  }

  create(data) {
    return http.post("/authority/all/tutorial", data);
  }

  update(id, data) {
    return http.put(`/authority/all/tutorial/${id}`, data);
  }

  delete(id) {
    return http.delete(`/authority/all/tutorial/${id}`);
  }

  deleteAll() {
    return http.delete("/authority/all/tutorial");
  }
}

export default new TutorialService();