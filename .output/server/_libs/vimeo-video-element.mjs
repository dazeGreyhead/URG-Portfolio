import { a as React } from "../_chunks/_libs/react.mjs";
import { P as Player } from "../_chunks/_libs/@vimeo/player.mjs";
const EMBED_VIDEO_BASE = "https://player.vimeo.com/video";
const EMBED_EVENT_BASE = "https://vimeo.com/event";
const MATCH_SRC = /vimeo\.com\/(video\/|event\/)?(\d+)(?:\/([\w-]+))?/;
function getTemplateHTML(attrs, props = {}) {
  const iframeAttrs = {
    src: serializeIframeUrl(attrs, props),
    frameborder: 0,
    width: "100%",
    height: "100%",
    allow: "accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture"
  };
  if (props.config) {
    iframeAttrs["data-config"] = JSON.stringify(props.config);
  }
  return (
    /*html*/
    `
    <style>
      :host {
        display: inline-block;
        min-width: 300px;
        min-height: 150px;
        position: relative;
      }
      iframe {
        position: absolute;
        top: 0;
        left: 0;
      }
      :host(:not([controls])) {
        pointer-events: none;
      }
    </style>
    <iframe${serializeAttributes(iframeAttrs)}></iframe>
  `
  );
}
function serializeIframeUrl(attrs, props) {
  if (!attrs.src) return;
  let url = new URL(attrs.src);
  const matches = attrs.src.match(MATCH_SRC);
  const urlType = matches && matches[1];
  const srcId = matches && matches[2];
  const hParam = url.searchParams.get("h") || void 0;
  const params = {
    // ?controls=true is enabled by default in the iframe
    controls: attrs.controls === "" ? null : 0,
    autoplay: attrs.autoplay,
    loop: attrs.loop,
    muted: attrs.muted,
    playsinline: attrs.playsinline,
    preload: attrs.preload ?? "metadata",
    transparent: false,
    autopause: attrs.autopause,
    h: hParam,
    // This param is required when the video is Unlisted.
    ...props.config
  };
  if (urlType === "event/") {
    return `${EMBED_EVENT_BASE}/${srcId}/embed?${serialize(params)}`;
  }
  return `${EMBED_VIDEO_BASE}/${srcId}?${serialize(params)}`;
}
class VimeoVideoElement extends (globalThis.HTMLElement ?? class {
}) {
  static getTemplateHTML = getTemplateHTML;
  static shadowRootOptions = { mode: "open" };
  static observedAttributes = [
    "autoplay",
    "controls",
    "crossorigin",
    "loop",
    "muted",
    "playsinline",
    "poster",
    "preload",
    "src"
  ];
  loadComplete = new PublicPromise();
  #loadRequested;
  #hasLoaded;
  #isInit;
  #currentTime = 0;
  #duration = NaN;
  #muted = false;
  #paused = !this.autoplay;
  #playbackRate = 1;
  #progress = 0;
  #readyState = 0;
  #seeking = false;
  #volume = 1;
  #videoWidth = NaN;
  #videoHeight = NaN;
  #config = null;
  constructor() {
    super();
    this.#upgradeProperty("config");
  }
  requestFullscreen() {
    var _a, _b;
    return (_b = (_a = this.api) == null ? void 0 : _a.requestFullscreen) == null ? void 0 : _b.call(_a);
  }
  exitFullscreen() {
    var _a, _b;
    return (_b = (_a = this.api) == null ? void 0 : _a.exitFullscreen) == null ? void 0 : _b.call(_a);
  }
  requestPictureInPicture() {
    var _a, _b;
    return (_b = (_a = this.api) == null ? void 0 : _a.requestPictureInPicture) == null ? void 0 : _b.call(_a);
  }
  exitPictureInPicture() {
    var _a, _b;
    return (_b = (_a = this.api) == null ? void 0 : _a.exitPictureInPicture) == null ? void 0 : _b.call(_a);
  }
  get config() {
    return this.#config;
  }
  set config(value) {
    this.#config = value;
  }
  async load() {
    var _a;
    if (this.#loadRequested) return;
    const isFirstLoad = !this.#hasLoaded;
    if (this.#hasLoaded) this.loadComplete = new PublicPromise();
    this.#hasLoaded = true;
    await (this.#loadRequested = Promise.resolve());
    this.#loadRequested = null;
    this.#currentTime = 0;
    this.#duration = NaN;
    this.#muted = false;
    this.#paused = !this.autoplay;
    this.#playbackRate = 1;
    this.#progress = 0;
    this.#readyState = 0;
    this.#seeking = false;
    this.#volume = 1;
    this.#readyState = 0;
    this.#videoWidth = NaN;
    this.#videoHeight = NaN;
    this.dispatchEvent(new Event("emptied"));
    let oldApi = this.api;
    this.api = null;
    if (!this.src) {
      return;
    }
    this.dispatchEvent(new Event("loadstart"));
    const options = {
      autoplay: this.autoplay,
      controls: this.controls,
      loop: this.loop,
      muted: this.defaultMuted,
      playsinline: this.playsInline,
      preload: this.preload ?? "metadata",
      transparent: false,
      autopause: this.hasAttribute("autopause"),
      ...this.#config
    };
    const onLoaded = async () => {
      this.#readyState = 1;
      this.dispatchEvent(new Event("loadedmetadata"));
      if (this.api) {
        this.#muted = await this.api.getMuted();
        this.#volume = await this.api.getVolume();
        this.dispatchEvent(new Event("volumechange"));
        this.#duration = await this.api.getDuration();
        this.dispatchEvent(new Event("durationchange"));
      }
      this.dispatchEvent(new Event("loadcomplete"));
      this.loadComplete.resolve();
    };
    if (this.#isInit) {
      this.api = oldApi;
      await this.api.loadVideo({
        ...options,
        url: this.src
      });
      await onLoaded();
      await this.loadComplete;
      return;
    }
    this.#isInit = true;
    let iframe = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("iframe");
    if (isFirstLoad && iframe) {
      this.#config = JSON.parse(iframe.getAttribute("data-config") || "{}");
    }
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = getTemplateHTML(namedNodeMapToObject(this.attributes), this);
      iframe = this.shadowRoot.querySelector("iframe");
    }
    this.api = new Player(iframe);
    const textTracksVideo = document.createElement("video");
    this.textTracks = textTracksVideo.textTracks;
    this.api.getTextTracks().then((vimeoTracks) => {
      vimeoTracks.forEach((t) => {
        textTracksVideo.addTextTrack(t.kind, t.label, t.language);
      });
    });
    this.textTracks.addEventListener("change", () => {
      const active = Array.from(this.textTracks).find((t) => t.mode === "showing");
      if (active) {
        this.api.enableTextTrack(active.language, active.kind);
      } else {
        this.api.disableTextTrack();
      }
    });
    const onceLoaded = () => {
      this.api.off("loaded", onceLoaded);
      onLoaded();
    };
    this.api.on("loaded", onceLoaded);
    this.api.on("bufferstart", () => {
      if (this.#paused) {
        this.#paused = false;
        this.dispatchEvent(new Event("play"));
      }
      this.dispatchEvent(new Event("waiting"));
    });
    this.api.on("play", () => {
      if (!this.#paused) return;
      this.#paused = false;
      this.dispatchEvent(new Event("play"));
    });
    this.api.on("playing", () => {
      this.#readyState = 3;
      this.#paused = false;
      this.dispatchEvent(new Event("playing"));
    });
    this.api.on("seeking", () => {
      this.#seeking = true;
      this.dispatchEvent(new Event("seeking"));
    });
    this.api.on("seeked", () => {
      this.#seeking = false;
      this.dispatchEvent(new Event("seeked"));
    });
    this.api.on("pause", () => {
      this.#paused = true;
      this.dispatchEvent(new Event("pause"));
    });
    this.api.on("ended", () => {
      this.#paused = true;
      this.dispatchEvent(new Event("ended"));
    });
    this.api.on("ratechange", ({ playbackRate }) => {
      this.#playbackRate = playbackRate;
      this.dispatchEvent(new Event("ratechange"));
    });
    this.api.on("volumechange", async ({ volume }) => {
      this.#volume = volume;
      if (this.api) {
        this.#muted = await this.api.getMuted();
      }
      this.dispatchEvent(new Event("volumechange"));
    });
    this.api.on("durationchange", ({ duration }) => {
      this.#duration = duration;
      this.dispatchEvent(new Event("durationchange"));
    });
    this.api.on("timeupdate", ({ seconds }) => {
      this.#currentTime = seconds;
      this.dispatchEvent(new Event("timeupdate"));
    });
    this.api.on("progress", ({ seconds }) => {
      this.#progress = seconds;
      this.dispatchEvent(new Event("progress"));
    });
    this.api.on("resize", ({ videoWidth, videoHeight }) => {
      this.#videoWidth = videoWidth;
      this.#videoHeight = videoHeight;
      this.dispatchEvent(new Event("resize"));
    });
    await this.loadComplete;
  }
  async attributeChangedCallback(attrName, oldValue, newValue) {
    if (oldValue === newValue) return;
    switch (attrName) {
      case "autoplay":
      case "controls":
      case "src": {
        this.load();
        return;
      }
    }
    await this.loadComplete;
    switch (attrName) {
      case "loop": {
        this.api.setLoop(this.loop);
        break;
      }
    }
  }
  async play() {
    var _a;
    this.#paused = false;
    this.dispatchEvent(new Event("play"));
    await this.loadComplete;
    try {
      await ((_a = this.api) == null ? void 0 : _a.play());
    } catch (error) {
      this.#paused = true;
      this.dispatchEvent(new Event("pause"));
      throw error;
    }
  }
  async pause() {
    var _a;
    await this.loadComplete;
    return (_a = this.api) == null ? void 0 : _a.pause();
  }
  get ended() {
    return this.#currentTime >= this.#duration;
  }
  get seeking() {
    return this.#seeking;
  }
  get readyState() {
    return this.#readyState;
  }
  get videoWidth() {
    return this.#videoWidth;
  }
  get videoHeight() {
    return this.#videoHeight;
  }
  get src() {
    return this.getAttribute("src");
  }
  set src(val) {
    if (this.src == val) return;
    this.setAttribute("src", val);
  }
  get paused() {
    return this.#paused;
  }
  get duration() {
    return this.#duration;
  }
  get autoplay() {
    return this.hasAttribute("autoplay");
  }
  set autoplay(val) {
    if (this.autoplay == val) return;
    this.toggleAttribute("autoplay", Boolean(val));
  }
  get buffered() {
    if (this.#progress > 0) {
      return createTimeRanges(0, this.#progress);
    }
    return createTimeRanges();
  }
  get controls() {
    return this.hasAttribute("controls");
  }
  set controls(val) {
    if (this.controls == val) return;
    this.toggleAttribute("controls", Boolean(val));
  }
  get currentTime() {
    return this.#currentTime;
  }
  set currentTime(val) {
    if (this.currentTime == val) return;
    this.#currentTime = val;
    this.loadComplete.then(() => {
      var _a;
      (_a = this.api) == null ? void 0 : _a.setCurrentTime(val).catch(() => {
      });
    });
  }
  get defaultMuted() {
    return this.hasAttribute("muted");
  }
  set defaultMuted(val) {
    if (this.defaultMuted == val) return;
    this.toggleAttribute("muted", Boolean(val));
  }
  get loop() {
    return this.hasAttribute("loop");
  }
  set loop(val) {
    if (this.loop == val) return;
    this.toggleAttribute("loop", Boolean(val));
  }
  get muted() {
    return this.#muted;
  }
  set muted(val) {
    if (this.muted == val) return;
    this.#muted = val;
    this.loadComplete.then(() => {
      var _a;
      (_a = this.api) == null ? void 0 : _a.setMuted(val).catch(() => {
      });
    });
  }
  get playbackRate() {
    return this.#playbackRate;
  }
  set playbackRate(val) {
    if (this.playbackRate == val) return;
    this.#playbackRate = val;
    this.loadComplete.then(() => {
      var _a;
      (_a = this.api) == null ? void 0 : _a.setPlaybackRate(val).catch(() => {
      });
    });
  }
  get playsInline() {
    return this.hasAttribute("playsinline");
  }
  set playsInline(val) {
    if (this.playsInline == val) return;
    this.toggleAttribute("playsinline", Boolean(val));
  }
  get poster() {
    return this.getAttribute("poster");
  }
  set poster(val) {
    if (this.poster == val) return;
    this.setAttribute("poster", `${val}`);
  }
  get volume() {
    return this.#volume;
  }
  set volume(val) {
    if (this.volume == val) return;
    this.#volume = val;
    this.loadComplete.then(() => {
      var _a;
      (_a = this.api) == null ? void 0 : _a.setVolume(val).catch(() => {
      });
    });
  }
  // This is a pattern to update property values that are set before
  // the custom element is upgraded.
  // https://web.dev/custom-elements-best-practices/#make-properties-lazy
  #upgradeProperty(prop) {
    if (Object.prototype.hasOwnProperty.call(this, prop)) {
      const value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }
}
function serializeAttributes(attrs) {
  let html = "";
  for (const key in attrs) {
    const value = attrs[key];
    if (value === "") html += ` ${escapeHtml(key)}`;
    else html += ` ${escapeHtml(key)}="${escapeHtml(`${value}`)}"`;
  }
  return html;
}
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/`/g, "&#x60;");
}
function serialize(props) {
  return String(new URLSearchParams(boolToBinary(props)));
}
function boolToBinary(props) {
  let p = {};
  for (let key in props) {
    let val = props[key];
    if (val === true || val === "") p[key] = 1;
    else if (val === false) p[key] = 0;
    else if (val != null) p[key] = val;
  }
  return p;
}
function namedNodeMapToObject(namedNodeMap) {
  let obj = {};
  for (let attr of namedNodeMap) {
    obj[attr.name] = attr.value;
  }
  return obj;
}
class PublicPromise extends Promise {
  constructor(executor = () => {
  }) {
    let res, rej;
    super((resolve, reject) => {
      executor(resolve, reject);
      res = resolve;
      rej = reject;
    });
    this.resolve = res;
    this.reject = rej;
  }
}
function createTimeRanges(start, end) {
  if (Array.isArray(start)) {
    return createTimeRangesObj(start);
  } else if (start == null || end == null || start === 0 && end === 0) {
    return createTimeRangesObj([[0, 0]]);
  }
  return createTimeRangesObj([[start, end]]);
}
function createTimeRangesObj(ranges) {
  Object.defineProperties(ranges, {
    start: {
      value: (i) => ranges[i][0]
    },
    end: {
      value: (i) => ranges[i][1]
    }
  });
  return ranges;
}
if (globalThis.customElements && !globalThis.customElements.get("vimeo-video")) {
  globalThis.customElements.define("vimeo-video", VimeoVideoElement);
}
var vimeo_video_element_default = VimeoVideoElement;
var reservedReactProps = /* @__PURE__ */ new Set([
  "style",
  "children",
  "ref",
  "key",
  "suppressContentEditableWarning",
  "suppressHydrationWarning",
  "dangerouslySetInnerHTML"
]);
var reactPropToAttrNameMap = {
  className: "class",
  htmlFor: "for"
};
function defaultToAttributeName(propName) {
  return propName.toLowerCase();
}
function defaultToAttributeValue(propValue) {
  if (typeof propValue === "boolean") return propValue ? "" : void 0;
  if (typeof propValue === "function") return void 0;
  if (typeof propValue === "object" && propValue !== null) return void 0;
  return propValue;
}
function createComponent({
  react: React2,
  tagName,
  elementClass,
  events,
  displayName,
  defaultProps,
  toAttributeName = defaultToAttributeName,
  toAttributeValue = defaultToAttributeValue
}) {
  const IS_REACT_19_OR_NEWER = Number.parseInt(React2.version) >= 19;
  const ReactComponent = React2.forwardRef((props, ref) => {
    var _a, _b;
    const elementRef = React2.useRef(null);
    const prevElemPropsRef = React2.useRef(/* @__PURE__ */ new Map());
    const eventProps = {};
    const attrs = {};
    const reactProps = {};
    const elementProps = {};
    for (const [k, v] of Object.entries(props)) {
      if (reservedReactProps.has(k)) {
        reactProps[k] = v;
        continue;
      }
      const attrName = toAttributeName(reactPropToAttrNameMap[k] ?? k);
      if (elementClass.prototype && k in elementClass.prototype && !(k in (((_a = globalThis.HTMLElement) == null ? void 0 : _a.prototype) ?? {})) && !((_b = elementClass.observedAttributes) == null ? void 0 : _b.some((attr) => attr === attrName))) {
        elementProps[k] = v;
        continue;
      }
      if (k.startsWith("on")) {
        eventProps[k] = v;
        continue;
      }
      const attrValue = toAttributeValue(v);
      if (attrName && attrValue != null) {
        attrs[attrName] = String(attrValue);
        if (!IS_REACT_19_OR_NEWER) {
          reactProps[attrName] = attrValue;
        }
      }
      if (attrName && IS_REACT_19_OR_NEWER) {
        const attrValueFromDefault = defaultToAttributeValue(v);
        if (attrValue !== attrValueFromDefault) {
          reactProps[attrName] = attrValue;
        } else {
          reactProps[attrName] = v;
        }
      }
    }
    if (typeof window !== "undefined") {
      for (const propName in eventProps) {
        const callback = eventProps[propName];
        const useCapture = propName.endsWith("Capture");
        const eventName = ((events == null ? void 0 : events[propName]) ?? propName.slice(2).toLowerCase()).slice(
          0,
          useCapture ? -7 : void 0
        );
        React2.useLayoutEffect(() => {
          const eventTarget = elementRef == null ? void 0 : elementRef.current;
          if (!eventTarget || typeof callback !== "function") return;
          eventTarget.addEventListener(eventName, callback, useCapture);
          return () => {
            eventTarget.removeEventListener(eventName, callback, useCapture);
          };
        }, [elementRef == null ? void 0 : elementRef.current, callback]);
      }
      React2.useLayoutEffect(() => {
        if (elementRef.current === null) return;
        const newElemProps = /* @__PURE__ */ new Map();
        for (const key in elementProps) {
          setProperty(elementRef.current, key, elementProps[key]);
          prevElemPropsRef.current.delete(key);
          newElemProps.set(key, elementProps[key]);
        }
        for (const [key, _value] of prevElemPropsRef.current) {
          setProperty(elementRef.current, key, void 0);
        }
        prevElemPropsRef.current = newElemProps;
      });
    }
    if (typeof window === "undefined" && (elementClass == null ? void 0 : elementClass.getTemplateHTML) && (elementClass == null ? void 0 : elementClass.shadowRootOptions)) {
      const { mode, delegatesFocus } = elementClass.shadowRootOptions;
      const templateShadowRoot = React2.createElement("template", {
        shadowrootmode: mode,
        shadowrootdelegatesfocus: delegatesFocus,
        dangerouslySetInnerHTML: {
          __html: elementClass.getTemplateHTML(attrs, props)
        },
        key: "ce-la-react-ssr-template-shadow-root"
      });
      reactProps.children = [templateShadowRoot, reactProps.children];
    }
    return React2.createElement(tagName, {
      ...defaultProps,
      ...reactProps,
      ref: React2.useCallback(
        (node) => {
          elementRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref !== null) {
            ref.current = node;
          }
        },
        [ref]
      )
    }, reactProps.children);
  });
  ReactComponent.displayName = displayName ?? elementClass.name;
  return ReactComponent;
}
function setProperty(node, name, value) {
  var _a;
  node[name] = value;
  if (value == null && name in (((_a = globalThis.HTMLElement) == null ? void 0 : _a.prototype) ?? {})) {
    node.removeAttribute(name);
  }
}
var react_default = createComponent({
  react: React,
  tagName: "vimeo-video",
  elementClass: vimeo_video_element_default,
  toAttributeName(propName) {
    if (propName === "muted") return "";
    if (propName === "defaultMuted") return "muted";
    return defaultToAttributeName(propName);
  }
});
export {
  react_default as default
};
