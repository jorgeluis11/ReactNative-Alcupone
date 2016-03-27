import React, { Component, View, Text, Image, StyleSheet } from 'react-native'
// var GetCityContainer = require('../containers/GetCityContainer');

// const styles = {
//   container: {
//     backgroundSize: 'cover',
//     backgroundImage: "url('app/images/pattern.svg')",
//     display: 'block',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100%',
//     width: '100%'
//   },
//   header: {
//     fontSize: 45,
//     color: 'black',
//     fontWeight: 100,
//   },
// }

class Grupon extends Component {
  constructor(props){
    super(props)
    // this.state ={
    //   noImage: require('../img/oferta.png'),
    // }
  }

  render(){
    var {image, title, from, price} = this.props.grupon;
    // let img = `app/img/${from}.png`
    // let imageClass = `img-size`
    // var image = 
    if (!this.props.grupon.image) 
      image = <Image style={styles.image} source={this.state.noImage}></Image>;
    if (this.props.grupon.image) 
      image = <Image style={styles.image} source={{uri:image}}></Image>;
    if(title.length > 200){
      title = title.substr(0,200)+"...";
    }

    // let fromImageClass = from?`groupon-image from-logo ${from}`:``
    console.log("Groupon Props",this.props);
    return (
        <View>
            <View style={styles.imageContainer}>
              {image}
            </View>
            <View style={styles.grouponInfoRow}>
                <Text style={styles.grouponInfoHalf}>
                  {price}
                </Text>
                <Text style={styles.grouponInfoHalf}>
                  {from}
                </Text>
            </View>
            <Text style={styles.textContainer}>
                {title}
            </Text>
        </View>
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
  imageContainer:{
    height:200,

  },
  textContainer:{
    padding:10
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
    flex:1,
    resizeMode: 'cover'
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
  },
  grouponInfoHalf:{
    color:"white",
    fontSize:25,

  },
  grouponInfoRow:{
  flex:1,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-around',
  backgroundColor:'#FA563A',
  height: 60,
  // overflow: hidden,
  }
});

// <Image source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/> 
  // <a href={this.props.grupon.link} target="_blank">
      // <div className="groupon-col margin-top-sm">
      //   <div className="groupon-image-cut">
      //     <img className="groupon-image" src={image}></img>
      //   </div>
      //   <div className="groupon-info-row">
      //     <h3>{this.props.grupon.price}</h3>
      //     <div>
      //       <img className={imageClass} src={img}>
      //       </img> 
      //     </div>
      //    </div>
      //   <p className="description">{title}</p>
        
      // </div>
      // </a>
export default Grupon;