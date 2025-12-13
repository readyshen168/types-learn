"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFirstNegativeNumber = findFirstNegativeNumber;
exports.findFirstOneCharacterString = findFirstOneCharacterString;
var utils_1 = require("./utils");
function findFirstNegativeNumber(numbers) {
    return (0, utils_1.first)(numbers, function (num) { return num < 0; });
}
function findFirstOneCharacterString(strings) {
    return (0, utils_1.first)(strings, function (str) { return str.length === 1; });
}
