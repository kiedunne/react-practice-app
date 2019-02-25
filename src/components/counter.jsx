

import React, { Component } from 'react';

class Counter extends Component {

// handleIncrement = () => {
//   this.setState( { count: this.state.count +1})
// };
  render() {
    return (
    <div>
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button
        onClick={ () => this.props.onIncremnent(this.props.counter) }
        className='btn btn-secondary btn-nm'>Increment
      </button>

      <button
        onClick= { () => this.props.onDelete(this.props.counter.id) }
        className = "btn btn-danger btn-nm m-2">Delete
      </button>

    </div>
  );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-'
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes
  };

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
