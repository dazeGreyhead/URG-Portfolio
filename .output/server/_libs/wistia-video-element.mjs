import { a as React } from "../_chunks/_libs/react.mjs";
import { S as SuperVideoElement } from "./super-media-element.mjs";
var _a, _b;
const templateLightDOM = (_a = globalThis.document) == null ? void 0 : _a.createElement("template");
if (templateLightDOM) {
  templateLightDOM.innerHTML = /*html*/
  `
  <div class="wistia_embed"></div>
  `;
}
const templateShadowDOM = (_b = globalThis.document) == null ? void 0 : _b.createElement("template");
if (templateShadowDOM) {
  templateShadowDOM.innerHTML = /*html*/
  `
  <style>
    :host {
      display: inline-block;
      min-width: 300px;
      min-height: 150px;
      position: relative;
    }
    ::slotted(.wistia_embed) {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  </style>
  <slot></slot>
  `;
}
class WistiaVideoElement extends SuperVideoElement {
  static template = templateShadowDOM;
  static skipAttributes = ["src"];
  get nativeEl() {
    var _a2;
    return ((_a2 = this.api) == null ? void 0 : _a2.elem()) ?? this.querySelector("video");
  }
  async load() {
    var _a2;
    (_a2 = this.querySelector(".wistia_embed")) == null ? void 0 : _a2.remove();
    if (!this.src) {
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 50));
    const MATCH_SRC = /(?:wistia\.com|wi\.st)\/(?:medias|embed)\/(.*)$/i;
    const id = this.src.match(MATCH_SRC)[1];
    const options = {
      autoPlay: this.autoplay,
      preload: this.preload ?? "metadata",
      playsinline: this.playsInline,
      endVideoBehavior: this.loop && "loop",
      chromeless: !this.controls,
      playButton: this.controls,
      muted: this.defaultMuted
    };
    this.append(templateLightDOM.content.cloneNode(true));
    const div = this.querySelector(".wistia_embed");
    if (!div.id) div.id = uniqueId(id);
    div.classList.add(`wistia_async_${id}`);
    const scriptUrl = "https://fast.wistia.com/assets/external/E-v1.js";
    await loadScript(scriptUrl, "Wistia");
    this.api = await new Promise((onReady) => {
      globalThis._wq.push({
        id: div.id,
        onReady,
        options
      });
    });
  }
  async attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === "controls") {
      await this.loadComplete;
      switch (attrName) {
        case "controls":
          this.api.bigPlayButtonEnabled(this.controls);
          this.controls ? this.api.releaseChromeless() : this.api.requestChromeless();
          break;
      }
      return;
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  // Override some methods w/ defaults if the video element is not ready yet when called.
  // Some methods require the Wistia API instead of the native video element API.
  get duration() {
    var _a2;
    return (_a2 = this.api) == null ? void 0 : _a2.duration();
  }
  async play() {
    await this.loadComplete;
    this.api.play();
    return new Promise((resolve) => this.addEventListener("playing", resolve));
  }
}
const loadScriptCache = {};
async function loadScript(src, globalName) {
  if (loadScriptCache[src]) return loadScriptCache[src];
  if (self[globalName]) return self[globalName];
  return loadScriptCache[src] = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.defer = true;
    script.src = src;
    script.onload = () => resolve(self[globalName]);
    script.onerror = reject;
    document.head.append(script);
  });
}
let idCounter = 0;
function uniqueId(prefix) {
  const id = ++idCounter;
  return `${prefix}${id}`;
}
if (globalThis.customElements && !globalThis.customElements.get("wistia-video")) {
  globalThis.customElements.define("wistia-video", WistiaVideoElement);
}
var wistia_video_element_default = WistiaVideoElement;
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
    var _a2, _b2;
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
      if (elementClass.prototype && k in elementClass.prototype && !(k in (((_a2 = globalThis.HTMLElement) == null ? void 0 : _a2.prototype) ?? {})) && !((_b2 = elementClass.observedAttributes) == null ? void 0 : _b2.some((attr) => attr === attrName))) {
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
  var _a2;
  node[name] = value;
  if (value == null && name in (((_a2 = globalThis.HTMLElement) == null ? void 0 : _a2.prototype) ?? {})) {
    node.removeAttribute(name);
  }
}
var react_default = createComponent({
  react: React,
  tagName: "wistia-video",
  elementClass: wistia_video_element_default,
  toAttributeName(propName) {
    if (propName === "muted") return "";
    if (propName === "defaultMuted") return "muted";
    return defaultToAttributeName(propName);
  }
});
export {
  react_default as default
};
