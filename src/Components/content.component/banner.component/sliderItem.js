import React from 'react';
import './banner.css';

class SliderItem extends React.Component{
  
  constructor(){
    super()
    this.state = {
      "styles":{
        "backgroundImage": 'url("")',
        "backgroundSize": "cover"
      }
    }
  }

  componentWillMount(){
    this.setState({
      "styles": {
        "backgroundImage": 'url("'+this.props.data.top_banner+'")',
        "backgroundSize": "cover"
      }
    })
  }

  render(){
    return (
      <div className="slider-item" style={this.state.styles}>
        <div className="inner">
          <h4 className="text-center tit">{this.props.data.top_name}</h4>
          <p className="text-center des">{this.props.data.top_des}</p>
          <p className="text-center"><button type="button" className="btn watch-btn">Watch Now</button></p>
        </div>
      </div>
    );
  }
}

export default SliderItem;