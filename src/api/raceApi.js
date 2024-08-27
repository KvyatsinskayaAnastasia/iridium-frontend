import { instance } from "../api.config.js";

export const raceApi = {
  getAllRaces() {
    return instance.get(`/race`)
      .then(response => response.data);
  },

  getRace(id) {
    return instance.get(`/race/${id}`)
      .then(response => response.data);
  },

  addRace(race) {
    return instance.post(`/race`, race)
      .then(response => response.data);
  }
}