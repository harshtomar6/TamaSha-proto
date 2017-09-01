import React from 'react';
import './content.css';
import Banner from './banner.component/banner';

class Content extends React.Component{
  
  render(){
    return(
      <div id="content" className={this.props.class}>
        <Banner data={this.props.data.body.top_data} />
              
      </div>
    );
  }
}

export default Content;