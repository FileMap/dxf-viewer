"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EntityParser;
    }
});
var _ParseHelpers = /*#__PURE__*/ _interop_require_wildcard(require("../ParseHelpers"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function EntityParser() {}
EntityParser.ForEntityName = "VERTEX";
EntityParser.prototype.parseEntity = function(scanner, curr) {
    var entity = {
        type: curr.value
    };
    curr = scanner.next();
    while(curr !== "EOF"){
        if (curr.code === 0) break;
        switch(curr.code){
            case 10:
                entity.x = curr.value;
                break;
            case 20:
                entity.y = curr.value;
                break;
            case 30:
                entity.z = curr.value;
                break;
            case 40:
                break;
            case 41:
                break;
            case 42:
                if (curr.value != 0) entity.bulge = curr.value;
                break;
            case 70:
                entity.curveFittingVertex = (curr.value & 1) !== 0;
                entity.curveFitTangent = (curr.value & 2) !== 0;
                entity.splineVertex = (curr.value & 8) !== 0;
                entity.splineControlPoint = (curr.value & 16) !== 0;
                entity.threeDPolylineVertex = (curr.value & 32) !== 0;
                entity.threeDPolylineMesh = (curr.value & 64) !== 0;
                entity.polyfaceMeshVertex = (curr.value & 128) !== 0;
                break;
            case 50:
                break;
            case 71:
                entity.faceA = curr.value;
                break;
            case 72:
                entity.faceB = curr.value;
                break;
            case 73:
                entity.faceC = curr.value;
                break;
            case 74:
                entity.faceD = curr.value;
                break;
            default:
                _ParseHelpers.checkCommonEntityProperties(entity, curr);
                break;
        }
        curr = scanner.next();
    }
    return entity;
};
