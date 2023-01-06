"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DxfScene: function() {
        return DxfScene;
    },
    Entity: function() {
        return Entity;
    },
    ColorCode: function() {
        return ColorCode;
    }
});
var _dynamicBuffer = require("./DynamicBuffer");
var _batchingKey = require("./BatchingKey");
var _three = require("three");
var _textRenderer = require("./TextRenderer");
var _rbtree = require("./RBTree");
var _mtextFormatParser = require("./MTextFormatParser");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var __generator = (void 0) && (void 0).__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __values = (void 0) && (void 0).__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/** Use 16-bit indices for indexed geometry. */ var INDEXED_CHUNK_SIZE = 0x10000;
/** Arc angle for tessellating point circle shape. */ var POINT_CIRCLE_TESSELLATION_ANGLE = 15 * Math.PI / 180;
var POINT_SHAPE_BLOCK_NAME = "__point_shape";
/** Flatten a block if its total vertices count in all instances is less than this value. */ var BLOCK_FLATTENING_VERTICES_THRESHOLD = 1024;
/** Number of subdivisions per spline point. */ var SPLINE_SUBDIVISION = 4;
var DxfScene = /*#__PURE__*/ function() {
    "use strict";
    function DxfScene(options) {
        _classCallCheck(this, DxfScene);
        this.options = Object.create(DxfScene.DefaultOptions);
        if (options) {
            Object.assign(this.options, options.sceneOptions);
        }
        /* Scene origin. All input coordinates are made local to this point to minimize precision
        * loss.
        */ this.origin = null;
        /* RBTree<BatchingKey, RenderBatch> */ this.batches = new _rbtree.RBTree(function(b1, b2) {
            return b1.key.Compare(b2.key);
        });
        /* Indexed by layer name, value is layer object from parsed DXF. */ this.layers = new Map();
        /* Indexed by block name, value is Block. */ this.blocks = new Map();
        this.bounds = null;
        this.pointShapeBlock = null;
        this.numBlocksFlattened = 0;
    }
    _createClass(DxfScene, [
        {
            key: "Build",
            value: /** Build the scene from the provided parsed DXF.
     * @param dxf {{}} Parsed DXF file.
     * @param fontFetchers {?Function[]} List of font fetchers. Fetcher should return promise with
     *  loaded font object (opentype.js). They are invoked only when necessary. Each glyph is being
     *  searched sequentially in each provided font.
     */ function Build(dxf, fontFetchers) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var header, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, layer, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, _step_value1, block, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, entity, block1, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, block2, blockCtx, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, entity1, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, entity2;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                header = dxf.header || {};
                                /* 0 - CCW, 1 - CW */ _this.angBase = header["$ANGBASE"] || 0;
                                /* Zero angle direction, 0 is +X */ _this.angDir = header["$ANGDIR"] || 0;
                                _this.pdMode = header["$PDMODE"] || 0;
                                _this.pdSize = header["$PDSIZE"] || 0;
                                if (dxf.tables && dxf.tables.layer) {
                                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    try {
                                        for(_iterator = Object.entries(dxf.tables.layer.layers)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                            _step_value = _slicedToArray(_step.value, 2), layer = _step_value[1];
                                            _this.layers.set(layer.name, layer);
                                        }
                                    } catch (err) {
                                        _didIteratorError = true;
                                        _iteratorError = err;
                                    } finally{
                                        try {
                                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                                _iterator.return();
                                            }
                                        } finally{
                                            if (_didIteratorError) {
                                                throw _iteratorError;
                                            }
                                        }
                                    }
                                }
                                if (dxf.blocks) {
                                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                    try {
                                        for(_iterator1 = Object.entries(dxf.blocks)[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                            _step_value1 = _slicedToArray(_step1.value, 2), block = _step_value1[1];
                                            _this.blocks.set(block.name, new Block(block));
                                        }
                                    } catch (err) {
                                        _didIteratorError1 = true;
                                        _iteratorError1 = err;
                                    } finally{
                                        try {
                                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                                _iterator1.return();
                                            }
                                        } finally{
                                            if (_didIteratorError1) {
                                                throw _iteratorError1;
                                            }
                                        }
                                    }
                                }
                                _this.textRenderer = new _textRenderer.TextRenderer(fontFetchers, _this.options.textOptions);
                                _this.hasMissingChars = false;
                                return [
                                    4,
                                    _this._FetchFonts(dxf)
                                ];
                            case 1:
                                _state.sent();
                                _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                                try {
                                    /* Scan all entities to analyze block usage statistics. */ for(_iterator2 = dxf.entities[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                        entity = _step2.value;
                                        if (entity.type === "INSERT") {
                                            block1 = _this.blocks.get(entity.name);
                                            block1 === null || block1 === void 0 ? void 0 : block1.RegisterInsert(entity);
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError2 = true;
                                    _iteratorError2 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                            _iterator2.return();
                                        }
                                    } finally{
                                        if (_didIteratorError2) {
                                            throw _iteratorError2;
                                        }
                                    }
                                }
                                _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                                try {
                                    for(_iterator3 = _this.blocks.values()[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                                        block2 = _step3.value;
                                        if (block2.data.hasOwnProperty("entities")) {
                                            blockCtx = block2.DefinitionContext();
                                            _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
                                            try {
                                                for(_iterator4 = block2.data.entities[Symbol.iterator](); !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                                                    entity1 = _step4.value;
                                                    _this._ProcessDxfEntity(entity1, blockCtx);
                                                }
                                            } catch (err) {
                                                _didIteratorError4 = true;
                                                _iteratorError4 = err;
                                            } finally{
                                                try {
                                                    if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                                                        _iterator4.return();
                                                    }
                                                } finally{
                                                    if (_didIteratorError4) {
                                                        throw _iteratorError4;
                                                    }
                                                }
                                            }
                                        }
                                        if (block2.SetFlatten()) {
                                            _this.numBlocksFlattened++;
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError3 = true;
                                    _iteratorError3 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                            _iterator3.return();
                                        }
                                    } finally{
                                        if (_didIteratorError3) {
                                            throw _iteratorError3;
                                        }
                                    }
                                }
                                console.log("".concat(_this.numBlocksFlattened, " blocks flattened"));
                                _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
                                try {
                                    for(_iterator5 = dxf.entities[Symbol.iterator](); !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true){
                                        entity2 = _step5.value;
                                        _this._ProcessDxfEntity(entity2);
                                    }
                                } catch (err) {
                                    _didIteratorError5 = true;
                                    _iteratorError5 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                                            _iterator5.return();
                                        }
                                    } finally{
                                        if (_didIteratorError5) {
                                            throw _iteratorError5;
                                        }
                                    }
                                }
                                _this.scene = _this._BuildScene();
                                delete _this.batches;
                                delete _this.layers;
                                delete _this.blocks;
                                delete _this.textRenderer;
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_FetchFonts",
            value: function _FetchFonts(dxf) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var ProcessEntity, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entity, err, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, block, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, entity1, err, err;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                ProcessEntity = function() {
                                    var _ref = _asyncToGenerator(function(entity) {
                                        var ret, parser, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, text, err;
                                        return __generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    if (!(entity.type === "TEXT")) return [
                                                        3,
                                                        2
                                                    ];
                                                    return [
                                                        4,
                                                        _this.textRenderer.FetchFonts(entity.text)
                                                    ];
                                                case 1:
                                                    ret = _state.sent();
                                                    return [
                                                        3,
                                                        12
                                                    ];
                                                case 2:
                                                    if (!(entity.type === "MTEXT")) return [
                                                        3,
                                                        11
                                                    ];
                                                    parser = new _mtextFormatParser.MTextFormatParser();
                                                    parser.Parse(entity.text);
                                                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                                    _state.label = 3;
                                                case 3:
                                                    _state.trys.push([
                                                        3,
                                                        8,
                                                        9,
                                                        10
                                                    ]);
                                                    _iterator = parser.GetText()[Symbol.iterator]();
                                                    _state.label = 4;
                                                case 4:
                                                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                                        3,
                                                        7
                                                    ];
                                                    text = _step.value;
                                                    return [
                                                        4,
                                                        _this.textRenderer.FetchFonts(text)
                                                    ];
                                                case 5:
                                                    if (!_state.sent()) {
                                                        ret = false;
                                                        return [
                                                            3,
                                                            7
                                                        ];
                                                    }
                                                    _state.label = 6;
                                                case 6:
                                                    _iteratorNormalCompletion = true;
                                                    return [
                                                        3,
                                                        4
                                                    ];
                                                case 7:
                                                    return [
                                                        3,
                                                        10
                                                    ];
                                                case 8:
                                                    err = _state.sent();
                                                    _didIteratorError = true;
                                                    _iteratorError = err;
                                                    return [
                                                        3,
                                                        10
                                                    ];
                                                case 9:
                                                    try {
                                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                                            _iterator.return();
                                                        }
                                                    } finally{
                                                        if (_didIteratorError) {
                                                            throw _iteratorError;
                                                        }
                                                    }
                                                    return [
                                                        7
                                                    ];
                                                case 10:
                                                    ret = true;
                                                    return [
                                                        3,
                                                        12
                                                    ];
                                                case 11:
                                                    throw new Error("Bad entity type");
                                                case 12:
                                                    if (!ret) {
                                                        _this.hasMissingChars = true;
                                                    }
                                                    return [
                                                        2,
                                                        ret
                                                    ];
                                            }
                                        });
                                    });
                                    return function ProcessEntity(entity) {
                                        return _ref.apply(this, arguments);
                                    };
                                }();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    8
                                ]);
                                _iterator = dxf.entities[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    5
                                ];
                                entity = _step.value;
                                if (!(entity.type === "TEXT" || entity.type === "MTEXT")) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    ProcessEntity(entity)
                                ];
                            case 3:
                                if (!_state.sent()) {
                                    /* Failing to resolve some character means that all fonts have been loaded and
                     * checked. No mean to check the rest strings. However until it is encountered,
                     * all strings should be checked, even if all fonts already loaded. This needed
                     * to properly set hasMissingChars which allows displaying some warning in a
                     * viewer.
                     */ return [
                                        2
                                    ];
                                }
                                _state.label = 4;
                            case 4:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 5:
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    8
                                ];
                            case 7:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 8:
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                _state.label = 9;
                            case 9:
                                _state.trys.push([
                                    9,
                                    20,
                                    21,
                                    22
                                ]);
                                _iterator1 = _this.blocks.values()[Symbol.iterator]();
                                _state.label = 10;
                            case 10:
                                if (!!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done)) return [
                                    3,
                                    19
                                ];
                                block = _step1.value;
                                if (!block.data.hasOwnProperty("entities")) return [
                                    3,
                                    18
                                ];
                                _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                                _state.label = 11;
                            case 11:
                                _state.trys.push([
                                    11,
                                    16,
                                    17,
                                    18
                                ]);
                                _iterator2 = block.data.entities[Symbol.iterator]();
                                _state.label = 12;
                            case 12:
                                if (!!(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done)) return [
                                    3,
                                    15
                                ];
                                entity1 = _step2.value;
                                if (!(entity1.type === "TEXT" || entity1.type === "MTEXT")) return [
                                    3,
                                    14
                                ];
                                return [
                                    4,
                                    ProcessEntity(entity1)
                                ];
                            case 13:
                                if (!_state.sent()) {
                                    return [
                                        2
                                    ];
                                }
                                _state.label = 14;
                            case 14:
                                _iteratorNormalCompletion2 = true;
                                return [
                                    3,
                                    12
                                ];
                            case 15:
                                return [
                                    3,
                                    18
                                ];
                            case 16:
                                err = _state.sent();
                                _didIteratorError2 = true;
                                _iteratorError2 = err;
                                return [
                                    3,
                                    18
                                ];
                            case 17:
                                try {
                                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                        _iterator2.return();
                                    }
                                } finally{
                                    if (_didIteratorError2) {
                                        throw _iteratorError2;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 18:
                                _iteratorNormalCompletion1 = true;
                                return [
                                    3,
                                    10
                                ];
                            case 19:
                                return [
                                    3,
                                    22
                                ];
                            case 20:
                                err = _state.sent();
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                                return [
                                    3,
                                    22
                                ];
                            case 21:
                                try {
                                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                        _iterator1.return();
                                    }
                                } finally{
                                    if (_didIteratorError1) {
                                        throw _iteratorError1;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 22:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_ProcessDxfEntity",
            value: function _ProcessDxfEntity(entity) {
                var blockCtx = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var renderEntities;
                switch(entity.type){
                    case "LINE":
                        renderEntities = this._DecomposeLine(entity, blockCtx);
                        break;
                    case "POLYLINE":
                    case "LWPOLYLINE":
                        renderEntities = this._DecomposePolyline(entity, blockCtx);
                        break;
                    case "ARC":
                        renderEntities = this._DecomposeArc(entity, blockCtx);
                        break;
                    case "CIRCLE":
                        renderEntities = this._DecomposeCircle(entity, blockCtx);
                        break;
                    case "ELLIPSE":
                        renderEntities = this._DecomposeEllipse(entity, blockCtx);
                        break;
                    case "POINT":
                        renderEntities = this._DecomposePoint(entity, blockCtx);
                        break;
                    case "SPLINE":
                        renderEntities = this._DecomposeSpline(entity, blockCtx);
                        break;
                    case "INSERT":
                        /* Works with rendering batches without intermediate entities. */ this._ProcessInsert(entity, blockCtx);
                        return;
                    case "TEXT":
                        renderEntities = this._DecomposeText(entity, blockCtx);
                        break;
                    case "MTEXT":
                        renderEntities = this._DecomposeMText(entity, blockCtx);
                        break;
                    case "3DFACE":
                        renderEntities = this._Decompose3DFace(entity, blockCtx);
                        break;
                    case "SOLID":
                        renderEntities = this._DecomposeSolid(entity, blockCtx);
                        break;
                    default:
                        console.log("Unhandled entity type: " + entity.type);
                        return;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = renderEntities[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var renderEntity = _step.value;
                        this._ProcessEntity(renderEntity, blockCtx);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            /**
     * @param entity {Entity}
     * @param blockCtx {?BlockContext}
     */ key: "_ProcessEntity",
            value: function _ProcessEntity(entity) {
                var blockCtx = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                switch(entity.type){
                    case Entity.Type.POINTS:
                        this._ProcessPoints(entity, blockCtx);
                        break;
                    case Entity.Type.LINE_SEGMENTS:
                        this._ProcessLineSegments(entity, blockCtx);
                        break;
                    case Entity.Type.POLYLINE:
                        this._ProcessPolyline(entity, blockCtx);
                        break;
                    case Entity.Type.TRIANGLES:
                        this._ProcessTriangles(entity, blockCtx);
                        break;
                    default:
                        throw new Error("Unhandled entity type: " + entity.type);
                }
            }
        },
        {
            /**
     * @param entity
     * @param vertex
     * @param blockCtx {?BlockContext}
     * @return {number}
     */ key: "_GetLineType",
            value: function _GetLineType(entity) {
                var vertex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, blockCtx = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                //XXX lookup
                return 0;
            }
        },
        {
            /** Check if start/end with are not specified. */ key: "_IsPlainLine",
            value: function _IsPlainLine(entity) {
                return !Boolean(entity.startWidth || entity.endWidth);
            }
        },
        {
            key: "_DecomposeLine",
            value: function _DecomposeLine(entity, blockCtx) {
                var layer, color;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            /* start/end width, bulge - seems cannot be present, at least with current parser */ if (entity.vertices.length !== 2) {
                                return [
                                    2
                                ];
                            }
                            layer = this._GetEntityLayer(entity, blockCtx);
                            color = this._GetEntityColor(entity, blockCtx);
                            return [
                                4,
                                new Entity({
                                    type: Entity.Type.LINE_SEGMENTS,
                                    vertices: entity.vertices,
                                    layer: layer,
                                    color: color,
                                    lineType: this._GetLineType(entity, entity.vertices[0])
                                })
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            /** Generate vertices for bulged line segment.
     *
     * @param vertices Generated vertices pushed here.
     * @param startVtx Starting vertex. Assuming it is already present in the vertices array.
     * @param endVtx Ending vertex.
     * @param bulge Bulge value (see DXF specification).
     */ key: "_GenerateBulgeVertices",
            value: function _GenerateBulgeVertices(vertices, startVtx, endVtx, bulge) {
                var a = 4 * Math.atan(bulge);
                var aAbs = Math.abs(a);
                if (aAbs < this.options.arcTessellationAngle) {
                    vertices.push(endVtx);
                    return;
                }
                var ha = a / 2;
                var sha = Math.sin(ha);
                var cha = Math.cos(ha);
                var d = {
                    x: endVtx.x - startVtx.x,
                    y: endVtx.y - startVtx.y
                };
                var dSq = d.x * d.x + d.y * d.y;
                if (dSq < Number.MIN_VALUE * 2) {
                    /* No vertex is pushed since end vertex is duplicate of start vertex. */ return;
                }
                var D = Math.sqrt(dSq);
                var R = D / 2 / sha;
                d.x /= D;
                d.y /= D;
                var center = {
                    x: (d.x * sha - d.y * cha) * R + startVtx.x,
                    y: (d.x * cha + d.y * sha) * R + startVtx.y
                };
                var numSegments = Math.floor(aAbs / this.options.arcTessellationAngle);
                if (numSegments < this.options.minArcTessellationSubdivisions) {
                    numSegments = this.options.minArcTessellationSubdivisions;
                }
                if (numSegments > 1) {
                    var startAngle = Math.atan2(startVtx.y - center.y, startVtx.x - center.x);
                    var step = a / numSegments;
                    if (a < 0) {
                        R = -R;
                    }
                    for(var i = 1; i < numSegments; i++){
                        var a1 = startAngle + i * step;
                        var v = {
                            x: center.x + R * Math.cos(a1),
                            y: center.y + R * Math.sin(a1)
                        };
                        vertices.push(v);
                    }
                }
                vertices.push(endVtx);
            }
        },
        {
            /** Generate vertices for arc segment.
     *
     * @param vertices Generated vertices pushed here.
     * @param center {{x, y}} Center vector.
     * @param radius {number}
     * @param startAngle {?number} Start angle. Zero if not specified. Arc is drawn in CCW direction
     *  from start angle towards end angle.
     * @param endAngle {?number} Optional end angle. Full circle is drawn if not specified.
     * @param tessellationAngle {?number} Arc tessellation angle, default value is taken from scene
     *  options.
     * @param yRadius {?number} Specify to get ellipse arc. `radius` parameter used as X radius.
     * @param transform {?Matrix3} Optional transform matrix for the arc. Applied as last operation.
     */ key: "_GenerateArcVertices",
            value: function _GenerateArcVertices(param) {
                var vertices = param.vertices, center = param.center, radius = param.radius, _param_startAngle = param.startAngle, startAngle = _param_startAngle === void 0 ? null : _param_startAngle, _param_endAngle = param.endAngle, endAngle = _param_endAngle === void 0 ? null : _param_endAngle, _param_tessellationAngle = param.tessellationAngle, tessellationAngle = _param_tessellationAngle === void 0 ? null : _param_tessellationAngle, _param_yRadius = param.yRadius, yRadius = _param_yRadius === void 0 ? null : _param_yRadius, _param_transform = param.transform, transform = _param_transform === void 0 ? null : _param_transform;
                if (!center || !radius) {
                    return;
                }
                if (!tessellationAngle) {
                    tessellationAngle = this.options.arcTessellationAngle;
                }
                if (yRadius === null) {
                    yRadius = radius;
                }
                /* Normalize angles - make them starting from +X in CCW direction. End angle should be
         * greater than start angle.
         */ if (startAngle === undefined || startAngle === null) {
                    startAngle = 0;
                } else {
                    startAngle += this.angBase;
                }
                var isClosed = false;
                if (endAngle === undefined || endAngle === null) {
                    endAngle = startAngle + 2 * Math.PI;
                    isClosed = true;
                } else {
                    endAngle += this.angBase;
                }
                if (this.angDir) {
                    var tmp = startAngle;
                    startAngle = endAngle;
                    endAngle = tmp;
                }
                while(endAngle <= startAngle){
                    endAngle += Math.PI * 2;
                }
                var arcAngle = endAngle - startAngle;
                var numSegments = Math.floor(arcAngle / tessellationAngle);
                if (numSegments === 0) {
                    numSegments = 1;
                }
                var step = arcAngle / numSegments;
                for(var i = 0; i <= numSegments; i++){
                    if (i === numSegments && isClosed) {
                        break;
                    }
                    var a = startAngle + i * step;
                    var v = new _three.Vector2(radius * Math.cos(a), yRadius * Math.sin(a));
                    v.add(center);
                    if (transform) {
                        v.applyMatrix3(transform);
                    }
                    vertices.push(v);
                }
            }
        },
        {
            key: "_DecomposeArc",
            value: function _DecomposeArc(entity, blockCtx) {
                var color, layer, lineType, vertices;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            color = this._GetEntityColor(entity, blockCtx);
                            layer = this._GetEntityLayer(entity, blockCtx);
                            lineType = this._GetLineType(entity, null, blockCtx);
                            vertices = [];
                            this._GenerateArcVertices({
                                vertices: vertices,
                                center: entity.center,
                                radius: entity.radius,
                                startAngle: entity.startAngle,
                                endAngle: entity.endAngle,
                                transform: this._GetEntityExtrusionTransform(entity)
                            });
                            return [
                                4,
                                new Entity({
                                    type: Entity.Type.POLYLINE,
                                    vertices: vertices,
                                    layer: layer,
                                    color: color,
                                    lineType: lineType,
                                    shape: entity.endAngle === undefined
                                })
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            key: "_DecomposeCircle",
            value: function _DecomposeCircle(entity, blockCtx) {
                var color, layer, lineType, vertices;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            color = this._GetEntityColor(entity, blockCtx);
                            layer = this._GetEntityLayer(entity, blockCtx);
                            lineType = this._GetLineType(entity, null, blockCtx);
                            vertices = [];
                            this._GenerateArcVertices({
                                vertices: vertices,
                                center: entity.center,
                                radius: entity.radius,
                                transform: this._GetEntityExtrusionTransform(entity)
                            });
                            return [
                                4,
                                new Entity({
                                    type: Entity.Type.POLYLINE,
                                    vertices: vertices,
                                    layer: layer,
                                    color: color,
                                    lineType: lineType,
                                    shape: true
                                })
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            key: "_DecomposeEllipse",
            value: function _DecomposeEllipse(entity, blockCtx) {
                var color, layer, lineType, vertices, xR, yR, rotation, cos, sin, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, v, tx, ty;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            color = this._GetEntityColor(entity, blockCtx);
                            layer = this._GetEntityLayer(entity, blockCtx);
                            lineType = this._GetLineType(entity, null, blockCtx);
                            vertices = [];
                            xR = Math.sqrt(entity.majorAxisEndPoint.x * entity.majorAxisEndPoint.x + entity.majorAxisEndPoint.y * entity.majorAxisEndPoint.y);
                            yR = xR * entity.axisRatio;
                            rotation = Math.atan2(entity.majorAxisEndPoint.y, entity.majorAxisEndPoint.x);
                            this._GenerateArcVertices({
                                vertices: vertices,
                                center: entity.center,
                                radius: xR,
                                startAngle: entity.startAngle,
                                endAngle: entity.endAngle,
                                yRadius: yR,
                                transform: this._GetEntityExtrusionTransform(entity)
                            });
                            if (rotation !== 0) {
                                cos = Math.cos(rotation);
                                sin = Math.sin(rotation);
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = vertices[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        v = _step.value;
                                        tx = v.x - entity.center.x;
                                        ty = v.y - entity.center.y;
                                        /* Rotate the vertex around the ellipse center point. */ v.x = tx * cos - ty * sin + entity.center.x;
                                        v.y = tx * sin + ty * cos + entity.center.y;
                                    }
                                } catch (err) {
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    } finally{
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                }
                            }
                            return [
                                4,
                                new Entity({
                                    type: Entity.Type.POLYLINE,
                                    vertices: vertices,
                                    layer: layer,
                                    color: color,
                                    lineType: lineType,
                                    shape: entity.endAngle === undefined
                                })
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            key: "_DecomposePoint",
            value: function _DecomposePoint(entity, blockCtx) {
                var color, layer, markType, isShaped, key, batch, vertices;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (this.pdMode === PdMode.NONE) {
                                /* Points not displayed. */ return [
                                    2
                                ];
                            }
                            if (this.pdMode !== PdMode.DOT && this.pdSize <= 0) {
                                /* Currently not supported. */ return [
                                    2
                                ];
                            }
                            color = this._GetEntityColor(entity, blockCtx);
                            layer = this._GetEntityLayer(entity, blockCtx);
                            markType = this.pdMode & PdMode.MARK_MASK;
                            isShaped = (this.pdMode & PdMode.SHAPE_MASK) !== 0;
                            if (isShaped) {
                                key = new _batchingKey.BatchingKey(layer, POINT_SHAPE_BLOCK_NAME, _batchingKey.BatchingKey.GeometryType.POINT_INSTANCE, color, 0);
                                batch = this._GetBatch(key);
                                batch.PushVertex(this._TransformVertex(entity.position));
                                this._CreatePointShapeBlock();
                                return [
                                    2
                                ];
                            }
                            if (!(markType === PdMode.DOT)) return [
                                3,
                                2
                            ];
                            return [
                                4,
                                new Entity({
                                    type: Entity.Type.POINTS,
                                    vertices: [
                                        entity.position
                                    ],
                                    layer: layer,
                                    color: color,
                                    lineType: null
                                })
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                        case 2:
                            vertices = [];
                            this._CreatePointMarker(vertices, markType, entity.position);
                            return [
                                4,
                                new Entity({
                                    type: Entity.Type.LINE_SEGMENTS,
                                    vertices: vertices,
                                    layer: layer,
                                    color: color,
                                    lineType: null
                                })
                            ];
                        case 3:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            /** Create line segments for point marker.
     * @param vertices
     * @param markType
     * @param position {?{x,y}} point center position, default is zero.
     */ key: "_CreatePointMarker",
            value: function _CreatePointMarker(vertices, markType) {
                var position = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var PushVertex = function PushVertex(offsetX, offsetY) {
                    var _position_x, _position_y;
                    vertices.push({
                        x: ((_position_x = position === null || position === void 0 ? void 0 : position.x) !== null && _position_x !== void 0 ? _position_x : 0) + offsetX * _this.pdSize * 0.5,
                        y: ((_position_y = position === null || position === void 0 ? void 0 : position.y) !== null && _position_y !== void 0 ? _position_y : 0) + offsetY * _this.pdSize * 0.5
                    });
                };
                var _this = this;
                switch(markType){
                    case PdMode.PLUS:
                        PushVertex(0, 1.5);
                        PushVertex(0, -1.5);
                        PushVertex(-1.5, 0);
                        PushVertex(1.5, 0);
                        break;
                    case PdMode.CROSS:
                        PushVertex(-1, 1);
                        PushVertex(1, -1);
                        PushVertex(1, 1);
                        PushVertex(-1, -1);
                        break;
                    case PdMode.TICK:
                        PushVertex(0, 1);
                        PushVertex(0, 0);
                        break;
                    default:
                        console.warn("Unsupported point display type: " + markType);
                }
            }
        },
        {
            /** Create point shape block if not yet done. */ key: "_CreatePointShapeBlock",
            value: function _CreatePointShapeBlock() {
                if (this.pointShapeBlock) {
                    return;
                }
                /* This mimics DXF block entity. */ this.pointShapeBlock = new Block({
                    name: POINT_SHAPE_BLOCK_NAME,
                    position: {
                        x: 0,
                        y: 0
                    }
                });
                /* Fix block origin at zero. */ this.pointShapeBlock.offset = new _three.Vector2(0, 0);
                var blockCtx = this.pointShapeBlock.DefinitionContext();
                var markType = this.pdMode & PdMode.MARK_MASK;
                if (markType !== PdMode.DOT && markType !== PdMode.NONE) {
                    var vertices = [];
                    this._CreatePointMarker(vertices, markType);
                    var entity = new Entity({
                        type: Entity.Type.LINE_SEGMENTS,
                        vertices: vertices,
                        color: ColorCode.BY_BLOCK
                    });
                    this._ProcessEntity(entity, blockCtx);
                }
                if (this.pdMode & PdMode.SQUARE) {
                    var r = this.pdSize * 0.5;
                    var vertices1 = [
                        {
                            x: -r,
                            y: r
                        },
                        {
                            x: r,
                            y: r
                        },
                        {
                            x: r,
                            y: -r
                        },
                        {
                            x: -r,
                            y: -r
                        }
                    ];
                    var entity1 = new Entity({
                        type: Entity.Type.POLYLINE,
                        vertices: vertices1,
                        color: ColorCode.BY_BLOCK,
                        shape: true
                    });
                    this._ProcessEntity(entity1, blockCtx);
                }
                if (this.pdMode & PdMode.CIRCLE) {
                    var vertices2 = [];
                    this._GenerateArcVertices({
                        vertices: vertices2,
                        center: {
                            x: 0,
                            y: 0
                        },
                        radius: this.pdSize * 0.5,
                        tessellationAngle: POINT_CIRCLE_TESSELLATION_ANGLE
                    });
                    var entity2 = new Entity({
                        type: Entity.Type.POLYLINE,
                        vertices: vertices2,
                        color: ColorCode.BY_BLOCK,
                        shape: true
                    });
                    this._ProcessEntity(entity2, blockCtx);
                }
            }
        },
        {
            key: "_Decompose3DFace",
            value: function _Decompose3DFace(entity, blockCtx) {
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                5,
                                __values(this._DecomposeFace(entity, entity.vertices, blockCtx, this.options.wireframeMesh))
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            key: "_DecomposeSolid",
            value: function _DecomposeSolid(entity, blockCtx) {
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                5,
                                __values(this._DecomposeFace(entity, entity.points, blockCtx, false, this._GetEntityExtrusionTransform(entity)))
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            key: "_DecomposeFace",
            value: function _DecomposeFace(entity, vertices, blockCtx, wireframe) {
                var transform, IsValidTriangle, layer, color, v0, v1, v2, v3, hasFirstTriangle, hasSecondTriangle, _vertices, _vertices1, indices;
                var _arguments = arguments;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            transform = _arguments.length > 4 && _arguments[4] !== void 0 ? _arguments[4] : null;
                            IsValidTriangle = function IsValidTriangle(v1, v2, v3) {
                                var e1 = new _three.Vector2().subVectors(v2, v1);
                                var e2 = new _three.Vector2().subVectors(v3, v1);
                                var area = Math.abs(e1.cross(e2));
                                return area > Number.EPSILON;
                            };
                            layer = this._GetEntityLayer(entity, blockCtx);
                            color = this._GetEntityColor(entity, blockCtx);
                            v0 = new _three.Vector2(vertices[0].x, vertices[0].y);
                            v1 = new _three.Vector2(vertices[1].x, vertices[1].y);
                            v2 = new _three.Vector2(vertices[2].x, vertices[2].y);
                            v3 = null;
                            hasFirstTriangle = IsValidTriangle(v0, v1, v2);
                            hasSecondTriangle = false;
                            if (vertices.length > 3) {
                                /* Fourth vertex may be the same as one of the previous vertices, so additional triangle
             * for degeneration.
             */ v3 = new _three.Vector2(vertices[3].x, vertices[3].y);
                                hasSecondTriangle = IsValidTriangle(v1, v3, v2);
                                if (transform) {
                                    v3.applyMatrix3(transform);
                                }
                            }
                            if (transform) {
                                v0.applyMatrix3(transform);
                                v1.applyMatrix3(transform);
                                v2.applyMatrix3(transform);
                            }
                            if (!hasFirstTriangle && !hasSecondTriangle) {
                                return [
                                    2
                                ];
                            }
                            if (!wireframe) return [
                                3,
                                2
                            ];
                            _vertices = [];
                            if (hasFirstTriangle && !hasSecondTriangle) {
                                _vertices.push(v0, v1, v2);
                            }
                            if (!hasFirstTriangle && hasSecondTriangle) {
                                _vertices.push(v1, v3, v2);
                            } else {
                                _vertices.push(v0, v1, v3, v2);
                            }
                            return [
                                4,
                                new Entity({
                                    type: Entity.Type.POLYLINE,
                                    vertices: _vertices,
                                    layer: layer,
                                    color: color,
                                    shape: true
                                })
                            ];
                        case 1:
                            _state.sent();
                            return [
                                3,
                                4
                            ];
                        case 2:
                            _vertices1 = [];
                            indices = [];
                            if (hasFirstTriangle) {
                                _vertices1.push(v0, v1, v2);
                                indices.push(0, 1, 2);
                            }
                            if (hasSecondTriangle) {
                                if (!hasFirstTriangle) {
                                    _vertices1.push(v1, v2);
                                    indices.push(0, 1, 2);
                                } else {
                                    indices.push(1, 2, 3);
                                }
                                _vertices1.push(v3);
                            }
                            return [
                                4,
                                new Entity({
                                    type: Entity.Type.TRIANGLES,
                                    vertices: _vertices1,
                                    indices: indices,
                                    layer: layer,
                                    color: color
                                })
                            ];
                        case 3:
                            _state.sent();
                            _state.label = 4;
                        case 4:
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            key: "_DecomposeText",
            value: function _DecomposeText(entity, blockCtx) {
                var layer, color;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!this.textRenderer.canRender) {
                                return [
                                    2
                                ];
                            }
                            layer = this._GetEntityLayer(entity, blockCtx);
                            color = this._GetEntityColor(entity, blockCtx);
                            return [
                                5,
                                __values(this.textRenderer.Render({
                                    text: entity.text,
                                    fontSize: entity.textHeight,
                                    startPos: entity.startPoint,
                                    endPos: entity.endPoint,
                                    rotation: entity.rotation,
                                    hAlign: entity.halign,
                                    vAlign: entity.valign,
                                    widthFactor: entity.xScale,
                                    color: color,
                                    layer: layer
                                }))
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            key: "_DecomposeMText",
            value: function _DecomposeMText(entity, blockCtx) {
                var layer, color, parser;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!this.textRenderer.canRender) {
                                return [
                                    2
                                ];
                            }
                            layer = this._GetEntityLayer(entity, blockCtx);
                            color = this._GetEntityColor(entity, blockCtx);
                            parser = new _mtextFormatParser.MTextFormatParser();
                            parser.Parse(entity.text);
                            return [
                                5,
                                __values(this.textRenderer.RenderMText({
                                    formattedText: parser.GetContent(),
                                    fontSize: entity.height,
                                    position: entity.position,
                                    rotation: entity.rotation,
                                    direction: entity.direction,
                                    attachment: entity.attachmentPoint,
                                    lineSpacing: entity.lineSpacing,
                                    width: entity.width,
                                    color: color,
                                    layer: layer
                                }))
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            /**
     * Updates batches directly.
     * @param entity
     * @param blockCtx {?BlockContext} Nested block insert when non-null.
     */ key: "_ProcessInsert",
            value: function _ProcessInsert(entity) {
                var blockCtx = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (blockCtx) {
                    //XXX handle indirect recursion
                    if (blockCtx.name === entity.name) {
                        console.warn("Recursive block reference: " + blockCtx.name);
                        return;
                    }
                    /* Flatten nested blocks definition. */ var block = this.blocks.get(entity.name);
                    if (!block) {
                        console.warn("Unresolved nested block reference: " + entity.name);
                    }
                    var nestedCtx = blockCtx.NestedBlockContext(block, entity);
                    if (block.data.entities) {
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = block.data.entities[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var _$entity = _step.value;
                                this._ProcessDxfEntity(_$entity, nestedCtx);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                    return;
                }
                var block1 = this.blocks.get(entity.name);
                if (block1 === null) {
                    console.warn("Unresolved block reference in INSERT: " + entity.name);
                    return;
                }
                if (!block1.HasGeometry()) {
                    return;
                }
                var layer = this._GetEntityLayer(entity, null);
                var color = this._GetEntityColor(entity, null);
                var lineType = this._GetLineType(entity, null, null);
                //XXX apply extrusion direction
                var transform = block1.InstantiationContext().GetInsertionTransform(entity);
                /* Update bounding box and origin with transformed block bounds corner points. */ var bounds = block1.bounds;
                this._UpdateBounds(new _three.Vector2(bounds.minX, bounds.minY).applyMatrix3(transform));
                this._UpdateBounds(new _three.Vector2(bounds.maxX, bounds.maxY).applyMatrix3(transform));
                this._UpdateBounds(new _three.Vector2(bounds.minX, bounds.maxY).applyMatrix3(transform));
                this._UpdateBounds(new _three.Vector2(bounds.maxX, bounds.minY).applyMatrix3(transform));
                transform.translate(-this.origin.x, -this.origin.y);
                //XXX grid instancing not supported yet
                if (block1.flatten) {
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = block1.batches[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var batch = _step1.value;
                            this._FlattenBatch(batch, layer, color, lineType, transform);
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                } else {
                    var key = new _batchingKey.BatchingKey(layer, entity.name, _batchingKey.BatchingKey.GeometryType.BLOCK_INSTANCE, color, lineType);
                    var batch1 = this._GetBatch(key);
                    batch1.PushInstanceTransform(transform);
                }
            }
        },
        {
            /** Flatten block definition batch. It is merged into suitable instant rendering batch. */ key: "_FlattenBatch",
            value: function _FlattenBatch(blockBatch, layerName, blockColor, blockLineType, transform) {
                var layer = this.layers.get(layerName);
                var color, lineType = 0;
                if (blockBatch.key.color === ColorCode.BY_BLOCK) {
                    color = blockColor;
                } else if (blockBatch.key.color === ColorCode.BY_LAYER) {
                    var _layer_color;
                    color = (_layer_color = layer === null || layer === void 0 ? void 0 : layer.color) !== null && _layer_color !== void 0 ? _layer_color : 0;
                } else {
                    color = blockBatch.key.color;
                }
                //XXX line type
                var key = new _batchingKey.BatchingKey(layerName, null, blockBatch.key.geometryType, color, lineType);
                var batch = this._GetBatch(key);
                batch.Merge(blockBatch, transform);
            }
        },
        {
            key: "_GenerateShapedPolyline",
            value: /**
     * Generate entities for shaped polyline (e.g. line resulting in mesh). All segments are shaped
     * (have start/end width). Segments may be bulge.
     * @param vertices
     * @param layer
     * @param color
     * @param lineType
     * @param shape {Boolean} True if closed polyline.
     * @return {Generator<Entity>}
     */ function _GenerateShapedPolyline(vertices, layer, color, lineType, shape) {
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            //XXX
                            return [
                                4,
                                new Entity({
                                    type: Entity.Type.POLYLINE,
                                    vertices: vertices,
                                    layer: layer,
                                    color: color,
                                    lineType: lineType,
                                    shape: shape
                                })
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            /** Mirror entity vertices if necessary in case of extrusionDirection with negative Z specified.
     *
     * @param entity Entity to check.
     * @param vertices {?{x,y}[]} Vertices array to use instead of entity vertices attribute.
     * @return {{x,y}[]} Vertices array with mirrored X if necessary. All attributes preserved.
     */ key: "_MirrorEntityVertices",
            value: function _MirrorEntityVertices(entity) {
                var vertices = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (!entity.extrusionDirection || entity.extrusionDirection.z >= 0) {
                    return vertices !== null && vertices !== void 0 ? vertices : entity.vertices;
                }
                if (!vertices || vertices === entity.vertices) {
                    vertices = entity.vertices.slice();
                }
                var n = vertices.length;
                for(var i = 0; i < n; i++){
                    var v = vertices[i];
                    var _v = {
                        x: -v.x
                    };
                    for(var propName in v){
                        if (!v.hasOwnProperty(propName)) {
                            continue;
                        }
                        if (propName !== "x") {
                            _v[propName] = v[propName];
                        }
                    }
                    vertices[i] = _v;
                }
                return vertices;
            }
        },
        {
            key: "_DecomposePolyline",
            value: function _DecomposePolyline(entity) {
                var blockCtx, CommitSegment, entityVertices, verticesCount, color, layer, _this, startIdx, curPlainLine, curLineType, curVertices, vIdx, prevVtx, vtx, isPlainLine, lineType;
                var _arguments = arguments;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            blockCtx = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : null;
                            CommitSegment = function CommitSegment(endIdx) {
                                var isClosed, vertices;
                                return __generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            if (endIdx === startIdx) {
                                                return [
                                                    2
                                                ];
                                            }
                                            isClosed = false;
                                            vertices = curVertices;
                                            if (endIdx === verticesCount && startIdx === 0) {
                                                isClosed = true;
                                                if (vertices === null) {
                                                    vertices = entityVertices;
                                                }
                                            } else if (endIdx === verticesCount - 1 && startIdx === 0) {
                                                if (vertices === null) {
                                                    vertices = entityVertices;
                                                }
                                            } else if (endIdx === verticesCount) {
                                                if (vertices === null) {
                                                    vertices = entityVertices.slice(startIdx, endIdx);
                                                    vertices.push(entityVertices[0]);
                                                }
                                            } else {
                                                if (vertices === null) {
                                                    vertices = entityVertices.slice(startIdx, endIdx + 1);
                                                }
                                            }
                                            if (!curPlainLine) return [
                                                3,
                                                2
                                            ];
                                            return [
                                                4,
                                                new Entity({
                                                    type: Entity.Type.POLYLINE,
                                                    vertices: vertices,
                                                    layer: layer,
                                                    color: color,
                                                    lineType: curLineType,
                                                    shape: isClosed
                                                })
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                3,
                                                4
                                            ];
                                        case 2:
                                            return [
                                                5,
                                                __values(_this._GenerateShapedPolyline(vertices, layer, color, curLineType, isClosed))
                                            ];
                                        case 3:
                                            _state.sent();
                                            _state.label = 4;
                                        case 4:
                                            startIdx = endIdx;
                                            if (endIdx !== verticesCount) {
                                                curPlainLine = _this._IsPlainLine(entityVertices[endIdx]);
                                                curLineType = _this._GetLineType(entity, entityVertices[endIdx]);
                                            }
                                            curVertices = null;
                                            return [
                                                2
                                            ];
                                    }
                                });
                            };
                            if (entity.includesCurveFitVertices || entity.includesSplineFitVertices) {
                                entityVertices = entity.vertices.filter(function(v) {
                                    return v.splineVertex || v.curveFittingVertex;
                                });
                                verticesCount = entityVertices.length;
                            } else {
                                entityVertices = entity.vertices;
                                verticesCount = entity.vertices.length;
                            }
                            if (verticesCount < 2) {
                                return [
                                    2
                                ];
                            }
                            entityVertices = this._MirrorEntityVertices(entity, entityVertices);
                            color = this._GetEntityColor(entity, blockCtx);
                            layer = this._GetEntityLayer(entity, blockCtx);
                            _this = this;
                            startIdx = 0;
                            curPlainLine = this._IsPlainLine(entityVertices[0]);
                            curLineType = this._GetLineType(entity, entityVertices[0], blockCtx);
                            curVertices = null;
                            vIdx = 1;
                            _state.label = 1;
                        case 1:
                            if (!(vIdx <= verticesCount)) return [
                                3,
                                10
                            ];
                            prevVtx = entityVertices[vIdx - 1];
                            vtx = void 0;
                            if (!(vIdx === verticesCount)) return [
                                3,
                                4
                            ];
                            if (!!entity.shape) return [
                                3,
                                3
                            ];
                            return [
                                5,
                                __values(CommitSegment(vIdx - 1))
                            ];
                        case 2:
                            _state.sent();
                            return [
                                3,
                                10
                            ];
                        case 3:
                            vtx = entityVertices[0];
                            return [
                                3,
                                5
                            ];
                        case 4:
                            vtx = entityVertices[vIdx];
                            _state.label = 5;
                        case 5:
                            if (Boolean(prevVtx.bulge) && curPlainLine) {
                                if (curVertices === null) {
                                    curVertices = entityVertices.slice(startIdx, vIdx);
                                }
                                this._GenerateBulgeVertices(curVertices, prevVtx, vtx, prevVtx.bulge);
                            } else if (curVertices !== null) {
                                curVertices.push(vtx);
                            }
                            if (!(vIdx === verticesCount)) return [
                                3,
                                7
                            ];
                            return [
                                5,
                                __values(CommitSegment(vIdx))
                            ];
                        case 6:
                            _state.sent();
                            return [
                                3,
                                10
                            ];
                        case 7:
                            isPlainLine = this._IsPlainLine(vtx);
                            lineType = this._GetLineType(entity, vtx);
                            if (!(isPlainLine !== curPlainLine || /* Line type is accounted for plain lines only. */ curPlainLine && lineType !== curLineType)) return [
                                3,
                                9
                            ];
                            return [
                                5,
                                __values(CommitSegment(vIdx))
                            ];
                        case 8:
                            _state.sent();
                            _state.label = 9;
                        case 9:
                            vIdx++;
                            return [
                                3,
                                1
                            ];
                        case 10:
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            key: "_DecomposeSpline",
            value: function _DecomposeSpline(entity) {
                var blockCtx, color, layer, lineType, controlPoints, vertices, subdivisions, step, i, pt;
                var _arguments = arguments;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            blockCtx = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : null;
                            color = this._GetEntityColor(entity, blockCtx);
                            layer = this._GetEntityLayer(entity, blockCtx);
                            lineType = this._GetLineType(entity, null, blockCtx);
                            controlPoints = entity.controlPoints.map(function(p) {
                                return [
                                    p.x,
                                    p.y
                                ];
                            });
                            vertices = [];
                            subdivisions = controlPoints.length * SPLINE_SUBDIVISION;
                            step = 1 / subdivisions;
                            for(i = 0; i <= subdivisions; i++){
                                pt = this._InterpolateSpline(i * step, entity.degreeOfSplineCurve, controlPoints, entity.knotValues);
                                vertices.push({
                                    x: pt[0],
                                    y: pt[1]
                                });
                            }
                            //XXX extrusionDirection (normalVector) transform?
                            return [
                                4,
                                new Entity({
                                    type: Entity.Type.POLYLINE,
                                    vertices: vertices,
                                    layer: layer,
                                    color: color,
                                    lineType: lineType
                                })
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            /** Get a point on a B-spline.
     * https://github.com/thibauts/b-spline
     * @param t {number} Point position on spline, [0..1].
     * @param degree {number} B-spline degree.
     * @param points {number[][]} Control points. Each point should have the same dimension which
     *  defines dimension of the result.
     * @param knots {?number[]} Knot vector. Should have size `points.length + degree + 1`. Default
     *  is uniform spline.
     * @param weights {?number} Optional weights vector.
     * @return {number[]} Resulting point on the specified position.
     */ key: "_InterpolateSpline",
            value: function _InterpolateSpline(t, degree, points) {
                var knots = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, weights = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
                var i, j, s, l // function-scoped iteration variables
                ;
                var n = points.length // points count
                ;
                var d = points[0].length // point dimensionality
                ;
                if (degree < 1) {
                    throw new Error("Degree must be at least 1 (linear)");
                }
                if (degree > n - 1) {
                    throw new Error("Degree must be less than or equal to point count - 1");
                }
                if (!weights) {
                    // build weight vector of length [n]
                    weights = [];
                    for(i = 0; i < n; i++){
                        weights[i] = 1;
                    }
                }
                if (!knots) {
                    // build knot vector of length [n + degree + 1]
                    knots = [];
                    for(i = 0; i < n + degree + 1; i++){
                        knots[i] = i;
                    }
                } else {
                    if (knots.length !== n + degree + 1) {
                        throw new Error("Bad knot vector length");
                    }
                }
                var domain = [
                    degree,
                    knots.length - 1 - degree
                ];
                // remap t to the domain where the spline is defined
                var low = knots[domain[0]];
                var high = knots[domain[1]];
                t = t * (high - low) + low;
                if (t < low) {
                    t = low;
                } else if (t > high) {
                    t = high;
                }
                // find s (the spline segment) for the [t] value provided
                for(s = domain[0]; s < domain[1]; s++){
                    if (t >= knots[s] && t <= knots[s + 1]) {
                        break;
                    }
                }
                // convert points to homogeneous coordinates
                var v = [];
                for(i = 0; i < n; i++){
                    v[i] = [];
                    for(j = 0; j < d; j++){
                        v[i][j] = points[i][j] * weights[i];
                    }
                    v[i][d] = weights[i];
                }
                // l (level) goes from 1 to the curve degree + 1
                var alpha;
                for(l = 1; l <= degree + 1; l++){
                    // build level l of the pyramid
                    for(i = s; i > s - degree - 1 + l; i--){
                        alpha = (t - knots[i]) / (knots[i + degree + 1 - l] - knots[i]);
                        // interpolate each component
                        for(j = 0; j < d + 1; j++){
                            v[i][j] = (1 - alpha) * v[i - 1][j] + alpha * v[i][j];
                        }
                    }
                }
                // convert back to cartesian and return
                var result = [];
                for(i = 0; i < d; i++){
                    result[i] = v[s][i] / v[s][d];
                }
                return result;
            }
        },
        {
            /**
     * @param entity {Entity}
     * @param blockCtx {?BlockContext}
     */ key: "_ProcessPoints",
            value: function _ProcessPoints(entity) {
                var blockCtx = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var key = new _batchingKey.BatchingKey(entity.layer, blockCtx === null || blockCtx === void 0 ? void 0 : blockCtx.name, _batchingKey.BatchingKey.GeometryType.POINTS, entity.color, 0);
                var batch = this._GetBatch(key);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = entity.vertices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var v = _step.value;
                        batch.PushVertex(this._TransformVertex(v, blockCtx));
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            /**
     * @param entity {Entity}
     * @param blockCtx {?BlockContext}
     */ key: "_ProcessLineSegments",
            value: function _ProcessLineSegments(entity) {
                var blockCtx = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (entity.vertices.length % 2 !== 0) {
                    throw Error("Even number of vertices expected");
                }
                var key = new _batchingKey.BatchingKey(entity.layer, blockCtx === null || blockCtx === void 0 ? void 0 : blockCtx.name, _batchingKey.BatchingKey.GeometryType.LINES, entity.color, entity.lineType);
                var batch = this._GetBatch(key);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = entity.vertices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var v = _step.value;
                        batch.PushVertex(this._TransformVertex(v, blockCtx));
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            /**
     * @param entity {Entity}
     * @param blockCtx {?BlockContext}
     */ key: "_ProcessPolyline",
            value: function _ProcessPolyline(entity) {
                var blockCtx = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (entity.vertices.length < 2) {
                    return;
                }
                /* It is more optimal to render short polylines un-indexed. Also DXF often contains
         * polylines with just two points.
         */ var verticesCount = entity.vertices.length;
                if (verticesCount <= 3) {
                    var key = new _batchingKey.BatchingKey(entity.layer, blockCtx === null || blockCtx === void 0 ? void 0 : blockCtx.name, _batchingKey.BatchingKey.GeometryType.LINES, entity.color, entity.lineType);
                    var batch = this._GetBatch(key);
                    var prev = null;
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = entity.vertices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var v = _step.value;
                            if (prev !== null) {
                                batch.PushVertex(this._TransformVertex(prev, blockCtx));
                                batch.PushVertex(this._TransformVertex(v, blockCtx));
                            }
                            prev = v;
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    if (entity.shape && verticesCount > 2) {
                        batch.PushVertex(this._TransformVertex(entity.vertices[verticesCount - 1], blockCtx));
                        batch.PushVertex(this._TransformVertex(entity.vertices[0], blockCtx));
                    }
                    return;
                }
                var key1 = new _batchingKey.BatchingKey(entity.layer, blockCtx === null || blockCtx === void 0 ? void 0 : blockCtx.name, _batchingKey.BatchingKey.GeometryType.INDEXED_LINES, entity.color, entity.lineType);
                var batch1 = this._GetBatch(key1);
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    /* Line may be split if exceeds chunk limit. */ for(var _iterator1 = entity._IterateLineChunks()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var lineChunk = _step1.value;
                        var chunk = batch1.PushChunk(lineChunk.verticesCount);
                        var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                        try {
                            for(var _iterator2 = lineChunk.vertices[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                var v1 = _step2.value;
                                chunk.PushVertex(this._TransformVertex(v1, blockCtx));
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                    _iterator2.return();
                                }
                            } finally{
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
                        var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                        try {
                            for(var _iterator3 = lineChunk.indices[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                                var idx = _step3.value;
                                chunk.PushIndex(idx);
                            }
                        } catch (err) {
                            _didIteratorError3 = true;
                            _iteratorError3 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                    _iterator3.return();
                                }
                            } finally{
                                if (_didIteratorError3) {
                                    throw _iteratorError3;
                                }
                            }
                        }
                        chunk.Finish();
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            }
        },
        {
            /**
     * @param entity {Entity}
     * @param blockCtx {?BlockContext}
     */ key: "_ProcessTriangles",
            value: function _ProcessTriangles(entity) {
                var blockCtx = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (entity.vertices.length < 3) {
                    return;
                }
                if (entity.indices.length % 3 !== 0) {
                    console.error("Unexpected size of indices array: " + entity.indices.length);
                    return;
                }
                var key = new _batchingKey.BatchingKey(entity.layer, blockCtx === null || blockCtx === void 0 ? void 0 : blockCtx.name, _batchingKey.BatchingKey.GeometryType.INDEXED_TRIANGLES, entity.color, 0);
                var batch = this._GetBatch(key);
                //XXX splitting into chunks is not yet implemented. Currently used only for text glyphs so
                // should fit into one chunk
                var chunk = batch.PushChunk(entity.vertices.length);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = entity.vertices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var v = _step.value;
                        chunk.PushVertex(this._TransformVertex(v, blockCtx));
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = entity.indices[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var idx = _step1.value;
                        chunk.PushIndex(idx);
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                chunk.Finish();
            }
        },
        {
            /** Resolve entity color.
     *
     * @param entity
     * @param blockCtx {?BlockContext}
     * @return {number} RGB color value. For block entity it also may be one of ColorCode values
     *  which are resolved on block instantiation.
     */ key: "_GetEntityColor",
            value: function _GetEntityColor(entity) {
                var blockCtx = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var color = ColorCode.BY_LAYER;
                if (entity.colorIndex === 0) {
                    color = ColorCode.BY_BLOCK;
                } else if (entity.colorIndex === 256) {
                    color = ColorCode.BY_LAYER;
                } else if (entity.hasOwnProperty("color")) {
                    color = entity.color;
                }
                if (blockCtx) {
                    return color;
                }
                if (color === ColorCode.BY_LAYER || color === ColorCode.BY_BLOCK) {
                    /* BY_BLOCK is not useful when not in block so replace it by layer as well. */ if (entity.hasOwnProperty("layer")) {
                        var layer = this.layers.get(entity.layer);
                        if (layer) {
                            return layer.color;
                        }
                    }
                } else {
                    return color;
                }
                /* Fallback to black. */ return 0;
            }
        },
        {
            /** @return {?string} Layer name, null for block entity. */ key: "_GetEntityLayer",
            value: function _GetEntityLayer(entity) {
                var blockCtx = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (blockCtx) {
                    return null;
                }
                if (entity.hasOwnProperty("layer")) {
                    return entity.layer;
                }
                return "0";
            }
        },
        {
            /** Check extrusionDirection property of the entity and return corresponding transform matrix.
     *
     * @return {?Matrix3} Null if not transform required.
     */ key: "_GetEntityExtrusionTransform",
            value: function _GetEntityExtrusionTransform(entity) {
                //XXX For now just mirror X axis if extrusion Z is negative. No full support for arbitrary
                // OCS yet.
                if (!entity.hasOwnProperty("extrusionDirection")) {
                    return null;
                }
                if (entity.extrusionDirection.z > 0) {
                    return null;
                }
                return new _three.Matrix3().scale(-1, 1);
            }
        },
        {
            /** @return {RenderBatch} */ key: "_GetBatch",
            value: function _GetBatch(key) {
                var batch = this.batches.find({
                    key: key
                });
                if (batch !== null) {
                    return batch;
                }
                batch = new RenderBatch(key);
                this.batches.insert(batch);
                if (key.blockName !== null && !key.IsInstanced()) {
                    /* Block definition batch. */ var block = this.blocks.get(key.blockName);
                    if (block) {
                        block.batches.push(batch);
                    }
                }
                return batch;
            }
        },
        {
            /**
     * Apply all necessary final transforms to a vertex before just before storing it in a rendering
     * batch.
     * @param v {{x: number, y: number}}
     * @param blockCtx {BlockContext}
     * @return {{x: number, y: number}}
     */ key: "_TransformVertex",
            value: function _TransformVertex(v) {
                var blockCtx = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (blockCtx) {
                    /* Block definition in block coordinates. So it should not touch bounds and origin. */ return blockCtx.TransformVertex(v);
                }
                this._UpdateBounds(v);
                return {
                    x: v.x - this.origin.x,
                    y: v.y - this.origin.y
                };
            }
        },
        {
            /** @param v {{x,y}} Vertex to extend bounding box with and set origin. */ key: "_UpdateBounds",
            value: function _UpdateBounds(v) {
                if (this.bounds === null) {
                    this.bounds = {
                        minX: v.x,
                        maxX: v.x,
                        minY: v.y,
                        maxY: v.y
                    };
                } else {
                    if (v.x < this.bounds.minX) {
                        this.bounds.minX = v.x;
                    } else if (v.x > this.bounds.maxX) {
                        this.bounds.maxX = v.x;
                    }
                    if (v.y < this.bounds.minY) {
                        this.bounds.minY = v.y;
                    } else if (v.y > this.bounds.maxY) {
                        this.bounds.maxY = v.y;
                    }
                }
                if (this.origin === null) {
                    this.origin = {
                        x: v.x,
                        y: v.y
                    };
                }
            }
        },
        {
            key: "_BuildScene",
            value: function _BuildScene() {
                var verticesSize = 0;
                var indicesSize = 0;
                var transformsSize = 0;
                this.batches.each(function(b) {
                    verticesSize += b.GetVerticesBufferSize();
                    indicesSize += b.GetIndicesBufferSize();
                    transformsSize += b.GetTransformsSize();
                });
                var scene = {
                    vertices: new ArrayBuffer(verticesSize),
                    indices: new ArrayBuffer(indicesSize),
                    transforms: new ArrayBuffer(transformsSize),
                    batches: [],
                    layers: [],
                    origin: this.origin,
                    bounds: this.bounds,
                    hasMissingChars: this.hasMissingChars
                };
                var buffers = {
                    vertices: new Float32Array(scene.vertices),
                    verticesOffset: 0,
                    indices: new Uint16Array(scene.indices),
                    indicesOffset: 0,
                    transforms: new Float32Array(scene.transforms),
                    transformsOffset: 0
                };
                this.batches.each(function(b) {
                    scene.batches.push(b.Serialize(buffers));
                });
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.layers.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var layer = _step.value;
                        scene.layers.push({
                            name: layer.name,
                            color: layer.color
                        });
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                scene.pointShapeHasDot = (this.pdMode & PdMode.MARK_MASK) === PdMode.DOT;
                return scene;
            }
        }
    ]);
    return DxfScene;
}();
var RenderBatch = /*#__PURE__*/ function() {
    "use strict";
    function RenderBatch(key) {
        _classCallCheck(this, RenderBatch);
        this.key = key;
        if (key.IsIndexed()) {
            this.chunks = [];
        } else if (key.geometryType === _batchingKey.BatchingKey.GeometryType.BLOCK_INSTANCE) {
            this.transforms = new _dynamicBuffer.DynamicBuffer(_dynamicBuffer.NativeType.FLOAT32);
        } else {
            this.vertices = new _dynamicBuffer.DynamicBuffer(_dynamicBuffer.NativeType.FLOAT32);
        }
    }
    _createClass(RenderBatch, [
        {
            key: "PushVertex",
            value: function PushVertex(v) {
                var idx = this.vertices.Push(v.x);
                this.vertices.Push(v.y);
                return idx;
            }
        },
        {
            /**
     * @param matrix {Matrix3} 3x3 Transform matrix. Assuming 2D affine transform so only top 3x2
     *  sub-matrix is taken.
     */ key: "PushInstanceTransform",
            value: function PushInstanceTransform(matrix) {
                /* Storing in row-major order as expected by renderer. */ for(var row = 0; row < 2; row++){
                    for(var col = 0; col < 3; col++){
                        this.transforms.Push(matrix.elements[col * 3 + row]);
                    }
                }
            }
        },
        {
            /** This method actually reserves space for the specified number of indexed vertices in some
     * chunk. The returned object should be used to push exactly the same amount vertices and any
     * number of their referring indices.
     * @param verticesCount Number of vertices in the chunk.
     * @return {IndexedChunkWriter}
     */ key: "PushChunk",
            value: function PushChunk(verticesCount) {
                if (verticesCount > INDEXED_CHUNK_SIZE) {
                    throw new Error("Vertices count exceeds chunk limit: " + verticesCount);
                }
                /* Find suitable chunk with minimal remaining space to fill them as fully as possible. */ var curChunk = null;
                var curSpace = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.chunks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var chunk = _step.value;
                        var space = INDEXED_CHUNK_SIZE - chunk.vertices.GetSize() / 2;
                        if (space < verticesCount) {
                            continue;
                        }
                        if (curChunk === null || space < curSpace) {
                            curChunk = chunk;
                            curSpace = space;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                if (curChunk === null) {
                    curChunk = this._NewChunk(verticesCount);
                }
                return new IndexedChunkWriter(curChunk, verticesCount);
            }
        },
        {
            /** Merge other batch into this one. They should have the same geometry type. Instanced batches
     * are disallowed.
     *
     * @param batch {RenderBatch}
     * @param transform {?Matrix3} Optional transform to apply for merged vertices.
     */ key: "Merge",
            value: function Merge(batch) {
                var transform = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (this.key.geometryType !== batch.key.geometryType) {
                    throw new Error("Rendering batch merging geometry type mismatch: " + "".concat(this.key.geometryType, " !== ").concat(batch.key.geometryType));
                }
                if (this.key.IsInstanced()) {
                    throw new Error("Attempted to merge instanced batch");
                }
                if (this.key.IsIndexed()) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        /* Merge chunks. */ for(var _iterator = batch.chunks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var chunk = _step.value;
                            var verticesSize = chunk.vertices.size;
                            var chunkWriter = this.PushChunk(verticesSize / 2);
                            for(var i = 0; i < verticesSize; i += 2){
                                var v = new _three.Vector2(chunk.vertices.Get(i), chunk.vertices.Get(i + 1));
                                if (transform) {
                                    v.applyMatrix3(transform);
                                }
                                chunkWriter.PushVertex(v);
                            }
                            var numIndices = chunk.indices.size;
                            for(var i1 = 0; i1 < numIndices; i1++){
                                chunkWriter.PushIndex(chunk.indices.Get(i1));
                            }
                            chunkWriter.Finish();
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                } else {
                    var n = batch.vertices.size;
                    for(var i2 = 0; i2 < n; i2 += 2){
                        var v1 = new _three.Vector2(batch.vertices.Get(i2), batch.vertices.Get(i2 + 1));
                        if (transform) {
                            v1.applyMatrix3(transform);
                        }
                        this.PushVertex(v1);
                    }
                }
            }
        },
        {
            /** @return Vertices buffer required size in bytes. */ key: "GetVerticesBufferSize",
            value: function GetVerticesBufferSize() {
                if (this.key.IsIndexed()) {
                    var size = 0;
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.chunks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var chunk = _step.value;
                            size += chunk.vertices.GetSize();
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return size * Float32Array.BYTES_PER_ELEMENT;
                } else if (this.key.geometryType === _batchingKey.BatchingKey.GeometryType.BLOCK_INSTANCE) {
                    return 0;
                } else {
                    return this.vertices.GetSize() * Float32Array.BYTES_PER_ELEMENT;
                }
            }
        },
        {
            /** @return Indices buffer required size in bytes. */ key: "GetIndicesBufferSize",
            value: function GetIndicesBufferSize() {
                if (this.key.IsIndexed()) {
                    var size = 0;
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.chunks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var chunk = _step.value;
                            size += chunk.indices.GetSize();
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return size * Uint16Array.BYTES_PER_ELEMENT;
                } else {
                    return 0;
                }
            }
        },
        {
            /** @return Instances transforms buffer required size in bytes. */ key: "GetTransformsSize",
            value: function GetTransformsSize() {
                if (this.key.geometryType === _batchingKey.BatchingKey.GeometryType.BLOCK_INSTANCE) {
                    return this.transforms.GetSize() * Float32Array.BYTES_PER_ELEMENT;
                } else {
                    return 0;
                }
            }
        },
        {
            key: "Serialize",
            value: function Serialize(buffers) {
                if (this.key.IsIndexed()) {
                    var batch = {
                        key: this.key,
                        chunks: []
                    };
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.chunks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var chunk = _step.value;
                            batch.chunks.push(chunk.Serialize(buffers));
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return batch;
                } else if (this.key.geometryType === _batchingKey.BatchingKey.GeometryType.BLOCK_INSTANCE) {
                    var size = this.transforms.GetSize();
                    var batch1 = {
                        key: this.key,
                        transformsOffset: buffers.transformsOffset,
                        transformsSize: size
                    };
                    this.transforms.CopyTo(buffers.transforms, buffers.transformsOffset);
                    buffers.transformsOffset += size;
                    return batch1;
                } else {
                    var size1 = this.vertices.GetSize();
                    var batch2 = {
                        key: this.key,
                        verticesOffset: buffers.verticesOffset,
                        verticesSize: size1
                    };
                    this.vertices.CopyTo(buffers.vertices, buffers.verticesOffset);
                    buffers.verticesOffset += size1;
                    return batch2;
                }
            }
        },
        {
            key: "_NewChunk",
            value: function _NewChunk(initialCapacity) {
                var chunk = new IndexedChunk(initialCapacity);
                this.chunks.push(chunk);
                return chunk;
            }
        }
    ]);
    return RenderBatch;
}();
var Block = /*#__PURE__*/ function() {
    "use strict";
    function Block(data) {
        _classCallCheck(this, Block);
        this.data = data;
        /* Number of times referenced from top-level entities (INSERT). */ this.useCount = 0;
        /* Number of times referenced by other block. */ this.nestedUseCount = 0;
        /* Total number of vertices in this block. Used for flattening decision. */ this.verticesCount = 0;
        /* Offset {x, y} to apply for all vertices. Used to move origin near vertices location to
         * minimize precision loss.
         */ this.offset = null;
        /* Definition batches. Used for root blocks flattening. */ this.batches = [];
        this.flatten = false;
        /** Bounds in block coordinates (with offset applied). */ this.bounds = null;
    }
    _createClass(Block, [
        {
            /** Set block flattening flag based on usage statistics.
     * @return {Boolean} New flatten flag state.
     */ key: "SetFlatten",
            value: function SetFlatten() {
                if (!this.HasGeometry()) {
                    return false;
                }
                /* Flatten if a block is used once (pure optimization if shares its layer with other
         * geometry) or if total instanced vertices number is less than a threshold (trade some
         * space for draw calls number).
         */ this.flatten = this.useCount === 1 || this.useCount * this.verticesCount <= BLOCK_FLATTENING_VERTICES_THRESHOLD;
                return this.flatten;
            }
        },
        {
            /** @return {Boolean} True if has something to draw. */ key: "HasGeometry",
            value: function HasGeometry() {
                /* Offset is set on first geometry vertex encountered. */ return this.offset !== null;
            }
        },
        {
            key: "RegisterInsert",
            value: function RegisterInsert(entity) {
                this.useCount++;
            }
        },
        {
            key: "RegisterNestedUse",
            value: function RegisterNestedUse(usedByBlock) {
                this.nestedUseCount++;
            }
        },
        {
            /** @return {BlockContext} Context for block definition. */ key: "DefinitionContext",
            value: function DefinitionContext() {
                return new BlockContext(this, BlockContext.Type.DEFINITION);
            }
        },
        {
            key: "InstantiationContext",
            value: function InstantiationContext() {
                return new BlockContext(this, BlockContext.Type.INSTANTIATION);
            }
        },
        {
            key: "UpdateBounds",
            value: function UpdateBounds(v) {
                if (this.bounds === null) {
                    this.bounds = {
                        minX: v.x,
                        maxX: v.x,
                        minY: v.y,
                        maxY: v.y
                    };
                } else {
                    if (v.x < this.bounds.minX) {
                        this.bounds.minX = v.x;
                    } else if (v.x > this.bounds.maxX) {
                        this.bounds.maxX = v.x;
                    }
                    if (v.y < this.bounds.minY) {
                        this.bounds.minY = v.y;
                    } else if (v.y > this.bounds.maxY) {
                        this.bounds.maxY = v.y;
                    }
                }
            }
        }
    ]);
    return Block;
}();
var BlockContext = /*#__PURE__*/ function() {
    "use strict";
    function BlockContext(block, type) {
        _classCallCheck(this, BlockContext);
        this.block = block;
        this.type = type;
        this.origin = this.block.data.position;
        /* Transform to apply for block definition entities not including block offset. */ this.transform = new _three.Matrix3();
    }
    _createClass(BlockContext, [
        {
            key: "name",
            get: /** @return {string} Block name */ function get() {
                return this.block.data.name;
            }
        },
        {
            /**
     * @param v {{x,y}}
     * @return {{x,y}}
     */ key: "TransformVertex",
            value: function TransformVertex(v) {
                var result = new _three.Vector2(v.x, v.y).applyMatrix3(this.transform);
                if (this.type !== BlockContext.Type.DEFINITION && this.type !== BlockContext.Type.NESTED_DEFINITION) {
                    throw new Error("Unexpected transform type");
                }
                this.block.verticesCount++;
                if (this.block.offset === null) {
                    /* This is the first vertex. Take it as a block origin. So the result is always zero
             * vector for the first vertex.
             */ this.block.offset = result;
                    var _$v = new _three.Vector2();
                    this.block.UpdateBounds(_$v);
                    return _$v;
                }
                result.sub(this.block.offset);
                this.block.UpdateBounds(result);
                return result;
            }
        },
        {
            /**
     * Get transform for block instance.
     * @param entity Raw DXF INSERT entity.
     * @return {Matrix3} Transform matrix for block instance to apply to the block definition.
     */ key: "GetInsertionTransform",
            value: function GetInsertionTransform(entity) {
                var mInsert = new _three.Matrix3().translate(-this.origin.x, -this.origin.y);
                var yScale = entity.yScale || 1;
                var xScale = entity.xScale || 1;
                var rotation = -(entity.rotation || 0) * Math.PI / 180;
                var x = entity.position.x;
                var y = entity.position.y;
                mInsert.scale(xScale, yScale);
                mInsert.rotate(rotation);
                mInsert.translate(x, y);
                if (entity.extrusionDirection && entity.extrusionDirection.z < 0) {
                    mInsert.scale(-1, 1);
                }
                if (this.type !== BlockContext.Type.INSTANTIATION) {
                    return mInsert;
                }
                var mOffset = new _three.Matrix3().translate(this.block.offset.x, this.block.offset.y);
                return mInsert.multiply(mOffset);
            }
        },
        {
            /**
     * Create context for nested block.
     * @param block {Block} Nested block.
     * @param entity Raw DXF INSERT entity.
     * @return {BlockContext} Context to use for nested block entities.
     */ key: "NestedBlockContext",
            value: function NestedBlockContext(block, entity) {
                block.RegisterNestedUse(this.block);
                var nestedCtx = new BlockContext(block, BlockContext.Type.NESTED_DEFINITION);
                var nestedTransform = nestedCtx.GetInsertionTransform(entity);
                var ctx = new BlockContext(this.block, BlockContext.Type.NESTED_DEFINITION);
                ctx.transform = new _three.Matrix3().multiplyMatrices(this.transform, nestedTransform);
                return ctx;
            }
        }
    ]);
    return BlockContext;
}();
BlockContext.Type = Object.freeze({
    DEFINITION: 0,
    NESTED_DEFINITION: 1,
    INSTANTIATION: 2
});
var IndexedChunk = /*#__PURE__*/ function() {
    "use strict";
    function IndexedChunk(initialCapacity) {
        _classCallCheck(this, IndexedChunk);
        if (initialCapacity < 16) {
            initialCapacity = 16;
        }
        /* Average two indices per vertex. */ this.indices = new _dynamicBuffer.DynamicBuffer(_dynamicBuffer.NativeType.UINT16, initialCapacity * 2);
        /* Two components per vertex. */ this.vertices = new _dynamicBuffer.DynamicBuffer(_dynamicBuffer.NativeType.FLOAT32, initialCapacity * 2);
    }
    _createClass(IndexedChunk, [
        {
            key: "Serialize",
            value: function Serialize(buffers) {
                var chunk = {};
                {
                    var size = this.vertices.GetSize();
                    chunk.verticesOffset = buffers.verticesOffset;
                    chunk.verticesSize = size;
                    this.vertices.CopyTo(buffers.vertices, buffers.verticesOffset);
                    buffers.verticesOffset += size;
                }
                {
                    var size1 = this.indices.GetSize();
                    chunk.indicesOffset = buffers.indicesOffset;
                    chunk.indicesSize = size1;
                    this.indices.CopyTo(buffers.indices, buffers.indicesOffset);
                    buffers.indicesOffset += size1;
                }
                return chunk;
            }
        }
    ]);
    return IndexedChunk;
}();
var IndexedChunkWriter = /*#__PURE__*/ function() {
    "use strict";
    function IndexedChunkWriter(chunk, verticesCount) {
        _classCallCheck(this, IndexedChunkWriter);
        this.chunk = chunk;
        this.verticesCount = verticesCount;
        this.verticesOffset = this.chunk.vertices.GetSize() / 2;
        this.numVerticesPushed = 0;
    }
    _createClass(IndexedChunkWriter, [
        {
            key: "PushVertex",
            value: function PushVertex(v) {
                if (this.numVerticesPushed === this.verticesCount) {
                    throw new Error();
                }
                this.chunk.vertices.Push(v.x);
                this.chunk.vertices.Push(v.y);
                this.numVerticesPushed++;
            }
        },
        {
            key: "PushIndex",
            value: function PushIndex(idx) {
                if (idx < 0 || idx >= this.verticesCount) {
                    throw new Error("Index out of range: ".concat(idx, "/").concat(this.verticesCount));
                }
                this.chunk.indices.Push(idx + this.verticesOffset);
            }
        },
        {
            key: "Finish",
            value: function Finish() {
                if (this.numVerticesPushed !== this.verticesCount) {
                    throw new Error("Not all vertices pushed: ".concat(this.numVerticesPushed, "/").concat(this.verticesCount));
                }
            }
        }
    ]);
    return IndexedChunkWriter;
}();
var Entity = /*#__PURE__*/ function() {
    "use strict";
    function Entity(param) {
        var type = param.type, vertices = param.vertices, _param_indices = param.indices, indices = _param_indices === void 0 ? null : _param_indices, _param_layer = param.layer, layer = _param_layer === void 0 ? null : _param_layer, color = param.color, _param_lineType = param.lineType, lineType = _param_lineType === void 0 ? 0 : _param_lineType, _param_shape = param.shape, shape = _param_shape === void 0 ? false : _param_shape;
        _classCallCheck(this, Entity);
        this.type = type;
        this.vertices = vertices;
        this.indices = indices;
        this.layer = layer;
        this.color = color;
        this.lineType = lineType;
        this.shape = shape;
    }
    _createClass(Entity, [
        {
            key: "_IterateVertices",
            value: function _IterateVertices(startIndex, count) {
                var idx;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            idx = startIndex;
                            _state.label = 1;
                        case 1:
                            if (!(idx < startIndex + count)) return [
                                3,
                                4
                            ];
                            return [
                                4,
                                this.vertices[idx]
                            ];
                        case 2:
                            _state.sent();
                            _state.label = 3;
                        case 3:
                            idx++;
                            return [
                                3,
                                1
                            ];
                        case 4:
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            key: "_IterateLineChunks",
            value: /** Split line into chunks with at most INDEXED_CHUNK_SIZE vertices in each one. Each chunk is
     * an object with the following properties:
     *  * "verticesCount" - length of "vertices"
     *  * "vertices" - iterator for included vertices.
     *  * "indices" - iterator for indices.
     *  Closed shapes are handled properly.
     */ function _IterateLineChunks() {
                var _this, _loop, verticesCount, _this1, chunkOffset, _ret;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _this = this, _loop = function(chunkOffset) {
                                var count, isLast, vertices, indices, chunkVerticesCount;
                                return __generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            count = verticesCount - chunkOffset;
                                            isLast = void 0;
                                            if (count > INDEXED_CHUNK_SIZE) {
                                                count = INDEXED_CHUNK_SIZE;
                                                isLast = false;
                                            } else {
                                                isLast = true;
                                            }
                                            if (isLast && _this.shape && chunkOffset > 0 && count === INDEXED_CHUNK_SIZE) {
                                                /* Corner case - required shape closing vertex does not fit into the chunk. Will
                * require additional chunk.
                */ isLast = false;
                                            }
                                            if (chunkOffset === verticesCount && !_this.shape) {
                                                /* Shape is not closed and it is last closing vertex iteration. */ return [
                                                    2,
                                                    "break"
                                                ];
                                            }
                                            vertices = void 0, indices = void 0, chunkVerticesCount = void 0;
                                            if (count < 2) {
                                                /* Either last vertex or last shape-closing vertex, or both. */ if (count === 1 && _this.shape) {
                                                    /* Both. */ vertices = function() {
                                                        return __generator(this, function(_state) {
                                                            switch(_state.label){
                                                                case 0:
                                                                    return [
                                                                        4,
                                                                        this.vertices[chunkOffset]
                                                                    ];
                                                                case 1:
                                                                    _state.sent();
                                                                    return [
                                                                        4,
                                                                        this.vertices[0]
                                                                    ];
                                                                case 2:
                                                                    _state.sent();
                                                                    return [
                                                                        2
                                                                    ];
                                                            }
                                                        });
                                                    }();
                                                } else if (count === 1) {
                                                    /* Just last vertex. Take previous one to make a line. */ vertices = function() {
                                                        return __generator(this, function(_state) {
                                                            switch(_state.label){
                                                                case 0:
                                                                    return [
                                                                        4,
                                                                        this.vertices[chunkOffset - 1]
                                                                    ];
                                                                case 1:
                                                                    _state.sent();
                                                                    return [
                                                                        4,
                                                                        this.vertices[chunkOffset]
                                                                    ];
                                                                case 2:
                                                                    _state.sent();
                                                                    return [
                                                                        2
                                                                    ];
                                                            }
                                                        });
                                                    }();
                                                } else {
                                                    /* Just shape-closing vertex. Take last one to make a line. */ vertices = function() {
                                                        return __generator(this, function(_state) {
                                                            switch(_state.label){
                                                                case 0:
                                                                    return [
                                                                        4,
                                                                        this.vertices[verticesCount - 1]
                                                                    ];
                                                                case 1:
                                                                    _state.sent();
                                                                    return [
                                                                        4,
                                                                        this.vertices[0]
                                                                    ];
                                                                case 2:
                                                                    _state.sent();
                                                                    return [
                                                                        2
                                                                    ];
                                                            }
                                                        });
                                                    }();
                                                }
                                                indices = _IterateLineIndices(2, false);
                                                chunkVerticesCount = 2;
                                            } else if (isLast && _this.shape && chunkOffset > 0 && count < INDEXED_CHUNK_SIZE) {
                                                /* Additional vertex to close the shape. */ vertices = function() {
                                                    return __generator(this, function(_state) {
                                                        switch(_state.label){
                                                            case 0:
                                                                return [
                                                                    5,
                                                                    __values(_this1._IterateVertices(chunkOffset, count))
                                                                ];
                                                            case 1:
                                                                _state.sent();
                                                                return [
                                                                    4,
                                                                    this.vertices[0]
                                                                ];
                                                            case 2:
                                                                _state.sent();
                                                                return [
                                                                    2
                                                                ];
                                                        }
                                                    });
                                                }();
                                                indices = _IterateLineIndices(count + 1, false);
                                                chunkVerticesCount = count + 1;
                                            } else {
                                                vertices = _this._IterateVertices(chunkOffset, count);
                                                indices = _IterateLineIndices(count, isLast && chunkOffset === 0 && _this.shape);
                                                chunkVerticesCount = count;
                                            }
                                            return [
                                                4,
                                                {
                                                    verticesCount: chunkVerticesCount,
                                                    vertices: vertices,
                                                    indices: indices
                                                }
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            };
                            verticesCount = this.vertices.length;
                            if (verticesCount < 2) {
                                return [
                                    2
                                ];
                            }
                            _this1 = this;
                            chunkOffset = 0;
                            _state.label = 1;
                        case 1:
                            if (!(chunkOffset <= verticesCount)) return [
                                3,
                                4
                            ];
                            return [
                                5,
                                __values(_loop(chunkOffset))
                            ];
                        case 2:
                            _ret = _state.sent();
                            if (_ret === "break") return [
                                3,
                                4
                            ];
                            _state.label = 3;
                        case 3:
                            chunkOffset += INDEXED_CHUNK_SIZE;
                            return [
                                3,
                                1
                            ];
                        case 4:
                            return [
                                2
                            ];
                    }
                });
            }
        }
    ]);
    return Entity;
}();
Entity.Type = Object.freeze({
    POINTS: 0,
    /** Each vertices pair defines a segment. */ LINE_SEGMENTS: 1,
    POLYLINE: 2,
    TRIANGLES: 3
});
function _IterateLineIndices(verticesCount, close) {
    var idx;
    return __generator(this, function(_state) {
        switch(_state.label){
            case 0:
                idx = 0;
                _state.label = 1;
            case 1:
                if (!(idx < verticesCount - 1)) return [
                    3,
                    5
                ];
                return [
                    4,
                    idx
                ];
            case 2:
                _state.sent();
                return [
                    4,
                    idx + 1
                ];
            case 3:
                _state.sent();
                _state.label = 4;
            case 4:
                idx++;
                return [
                    3,
                    1
                ];
            case 5:
                if (!(close && verticesCount > 2)) return [
                    3,
                    8
                ];
                return [
                    4,
                    verticesCount - 1
                ];
            case 6:
                _state.sent();
                return [
                    4,
                    0
                ];
            case 7:
                _state.sent();
                _state.label = 8;
            case 8:
                return [
                    2
                ];
        }
    });
}
/** Point display mode, $PDMODE system variable. */ var PdMode = Object.freeze({
    DOT: 0,
    NONE: 1,
    PLUS: 2,
    CROSS: 3,
    TICK: 4,
    MARK_MASK: 0xf,
    CIRCLE: 0x20,
    SQUARE: 0x40,
    SHAPE_MASK: 0xf0
});
var ColorCode = Object.freeze({
    BY_LAYER: -1,
    BY_BLOCK: -2
});
DxfScene.DefaultOptions = {
    /** Target angle for each segment of tessellated arc. */ arcTessellationAngle: 10 / 180 * Math.PI,
    /** Divide arc to at least the specified number of segments. */ minArcTessellationSubdivisions: 8,
    /** Render meshes (3DFACE group) as wireframe instead of solid. */ wireframeMesh: false,
    /** Text rendering options. */ textOptions: _textRenderer.TextRenderer.DefaultOptions
};
