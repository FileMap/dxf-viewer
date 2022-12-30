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
EntityParser.ForEntityName = "ELLIPSE";
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
                entity.center = _parseHelpers.parsePoint(scanner);
                break;
            case 11:
                entity.majorAxisEndPoint = _parseHelpers.parsePoint(scanner);
                break;
            case 40:
                entity.axisRatio = curr.value;
                break;
            case 41:
                entity.startAngle = curr.value;
                break;
            case 42:
                entity.endAngle = curr.value;
                break;
            case 2:
                entity.name = curr.value;
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
