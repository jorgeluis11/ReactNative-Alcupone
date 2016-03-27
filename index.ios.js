<<<<<<< HEAD
import React from "react-native";
import Root from "./src/config/root";

const {
  AppRegistry
} = React;

AppRegistry.registerComponent("App", () => Root);
=======
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';

class Alcupone extends Component {
  constructor(props){
    super(props)
    this.state =  {
     loading:true,
     list:  new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    fetch("http://gruponaso.herokuapp.com/?start=0&index=0&list=gustazos")
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        loading:false,
        list: this.state.list.cloneWithRows(responseData.items),
      })
    })
  }

  renderList(groupon){
  return(
      <View style={styles.container}>
        <Image 
          source={{uri:groupon.image}}
          style={styles.image}
        />
        <Text>{groupon.title}</Text>
      </View>
    )
  }

  render() {
    if (this.state.loading) 
      return(
              <View style={styles.loading}>
                <Text>
                  Loading...
                </Text>
              </View>
            )
    return (
      <View style={styles.container}>
        <ListView 
        dataSource={this.state.list}
        renderRow={this.renderList}/>
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image:{
    width:100,
    height:100
  },
  container:{
    flex: 1,
    flexDirection:"row",
  },
  leftContainer:{

  },
  rightContainer:{

  }
  });


AppRegistry.registerComponent('Alcupone', () => Alcupone);
>>>>>>> 14c0c8fa603d9dc94a20c4c45c3394d76cb3b716
