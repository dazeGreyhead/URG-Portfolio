import { a as React, r as reactExports } from "../react.mjs";
import { j as jr } from "./playback-core.mjs";
import { e, T, t, r } from "./playback-core.mjs";
import "../../../_libs/mux-embed.mjs";
import "../../../_libs/hls.js.mjs";
var M = parseInt(React.version) >= 19, E = { className: "class", classname: "class", htmlFor: "for", crossOrigin: "crossorigin", viewBox: "viewBox", playsInline: "playsinline", autoPlay: "autoplay", playbackRate: "playbackrate" }, B = (e2) => e2 == null, ee = (e2, t2) => B(t2) ? false : e2 in t2, te = (e2) => e2.replace(/[A-Z]/g, (t2) => `-${t2.toLowerCase()}`), ne = (e2, t2) => {
  if (!(!M && typeof t2 == "boolean" && !t2)) {
    if (ee(e2, E)) return E[e2];
    if (typeof t2 != "undefined") return /[A-Z]/.test(e2) ? te(e2) : e2;
  }
};
var ae = (e2, t2) => !M && typeof e2 == "boolean" ? "" : e2, P = (e2 = {}) => {
  let { ref: t2, ...n } = e2;
  return Object.entries(n).reduce((o, [a, l]) => {
    let i = ne(a, l);
    if (!i) return o;
    let c = ae(l);
    return o[i] = c, o;
  }, {});
};
function x(e2, t2) {
  if (typeof e2 == "function") return e2(t2);
  e2 != null && (e2.current = t2);
}
function re(...e2) {
  return (t2) => {
    let n = false, o = e2.map((a) => {
      let l = x(a, t2);
      return !n && typeof l == "function" && (n = true), l;
    });
    if (n) return () => {
      for (let a = 0; a < o.length; a++) {
        let l = o[a];
        typeof l == "function" ? l() : x(e2[a], null);
      }
    };
  };
}
function f(...e2) {
  return reactExports.useCallback(re(...e2), e2);
}
var oe = Object.prototype.hasOwnProperty, ue = (e2, t2) => {
  if (Object.is(e2, t2)) return true;
  if (typeof e2 != "object" || e2 === null || typeof t2 != "object" || t2 === null) return false;
  if (Array.isArray(e2)) return !Array.isArray(t2) || e2.length !== t2.length ? false : e2.some((a, l) => t2[l] === a);
  let n = Object.keys(e2), o = Object.keys(t2);
  if (n.length !== o.length) return false;
  for (let a = 0; a < n.length; a++) if (!oe.call(t2, n[a]) || !Object.is(e2[n[a]], t2[n[a]])) return false;
  return true;
}, p = (e2, t2, n) => !ue(t2, e2[n]), se = (e2, t2, n) => {
  e2[n] = t2;
}, ie = (e2, t2, n, o = se, a = p) => reactExports.useEffect(() => {
  let l = n == null ? void 0 : n.current;
  l && a(l, t2, e2) && o(l, t2, e2);
}, [n == null ? void 0 : n.current, t2]), u = ie;
var ye = () => {
  try {
    return "3.10.2";
  } catch {
  }
  return "UNKNOWN";
}, me = ye(), g = () => me;
var r2 = (e2, t2, n) => reactExports.useEffect(() => {
  let o = t2 == null ? void 0 : t2.current;
  if (!o || !n) return;
  let a = e2, l = n;
  return o.addEventListener(a, l), () => {
    o.removeEventListener(a, l);
  };
}, [t2 == null ? void 0 : t2.current, n, e2]);
var Pe = React.forwardRef(({ children: e2, ...t2 }, n) => React.createElement("mux-player", { suppressHydrationWarning: true, ...P(t2), ref: n }, e2)), xe = (e2, t2) => {
  let { onAbort: n, onCanPlay: o, onCanPlayThrough: a, onEmptied: l, onLoadStart: i, onLoadedData: c, onLoadedMetadata: v, onProgress: R, onDurationChange: T2, onVolumeChange: h, onRateChange: b, onResize: C, onWaiting: k, onPlay: O, onPlaying: S, onTimeUpdate: w, onPause: N, onSeeking: L, onSeeked: A, onStalled: I, onSuspend: _, onEnded: K, onError: H, onCuePointChange: D, onChapterChange: V, metadata: W, tokens: U, paused: z, playbackId: F, playbackRates: G, currentTime: Z, themeProps: j, extraSourceParams: q, castCustomData: J, _hlsConfig: Y, ...$ } = t2;
  return u("tokens", U, e2), u("playbackId", F, e2), u("playbackRates", G, e2), u("metadata", W, e2), u("extraSourceParams", q, e2), u("_hlsConfig", Y, e2), u("themeProps", j, e2), u("castCustomData", J, e2), u("paused", z, e2, (s, y) => {
    y != null && (y ? s.pause() : s.play());
  }, (s, y, Q) => s.hasAttribute("autoplay") && !s.hasPlayed ? false : p(s, y, Q)), u("currentTime", Z, e2, (s, y) => {
    y != null && (s.currentTime = y);
  }), r2("abort", e2, n), r2("canplay", e2, o), r2("canplaythrough", e2, a), r2("emptied", e2, l), r2("loadstart", e2, i), r2("loadeddata", e2, c), r2("loadedmetadata", e2, v), r2("progress", e2, R), r2("durationchange", e2, T2), r2("volumechange", e2, h), r2("ratechange", e2, b), r2("resize", e2, C), r2("waiting", e2, k), r2("play", e2, O), r2("playing", e2, S), r2("timeupdate", e2, w), r2("pause", e2, N), r2("seeking", e2, L), r2("seeked", e2, A), r2("stalled", e2, I), r2("suspend", e2, _), r2("ended", e2, K), r2("error", e2, H), r2("cuepointchange", e2, D), r2("chapterchange", e2, V), [$];
}, de = g(), fe = "mux-player-react", ge = React.forwardRef((e2, t2) => {
  var i;
  let n = reactExports.useRef(null), o = f(n, t2), [a] = xe(n, e2), [l] = reactExports.useState((i = e2.playerInitTime) != null ? i : jr());
  return React.createElement(Pe, { ref: o, defaultHiddenCaptions: e2.defaultHiddenCaptions, playerSoftwareName: fe, playerSoftwareVersion: de, playerInitTime: l, ...a });
}), ze = ge;
export {
  e as MaxResolution,
  T as MediaError,
  t as MinResolution,
  r as RenditionOrder,
  ze as default,
  jr as generatePlayerInitTime,
  fe as playerSoftwareName,
  de as playerSoftwareVersion
};
