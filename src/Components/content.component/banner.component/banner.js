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

    this.i=1;
    this.id = setInterval(() => {
      this.swapItem(this.i++)
      if(this.i === 10)
        this.i=0;
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

  swapPrevItem(i){
    if(i>0){
      document.getElementById('banner').childNodes[i].className = 'slider-item';
      document.getElementById('banner').childNodes[i-1].className = 'slider-item Visible';
      document.getElementById('below').childNodes[i].className = "dot";
      document.getElementById('below').childNodes[i-1].className = "dot active";  
    }else{
      document.getElementById('banner').childNodes[9].className = 'slider-item Visible';
      document.getElementById('banner').childNodes[0].className = 'slider-item';
      document.getElementById('below').childNodes[9].className = "dot active";
      document.getElementById('below').childNodes[0].className = "dot";
    }
    
  
  }

  handleNavigation(data){
    this.props.handleNav(data)
  }

  slideNext(){
    
    clearInterval(this.id)

    this.swapItem(this.i++);
    
    if(this.i === 10)
      this.i = 0

    this.id = setInterval(() => {
      this.swapItem(this.i++)
      if(this.i === 10)
        this.i=0;
    }, 5000)

  }

  slideBack(){
    clearInterval(this.id)
    if(this.i === 0)
      this.i = 10

    this.swapPrevItem(--this.i);

    this.id = setInterval(() => {
      this.swapItem(this.i++)
        if(this.i === 10)
          this.i=0;
      }, 5000)
  }

  getItems(props){
    const Items = this.state.data.map((element) =>  
      <SliderItem data={element} key={element._id} navigate={this.handleNavigation.bind(this)} />
    )
    
    return(
      <div id="banner">
        {Items}
        <button type="button" className="btn nav-btn next-button" onClick={this.slideNext.bind(this)}>
          <i className="fa fa-chevron-right fa-fw"></i>
        </button>
        <button type="button" className="btn nav-btn back-button" onClick={this.slideBack.bind(this)}>
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