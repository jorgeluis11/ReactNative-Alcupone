/* @flow */

import React from "react-native";
import { Provider } from "react-redux/native";
import configureStore from "../store/store";
import Scene from "../components/scene";

let initialState =  {

    grouponList:[
            // {id:1,
            // name:'groopanda',
            // active:false},
              {id:3,
            active:false,
             name:'gustazos',
            image:require('../img/gustazos.png')
        }, 
            {id:2,
            active:false,
            name:'oferta',
            image:require('../img/oferta.png')
        },
          
            {id:4,
            active:false,
             name:'ofertones',
            image:require('../img/ofertones.png')
        }, 
            // {id:5,
            // name:'peroquedescuentos',
            // active:false}, 
            {id:6,
            active:false,
             name:'prgoza',
            image:require('../img/prgoza.png') 
        }, 
            {id:7,
            active:false,
             name:'kokigo',
            image:require('../img/kokigo.png') 
        }],
            // {id:8,
            // name:'puertoricolike',
            // active:false}],
    list:[],
    loading:false
}

const store = configureStore(initialState);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Scene />}
      </Provider>
    );
  }
}

export default Root;