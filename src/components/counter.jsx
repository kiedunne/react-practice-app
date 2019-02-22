

import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/200',
    tags: ['tag1', 'tag2', 'tag3']
  };

handleIncrement = () => {
  console.log("Increment clicked", this);
};
  render() {
    React.createElement('div')
    return (
    <React.Fragment>

      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button onClick={this.handleIncrement}className='btn btn-secondary btn-nm'>Increment</button>
      <ul>
        { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
      </ul>
    </React.Fragment>
   );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-'
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
