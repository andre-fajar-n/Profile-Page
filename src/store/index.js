import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import githubReducer from "./reducer/github"
import { statsReducer } from "./reducer/stats"

const rootReducer = combineReducers({
    github: githubReducer,
    stats: statsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => console.warn("cek store", store.getState()))

export default store