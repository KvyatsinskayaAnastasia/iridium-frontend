import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import magicListReducer from "./magicListReducer";
import thunk from "redux-thunk";
import magicItemReducer from "./magicItemReducer";
import { reducer } from "redux-form";
import abilityItemReducer from "./abilityItemReducer";
import abilityListReducer from "./abilityListReducer";
import raceListReducer from "./raceListReducer";
import raceItemReducer from "./raceItemReducer";

let reducers = combineReducers({
  profile: profileReducer,
  magicList: magicListReducer,
  magic: magicItemReducer,
  abilityList: abilityListReducer,
  ability: abilityItemReducer,
  raceList: raceListReducer,
  race: raceItemReducer,
  form: reducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;