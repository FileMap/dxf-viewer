/** Key for materials. */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MaterialKey", {
    enumerable: true,
    get: function() {
        return MaterialKey;
    }
});
var _batchingKey = require("./BatchingKey");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var MaterialKey = /*#__PURE__*/ function() {
    "use strict";
    function MaterialKey(instanceType, geometryType, color, lineType) {
        _classCallCheck(this, MaterialKey);
        this.instanceType = instanceType;
        this.geometryType = geometryType !== null && geometryType !== void 0 ? geometryType : null;
        this.color = color;
        this.lineType = lineType !== null && lineType !== void 0 ? lineType : null;
    }
    _createClass(MaterialKey, [
        {
            /** Comparator function. Fields lexical order corresponds to the constructor arguments order.
     * Null values are always first.
     */ key: "Compare",
            value: function Compare(other) {
                var c = (0, _batchingKey.CompareValues)(this.instanceType, other.instanceType);
                if (c !== 0) {
                    return c;
                }
                c = (0, _batchingKey.CompareValues)(this.geometryType, other.geometryType);
                if (c !== 0) {
                    return c;
                }
                c = (0, _batchingKey.CompareValues)(this.color, other.color);
                if (c !== 0) {
                    return c;
                }
                return (0, _batchingKey.CompareValues)(this.lineType, other.lineType);
            }
        }
    ]);
    return MaterialKey;
}();