import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import * as action from 'actions';

class App extends Component
{
    renderSignInButton(){
        if(this.props.auth){
            return <button onClick={()=> this.props.changeAuth(false)}>
                        Sign Out
                    </button>
        }
        else{
            return <button onClick={()=> this.props.changeAuth(true)}>
                        Sign In
                    </button>
        }
    }

    renderHeader(){
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Post">Post</Link></li>
                <li>{this.renderSignInButton()}</li>
            </ul>
        );
    }

    render(){
        return (<div>
            {this.renderHeader()}
            <Route path="/Post" component={CommentBox}></Route>
            <Route path="/" exact component={CommentList}></Route>
            </div>
            );
    }
};
function mapStateToProps(state){
    return {auth: state.auth};
}
export default connect(mapStateToProps,action)(App)