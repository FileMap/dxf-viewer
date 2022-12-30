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
EntityParser.ForEntityName = "LINE";
EntityParser.prototype.parseEntity = function(scanner, curr) {
    var entity = {
        type: curr.value,
        vertices: []
    };
    curr = scanner.next();
    while(curr !== "EOF"){
        if (curr.code === 0) break;
        switch(curr.code){
            case 10:
                entity.vertices.unshift(_parseHelpers.parsePoint(scanner));
                break;
            case 11:
                entity.vertices.push(_parseHelpers.parsePoint(scanner));
                break;
            case 210:
                entity.extrusionDirection = _parseHelpers.parsePoint(scanner);
                break;
            case 100:
                break;
            default:
                _parseHelpers.checkCommonEntityProperties(entity, curr);
                break;
        }
        curr = scanner.next();
    }
    return entity;
};
