import React, { Component, View, Text, Image, ListView, StyleSheet } from 'react-native'
import GiftedSpinner from 'react-native-gifted-spinner'

// import{ getSearchResult } from '../utils/foodHelpers'
import actions from '../actions/actions'
import Grupon from '../components/Grupon'


class GruponesContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      index: 0,
      types: 'CircleFlip',//['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
      size: 100,
      color: "#000000",
    }
  }

  render(){
    var loading =this.props.loading;
    if (loading) {
      return (
        <View style={styles.itemAlignCenter}>
          <GiftedSpinner style={styles.itemAlignCenter}/>
        </View>

        )
    };
    if (this.props.list.length == 0) 
      return (
          <View style={styles.itemAlignCenter} >
            <Text style={{alignSelf:'center', textAlign:'center',fontSize:22,color:"#444444"}}>Selecciona una pagina de Groupones!</Text>
          </View> 
        )

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  
    // return (
    //     <ListView
    //       style={styles.list} 
    //       dataSource={ds.cloneWithRows(this.props.list)}
    //       renderRow={this.renderList}/>
    //   )}

      return (
          <View style={{flex:1 ,flexDirection:'column', justifyContent:'center', flexWrap:'wrap'}}>
            {
              this.props.list.map((grupon, i) => <Grupon grupon={grupon} />)
            }
          </View> 
        )
    }

    // renderList(grupon){
    //   console.log(grupon);
    //   return(
    //     <Grupon grupon={grupon} />
    //   )
    // }
  }


var styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#d35400',
  // },

  list:{
    paddingLeft:10,
    paddingRight:10
  },

  itemAlignCenter:{
    alignSelf:'center',
    padding:10,
    paddingTop:40,
    justifyContent:'center'
  },

  spinner: {
    marginBottom: 50
  },

  // btn: {
  //   marginTop: 20
  // },

  // text: {
  //   color: "white"
  // }
});
 

// <div style={padding:5} >
//           {
//             this.props.list.map((grupon, i) => <Grupon dispatch={this.props.dispatch} grupon={grupon} key={i} />)
//           }
//         </div>  
    
  // handleSearchResult() {
  //   // const list = getSearchResult("Cheese");
  //   // this.setState(
  //   //   list 
  //   //   );
  // }

  // handleSubmit(event){
  //   event.preventDefault();
  //   console.log("submitted");
  // }

  // // async 
  // componentWillMount(){
  //   // this.props.dispatch(actions.getGrouponList());
  // }


    
    // var loading =this.props.loading;
    // if (loading) {
    //   let config = {
    //     // a few sensible defaults
    //     width: 5,
    //     radius: 10,
    //     length: 12,
    //     color:"#444444"
    //   }
    //   return (
    //     <div className="row row-heigh">
    //         <ReactSpinner config={config}/>
    //     </div>

    //     )
    // };
    // if (this.props.list.length == 0) 
    //   return (
    //       <div className="row row-heigh">
    //       <h3 style={{marginTop:"150px",textAlign:"center"}}>Selecciona una pagina de Groupones!</h3>
    //       </div> 
    //     )

    // return (
    //   <div className="row row-heigh">
    //     {
    //       this.props.list.map((grupon, i) => <Grupon dispatch={this.props.dispatch} grupon={grupon} key={i} />)
    //     }
    //   </div>  
      
    // )}
    


// GruponesContainer.contextTypes = {
//     router: React.PropTypes.object.isRequired
//   }

export default GruponesContainer;