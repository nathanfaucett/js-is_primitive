var isNullOrUndefined = require("is_null_or_undefined");


module.exports = function isPrimitive(obj) {
    var typeStr;
    return isNullOrUndefined(obj) || ((typeStr = typeof(obj)) !== "object" && typeStr !== "function") || false;
};