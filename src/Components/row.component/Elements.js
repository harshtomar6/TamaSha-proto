import React from 'react'
import './row.css'

class Element extends React.Component {
  
  constructor(){
    super()

    this.state = {
      meta: {height: 0}
    }
  }

  mouseEnter(e){
    //e.target.nextSibling.style.height = 220+'px'
  }

  mouseLeave(e){
    //e.target.style.height = 0;
  }

  handleClick(){
    var watchLink = this.props.data.infoLink

    this.props.navigateTo(watchLink)
  }

  render(){
    return(
      <div className="mv-card" onMouseEnter={this.mouseEnter.bind(this)} 
      onMouseLeave={this.mouseLeave.bind(this)} onClick={this.handleClick.bind(this)}>
        <img src={this.props.data.image}/>
        <div className="meta-data" style={this.state.meta}>
          <h5 className="text-center">{this.props.data.name}</h5>
        </div>
      </div>
    )
  }

}

export default Element