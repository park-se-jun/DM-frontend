import http from "./http-common";

class TutorialService {
  getAll(params) {
    return http.get("/tutorial", { params });
  }

  get(id) {
    return http.get(`/tutorial/${id}`);
  }

  create(data) {
    return http.post("/tutorial", data);
  }

  update(id, data) {
    return http.put(`/tutorial/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorial/${id}`);
  }

  // deleteAll() {
  //   return http.delete("/tutorial");
  // }

}

export default new TutorialService();
