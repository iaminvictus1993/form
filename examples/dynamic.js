webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(280);


/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(170);
	
	var form = _interopRequireWildcard(_src);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	exports["default"] = form; // export this package's api
	
	module.exports = exports['default'];

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createForm = undefined;
	
	var _createForm = __webpack_require__(171);
	
	var _createForm2 = _interopRequireDefault(_createForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.createForm = _createForm2["default"]; // export this package's api

/***/ },

/***/ 253:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var regionStyle = exports.regionStyle = {
	  border: '1px solid red',
	  marginTop: 10,
	  padding: 10
	};
	
	var errorStyle = exports.errorStyle = {
	  color: 'red',
	  marginTop: 10,
	  padding: 10
	};

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/no-multi-comp:0, no-console:0 */
	
	var _rcForm = __webpack_require__(169);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(39);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _styles = __webpack_require__(253);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function Email(props) {
	  var hidden = props.hidden;
	  var form = props.form;
	  var getFieldProps = form.getFieldProps;
	  var getFieldError = form.getFieldError;
	  var isFieldValidating = form.isFieldValidating;
	
	  var errors = getFieldError('email');
	  var style = _extends({}, _styles.regionStyle, {
	    display: hidden ? 'none' : ''
	  });
	  return _react2["default"].createElement(
	    'div',
	    { style: style },
	    _react2["default"].createElement(
	      'div',
	      null,
	      'email:',
	      _react2["default"].createElement('input', getFieldProps('email', {
	        rules: [{
	          required: true
	        }, {
	          type: 'email',
	          message: '错误的 email 格式'
	        }],
	        hidden: hidden
	      }))
	    ),
	    errors ? _react2["default"].createElement(
	      'div',
	      { style: _styles.errorStyle },
	      errors.join(',')
	    ) : null,
	    isFieldValidating('email') ? _react2["default"].createElement(
	      'div',
	      { style: _styles.errorStyle },
	      'validating'
	    ) : null
	  );
	}
	
	Email.propTypes = {
	  form: _react.PropTypes.object,
	  hidden: _react.PropTypes.bool
	};
	
	var User = _react2["default"].createClass({
	  displayName: 'User',
	
	  propTypes: {
	    form: _react.PropTypes.object
	  },
	
	  render: function render() {
	    var _props$form = this.props.form;
	    var getFieldProps = _props$form.getFieldProps;
	    var getFieldError = _props$form.getFieldError;
	    var isFieldValidating = _props$form.isFieldValidating;
	
	    var errors = getFieldError('user');
	    return _react2["default"].createElement(
	      'div',
	      { style: _styles.regionStyle },
	      _react2["default"].createElement(
	        'div',
	        null,
	        'user:',
	        _react2["default"].createElement('input', getFieldProps('user', {
	          initialValue: 'x',
	          rules: [{
	            required: true
	          }]
	        }))
	      ),
	      errors ? _react2["default"].createElement(
	        'div',
	        { style: _styles.errorStyle },
	        errors.join(',')
	      ) : null,
	      isFieldValidating('user') ? _react2["default"].createElement(
	        'div',
	        { style: _styles.errorStyle },
	        'validating'
	      ) : null
	    );
	  }
	});
	
	var Form = function (_Component) {
	  _inherits(Form, _Component);
	
	  function Form() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Form);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Form)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.onSubmit = function (e) {
	      e.preventDefault();
	      _this.props.form.validateFields(function (error, values) {
	        if (!error) {
	          console.log('ok', values);
	        } else {
	          console.log('error', error, values);
	        }
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Form, [{
	    key: 'render',
	    value: function render() {
	      var form = this.props.form;
	      var getFieldProps = form.getFieldProps;
	      var getFieldValue = form.getFieldValue;
	
	      return _react2["default"].createElement(
	        'div',
	        { style: { margin: 20 } },
	        _react2["default"].createElement(
	          'h2',
	          null,
	          'overview'
	        ),
	        _react2["default"].createElement(
	          'form',
	          { onSubmit: this.onSubmit },
	          _react2["default"].createElement(
	            'div',
	            { style: _styles.regionStyle },
	            _react2["default"].createElement(
	              'div',
	              null,
	              _react2["default"].createElement(
	                'label',
	                null,
	                'remove/add user:',
	                _react2["default"].createElement('input', _extends({
	                  type: 'checkbox'
	                }, getFieldProps('remove_user', {
	                  // initialValue:true,
	                  valuePropName: 'checked'
	                })))
	              )
	            )
	          ),
	          getFieldValue('remove_user') ? null : _react2["default"].createElement(User, { form: form }),
	          _react2["default"].createElement(
	            'div',
	            { style: _styles.regionStyle },
	            _react2["default"].createElement(
	              'div',
	              null,
	              _react2["default"].createElement(
	                'label',
	                null,
	                'hide/show email:',
	                _react2["default"].createElement('input', _extends({
	                  type: 'checkbox'
	                }, getFieldProps('hide_email', {
	                  // initialValue:true,
	                  valuePropName: 'checked'
	                })))
	              )
	            )
	          ),
	          _react2["default"].createElement(Email, { form: form, hidden: !!getFieldValue('hide_email') }),
	          _react2["default"].createElement(
	            'div',
	            { style: _styles.regionStyle },
	            _react2["default"].createElement(
	              'button',
	              null,
	              'submit'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Form;
	}(_react.Component);
	
	Form.propTypes = {
	  form: _react.PropTypes.object
	};
	
	
	var NewForm = (0, _rcForm.createForm)()(Form);
	
	_reactDom2["default"].render(_react2["default"].createElement(NewForm, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=dynamic.js.map