/** Parses MTEXT formatted text into more convenient intermediate representation. The MTEXT
 * formatting is not well documented, the only source I found:
 * https://adndevblog.typepad.com/autocad/2017/09/dissecting-mtext-format-codes.html
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MTextFormatParser", {
    enumerable: true,
    get: function() {
        return MTextFormatParser;
    }
});
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _ts_generator(thisArg, body) {
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
}
function _ts_values(o) {
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
}
var State = Object.freeze({
    TEXT: 0,
    ESCAPE: 1,
    /* Skip currently unsupported format codes till ';' */ SKIP_FORMAT: 2,
    /* For \pxq* paragraph formatting. Not found documentation yet, so temporal naming for now. */ PARAGRAPH1: 3,
    PARAGRAPH2: 4,
    PARAGRAPH3: 5
});
var EntityType = Object.freeze({
    TEXT: 0,
    SCOPE: 1,
    PARAGRAPH: 2,
    NON_BREAKING_SPACE: 3,
    /** "alignment" property is either "r", "c", "l", "j", "d" for right, center, left, justify
     * (seems to be the same as left), distribute (justify) alignment.
     */ PARAGRAPH_ALIGNMENT: 4
});
/** Single letter format codes which are not terminated by ";". */ var shortFormats = new Set([
    "L",
    "l",
    "O",
    "o",
    "K",
    "k",
    "P",
    "X",
    "~"
]);
var longFormats = new Set([
    "f",
    "F",
    "p",
    "Q",
    "H",
    "W",
    "S",
    "A",
    "C",
    "T"
]);
var validEscapes = new Set([
    "\\",
    "{",
    "}"
]);
var MTextFormatParser = /*#__PURE__*/ function() {
    "use strict";
    function MTextFormatParser() {
        _class_call_check(this, MTextFormatParser);
        this.entities = [];
    }
    _create_class(MTextFormatParser, [
        {
            key: "Parse",
            value: function Parse(text) {
                var EmitText = function EmitText() {
                    if (state !== State.TEXT || textStart === curPos) {
                        return;
                    }
                    curEntities.push({
                        type: EntityType.TEXT,
                        content: text.slice(textStart, curPos)
                    });
                    textStart = curPos;
                };
                var EmitEntity = function EmitEntity(type) {
                    curEntities.push({
                        type: type
                    });
                };
                var PushScope = function PushScope() {
                    var scope = {
                        type: EntityType.SCOPE,
                        content: []
                    };
                    curEntities.push(scope);
                    curEntities = scope.content;
                    scopeStack.push(scope);
                };
                var PopScope = function PopScope() {
                    if (scopeStack.length === 0) {
                        /* Stack underflow, just ignore now. */ return;
                    }
                    scopeStack.pop();
                    if (scopeStack.length === 0) {
                        curEntities = _this.entities;
                    } else {
                        curEntities = scopeStack[scopeStack.length - 1].content;
                    }
                };
                var n = text.length;
                var textStart = 0;
                var state = State.TEXT;
                var scopeStack = [];
                var curEntities = this.entities;
                var curPos = 0;
                var _this = this;
                for(; curPos < n; curPos++){
                    var c = text.charAt(curPos);
                    switch(state){
                        case State.TEXT:
                            if (c === "{") {
                                EmitText();
                                PushScope();
                                textStart = curPos + 1;
                                continue;
                            }
                            if (c === "}") {
                                EmitText();
                                PopScope();
                                textStart = curPos + 1;
                                continue;
                            }
                            if (c === "\\") {
                                EmitText();
                                state = State.ESCAPE;
                                continue;
                            }
                            continue;
                        case State.ESCAPE:
                            if (shortFormats.has(c)) {
                                switch(c){
                                    case "P":
                                        EmitEntity(EntityType.PARAGRAPH);
                                        break;
                                    case "~":
                                        EmitEntity(EntityType.NON_BREAKING_SPACE);
                                        break;
                                }
                                state = State.TEXT;
                                textStart = curPos + 1;
                                continue;
                            }
                            if (longFormats.has(c)) {
                                switch(c){
                                    case "p":
                                        state = State.PARAGRAPH1;
                                        continue;
                                }
                                state = State.SKIP_FORMAT;
                                continue;
                            }
                            /* Include current character into a next text chunk. Backslash is also included if
                 * character is not among allowed ones (that is how Autodesk viewer behaves).
                 */ if (validEscapes.has(c)) {
                                textStart = curPos;
                            } else {
                                textStart = curPos - 1;
                            }
                            state = State.TEXT;
                            continue;
                        case State.PARAGRAPH1:
                            state = c === "x" ? State.PARAGRAPH2 : State.SKIP_FORMAT;
                            continue;
                        case State.PARAGRAPH2:
                            state = c === "q" ? State.PARAGRAPH3 : State.SKIP_FORMAT;
                            continue;
                        case State.PARAGRAPH3:
                            curEntities.push({
                                type: EntityType.PARAGRAPH_ALIGNMENT,
                                alignment: c
                            });
                            state = State.SKIP_FORMAT;
                            continue;
                        case State.SKIP_FORMAT:
                            if (c === ";") {
                                textStart = curPos + 1;
                                state = State.TEXT;
                            }
                            continue;
                        default:
                            throw new Error("Unhandled state");
                    }
                }
                EmitText();
            }
        },
        {
            /** @typedef MTextFormatEntity
     * @property type One of EntityType
     *
     * @return {MTextFormatEntity[]} List of format chunks. Each chunk is either a text chunk with
     * TEXT type or some format entity. Entity with type SCOPE represents format scope which has
     * nested list of entities in "content" property.
     */ key: "GetContent",
            value: function GetContent() {
                return this.entities;
            }
        },
        {
            key: "GetText",
            value: /** Return only text chunks in a flattened sequence of strings. */ function GetText() {
                function TraverseItems(items) {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, err;
                    return _ts_generator(this, function(_state) {
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
                                if (!(item.type === EntityType.TEXT)) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    item.content
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    3,
                                    6
                                ];
                            case 4:
                                if (!(item.type === EntityType.SCOPE)) return [
                                    3,
                                    6
                                ];
                                return [
                                    5,
                                    _ts_values(TraverseItems(item.content))
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
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                5,
                                _ts_values(TraverseItems(this.GetContent()))
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }
        }
    ]);
    return MTextFormatParser;
}();
MTextFormatParser.EntityType = EntityType;
