import React from 'react';
import './content.css';
import Banner from './banner.component/banner';
import MovieInfo from './../movieinfo.component/movieinfo';
import Player from './../player.component/player';
import Row from './../row.component/row';

class Content extends React.Component{
  
  constructor(props){
    super(props)

    this.state = {
      page: 1,
      loadData: '',
      prevData: ''
    }

    this.mapLists = this.mapLists.bind(this)
    this.renderElements = this.renderElements.bind(this)
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      page: nextProps.back
    })
  }

  navigate(data){
    this.setState({
      page: 2,
      loadData: data,
      prevData: data
    },() => {
      this.props.setPage(this.state.page)
    })
    
  }

  handleWatchClick(data){
    this.setState({
      page: 3,
      loadData: data
    }, () => {
      this.props.setPage(this.state.page)
    })
  }

  mapLists(){

    var items = this.props.data.content.map(item => 
      <Row data={item} handleNav={this.navigate.bind(this)} />
    )

    return <div>{items}</div>
  }

  renderElements(){
    if(this.state.page === 1){
      return(
        <div>
          <Banner data={this.props.data.top_data} handleNav={this.navigate.bind(this)} />
          < this.mapLists />
        </div>
      );
    }
    else if(this.state.page === 2){
      return(
        <MovieInfo data={this.state.prevData} navigate={this.handleWatchClick.bind(this)}/>
      );
    }
    else if(this.state.page === 3){
      return(
        <Player data={this.state.loadData} />
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