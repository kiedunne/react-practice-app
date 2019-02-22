

import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: this.props.value,
    imageUrl: 'https://picsum.photos/200',
    tags: ['tag1', 'tag2', 'tag3']
  };

handleIncrement = () => {
  this.setState( { count: this.state.count +1})
  console.log(this.props)
};
  render() {

    React.createElement('div')
    return (
    <React.Fragment>
      { this.props.children }
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      
      <button
        onClick={this.handleIncrement}
        className='btn btn-secondary btn-nm'>Increment
      </button>

      <button
        onClick= { () => this.props.onDelete(this.props.id) }
        className = "btn btn-danger btn-nm m-2">Delete
      </button>

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
