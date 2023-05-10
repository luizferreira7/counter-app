import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import Total from './components/total';
import Footer from './components/footer';

class App extends React.Component {

  ncounters = 5;

  constructor(props) {

    super(props);

    this.state = {

      counters: Array.from({ length: this.ncounters }, (_, index) => ({

        id: index + 1,

        value: 0,

      })),

      maxId: this.ncounters,

    };

  }


  handleIncrement = (counter) => {

    console.log("Increment", counter);

    const counters = [...this.state.counters];

    const index = counters.indexOf(counter);

    counters[index] = { ...counter };

    counters[index].value++;

    this.setState({ counters });

  };

  handleDecrement = (counter) => {

    console.log("Decrement", counter);

    const counters = [...this.state.counters];

    const index = counters.indexOf(counter);

    counters[index] = { ...counter };

    counters[index].value--;

    this.setState({ counters });

  };

  handleReset = () => {

    const counters = this.state.counters.map((c) => {

      c.value = 0;

      return c;

    });

    this.setState({ counters });

  };

  handleDelete = (counterId) => {

    console.log("Event Handler Called", counterId);

    const counters = this.state.counters.filter((c) => c.id !== counterId);

    this.setState({ counters });

  };

  handleNewCounter = () => {

    const maxId = this.state.maxId + 1;

    const counters = this.state.counters;

    counters.push({

      id: maxId,

      value: 0,

    });

    this.setState({ counters, maxId });

  };

  handleRemoveUltimoCounter = () => {

    const counters = this.state.counters;

    counters.splice(counters.length-1, counters.length);

    this.setState({ counters });
  };

  render() {

    return (

      <React.Fragment>

        <NavBar/>

        <main role="main" className="container-fluid bg-antique d-flex justify-content-center" style={{height:"80%", overflowY:"auto"}}>

          <div className="counters d-flex App-Gap">

            <Counters

              counters={this.state.counters}

              onReset={this.handleReset}

              onIncrement={this.handleIncrement}

              onDecrement={this.handleDecrement}

              onDelete={this.handleDelete}

              onNewCounter={this.handleNewCounter}

              onRemoveUltimoCounter={this.handleRemoveUltimoCounter}

            />

          </div>

        </main>

        <Total
        
        totalCounters={this.state.counters.filter((c) => c.value > 0).length}

        />

        <Footer/>

      </React.Fragment>

    );

  }

}

export default App;