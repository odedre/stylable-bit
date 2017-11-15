"use strict";
exports.__esModule = true;
function omit(obj) {
    var skip = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        skip[_i - 1] = arguments[_i];
    }
    return Object.keys(obj).reduce(function (acc, key) {
        if (skip.indexOf(key) === -1) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
}
exports.omit = omit;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;AAAA,cAAqD,GAAM;IAAE,cAAuB;SAAvB,UAAuB,EAAvB,qBAAuB,EAAvB,IAAuB;QAAvB,6BAAuB;;IAChF,MAAM,CAAC,MAAM,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,MAAM,CAAa,UAAC,GAAG,EAAE,GAAG;QAChD,EAAE,CAAC,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC;YAC3B,GAAG,CAAC,GAAG,CAAC,GAAG,GAAG,CAAC,GAAG,CAAC,CAAC;QACxB,CAAC;QACD,MAAM,CAAC,GAAG,CAAC;IACf,CAAC,EAAE,EAAE,CAAC,CAAC;AACX,CAAC;AAPD,oBAOC"}