import axios from "axios";

export const magicApi = {
  getAllMagic() {
    return axios.get(`/magic`)
      .then(response => response.data);
  },

  getMagic(id) {
    return axios.get(`/magic/${id}`)
      .then(response => response.data);
  },

  addMagic(magic) {
    return axios.post(`/magic`, magic)
      .then(response => response.data);
  }
}