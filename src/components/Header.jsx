import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments'
class Header extends Component{

    renderContent(){
        switch(this.props.auth){
            case null:
            return "trying to logging In";
            case false:
            return <li><a href="/auth/google/">LogIn with Google</a></li>;
            default:
            return [
                <li key="1"><Payments /></li>,
                <li key="3" style= {{margin:"0px 10px"}}>
                Credits:{this.props.auth.credits}
                </li>,
            <li key = "2"><a href="/api/logout">Log out</a></li>];
        }
    }
render() {
    console.log(this.props,"props coming");

    
    return(
    
           <nav>
    <div className="nav-wrapper">
      <Link to ={this.props.auth ?"/surveys" :"/"} className="left brand-logo">Logo</Link>
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