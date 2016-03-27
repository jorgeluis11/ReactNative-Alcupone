import React, {Component, View} from "react-native";
import Toggle from '../components/Toggle'
import actions from '../actions/actions'


class TogglesContainer extends Component {
  constructor(props){
    super(props)
    this.handleToggle.bind(this);
  }

  handleToggle(id, active){
    if (!active) {
      this.props.dispatch(actions.loading());
      this.props.dispatch(actions.toggleGroupon(id));
      this.props.dispatch(actions.getToggledList(this.props.list))
    };
  }
  
  render() {
    // console.log("list",this.props)
    return (
        <View style={{flex:1, flexDirection:'row', justifyContent:'center', flexWrap:'wrap'}}>
          {
            this.props.list.map((site, i) => <Toggle dispatch={this.props.dispatch} handleToggle={() => this.handleToggle(i, site.active)} site={site} key={i} />)
          }
        </View>   
    )}
}

export default TogglesContainer;