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
EntityParser.ForEntityName = "LWPOLYLINE";
EntityParser.prototype.parseEntity = function(scanner, curr) {
    var entity = {
        type: curr.value,
        vertices: []
    }, numberOfVertices = 0;
    curr = scanner.next();
    while(curr !== "EOF"){
        if (curr.code === 0) break;
        switch(curr.code){
            case 38:
                entity.elevation = curr.value;
                break;
            case 39:
                entity.depth = curr.value;
                break;
            case 70:
                entity.shape = (curr.value & 1) === 1;
                entity.hasContinuousLinetypePattern = (curr.value & 128) === 128;
                break;
            case 90:
                numberOfVertices = curr.value;
                break;
            case 10:
                entity.vertices = parseLWPolylineVertices(numberOfVertices, scanner);
                break;
            case 43:
                if (curr.value !== 0) entity.width = curr.value;
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
function parseLWPolylineVertices(n, scanner) {
    if (!n || n <= 0) throw Error("n must be greater than 0 verticies");
    var vertices = [], i;
    var vertexIsStarted = false;
    var vertexIsFinished = false;
    var curr = scanner.lastReadGroup;
    for(i = 0; i < n; i++){
        var vertex = {};
        while(curr !== "EOF"){
            if (curr.code === 0 || vertexIsFinished) break;
            switch(curr.code){
                case 10:
                    if (vertexIsStarted) {
                        vertexIsFinished = true;
                        continue;
                    }
                    vertex.x = curr.value;
                    vertexIsStarted = true;
                    break;
                case 20:
                    vertex.y = curr.value;
                    break;
                case 30:
                    vertex.z = curr.value;
                    break;
                case 40:
                    vertex.startWidth = curr.value;
                    break;
                case 41:
                    vertex.endWidth = curr.value;
                    break;
                case 42:
                    if (curr.value != 0) vertex.bulge = curr.value;
                    break;
                default:
                    // if we do not hit known code return vertices.  Code might belong to entity
                    if (vertexIsStarted) {
                        vertices.push(vertex);
                    }
                    scanner.rewind();
                    return vertices;
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
