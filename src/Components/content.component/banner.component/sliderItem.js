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
        "backgroundImage": 'url("'+this.props.data.image+'")',
        "backgroundSize": "cover",
        "backgroundPosition": "center"
      }
    })
  }

  handle_click(){
    var infoLink = this.props.data.watchLink
    var name = this.props.data.name

    this.props.navigate({loadURL: infoLink, name: name})
  }

  render(){   
    return (
      <div className="slider-item" style={this.state.styles}>
        <div className="inner">
          <h4 className="text-center tit">{this.props.data.name}</h4>
          <p className="text-center des">{this.props.data.description}</p>
          <p className="text-center"><button type="button" className="btn watch-btn" onClick={this.handle_click.bind(this)}>
            Watch Now
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default SliderItem;
