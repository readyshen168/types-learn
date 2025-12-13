"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.first = first;
function first(elements, p) {
    for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
        var e = elements_1[_i];
        if (p(e)) {
            return e;
        }
    }
}
