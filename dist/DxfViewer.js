"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DxfViewer", {
    enumerable: true,
    get: function() {
        return DxfViewer;
    }
});
var _three = /*#__PURE__*/ _interopRequireWildcard(require("three"));
var _batchingKey = require("./BatchingKey");
var _dxfWorker = require("./DxfWorker");
var _materialKey = require("./MaterialKey");
var _dxfScene = require("./DxfScene");
var _orbitControls = require("./OrbitControls");
var _rbtree = require("./RBTree");
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
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
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
/** Level in "message" events. */ var MessageLevel = Object.freeze({
    INFO: "info",
    WARN: "warn",
    ERROR: "error"
});
var DxfViewer = /*#__PURE__*/ function() {
    "use strict";
    function DxfViewer(canvas) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        var _this = this;
        _classCallCheck(this, DxfViewer);
        this.options = Object.create(DxfViewer.DefaultOptions);
        this.canvas = canvas;
        this.context = this.canvas.getContext("webgl", {
            premultipliedAlpha: false
        });
        if (options) {
            Object.assign(this.options, options);
        }
        options = this.options;
        this.clearColor = this.options.clearColor.getHex();
        this.scene = new _three.Scene();
        try {
            this.renderer = new _three.WebGLRenderer({
                canvas: this.canvas,
                context: this.context,
                alpha: options.canvasAlpha,
                premultipliedAlpha: options.canvasPremultipliedAlpha,
                antialias: options.antialias,
                depth: false
            });
        } catch (e) {
            console.log("Failed to create renderer: " + e);
            this.renderer = null;
            return;
        }
        var renderer = this.renderer;
        renderer.setPixelRatio(window.devicePixelRatio);
        var camera = this.camera = new _three.OrthographicCamera(-1, 1, 1, -1, 0.1, 2);
        camera.position.z = 1;
        camera.position.x = 0;
        camera.position.y = 0;
        this.simpleColorMaterial = [];
        this.simplePointMaterial = [];
        for(var i = 0; i < InstanceType.MAX; i++){
            this.simpleColorMaterial[i] = this._CreateSimpleColorMaterial(i);
            this.simplePointMaterial[i] = this._CreateSimplePointMaterial(i);
        }
        renderer.setClearColor(options.clearColor, options.clearAlpha);
        this.canvasWidth = options.canvasWidth;
        this.canvasHeight = options.canvasHeight;
        this.resizeObserver = null;
        // renderer.setSize(this.canvasWidth, this.canvasHeight)
        if (options.autoResize) {
            this.canvas.style.position = "absolute";
            this.resizeObserver = new ResizeObserver(function(entries) {
                return _this._OnResize(entries[0]);
            });
            this.resizeObserver.observe(canvas);
        }
        this.canvas.addEventListener("pointerdown", this._OnPointerEvent.bind(this));
        this.canvas.addEventListener("pointerup", this._OnPointerEvent.bind(this));
        this.Render();
        /* Indexed by MaterialKey, value is {key, material}. */ this.materials = new _rbtree.RBTree(function(m1, m2) {
            return m1.key.Compare(m2.key);
        });
        /* Indexed by layer name, value is Layer instance. */ this.layers = new Map();
        /* Indexed by block name, value is Block instance. */ this.blocks = new Map();
        /** Set during data loading. */ this.worker = null;
    }
    _createClass(DxfViewer, [
        {
            /** @return {boolean} True if renderer exists. May be false in case when WebGL context is lost
     * (e.g. after wake up from sleep). In such case page should be reloaded.
     */ key: "HasRenderer",
            value: function HasRenderer() {
                return Boolean(this.renderer);
            }
        },
        {
            key: "GetCanvas",
            value: function GetCanvas() {
                return this.canvas;
            }
        },
        {
            key: "SetSize",
            value: function SetSize(width, height) {
                this._EnsureRenderer();
                var hScale = width / this.canvasWidth;
                var vScale = height / this.canvasHeight;
                var cam = this.camera;
                var centerX = (cam.left + cam.right) / 2;
                var centerY = (cam.bottom + cam.top) / 2;
                var camWidth = cam.right - cam.left;
                var camHeight = cam.top - cam.bottom;
                cam.left = centerX - hScale * camWidth / 2;
                cam.right = centerX + hScale * camWidth / 2;
                cam.bottom = centerY - vScale * camHeight / 2;
                cam.top = centerY + vScale * camHeight / 2;
                cam.updateProjectionMatrix();
                this.canvasWidth = width;
                this.canvasHeight = height;
                this.renderer.setSize(width, height);
                if (this.controls) {
                    this.controls.update();
                }
                this._Emit("resized", {
                    width: width,
                    height: height
                });
                this._Emit("viewChanged");
                this.Render();
            }
        },
        {
            key: "Load",
            value: /** Load DXF into the viewer. Old content is discarded, state is reset.
     * @param url {string} DXF file URL.
     * @param fonts {?string[]} List of font URLs. Files should have typeface.js format. Fonts are
     *  used in the specified order, each one is checked until necessary glyph is found. Text is not
     *  rendered if fonts are not specified.
     * @param progressCbk {?Function} (phase, processedSize, totalSize)
     *  Possible phase values:
     *  * "font"
     *  * "fetch"
     *  * "parse"
     *  * "prepare"
     * @param workerFactory {?Function} Factory for worker creation. The worker script should
     *  invoke DxfViewer.SetupWorker() function.
     */ function Load(param) {
                var url = param.url, _param_fonts = param.fonts, fonts = _param_fonts === void 0 ? null : _param_fonts, _param_progressCbk = param.progressCbk, progressCbk = _param_progressCbk === void 0 ? null : _param_progressCbk, _param_workerFactory = param.workerFactory, workerFactory = _param_workerFactory === void 0 ? null : _param_workerFactory;
                var _this = this;
                return _asyncToGenerator(function() {
                    var scene, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, layer, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, batch, block, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, batch1;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (url === null || url === undefined) {
                                    throw new Error("`url` parameter is not specified");
                                }
                                _this._EnsureRenderer();
                                _this.Clear();
                                _this.worker = new _dxfWorker.DxfWorker(workerFactory ? workerFactory() : null);
                                return [
                                    4,
                                    _this.worker.Load(url, fonts, _this.options, progressCbk)
                                ];
                            case 1:
                                scene = _state.sent();
                                return [
                                    4,
                                    _this.worker.Destroy()
                                ];
                            case 2:
                                _state.sent();
                                _this.worker = null;
                                _this.origin = scene.origin;
                                _this.bounds = scene.bounds;
                                _this.hasMissingChars = scene.hasMissingChars;
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = scene.layers[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        layer = _step.value;
                                        _this.layers.set(layer.name, new Layer(layer.name, layer.color));
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
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    /* Load all blocks on the first pass. */ for(_iterator1 = scene.batches[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        batch = _step1.value;
                                        if (batch.key.blockName !== null && batch.key.geometryType !== _batchingKey.BatchingKey.GeometryType.BLOCK_INSTANCE && batch.key.geometryType !== _batchingKey.BatchingKey.GeometryType.POINT_INSTANCE) {
                                            block = _this.blocks.get(batch.key.blockName);
                                            if (!block) {
                                                block = new Block();
                                                _this.blocks.set(batch.key.blockName, block);
                                            }
                                            block.PushBatch(new Batch(_this, scene, batch));
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
                                console.log("DXF scene:\n                     ".concat(scene.batches.length, " batches,\n                     ").concat(_this.layers.size, " layers,\n                     ").concat(_this.blocks.size, " blocks,\n                     vertices ").concat(scene.vertices.byteLength, " B,\n                     indices ").concat(scene.indices.byteLength, " B\n                     transforms ").concat(scene.transforms.byteLength, " B"));
                                _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                                try {
                                    /* Instantiate all entities. */ for(_iterator2 = scene.batches[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                        batch1 = _step2.value;
                                        _this._LoadBatch(scene, batch1);
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
                                _this._Emit("loaded");
                                if (scene.bounds) {
                                    _this.FitView(scene.bounds.minX - scene.origin.x, scene.bounds.maxX - scene.origin.x, scene.bounds.minY - scene.origin.y, scene.bounds.maxY - scene.origin.y);
                                } else {
                                    _this._Message("Empty document", MessageLevel.WARN);
                                }
                                if (_this.hasMissingChars) {
                                    _this._Message("Some characters cannot be properly displayed due to missing fonts", MessageLevel.WARN);
                                }
                                _this._CreateControls();
                                _this.Render();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "Render",
            value: function Render() {
                this._EnsureRenderer();
                this.renderer.render(this.scene, this.camera);
            }
        },
        {
            /** @return {Iterable<{name:String, color:number}>} List of layer names. */ key: "GetLayers",
            value: function GetLayers() {
                var result = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.layers.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var lyr = _step.value;
                        result.push({
                            name: lyr.name,
                            color: this._TransformColor(lyr.color)
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
                return result;
            }
        },
        {
            key: "ShowLayer",
            value: function ShowLayer(name, show) {
                this._EnsureRenderer();
                var layer = this.layers.get(name);
                if (!layer) {
                    return;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = layer.objects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var obj = _step.value;
                        obj.visible = show;
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
                this.Render();
            }
        },
        {
            /** Reset the viewer state. */ key: "Clear",
            value: function Clear() {
                this._EnsureRenderer();
                if (this.worker) {
                    this.worker.Destroy(true);
                    this.worker = null;
                }
                if (this.controls) {
                    this.controls.dispose();
                    this.controls = null;
                }
                this.scene.clear();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.layers.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var layer = _step.value;
                        layer.Dispose();
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
                this.layers.clear();
                this.blocks.clear();
                this.materials.each(function(e) {
                    return e.material.dispose();
                });
                this.materials.clear();
                this.SetView({
                    x: 0,
                    y: 0
                }, 2);
                this._Emit("cleared");
                this.Render();
            }
        },
        {
            /** Free all resources. The viewer object should not be used after this method was called. */ key: "Destroy",
            value: function Destroy() {
                if (!this.HasRenderer()) {
                    return;
                }
                if (this.resizeObserver) {
                    this.resizeObserver.disconnect();
                }
                this.Clear();
                this._Emit("destroyed");
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.simplePointMaterial[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var m = _step.value;
                        m.dispose();
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
                    for(var _iterator1 = this.simpleColorMaterial[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var m1 = _step1.value;
                        m1.dispose();
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
                this.simplePointMaterial = null;
                this.simpleColorMaterial = null;
                // this.renderer.dispose()
                this.renderer = null;
            }
        },
        {
            key: "SetView",
            value: function SetView(center, width) {
                var aspect = this.canvasWidth / this.canvasHeight;
                var height = width / aspect;
                var cam = this.camera;
                cam.left = -width / 2;
                cam.right = width / 2;
                cam.top = height / 2;
                cam.bottom = -height / 2;
                cam.zoom = 1;
                cam.position.set(center.x, center.y, 1);
                cam.rotation.set(0, 0, 0);
                cam.updateMatrix();
                cam.updateProjectionMatrix();
                this._Emit("viewChanged");
            }
        },
        {
            /** Set view to fit the specified bounds. */ key: "FitView",
            value: function FitView(minX, maxX, minY, maxY) {
                var padding = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0.1;
                var aspect = this.canvasWidth / this.canvasHeight;
                var width = maxX - minX;
                var height = maxY - minY;
                var center = {
                    x: minX + width / 2,
                    y: minY + height / 2
                };
                if (height * aspect > width) {
                    width = height * aspect;
                }
                if (width <= Number.MIN_VALUE * 2) {
                    width = 1;
                }
                this.SetView(center, width * (1 + padding));
            }
        },
        {
            /** @return {Scene} three.js scene for the viewer. Can be used to add custom entities on the
     *      scene. Remember to apply scene origin available via GetOrigin() method.
     */ key: "GetScene",
            value: function GetScene() {
                return this.scene;
            }
        },
        {
            /** @return {Camera} three.js camera for the viewer. */ key: "GetCamera",
            value: function GetCamera() {
                return this.camera;
            }
        },
        {
            /** @return {Vector2} Scene origin in global drawing coordinates. */ key: "GetOrigin",
            value: function GetOrigin() {
                return this.origin;
            }
        },
        {
            /** Subscribe to the specified event. The following events are defined:
     *  * "loaded" - new scene loaded.
     *  * "cleared" - current scene cleared.
     *  * "destroyed" - viewer instance destroyed.
     *  * "resized" - viewport size changed. Details: {width, height}
     *  * "pointerdown" - Details: {domEvent, position:{x,y}}, position is in scene coordinates.
     *  * "pointerup"
     *  * "viewChanged"
     *  * "message" - Some message from the viewer. {message: string, level: string}.
     *
     * @param eventName {string}
     * @param eventHandler {function} Accepts event object.
     */ key: "Subscribe",
            value: function Subscribe(eventName, eventHandler) {
                this._EnsureRenderer();
                this.canvas.addEventListener(EVENT_NAME_PREFIX + eventName, eventHandler);
            }
        },
        {
            /** Unsubscribe from previously subscribed event. The arguments should match previous
     * Subscribe() call.
     *
     * @param eventName {string}
     * @param eventHandler {function}
     */ key: "Unsubscribe",
            value: function Unsubscribe(eventName, eventHandler) {
                this._EnsureRenderer();
                this.canvas.removeEventListener(EVENT_NAME_PREFIX + eventName, eventHandler);
            }
        },
        {
            // /////////////////////////////////////////////////////////////////////////////////////////////
            key: "_EnsureRenderer",
            value: function _EnsureRenderer() {
                if (!this.HasRenderer()) {
                    throw new Error("WebGL renderer not available. " + "Probable WebGL context loss, try refreshing the page.");
                }
            }
        },
        {
            key: "_CreateControls",
            value: function _CreateControls() {
                var _this = this;
                var controls = this.controls = new _orbitControls.OrbitControls(this.camera, this.canvas);
                controls.enableRotate = false;
                controls.mouseButtons = {
                    LEFT: _three.MOUSE.PAN
                };
                controls.zoomSpeed = 3;
                controls.target = new _three.Vector3(this.camera.position.x, this.camera.position.y, 0);
                controls.addEventListener("change", function() {
                    _this._Emit("viewChanged");
                    _this.Render();
                });
                controls.update();
            }
        },
        {
            key: "_Emit",
            value: function _Emit(eventName) {
                var data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.canvas.dispatchEvent(new Event(EVENT_NAME_PREFIX + eventName, {
                    detail: data
                }));
            }
        },
        {
            key: "_Message",
            value: function _Message(message) {
                var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : MessageLevel.INFO;
                this._Emit("message", {
                    message: message,
                    level: level
                });
            }
        },
        {
            key: "_OnPointerEvent",
            value: function _OnPointerEvent(e) {
                var canvasRect = e.target.getBoundingClientRect();
                var canvasCoord = {
                    x: e.clientX - canvasRect.left,
                    y: e.clientY - canvasRect.top
                };
                this._Emit(e.type, {
                    domEvent: e,
                    canvasCoord: canvasCoord,
                    position: this._CanvasToSceneCoord(canvasCoord.x, canvasCoord.y)
                });
            }
        },
        {
            /** @return {{x,y}} Scene coordinate corresponding to the specified canvas pixel coordinates. */ key: "_CanvasToSceneCoord",
            value: function _CanvasToSceneCoord(x, y) {
                var v = new _three.Vector3(x * 2 / this.canvasWidth - 1, -y * 2 / this.canvasHeight + 1, 1).unproject(this.camera);
                return {
                    x: v.x,
                    y: v.y
                };
            }
        },
        {
            key: "_OnResize",
            value: function _OnResize(entry) {
                this.SetSize(Math.floor(entry.contentRect.width), Math.floor(entry.contentRect.height));
            }
        },
        {
            key: "_LoadBatch",
            value: function _LoadBatch(scene, batch) {
                if (batch.key.blockName !== null && batch.key.geometryType !== _batchingKey.BatchingKey.GeometryType.BLOCK_INSTANCE && batch.key.geometryType !== _batchingKey.BatchingKey.GeometryType.POINT_INSTANCE) {
                    /* Block definition. */ return;
                }
                var objects = new Batch(this, scene, batch).CreateObjects();
                var layer = this.layers.get(batch.key.layerName);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = objects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var obj = _step.value;
                        this.scene.add(obj);
                        if (layer) {
                            layer.PushObject(obj);
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
            key: "_GetSimpleColorMaterial",
            value: function _GetSimpleColorMaterial(color) {
                var instanceType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : InstanceType.NONE;
                var key = new _materialKey.MaterialKey(instanceType, null, color, 0);
                var entry = this.materials.find({
                    key: key
                });
                if (entry !== null) {
                    return entry.material;
                }
                entry = {
                    key: key,
                    material: this._CreateSimpleColorMaterialInstance(color, instanceType)
                };
                this.materials.insert(entry);
                return entry.material;
            }
        },
        {
            key: "_CreateSimpleColorMaterial",
            value: function _CreateSimpleColorMaterial() {
                var instanceType = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : InstanceType.NONE;
                var shaders = this._GenerateShaders(instanceType, false);
                return new _three.RawShaderMaterial({
                    uniforms: {
                        color: {
                            value: new _three.Color(0xff00ff)
                        }
                    },
                    vertexShader: shaders.vertex,
                    fragmentShader: shaders.fragment,
                    depthTest: false,
                    depthWrite: false,
                    glslVersion: _three.GLSL1,
                    side: _three.DoubleSide
                });
            }
        },
        {
            /** @param color {number} Color RGB numeric value.
     * @param instanceType {number}
     */ key: "_CreateSimpleColorMaterialInstance",
            value: function _CreateSimpleColorMaterialInstance(color) {
                var instanceType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : InstanceType.NONE;
                var src = this.simpleColorMaterial[instanceType];
                /* Should reuse compiled shaders. */ var m = src.clone();
                m.uniforms.color = {
                    value: new _three.Color(color)
                };
                return m;
            }
        },
        {
            key: "_GetSimplePointMaterial",
            value: function _GetSimplePointMaterial(color) {
                var instanceType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : InstanceType.NONE;
                var key = new _materialKey.MaterialKey(instanceType, _batchingKey.BatchingKey.GeometryType.POINTS, color, 0);
                var entry = this.materials.find({
                    key: key
                });
                if (entry !== null) {
                    return entry.material;
                }
                entry = {
                    key: key,
                    material: this._CreateSimplePointMaterialInstance(color, this.options.pointSize, instanceType)
                };
                this.materials.insert(entry);
                return entry.material;
            }
        },
        {
            key: "_CreateSimplePointMaterial",
            value: function _CreateSimplePointMaterial() {
                var instanceType = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : InstanceType.NONE;
                var shaders = this._GenerateShaders(instanceType, true);
                return new _three.RawShaderMaterial({
                    uniforms: {
                        color: {
                            value: new _three.Color(0xff00ff)
                        },
                        pointSize: {
                            value: 2
                        }
                    },
                    vertexShader: shaders.vertex,
                    fragmentShader: shaders.fragment,
                    depthTest: false,
                    depthWrite: false,
                    glslVersion: _three.GLSL1
                });
            }
        },
        {
            /** @param color {number} Color RGB numeric value.
     * @param size {number} Rasterized point size in pixels.
     * @param instanceType {number}
     */ key: "_CreateSimplePointMaterialInstance",
            value: function _CreateSimplePointMaterialInstance(color) {
                var size = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2, instanceType = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : InstanceType.NONE;
                var src = this.simplePointMaterial[instanceType];
                /* Should reuse compiled shaders. */ var m = src.clone();
                m.uniforms.color = {
                    value: new _three.Color(color)
                };
                m.uniforms.size = {
                    value: size
                };
                return m;
            }
        },
        {
            key: "_GenerateShaders",
            value: function _GenerateShaders(instanceType, pointSize) {
                var fullInstanceAttr = instanceType === InstanceType.FULL ? "\n            /* First row. */\n            attribute vec3 instanceTransform0;\n            /* Second row. */\n            attribute vec3 instanceTransform1;\n            " : "";
                var fullInstanceTransform = instanceType === InstanceType.FULL ? "\n            pos.xy = mat2(instanceTransform0[0], instanceTransform1[0],\n                          instanceTransform0[1], instanceTransform1[1]) * pos.xy +\n                     vec2(instanceTransform0[2], instanceTransform1[2]);\n            " : "";
                var pointInstanceAttr = instanceType === InstanceType.POINT ? "\n            attribute vec2 instanceTransform;\n            " : "";
                var pointInstanceTransform = instanceType === InstanceType.POINT ? "\n            pos.xy += instanceTransform;\n            " : "";
                var pointSizeUniform = pointSize ? "uniform float pointSize;" : "";
                var pointSizeAssigment = pointSize ? "gl_PointSize = pointSize;" : "";
                return {
                    vertex: "\n\n            precision highp float;\n            precision highp int;\n            attribute vec2 position;\n            ".concat(fullInstanceAttr, "\n            ").concat(pointInstanceAttr, "\n            uniform mat4 modelViewMatrix;\n            uniform mat4 projectionMatrix;\n            ").concat(pointSizeUniform, "\n\n            void main() {\n                vec4 pos = vec4(position, 0.0, 1.0);\n                ").concat(fullInstanceTransform, "\n                ").concat(pointInstanceTransform, "\n                gl_Position = projectionMatrix * modelViewMatrix * pos;\n                ").concat(pointSizeAssigment, "\n            }\n            "),
                    fragment: "\n\n            precision highp float;\n            precision highp int;\n            uniform vec3 color;\n\n            void main() {\n                gl_FragColor = vec4(color, 1.0);\n            }\n            "
                };
            }
        },
        {
            /** Ensure the color is contrast enough with current background color.
     * @param color {number} RGB value.
     * @return {number} RGB value to use for rendering.
     */ key: "_TransformColor",
            value: function _TransformColor(color) {
                if (!this.options.colorCorrection && !this.options.blackWhiteInversion) {
                    return color;
                }
                /* Just black and white inversion. */ var bkgLum = Luminance(this.clearColor);
                if (color === 0xffffff && bkgLum >= 0.8) {
                    return 0;
                }
                if (color === 0 && bkgLum <= 0.2) {
                    return 0xffffff;
                }
                if (!this.options.colorCorrection) {
                    return color;
                }
                var fgLum = Luminance(color);
                var MIN_TARGET_RATIO = 1.5;
                var contrast = ContrastRatio(color, this.clearColor);
                var diff = contrast >= 1 ? contrast : 1 / contrast;
                if (diff < MIN_TARGET_RATIO) {
                    var targetLum;
                    if (bkgLum > 0.5) {
                        targetLum = bkgLum / 2;
                    } else {
                        targetLum = bkgLum * 2;
                    }
                    if (targetLum > fgLum) {
                        color = Lighten(color, targetLum / fgLum);
                    } else {
                        color = Darken(color, fgLum / targetLum);
                    }
                }
                return color;
            }
        }
    ]);
    return DxfViewer;
}();
DxfViewer.MessageLevel = MessageLevel;
DxfViewer.DefaultOptions = {
    canvasWidth: 400,
    canvasHeight: 300,
    /** Automatically resize canvas when the container is resized. This options
     *  utilizes ResizeObserver API which is still not fully standardized. The specified canvas size
     *  is ignored if the option is enabled.
     */ autoResize: false,
    /** Frame buffer clear color. */ clearColor: new _three.Color("#000"),
    /** Frame buffer clear color alpha value. */ clearAlpha: 1.0,
    /** Use alpha channel in a framebuffer. */ canvasAlpha: false,
    /** Assume premultiplied alpha in a framebuffer. */ canvasPremultipliedAlpha: true,
    /** Use antialiasing. May degrade performance on poor hardware. */ antialias: true,
    /** Correct entities colors to ensure that they are always visible with the current background
     * color.
     */ colorCorrection: false,
    /** Simpler version of colorCorrection - just invert pure white or black entities if they are
     * invisible on current background color.
     */ blackWhiteInversion: true,
    /** Size in pixels for rasterized points (dot mark). */ pointSize: 2,
    /** Scene generation options. */ sceneOptions: _dxfScene.DxfScene.DefaultOptions
};
DxfViewer.SetupWorker = function() {
    new _dxfWorker.DxfWorker(self, true);
};
var InstanceType = Object.freeze({
    /** Not instanced. */ NONE: 0,
    /** Full affine transform per instance. */ FULL: 1,
    /** Point instances, 2D-translation vector per instance. */ POINT: 2,
    /** Number of types. */ MAX: 3
});
var Batch = /*#__PURE__*/ function() {
    "use strict";
    function Batch(viewer, scene, batch) {
        _classCallCheck(this, Batch);
        this.viewer = viewer;
        this.key = batch.key;
        if (batch.hasOwnProperty("verticesOffset")) {
            var verticesArray = new Float32Array(scene.vertices, batch.verticesOffset * Float32Array.BYTES_PER_ELEMENT, batch.verticesSize);
            if (this.key.geometryType !== _batchingKey.BatchingKey.GeometryType.POINT_INSTANCE || scene.pointShapeHasDot) {
                this.vertices = new _three.BufferAttribute(verticesArray, 2);
            }
            if (this.key.geometryType === _batchingKey.BatchingKey.GeometryType.POINT_INSTANCE) {
                this.transforms = new _three.InstancedBufferAttribute(verticesArray, 2);
            }
        }
        if (batch.hasOwnProperty("chunks")) {
            this.chunks = [];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = batch.chunks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var rawChunk = _step.value;
                    var verticesArray1 = new Float32Array(scene.vertices, rawChunk.verticesOffset * Float32Array.BYTES_PER_ELEMENT, rawChunk.verticesSize);
                    var indicesArray = new Uint16Array(scene.indices, rawChunk.indicesOffset * Uint16Array.BYTES_PER_ELEMENT, rawChunk.indicesSize);
                    this.chunks.push({
                        vertices: new _three.BufferAttribute(verticesArray1, 2),
                        indices: new _three.BufferAttribute(indicesArray, 1)
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
        }
        if (batch.hasOwnProperty("transformsOffset")) {
            var transformsArray = new Float32Array(scene.transforms, batch.transformsOffset * Float32Array.BYTES_PER_ELEMENT, batch.transformsSize);
            /* Each transform is 3x2 matrix which is split into two 3D vectors which will occupy two
             * attribute slots.
             */ var buf = new _three.InstancedInterleavedBuffer(transformsArray, 6);
            this.transforms0 = new _three.InterleavedBufferAttribute(buf, 3, 0);
            this.transforms1 = new _three.InterleavedBufferAttribute(buf, 3, 3);
        }
        if (this.key.geometryType === _batchingKey.BatchingKey.GeometryType.BLOCK_INSTANCE || this.key.geometryType === _batchingKey.BatchingKey.GeometryType.POINT_INSTANCE) {
            var layer = this.viewer.layers.get(this.key.layerName);
            if (layer) {
                this.layerColor = layer.color;
            } else {
                this.layerColor = 0;
            }
        }
    }
    _createClass(Batch, [
        {
            key: "GetInstanceType",
            value: function GetInstanceType() {
                switch(this.key.geometryType){
                    case _batchingKey.BatchingKey.GeometryType.BLOCK_INSTANCE:
                        return InstanceType.FULL;
                    case _batchingKey.BatchingKey.GeometryType.POINT_INSTANCE:
                        return InstanceType.POINT;
                    default:
                        return InstanceType.NONE;
                }
            }
        },
        {
            key: "CreateObjects",
            value: /** Create scene objects corresponding to batch data.
     * @param instanceBatch {?Batch} Batch with instance transform. Null for non-instanced object.
     */ function CreateObjects() {
                var instanceBatch;
                var _arguments = arguments;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            instanceBatch = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : null;
                            if (!(this.key.geometryType === _batchingKey.BatchingKey.GeometryType.BLOCK_INSTANCE || this.key.geometryType === _batchingKey.BatchingKey.GeometryType.POINT_INSTANCE)) return [
                                3,
                                2
                            ];
                            if (instanceBatch !== null) {
                                throw new Error("Unexpected instance batch specified for instance batch");
                            }
                            return [
                                5,
                                __values(this._CreateBlockInstanceObjects())
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                        case 2:
                            return [
                                5,
                                __values(this._CreateObjects(instanceBatch))
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
            key: "_CreateObjects",
            value: function _CreateObjects(instanceBatch) {
                var CreateObject, color, materialFactory, _instanceBatch_GetInstanceType, material, objConstructor, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, chunk, err;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            CreateObject = function CreateObject(vertices, indices) {
                                var geometry = instanceBatch ? new _three.InstancedBufferGeometry() : new _three.BufferGeometry();
                                geometry.setAttribute("position", vertices);
                                instanceBatch === null || instanceBatch === void 0 ? void 0 : instanceBatch._SetInstanceTransformAttribute(geometry);
                                if (indices) {
                                    geometry.setIndex(indices);
                                }
                                var obj = new objConstructor(geometry, material);
                                obj.frustumCulled = false;
                                obj.matrixAutoUpdate = false;
                                return obj;
                            };
                            color = instanceBatch ? instanceBatch._GetInstanceColor(this.key.color) : this.key.color;
                            materialFactory = this.key.geometryType === _batchingKey.BatchingKey.GeometryType.POINTS || this.key.geometryType === _batchingKey.BatchingKey.GeometryType.POINT_INSTANCE ? this.viewer._GetSimplePointMaterial : this.viewer._GetSimpleColorMaterial;
                            material = materialFactory.call(this.viewer, this.viewer._TransformColor(color), (_instanceBatch_GetInstanceType = instanceBatch === null || instanceBatch === void 0 ? void 0 : instanceBatch.GetInstanceType()) !== null && _instanceBatch_GetInstanceType !== void 0 ? _instanceBatch_GetInstanceType : InstanceType.NONE);
                            switch(this.key.geometryType){
                                case _batchingKey.BatchingKey.GeometryType.POINTS:
                                /* This method also called for creating dots for shaped point instances. */ case _batchingKey.BatchingKey.GeometryType.POINT_INSTANCE:
                                    objConstructor = _three.Points;
                                    break;
                                case _batchingKey.BatchingKey.GeometryType.LINES:
                                case _batchingKey.BatchingKey.GeometryType.INDEXED_LINES:
                                    objConstructor = _three.LineSegments;
                                    break;
                                case _batchingKey.BatchingKey.GeometryType.TRIANGLES:
                                case _batchingKey.BatchingKey.GeometryType.INDEXED_TRIANGLES:
                                    objConstructor = _three.Mesh;
                                    break;
                                default:
                                    throw new Error("Unexpected geometry type:" + this.key.geometryType);
                            }
                            if (!this.chunks) return [
                                3,
                                9
                            ];
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                6,
                                7,
                                8
                            ]);
                            _iterator = this.chunks[Symbol.iterator]();
                            _state.label = 2;
                        case 2:
                            if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                3,
                                5
                            ];
                            chunk = _step.value;
                            return [
                                4,
                                CreateObject(chunk.vertices, chunk.indices)
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
                                3,
                                11
                            ];
                        case 9:
                            return [
                                4,
                                CreateObject(this.vertices)
                            ];
                        case 10:
                            _state.sent();
                            _state.label = 11;
                        case 11:
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            /**
     * @param geometry {InstancedBufferGeometry}
     */ key: "_SetInstanceTransformAttribute",
            value: function _SetInstanceTransformAttribute(geometry) {
                if (!geometry.isInstancedBufferGeometry) {
                    throw new Error("InstancedBufferGeometry expected");
                }
                if (this.key.geometryType === _batchingKey.BatchingKey.GeometryType.POINT_INSTANCE) {
                    geometry.setAttribute("instanceTransform", this.transforms);
                } else {
                    geometry.setAttribute("instanceTransform0", this.transforms0);
                    geometry.setAttribute("instanceTransform1", this.transforms1);
                }
            }
        },
        {
            key: "_CreateBlockInstanceObjects",
            value: function _CreateBlockInstanceObjects() {
                var block, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, batch, err;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            block = this.viewer.blocks.get(this.key.blockName);
                            if (!block) {
                                return [
                                    2
                                ];
                            }
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                6,
                                7,
                                8
                            ]);
                            _iterator = block.batches[Symbol.iterator]();
                            _state.label = 2;
                        case 2:
                            if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                3,
                                5
                            ];
                            batch = _step.value;
                            return [
                                5,
                                __values(batch.CreateObjects(this))
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
                            if (!this.hasOwnProperty("vertices")) return [
                                3,
                                10
                            ];
                            /* Dots for point shapes. */ return [
                                5,
                                __values(this._CreateObjects())
                            ];
                        case 9:
                            _state.sent();
                            _state.label = 10;
                        case 10:
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            /**
     * @param defColor {number} Color value for block definition batch.
     * @return {number} RGB color value for a block instance.
     */ key: "_GetInstanceColor",
            value: function _GetInstanceColor(defColor) {
                if (defColor === _dxfScene.ColorCode.BY_BLOCK) {
                    return this.key.color;
                } else if (defColor === _dxfScene.ColorCode.BY_LAYER) {
                    return this.layerColor;
                } else {
                    return defColor;
                }
            }
        }
    ]);
    return Batch;
}();
var Layer = /*#__PURE__*/ function() {
    "use strict";
    function Layer(name, color) {
        _classCallCheck(this, Layer);
        this.name = name;
        this.color = color;
        this.objects = [];
    }
    _createClass(Layer, [
        {
            key: "PushObject",
            value: function PushObject(obj) {
                this.objects.push(obj);
            }
        },
        {
            key: "Dispose",
            value: function Dispose() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.objects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var obj = _step.value;
                        obj.geometry.dispose();
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
                this.objects = null;
            }
        }
    ]);
    return Layer;
}();
var Block = /*#__PURE__*/ function() {
    "use strict";
    function Block() {
        _classCallCheck(this, Block);
        this.batches = [];
    }
    _createClass(Block, [
        {
            /** @param batch {Batch} */ key: "PushBatch",
            value: function PushBatch(batch) {
                this.batches.push(batch);
            }
        }
    ]);
    return Block;
}();
/** Custom viewer event names are prefixed with this string. */ var EVENT_NAME_PREFIX = "__dxf_";
/** Transform sRGB color component to linear color space. */ function LinearColor(c) {
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}
/** Transform linear color component to sRGB color space. */ function SRgbColor(c) {
    return c < 0.003 ? c * 12.92 : Math.pow(c, 1 / 2.4) * 1.055 - 0.055;
}
/** Get relative luminance value for a color.
 * https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
 * @param color {number} RGB color value.
 * @return {number} Luminance value in range [0; 1].
 */ function Luminance(color) {
    var r = LinearColor(((color & 0xff0000) >>> 16) / 255);
    var g = LinearColor(((color & 0xff00) >>> 8) / 255);
    var b = LinearColor((color & 0xff) / 255);
    return r * 0.2126 + g * 0.7152 + b * 0.0722;
}
/**
 * Get contrast ratio for a color pair.
 * https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
 * @param c1
 * @param c2
 * @return {number} Contrast ratio between the colors. Greater than one if the first color color is
 *  brighter than the second one.
 */ function ContrastRatio(c1, c2) {
    return (Luminance(c1) + 0.05) / (Luminance(c2) + 0.05);
}
function HlsToRgb(param) {
    var h = param.h, l = param.l, s = param.s;
    var r, g, b;
    if (s === 0) {
        /* Achromatic */ r = g = b = l;
    } else {
        var hue2rgb = function hue2rgb(p, q, t) {
            if (t < 0) {
                t += 1;
            }
            if (t > 1) {
                t -= 1;
            }
            if (t < 1 / 6) {
                return p + (q - p) * 6 * t;
            }
            if (t < 1 / 2) {
                return q;
            }
            if (t < 2 / 3) {
                return p + (q - p) * (2 / 3 - t) * 6;
            }
            return p;
        };
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return Math.min(Math.floor(SRgbColor(r) * 256), 255) << 16 | Math.min(Math.floor(SRgbColor(g) * 256), 255) << 8 | Math.min(Math.floor(SRgbColor(b) * 256), 255);
}
function RgbToHls(color) {
    var r = LinearColor(((color & 0xff0000) >>> 16) / 255);
    var g = LinearColor(((color & 0xff00) >>> 8) / 255);
    var b = LinearColor((color & 0xff) / 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h, s;
    var l = (max + min) / 2;
    if (max === min) {
        /* Achromatic */ h = s = 0;
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return {
        h: h,
        l: l,
        s: s
    };
}
function Lighten(color, factor) {
    var hls = RgbToHls(color);
    hls.l *= factor;
    if (hls.l > 1) {
        hls.l = 1;
    }
    return HlsToRgb(hls);
}
function Darken(color, factor) {
    var hls = RgbToHls(color);
    hls.l /= factor;
    return HlsToRgb(hls);
}
