import React from 'react';
import Counter from './counter';

class Counters extends React.Component {

  constructor(props) {
      super(props);
      console.log("Counters constructor: props", props);
  }

  render() {
      const { counters, onReset, onDelete, onIncrement, onDecrement, onNewCounter, onRemoveUltimoCounter } =
          this.props;
      return [(
          <div>
              <button
                  onClick={onReset}
                  className="btn btn-primary btn-sm m-2"
              >
                  Reiniciar Contadores
              </button>
              <button
                  onClick={onNewCounter}
                  className="btn btn-primary btn-sm m-2"
              >
                  Adicionar Contador
              </button>

              <button
                  onClick={onRemoveUltimoCounter}
                  className="btn btn-primary btn-sm m-2"
              >
                  Remover Ultimo
              </button>

              {counters.map((counter) => (
                  <Counter
                      key={counter.id}

                      onDelete={onDelete}
                      onIncrement={onIncrement}
                      onDecrement={onDecrement}
                      counter={counter}
                  >
                      <h6>{counter.id})</h6>
                  </Counter>
              ))}
          </div>
          
      )];
  }
}

export default Counters;