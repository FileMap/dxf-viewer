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
EntityParser.ForEntityName = "ATTDEF";
EntityParser.prototype.parseEntity = function(scanner, curr) {
    var entity = {
        type: curr.value,
        scale: 1,
        textStyle: "STANDARD"
    };
    curr = scanner.next();
    while(curr !== "EOF"){
        if (curr.code === 0) {
            break;
        }
        switch(curr.code){
            case 1:
                entity.text = curr.value;
                break;
            case 2:
                entity.tag = curr.value;
                break;
            case 3:
                entity.prompt = curr.value;
                break;
            case 7:
                entity.textStyle = curr.value;
                break;
            case 10:
                entity.startPoint = _ParseHelpers.parsePoint(scanner);
                break;
            case 11:
                entity.endPoint = _ParseHelpers.parsePoint(scanner);
                break;
            case 39:
                entity.thickness = curr.value;
                break;
            case 40:
                entity.textHeight = curr.value;
                break;
            case 41:
                entity.scale = curr.value;
                break;
            case 50:
                entity.rotation = curr.value;
                break;
            case 51:
                entity.obliqueAngle = curr.value;
                break;
            case 70:
                entity.invisible = !!(curr.value & 0x01);
                entity.constant = !!(curr.value & 0x02);
                entity.verificationRequired = !!(curr.value & 0x04);
                entity.preset = !!(curr.value & 0x08);
                break;
            case 71:
                entity.backwards = !!(curr.value & 0x02);
                entity.mirrored = !!(curr.value & 0x04);
                break;
            case 72:
                // TODO: enum values?
                entity.horizontalJustification = curr.value;
                break;
            case 73:
                entity.fieldLength = curr.value;
                break;
            case 74:
                // TODO: enum values?
                entity.verticalJustification = curr.value;
                break;
            case 100:
                break;
            case 101:
                _ParseHelpers.skipEmbeddedObject(scanner);
                break;
            case 210:
                entity.extrusionDirection = _ParseHelpers.parsePoint(scanner);
                break;
            default:
                _ParseHelpers.checkCommonEntityProperties(entity, curr);
                break;
        }
        curr = scanner.next();
    }
    return entity;
};
