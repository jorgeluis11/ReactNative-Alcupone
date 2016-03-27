// import React, {Text, View} from "react-native";

import React, {Component, Text, View, ScrollView} from "react-native";
import { connect } from "react-redux/native";
import TogglesContainer from '../containers/TogglesContainer'
import GruponesContainer from '../containers/GruponesContainer'


// var GetCityContainer = require('./GetCityContainer');

// const styles = {
//   container: {
//     width: '100%',
//     height: '92%'
//   },
//   header :{
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     background: 'rgba(252, 90, 44, 0.89)',
//     color: '#fff',
//     padding: 5,
//   }
// }

// let {
//   // StatusBarIOS,
//   // StyleSheet,
//   Text,
//   // TouchableOpacity,
//   View
// } = React;



class Main extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <ScrollView
      style={{flex:1}}>
      <TogglesContainer list={this.props.grouponList} dispatch={this.props.dispatch} handleSubmit={this.handleSubmit}/>
      <GruponesContainer list={this.props.list} loading={this.props.loading} dispatch={this.props.dispatch} todos={this.props.todos}/>
    </ScrollView>
    );
  }
}


// Main.contextTypes = {
//     router: React.PropTypes.object.isRequired
//   }

//   Main.setDefaultProps = {
//       name:"jorge"

//   }

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(Main);
// export default Main;