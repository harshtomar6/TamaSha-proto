import React from 'react';
import './banner.css';
import SliderItem from './sliderItem';

class Banner extends React.Component{
  
  constructor(){
    super();
    this.state = {
      "data": []
    }

    this.getItems = this.getItems.bind(this);
  }

  componentWillMount(){
    this.setState({data: this.props.data})
  }

  componentDidMount(){
    document.getElementById('banner').firstChild.className = 'slider-item Visible'

    var i=1;
    this.id = setInterval(() => {
      this.swapItem(i++)
      if(i === 10)
        i=0;
    }, 5000)
  }

  componentWillUnmount(){
    clearInterval(this.id);
  }

  swapItem(i){
    if(i > 0){
      document.getElementById('banner').childNodes[i-1].className = 'slider-item';
      document.getElementById('banner').childNodes[i].className = 'slider-item Visible';
      document.getElementById('below').childNodes[i-1].className = "dot";
      document.getElementById('below').childNodes[i].className = "dot active";
    }
    else{
      document.getElementById('banner').childNodes[i].className = 'slider-item Visible';
      document.getElementById('banner').childNodes[9].className = 'slider-item';
      document.getElementById('below').childNodes[i].className = "dot active";
      document.getElementById('below').childNodes[9].className = "dot";
    }
      
    
  }

  getItems(props){
    const Items = this.state.data.map((element) =>  
      <SliderItem data={element} key={element._id} />
    )
    
    return(
      <div id="banner">
        {Items}
        <button type="button" className="btn nav-btn next-button">
          <i className="fa fa-chevron-right fa-fw"></i>
        </button>
        <button type="button" className="btn nav-btn back-button">
          <i className="fa fa-chevron-left fa-fw"></i>
        </button>
        <div className="below">
          <p className="text-center" id="below">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </p>
        </div>
      </div>
    );
  }

  render(){
    return(
      <this.getItems />
    );
  }
}

export default Banner;