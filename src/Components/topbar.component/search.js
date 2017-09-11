import React from 'react';
import './topbar.css';

export default class Search extends React.Component {

  constructor(){
    super()
    this.state = {
      searchValue: ''
    }
  }

  handleChange(e){
    this.setState({
      searchValue: e.target.value
    })


  }

  handleClick(e){
    if(e.target.id === 'search-wraper')
      this.props.toggleSearch()
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return(
      <div id="search-wraper" onClick={this.handleClick.bind(this)}>
        <div id="searchBox-wrap">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <i className="fa fa-search" ></i>
            <input type="text" id="search-bar" onChange={this.handleChange.bind(this)} value={this.state.searchValue}
            placeholder="Search your favourite Movie"/>
           </form>
        </div>
      </div>
    )
  }

}