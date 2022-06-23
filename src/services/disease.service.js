import http from "./http-common";

class DiseaseService {
  getAll(params) {
    return http.get("/authority/admin/disease", { params });
  }

  get(id) {
    return http.get(`/authority/admin/disease/${id}`);
  }

  create(data) {
    return http.post("/authority/admin/disease", data);
  }

  update(id, data) {
    return http.put(`/authority/admin/disease/${id}`, data);
  }

  delete(id) {
    return http.delete(`/authority/admin/disease/${id}`);
  }

  deleteAll() {
    return http.delete("/authority/admin/disease");
  }
}

export default new DiseaseService();