class TrackEvent extends Event {
  track;
  constructor(type, init) {
    super(type);
    this.track = init.track;
  }
}
const privateProps = /* @__PURE__ */ new WeakMap();
function getPrivate(instance) {
  return privateProps.get(instance) ?? setPrivate(instance, {});
}
function setPrivate(instance, props) {
  let saved = privateProps.get(instance);
  if (!saved) privateProps.set(instance, saved = {});
  return Object.assign(saved, props);
}
function addVideoTrack(media, track) {
  const trackList = media.videoTracks;
  getPrivate(track).media = media;
  if (!getPrivate(track).renditionSet) {
    getPrivate(track).renditionSet = /* @__PURE__ */ new Set();
  }
  const trackSet = getPrivate(trackList).trackSet;
  trackSet.add(track);
  const index = trackSet.size - 1;
  if (!(index in VideoTrackList.prototype)) {
    Object.defineProperty(VideoTrackList.prototype, index, {
      get() {
        return [...getPrivate(this).trackSet][index];
      }
    });
  }
  queueMicrotask(() => {
    trackList.dispatchEvent(new TrackEvent("addtrack", { track }));
  });
}
function removeVideoTrack(track) {
  const trackList = getPrivate(track).media?.videoTracks;
  if (!trackList) return;
  const trackSet = getPrivate(trackList).trackSet;
  trackSet.delete(track);
  queueMicrotask(() => {
    trackList.dispatchEvent(new TrackEvent("removetrack", { track }));
  });
}
function selectedChanged$2(selected) {
  const trackList = getPrivate(selected).media.videoTracks ?? [];
  let hasUnselected = false;
  for (const track of trackList) {
    if (track === selected) continue;
    track.selected = false;
    hasUnselected = true;
  }
  if (hasUnselected) {
    if (getPrivate(trackList).changeRequested) return;
    getPrivate(trackList).changeRequested = true;
    queueMicrotask(() => {
      delete getPrivate(trackList).changeRequested;
      trackList.dispatchEvent(new Event("change"));
    });
  }
}
class VideoTrackList extends EventTarget {
  #addTrackCallback;
  #removeTrackCallback;
  #changeCallback;
  constructor() {
    super();
    getPrivate(this).trackSet = /* @__PURE__ */ new Set();
  }
  get #tracks() {
    return getPrivate(this).trackSet;
  }
  [Symbol.iterator]() {
    return this.#tracks.values();
  }
  get length() {
    return this.#tracks.size;
  }
  getTrackById(id) {
    return [...this.#tracks].find((track) => track.id === id) ?? null;
  }
  get selectedIndex() {
    return [...this.#tracks].findIndex((track) => track.selected);
  }
  get onaddtrack() {
    return this.#addTrackCallback;
  }
  set onaddtrack(callback) {
    if (this.#addTrackCallback) {
      this.removeEventListener("addtrack", this.#addTrackCallback);
      this.#addTrackCallback = void 0;
    }
    if (typeof callback == "function") {
      this.#addTrackCallback = callback;
      this.addEventListener("addtrack", callback);
    }
  }
  get onremovetrack() {
    return this.#removeTrackCallback;
  }
  set onremovetrack(callback) {
    if (this.#removeTrackCallback) {
      this.removeEventListener("removetrack", this.#removeTrackCallback);
      this.#removeTrackCallback = void 0;
    }
    if (typeof callback == "function") {
      this.#removeTrackCallback = callback;
      this.addEventListener("removetrack", callback);
    }
  }
  get onchange() {
    return this.#changeCallback;
  }
  set onchange(callback) {
    if (this.#changeCallback) {
      this.removeEventListener("change", this.#changeCallback);
      this.#changeCallback = void 0;
    }
    if (typeof callback == "function") {
      this.#changeCallback = callback;
      this.addEventListener("change", callback);
    }
  }
}
class RenditionEvent extends Event {
  rendition;
  constructor(type, init) {
    super(type);
    this.rendition = init.rendition;
  }
}
function addRendition$1(track, rendition) {
  const renditionList = getPrivate(track).media.videoRenditions;
  getPrivate(rendition).media = getPrivate(track).media;
  getPrivate(rendition).track = track;
  const renditionSet = getPrivate(track).renditionSet;
  renditionSet.add(rendition);
  const index = renditionSet.size - 1;
  if (!(index in VideoRenditionList.prototype)) {
    Object.defineProperty(VideoRenditionList.prototype, index, {
      get() {
        return getCurrentRenditions$1(this)[index];
      }
    });
  }
  queueMicrotask(() => {
    if (!track.selected) return;
    renditionList.dispatchEvent(new RenditionEvent("addrendition", { rendition }));
  });
}
function removeRendition$1(rendition) {
  const renditionList = getPrivate(rendition).media.videoRenditions;
  const track = getPrivate(rendition).track;
  const renditionSet = getPrivate(track).renditionSet;
  renditionSet.delete(rendition);
  queueMicrotask(() => {
    const track2 = getPrivate(rendition).track;
    if (!track2.selected) return;
    renditionList.dispatchEvent(new RenditionEvent("removerendition", { rendition }));
  });
}
function selectedChanged$1(rendition) {
  const renditionList = getPrivate(rendition).media.videoRenditions;
  if (!renditionList || getPrivate(renditionList).changeRequested) return;
  getPrivate(renditionList).changeRequested = true;
  queueMicrotask(() => {
    delete getPrivate(renditionList).changeRequested;
    const track = getPrivate(rendition).track;
    if (!track.selected) return;
    renditionList.dispatchEvent(new Event("change"));
  });
}
function getCurrentRenditions$1(renditionList) {
  const media = getPrivate(renditionList).media;
  return [...media.videoTracks].filter((track) => track.selected).flatMap((track) => [...getPrivate(track).renditionSet]);
}
class VideoRenditionList extends EventTarget {
  #addRenditionCallback;
  #removeRenditionCallback;
  #changeCallback;
  [Symbol.iterator]() {
    return getCurrentRenditions$1(this).values();
  }
  get length() {
    return getCurrentRenditions$1(this).length;
  }
  getRenditionById(id) {
    return getCurrentRenditions$1(this).find((rendition) => `${rendition.id}` === `${id}`) ?? null;
  }
  get selectedIndex() {
    return getCurrentRenditions$1(this).findIndex((rendition) => rendition.selected);
  }
  set selectedIndex(index) {
    for (const [i, rendition] of getCurrentRenditions$1(this).entries()) {
      rendition.selected = i === index;
    }
  }
  get onaddrendition() {
    return this.#addRenditionCallback;
  }
  set onaddrendition(callback) {
    if (this.#addRenditionCallback) {
      this.removeEventListener("addrendition", this.#addRenditionCallback);
      this.#addRenditionCallback = void 0;
    }
    if (typeof callback == "function") {
      this.#addRenditionCallback = callback;
      this.addEventListener("addrendition", callback);
    }
  }
  get onremoverendition() {
    return this.#removeRenditionCallback;
  }
  set onremoverendition(callback) {
    if (this.#removeRenditionCallback) {
      this.removeEventListener("removerendition", this.#removeRenditionCallback);
      this.#removeRenditionCallback = void 0;
    }
    if (typeof callback == "function") {
      this.#removeRenditionCallback = callback;
      this.addEventListener("removerendition", callback);
    }
  }
  get onchange() {
    return this.#changeCallback;
  }
  set onchange(callback) {
    if (this.#changeCallback) {
      this.removeEventListener("change", this.#changeCallback);
      this.#changeCallback = void 0;
    }
    if (typeof callback == "function") {
      this.#changeCallback = callback;
      this.addEventListener("change", callback);
    }
  }
}
class VideoRendition {
  src;
  id;
  width;
  height;
  bitrate;
  frameRate;
  codec;
  #selected = false;
  get selected() {
    return this.#selected;
  }
  set selected(val) {
    if (this.#selected === val) return;
    this.#selected = val;
    selectedChanged$1(this);
  }
}
class VideoTrack {
  id;
  kind;
  label = "";
  language = "";
  sourceBuffer;
  #selected = false;
  addRendition(src, width, height, codec, bitrate, frameRate) {
    const rendition = new VideoRendition();
    rendition.src = src;
    rendition.width = width;
    rendition.height = height;
    rendition.frameRate = frameRate;
    rendition.bitrate = bitrate;
    rendition.codec = codec;
    addRendition$1(this, rendition);
    return rendition;
  }
  removeRendition(rendition) {
    removeRendition$1(rendition);
  }
  get selected() {
    return this.#selected;
  }
  set selected(val) {
    if (this.#selected === val) return;
    this.#selected = val;
    if (val !== true) return;
    selectedChanged$2(this);
  }
}
function addRendition(track, rendition) {
  const renditionList = getPrivate(track).media.audioRenditions;
  getPrivate(rendition).media = getPrivate(track).media;
  getPrivate(rendition).track = track;
  const renditionSet = getPrivate(track).renditionSet;
  renditionSet.add(rendition);
  const index = renditionSet.size - 1;
  if (!(index in AudioRenditionList.prototype)) {
    Object.defineProperty(AudioRenditionList.prototype, index, {
      get() {
        return getCurrentRenditions(this)[index];
      }
    });
  }
  queueMicrotask(() => {
    if (!track.enabled) return;
    renditionList.dispatchEvent(new RenditionEvent("addrendition", { rendition }));
  });
}
function removeRendition(rendition) {
  const renditionList = getPrivate(rendition).media.audioRenditions;
  const track = getPrivate(rendition).track;
  const renditionSet = getPrivate(track).renditionSet;
  renditionSet.delete(rendition);
  queueMicrotask(() => {
    const track2 = getPrivate(rendition).track;
    if (!track2.enabled) return;
    renditionList.dispatchEvent(new RenditionEvent("removerendition", { rendition }));
  });
}
function selectedChanged(rendition) {
  const renditionList = getPrivate(rendition).media.audioRenditions;
  if (!renditionList || getPrivate(renditionList).changeRequested) return;
  getPrivate(renditionList).changeRequested = true;
  queueMicrotask(() => {
    delete getPrivate(renditionList).changeRequested;
    const track = getPrivate(rendition).track;
    if (!track.enabled) return;
    renditionList.dispatchEvent(new Event("change"));
  });
}
function getCurrentRenditions(renditionList) {
  const media = getPrivate(renditionList).media;
  return [...media.audioTracks].filter((track) => track.enabled).flatMap((track) => [...getPrivate(track).renditionSet]);
}
class AudioRenditionList extends EventTarget {
  #addRenditionCallback;
  #removeRenditionCallback;
  #changeCallback;
  [Symbol.iterator]() {
    return getCurrentRenditions(this).values();
  }
  get length() {
    return getCurrentRenditions(this).length;
  }
  getRenditionById(id) {
    return getCurrentRenditions(this).find((rendition) => `${rendition.id}` === `${id}`) ?? null;
  }
  get selectedIndex() {
    return getCurrentRenditions(this).findIndex((rendition) => rendition.selected);
  }
  set selectedIndex(index) {
    for (const [i, rendition] of getCurrentRenditions(this).entries()) {
      rendition.selected = i === index;
    }
  }
  get onaddrendition() {
    return this.#addRenditionCallback;
  }
  set onaddrendition(callback) {
    if (this.#addRenditionCallback) {
      this.removeEventListener("addrendition", this.#addRenditionCallback);
      this.#addRenditionCallback = void 0;
    }
    if (typeof callback == "function") {
      this.#addRenditionCallback = callback;
      this.addEventListener("addrendition", callback);
    }
  }
  get onremoverendition() {
    return this.#removeRenditionCallback;
  }
  set onremoverendition(callback) {
    if (this.#removeRenditionCallback) {
      this.removeEventListener("removerendition", this.#removeRenditionCallback);
      this.#removeRenditionCallback = void 0;
    }
    if (typeof callback == "function") {
      this.#removeRenditionCallback = callback;
      this.addEventListener("removerendition", callback);
    }
  }
  get onchange() {
    return this.#changeCallback;
  }
  set onchange(callback) {
    if (this.#changeCallback) {
      this.removeEventListener("change", this.#changeCallback);
      this.#changeCallback = void 0;
    }
    if (typeof callback == "function") {
      this.#changeCallback = callback;
      this.addEventListener("change", callback);
    }
  }
}
class AudioRendition {
  src;
  id;
  bitrate;
  codec;
  #selected = false;
  get selected() {
    return this.#selected;
  }
  set selected(val) {
    if (this.#selected === val) return;
    this.#selected = val;
    selectedChanged(this);
  }
}
function addAudioTrack(media, track) {
  const trackList = media.audioTracks;
  getPrivate(track).media = media;
  if (!getPrivate(track).renditionSet) {
    getPrivate(track).renditionSet = /* @__PURE__ */ new Set();
  }
  const trackSet = getPrivate(trackList).trackSet;
  trackSet.add(track);
  const index = trackSet.size - 1;
  if (!(index in AudioTrackList.prototype)) {
    Object.defineProperty(AudioTrackList.prototype, index, {
      get() {
        return [...getPrivate(this).trackSet][index];
      }
    });
  }
  queueMicrotask(() => {
    trackList.dispatchEvent(new TrackEvent("addtrack", { track }));
  });
}
function removeAudioTrack(track) {
  const trackList = getPrivate(track).media?.audioTracks;
  if (!trackList) return;
  const trackSet = getPrivate(trackList).trackSet;
  trackSet.delete(track);
  queueMicrotask(() => {
    trackList.dispatchEvent(new TrackEvent("removetrack", { track }));
  });
}
function enabledChanged(track) {
  const trackList = getPrivate(track).media.audioTracks;
  if (!trackList || getPrivate(trackList).changeRequested) return;
  getPrivate(trackList).changeRequested = true;
  queueMicrotask(() => {
    delete getPrivate(trackList).changeRequested;
    trackList.dispatchEvent(new Event("change"));
  });
}
class AudioTrackList extends EventTarget {
  #addTrackCallback;
  #removeTrackCallback;
  #changeCallback;
  constructor() {
    super();
    getPrivate(this).trackSet = /* @__PURE__ */ new Set();
  }
  get #tracks() {
    return getPrivate(this).trackSet;
  }
  [Symbol.iterator]() {
    return this.#tracks.values();
  }
  get length() {
    return this.#tracks.size;
  }
  getTrackById(id) {
    return [...this.#tracks].find((track) => track.id === id) ?? null;
  }
  get onaddtrack() {
    return this.#addTrackCallback;
  }
  set onaddtrack(callback) {
    if (this.#addTrackCallback) {
      this.removeEventListener("addtrack", this.#addTrackCallback);
      this.#addTrackCallback = void 0;
    }
    if (typeof callback == "function") {
      this.#addTrackCallback = callback;
      this.addEventListener("addtrack", callback);
    }
  }
  get onremovetrack() {
    return this.#removeTrackCallback;
  }
  set onremovetrack(callback) {
    if (this.#removeTrackCallback) {
      this.removeEventListener("removetrack", this.#removeTrackCallback);
      this.#removeTrackCallback = void 0;
    }
    if (typeof callback == "function") {
      this.#removeTrackCallback = callback;
      this.addEventListener("removetrack", callback);
    }
  }
  get onchange() {
    return this.#changeCallback;
  }
  set onchange(callback) {
    if (this.#changeCallback) {
      this.removeEventListener("change", this.#changeCallback);
      this.#changeCallback = void 0;
    }
    if (typeof callback == "function") {
      this.#changeCallback = callback;
      this.addEventListener("change", callback);
    }
  }
}
class AudioTrack {
  id;
  kind;
  label = "";
  language = "";
  sourceBuffer;
  #enabled = false;
  addRendition(src, codec, bitrate) {
    const rendition = new AudioRendition();
    rendition.src = src;
    rendition.codec = codec;
    rendition.bitrate = bitrate;
    addRendition(this, rendition);
    return rendition;
  }
  removeRendition(rendition) {
    removeRendition(rendition);
  }
  get enabled() {
    return this.#enabled;
  }
  set enabled(val) {
    if (this.#enabled === val) return;
    this.#enabled = val;
    enabledChanged(this);
  }
}
const nativeVideoTracksFn = getBaseMediaTracksFn(globalThis.HTMLMediaElement, "video");
const nativeAudioTracksFn = getBaseMediaTracksFn(globalThis.HTMLMediaElement, "audio");
function MediaTracksMixin(MediaElementClass) {
  if (!MediaElementClass?.prototype) return MediaElementClass;
  const videoTracksFn = getBaseMediaTracksFn(MediaElementClass, "video");
  if (!videoTracksFn || `${videoTracksFn}`.includes("[native code]")) {
    Object.defineProperty(MediaElementClass.prototype, "videoTracks", {
      get() {
        return getVideoTracks(this);
      }
    });
  }
  const audioTracksFn = getBaseMediaTracksFn(MediaElementClass, "audio");
  if (!audioTracksFn || `${audioTracksFn}`.includes("[native code]")) {
    Object.defineProperty(MediaElementClass.prototype, "audioTracks", {
      get() {
        return getAudioTracks(this);
      }
    });
  }
  if (!("addVideoTrack" in MediaElementClass.prototype)) {
    MediaElementClass.prototype.addVideoTrack = function(kind, label = "", language = "") {
      const track = new VideoTrack();
      track.kind = kind;
      track.label = label;
      track.language = language;
      addVideoTrack(this, track);
      return track;
    };
  }
  if (!("removeVideoTrack" in MediaElementClass.prototype)) {
    MediaElementClass.prototype.removeVideoTrack = removeVideoTrack;
  }
  if (!("addAudioTrack" in MediaElementClass.prototype)) {
    MediaElementClass.prototype.addAudioTrack = function(kind, label = "", language = "") {
      const track = new AudioTrack();
      track.kind = kind;
      track.label = label;
      track.language = language;
      addAudioTrack(this, track);
      return track;
    };
  }
  if (!("removeAudioTrack" in MediaElementClass.prototype)) {
    MediaElementClass.prototype.removeAudioTrack = removeAudioTrack;
  }
  if (!("videoRenditions" in MediaElementClass.prototype)) {
    Object.defineProperty(MediaElementClass.prototype, "videoRenditions", {
      get() {
        return initVideoRenditions(this);
      }
    });
  }
  const initVideoRenditions = (media) => {
    let renditions = getPrivate(media).videoRenditions;
    if (!renditions) {
      renditions = new VideoRenditionList();
      getPrivate(renditions).media = media;
      getPrivate(media).videoRenditions = renditions;
    }
    return renditions;
  };
  if (!("audioRenditions" in MediaElementClass.prototype)) {
    Object.defineProperty(MediaElementClass.prototype, "audioRenditions", {
      get() {
        return initAudioRenditions(this);
      }
    });
  }
  const initAudioRenditions = (media) => {
    let renditions = getPrivate(media).audioRenditions;
    if (!renditions) {
      renditions = new AudioRenditionList();
      getPrivate(renditions).media = media;
      getPrivate(media).audioRenditions = renditions;
    }
    return renditions;
  };
  return MediaElementClass;
}
function getBaseMediaTracksFn(MediaElementClass, type) {
  if (MediaElementClass?.prototype) {
    return Object.getOwnPropertyDescriptor(MediaElementClass.prototype, `${type}Tracks`)?.get;
  }
}
function getVideoTracks(media) {
  let tracks = getPrivate(media).videoTracks;
  if (!tracks) {
    tracks = new VideoTrackList();
    getPrivate(media).videoTracks = tracks;
    if (nativeVideoTracksFn) {
      const nativeTracks = nativeVideoTracksFn.call(media.nativeEl ?? media);
      for (const nativeTrack of nativeTracks) {
        addVideoTrack(media, nativeTrack);
      }
      nativeTracks.addEventListener("change", () => {
        tracks.dispatchEvent(new Event("change"));
      });
      nativeTracks.addEventListener("addtrack", (event) => {
        if ([...tracks].some((t) => t instanceof VideoTrack)) {
          for (const nativeTrack of nativeTracks) {
            removeVideoTrack(nativeTrack);
          }
          return;
        }
        addVideoTrack(media, event.track);
      });
      nativeTracks.addEventListener("removetrack", (event) => {
        removeVideoTrack(event.track);
      });
    }
  }
  return tracks;
}
function getAudioTracks(media) {
  let tracks = getPrivate(media).audioTracks;
  if (!tracks) {
    tracks = new AudioTrackList();
    getPrivate(media).audioTracks = tracks;
    if (nativeAudioTracksFn) {
      const nativeTracks = nativeAudioTracksFn.call(media.nativeEl ?? media);
      for (const nativeTrack of nativeTracks) {
        addAudioTrack(media, nativeTrack);
      }
      nativeTracks.addEventListener("change", () => {
        tracks.dispatchEvent(new Event("change"));
      });
      nativeTracks.addEventListener("addtrack", (event) => {
        if ([...tracks].some((t) => t instanceof AudioTrack)) {
          for (const nativeTrack of nativeTracks) {
            removeAudioTrack(nativeTrack);
          }
          return;
        }
        addAudioTrack(media, event.track);
      });
      nativeTracks.addEventListener("removetrack", (event) => {
        removeAudioTrack(event.track);
      });
    }
  }
  return tracks;
}
export {
  MediaTracksMixin as M
};
