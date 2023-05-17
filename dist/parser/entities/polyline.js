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
var _vertex = /*#__PURE__*/ _interop_require_default(require("./vertex"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
EntityParser.ForEntityName = "POLYLINE";
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
                break;
            case 20:
                break;
            case 30:
                break;
            case 39:
                entity.thickness = curr.value;
                break;
            case 40:
                break;
            case 41:
                break;
            case 70:
                entity.shape = (curr.value & 1) !== 0;
                entity.includesCurveFitVertices = (curr.value & 2) !== 0;
                entity.includesSplineFitVertices = (curr.value & 4) !== 0;
                entity.is3dPolyline = (curr.value & 8) !== 0;
                entity.is3dPolygonMesh = (curr.value & 16) !== 0;
                entity.is3dPolygonMeshClosed = (curr.value & 32) !== 0; // 32 = The polygon mesh is closed in the N direction
                entity.isPolyfaceMesh = (curr.value & 64) !== 0;
                entity.hasContinuousLinetypePattern = (curr.value & 128) !== 0;
                break;
            case 71:
                break;
            case 72:
                break;
            case 73:
                break;
            case 74:
                break;
            case 75:
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
    entity.vertices = parsePolylineVertices(scanner, curr);
    return entity;
};
function parsePolylineVertices(scanner, curr) {
    var vertexParser = new _vertex.default();
    var vertices = [];
    while(!scanner.isEOF()){
        if (curr.code === 0) {
            if (curr.value === "VERTEX") {
                vertices.push(vertexParser.parseEntity(scanner, curr));
                curr = scanner.lastReadGroup;
            } else if (curr.value === "SEQEND") {
                parseSeqEnd(scanner, curr);
                break;
            }
        }
    }
    return vertices;
}
;
function parseSeqEnd(scanner, curr) {
    var entity = {
        type: curr.value
    };
    curr = scanner.next();
    while(curr != "EOF"){
        if (curr.code == 0) break;
        _ParseHelpers.checkCommonEntityProperties(entity, curr);
        curr = scanner.next();
    }
    return entity;
}
;
