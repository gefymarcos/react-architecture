import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import clickReducer from "../modules/reducer";

export const reducers = combineReducers({
  click: clickReducer
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
