import {instance} from "../api.config.js";

export const attachmentApi = {
  upload(img) {
    console.log(img)
    return instance.post(`/attachment/upload`, img)
      .then(response => response.data);
  },
}