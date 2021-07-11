import React, {Component} from 'react';

class ComponentBox extends Component{
    state = { comment: ''};
    onChange = (event)=>{
        this.setState({comment: event.target.value});

    };
    onUpdate = (event)=>{
        event.preventDefault();
        //TODO - Call an action creator
        // save the comment
        this.setState({comment: ''});
    };
    render(){
        return (
            <form onSubmit={this.onUpdate}>
                <h4>Add a Comment</h4>
                <textarea value={this.state.comment} onChange={this.onChange} />
                <div>
                    <button >Submit</button>
                </div>
            </form>
        );
    }
} 

export default ComponentBox;