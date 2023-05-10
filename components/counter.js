var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));
    }

    _createClass(Counter, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevProps.counter.value !== this.props.counter.value) {}
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {}
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                counter = _props.counter,
                onIncrement = _props.onIncrement,
                onDecrement = _props.onDecrement,
                onDelete = _props.onDelete;

            return React.createElement(
                "div",
                { className: "counter" },
                React.createElement(
                    "div",
                    { className: "d-flex align justify-content-center mt-2 w10" },
                    this.props.children
                ),
                React.createElement(
                    "div",
                    { className: "d-flex align w30" },
                    React.createElement(
                        "span",
                        { className: this.getBadgeClasses() },
                        this.formatCount()
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col w60" },
                    React.createElement(
                        "button",
                        {
                            type: "button",
                            className: "btn btn-secondary btn-sm",
                            onClick: function onClick() {
                                return onIncrement(counter);
                            }
                        },
                        React.createElement("span", { className: "fa fa-plus" })
                    ),
                    React.createElement(
                        "button",
                        {
                            type: "button",
                            className: "btn btn-secondary btn-sm m-3",
                            onClick: function onClick() {
                                return onDecrement(counter);
                            },
                            disabled: counter.value === 0 ? "disabled" : ""
                        },
                        React.createElement("span", { className: "fa fa-minus" })
                    ),
                    React.createElement(
                        "button",
                        {
                            type: "button",
                            className: "btn btn-danger btn-sm ",
                            onClick: function onClick() {
                                return onDelete(counter.id);
                            }
                        },
                        React.createElement("span", { className: "fa fa-trash" })
                    )
                )
            );
        }
    }, {
        key: "getBadgeClasses",
        value: function getBadgeClasses() {
            var classes = "badge bg-";
            classes += this.props.counter.value === 0 ? "warning" : "primary";
            return classes;
        }
    }, {
        key: "formatCount",
        value: function formatCount() {
            var value = this.props.counter.value;

            return value === 0 ? "Zero" : value;
        }
    }]);

    return Counter;
}(React.Component);

export default Counter;