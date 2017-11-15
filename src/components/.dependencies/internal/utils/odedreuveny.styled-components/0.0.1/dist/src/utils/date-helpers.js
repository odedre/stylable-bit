"use strict";
exports.__esModule = true;
var monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'
];
function getDayNames(startingDay) {
    if (startingDay === void 0) { startingDay = 0; }
    var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // Days start from Sunday (Sunday = 0, Monday = 1, etc.)
    for (var i = startingDay; i > 0; i--) {
        dayNames.push(dayNames.shift());
    }
    return dayNames;
}
exports.getDayNames = getDayNames;
function getMonthNames() {
    return monthNames;
}
exports.getMonthNames = getMonthNames;
function getMonthFromOffset(date, offset) {
    return new Date(date.getFullYear(), date.getMonth() + offset, 1);
}
exports.getMonthFromOffset = getMonthFromOffset;
function getDaysInMonth(date) {
    // Important: the '0' in the day category "rolls back" the daysArray to the start of the previous month
    // so we add a month to the daysArray in order to get the number of days for the intended month
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}
exports.getDaysInMonth = getDaysInMonth;
function getLastDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
}
exports.getLastDayOfMonth = getLastDayOfMonth;
function getNumOfPreviousDays(date, startingDay) {
    if (startingDay === void 0) { startingDay = 0; }
    // Days start from Sunday (Sunday = 0, Monday = 1, etc.)
    var previousDays = (new Date(date.getFullYear(), date.getMonth(), 1).getDay() - startingDay) + 7;
    return previousDays > 6 ? previousDays - 7 : previousDays;
}
exports.getNumOfPreviousDays = getNumOfPreviousDays;
function getNumOfFollowingDays(date, startingDay) {
    if (startingDay === void 0) { startingDay = 0; }
    var followingDays = (6 - getLastDayOfMonth(date)) + startingDay;
    return followingDays > 6 ? followingDays - 7 : followingDays;
}
exports.getNumOfFollowingDays = getNumOfFollowingDays;
function changeDayInMonth(date, dayToSet) {
    var dateToReturn = new Date(date.getFullYear(), date.getMonth());
    dateToReturn.setDate(dayToSet);
    return dateToReturn;
}
exports.changeDayInMonth = changeDayInMonth;
function isWeekend(date) {
    // Returns true if Saturday or Sunday... need to add localization
    return date.getDay() === 6 || date.getDay() === 0;
}
exports.isWeekend = isWeekend;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;AAAA,IAAM,UAAU,GAAG;IACf,SAAS,EAAE,UAAU,EAAE,OAAO;IAC9B,OAAO,EAAE,KAAK,EAAE,MAAM;IACtB,MAAM,EAAE,QAAQ,EAAE,WAAW;IAC7B,SAAS,EAAE,UAAU,EAAE,UAAU;CACpC,CAAC;AAEF,qBAA4B,WAAuB;IAAvB,4BAAA,EAAA,eAAuB;IAC/C,IAAM,QAAQ,GAAa,CAAC,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,CAAC,CAAC;IAE7E,wDAAwD;IACxD,GAAG,CAAC,CAAC,IAAI,CAAC,GAAG,WAAW,EAAE,CAAC,GAAG,CAAC,EAAE,CAAC,EAAE,EAAE,CAAC;QACnC,QAAQ,CAAC,IAAI,CAAC,QAAQ,CAAC,KAAK,EAAG,CAAC,CAAC;IACrC,CAAC;IAED,MAAM,CAAC,QAAQ,CAAC;AACpB,CAAC;AATD,kCASC;AAED;IACI,MAAM,CAAC,UAAU,CAAC;AACtB,CAAC;AAFD,sCAEC;AAED,4BAAmC,IAAU,EAAE,MAAc;IACzD,MAAM,CAAC,IAAI,IAAI,CAAC,IAAI,CAAC,WAAW,EAAE,EAAE,IAAI,CAAC,QAAQ,EAAE,GAAG,MAAM,EAAE,CAAC,CAAC,CAAC;AACrE,CAAC;AAFD,gDAEC;AAED,wBAA+B,IAAU;IACrC,uGAAuG;IACvG,+FAA+F;IAC/F,MAAM,CAAC,IAAI,IAAI,CAAC,IAAI,CAAC,WAAW,EAAE,EAAE,IAAI,CAAC,QAAQ,EAAE,GAAG,CAAC,EAAE,CAAC,CAAC,CAAC,OAAO,EAAE,CAAC;AAC1E,CAAC;AAJD,wCAIC;AAED,2BAAkC,IAAU;IACxC,MAAM,CAAC,IAAI,IAAI,CAAC,IAAI,CAAC,WAAW,EAAE,EAAE,IAAI,CAAC,QAAQ,EAAE,GAAG,CAAC,EAAE,CAAC,CAAC,CAAC,MAAM,EAAE,CAAC;AACzE,CAAC;AAFD,8CAEC;AAED,8BAAqC,IAAU,EAAE,WAAuB;IAAvB,4BAAA,EAAA,eAAuB;IACpE,wDAAwD;IACxD,IAAM,YAAY,GAAW,CAAC,IAAI,IAAI,CAAC,IAAI,CAAC,WAAW,EAAE,EAAE,IAAI,CAAC,QAAQ,EAAE,EAAE,CAAC,CAAC,CAAC,MAAM,EAAE,GAAG,WAAW,CAAC,GAAG,CAAC,CAAC;IAC3G,MAAM,CAAC,YAAY,GAAG,CAAC,CAAC,CAAC,CAAC,YAAY,GAAG,CAAC,CAAC,CAAC,CAAC,YAAY,CAAC;AAC9D,CAAC;AAJD,oDAIC;AAED,+BAAsC,IAAU,EAAE,WAAuB;IAAvB,4BAAA,EAAA,eAAuB;IACrE,IAAM,aAAa,GAAG,CAAC,CAAC,GAAG,iBAAiB,CAAC,IAAI,CAAC,CAAC,GAAG,WAAW,CAAC;IAClE,MAAM,CAAC,aAAa,GAAG,CAAC,CAAC,CAAC,CAAC,aAAa,GAAG,CAAC,CAAC,CAAC,CAAC,aAAa,CAAC;AACjE,CAAC;AAHD,sDAGC;AAED,0BAAiC,IAAU,EAAE,QAAgB;IACzD,IAAM,YAAY,GAAG,IAAI,IAAI,CAAC,IAAI,CAAC,WAAW,EAAE,EAAE,IAAI,CAAC,QAAQ,EAAE,CAAC,CAAC;IACnE,YAAY,CAAC,OAAO,CAAC,QAAQ,CAAC,CAAC;IAC/B,MAAM,CAAC,YAAY,CAAC;AACxB,CAAC;AAJD,4CAIC;AAED,mBAA0B,IAAU;IAChC,iEAAiE;IACjE,MAAM,CAAC,IAAI,CAAC,MAAM,EAAE,KAAK,CAAC,IAAI,IAAI,CAAC,MAAM,EAAE,KAAK,CAAC,CAAC;AACtD,CAAC;AAHD,8BAGC"}