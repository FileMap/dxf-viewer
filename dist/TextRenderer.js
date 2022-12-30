"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TextRenderer", {
    enumerable: true,
    get: function() {
        return TextRenderer;
    }
});
var _dxfScene = require("./DxfScene");
var _shapePath = require("three/src/extras/core/ShapePath");
var _shapeUtils = require("three/src/extras/ShapeUtils");
var _three = require("three");
var _mtextFormatParser = require("./MTextFormatParser");
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
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
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
var TextRenderer = /*#__PURE__*/ function() {
    "use strict";
    function TextRenderer(fontFetchers) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        _classCallCheck(this, TextRenderer);
        this.fontFetchers = fontFetchers;
        this.fonts = [];
        this.options = Object.create(_dxfScene.DxfScene.DefaultOptions);
        if (options) {
            Object.assign(this.options, options);
        }
        /* Indexed by character, value is CharShape. */ this.shapes = new Map();
        this.stubShapeLoaded = false;
        /* Shape to display if no glyph found in the specified fonts. May be null if fallback
         * character can not be rendered as well.
         */ this.stubShape = null;
    }
    _createClass(TextRenderer, [
        {
            key: "FetchFonts",
            value: /** Fetch necessary fonts to render the provided text. Should be called for each string which
     * will be rendered later.
     * @param text {string}
     * @return {Boolean} True if all characters can be rendered, false if none of the provided fonts
     *  contains glyphs for some of the specified text characters.
     */ function FetchFonts(text) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, char, err, charMissing, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, char1, found, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, font, fetcher, font1, err;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!!_this.stubShapeLoaded) return [
                                    3,
                                    8
                                ];
                                _this.stubShapeLoaded = true;
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    8
                                ]);
                                _iterator = Array.from(_this.options.fallbackChar)[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    5
                                ];
                                char = _step.value;
                                return [
                                    4,
                                    _this.FetchFonts(char)
                                ];
                            case 3:
                                if (_state.sent()) {
                                    _this.stubShape = _this._CreateCharShape(char);
                                    return [
                                        3,
                                        5
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
                                charMissing = false;
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                _state.label = 9;
                            case 9:
                                _state.trys.push([
                                    9,
                                    16,
                                    17,
                                    18
                                ]);
                                _iterator1 = text[Symbol.iterator]();
                                _state.label = 10;
                            case 10:
                                if (!!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done)) return [
                                    3,
                                    15
                                ];
                                char1 = _step1.value;
                                if (char1.codePointAt(0) < 0x20) {
                                    /* Control character. */ return [
                                        3,
                                        14
                                    ];
                                }
                                found = false;
                                _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                                try {
                                    for(_iterator2 = _this.fonts[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                        font = _step2.value;
                                        if (font.HasChar(char1)) {
                                            found = true;
                                            break;
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
                                if (found) {
                                    return [
                                        3,
                                        14
                                    ];
                                }
                                if (!_this.fontFetchers) {
                                    return [
                                        2,
                                        false
                                    ];
                                }
                                _state.label = 11;
                            case 11:
                                if (!(_this.fontFetchers.length > 0)) return [
                                    3,
                                    13
                                ];
                                fetcher = _this.fontFetchers.shift();
                                return [
                                    4,
                                    _this._FetchFont(fetcher)
                                ];
                            case 12:
                                font1 = _state.sent();
                                _this.fonts.push(font1);
                                if (font1.HasChar(char1)) {
                                    found = true;
                                    return [
                                        3,
                                        13
                                    ];
                                }
                                return [
                                    3,
                                    11
                                ];
                            case 13:
                                if (!found) {
                                    charMissing = true;
                                }
                                _state.label = 14;
                            case 14:
                                _iteratorNormalCompletion1 = true;
                                return [
                                    3,
                                    10
                                ];
                            case 15:
                                return [
                                    3,
                                    18
                                ];
                            case 16:
                                err = _state.sent();
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                                return [
                                    3,
                                    18
                                ];
                            case 17:
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
                            case 18:
                                return [
                                    2,
                                    !charMissing
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "canRender",
            get: function get() {
                return this.fonts !== null && this.fonts.length > 0;
            }
        },
        {
            key: "Render",
            value: /**
     * @param text {string}
     * @param startPos {{x,y}}
     * @param endPos {?{x,y}} TEXT group second alignment point.
     * @param rotation {?number} Rotation attribute, deg.
     * @param widthFactor {?number} Relative X scale factor (group 41)
     * @param hAlign {?number} Horizontal text justification type code (group 72)
     * @param vAlign {?number} Vertical text justification type code (group 73).
     * @param color {number}
     * @param layer {?string}
     * @param fontSize {number}
     * @return {Generator<Entity>} Rendering entities. Currently just indexed triangles for each
     *  glyph.
     */ function Render(param) {
                var text, startPos, endPos, _param_rotation, rotation, _param_widthFactor, widthFactor, _param_hAlign, hAlign, _param_vAlign, vAlign, color, _param_layer, layer, fontSize, block, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, char, shape;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            text = param.text, startPos = param.startPos, endPos = param.endPos, _param_rotation = param.rotation, rotation = _param_rotation === void 0 ? 0 : _param_rotation, _param_widthFactor = param.widthFactor, widthFactor = _param_widthFactor === void 0 ? 1 : _param_widthFactor, _param_hAlign = param.hAlign, hAlign = _param_hAlign === void 0 ? 0 : _param_hAlign, _param_vAlign = param.vAlign, vAlign = _param_vAlign === void 0 ? 0 : _param_vAlign, color = param.color, _param_layer = param.layer, layer = _param_layer === void 0 ? null : _param_layer, fontSize = param.fontSize;
                            block = new TextBlock(fontSize);
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(_iterator = text[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    char = _step.value;
                                    shape = this._GetCharShape(char);
                                    if (!shape) {
                                        continue;
                                    }
                                    block.PushChar(char, shape);
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
                            return [
                                5,
                                __values(block.Render(startPos, endPos, rotation, widthFactor, hAlign, vAlign, color, layer))
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
            key: "RenderMText",
            value: /**
     * @param {MTextFormatEntity[]} formattedText Parsed formatted text.
     * @param {{x, y}} position Insertion position.
     * @param {Number} fontSize
     * @param {?Number} width Text block width, no wrapping if undefined.
     * @param {?Number} rotation Text block rotation in degrees.
     * @param {?{x, y}} direction Text block orientation defined as direction vector. Takes a
     * precedence over rotation if both provided.
     * @param {number} attachment Attachment point, one of MTextAttachment values.
     * @param {?number} lineSpacing Line spacing ratio relative to default one (5/3 of font size).
     * @param {number} color
     * @param {?string} layer
     * @return {Generator<Entity>} Rendering entities. Currently just indexed triangles for each
     *  glyph.
     */ function RenderMText(param) {
                var formattedText, position, fontSize, _param_width, width, _param_rotation, rotation, _param_direction, direction, attachment, _param_lineSpacing, lineSpacing, color, _param_layer, layer, box;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            formattedText = param.formattedText, position = param.position, fontSize = param.fontSize, _param_width = param.width, width = _param_width === void 0 ? null : _param_width, _param_rotation = param.rotation, rotation = _param_rotation === void 0 ? 0 : _param_rotation, _param_direction = param.direction, direction = _param_direction === void 0 ? null : _param_direction, attachment = param.attachment, _param_lineSpacing = param.lineSpacing, lineSpacing = _param_lineSpacing === void 0 ? 1 : _param_lineSpacing, color = param.color, _param_layer = param.layer, layer = _param_layer === void 0 ? null : _param_layer;
                            box = new TextBox(fontSize, this._GetCharShape.bind(this));
                            box.FeedText(formattedText);
                            return [
                                5,
                                __values(box.Render(position, width, rotation, direction, attachment, lineSpacing, color, layer))
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
            /** @return {CharShape} Shape for the specified character.
     * Each shape is indexed triangles mesh for font size 1. They should be further transformed as
     * needed.
     */ key: "_GetCharShape",
            value: function _GetCharShape(char) {
                var shape = this.shapes.get(char);
                if (shape) {
                    return shape;
                }
                shape = this._CreateCharShape(char);
                this.shapes.set(char, shape);
                return shape;
            }
        },
        {
            key: "_CreateCharShape",
            value: function _CreateCharShape(char) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.fonts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var font = _step.value;
                        var path = font.GetCharPath(char);
                        if (path) {
                            return new CharShape(font, path, this.options);
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
                return this.stubShape;
            }
        },
        {
            key: "_FetchFont",
            value: function _FetchFont(fontFetcher) {
                return _asyncToGenerator(function() {
                    var _;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _ = Font.bind;
                                return [
                                    4,
                                    fontFetcher()
                                ];
                            case 1:
                                return [
                                    2,
                                    new (_.apply(Font, [
                                        void 0,
                                        _state.sent()
                                    ]))
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return TextRenderer;
}();
TextRenderer.DefaultOptions = {
    /** Number of segments for each curve in a glyph. Currently Three.js does not have more
     * adequate angle-based or length-based tessellation option.
     */ curveSubdivision: 2,
    /** Character to use when the specified fonts does not contain necessary glyph. Several ones can
     * be specified, the first one available is used.
     */ fallbackChar: "�?"
};
/** @typedef {Object} CharPath
 * @property advance {number}
 * @property path {?ShapePath}
 * @property bounds {xMin: number, xMax: number, yMin: number, yMax: number}
 */ var CharShape = /*#__PURE__*/ function() {
    "use strict";
    function CharShape(font, glyph, options) {
        _classCallCheck(this, CharShape);
        this.font = font;
        this.advance = glyph.advance;
        this.bounds = glyph.bounds;
        if (glyph.path) {
            var shapes = glyph.path.toShapes(false);
            this.vertices = [];
            this.indices = [];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                var _this = this, _loop = function() {
                    var shape = _step.value;
                    var AddVertices = function AddVertices(vertices) {
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = vertices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var v = _step.value;
                                _this1.vertices.push(v);
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
                    };
                    var shapePoints = shape.extractPoints(options.curveSubdivision);
                    /* Ensure proper vertices winding. */ if (!_shapeUtils.ShapeUtils.isClockWise(shapePoints.shape)) {
                        shapePoints.shape = shapePoints.shape.reverse();
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = shapePoints.holes[Symbol.iterator](), _step1; !(_iteratorNormalCompletion = (_step1 = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var hole = _step1.value;
                                if (_shapeUtils.ShapeUtils.isClockWise(hole)) {
                                    shapePoints.holes[h] = hole.reverse();
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
                    }
                    /* This call also removes duplicated end vertices. */ var indices = _shapeUtils.ShapeUtils.triangulateShape(shapePoints.shape, shapePoints.holes);
                    var _this1 = _this;
                    var baseIdx = _this.vertices.length;
                    AddVertices(shapePoints.shape);
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = shapePoints.holes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion1 = (_step2 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var hole1 = _step2.value;
                            AddVertices(hole1);
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
                    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                    try {
                        for(var _iterator2 = indices[Symbol.iterator](), _step3; !(_iteratorNormalCompletion2 = (_step3 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                            var tuple = _step3.value;
                            var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                            try {
                                for(var _iterator3 = tuple[Symbol.iterator](), _step4; !(_iteratorNormalCompletion3 = (_step4 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                                    var idx = _step4.value;
                                    _this.indices.push(baseIdx + idx);
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
                };
                for(var _iterator = shapes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
            this.vertices = null;
        }
    }
    _createClass(CharShape, [
        {
            /** Get vertices array transformed to the specified position and with the specified size.
     * @param position {{x,y}}
     * @param size {number}
     * @return {Vector2[]}
     */ key: "GetVertices",
            value: function GetVertices(position, size) {
                return this.vertices.map(function(v) {
                    return v.clone().multiplyScalar(size).add(position);
                });
            }
        }
    ]);
    return CharShape;
}();
var Font = /*#__PURE__*/ function() {
    "use strict";
    function Font(data) {
        _classCallCheck(this, Font);
        this.data = data;
        this.charMap = new Map();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.values(data.glyphs.glyphs)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var glyph = _step.value;
                if (glyph.unicode === undefined) {
                    continue;
                }
                this.charMap.set(String.fromCodePoint(glyph.unicode), glyph);
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
        /* Scale to transform the paths to size 1. */ //XXX not really clear what is the resulting unit, check, review and comment it later
        // (100px?)
        this.scale = 100 / ((this.data.unitsPerEm || 2048) * 72);
    }
    _createClass(Font, [
        {
            /**
     * @param char {string} Character code point as string.
     * @return {Boolean} True if the font has glyphs for the specified character.
     */ key: "HasChar",
            value: function HasChar(char) {
                return this.charMap.has(char);
            }
        },
        {
            /**
     * @param char {string} Character code point as string.
     * @return {?CharPath} Path is scaled to size 1. Null if no glyphs for the specified characters.
     */ key: "GetCharPath",
            value: function GetCharPath(char) {
                var glyph = this.charMap.get(char);
                if (!glyph) {
                    return null;
                }
                var scale = this.scale;
                var path = new _shapePath.ShapePath();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = glyph.path.commands[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var cmd = _step.value;
                        switch(cmd.type){
                            case "M":
                                path.moveTo(cmd.x * scale, cmd.y * scale);
                                break;
                            case "L":
                                path.lineTo(cmd.x * scale, cmd.y * scale);
                                break;
                            case "Q":
                                path.quadraticCurveTo(cmd.x1 * scale, cmd.y1 * scale, cmd.x * scale, cmd.y * scale);
                                break;
                            case "C":
                                path.bezierCurveTo(cmd.x1 * scale, cmd.y1 * scale, cmd.x2 * scale, cmd.y2 * scale, cmd.x * scale, cmd.y * scale);
                                break;
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
                return {
                    advance: glyph.advanceWidth * scale,
                    path: path,
                    bounds: {
                        xMin: glyph.xMin * scale,
                        xMax: glyph.xMax * scale,
                        yMin: glyph.yMin * scale,
                        yMax: glyph.yMax * scale
                    }
                };
            }
        },
        {
            /**
     * @param c1 {string}
     * @param c2 {string}
     * @return {number}
     */ key: "GetKerning",
            value: function GetKerning(c1, c2) {
                var i1 = this.data.charToGlyphIndex(c1);
                if (i1 === 0) {
                    return 0;
                }
                var i2 = this.data.charToGlyphIndex(c1);
                if (i2 === 0) {
                    return 0;
                }
                return this.data.getKerningValue(i1, i2) * this.scale;
            }
        }
    ]);
    return Font;
}();
/** TEXT group attribute 72 values. */ var HAlign = Object.freeze({
    LEFT: 0,
    CENTER: 1,
    RIGHT: 2,
    ALIGNED: 3,
    MIDDLE: 4,
    FIT: 5
});
/** TEXT group attribute 73 values. */ var VAlign = Object.freeze({
    BASELINE: 0,
    BOTTOM: 1,
    MIDDLE: 2,
    TOP: 3
});
/** MTEXT group attribute 71 values. */ var MTextAttachment = Object.freeze({
    TOP_LEFT: 1,
    TOP_CENTER: 2,
    TOP_RIGHT: 3,
    MIDDLE_LEFT: 4,
    MIDDLE_CENTER: 5,
    MIDDLE_RIGHT: 6,
    BOTTOM_LEFT: 7,
    BOTTOM_CENTER: 8,
    BOTTOM_RIGHT: 9
});
/** Encapsulates layout calculations for a multiline-line text block. */ var TextBox = /*#__PURE__*/ function() {
    "use strict";
    function TextBox(fontSize, charShapeProvider) {
        _classCallCheck(this, TextBox);
        this.fontSize = fontSize;
        this.charShapeProvider = charShapeProvider;
        this.curParagraph = new TextBox.Paragraph(this);
        this.paragraphs = [
            this.curParagraph
        ];
        this.spaceShape = charShapeProvider(" ");
    }
    _createClass(TextBox, [
        {
            /** Add some formatted text to the box.
     * @param {MTextFormatEntity[]} formattedText Parsed formatted text.
     */ key: "FeedText",
            value: function FeedText(formattedText) {
                /* For now advanced formatting is not implemented so scopes are just flattened. */ function FlattenItems(items) {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, err;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    8,
                                    9,
                                    10
                                ]);
                                _iterator = items[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    7
                                ];
                                item = _step.value;
                                if (!(item.type === _mtextFormatParser.MTextFormatParser.EntityType.SCOPE)) return [
                                    3,
                                    4
                                ];
                                return [
                                    5,
                                    __values(FlattenItems(item.content))
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    3,
                                    6
                                ];
                            case 4:
                                return [
                                    4,
                                    item
                                ];
                            case 5:
                                _state.sent();
                                _state.label = 6;
                            case 6:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
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
                                return [
                                    2
                                ];
                        }
                    });
                }
                /* Null is default alignment which depends on attachment point. */ var curAlignment = null;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = FlattenItems(formattedText)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var item = _step.value;
                        switch(item.type){
                            case _mtextFormatParser.MTextFormatParser.EntityType.TEXT:
                                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    for(var _iterator1 = item.content[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        var c = _step1.value;
                                        if (c === " ") {
                                            this.curParagraph.FeedSpace();
                                        } else {
                                            this.curParagraph.FeedChar(c);
                                        }
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
                                break;
                            case _mtextFormatParser.MTextFormatParser.EntityType.PARAGRAPH:
                                this.curParagraph = new TextBox.Paragraph(this);
                                this.curParagraph.SetAlignment(curAlignment);
                                this.paragraphs.push(this.curParagraph);
                                break;
                            case _mtextFormatParser.MTextFormatParser.EntityType.NON_BREAKING_SPACE:
                                this.curParagraph.FeedChar(" ");
                                break;
                            case _mtextFormatParser.MTextFormatParser.EntityType.PARAGRAPH_ALIGNMENT:
                                var a = null;
                                switch(item.alignment){
                                    case "l":
                                        a = TextBox.Paragraph.Alignment.LEFT;
                                        break;
                                    case "c":
                                        a = TextBox.Paragraph.Alignment.CENTER;
                                        break;
                                    case "r":
                                        a = TextBox.Paragraph.Alignment.RIGHT;
                                        break;
                                    case "d":
                                        a = TextBox.Paragraph.Alignment.JUSTIFY;
                                        break;
                                    case "j":
                                        a = null;
                                        break;
                                }
                                this.curParagraph.SetAlignment(a);
                                curAlignment = a;
                                break;
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
            }
        },
        {
            key: "Render",
            value: function Render(position, width, rotation, direction, attachment, lineSpacing, color, layer) {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, p, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, p1, pWidth, defaultAlignment, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, p2, lineHeight, height, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, p3, origin, transform, y, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, p4, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, line, chunkIdx, chunk, x, v, err, err;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(_iterator = this.paragraphs[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    p = _step.value;
                                    p.BuildLines(width);
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
                            if (width === null || width === 0) {
                                /* Find maximal paragraph width which will define overall box width. */ width = 0;
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    for(_iterator1 = this.paragraphs[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        p1 = _step1.value;
                                        pWidth = p1.GetMaxLineWidth();
                                        if (pWidth > width) {
                                            width = pWidth;
                                        }
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
                            defaultAlignment = TextBox.Paragraph.Alignment.LEFT;
                            switch(attachment){
                                case MTextAttachment.TOP_CENTER:
                                case MTextAttachment.MIDDLE_CENTER:
                                case MTextAttachment.BOTTOM_CENTER:
                                    defaultAlignment = TextBox.Paragraph.Alignment.CENTER;
                                    break;
                                case MTextAttachment.TOP_RIGHT:
                                case MTextAttachment.MIDDLE_RIGHT:
                                case MTextAttachment.BOTTOM_RIGHT:
                                    defaultAlignment = TextBox.Paragraph.Alignment.RIGHT;
                                    break;
                            }
                            _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                            try {
                                for(_iterator2 = this.paragraphs[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                    p2 = _step2.value;
                                    p2.ApplyAlignment(width, defaultAlignment);
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
                            /* Box local coordinates have top-left corner origin, so Y values are negative. The
         * specified attachment should be used to obtain attachment point offset relatively to box
         * CS origin.
         */ if (direction !== null) {
                                /* Direction takes precedence over rotation if specified. */ rotation = Math.atan2(direction.y, direction.x) * 180 / Math.PI;
                            }
                            lineHeight = lineSpacing * 5 * this.fontSize / 3;
                            height = 0;
                            _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                            try {
                                for(_iterator3 = this.paragraphs[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                                    p3 = _step3.value;
                                    if (p3.lines === null) {
                                        /* Paragraph always occupies at least one line. */ height++;
                                    } else {
                                        height += p3.lines.length;
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
                            height *= lineHeight;
                            origin = new _three.Vector2();
                            switch(attachment){
                                case MTextAttachment.TOP_LEFT:
                                    break;
                                case MTextAttachment.TOP_CENTER:
                                    origin.x = width / 2;
                                    break;
                                case MTextAttachment.TOP_RIGHT:
                                    origin.x = width;
                                    break;
                                case MTextAttachment.MIDDLE_LEFT:
                                    origin.y = -height / 2;
                                    break;
                                case MTextAttachment.MIDDLE_CENTER:
                                    origin.x = width / 2;
                                    origin.y = -height / 2;
                                    break;
                                case MTextAttachment.MIDDLE_RIGHT:
                                    origin.x = width;
                                    origin.y = -height / 2;
                                    break;
                                case MTextAttachment.BOTTOM_LEFT:
                                    origin.y = -height;
                                    break;
                                case MTextAttachment.BOTTOM_CENTER:
                                    origin.x = width / 2;
                                    origin.y = -height;
                                    break;
                                case MTextAttachment.BOTTOM_RIGHT:
                                    origin.x = width;
                                    origin.y = -height;
                                    break;
                                default:
                                    throw new Error("Unhandled alignment");
                            }
                            transform = new _three.Matrix3().translate(-origin.x, -origin.y).rotate(-rotation * Math.PI / 180).translate(position.x, position.y);
                            y = -this.fontSize;
                            _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                15,
                                16,
                                17
                            ]);
                            _iterator4 = this.paragraphs[Symbol.iterator]();
                            _state.label = 2;
                        case 2:
                            if (!!(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done)) return [
                                3,
                                14
                            ];
                            p4 = _step4.value;
                            if (p4.lines === null) {
                                y -= lineHeight;
                                return [
                                    3,
                                    13
                                ];
                            }
                            _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
                            _state.label = 3;
                        case 3:
                            _state.trys.push([
                                3,
                                11,
                                12,
                                13
                            ]);
                            _iterator5 = p4.lines[Symbol.iterator]();
                            _state.label = 4;
                        case 4:
                            if (!!(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done)) return [
                                3,
                                10
                            ];
                            line = _step5.value;
                            chunkIdx = line.startChunkIdx;
                            _state.label = 5;
                        case 5:
                            if (!(chunkIdx < line.startChunkIdx + line.numChunks)) return [
                                3,
                                8
                            ];
                            chunk = p4.chunks[chunkIdx];
                            x = chunk.position;
                            /* First chunk of continuation line never prepended by whitespace. */ if (chunkIdx === 0 || chunkIdx !== line.startChunkIdx) {
                                x += chunk.GetSpacingWidth();
                            }
                            v = new _three.Vector2(x, y);
                            v.applyMatrix3(transform);
                            if (!chunk.block) return [
                                3,
                                7
                            ];
                            return [
                                5,
                                __values(chunk.block.Render(v, null, rotation, null, HAlign.LEFT, VAlign.BASELINE, color, layer))
                            ];
                        case 6:
                            _state.sent();
                            _state.label = 7;
                        case 7:
                            chunkIdx++;
                            return [
                                3,
                                5
                            ];
                        case 8:
                            y -= lineHeight;
                            _state.label = 9;
                        case 9:
                            _iteratorNormalCompletion5 = true;
                            return [
                                3,
                                4
                            ];
                        case 10:
                            return [
                                3,
                                13
                            ];
                        case 11:
                            err = _state.sent();
                            _didIteratorError5 = true;
                            _iteratorError5 = err;
                            return [
                                3,
                                13
                            ];
                        case 12:
                            try {
                                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                                    _iterator5.return();
                                }
                            } finally{
                                if (_didIteratorError5) {
                                    throw _iteratorError5;
                                }
                            }
                            return [
                                7
                            ];
                        case 13:
                            _iteratorNormalCompletion4 = true;
                            return [
                                3,
                                2
                            ];
                        case 14:
                            return [
                                3,
                                17
                            ];
                        case 15:
                            err = _state.sent();
                            _didIteratorError4 = true;
                            _iteratorError4 = err;
                            return [
                                3,
                                17
                            ];
                        case 16:
                            try {
                                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                                    _iterator4.return();
                                }
                            } finally{
                                if (_didIteratorError4) {
                                    throw _iteratorError4;
                                }
                            }
                            return [
                                7
                            ];
                        case 17:
                            return [
                                2
                            ];
                    }
                });
            }
        }
    ]);
    return TextBox;
}();
TextBox.Paragraph = /*#__PURE__*/ function() {
    "use strict";
    function _class(textBox) {
        _classCallCheck(this, _class);
        this.textBox = textBox;
        this.chunks = [];
        this.curChunk = null;
        this.alignment = null;
        this.lines = null;
    }
    _createClass(_class, [
        {
            /** Feed character for current chunk. Spaces should be fed by FeedSpace() method. If space
     * character is fed into this method, it is interpreted as non-breaking space.
     */ key: "FeedChar",
            value: function FeedChar(c) {
                var shape = this.textBox.charShapeProvider(c);
                if (shape === null) {
                    return;
                }
                if (this.curChunk === null) {
                    this._AddChunk();
                }
                this.curChunk.PushChar(c, shape);
            }
        },
        {
            key: "FeedSpace",
            value: function FeedSpace() {
                if (this.curChunk === null || this.curChunk.lastChar !== null) {
                    this._AddChunk();
                }
                this.curChunk.PushSpace();
            }
        },
        {
            key: "SetAlignment",
            value: function SetAlignment(alignment) {
                this.alignment = alignment;
            }
        },
        {
            /** Group chunks into lines.
     *
     * @param {?number} boxWidth Box width. Do not wrap lines if null (one line is created).
     */ key: "BuildLines",
            value: function BuildLines(boxWidth) {
                var _this = this;
                if (this.curChunk === null) {
                    return;
                }
                this.lines = [];
                var startChunkIdx = 0;
                var curChunkIdx = 0;
                var curWidth = 0;
                var CommitLine = function() {
                    _this.lines.push(new TextBox.Paragraph.Line(_this, startChunkIdx, curChunkIdx - startChunkIdx, curWidth));
                    startChunkIdx = curChunkIdx;
                    curWidth = 0;
                };
                for(; curChunkIdx < this.chunks.length; curChunkIdx++){
                    var chunk = this.chunks[curChunkIdx];
                    var chunkWidth = chunk.GetWidth(startChunkIdx === 0 || curChunkIdx !== startChunkIdx);
                    if (boxWidth !== null && boxWidth !== 0 && curWidth !== 0 && curWidth + chunkWidth > boxWidth) {
                        CommitLine();
                    }
                    chunk.position = curWidth;
                    curWidth += chunkWidth;
                }
                if (startChunkIdx !== curChunkIdx && curWidth !== 0) {
                    CommitLine();
                }
            }
        },
        {
            key: "GetMaxLineWidth",
            value: function GetMaxLineWidth() {
                if (this.lines === null) {
                    return 0;
                }
                var maxWidth = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var line = _step.value;
                        if (line.width > maxWidth) {
                            maxWidth = line.width;
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
                return maxWidth;
            }
        },
        {
            key: "ApplyAlignment",
            value: function ApplyAlignment(boxWidth, defaultAlignment) {
                if (this.lines) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var line = _step.value;
                            line.ApplyAlignment(boxWidth, defaultAlignment);
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
            }
        },
        {
            key: "_AddChunk",
            value: function _AddChunk() {
                this.curChunk = new TextBox.Paragraph.Chunk(this, this.textBox.fontSize, this.curChunk);
                this.chunks.push(this.curChunk);
            }
        }
    ]);
    return _class;
}();
TextBox.Paragraph.Alignment = Object.freeze({
    LEFT: 0,
    CENTER: 1,
    RIGHT: 2,
    JUSTIFY: 3
});
TextBox.Paragraph.Chunk = /*#__PURE__*/ function() {
    "use strict";
    function _class(paragraph, fontSize, prevChunk) {
        _classCallCheck(this, _class);
        this.paragraph = paragraph;
        this.fontSize = fontSize;
        this.prevChunk = prevChunk;
        this.lastChar = null;
        this.lastShape = null;
        this.leadingSpaces = 0;
        this.spaceStartKerning = null;
        this.spaceEndKerning = null;
        this.block = null;
        this.position = null;
    }
    _createClass(_class, [
        {
            key: "PushSpace",
            value: function PushSpace() {
                if (this.block) {
                    throw new Error("Illegal operation");
                }
                this.leadingSpaces++;
            }
        },
        {
            /**
     * @param char {string}
     * @param shape {CharShape}
     */ key: "PushChar",
            value: function PushChar(char, shape) {
                if (this.spaceStartKerning === null) {
                    if (this.leadingSpaces === 0) {
                        this.spaceStartKerning = 0;
                        this.spaceEndKerning = 0;
                    } else {
                        if (this.prevChunk && this.prevChunk.lastShape && this.prevChunk.fontSize === this.fontSize && this.prevChunk.lastShape.font === this.paragraph.textBox.spaceShape.font) {
                            this.spaceStartKerning = this.prevChunk.lastShape.font.GetKerning(this.prevChunk.lastChar, " ");
                        } else {
                            this.spaceStartKerning = 0;
                        }
                        if (shape.font === this.paragraph.textBox.spaceShape.font) {
                            this.spaceEndKerning = shape.font.GetKerning(" ", char);
                        } else {
                            this.spaceEndKerning = 0;
                        }
                    }
                }
                if (this.block === null) {
                    this.block = new TextBlock(this.fontSize);
                }
                this.block.PushChar(char, shape);
                this.lastChar = char;
                this.lastShape = shape;
            }
        },
        {
            key: "GetSpacingWidth",
            value: function GetSpacingWidth() {
                return (this.leadingSpaces * this.paragraph.textBox.spaceShape.advance + this.spaceStartKerning + this.spaceEndKerning) * this.fontSize;
            }
        },
        {
            key: "GetWidth",
            value: function GetWidth(withSpacing) {
                if (this.block === null) {
                    return 0;
                }
                var width = this.block.GetCurrentPosition();
                if (withSpacing) {
                    width += this.GetSpacingWidth();
                }
                return width;
            }
        }
    ]);
    return _class;
}();
TextBox.Paragraph.Line = /*#__PURE__*/ function() {
    "use strict";
    function _class(paragraph, startChunkIdx, numChunks, width) {
        _classCallCheck(this, _class);
        this.paragraph = paragraph;
        this.startChunkIdx = startChunkIdx;
        this.numChunks = numChunks;
        this.width = width;
    }
    _createClass(_class, [
        {
            key: "ApplyAlignment",
            value: function ApplyAlignment(boxWidth, defaultAlignment) {
                var _this_paragraph_alignment;
                var alignment = (_this_paragraph_alignment = this.paragraph.alignment) !== null && _this_paragraph_alignment !== void 0 ? _this_paragraph_alignment : defaultAlignment;
                switch(alignment){
                    case TextBox.Paragraph.Alignment.LEFT:
                        break;
                    case TextBox.Paragraph.Alignment.CENTER:
                        {
                            var offset = (boxWidth - this.width) / 2;
                            this.ForEachChunk(function(chunk) {
                                return chunk.position += offset;
                            });
                            break;
                        }
                    case TextBox.Paragraph.Alignment.RIGHT:
                        {
                            var offset1 = boxWidth - this.width;
                            this.ForEachChunk(function(chunk) {
                                return chunk.position += offset1;
                            });
                            break;
                        }
                    case TextBox.Paragraph.Alignment.JUSTIFY:
                        {
                            var space = boxWidth - this.width;
                            if (space <= 0 || this.numChunks === 1) {
                                break;
                            }
                            var step = space / (this.numChunks - 1);
                            var offset2 = 0;
                            this.ForEachChunk(function(chunk) {
                                chunk.position += offset2;
                                offset2 += step;
                            });
                            break;
                        }
                    default:
                        throw new Error("Unhandled alignment: " + this.paragraph.alignment);
                }
            }
        },
        {
            key: "ForEachChunk",
            value: function ForEachChunk(handler) {
                for(var i = 0; i < this.numChunks; i++){
                    handler(this.paragraph.chunks[this.startChunkIdx + i]);
                }
            }
        }
    ]);
    return _class;
}();
/** Encapsulates calculations for a single-line text block. */ var TextBlock = /*#__PURE__*/ function() {
    "use strict";
    function TextBlock(fontSize) {
        _classCallCheck(this, TextBlock);
        this.fontSize = fontSize;
        /* Element is {shape: CharShape, vertices: ?{Vector2}[]} */ this.glyphs = [];
        this.bounds = null;
        this.curX = 0;
        this.prevChar = null;
        this.prevFont = null;
    }
    _createClass(TextBlock, [
        {
            /**
     * @param char {string}
     * @param shape {CharShape}
     */ key: "PushChar",
            value: function PushChar(char, shape) {
                /* Initially store with just font size and characters position applied. Origin is the first
         * character base point.
         */ var offset;
                if (this.prevChar !== null && this.prevFont === shape.font) {
                    offset = this.prevFont.GetKerning(this.prevChar, char);
                } else {
                    offset = 0;
                }
                var x = this.curX + offset * this.fontSize;
                var vertices;
                if (shape.vertices) {
                    vertices = shape.GetVertices({
                        x: x,
                        y: 0
                    }, this.fontSize);
                    var xMin = x + shape.bounds.xMin * this.fontSize;
                    var xMax = x + shape.bounds.xMax * this.fontSize;
                    var yMin = shape.bounds.yMin * this.fontSize;
                    var yMax = shape.bounds.yMax * this.fontSize;
                    /* Leading/trailing spaces not accounted intentionally now. */ if (this.bounds === null) {
                        this.bounds = {
                            xMin: xMin,
                            xMax: xMax,
                            yMin: yMin,
                            yMax: yMax
                        };
                    } else {
                        if (xMin < this.bounds.xMin) {
                            this.bounds.xMin = xMin;
                        }
                        if (yMin < this.bounds.yMin) {
                            this.bounds.yMin = yMin;
                        }
                        if (xMax > this.bounds.xMax) {
                            this.bounds.xMax = xMax;
                        }
                        if (yMax > this.bounds.yMax) {
                            this.bounds.yMax = yMax;
                        }
                    }
                } else {
                    vertices = null;
                }
                this.curX = x + shape.advance * this.fontSize;
                this.glyphs.push({
                    shape: shape,
                    vertices: vertices
                });
                this.prevChar = char;
                this.prevFont = shape.font;
            }
        },
        {
            key: "GetCurrentPosition",
            value: function GetCurrentPosition() {
                return this.curX;
            }
        },
        {
            key: "Render",
            value: /**
     * @param startPos {{x,y}} TEXT group first alignment point.
     * @param endPos {?{x,y}} TEXT group second alignment point.
     * @param rotation {?number} Rotation attribute, deg.
     * @param widthFactor {?number} Relative X scale factor (group 41).
     * @param hAlign {?number} Horizontal text justification type code (group 72).
     * @param vAlign {?number} Vertical text justification type code (group 73).
     * @param color {number}
     * @param layer {?string}
     * @return {Generator<Entity>} Rendering entities. Currently just indexed triangles for each
     *  glyph.
     */ function Render(startPos, endPos, rotation, widthFactor, hAlign, vAlign, color, layer) {
                var _this, origin, scale, insertionPos, GetFitScale, GetFitRotation, f, transform, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, glyph, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, v, err;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _this = this;
                            if (this.bounds === null) {
                                return [
                                    2
                                ];
                            }
                            endPos = endPos !== null && endPos !== void 0 ? endPos : startPos;
                            if (rotation) {
                                rotation *= -Math.PI / 180;
                            } else {
                                rotation = 0;
                            }
                            widthFactor = widthFactor !== null && widthFactor !== void 0 ? widthFactor : 1;
                            hAlign = hAlign !== null && hAlign !== void 0 ? hAlign : HAlign.LEFT;
                            vAlign = vAlign !== null && vAlign !== void 0 ? vAlign : VAlign.BASELINE;
                            origin = new _three.Vector2();
                            scale = new _three.Vector2(widthFactor, 1);
                            insertionPos = hAlign === HAlign.LEFT && vAlign === VAlign.BASELINE || hAlign === HAlign.FIT || hAlign === HAlign.ALIGNED ? new _three.Vector2(startPos.x, startPos.y) : new _three.Vector2(endPos.x, endPos.y);
                            GetFitScale = function() {
                                var width = endPos.x - startPos.x;
                                if (width < Number.MIN_VALUE * 2) {
                                    return widthFactor;
                                }
                                return width / (_this.bounds.xMax - _this.bounds.xMin);
                            };
                            GetFitRotation = function() {
                                return -Math.atan2(endPos.y - startPos.y, endPos.x - startPos.x);
                            };
                            switch(hAlign){
                                case HAlign.LEFT:
                                    origin.x = this.bounds.xMin;
                                    break;
                                case HAlign.CENTER:
                                    origin.x = (this.bounds.xMax - this.bounds.xMin) / 2;
                                    break;
                                case HAlign.RIGHT:
                                    origin.x = this.bounds.xMax;
                                    break;
                                case HAlign.MIDDLE:
                                    origin.x = (this.bounds.xMax - this.bounds.xMin) / 2;
                                    origin.y = (this.bounds.yMax - this.bounds.yMin) / 2;
                                    break;
                                case HAlign.ALIGNED:
                                    {
                                        f = GetFitScale();
                                        scale.x = f;
                                        scale.y = f;
                                        rotation = GetFitRotation();
                                        break;
                                    }
                                case HAlign.FIT:
                                    scale.x = GetFitScale();
                                    rotation = GetFitRotation();
                                    break;
                                default:
                                    console.warn("Unrecognized hAlign value: " + hAlign);
                            }
                            switch(vAlign){
                                case VAlign.BASELINE:
                                    break;
                                case VAlign.BOTTOM:
                                    origin.y = this.bounds.yMin;
                                    break;
                                case VAlign.MIDDLE:
                                    origin.y = (this.bounds.yMax - this.bounds.yMin) / 2;
                                    break;
                                case VAlign.TOP:
                                    origin.y = this.bounds.yMax;
                                    break;
                                default:
                                    console.warn("Unrecognized vAlign value: " + vAlign);
                            }
                            transform = new _three.Matrix3().translate(-origin.x, -origin.y).scale(scale.x, scale.y).rotate(rotation).translate(insertionPos.x, insertionPos.y);
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                6,
                                7,
                                8
                            ]);
                            _iterator = this.glyphs[Symbol.iterator]();
                            _state.label = 2;
                        case 2:
                            if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                3,
                                5
                            ];
                            glyph = _step.value;
                            if (!glyph.vertices) return [
                                3,
                                4
                            ];
                            _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                            try {
                                for(_iterator1 = glyph.vertices[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                    v = _step1.value;
                                    v.applyMatrix3(transform);
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
                            return [
                                4,
                                new _dxfScene.Entity({
                                    type: _dxfScene.Entity.Type.TRIANGLES,
                                    vertices: glyph.vertices,
                                    indices: glyph.shape.indices,
                                    layer: layer,
                                    color: color
                                })
                            ];
                        case 3:
                            _state.sent();
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
                            return [
                                2
                            ];
                    }
                });
            }
        }
    ]);
    return TextBlock;
}();
