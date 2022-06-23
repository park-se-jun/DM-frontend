import http from "./http-common";

class SymptomService {
  getAll(params) {
    return http.get("/authority/admin/symptom", { params });
  }

  get(id) {
    return http.get(`/authority/admin/symptom/${id}`);
  }

  create(data) {
    return http.post("/authority/admin/symptom", data);
  }

  update(id, data) {
    return http.put(`/authority/admin/symptom/${id}`, data);
  }

  delete(id) {
    return http.delete(`/authority/admin/symptom/${id}`);
  }

  deleteAll() {
    return http.delete("/authority/admin/symptom");
  }
}

export default new SymptomService();