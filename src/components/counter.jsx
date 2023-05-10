import React from 'react';

class Counter extends React.Component {

  constructor(props) {
      super(props);
      console.log("Counter constructor: props", props);
  }

  componentDidUpdate(prevProps, prevState) {
      if (prevProps.counter.value !== this.props.counter.value) {

          console.log("componentDidUpdate: Ajax has been called");
          console.log(`prevProps: ${prevProps.counter.value}`);
          console.log(`Props: ${this.props.counter.value}`);
      }
  }

  componentWillUnmount() {
      console.log("Counter - Unmount");
  }

  render() {
      console.log("Counter: props", this.props);
      const { counter, onIncrement, onDecrement, onDelete } = this.props;
      return (
          <div className="counter">
              <div className="d-flex align justify-content-center mt-2 w10">{this.props.children}</div>

              <div className="d-flex align w30">
                  <span className={this.getBadgeClasses()}>
                      {this.formatCount()}
                  </span>
              </div>
              <div className="col w60">
                  <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => onIncrement(counter)}
                  >
                      <span className="fa fa-plus"></span>
                  </button>

                  <button
                      type="button"
                      className="btn btn-secondary btn-sm m-3"
                      onClick={() => onDecrement(counter)}
                      disabled={counter.value === 0 ? "disabled" : ""}
                  >
                      <span className="fa fa-minus"></span>
                  </button>

                  <button
                      type="button"
                      className="btn btn-danger btn-sm "
                      onClick={() => onDelete(counter.id)}
                  >
                      <span className="fa fa-trash"></span>
                  </button>
              </div>
          </div>
      );
  }

  getBadgeClasses() {
      let classes = "badge bg-";
      classes += this.props.counter.value === 0 ? "warning" : "primary";
      return classes;
  }

  formatCount() {
      const { value } = this.props.counter;
      return value === 0 ? "Zero" : value;
  }
}

export default Counter;