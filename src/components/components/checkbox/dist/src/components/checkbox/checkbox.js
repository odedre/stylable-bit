"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var React = require("react");
var wix_react_tools_1 = require("wix-react-tools");
var utils_1 = require("../../utils");
var checkbox_st_css_1 = require("./checkbox.st.css");
var CheckBox = /** @class */ (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { isFocused: false };
        _this.handleClick = function (e) {
            _this.handleChange(e);
            _this.nativeInput && _this.nativeInput.focus();
            _this.setState({ isFocused: false });
        };
        _this.handleChange = function (e) {
            if (!_this.props.disabled && !_this.props.readOnly) {
                _this.props.onChange({
                    value: _this.props.indeterminate ? true : !_this.props.value
                });
            }
        };
        // handleInputClick will be called only on pressing "space" key when nativeInput has focus
        _this.handleInputClick = function (e) {
            e.stopPropagation();
            _this.setState({ isFocused: true });
        };
        _this.handleInputBlur = function () {
            _this.state.isFocused && _this.setState({ isFocused: false });
        };
        _this.handleInputFocus = function () {
            !_this.state.isFocused && _this.setState({ isFocused: true });
        };
        return _this;
    }
    CheckBox.prototype.render = function () {
        var _this = this;
        var styleState = {
            checked: this.props.value,
            disabled: this.props.disabled,
            readonly: this.props.readOnly,
            indeterminate: this.props.indeterminate,
            focus: this.state.isFocused,
            error: this.props.error
        };
        return (React.createElement("div", { "data-automation-id": "CHECKBOX_ROOT", onClick: this.handleClick, "style-state": styleState, role: "checkbox", "aria-checked": this.props.indeterminate ? 'mixed' : this.props.value },
            React.createElement("input", { "data-automation-id": "NATIVE_CHECKBOX", type: "checkbox", className: "nativeCheckbox", checked: this.props.value, disabled: this.props.disabled, onClick: this.handleInputClick, onChange: this.handleChange, onFocus: this.handleInputFocus, onBlur: this.handleInputBlur, id: this.props.id, tabIndex: this.props.tabIndex, autoFocus: this.props.autoFocus, name: this.props.name, "aria-controls": this.props['aria-controls'], ref: function (ref) { return _this.nativeInput = ref; } }),
            React.createElement("span", { className: "box", "data-automation-id": "CHECKBOX_BOX" }, this.props.indeterminate ?
                this.props.indeterminateIcon : (this.props.value && this.props.tickIcon)),
            this.props.children ? (React.createElement("div", { "data-automation-id": "CHECKBOX_CHILD_CONTAINER", className: "childContainer" }, this.props.children)) : null));
    };
    CheckBox.defaultProps = {
        tickIcon: (React.createElement("span", { className: checkbox_st_css_1["default"].icon + " " + checkbox_st_css_1["default"].tickIcon, "data-automation-id": "CHECKBOX_TICKMARK" })),
        indeterminateIcon: (React.createElement("span", { className: checkbox_st_css_1["default"].icon + " " + checkbox_st_css_1["default"].indeterminateIcon, "data-automation-id": "CHECKBOX_INDETERMINATE" })),
        onChange: utils_1.noop,
        indeterminate: false,
        tabIndex: 0
    };
    CheckBox = __decorate([
        wix_react_tools_1.stylable(checkbox_st_css_1["default"]),
        wix_react_tools_1.properties
    ], CheckBox);
    return CheckBox;
}(React.Component));
exports.CheckBox = CheckBox;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;AAAA,6BAA+B;AAC/B,mDAAqD;AAGrD,qCAAiC;AACjC,qDAAuC;AAiBvC;IAA8B,4BAA6C;IAF3E;QAAA,qEA8GC;QAzFU,WAAK,GAAkB,EAAC,SAAS,EAAE,KAAK,EAAC,CAAC;QA8DzC,iBAAW,GAA4C,UAAA,CAAC;YACxD,KAAI,CAAC,YAAY,CAAC,CAAC,CAAC,CAAC;YACrB,KAAI,CAAC,WAAW,IAAI,KAAI,CAAC,WAAW,CAAC,KAAK,EAAE,CAAC;YAC7C,KAAI,CAAC,QAAQ,CAAC,EAAC,SAAS,EAAE,KAAK,EAAC,CAAC,CAAC;QAC1C,CAAC,CAAA;QAEO,kBAAY,GAAG,UAAC,CAAoC;YACxD,EAAE,CAAC,CAAC,CAAC,KAAI,CAAC,KAAK,CAAC,QAAQ,IAAI,CAAC,KAAI,CAAC,KAAK,CAAC,QAAQ,CAAC,CAAC,CAAC;gBAC/C,KAAI,CAAC,KAAK,CAAC,QAAS,CAAC;oBACjB,KAAK,EAAE,KAAI,CAAC,KAAK,CAAC,aAAa,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,KAAI,CAAC,KAAK,CAAC,KAAK;iBAC7D,CAAC,CAAC;YACP,CAAC;QACL,CAAC,CAAA;QAED,0FAA0F;QAClF,sBAAgB,GAA8C,UAAA,CAAC;YACnE,CAAC,CAAC,eAAe,EAAE,CAAC;YACpB,KAAI,CAAC,QAAQ,CAAC,EAAC,SAAS,EAAE,IAAI,EAAC,CAAC,CAAC;QACrC,CAAC,CAAA;QAEO,qBAAe,GAA8C;YACjE,KAAI,CAAC,KAAK,CAAC,SAAS,IAAI,KAAI,CAAC,QAAQ,CAAC,EAAC,SAAS,EAAE,KAAK,EAAC,CAAC,CAAC;QAC9D,CAAC,CAAA;QAEO,sBAAgB,GAA8C;YAClE,CAAC,KAAI,CAAC,KAAK,CAAC,SAAS,IAAI,KAAI,CAAC,QAAQ,CAAC,EAAC,SAAS,EAAE,IAAI,EAAC,CAAC,CAAC;QAC9D,CAAC,CAAA;;IACL,CAAC;IArFU,yBAAM,GAAb;QAAA,iBAwDC;QAtDG,IAAM,UAAU,GAAG;YACf,OAAO,EAAE,IAAI,CAAC,KAAK,CAAC,KAAM;YAC1B,QAAQ,EAAE,IAAI,CAAC,KAAK,CAAC,QAAS;YAC9B,QAAQ,EAAE,IAAI,CAAC,KAAK,CAAC,QAAS;YAC9B,aAAa,EAAE,IAAI,CAAC,KAAK,CAAC,aAAc;YACxC,KAAK,EAAE,IAAI,CAAC,KAAK,CAAC,SAAS;YAC3B,KAAK,EAAE,IAAI,CAAC,KAAK,CAAC,KAAK;SAC1B,CAAC;QAEF,MAAM,CAAC,CACH,mDACuB,eAAe,EAClC,OAAO,EAAE,IAAI,CAAC,WAAW,iBACZ,UAAU,EACvB,IAAI,EAAC,UAAU,kBACD,IAAI,CAAC,KAAK,CAAC,aAAa,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,IAAI,CAAC,KAAK,CAAC,KAAK;YAEnE,qDACuB,iBAAiB,EACpC,IAAI,EAAC,UAAU,EACf,SAAS,EAAC,gBAAgB,EAC1B,OAAO,EAAE,IAAI,CAAC,KAAK,CAAC,KAAK,EACzB,QAAQ,EAAE,IAAI,CAAC,KAAK,CAAC,QAAQ,EAC7B,OAAO,EAAE,IAAI,CAAC,gBAAgB,EAC9B,QAAQ,EAAE,IAAI,CAAC,YAAY,EAC3B,OAAO,EAAE,IAAI,CAAC,gBAAgB,EAC9B,MAAM,EAAE,IAAI,CAAC,eAAe,EAC5B,EAAE,EAAE,IAAI,CAAC,KAAK,CAAC,EAAE,EACjB,QAAQ,EAAE,IAAI,CAAC,KAAK,CAAC,QAAQ,EAC7B,SAAS,EAAE,IAAI,CAAC,KAAK,CAAC,SAAS,EAC/B,IAAI,EAAE,IAAI,CAAC,KAAK,CAAC,IAAI,mBACN,IAAI,CAAC,KAAK,CAAC,eAAe,CAAC,EAC1C,GAAG,EAAE,UAAA,GAAG,IAAI,OAAA,KAAI,CAAC,WAAW,GAAG,GAAI,EAAvB,CAAuB,GACrC;YAEF,8BACI,SAAS,EAAC,KAAK,wBACI,cAAc,IAEhC,IAAI,CAAC,KAAK,CAAC,aAAa,CAAC,CAAC;gBACvB,IAAI,CAAC,KAAK,CAAC,iBAAiB,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,KAAK,CAAC,KAAK,IAAI,IAAI,CAAC,KAAK,CAAC,QAAQ,CAAC,CACzE;YAEN,IAAI,CAAC,KAAK,CAAC,QAAQ,CAAC,CAAC,CAAC,CACf,mDACuB,0BAA0B,EAC7C,SAAS,EAAC,gBAAgB,IAEzB,IAAI,CAAC,KAAK,CAAC,QAAQ,CAClB,CACT,CAAC,CAAC,CAAC,IAAI,CAEV,CACT,CAAC;IACN,CAAC;IA9Ea,qBAAY,GAA2B;QACjD,QAAQ,EAAE,CACN,8BACI,SAAS,EAAK,4BAAM,CAAC,IAAI,SAAI,4BAAM,CAAC,QAAU,wBAC3B,mBAAmB,GACxC,CACL;QACD,iBAAiB,EAAE,CACf,8BACI,SAAS,EAAK,4BAAM,CAAC,IAAI,SAAI,4BAAM,CAAC,iBAAmB,wBACpC,wBAAwB,GAC7C,CACL;QACD,QAAQ,EAAE,YAAI;QACd,aAAa,EAAE,KAAK;QACpB,QAAQ,EAAE,CAAC;KACd,CAAC;IAjBO,QAAQ;QAFpB,0BAAQ,CAAC,4BAAM,CAAC;QAChB,4BAAU;OACE,QAAQ,CA4GpB;IAAD,eAAC;CAAA,AA5GD,CAA8B,KAAK,CAAC,SAAS,GA4G5C;AA5GY,4BAAQ"}