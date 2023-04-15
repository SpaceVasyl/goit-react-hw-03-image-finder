import React, {Component} from 'react';

export class Button extends Component  {
handleLoadMore = evt => {
evt.preventDefault();
this.setState(this.state.imagesDisplayed + 12)
console.log(this.state);
}

    render(){return (<button onClick={this.props.handleLoadMore}>
        Load more
    </button>)}
}