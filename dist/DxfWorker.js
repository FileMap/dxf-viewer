"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DxfWorker", {
    enumerable: true,
    get: function() {
        return DxfWorker;
    }
});
var _dxfFetcher = require("./DxfFetcher");
var _dxfScene = require("./DxfScene");
var _opentypeJs = /*#__PURE__*/ _interopRequireDefault(require("opentype.js"));
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var MSG_SIGNATURE = "DxfWorkerMsg";
var DxfWorker = /*#__PURE__*/ function() {
    "use strict";
    function DxfWorker(worker) {
        var isWorker = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        _classCallCheck(this, DxfWorker);
        this.worker = worker;
        if (isWorker) {
            worker.onmessage = this._ProcessRequest.bind(this);
        } else if (worker) {
            worker.addEventListener("message", this._ProcessResponse.bind(this), false);
            worker.addEventListener("error", this._OnError.bind(this), false);
            this.reqSeq = 1;
            /* Indexed by sequence. */ this.requests = new Map();
            this.progressCbk = null;
        }
    }
    _createClass(DxfWorker, [
        {
            key: "Load",
            value: /**
     * @param url DXF file URL.
     * @param fonts {?string[]} Fonts URLs.
     * @param options Viewer options. See DxfViewer.DefaultOptions.
     * @param progressCbk {Function?} (phase, processedSize, totalSize)
     */ function Load(url, fonts, options, progressCbk) {
                var _this = this;
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        if (_this.worker) {
                            return [
                                2,
                                _this._SendRequest(DxfWorker.WorkerMsg.LOAD, {
                                    url: url,
                                    fonts: fonts,
                                    options: _this._CloneOptions(options)
                                }, progressCbk)
                            ];
                        } else {
                            return [
                                2,
                                _this._Load(url, fonts, options, progressCbk)
                            ];
                        }
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "Destroy",
            value: function Destroy() {
                var noWait = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                var _this = this;
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.worker) return [
                                    3,
                                    3
                                ];
                                if (!!noWait) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this._SendRequest(DxfWorker.WorkerMsg.DESTROY)
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                /* close() in the worker is not enough, instance is still visible in dev tools. */ _this.worker.terminate();
                                _state.label = 3;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_ProcessRequest",
            value: function _ProcessRequest(event) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var msg, resp, transfers, error;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                msg = event.data;
                                if (msg.signature !== MSG_SIGNATURE) {
                                    console.log("Message with bad signature", msg);
                                    return [
                                        2
                                    ];
                                }
                                resp = {
                                    seq: msg.seq,
                                    type: msg.type,
                                    signature: MSG_SIGNATURE
                                };
                                transfers = [];
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    _this._ProcessRequestMessage(msg.type, msg.data, transfers, msg.seq)
                                ];
                            case 2:
                                resp.data = _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                error = _state.sent();
                                console.error(error);
                                resp.error = String(error);
                                return [
                                    3,
                                    4
                                ];
                            case 4:
                                _this.worker.postMessage(resp, transfers);
                                if (msg.type === DxfWorker.WorkerMsg.DESTROY) {
                                    _this.worker.onmessage = null;
                                    _this.worker.close();
                                    _this.worker = null;
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_ProcessRequestMessage",
            value: function _ProcessRequestMessage(type, data, transfers, seq) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var scene;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                switch(type){
                                    case DxfWorker.WorkerMsg.LOAD:
                                        return [
                                            3,
                                            1
                                        ];
                                    case DxfWorker.WorkerMsg.DESTROY:
                                        return [
                                            3,
                                            3
                                        ];
                                }
                                return [
                                    3,
                                    4
                                ];
                            case 1:
                                return [
                                    4,
                                    _this._Load(data.url, data.fonts, data.options, function(phase, size, totalSize) {
                                        return _this._SendProgress(seq, phase, size, totalSize);
                                    })
                                ];
                            case 2:
                                scene = _state.sent();
                                transfers.push(scene.vertices);
                                transfers.push(scene.indices);
                                transfers.push(scene.transforms);
                                return [
                                    2,
                                    scene
                                ];
                            case 3:
                                return [
                                    2,
                                    null
                                ];
                            case 4:
                                throw "Unknown message type: " + type;
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_ProcessResponse",
            value: function _ProcessResponse(event) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var msg, seq, req, data;
                    return __generator(this, function(_state) {
                        msg = event.data;
                        if (msg.signature !== MSG_SIGNATURE) {
                            console.log("Message with bad signature", msg);
                            return [
                                2
                            ];
                        }
                        seq = msg.seq;
                        req = _this.requests.get(seq);
                        if (!req) {
                            console.error("Unmatched message sequence: ", seq);
                            return [
                                2
                            ];
                        }
                        data = msg.data;
                        if (msg.type === DxfWorker.WorkerMsg.PROGRESS && req.progressCbk) {
                            req.progressCbk(data.phase, data.size, data.totalSize);
                            return [
                                2
                            ];
                        }
                        _this.requests.delete(seq);
                        if (msg.hasOwnProperty("error")) {
                            req.SetError(msg.error);
                        } else {
                            req.SetResponse(data);
                        }
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "_OnError",
            value: function _OnError(error) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var reqs;
                    return __generator(this, function(_state) {
                        console.error("DxfWorker worker error", error);
                        reqs = Array.from(_this.requests.values);
                        _this.requests.clear();
                        reqs.forEach(function(req) {
                            return req.SetError(error);
                        });
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "_SendRequest",
            value: function _SendRequest(type) {
                var data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, progressCbk = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var _this = this;
                return _asyncToGenerator(function() {
                    var seq, req;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                seq = _this.reqSeq++;
                                req = new DxfWorker.Request(seq, progressCbk);
                                _this.requests.set(seq, req);
                                _this.worker.postMessage({
                                    seq: seq,
                                    type: type,
                                    data: data,
                                    signature: MSG_SIGNATURE
                                });
                                return [
                                    4,
                                    req.GetResponse()
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_SendProgress",
            value: function _SendProgress(seq, phase, size, totalSize) {
                this.worker.postMessage({
                    seq: seq,
                    type: DxfWorker.WorkerMsg.PROGRESS,
                    data: {
                        phase: phase,
                        size: size,
                        totalSize: totalSize
                    },
                    signature: MSG_SIGNATURE
                });
            }
        },
        {
            key: "_Load",
            value: /** @return {Object} DxfScene serialized scene. */ function _Load(url, fonts, options, progressCbk) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var fontFetchers, dxf, dxfScene;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (fonts) {
                                    fontFetchers = _this._CreateFontFetchers(fonts, progressCbk);
                                } else {
                                    fontFetchers = [];
                                }
                                return [
                                    4,
                                    new _dxfFetcher.DxfFetcher(url).Fetch(progressCbk)
                                ];
                            case 1:
                                dxf = _state.sent();
                                if (progressCbk) {
                                    progressCbk("prepare", 0, null);
                                }
                                dxfScene = new _dxfScene.DxfScene(options);
                                return [
                                    4,
                                    dxfScene.Build(dxf, fontFetchers)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2,
                                    dxfScene.scene
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_CreateFontFetchers",
            value: function _CreateFontFetchers(urls, progressCbk) {
                var CreateFetcher = function CreateFetcher(url) {
                    return /*#__PURE__*/ _asyncToGenerator(function() {
                        var data;
                        return __generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (progressCbk) {
                                        progressCbk("font", 0, null);
                                    }
                                    return [
                                        4,
                                        fetch(url).then(function(response) {
                                            return response.arrayBuffer();
                                        })
                                    ];
                                case 1:
                                    data = _state.sent();
                                    if (progressCbk) {
                                        progressCbk("prepare", 0, null);
                                    }
                                    return [
                                        2,
                                        _opentypeJs.default.parse(data)
                                    ];
                            }
                        });
                    });
                };
                var fetchers = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = urls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var url = _step.value;
                        fetchers.push(CreateFetcher(url));
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
                return fetchers;
            }
        },
        {
            key: "_CloneOptions",
            value: function _CloneOptions(options) {
                var _this = this;
                /* Default options values are taken from prototype so need to implement deep clone here. */ if (Array.isArray(options)) {
                    return options.map(function(o) {
                        return _this._CloneOptions(o);
                    });
                } else if (typeof options === "object" && options !== null) {
                    var result = {};
                    for(var propName in options){
                        // noinspection JSUnfilteredForInLoop
                        result[propName] = this._CloneOptions(options[propName]);
                    }
                    return result;
                } else {
                    return options;
                }
            }
        }
    ]);
    return DxfWorker;
}();
DxfWorker.WorkerMsg = {
    LOAD: "LOAD",
    PROGRESS: "PROGRESS",
    DESTROY: "DESTROY"
};
DxfWorker.Request = /*#__PURE__*/ function() {
    "use strict";
    function _class(seq, progressCbk) {
        var _this = this;
        _classCallCheck(this, _class);
        this.seq = seq;
        this.progressCbk = progressCbk;
        this.promise = new Promise(function(resolve, reject) {
            _this._Resolve = resolve;
            _this._Reject = reject;
        });
    }
    _createClass(_class, [
        {
            key: "GetResponse",
            value: function GetResponse() {
                var _this = this;
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.promise
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "SetResponse",
            value: function SetResponse(response) {
                this._Resolve(response);
            }
        },
        {
            key: "SetError",
            value: function SetError(error) {
                this._Reject(error);
            }
        }
    ]);
    return _class;
}();
