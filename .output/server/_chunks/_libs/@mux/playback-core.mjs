import { j as jl } from "../../../_libs/mux-embed.mjs";
import { H as Hls } from "../../../_libs/hls.js.mjs";
var E = Hls;
var L = class L2 extends Error {
  constructor(t, r = L2.MEDIA_ERR_CUSTOM, n, o) {
    var s;
    super(t), this.name = "MediaError", this.code = r, this.context = o, this.fatal = n != null ? n : r >= L2.MEDIA_ERR_NETWORK && r <= L2.MEDIA_ERR_ENCRYPTED, this.message || (this.message = (s = L2.defaultMessages[this.code]) != null ? s : "");
  }
};
L.MEDIA_ERR_ABORTED = 1, L.MEDIA_ERR_NETWORK = 2, L.MEDIA_ERR_DECODE = 3, L.MEDIA_ERR_SRC_NOT_SUPPORTED = 4, L.MEDIA_ERR_ENCRYPTED = 5, L.MEDIA_ERR_CUSTOM = 100, L.defaultMessages = { 1: "You aborted the media playback", 2: "A network error caused the media download to fail.", 3: "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.", 4: "An unsupported error occurred. The server or network failed, or your browser does not support this format.", 5: "The media is encrypted and there are no keys to decrypt it." };
var T = L;
var I = { M3U8: "application/vnd.apple.mpegurl", MP4: "video/mp4" };
[...Object.values(I), "hls", "HLS"];
var er = { upTo720p: "720p", upTo1080p: "1080p", upTo1440p: "1440p", upTo2160p: "2160p" }, tr = { noLessThan480p: "480p", noLessThan540p: "540p", noLessThan720p: "720p", noLessThan1080p: "1080p", noLessThan1440p: "1440p", noLessThan2160p: "2160p" }, rr = { DESCENDING: "desc" };
var Oe = E.DefaultConfig.capLevelController, mt = { "720p": 921600, "1080p": 2073600, "1440p": 4194304, "2160p": 8294400 };
function Et(e) {
  let t = e.toLowerCase().trim();
  return mt[t];
}
var N = class N2 extends Oe {
  constructor(t) {
    super(t);
  }
  static setMaxAutoResolution(t, r) {
    r ? N2.maxAutoResolution.set(t, r) : N2.maxAutoResolution.delete(t);
  }
  getMaxAutoResolution() {
    var r;
    let t = this.hls;
    return (r = N2.maxAutoResolution.get(t)) != null ? r : void 0;
  }
  get levels() {
    var t;
    return (t = this.hls.levels) != null ? t : [];
  }
  getValidLevels(t) {
    return this.levels.filter((r, n) => this.isLevelAllowed(r) && n <= t);
  }
  getMaxLevelCapped(t) {
    let r = this.getValidLevels(t), n = this.getMaxAutoResolution();
    if (!n) return super.getMaxLevel(t);
    let o = Et(n);
    if (!o) return super.getMaxLevel(t);
    let s = r.filter((c) => c.width * c.height <= o), a = s.findIndex((c) => c.width * c.height === o);
    if (a !== -1) {
      let c = s[a];
      return r.findIndex((d) => d === c);
    }
    if (s.length === 0) return 0;
    let i = s[s.length - 1];
    return r.findIndex((c) => c === i);
  }
  getMaxLevel(t) {
    if (this.getMaxAutoResolution() !== void 0) return this.getMaxLevelCapped(t);
    let r = super.getMaxLevel(t), n = this.getValidLevels(t);
    if (!n[r]) return r;
    let o = Math.min(n[r].width, n[r].height), s = N2.minMaxResolution;
    return o >= s ? r : Oe.getMaxLevelByMediaSize(n, s * (16 / 9), s);
  }
};
N.minMaxResolution = 720, N.maxAutoResolution = /* @__PURE__ */ new WeakMap();
var He, Ve, Be = (Ve = (He = globalThis == null ? void 0 : globalThis.navigator) == null ? void 0 : He.userAgent) != null ? Ve : "", Ke, We, Ye, _t = (Ye = (We = (Ke = globalThis == null ? void 0 : globalThis.navigator) == null ? void 0 : Ke.userAgentData) == null ? void 0 : We.platform) != null ? Ye : "";
Be.toLowerCase().includes("android") || ["x11", "android"].some((e) => _t.toLowerCase().includes(e));
var Fe, $e;
($e = (Fe = E).isSupported) == null ? void 0 : $e.call(Fe);
var jr = () => {
  if (typeof window != "undefined") return jl.utils.now();
};
jl.utils.generateUUID;
export {
  T,
  er as e,
  jr as j,
  rr as r,
  tr as t
};
