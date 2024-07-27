import axios from "axios";

export const abilityApi = {
  getAllAbilities() {
    return axios.get(`/ability`)
      .then(response => response.data);
  },

  getAbility(id) {
    return axios.get(`/ability/${id}`)
      .then(response => response.data);
  },

  addAbility(ability) {
    return axios.post(`/ability`, ability)
      .then(response => response.data);
  }
}