/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";
import Main from "../containers/Main";
import NavigationBar from "./navigation-bar";

let {
  Navigator,
  View,
  Text,
  Image,  
  StyleSheet,

} = React;

class Scene extends React.Component {
  renderScene(route: Object, navigator: Object) {
    const Component = route.component;
    return (
      <View style={{flex: 1}}>
     
        <NavigationBar
          backgroundStyle={{backgroundColor: "#FA563A"}}
          navigator={navigator}
          route={route}
          title={route.title}
          titleColor="white"
        />
        <Component
          navigator={navigator}
          route={route}
          {...route.passProps}
        />
        </View>
    );
  }
  render() {
    return (
        <Navigator
          style={{flex: 1, backgroundColor:'transparent'}}
          renderScene={this.renderScene}
          initialRoute={{
            component: Main,
            title: "Alcupone"
          }}
        />
    );
  }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 1024,
        height: 768,
    },
    navigatorContainer: {
        flex: 1,
        // backgroundColor: '#FF0000'
    }
});

export default Scene;