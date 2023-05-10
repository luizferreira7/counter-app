var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Counter from './counter';

var Counters = function (_React$Component) {
    _inherits(Counters, _React$Component);

    function Counters(props) {
        _classCallCheck(this, Counters);

        return _possibleConstructorReturn(this, (Counters.__proto__ || Object.getPrototypeOf(Counters)).call(this, props));
    }

    _createClass(Counters, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                counters = _props.counters,
                onReset = _props.onReset,
                onDelete = _props.onDelete,
                onIncrement = _props.onIncrement,
                onDecrement = _props.onDecrement,
                onNewCounter = _props.onNewCounter,
                onRemoveUltimoCounter = _props.onRemoveUltimoCounter;

            return [React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    {
                        onClick: onReset,
                        className: 'btn btn-primary btn-sm m-2'
                    },
                    'Reiniciar Contadores'
                ),
                React.createElement(
                    'button',
                    {
                        onClick: onNewCounter,
                        className: 'btn btn-primary btn-sm m-2'
                    },
                    'Adicionar Contador'
                ),
                React.createElement(
                    'button',
                    {
                        onClick: onRemoveUltimoCounter,
                        className: 'btn btn-primary btn-sm m-2'
                    },
                    'Remover Ultimo'
                ),
                counters.map(function (counter) {
                    return React.createElement(
                        Counter,
                        {
                            key: counter.id,

                            onDelete: onDelete,
                            onIncrement: onIncrement,
                            onDecrement: onDecrement,
                            counter: counter
                        },
                        React.createElement(
                            'h6',
                            null,
                            counter.id,
                            ')'
                        )
                    );
                })
            )];
        }
    }]);

    return Counters;
}(React.Component);

export default Counters;