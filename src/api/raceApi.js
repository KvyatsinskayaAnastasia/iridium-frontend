import axios from "axios";

export const raceApi = {
  getAllRaces() {
    return axios.get(`/race`)
      .then(response => response.data);
  },

  getRace(id) {
    return axios.get(`/race/${id}`)
      .then(response => response.data);
  },

  addRace(race) {
    return axios.post(`/race`, race)
      .then(response => response.data);
  }
}