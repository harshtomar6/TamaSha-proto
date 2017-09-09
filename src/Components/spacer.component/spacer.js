import React from 'react';

class Spacer extends React.Component {

  render(){
    return (
      <div style={{height: this.props.height+'px',borderBottom: '1px solid darkgrey'}}></div>
    );
  }

}

export default Spacer;