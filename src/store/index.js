import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import githubReducer from "./reducer/github"

const rootReducer = combineReducers({
    github: githubReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => console.warn("cek store", store.getState()))

export default store