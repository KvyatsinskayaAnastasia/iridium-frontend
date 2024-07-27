const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  id: 1,
  username: 'Alice Wonko',
  status: 'status',
  characters: [
    {id: 1, name: 'Character Name', image: ''},
    {id: 2, name: 'Character Name', image: ''},
    {id: 3, name: 'Character Name', image: ''},
    {id: 4, name: 'Character Name', image: ''},
    {id: 5, name: 'Character Name', image: ''},
    {id: 6, name: 'Character Name', image: ''},
    {id: 7, name: 'Character Name', image: ''},
    {id: 8, name: 'Character Name', image: ''},
    {id: 9, name: 'Character Name', image: ''},
    {id: 10, name: 'Character Name', image: ''}
  ]
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...action.profile
      };
    default:
      return state;
  }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer;