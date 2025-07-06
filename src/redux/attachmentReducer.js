import { attachmentApi } from "../api/attachmentApi";

const SET_ATTACHMENT = 'SET_ATTACHMENT';

let initialState = {
  id: '',
  url: ''
}


const attachmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ATTACHMENT:
      return {
        ...action.attachment
      };
    default:
      return state;
  }
}

export const setAttachment = (attachment) => ({ type: SET_ATTACHMENT, attachment });

export const upload = (image) => async () => {
  let response = await attachmentApi.upload(image);
  if (!!response) {
    console.log(response);
  }
}

export default attachmentReducer;