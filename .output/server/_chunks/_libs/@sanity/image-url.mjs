import { g as getDefaultExportFromCjs } from "../react.mjs";
var builder = {};
var urlForImage = {};
var parseAssetId = {};
var hasRequiredParseAssetId;
function requireParseAssetId() {
  if (hasRequiredParseAssetId) return parseAssetId;
  hasRequiredParseAssetId = 1;
  Object.defineProperty(parseAssetId, "__esModule", { value: true });
  var example = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
  function parseAssetId$1(ref) {
    var _a = ref.split("-"), id = _a[1], dimensionString = _a[2], format = _a[3];
    if (!id || !dimensionString || !format) {
      throw new Error("Malformed asset _ref '".concat(ref, `'. Expected an id like "`).concat(example, '".'));
    }
    var _b = dimensionString.split("x"), imgWidthStr = _b[0], imgHeightStr = _b[1];
    var width = +imgWidthStr;
    var height = +imgHeightStr;
    var isValidAssetId = isFinite(width) && isFinite(height);
    if (!isValidAssetId) {
      throw new Error("Malformed asset _ref '".concat(ref, `'. Expected an id like "`).concat(example, '".'));
    }
    return { id, width, height, format };
  }
  parseAssetId.default = parseAssetId$1;
  return parseAssetId;
}
var parseSource = {};
var hasRequiredParseSource;
function requireParseSource() {
  if (hasRequiredParseSource) return parseSource;
  hasRequiredParseSource = 1;
  var __assign = parseSource && parseSource.__assign || function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  Object.defineProperty(parseSource, "__esModule", { value: true });
  parseSource.isInProgressUpload = void 0;
  var isRef = function(src) {
    var source = src;
    return source ? typeof source._ref === "string" : false;
  };
  var isAsset = function(src) {
    var source = src;
    return source ? typeof source._id === "string" : false;
  };
  var isAssetStub = function(src) {
    var source = src;
    return source && source.asset ? typeof source.asset.url === "string" : false;
  };
  var isInProgressUpload = function(src) {
    if (typeof src === "object" && src !== null) {
      var obj = src;
      return obj._upload && (!obj.asset || !obj.asset._ref);
    }
    return false;
  };
  parseSource.isInProgressUpload = isInProgressUpload;
  function parseSource$1(source) {
    if (!source) {
      return null;
    }
    var image;
    if (typeof source === "string" && isUrl(source)) {
      image = {
        asset: { _ref: urlToId(source) }
      };
    } else if (typeof source === "string") {
      image = {
        asset: { _ref: source }
      };
    } else if (isRef(source)) {
      image = {
        asset: source
      };
    } else if (isAsset(source)) {
      image = {
        asset: {
          _ref: source._id || ""
        }
      };
    } else if (isAssetStub(source)) {
      image = {
        asset: {
          _ref: urlToId(source.asset.url)
        }
      };
    } else if (typeof source.asset === "object") {
      image = __assign({}, source);
    } else {
      return null;
    }
    var img = source;
    if (img.crop) {
      image.crop = img.crop;
    }
    if (img.hotspot) {
      image.hotspot = img.hotspot;
    }
    return applyDefaults(image);
  }
  parseSource.default = parseSource$1;
  function isUrl(url) {
    return /^https?:\/\//.test("".concat(url));
  }
  function urlToId(url) {
    var parts = url.split("/").slice(-1);
    return "image-".concat(parts[0]).replace(/\.([a-z]+)$/, "-$1");
  }
  function applyDefaults(image) {
    if (image.crop && image.hotspot) {
      return image;
    }
    var result = __assign({}, image);
    if (!result.crop) {
      result.crop = {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
      };
    }
    if (!result.hotspot) {
      result.hotspot = {
        x: 0.5,
        y: 0.5,
        height: 1,
        width: 1
      };
    }
    return result;
  }
  return parseSource;
}
var hasRequiredUrlForImage;
function requireUrlForImage() {
  if (hasRequiredUrlForImage) return urlForImage;
  hasRequiredUrlForImage = 1;
  (function(exports$1) {
    var __assign = urlForImage && urlForImage.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = urlForImage && urlForImage.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = urlForImage && urlForImage.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = urlForImage && urlForImage.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = urlForImage && urlForImage.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports$1, "__esModule", { value: true });
    exports$1.parseSource = exports$1.SPEC_NAME_TO_URL_NAME_MAPPINGS = void 0;
    var parseAssetId_1 = __importDefault(/* @__PURE__ */ requireParseAssetId());
    var parseSource_1 = __importStar(/* @__PURE__ */ requireParseSource());
    exports$1.parseSource = parseSource_1.default;
    exports$1.SPEC_NAME_TO_URL_NAME_MAPPINGS = [
      ["width", "w"],
      ["height", "h"],
      ["format", "fm"],
      ["download", "dl"],
      ["blur", "blur"],
      ["sharpen", "sharp"],
      ["invert", "invert"],
      ["orientation", "or"],
      ["minHeight", "min-h"],
      ["maxHeight", "max-h"],
      ["minWidth", "min-w"],
      ["maxWidth", "max-w"],
      ["quality", "q"],
      ["fit", "fit"],
      ["crop", "crop"],
      ["saturation", "sat"],
      ["auto", "auto"],
      ["dpr", "dpr"],
      ["pad", "pad"],
      ["frame", "frame"]
    ];
    function urlForImage$1(options) {
      var spec = __assign({}, options || {});
      var source = spec.source;
      delete spec.source;
      var image = (0, parseSource_1.default)(source);
      if (!image) {
        if (source && (0, parseSource_1.isInProgressUpload)(source)) {
          return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
        }
        throw new Error("Unable to resolve image URL from source (".concat(JSON.stringify(source), ")"));
      }
      var id = image.asset._ref || image.asset._id || "";
      var asset = (0, parseAssetId_1.default)(id);
      var cropLeft = Math.round(image.crop.left * asset.width);
      var cropTop = Math.round(image.crop.top * asset.height);
      var crop = {
        left: cropLeft,
        top: cropTop,
        width: Math.round(asset.width - image.crop.right * asset.width - cropLeft),
        height: Math.round(asset.height - image.crop.bottom * asset.height - cropTop)
      };
      var hotSpotVerticalRadius = image.hotspot.height * asset.height / 2;
      var hotSpotHorizontalRadius = image.hotspot.width * asset.width / 2;
      var hotSpotCenterX = image.hotspot.x * asset.width;
      var hotSpotCenterY = image.hotspot.y * asset.height;
      var hotspot = {
        left: hotSpotCenterX - hotSpotHorizontalRadius,
        top: hotSpotCenterY - hotSpotVerticalRadius,
        right: hotSpotCenterX + hotSpotHorizontalRadius,
        bottom: hotSpotCenterY + hotSpotVerticalRadius
      };
      if (!(spec.rect || spec.focalPoint || spec.ignoreImageParams || spec.crop)) {
        spec = __assign(__assign({}, spec), fit({ crop, hotspot }, spec));
      }
      return specToImageUrl(__assign(__assign({}, spec), { asset }));
    }
    exports$1.default = urlForImage$1;
    function specToImageUrl(spec) {
      var cdnUrl = (spec.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, "");
      var vanityStub = spec.vanityName ? "/".concat(spec.vanityName) : "";
      var filename = "".concat(spec.asset.id, "-").concat(spec.asset.width, "x").concat(spec.asset.height, ".").concat(spec.asset.format).concat(vanityStub);
      var baseUrl = "".concat(cdnUrl, "/images/").concat(spec.projectId, "/").concat(spec.dataset, "/").concat(filename);
      var params = [];
      if (spec.rect) {
        var _a = spec.rect, left = _a.left, top_1 = _a.top, width = _a.width, height = _a.height;
        var isEffectiveCrop = left !== 0 || top_1 !== 0 || height !== spec.asset.height || width !== spec.asset.width;
        if (isEffectiveCrop) {
          params.push("rect=".concat(left, ",").concat(top_1, ",").concat(width, ",").concat(height));
        }
      }
      if (spec.bg) {
        params.push("bg=".concat(spec.bg));
      }
      if (spec.focalPoint) {
        params.push("fp-x=".concat(spec.focalPoint.x));
        params.push("fp-y=".concat(spec.focalPoint.y));
      }
      var flip = [spec.flipHorizontal && "h", spec.flipVertical && "v"].filter(Boolean).join("");
      if (flip) {
        params.push("flip=".concat(flip));
      }
      exports$1.SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function(mapping) {
        var specName = mapping[0], param = mapping[1];
        if (typeof spec[specName] !== "undefined") {
          params.push("".concat(param, "=").concat(encodeURIComponent(spec[specName])));
        } else if (typeof spec[param] !== "undefined") {
          params.push("".concat(param, "=").concat(encodeURIComponent(spec[param])));
        }
      });
      if (params.length === 0) {
        return baseUrl;
      }
      return "".concat(baseUrl, "?").concat(params.join("&"));
    }
    function fit(source, spec) {
      var cropRect;
      var imgWidth = spec.width;
      var imgHeight = spec.height;
      if (!(imgWidth && imgHeight)) {
        return { width: imgWidth, height: imgHeight, rect: source.crop };
      }
      var crop = source.crop;
      var hotspot = source.hotspot;
      var desiredAspectRatio = imgWidth / imgHeight;
      var cropAspectRatio = crop.width / crop.height;
      if (cropAspectRatio > desiredAspectRatio) {
        var height = Math.round(crop.height);
        var width = Math.round(height * desiredAspectRatio);
        var top_2 = Math.max(0, Math.round(crop.top));
        var hotspotXCenter = Math.round((hotspot.right - hotspot.left) / 2 + hotspot.left);
        var left = Math.max(0, Math.round(hotspotXCenter - width / 2));
        if (left < crop.left) {
          left = crop.left;
        } else if (left + width > crop.left + crop.width) {
          left = crop.left + crop.width - width;
        }
        cropRect = { left, top: top_2, width, height };
      } else {
        var width = crop.width;
        var height = Math.round(width / desiredAspectRatio);
        var left = Math.max(0, Math.round(crop.left));
        var hotspotYCenter = Math.round((hotspot.bottom - hotspot.top) / 2 + hotspot.top);
        var top_3 = Math.max(0, Math.round(hotspotYCenter - height / 2));
        if (top_3 < crop.top) {
          top_3 = crop.top;
        } else if (top_3 + height > crop.top + crop.height) {
          top_3 = crop.top + crop.height - height;
        }
        cropRect = { left, top: top_3, width, height };
      }
      return {
        width: imgWidth,
        height: imgHeight,
        rect: cropRect
      };
    }
  })(urlForImage);
  return urlForImage;
}
var hasRequiredBuilder;
function requireBuilder() {
  if (hasRequiredBuilder) return builder;
  hasRequiredBuilder = 1;
  var __assign = builder && builder.__assign || function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  var __createBinding = builder && builder.__createBinding || (Object.create ? (function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  }) : (function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
  }));
  var __setModuleDefault = builder && builder.__setModuleDefault || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  }) : function(o, v) {
    o["default"] = v;
  });
  var __importStar = builder && builder.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
  };
  Object.defineProperty(builder, "__esModule", { value: true });
  builder.ImageUrlBuilder = void 0;
  var urlForImage_1 = __importStar(/* @__PURE__ */ requireUrlForImage());
  var validFits = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"];
  var validCrops = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"];
  var validAutoModes = ["format"];
  function isSanityModernClientLike(client) {
    return client && "config" in client ? typeof client.config === "function" : false;
  }
  function isSanityClientLike(client) {
    return client && "clientConfig" in client ? typeof client.clientConfig === "object" : false;
  }
  function rewriteSpecName(key) {
    var specs = urlForImage_1.SPEC_NAME_TO_URL_NAME_MAPPINGS;
    for (var _i = 0, specs_1 = specs; _i < specs_1.length; _i++) {
      var entry = specs_1[_i];
      var specName = entry[0], param = entry[1];
      if (key === specName || key === param) {
        return specName;
      }
    }
    return key;
  }
  function urlBuilder(options) {
    if (isSanityModernClientLike(options)) {
      var _a = options.config(), apiUrl = _a.apiHost, projectId = _a.projectId, dataset = _a.dataset;
      var apiHost = apiUrl || "https://api.sanity.io";
      return new ImageUrlBuilder(null, {
        baseUrl: apiHost.replace(/^https:\/\/api\./, "https://cdn."),
        projectId,
        dataset
      });
    }
    if (isSanityClientLike(options)) {
      var _b = options.clientConfig, apiUrl = _b.apiHost, projectId = _b.projectId, dataset = _b.dataset;
      var apiHost = apiUrl || "https://api.sanity.io";
      return new ImageUrlBuilder(null, {
        baseUrl: apiHost.replace(/^https:\/\/api\./, "https://cdn."),
        projectId,
        dataset
      });
    }
    return new ImageUrlBuilder(null, options || {});
  }
  builder.default = urlBuilder;
  var ImageUrlBuilder = (
    /** @class */
    (function() {
      function ImageUrlBuilder2(parent, options) {
        this.options = parent ? __assign(__assign({}, parent.options || {}), options || {}) : __assign({}, options || {});
      }
      ImageUrlBuilder2.prototype.withOptions = function(options) {
        var baseUrl = options.baseUrl || this.options.baseUrl;
        var newOptions = { baseUrl };
        for (var key in options) {
          if (options.hasOwnProperty(key)) {
            var specKey = rewriteSpecName(key);
            newOptions[specKey] = options[key];
          }
        }
        return new ImageUrlBuilder2(this, __assign({ baseUrl }, newOptions));
      };
      ImageUrlBuilder2.prototype.image = function(source) {
        return this.withOptions({ source });
      };
      ImageUrlBuilder2.prototype.dataset = function(dataset) {
        return this.withOptions({ dataset });
      };
      ImageUrlBuilder2.prototype.projectId = function(projectId) {
        return this.withOptions({ projectId });
      };
      ImageUrlBuilder2.prototype.bg = function(bg) {
        return this.withOptions({ bg });
      };
      ImageUrlBuilder2.prototype.dpr = function(dpr) {
        return this.withOptions(dpr && dpr !== 1 ? { dpr } : {});
      };
      ImageUrlBuilder2.prototype.width = function(width) {
        return this.withOptions({ width });
      };
      ImageUrlBuilder2.prototype.height = function(height) {
        return this.withOptions({ height });
      };
      ImageUrlBuilder2.prototype.focalPoint = function(x, y) {
        return this.withOptions({ focalPoint: { x, y } });
      };
      ImageUrlBuilder2.prototype.maxWidth = function(maxWidth) {
        return this.withOptions({ maxWidth });
      };
      ImageUrlBuilder2.prototype.minWidth = function(minWidth) {
        return this.withOptions({ minWidth });
      };
      ImageUrlBuilder2.prototype.maxHeight = function(maxHeight) {
        return this.withOptions({ maxHeight });
      };
      ImageUrlBuilder2.prototype.minHeight = function(minHeight) {
        return this.withOptions({ minHeight });
      };
      ImageUrlBuilder2.prototype.size = function(width, height) {
        return this.withOptions({ width, height });
      };
      ImageUrlBuilder2.prototype.blur = function(blur) {
        return this.withOptions({ blur });
      };
      ImageUrlBuilder2.prototype.sharpen = function(sharpen) {
        return this.withOptions({ sharpen });
      };
      ImageUrlBuilder2.prototype.rect = function(left, top, width, height) {
        return this.withOptions({ rect: { left, top, width, height } });
      };
      ImageUrlBuilder2.prototype.format = function(format) {
        return this.withOptions({ format });
      };
      ImageUrlBuilder2.prototype.invert = function(invert) {
        return this.withOptions({ invert });
      };
      ImageUrlBuilder2.prototype.orientation = function(orientation) {
        return this.withOptions({ orientation });
      };
      ImageUrlBuilder2.prototype.quality = function(quality) {
        return this.withOptions({ quality });
      };
      ImageUrlBuilder2.prototype.forceDownload = function(download) {
        return this.withOptions({ download });
      };
      ImageUrlBuilder2.prototype.flipHorizontal = function() {
        return this.withOptions({ flipHorizontal: true });
      };
      ImageUrlBuilder2.prototype.flipVertical = function() {
        return this.withOptions({ flipVertical: true });
      };
      ImageUrlBuilder2.prototype.ignoreImageParams = function() {
        return this.withOptions({ ignoreImageParams: true });
      };
      ImageUrlBuilder2.prototype.fit = function(value) {
        if (validFits.indexOf(value) === -1) {
          throw new Error('Invalid fit mode "'.concat(value, '"'));
        }
        return this.withOptions({ fit: value });
      };
      ImageUrlBuilder2.prototype.crop = function(value) {
        if (validCrops.indexOf(value) === -1) {
          throw new Error('Invalid crop mode "'.concat(value, '"'));
        }
        return this.withOptions({ crop: value });
      };
      ImageUrlBuilder2.prototype.saturation = function(saturation) {
        return this.withOptions({ saturation });
      };
      ImageUrlBuilder2.prototype.auto = function(value) {
        if (validAutoModes.indexOf(value) === -1) {
          throw new Error('Invalid auto mode "'.concat(value, '"'));
        }
        return this.withOptions({ auto: value });
      };
      ImageUrlBuilder2.prototype.pad = function(pad) {
        return this.withOptions({ pad });
      };
      ImageUrlBuilder2.prototype.vanityName = function(value) {
        return this.withOptions({ vanityName: value });
      };
      ImageUrlBuilder2.prototype.frame = function(frame) {
        if (frame !== 1) {
          throw new Error('Invalid frame value "'.concat(frame, '"'));
        }
        return this.withOptions({ frame });
      };
      ImageUrlBuilder2.prototype.url = function() {
        return (0, urlForImage_1.default)(this.options);
      };
      ImageUrlBuilder2.prototype.toString = function() {
        return this.url();
      };
      return ImageUrlBuilder2;
    })()
  );
  builder.ImageUrlBuilder = ImageUrlBuilder;
  return builder;
}
var node;
var hasRequiredNode;
function requireNode() {
  if (hasRequiredNode) return node;
  hasRequiredNode = 1;
  var __importDefault = node && node.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  var builder_1 = __importDefault(/* @__PURE__ */ requireBuilder());
  node = builder_1.default;
  return node;
}
var nodeExports = /* @__PURE__ */ requireNode();
const imageUrlBuilder = /* @__PURE__ */ getDefaultExportFromCjs(nodeExports);
export {
  imageUrlBuilder as i
};
