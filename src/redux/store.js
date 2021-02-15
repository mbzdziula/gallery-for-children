import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import galleryReducer from './reducers/galleryReducer'

const store = createStore(galleryReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
