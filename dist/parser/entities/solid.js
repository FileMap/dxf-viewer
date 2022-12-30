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
EntityParser.ForEntityName = "SOLID";
EntityParser.prototype.parseEntity = function(scanner, currentGroup) {
    var entity;
    entity = {
        type: currentGroup.value
    };
    entity.points = [];
    currentGroup = scanner.next();
    while(currentGroup !== "EOF"){
        if (currentGroup.code === 0) break;
        switch(currentGroup.code){
            case 10:
                entity.points[0] = _parseHelpers.parsePoint(scanner);
                break;
            case 11:
                entity.points[1] = _parseHelpers.parsePoint(scanner);
                break;
            case 12:
                entity.points[2] = _parseHelpers.parsePoint(scanner);
                break;
            case 13:
                entity.points[3] = _parseHelpers.parsePoint(scanner);
                break;
            case 210:
                entity.extrusionDirection = _parseHelpers.parsePoint(scanner);
                break;
            default:
                _parseHelpers.checkCommonEntityProperties(entity, currentGroup);
                break;
        }
        currentGroup = scanner.next();
    }
    return entity;
};
