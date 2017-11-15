"use strict";
exports.__esModule = true;
var wix_react_tools_1 = require("wix-react-tools");
var createLogFunction = function (method) { return function (message) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (!wix_react_tools_1.getGlobalConfig().devMode) {
        return;
    }
    var formated = args.reduce(function (str, item) { return str.replace(/%s/, item); }, message);
    console[method](new Error(formated));
}; };
var once = function (fn, set) { return function (message) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (!set.has(message)) {
        set.add(message);
        fn.apply(void 0, [message].concat(args));
    }
}; };
exports.createLogger = function () {
    var set = new Set();
    var result = {};
    return ['warn', 'error'].reduce(function (obj, method) {
        var fn = createLogFunction(method);
        obj[method] = fn;
        obj[method + "Once"] = once(fn, set);
        return obj;
    }, result);
};
exports.warn = (_a = exports.createLogger(), _a.warn), exports.error = _a.error, exports.warnOnce = _a.warnOnce, exports.errorOnce = _a.errorOnce;
var _a;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;AAAA,mDAAgD;AAIhD,IAAM,iBAAiB,GAAG,UAAC,MAAc,IAAU,OAAA,UAAC,OAAO;IAAE,cAAO;SAAP,UAAO,EAAP,qBAAO,EAAP,IAAO;QAAP,6BAAO;;IAChE,EAAE,CAAC,CAAC,CAAC,iCAAe,EAAE,CAAC,OAAO,CAAC,CAAC,CAAC;QAC7B,MAAM,CAAC;IACX,CAAC;IACD,IAAM,QAAQ,GAAG,IAAI,CAAC,MAAM,CAAC,UAAC,GAAG,EAAE,IAAI,IAAK,OAAA,GAAG,CAAC,OAAO,CAAC,IAAI,EAAE,IAAI,CAAC,EAAvB,CAAuB,EAAE,OAAO,CAAC,CAAC;IAC9E,OAAO,CAAC,MAAM,CAAC,CAAC,IAAI,KAAK,CAAC,QAAQ,CAAC,CAAC,CAAC;AACzC,CAAC,EANkD,CAMlD,CAAC;AACF,IAAM,IAAI,GAAG,UAAC,EAAO,EAAE,GAAgB,IAAU,OAAA,UAAC,OAAO;IAAE,cAAO;SAAP,UAAO,EAAP,qBAAO,EAAP,IAAO;QAAP,6BAAO;;IAC9D,EAAE,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC;QACpB,GAAG,CAAC,GAAG,CAAC,OAAO,CAAC,CAAC;QACjB,EAAE,gBAAC,OAAO,SAAK,IAAI,GAAE;IACzB,CAAC;AACL,CAAC,EALgD,CAKhD,CAAC;AAEW,QAAA,YAAY,GAAG;IACxB,IAAM,GAAG,GAAG,IAAI,GAAG,EAAE,CAAC;IACtB,IAAM,MAAM,GAER,EAAE,CAAC;IACP,MAAM,CAAC,CAAC,MAAM,EAAE,OAAO,CAAC,CAAC,MAAM,CAAC,UAAC,GAAG,EAAE,MAAc;QAChD,IAAM,EAAE,GAAG,iBAAiB,CAAC,MAAM,CAAC,CAAC;QACrC,GAAG,CAAC,MAAM,CAAC,GAAG,EAAE,CAAC;QACjB,GAAG,CAAI,MAAM,SAAM,CAAC,GAAG,IAAI,CAAC,EAAE,EAAE,GAAG,CAAC,CAAC;QACrC,MAAM,CAAC,GAAG,CAAC;IACf,CAAC,EAAE,MAAM,CAAC,CAAC;AACf,CAAC,CAAC;AAEY,QAAA,IAAI,IAAL,KAAqC,oBAAY,EAAE,YAA5C,QAAA,KAAK,aAAE,QAAA,QAAQ,gBAAE,QAAA,SAAS,gBAAmB"}