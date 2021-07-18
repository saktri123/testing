import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import requireAuth from './requireAuth';

class ComponentBox extends Component{
    state = { comment: ''};

   
    onChange = (event)=>{
        this.setState({comment: event.target.value});

    };
    onUpdate = (event)=>{
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment: ''});
    };
    render(){
        return (
            <div>
                <form onSubmit={this.onUpdate}>
                    <h4>Add a Comment</h4>
                    <textarea value={this.state.comment} onChange={this.onChange} />
                    <div>
                        <button >Submit</button>
                    </div>
                </form>
                <button className="fetch-Comments" onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        );
    }
} 

export default connect(null,actions)(requireAuth(ComponentBox));