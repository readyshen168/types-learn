"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFirstNegativeNumber = findFirstNegativeNumber;
exports.findFirstOneCharacterString = findFirstOneCharacterString;
function findFirstNegativeNumber(numbers) {
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        if (num < 0) {
            return num;
        }
    }
}
function findFirstOneCharacterString(strings) {
    for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
        var str = strings_1[_i];
        if (str.length === 1) {
            return str;
        }
    }
}
