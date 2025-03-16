import { instance } from "../api.config.js";

export const characterApi = {
  getAllCharacters() {
    return instance.get(`/character`)
      .then(response => response.data);
  },

  getCharacter(id) {
    return instance.get(`/character/${id}`)
      .then(response => response.data);
  },

  addCharacter(character) {
    return instance.post(`/character`, character)
      .then(response => response.data);
  },

  generateCharacter(settings) {
    return instance.post(`/character/generate`, settings)
      .then(response => response.data);
  }
}