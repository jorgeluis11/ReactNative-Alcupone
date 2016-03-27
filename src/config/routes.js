import React, {Component} from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import Main from '../containers/Main'
// import ForecastContainer from' ../containers/ForecastContainer'
// import DetailContainer from '../containers/DetailContainer'
import configureStore from '../store/store'
import { Provider } from 'react-redux'

let initialState =  {

    grouponList:[
            // {id:1,
            // name:'groopanda',
            // active:false},
            {id:2,
            name:'gustazos',
            active:false},
            {id:3,
            name:'oferta',
            active:false}, 
            {id:4,
            name:'ofertones',
            active:false}, 
            // {id:5,
            // name:'peroquedescuentos',
            // active:false}, 
            {id:6,
            name:'prgoza',
            active:false}, 
            {id:7,
            name:'kokigo',
            active:false}],
            // {id:8,
            // name:'puertoricolike',
            // active:false}],
    list:[],
    loading:false
}

let store = configureStore(initialState)

var routes = (
	<Provider store={store}>
	  <Router history={hashHistory}>
	    <Route path='/' >
	    	<IndexRoute component={Main} />
	    </Route>
	  </Router>
  	</Provider>
);

	    	// <Route path='jorge/' component={HomeContainer} />

//   // <Route path='forecast/:city' component={ForecastContainer} />
    //   // <Route path='detail/:city' component={DetailContainer} />
// class Contacts extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>aaa</div>
//     );
//   }
// }

export default routes;