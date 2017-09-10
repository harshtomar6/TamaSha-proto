import React from 'react';
import './row.css'

class Row extends React.Component {
  
  constructor(){
    super()

    this.state = {
      meta: {height: 0}
    }

    this.movieElements = this.movieElements.bind(this)
  }

  mouseEnter(e){
    //e.target.nextSibling.style.height = 220+'px'
  }

  mouseLeave(e){
    //e.target.style.height = 0;
  }

  handleClick(e){

  }

  movieElements(){
    var list = this.props.data[0].content

    var items = list.map((item) =>  
                  <div className="mv-card" key={item._id} onMouseEnter={this.mouseEnter.bind(this)} 
                  onMouseLeave={this.mouseLeave.bind(this)} onClick={this.handleClick.bind(this)}>
                    <img src={item.image}/>
                    <div className="meta-data" style={this.state.meta}>
                      <h5 className="text-center">{item.name}</h5>
                    </div>
                  </div>
                  )

    return <div id="row-body">{items}</div>
  }

  render(){
    return(
      <div id="row">
        <div id="row-head">
          <h5>{this.props.data[0].listName}</h5>
        </div>
        <this.movieElements />
      </div>
    )
  }

}

export default Row