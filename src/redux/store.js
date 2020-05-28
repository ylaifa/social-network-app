import {
    createStore,
    compose,
    combineReducers,
    applyMiddleware
} from "redux";
import {
    Authenticate
}
from "./authenticate/Authenticate"
import {
    postsReducer
}
from "./posts/reducer"
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    posts: postsReducer,
    authenticate: Authenticate
});


const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store;