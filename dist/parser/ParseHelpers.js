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
    getAcadColor: function() {
        return getAcadColor;
    },
    parsePoint: function() {
        return parsePoint;
    },
    skipEmbeddedObject: function() {
        return skipEmbeddedObject;
    },
    checkCommonEntityProperties: function() {
        return checkCommonEntityProperties;
    }
});
var _AutoCadColorIndex = /*#__PURE__*/ _interop_require_default(require("./AutoCadColorIndex"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function getAcadColor(index) {
    return _AutoCadColorIndex.default[index];
}
function parsePoint(scanner) {
    var point = {};
    // Reread group for the first coordinate
    scanner.rewind();
    var curr = scanner.next();
    var code = curr.code;
    point.x = curr.value;
    code += 10;
    curr = scanner.next();
    if (curr.code !== code) throw new Error("Expected code for point value to be " + code + " but got " + curr.code + ".");
    point.y = curr.value;
    code += 10;
    curr = scanner.next();
    if (curr.code !== code) {
        // Only the x and y are specified. Don't read z.
        scanner.rewind(); // Let the calling code advance off the point
        return point;
    }
    point.z = curr.value;
    return point;
}
function skipEmbeddedObject(scanner) {
    /* Ensure proper start group. */ scanner.rewind();
    var curr = scanner.next();
    if (curr.code !== 101) {
        throw new Error("Bad call for skipEmbeddedObject()");
    }
    do {
        curr = scanner.next();
    }while (curr.code !== 0);
    scanner.rewind();
}
function checkCommonEntityProperties(entity, curr) {
    switch(curr.code){
        case 0:
            entity.type = curr.value;
            break;
        case 5:
            entity.handle = curr.value;
            break;
        case 6:
            entity.lineType = curr.value;
            break;
        case 8:
            entity.layer = curr.value;
            break;
        case 48:
            entity.lineTypeScale = curr.value;
            break;
        case 60:
            entity.visible = curr.value === 0;
            break;
        case 62:
            entity.colorIndex = curr.value;
            entity.color = getAcadColor(Math.abs(curr.value));
            break;
        case 67:
            entity.inPaperSpace = curr.value !== 0;
            break;
        case 100:
            break;
        case 330:
            entity.ownerHandle = curr.value;
            break;
        case 347:
            entity.materialObjectHandle = curr.value;
            break;
        case 370:
            //From https://www.woutware.com/Forum/Topic/955/lineweight?returnUrl=%2FForum%2FUserPosts%3FuserId%3D478262319
            // An integer representing 100th of mm, must be one of the following values:
            // 0, 5, 9, 13, 15, 18, 20, 25, 30, 35, 40, 50, 53, 60, 70, 80, 90, 100, 106, 120, 140, 158, 200, 211.
            // -3 = STANDARD, -2 = BYLAYER, -1 = BYBLOCK
            entity.lineweight = curr.value;
            break;
        case 420:
            entity.color = curr.value;
            break;
        case 1000:
            entity.extendedData = entity.extendedData || {};
            entity.extendedData.customStrings = entity.extendedData.customStrings || [];
            entity.extendedData.customStrings.push(curr.value);
            break;
        case 1001:
            entity.extendedData = entity.extendedData || {};
            entity.extendedData.applicationName = curr.value;
            break;
        default:
            return false;
    }
    return true;
}
