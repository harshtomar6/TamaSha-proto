import React from 'react';
import './content.css';
import Banner from './banner.component/banner';
import MovieInfo from './../movieinfo.component/movieinfo';

class Content extends React.Component{
  
  constructor(props){
    super(props)

    this.state = {
      page: 1,
      loadData: ''
    }

    this.renderElements = this.renderElements.bind(this)
  }

  navigate(data){
    this.setState({
      page: 2,
      loadData: data
    })
  }

  renderElements(){
    if(this.state.page === 1){
      return(
        <Banner data={this.props.data.body.top_data} handleNav={this.navigate.bind(this)} />
      );
    }
    else if(this.state.page === 2){
      return(
        <MovieInfo data={this.state.loadData} />
      );
    }
  }

  render(){
    return(
      <div id="content" className={this.props.class}>
        <this.renderElements />
              
      </div>
    );
  }
}

export default Content;