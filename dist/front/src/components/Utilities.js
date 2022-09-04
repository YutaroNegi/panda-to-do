"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasNullProp = exports.isEmail = void 0;
function isEmail(email) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email)
        return false;
    if (email.match(regex)) {
        return true;
    }
    else {
        return false;
    }
}
exports.isEmail = isEmail;
function hasNullProp(obj) {
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        if (obj[key] === null) {
            return true;
        }
    }
    return false;
}
exports.hasNullProp = hasNullProp;
