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
var _parseHelpers = /*#__PURE__*/ _interopRequireWildcard(require("../ParseHelpers"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
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
EntityParser.ForEntityName = "SPLINE";
EntityParser.prototype.parseEntity = function(scanner, curr) {
    var entity;
    entity = {
        type: curr.value
    };
    curr = scanner.next();
    while(curr !== "EOF"){
        if (curr.code === 0) break;
        switch(curr.code){
            case 10:
                if (!entity.controlPoints) entity.controlPoints = [];
                entity.controlPoints.push(_parseHelpers.parsePoint(scanner));
                break;
            case 11:
                if (!entity.fitPoints) entity.fitPoints = [];
                entity.fitPoints.push(_parseHelpers.parsePoint(scanner));
                break;
            case 12:
                entity.startTangent = _parseHelpers.parsePoint(scanner);
                break;
            case 13:
                entity.endTangent = _parseHelpers.parsePoint(scanner);
                break;
            case 40:
                if (!entity.knotValues) entity.knotValues = [];
                entity.knotValues.push(curr.value);
                break;
            case 70:
                if ((curr.value & 1) != 0) entity.closed = true;
                if ((curr.value & 2) != 0) entity.periodic = true;
                if ((curr.value & 4) != 0) entity.rational = true;
                if ((curr.value & 8) != 0) entity.planar = true;
                if ((curr.value & 16) != 0) {
                    entity.planar = true;
                    entity.linear = true;
                }
                break;
            case 71:
                entity.degreeOfSplineCurve = curr.value;
                break;
            case 72:
                entity.numberOfKnots = curr.value;
                break;
            case 73:
                entity.numberOfControlPoints = curr.value;
                break;
            case 74:
                entity.numberOfFitPoints = curr.value;
                break;
            case 210:
                entity.extrusionDirection = _parseHelpers.parsePoint(scanner);
                break;
            default:
                _parseHelpers.checkCommonEntityProperties(entity, curr);
                break;
        }
        curr = scanner.next();
    }
    return entity;
};
