import {
  createStore,
  combineReducers,
  applyMiddleware,
  AnyAction
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import clickReducer from "../modules/click/reducer";
import userReducer from "../modules/user/reducer";

export const reducers = combineReducers({
  click: clickReducer,
  user: userReducer
});

export default function configureStore() {
  const middlewares = [thunk];
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );

  const store = createStore(reducers, middlewareEnhancer);

  return store;
}

export const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppAction = AnyAction;
