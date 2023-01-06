"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DxfParser;
    }
});
var _dxfArrayScanner = /*#__PURE__*/ _interopRequireDefault(require("./DxfArrayScanner"));
var _autoCadColorIndex = /*#__PURE__*/ _interopRequireDefault(require("./AutoCadColorIndex"));
var _3Dface = /*#__PURE__*/ _interopRequireDefault(require("./entities/3dface"));
var _arc = /*#__PURE__*/ _interopRequireDefault(require("./entities/arc"));
var _attdef = /*#__PURE__*/ _interopRequireDefault(require("./entities/attdef"));
var _circle = /*#__PURE__*/ _interopRequireDefault(require("./entities/circle"));
var _dimension = /*#__PURE__*/ _interopRequireDefault(require("./entities/dimension"));
var _ellipse = /*#__PURE__*/ _interopRequireDefault(require("./entities/ellipse"));
var _insert = /*#__PURE__*/ _interopRequireDefault(require("./entities/insert"));
var _line = /*#__PURE__*/ _interopRequireDefault(require("./entities/line"));
var _lwpolyline = /*#__PURE__*/ _interopRequireDefault(require("./entities/lwpolyline"));
var _mtext = /*#__PURE__*/ _interopRequireDefault(require("./entities/mtext"));
var _point = /*#__PURE__*/ _interopRequireDefault(require("./entities/point"));
var _polyline = /*#__PURE__*/ _interopRequireDefault(require("./entities/polyline"));
var _solid = /*#__PURE__*/ _interopRequireDefault(require("./entities/solid"));
var _spline = /*#__PURE__*/ _interopRequireDefault(require("./entities/spline"));
var _text = /*#__PURE__*/ _interopRequireDefault(require("./entities/text"));
var _loglevel = /*#__PURE__*/ _interopRequireDefault(require("loglevel"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
//log.setLevel('trace');
//log.setLevel('debug');
//log.setLevel('info');
//log.setLevel('warn');
_loglevel.default.setLevel("error");
//log.setLevel('silent');
function registerDefaultEntityHandlers(dxfParser) {
    // Supported entities here (some entity code is still being refactored into this flow)
    dxfParser.registerEntityHandler(_3Dface.default);
    dxfParser.registerEntityHandler(_arc.default);
    dxfParser.registerEntityHandler(_attdef.default);
    dxfParser.registerEntityHandler(_circle.default);
    dxfParser.registerEntityHandler(_dimension.default);
    dxfParser.registerEntityHandler(_ellipse.default);
    dxfParser.registerEntityHandler(_insert.default);
    dxfParser.registerEntityHandler(_line.default);
    dxfParser.registerEntityHandler(_lwpolyline.default);
    dxfParser.registerEntityHandler(_mtext.default);
    dxfParser.registerEntityHandler(_point.default);
    dxfParser.registerEntityHandler(_polyline.default);
    dxfParser.registerEntityHandler(_solid.default);
    dxfParser.registerEntityHandler(_spline.default);
    dxfParser.registerEntityHandler(_text.default);
//dxfParser.registerEntityHandler(require('./entities/vertex'));
}
function DxfParser() {
    this._entityHandlers = {};
    registerDefaultEntityHandlers(this);
}
DxfParser.prototype.parse = function(source, done) {
    throw new Error("read() not implemented. Use readSync()");
};
DxfParser.prototype.registerEntityHandler = function(handlerType) {
    var instance = new handlerType();
    this._entityHandlers[handlerType.ForEntityName] = instance;
};
DxfParser.prototype.parseSync = function(source) {
    if (typeof source === "string") {
        return this._parse(source);
    } else {
        console.error("Cannot read dxf source of type `" + (typeof source === "undefined" ? "undefined" : _typeof(source)));
        return null;
    }
};
DxfParser.prototype.parseStream = function(stream, done) {
    var onData = function onData(chunk) {
        dxfString += chunk;
    };
    var onEnd = function onEnd() {
        try {
            var dxf = self._parse(dxfString);
        } catch (err) {
            return done(err);
        }
        done(null, dxf);
    };
    var onError = function onError(err) {
        done(err);
    };
    var dxfString = "";
    var self = this;
    stream.on("data", onData);
    stream.on("end", onEnd);
    stream.on("error", onError);
};
DxfParser.prototype._parse = function(dxfString) {
    var scanner, curr, dxf = {}, lastHandle = 0;
    var dxfLinesArray = dxfString.split(/\r\n|\r|\n/g);
    dxf.header = {};
    scanner = new _dxfArrayScanner.default(dxfLinesArray);
    if (!scanner.hasNext()) throw Error("Empty file");
    var self = this;
    var parseAll = function parseAll() {
        curr = scanner.next();
        while(!scanner.isEOF()){
            if (curr.code === 0 && curr.value === "SECTION") {
                curr = scanner.next();
                // Be sure we are reading a section code
                if (curr.code !== 2) {
                    console.error("Unexpected code %s after 0:SECTION", debugCode(curr));
                    curr = scanner.next();
                    continue;
                }
                if (curr.value === "HEADER") {
                    _loglevel.default.debug("> HEADER");
                    dxf.header = parseHeader();
                    _loglevel.default.debug("<");
                } else if (curr.value === "BLOCKS") {
                    _loglevel.default.debug("> BLOCKS");
                    dxf.blocks = parseBlocks();
                    _loglevel.default.debug("<");
                } else if (curr.value === "ENTITIES") {
                    _loglevel.default.debug("> ENTITIES");
                    dxf.entities = parseEntities(false);
                    _loglevel.default.debug("<");
                } else if (curr.value === "TABLES") {
                    _loglevel.default.debug("> TABLES");
                    dxf.tables = parseTables();
                    _loglevel.default.debug("<");
                } else if (curr.value === "EOF") {
                    _loglevel.default.debug("EOF");
                } else {
                    _loglevel.default.warn("Skipping section '%s'", curr.value);
                }
            } else {
                curr = scanner.next();
            }
        // If is a new section
        }
    };
    var groupIs = function groupIs(code, value) {
        return curr.code === code && curr.value === value;
    };
    /**
     *
     * @return {object} header
     */ var parseHeader = function parseHeader() {
        // interesting variables:
        //  $ACADVER, $VIEWDIR, $VIEWSIZE, $VIEWCTR, $TDCREATE, $TDUPDATE
        // http://www.autodesk.com/techpubs/autocad/acadr14/dxf/header_section_al_u05_c.htm
        // Also see VPORT table entries
        var currVarName = null, currVarValue = null;
        var header = {};
        // loop through header variables
        curr = scanner.next();
        while(true){
            if (groupIs(0, "ENDSEC")) {
                if (currVarName) header[currVarName] = currVarValue;
                break;
            } else if (curr.code === 9) {
                if (currVarName) header[currVarName] = currVarValue;
                currVarName = curr.value;
            // Filter here for particular variables we are interested in
            } else {
                if (curr.code === 10) {
                    currVarValue = {
                        x: curr.value
                    };
                } else if (curr.code === 20) {
                    currVarValue.y = curr.value;
                } else if (curr.code === 30) {
                    currVarValue.z = curr.value;
                } else {
                    currVarValue = curr.value;
                }
            }
            curr = scanner.next();
        }
        // console.log(util.inspect(header, { colors: true, depth: null }));
        curr = scanner.next(); // swallow up ENDSEC
        return header;
    };
    /**
     *
     */ var parseBlocks = function parseBlocks() {
        var blocks = {}, block;
        curr = scanner.next();
        while(curr.value !== "EOF"){
            if (groupIs(0, "ENDSEC")) {
                break;
            }
            if (groupIs(0, "BLOCK")) {
                _loglevel.default.debug("block {");
                block = parseBlock();
                _loglevel.default.debug("}");
                ensureHandle(block);
                if (!block.name) _loglevel.default.error('block with handle "' + block.handle + '" is missing a name.');
                else blocks[block.name] = block;
            } else {
                logUnhandledGroup(curr);
                curr = scanner.next();
            }
        }
        return blocks;
    };
    var parseBlock = function parseBlock() {
        var block = {};
        curr = scanner.next();
        while(curr.value !== "EOF"){
            switch(curr.code){
                case 1:
                    block.xrefPath = curr.value;
                    curr = scanner.next();
                    break;
                case 2:
                    block.name = curr.value;
                    curr = scanner.next();
                    break;
                case 3:
                    block.name2 = curr.value;
                    curr = scanner.next();
                    break;
                case 5:
                    block.handle = curr.value;
                    curr = scanner.next();
                    break;
                case 8:
                    block.layer = curr.value;
                    curr = scanner.next();
                    break;
                case 10:
                    block.position = parsePoint();
                    curr = scanner.next();
                    break;
                case 67:
                    block.paperSpace = curr.value && curr.value == 1 ? true : false;
                    curr = scanner.next();
                    break;
                case 70:
                    if (curr.value != 0) {
                        //if(curr.value & BLOCK_ANONYMOUS_FLAG) console.log('  Anonymous block');
                        //if(curr.value & BLOCK_NON_CONSTANT_FLAG) console.log('  Non-constant attributes');
                        //if(curr.value & BLOCK_XREF_FLAG) console.log('  Is xref');
                        //if(curr.value & BLOCK_XREF_OVERLAY_FLAG) console.log('  Is xref overlay');
                        //if(curr.value & BLOCK_EXTERNALLY_DEPENDENT_FLAG) console.log('  Is externally dependent');
                        //if(curr.value & BLOCK_RESOLVED_OR_DEPENDENT_FLAG) console.log('  Is resolved xref or dependent of an xref');
                        //if(curr.value & BLOCK_REFERENCED_XREF) console.log('  This definition is a referenced xref');
                        block.type = curr.value;
                    }
                    curr = scanner.next();
                    break;
                case 100:
                    // ignore class markers
                    curr = scanner.next();
                    break;
                case 330:
                    block.ownerHandle = curr.value;
                    curr = scanner.next();
                    break;
                case 0:
                    if (curr.value == "ENDBLK") break;
                    block.entities = parseEntities(true);
                    break;
                default:
                    logUnhandledGroup(curr);
                    curr = scanner.next();
            }
            if (groupIs(0, "ENDBLK")) {
                curr = scanner.next();
                break;
            }
        }
        return block;
    };
    /**
     * parseTables
     * @return {Object} Object representing tables
     */ var parseTables = function parseTables() {
        var tables = {};
        curr = scanner.next();
        while(curr.value !== "EOF"){
            if (groupIs(0, "ENDSEC")) break;
            if (groupIs(0, "TABLE")) {
                curr = scanner.next();
                var tableDefinition = tableDefinitions[curr.value];
                if (tableDefinition) {
                    _loglevel.default.debug(curr.value + " Table {");
                    tables[tableDefinitions[curr.value].tableName] = parseTable();
                    _loglevel.default.debug("}");
                } else {
                    _loglevel.default.debug("Unhandled Table " + curr.value);
                }
            } else {
                // else ignored
                curr = scanner.next();
            }
        }
        curr = scanner.next();
        return tables;
    };
    var END_OF_TABLE_VALUE = "ENDTAB";
    var parseTable = function parseTable() {
        var tableDefinition = tableDefinitions[curr.value], table = {}, expectedCount = 0, actualCount;
        curr = scanner.next();
        while(!groupIs(0, END_OF_TABLE_VALUE)){
            switch(curr.code){
                case 5:
                    table.handle = curr.value;
                    curr = scanner.next();
                    break;
                case 330:
                    table.ownerHandle = curr.value;
                    curr = scanner.next();
                    break;
                case 100:
                    if (curr.value === "AcDbSymbolTable") {
                        // ignore
                        curr = scanner.next();
                    } else {
                        logUnhandledGroup(curr);
                        curr = scanner.next();
                    }
                    break;
                case 70:
                    expectedCount = curr.value;
                    curr = scanner.next();
                    break;
                case 0:
                    if (curr.value === tableDefinition.dxfSymbolName) {
                        table[tableDefinition.tableRecordsProperty] = tableDefinition.parseTableRecords();
                    } else {
                        logUnhandledGroup(curr);
                        curr = scanner.next();
                    }
                    break;
                default:
                    logUnhandledGroup(curr);
                    curr = scanner.next();
            }
        }
        var tableRecords = table[tableDefinition.tableRecordsProperty];
        if (tableRecords) {
            if (tableRecords.constructor === Array) {
                actualCount = tableRecords.length;
            } else if (typeof tableRecords === "object") {
                actualCount = Object.keys(tableRecords).length;
            }
            if (expectedCount !== actualCount) _loglevel.default.warn("Parsed " + actualCount + " " + tableDefinition.dxfSymbolName + "'s but expected " + expectedCount);
        }
        curr = scanner.next();
        return table;
    };
    var parseViewPortRecords = function parseViewPortRecords() {
        var viewPorts = [], viewPort = {};
        _loglevel.default.debug("ViewPort {");
        curr = scanner.next();
        while(!groupIs(0, END_OF_TABLE_VALUE)){
            switch(curr.code){
                case 2:
                    viewPort.name = curr.value;
                    curr = scanner.next();
                    break;
                case 10:
                    viewPort.lowerLeftCorner = parsePoint();
                    curr = scanner.next();
                    break;
                case 11:
                    viewPort.upperRightCorner = parsePoint();
                    curr = scanner.next();
                    break;
                case 12:
                    viewPort.center = parsePoint();
                    curr = scanner.next();
                    break;
                case 13:
                    viewPort.snapBasePoint = parsePoint();
                    curr = scanner.next();
                    break;
                case 14:
                    viewPort.snapSpacing = parsePoint();
                    curr = scanner.next();
                    break;
                case 15:
                    viewPort.gridSpacing = parsePoint();
                    curr = scanner.next();
                    break;
                case 16:
                    viewPort.viewDirectionFromTarget = parsePoint();
                    curr = scanner.next();
                    break;
                case 17:
                    viewPort.viewTarget = parsePoint();
                    curr = scanner.next();
                    break;
                case 42:
                    viewPort.lensLength = curr.value;
                    curr = scanner.next();
                    break;
                case 43:
                    viewPort.frontClippingPlane = curr.value;
                    curr = scanner.next();
                    break;
                case 44:
                    viewPort.backClippingPlane = curr.value;
                    curr = scanner.next();
                    break;
                case 45:
                    viewPort.viewHeight = curr.value;
                    curr = scanner.next();
                    break;
                case 50:
                    viewPort.snapRotationAngle = curr.value;
                    curr = scanner.next();
                    break;
                case 51:
                    viewPort.viewTwistAngle = curr.value;
                    curr = scanner.next();
                    break;
                case 79:
                    viewPort.orthographicType = curr.value;
                    curr = scanner.next();
                    break;
                case 110:
                    viewPort.ucsOrigin = parsePoint();
                    curr = scanner.next();
                    break;
                case 111:
                    viewPort.ucsXAxis = parsePoint();
                    curr = scanner.next();
                    break;
                case 112:
                    viewPort.ucsYAxis = parsePoint();
                    curr = scanner.next();
                    break;
                case 110:
                    viewPort.ucsOrigin = parsePoint();
                    curr = scanner.next();
                    break;
                case 281:
                    viewPort.renderMode = curr.value;
                    curr = scanner.next();
                    break;
                case 281:
                    // 0 is one distant light, 1 is two distant lights
                    viewPort.defaultLightingType = curr.value;
                    curr = scanner.next();
                    break;
                case 292:
                    viewPort.defaultLightingOn = curr.value;
                    curr = scanner.next();
                    break;
                case 330:
                    viewPort.ownerHandle = curr.value;
                    curr = scanner.next();
                    break;
                case 63:
                case 421:
                case 431:
                    viewPort.ambientColor = curr.value;
                    curr = scanner.next();
                    break;
                case 0:
                    // New ViewPort
                    if (curr.value === "VPORT") {
                        _loglevel.default.debug("}");
                        viewPorts.push(viewPort);
                        _loglevel.default.debug("ViewPort {");
                        viewPort = {};
                        curr = scanner.next();
                    }
                    break;
                default:
                    logUnhandledGroup(curr);
                    curr = scanner.next();
                    break;
            }
        }
        // Note: do not call scanner.next() here,
        //  parseTable() needs the current group
        _loglevel.default.debug("}");
        viewPorts.push(viewPort);
        return viewPorts;
    };
    var parseLineTypes = function parseLineTypes() {
        var ltypes = {}, ltypeName, ltype = {}, length;
        _loglevel.default.debug("LType {");
        curr = scanner.next();
        while(!groupIs(0, "ENDTAB")){
            switch(curr.code){
                case 2:
                    ltype.name = curr.value;
                    ltypeName = curr.value;
                    curr = scanner.next();
                    break;
                case 3:
                    ltype.description = curr.value;
                    curr = scanner.next();
                    break;
                case 73:
                    length = curr.value;
                    if (length > 0) ltype.pattern = [];
                    curr = scanner.next();
                    break;
                case 40:
                    ltype.patternLength = curr.value;
                    curr = scanner.next();
                    break;
                case 49:
                    ltype.pattern.push(curr.value);
                    curr = scanner.next();
                    break;
                case 0:
                    _loglevel.default.debug("}");
                    if (length > 0 && length !== ltype.pattern.length) _loglevel.default.warn("lengths do not match on LTYPE pattern");
                    ltypes[ltypeName] = ltype;
                    ltype = {};
                    _loglevel.default.debug("LType {");
                    curr = scanner.next();
                    break;
                default:
                    curr = scanner.next();
            }
        }
        _loglevel.default.debug("}");
        ltypes[ltypeName] = ltype;
        return ltypes;
    };
    var parseLayers = function parseLayers() {
        var layers = {}, layerName, layer = {};
        _loglevel.default.debug("Layer {");
        curr = scanner.next();
        while(!groupIs(0, "ENDTAB")){
            switch(curr.code){
                case 2:
                    layer.name = curr.value;
                    layerName = curr.value;
                    curr = scanner.next();
                    break;
                case 62:
                    layer.visible = curr.value >= 0;
                    // TODO 0 and 256 are BYBLOCK and BYLAYER respectively. Need to handle these values for layers?.
                    layer.colorIndex = Math.abs(curr.value);
                    layer.color = getAcadColor(layer.colorIndex);
                    curr = scanner.next();
                    break;
                case 70:
                    layer.frozen = (curr.value & 1) !== 0 || (curr.value & 2) !== 0;
                    curr = scanner.next();
                    break;
                case 420:
                    layer.color = curr.value;
                    curr = scanner.next();
                    break;
                case 0:
                    // New Layer
                    if (curr.value === "LAYER") {
                        _loglevel.default.debug("}");
                        layers[layerName] = layer;
                        _loglevel.default.debug("Layer {");
                        layer = {};
                        layerName = undefined;
                        curr = scanner.next();
                    }
                    break;
                default:
                    logUnhandledGroup(curr);
                    curr = scanner.next();
                    break;
            }
        }
        // Note: do not call scanner.next() here,
        //  parseLayerTable() needs the current group
        _loglevel.default.debug("}");
        layers[layerName] = layer;
        return layers;
    };
    var tableDefinitions = {
        VPORT: {
            tableRecordsProperty: "viewPorts",
            tableName: "viewPort",
            dxfSymbolName: "VPORT",
            parseTableRecords: parseViewPortRecords
        },
        LTYPE: {
            tableRecordsProperty: "lineTypes",
            tableName: "lineType",
            dxfSymbolName: "LTYPE",
            parseTableRecords: parseLineTypes
        },
        LAYER: {
            tableRecordsProperty: "layers",
            tableName: "layer",
            dxfSymbolName: "LAYER",
            parseTableRecords: parseLayers
        }
    };
    /**
     * Is called after the parser first reads the 0:ENTITIES group. The scanner
     * should be on the start of the first entity already.
     * @return {Array} the resulting entities
     */ var parseEntities = function parseEntities(forBlock) {
        var entities = [];
        var endingOnValue = forBlock ? "ENDBLK" : "ENDSEC";
        if (!forBlock) {
            curr = scanner.next();
        }
        while(true){
            if (curr.code === 0) {
                if (curr.value === endingOnValue) {
                    break;
                }
                var entity;
                var handler = self._entityHandlers[curr.value];
                if (handler != null) {
                    _loglevel.default.debug(curr.value + " {");
                    entity = handler.parseEntity(scanner, curr);
                    curr = scanner.lastReadGroup;
                    _loglevel.default.debug("}");
                } else {
                    _loglevel.default.warn("Unhandled entity " + curr.value);
                    curr = scanner.next();
                    continue;
                }
                ensureHandle(entity);
                entities.push(entity);
            } else {
                // ignored lines from unsupported entity
                curr = scanner.next();
            }
        }
        if (endingOnValue == "ENDSEC") curr = scanner.next(); // swallow up ENDSEC, but not ENDBLK
        return entities;
    };
    /**
     * Parses a 2D or 3D point, returning it as an object with x, y, and
     * (sometimes) z property if it is 3D. It is assumed the current group
     * is x of the point being read in, and scanner.next() will return the
     * y. The parser will determine if there is a z point automatically.
     * @return {Object} The 2D or 3D point as an object with x, y[, z]
     */ var parsePoint = function parsePoint() {
        var point = {}, code = curr.code;
        point.x = curr.value;
        code += 10;
        curr = scanner.next();
        if (curr.code != code) throw new Error("Expected code for point value to be " + code + " but got " + curr.code + ".");
        point.y = curr.value;
        code += 10;
        curr = scanner.next();
        if (curr.code != code) {
            scanner.rewind();
            return point;
        }
        point.z = curr.value;
        return point;
    };
    var ensureHandle = function ensureHandle(entity) {
        if (!entity) throw new TypeError("entity cannot be undefined or null");
        if (!entity.handle) entity.handle = lastHandle++;
    };
    parseAll();
    return dxf;
};
function logUnhandledGroup(curr) {
    _loglevel.default.debug("unhandled group " + debugCode(curr));
}
function debugCode(curr) {
    return curr.code + ":" + curr.value;
}
/**
 * Returns the truecolor value of the given AutoCad color index value
 * @return {Number} truecolor value as a number
 */ function getAcadColor(index) {
    return _autoCadColorIndex.default[index];
}
var BLOCK_ANONYMOUS_FLAG = 1;
var BLOCK_NON_CONSTANT_FLAG = 2;
var BLOCK_XREF_FLAG = 4;
var BLOCK_XREF_OVERLAY_FLAG = 8;
var BLOCK_EXTERNALLY_DEPENDENT_FLAG = 16;
var BLOCK_RESOLVED_OR_DEPENDENT_FLAG = 32;
var BLOCK_REFERENCED_XREF = 64; /* Notes */  // Code 6 of an entity indicates inheritance of properties (eg. color).
 //   BYBLOCK means inherits from block
 //   BYLAYER (default) mean inherits from layer
