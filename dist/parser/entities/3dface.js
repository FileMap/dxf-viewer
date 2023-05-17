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
EntityParser.ForEntityName = "3DFACE";
EntityParser.prototype.parseEntity = function(scanner, curr) {
    var entity = {
        type: curr.value,
        vertices: []
    };
    curr = scanner.next();
    while(curr !== "EOF"){
        if (curr.code === 0) break;
        switch(curr.code){
            case 70:
                entity.shape = (curr.value & 1) === 1;
                entity.hasContinuousLinetypePattern = (curr.value & 128) === 128;
                break;
            case 10:
                entity.vertices = parse3dFaceVertices(scanner, curr);
                curr = scanner.lastReadGroup;
                break;
            default:
                _ParseHelpers.checkCommonEntityProperties(entity, curr);
                break;
        }
        curr = scanner.next();
    }
    return entity;
};
function parse3dFaceVertices(scanner, curr) {
    var vertices = [], i;
    var vertexIsStarted = false;
    var vertexIsFinished = false;
    var verticesPer3dFace = 4; // there can be up to four vertices per face, although 3 is most used for TIN
    for(i = 0; i <= verticesPer3dFace; i++){
        var vertex = {};
        while(curr !== "EOF"){
            if (curr.code === 0 || vertexIsFinished) break;
            switch(curr.code){
                case 10:
                case 11:
                case 12:
                case 13:
                    if (vertexIsStarted) {
                        vertexIsFinished = true;
                        continue;
                    }
                    vertex.x = curr.value;
                    vertexIsStarted = true;
                    break;
                case 20:
                case 21:
                case 22:
                case 23:
                    vertex.y = curr.value;
                    break;
                case 30:
                case 31:
                case 32:
                case 33:
                    vertex.z = curr.value;
                    break;
                default:
                    // it is possible to have entity codes after the vertices.
                    // So if code is not accounted for return to entity parser where it might be accounted for
                    return vertices;
                    continue;
            }
            curr = scanner.next();
        }
        // See https://groups.google.com/forum/#!topic/comp.cad.autocad/9gn8s5O_w6E
        vertices.push(vertex);
        vertexIsStarted = false;
        vertexIsFinished = false;
    }
    scanner.rewind();
    return vertices;
}
;
