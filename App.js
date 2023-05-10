var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import Total from './components/total';
import Footer from './components/footer';

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.ncounters = 5;

    _this.handleIncrement = function (counter) {

      var counters = [].concat(_toConsumableArray(_this.state.counters));

      var index = counters.indexOf(counter);

      counters[index] = Object.assign({}, counter);

      counters[index].value++;

      _this.setState({ counters: counters });
    };

    _this.handleDecrement = function (counter) {

      var counters = [].concat(_toConsumableArray(_this.state.counters));

      var index = counters.indexOf(counter);

      counters[index] = Object.assign({}, counter);

      counters[index].value--;

      _this.setState({ counters: counters });
    };

    _this.handleReset = function () {

      var counters = _this.state.counters.map(function (c) {

        c.value = 0;

        return c;
      });

      _this.setState({ counters: counters });
    };

    _this.handleDelete = function (counterId) {

      var counters = _this.state.counters.filter(function (c) {
        return c.id !== counterId;
      });

      _this.setState({ counters: counters });
    };

    _this.handleNewCounter = function () {

      var maxId = _this.state.maxId + 1;

      var counters = _this.state.counters;

      counters.push({

        id: maxId,

        value: 0

      });

      _this.setState({ counters: counters, maxId: maxId });
    };

    _this.handleRemoveUltimoCounter = function () {

      var counters = _this.state.counters;

      counters.splice(counters.length - 1, counters.length);

      _this.setState({ counters: counters });
    };

    _this.state = {

      counters: Array.from({ length: _this.ncounters }, function (_, index) {
        return {

          id: index + 1,

          value: 0

        };
      }),

      maxId: _this.ncounters

    };

    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {

      return React.createElement(
        React.Fragment,
        null,
        React.createElement(NavBar, null),
        React.createElement(
          'main',
          { role: 'main', className: 'container-fluid bg-antique d-flex justify-content-center', style: { height: "80%", overflowY: "auto" } },
          React.createElement(
            'div',
            { className: 'counters d-flex App-Gap' },
            React.createElement(Counters, {

              counters: this.state.counters,

              onReset: this.handleReset,

              onIncrement: this.handleIncrement,

              onDecrement: this.handleDecrement,

              onDelete: this.handleDelete,

              onNewCounter: this.handleNewCounter,

              onRemoveUltimoCounter: this.handleRemoveUltimoCounter

            })
          )
        ),
        React.createElement(Total, {

          totalCounters: this.state.counters.filter(function (c) {
            return c.value > 0;
          }).length

        }),
        React.createElement(Footer, null)
      );
    }
  }]);

  return App;
}(React.Component);

export default App;