import React from 'react';
import './topbar.css';
const request = require('request')
const config = require('./../../config')

export default class Search extends React.Component {

  constructor(){
    super()
    this.state = {
      searchValue: '',
      ajaxData: [],
      loaded: false
    }

    this.getAjaxResult = this.getAjaxResult.bind(this)
  }

  handleChange(e){
    this.setState({
      searchValue: e.target.value
    })

    var query = e.target.value

    request.post({
      url: config.SERVER_URI+'/ajax-search',
      form: {query: query}
    }, (err, res, body) => {

      if(!err && res.statusCode === 200){
        
        this.setState({
          ajaxData: JSON.parse(body).data
        },() => {
          this.setState({
            loaded: true
          })
          console.log(this.state.ajaxData)
        })
      }

    })

  }

  handleClick(e){
    if(e.target.id === 'search-wraper')
      this.props.toggleSearch()
  }

  handleSubmit(e){
    e.preventDefault();
  }

  getAjaxResult(){
    
    if(this.state.loaded){
      var node = document.getElementById('ajax-result')

      while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
      }

      var items = this.state.ajaxData.map(item => 
        <div className="result-wraper">
          <div className="img-result">
            <img src={item.thumbnail} />
          </div>
          <div className="info-result">
            <h5>{item.name}</h5>
          </div>
        </div>
      )
    }
    
    else
      items = <div></div>

    return <div id="ajax-result">{items}</div>
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
          <this.getAjaxResult />
        </div>
      </div>
    )
  }

}