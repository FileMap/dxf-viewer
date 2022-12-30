/** Key for render batches. */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BatchingKey: function() {
        return BatchingKey;
    },
    CompareValues: function() {
        return CompareValues;
    }
});
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
var BatchingKey = /*#__PURE__*/ function() {
    "use strict";
    function BatchingKey(layerName, blockName, geometryType, color, lineType) {
        _classCallCheck(this, BatchingKey);
        this.layerName = layerName !== null && layerName !== void 0 ? layerName : null;
        this.blockName = blockName !== null && blockName !== void 0 ? blockName : null;
        this.geometryType = geometryType !== null && geometryType !== void 0 ? geometryType : null;
        this.color = color;
        this.lineType = lineType !== null && lineType !== void 0 ? lineType : null;
    }
    _createClass(BatchingKey, [
        {
            /** Comparator function. Fields lexical order corresponds to the constructor arguments order.
     * Null values are always first.
     */ key: "Compare",
            value: function Compare(other) {
                var c = CompareValues(this.layerName, other.layerName);
                if (c !== 0) {
                    return c;
                }
                c = CompareValues(this.blockName, other.blockName);
                if (c !== 0) {
                    return c;
                }
                c = CompareValues(this.geometryType, other.geometryType);
                if (c !== 0) {
                    return c;
                }
                c = CompareValues(this.color, other.color);
                if (c !== 0) {
                    return c;
                }
                return CompareValues(this.lineType, other.lineType);
            }
        },
        {
            key: "IsIndexed",
            value: function IsIndexed() {
                return this.geometryType === BatchingKey.GeometryType.INDEXED_LINES || this.geometryType === BatchingKey.GeometryType.INDEXED_TRIANGLES;
            }
        },
        {
            key: "IsInstanced",
            value: function IsInstanced() {
                return this.geometryType === BatchingKey.GeometryType.BLOCK_INSTANCE || this.geometryType === BatchingKey.GeometryType.POINT_INSTANCE;
            }
        }
    ]);
    return BatchingKey;
}();
BatchingKey.GeometryType = Object.freeze({
    POINTS: 0,
    LINES: 1,
    INDEXED_LINES: 2,
    TRIANGLES: 3,
    INDEXED_TRIANGLES: 4,
    BLOCK_INSTANCE: 5,
    /** Shaped point instances. */ POINT_INSTANCE: 6
});
function CompareValues(v1, v2) {
    if (v1 === null) {
        if (v2 === null) {
            return 0;
        }
        return -1;
    }
    if (v2 === null) {
        return 1;
    }
    if (v1 < v2) {
        return -1;
    }
    if (v1 > v2) {
        return 1;
    }
    return 0;
}
