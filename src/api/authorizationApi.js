import { instance } from "../api.config.js";

export const authorizationApi = {
  login(user) {
    return instance.post(`/authorization/login`, user)
      .then(response => response.data);
  },

  register(user) {
    return instance.post(`/authorization/register`, user)
      .then(response => response.data);
  },

  user() {
    return instance.get(`/authorization/user`)
      .then(response => response.data);
  }
}