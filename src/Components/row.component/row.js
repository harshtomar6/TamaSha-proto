import React from 'react';
import './row.css'
import Element from './Elements'

class Row extends React.Component {
  
  constructor(){
    super()

    this.state = {
      meta: {height: 0}
    }

    this.movieElements = this.movieElements.bind(this)
  }

  handleNavigate(data){
    this.props.handleNav(data)
  }

  movieElements(){
    var list = this.props.data.content

    var items = list.map((item) =>  
                  <Element data={item} key={item._id} navigateTo={this.handleNavigate.bind(this)}/>
                )

    return <div id="row-body">{items}</div>
  }

  render(){
    return(
      <div id="row">
        <div id="row-head">
          <h5>{this.props.data.listName}</h5>
        </div>
        <this.movieElements />
      </div>
    )
  }

}

export default Row