"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFixedPlaceDisplay = exports.toFixedPlace = void 0;
function toFixedPlace(num, fixed = 2) {
    if (!num || fixed == undefined || fixed < 0 || isNaN(num))
        return num;
    const re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
    const cleaned = Number(num)
        .toFixed(fixed + 1)
        .match(re);
    return cleaned?.length ? Number(cleaned[0]) : 0;
}
exports.toFixedPlace = toFixedPlace;
function toFixedPlaceDisplay(num, fixed = 2) {
    const display = Number(toFixedPlace(num, fixed));
    return display.toLocaleString(undefined, {
        minimumFractionDigits: fixed,
        maximumFractionDigits: fixed,
    });
}
exports.toFixedPlaceDisplay = toFixedPlaceDisplay;
//# sourceMappingURL=common.helper.js.map