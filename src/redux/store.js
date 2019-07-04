import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// redux-thunk ?
import thunk from './middleware/thunk';

import reducer from './reducers';

let reducers = combineReducers({
  starWarsCharacters: reducer
});

export default () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
