import React from 'react';
import './user.css'

class Signup extends React.Component {

  constructor(){
    super();

  }

  closeModal(){
    this.props.close()
  }

  handleClick(){
    this.props.navigate(1)
  }

  render(){
    return (
      <div id="user-wraper">
        <div id="modal">
          <div id="modal-header">
            <h4 className="text-center">Create an Account</h4>
            <p onClick={this.closeModal.bind(this)}>&times;</p>
          </div>
          <div id="modal-body">
            <input type="text" placeholder="Your name please" required/>
            <input type="email" placeholder="Your E-mail please" required/>
            <input type="password" placeholder="Your password" required/>
            <input type="submit" value="Create my Account" action="/" />
            <p className="text-center">Already have an account? <span onClick={this.handleClick.bind(this)}>Log In.</span></p>
            <p className="text-center">
              <button type="button" id="g"><i className="fa fa-google-plus"></i></button>
            </p>
          </div>
        </div>
      </div>
    );
  }

}

export default Signup;