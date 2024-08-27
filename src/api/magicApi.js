import { instance } from "../api.config.js";

export const magicApi = {
  getAllMagic() {
    return instance.get(`/magic`)
      .then(response => response.data);
  },

  getMagic(id) {
    return instance.get(`/magic/${id}`)
      .then(response => response.data);
  },

  addMagic(magic) {
    return instance.post(`/magic`, magic)
      .then(response => response.data);
  }
}