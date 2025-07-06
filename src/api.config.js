import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3000/"
});

export const multipartInstance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:3000/",
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

instance.interceptors.request.use(
  (config) => {
    if (!!sessionStorage.getItem("token")) {
      config.headers.Authorization = `Bearer ${sessionStorage.getItem("token")}`
    }
    return config
  }
)

multipartInstance.interceptors.request.use(
    (config) => {
        if (!!sessionStorage.getItem("token")) {
            config.headers.Authorization = `Bearer ${sessionStorage.getItem("token")}`
        }
        return config
    }
)

instance.interceptors.response.use(response => response, error => {
  // if (error.response.status === 403 ) {
  //   sessionStorage.clear();
  //   window.location = '/login'
  // }
});