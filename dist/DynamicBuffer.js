/** Typed-array-based buffer which can be dynamically extended. */ "use strict";
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
    DynamicBuffer: function() {
        return DynamicBuffer;
    },
    NativeType: function() {
        return NativeType;
    },
    NativeArray: function() {
        return NativeArray;
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
var DynamicBuffer = /*#__PURE__*/ function() {
    "use strict";
    function DynamicBuffer(type) {
        var initialCapacity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 16;
        _class_call_check(this, DynamicBuffer);
        this.type = type;
        this.capacity = initialCapacity;
        this.size = 0;
        this.buffer = new (NativeArray(type))(initialCapacity);
    }
    _create_class(DynamicBuffer, [
        {
            key: "GetSize",
            value: function GetSize() {
                return this.size;
            }
        },
        {
            /**
     * Append new value to the buffer end.
     * @return Appended value position in the buffer.
     */ key: "Push",
            value: function Push(value) {
                this._CheckGrow();
                var pos = this.size;
                this.buffer[pos] = value;
                this.size++;
                return pos;
            }
        },
        {
            key: "Get",
            value: function Get(index) {
                if (index >= this.size) {
                    throw new Error("Index out of range: ".concat(index, "/").concat(this.size));
                }
                return this.buffer[index];
            }
        },
        {
            /** Copy content to the specified buffer.
     * @param dstBuffer Destination buffer, should be typed array of the same type.
     * @param dstOffset {number} Offset in elements in the destination buffer.
     * @param srcOffset {number} Offset in elements in this buffer.
     * @param size {number} Number of elements to copy, -1 (default) to copy till this buffer end.
     */ key: "CopyTo",
            value: function CopyTo(dstBuffer, dstOffset) {
                var srcOffset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, size = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1;
                if (size === -1) {
                    size = this.size - srcOffset;
                }
                var src = new (NativeArray(this.type))(this.buffer.buffer, srcOffset, size);
                dstBuffer.set(src, dstOffset);
            }
        },
        {
            key: "_CheckGrow",
            value: function _CheckGrow() {
                if (this.size < this.capacity) {
                    return;
                }
                this.capacity *= 2;
                var newBuffer = new (NativeArray(this.type))(this.capacity);
                newBuffer.set(this.buffer);
                this.buffer = newBuffer;
            }
        }
    ]);
    return DynamicBuffer;
}();
var NativeType = {
    INT8: 0,
    UINT8: 1,
    UINT8_CLAMPED: 2,
    INT16: 3,
    UINT16: 4,
    INT32: 5,
    UINT32: 6,
    INT64: 7,
    UINT64: 8,
    FLOAT32: 9,
    FLOAT64: 10
};
function NativeArray(type) {
    switch(type){
        case NativeType.INT8:
            return Int8Array;
        case NativeType.UINT8:
            return Uint8Array;
        case NativeType.UINT8_CLAMPED:
            return Uint8ClampedArray;
        case NativeType.INT16:
            return Int16Array;
        case NativeType.UINT16:
            return Uint16Array;
        case NativeType.INT32:
            return Int32Array;
        case NativeType.UINT32:
            return Uint32Array;
        case NativeType.FLOAT32:
            return Float32Array;
        case NativeType.FLOAT64:
            return Float64Array;
        default:
            throw new Error("Unrecognized native type: " + type);
    }
}
