import { instance } from "../api.config.js";

export const abilityApi = {
  getAllAbilities(type) {
    return type && instance.get(`/ability?abilityType=${type}`)
      .then(response => response.data) || instance.get(`/ability`)
      .then(response => response.data);
  },

  getAbility(id) {
    return instance.get(`/ability/${id}`)
      .then(response => response.data);
  },

  addAbility(ability) {
    return instance.post(`/ability`, ability)
      .then(response => response.data);
  }
}