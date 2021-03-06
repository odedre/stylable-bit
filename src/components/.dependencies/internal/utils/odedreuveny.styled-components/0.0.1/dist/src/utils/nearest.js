"use strict";
exports.__esModule = true;
var last_1 = require("./last");
function nearest(vector, value) {
    return vector.slice().sort(function (a, b) { return (Math.abs(value - a) - Math.abs(value - b)); })[0];
}
exports.nearest = nearest;
function nearestIndex(vector, value, ordered) {
    var nearestValue = nearest(vector, value);
    if (ordered) {
        var sameValueIndexes = vector.reduce(function (indexes, item, index) {
            if (item === nearestValue) {
                indexes.push(index);
            }
            return indexes;
        }, []);
        return value < nearestValue ? sameValueIndexes[0] : last_1.last(sameValueIndexes);
    }
    else {
        return vector.indexOf(nearestValue);
    }
}
exports.nearestIndex = nearestIndex;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;AAAA,+BAA4B;AAE5B,iBAAwB,MAAgB,EAAE,KAAa;IACnD,MAAM,CAAC,MAAM,CAAC,KAAK,EAAE,CAAC,IAAI,CAAC,UAAC,CAAC,EAAE,CAAC,IAAK,OAAA,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,IAAI,CAAC,GAAG,CAAC,KAAK,GAAG,CAAC,CAAC,CAAC,EAA3C,CAA2C,CAAC,CAAC,CAAC,CAAC,CAAC;AACzF,CAAC;AAFD,0BAEC;AACD,sBAA6B,MAAgB,EAAE,KAAa,EAAE,OAAiB;IAC3E,IAAM,YAAY,GAAG,OAAO,CAAC,MAAM,EAAE,KAAK,CAAC,CAAC;IAC5C,EAAE,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC;QACV,IAAM,gBAAgB,GAAG,MAAM,CAAC,MAAM,CAAC,UAAC,OAAiB,EAAE,IAAI,EAAE,KAAK;YAClE,EAAE,CAAC,CAAC,IAAI,KAAK,YAAY,CAAC,CAAC,CAAC;gBACxB,OAAO,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC;YACxB,CAAC;YACD,MAAM,CAAC,OAAO,CAAC;QACnB,CAAC,EAAE,EAAE,CAAC,CAAC;QACP,MAAM,CAAE,KAAK,GAAG,YAAY,CAAC,CAAC,CAAC,gBAAgB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,WAAI,CAAC,gBAAgB,CAAC,CAAC;IAChF,CAAC;IAAC,IAAI,CAAC,CAAC;QACJ,MAAM,CAAC,MAAM,CAAC,OAAO,CAAC,YAAY,CAAC,CAAC;IACxC,CAAC;AACL,CAAC;AAbD,oCAaC"}