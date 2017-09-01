import React from 'react';
import './loader.css';

class Loader extends React.Component{

  constructor(){
    super();
    
    this.state = {
      "styles": {
        "left": "48%",
        "top": "50%",
        "width": "60px",
        "height": "60px"
      }
    }

  }

  componentWillMount(){
    if(this.props)
      this.setState({
        "styles": this.props
      })
  }

  render(){
    return (
      <div style={this.state.styles} id="loader"></div>
    );
  }

}

export default Loader;