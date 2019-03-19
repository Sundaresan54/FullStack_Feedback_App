import React, { Component } from 'react';
import {connect} from 'react-redux';
class Header extends Component{

    renderContent(){
        switch(this.props.auth){
            case null:
            return "trying to logging In";
            case false:
            return <li><a href="/auth/google/">LogIn with Google</a></li>;
            default:
            return <li><a>Log out</a></li>;
        }
    }
render() {
    console.log(this.props,"props coming");

    
    return(
    
           <nav>
    <div className="nav-wrapper">
      <a className="left brand-logo">Logo</a>
      <ul  className="right">
        {/* <li href=""><a>Login with Google</a></li> */}

    {this.renderContent()}      
      </ul>
    </div>
  </nav>
       
    );
}

}
//ES5
// function mapStateToProp(state) {
//     return{auth:state.auth};
// }

//code refractor ES6
//key value name are same so refractoring like this
function mapStateToProps ({ auth }) {
    return { auth };
}

export default connect(mapStateToProps,null) (Header);