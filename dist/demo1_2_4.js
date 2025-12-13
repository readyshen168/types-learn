"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFirstNegativeNumber = findFirstNegativeNumber;
exports.findFirstOneCharacterString = findFirstOneCharacterString;
function first(elements, p) {
    for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
        var e = elements_1[_i];
        if (p(e)) {
            return e;
        }
    }
}
function findFirstNegativeNumber(numbers) {
    return first(numbers, function (num) { return num < 0; });
}
function findFirstOneCharacterString(strings) {
    return first(strings, function (str) { return str.length === 1; });
}
