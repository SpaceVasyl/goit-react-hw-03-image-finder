import React from 'react';

export const Button = ({props}) => {
const handleLoadMore = (evt) => {
evt.preventDefault();
console.log(evt);
}

    return (<button onClick={this.handleLoadMore}>
        Load more
    </button>)
}