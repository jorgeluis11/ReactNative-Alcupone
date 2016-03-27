import React, { Component, View, Text, Image, StyleSheet,TouchableOpacity,TouchableHighlight } from 'react-native'
import actions from '../actions/actions'

TouchableOpacity


class Toggle extends Component{

	constructor(props){
		super(props);
		//		props.image = require('../img/'+'oferta'+'.png')
	}

	puke(site){
		return JSON.stringify(site)
	}

	render(){
		let press = this.props.site.active? styles.active:styles.btnRedOutline;
		let imageClass = `img-size ${this.props.site.name}`
		let buttonClass =  !this.props.site.active?`btn btn-red-outline toggle-col ${this.props.site.name}`:`btn btn-red-outline toggle-col ${this.props.site.name} active`
		return (
			<TouchableHighlight onPress={this.props.handleToggle} style={press} underlayColor="rgba(250,86,58, 0.8)">
				<Image style={styles.image} source={this.props.site.image}>
				</Image>
			</TouchableHighlight>
		)
	}

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  rightContainer: {
    flex: 1,
    paddingLeft:20
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'left',
  },
  year: {
    textAlign: 'left',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  image: {
    width:100, 
    height:30,
    resizeMode: 'stretch'
  },
  btnRedOutline:{
  		padding:5,
      paddingTop:10,

  		margin:7,
  		height: 55,
  		borderColor: '#dddddd',
    	borderWidth: 2,
	    // -webkit-transition: all ease-out .2s;
	},
	active:{
	  padding:5,
    paddingTop:10,
    margin:7,
	  height: 55,
	  backgroundColor: 'rgba(250,86,58, 0.8)',
	  borderColor: 'rgba(250,86,58, 0.8)',
	  borderWidth: 2,
	  opacity: 1,
	}
});

// const style= {
// 	toggleCol{
// 	  height:60,
// 	},
// }
// width: '32.32',
// 	  margin:'.5%',
// 	  padding:0,
	  

// 	btnRedOutline{
// 	    border: 2px solid #a8a4a0,
// 	    // -webkit-transition: all ease-out .2s;
// 	},

// 	btnRedOutline.active{
// 	  backgroundColor: 'rgba(250,86,58, 0.8)' ,
// 	  borderColor: 'rgba(250,86,58, 0.8)',
// 	  color: '#fff',
// 	  opacity: '1',
// 	},

// 	.btnRedOutline:hover{
// 	  background-color: rgba(250,86,58, 0.8) !important;
// 	  border-color: rgba(250,86,58, 0.8) !important;
// 	  color: #fff !important;
// 	  opacity: 1 !important;
// 	}
			// <View onClick={this.props.handleToggle} className={buttonClass}>

// 
export default Toggle;