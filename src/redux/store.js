import {
    createStore,
    applyMiddleware
} from "redux";
import {
    Authenticate
}
from "./authenticate/Authenticate"
import thunkMiddleware from "redux-thunk";

const store = createStore(
    Authenticate, applyMiddleware(thunkMiddleware)
)

export default store;