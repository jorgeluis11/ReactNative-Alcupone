import { applyMiddleware, compose, createStore } from 'redux'
import reducer from '../reducers/reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk';


let finalCreateStore = compose(
	applyMiddleware(logger(), thunk)//logger(), thunk)

)(createStore)

export default function configureStore( initialState = {todos:[]} ){
	 return finalCreateStore(reducer, initialState);
	 // return createStore(reducer, initialState);
}