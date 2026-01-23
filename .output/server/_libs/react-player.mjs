import { a as React, r as reactExports } from "../_chunks/_libs/react.mjs";
const AUDIO_EXTENSIONS = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
const VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
const HLS_EXTENSIONS = /\.(m3u8)($|\?)/i;
const DASH_EXTENSIONS = /\.(mpd)($|\?)/i;
const MATCH_URL_MUX = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/;
const MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
const MATCH_URL_VIMEO = /vimeo\.com\/(?!progressive_redirect).+/;
const MATCH_URL_WISTIA = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/;
const MATCH_URL_SPOTIFY = /open\.spotify\.com\/(\w+)\/(\w+)/i;
const MATCH_URL_TWITCH = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/;
const MATCH_URL_TIKTOK = /tiktok\.com\/(?:player\/v1\/|share\/video\/|@[^/]+\/video\/)([0-9]+)/;
const canPlayFile = (url, test) => {
  if (Array.isArray(url)) {
    for (const item of url) {
      if (typeof item === "string" && canPlayFile(item, test)) {
        return true;
      }
      if (canPlayFile(item.src, test)) {
        return true;
      }
    }
    return false;
  }
  return test(url);
};
const canPlay = {
  html: (url) => canPlayFile(url, (u) => AUDIO_EXTENSIONS.test(u) || VIDEO_EXTENSIONS.test(u)),
  hls: (url) => canPlayFile(url, (u) => HLS_EXTENSIONS.test(u)),
  dash: (url) => canPlayFile(url, (u) => DASH_EXTENSIONS.test(u)),
  mux: (url) => MATCH_URL_MUX.test(url),
  youtube: (url) => MATCH_URL_YOUTUBE.test(url),
  vimeo: (url) => MATCH_URL_VIMEO.test(url) && !VIDEO_EXTENSIONS.test(url) && !HLS_EXTENSIONS.test(url),
  wistia: (url) => MATCH_URL_WISTIA.test(url),
  spotify: (url) => MATCH_URL_SPOTIFY.test(url),
  twitch: (url) => MATCH_URL_TWITCH.test(url),
  tiktok: (url) => MATCH_URL_TIKTOK.test(url)
};
const HtmlPlayer = React.forwardRef((props, ref) => {
  const Media = AUDIO_EXTENSIONS.test(`${props.src}`) ? "audio" : "video";
  return /* @__PURE__ */ React.createElement(Media, { ...props, ref }, props.children);
});
var HtmlPlayer_default = HtmlPlayer;
const Players = [
  {
    key: "hls",
    name: "hls.js",
    canPlay: canPlay.hls,
    canEnablePIP: () => true,
    player: reactExports.lazy(
      () => import(
        /* webpackChunkName: 'reactPlayerHls' */
        "./hls-video-element.mjs"
      )
    )
  },
  {
    key: "dash",
    name: "dash.js",
    canPlay: canPlay.dash,
    canEnablePIP: () => true,
    player: reactExports.lazy(
      () => import(
        /* webpackChunkName: 'reactPlayerDash' */
        "./dash-video-element.mjs"
      )
    )
  },
  {
    key: "mux",
    name: "Mux",
    canPlay: canPlay.mux,
    canEnablePIP: () => true,
    player: reactExports.lazy(
      () => import(
        /* webpackChunkName: 'reactPlayerMux' */
        "../_chunks/_libs/@mux/mux-player-react.mjs"
      )
    )
  },
  {
    key: "youtube",
    name: "YouTube",
    canPlay: canPlay.youtube,
    player: reactExports.lazy(
      () => import(
        /* webpackChunkName: 'reactPlayerYouTube' */
        "./youtube-video-element.mjs"
      )
    )
  },
  {
    key: "vimeo",
    name: "Vimeo",
    canPlay: canPlay.vimeo,
    player: reactExports.lazy(
      () => import(
        /* webpackChunkName: 'reactPlayerVimeo' */
        "./vimeo-video-element.mjs"
      )
    )
  },
  {
    key: "wistia",
    name: "Wistia",
    canPlay: canPlay.wistia,
    canEnablePIP: () => true,
    player: reactExports.lazy(
      () => import(
        /* webpackChunkName: 'reactPlayerWistia' */
        "./wistia-video-element.mjs"
      )
    )
  },
  {
    key: "spotify",
    name: "Spotify",
    canPlay: canPlay.spotify,
    canEnablePIP: () => false,
    player: reactExports.lazy(
      () => import(
        /* webpackChunkName: 'reactPlayerSpotify' */
        "./spotify-audio-element.mjs"
      )
    )
  },
  {
    key: "twitch",
    name: "Twitch",
    canPlay: canPlay.twitch,
    canEnablePIP: () => false,
    player: reactExports.lazy(
      () => import(
        /* webpackChunkName: 'reactPlayerTwitch' */
        "./twitch-video-element.mjs"
      )
    )
  },
  {
    key: "tiktok",
    name: "TikTok",
    canPlay: canPlay.tiktok,
    canEnablePIP: () => false,
    player: reactExports.lazy(
      () => import(
        /* webpackChunkName: 'reactPlayerTiktok' */
        "./tiktok-video-element.mjs"
      )
    )
  },
  {
    key: "html",
    name: "html",
    canPlay: canPlay.html,
    canEnablePIP: () => true,
    player: HtmlPlayer_default
  }
];
var players_default = Players;
const defaultProps = {
  // Falsy values don't need to be defined
  //
  // native video attrs
  // src: undefined,
  // preload: undefined,
  // crossOrigin: undefined,
  // autoPlay: false,
  // muted: false,
  // loop: false,
  // controls: false,
  // playsInline: false,
  // disableRemotePlayback: false,
  width: "320px",
  height: "180px",
  // native video props
  volume: 1,
  playbackRate: 1,
  // custom props
  // playing: undefined,
  // pip: false,
  // light: false,
  // fallback: null,
  previewTabIndex: 0,
  previewAriaLabel: "",
  oEmbedUrl: "https://noembed.com/embed?url={url}"
};
const Player = React.forwardRef((props, ref) => {
  const { playing, pip } = props;
  const Player2 = props.activePlayer;
  const playerRef = reactExports.useRef(null);
  const startOnPlayRef = reactExports.useRef(true);
  reactExports.useEffect(() => {
    var _a, _b;
    if (!playerRef.current) return;
    if (playerRef.current.paused && playing === true) {
      playerRef.current.play();
    }
    if (!playerRef.current.paused && playing === false) {
      playerRef.current.pause();
    }
    playerRef.current.playbackRate = (_a = props.playbackRate) != null ? _a : 1;
    playerRef.current.volume = (_b = props.volume) != null ? _b : 1;
  });
  reactExports.useEffect(() => {
    var _a, _b, _c, _d, _e;
    if (!playerRef.current || !globalThis.document) return;
    if (pip && !document.pictureInPictureElement) {
      try {
        (_b = (_a = playerRef.current).requestPictureInPicture) == null ? void 0 : _b.call(_a);
      } catch (err) {
      }
    }
    if (!pip && document.pictureInPictureElement) {
      try {
        (_d = (_c = playerRef.current).exitPictureInPicture) == null ? void 0 : _d.call(_c);
        (_e = document.exitPictureInPicture) == null ? void 0 : _e.call(document);
      } catch (err) {
      }
    }
  }, [pip]);
  const handleLoadStart = (event) => {
    var _a, _b;
    startOnPlayRef.current = true;
    (_a = props.onReady) == null ? void 0 : _a.call(props);
    (_b = props.onLoadStart) == null ? void 0 : _b.call(props, event);
  };
  const handlePlay = (event) => {
    var _a, _b;
    if (startOnPlayRef.current) {
      startOnPlayRef.current = false;
      (_a = props.onStart) == null ? void 0 : _a.call(props, event);
    }
    (_b = props.onPlay) == null ? void 0 : _b.call(props, event);
  };
  if (!Player2) {
    return null;
  }
  const eventProps = {};
  const reactPlayerEventHandlers = ["onReady", "onStart"];
  for (const key in props) {
    if (key.startsWith("on") && !reactPlayerEventHandlers.includes(key)) {
      eventProps[key] = props[key];
    }
  }
  return /* @__PURE__ */ React.createElement(
    Player2,
    {
      ...eventProps,
      style: props.style,
      className: props.className,
      slot: props.slot,
      ref: reactExports.useCallback(
        (node) => {
          playerRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref !== null) {
            ref.current = node;
          }
        },
        [ref]
      ),
      src: props.src,
      crossOrigin: props.crossOrigin,
      preload: props.preload,
      controls: props.controls,
      muted: props.muted,
      autoPlay: props.autoPlay,
      loop: props.loop,
      playsInline: props.playsInline,
      disableRemotePlayback: props.disableRemotePlayback,
      config: props.config,
      onLoadStart: handleLoadStart,
      onPlay: handlePlay
    },
    props.children
  );
});
Player.displayName = "Player";
var Player_default = Player;
const Preview$2 = reactExports.lazy(() => Promise.resolve().then(function() {
  return Preview$1;
}));
const customPlayers = [];
const createReactPlayer = (players, playerFallback) => {
  const getActivePlayer = (src) => {
    for (const player of [...customPlayers, ...players]) {
      if (src && player.canPlay(src)) {
        return player;
      }
    }
    if (playerFallback) {
      return playerFallback;
    }
    return null;
  };
  const ReactPlayer = React.forwardRef((_props, ref) => {
    const props = { ...defaultProps, ..._props };
    const { src, slot, className, style, width, height, fallback: fallback2, wrapper } = props;
    const [showPreview, setShowPreview] = reactExports.useState(!!props.light);
    reactExports.useEffect(() => {
      if (props.light) {
        setShowPreview(true);
      } else {
        setShowPreview(false);
      }
    }, [props.light]);
    const handleClickPreview = (e) => {
      var _a;
      setShowPreview(false);
      (_a = props.onClickPreview) == null ? void 0 : _a.call(props, e);
    };
    const renderPreview = (src2) => {
      if (!src2) return null;
      const { light, playIcon, previewTabIndex, oEmbedUrl, previewAriaLabel } = props;
      return /* @__PURE__ */ React.createElement(
        Preview$2,
        {
          src: src2,
          light,
          playIcon,
          previewTabIndex,
          previewAriaLabel,
          oEmbedUrl,
          onClickPreview: handleClickPreview
        }
      );
    };
    const renderActivePlayer = (src2) => {
      var _a, _b;
      const player = getActivePlayer(src2);
      if (!player) return null;
      const { style: style2, width: width2, height: height2, wrapper: wrapper2 } = props;
      const config = (_a = props.config) == null ? void 0 : _a[player.key];
      return /* @__PURE__ */ React.createElement(
        Player_default,
        {
          ...props,
          ref,
          activePlayer: (_b = player.player) != null ? _b : player,
          slot: wrapper2 ? void 0 : slot,
          className: wrapper2 ? void 0 : className,
          style: wrapper2 ? { display: "block", width: "100%", height: "100%" } : { display: "block", width: width2, height: height2, ...style2 },
          config
        }
      );
    };
    const Wrapper = wrapper == null ? ForwardChildren : wrapper;
    const UniversalSuspense = fallback2 === false ? ForwardChildren : reactExports.Suspense;
    return /* @__PURE__ */ React.createElement(Wrapper, { slot, className, style: { width, height, ...style } }, /* @__PURE__ */ React.createElement(UniversalSuspense, { fallback: fallback2 }, showPreview ? renderPreview(src) : renderActivePlayer(src)));
  });
  ReactPlayer.displayName = "ReactPlayer";
  ReactPlayer.addCustomPlayer = (player) => {
    customPlayers.push(player);
  };
  ReactPlayer.removeCustomPlayers = () => {
    customPlayers.length = 0;
  };
  ReactPlayer.canPlay = (src) => {
    if (src) {
      for (const Player2 of [...customPlayers, ...players]) {
        if (Player2.canPlay(src)) {
          return true;
        }
      }
    }
    return false;
  };
  ReactPlayer.canEnablePIP = (src) => {
    var _a;
    if (src) {
      for (const Player2 of [...customPlayers, ...players]) {
        if (Player2.canPlay(src) && ((_a = Player2.canEnablePIP) == null ? void 0 : _a.call(Player2))) {
          return true;
        }
      }
    }
    return false;
  };
  return ReactPlayer;
};
const ForwardChildren = ({ children }) => children;
const fallback = players_default[players_default.length - 1];
var src_default = createReactPlayer(players_default, fallback);
const ICON_SIZE = "64px";
const cache = {};
const Preview = ({
  src,
  light,
  oEmbedUrl,
  onClickPreview,
  playIcon,
  previewTabIndex,
  previewAriaLabel
}) => {
  const [image, setImage] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!src || !light || !oEmbedUrl) return;
    fetchImage({ src, light, oEmbedUrl });
  }, [src, light, oEmbedUrl]);
  const fetchImage = async ({
    src: src2,
    light: light2,
    oEmbedUrl: oEmbedUrl2
  }) => {
    if (React.isValidElement(light2)) {
      return;
    }
    if (typeof light2 === "string") {
      setImage(light2);
      return;
    }
    if (cache[src2]) {
      setImage(cache[src2]);
      return;
    }
    setImage(null);
    const response = await fetch(oEmbedUrl2.replace("{url}", src2));
    const data = await response.json();
    if (data.thumbnail_url) {
      const fetchedImage = data.thumbnail_url.replace("height=100", "height=480").replace("-d_295x166", "-d_640");
      setImage(fetchedImage);
      cache[src2] = fetchedImage;
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      onClickPreview == null ? void 0 : onClickPreview(e);
    }
  };
  const handleClick = (e) => {
    onClickPreview == null ? void 0 : onClickPreview(e);
  };
  const isElement = React.isValidElement(light);
  const flexCenter = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  const styles = {
    preview: {
      width: "100%",
      height: "100%",
      backgroundImage: image && !isElement ? `url(${image})` : void 0,
      backgroundSize: "cover",
      backgroundPosition: "center",
      cursor: "pointer",
      ...flexCenter
    },
    shadow: {
      background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
      borderRadius: ICON_SIZE,
      width: ICON_SIZE,
      height: ICON_SIZE,
      position: isElement ? "absolute" : void 0,
      ...flexCenter
    },
    playIcon: {
      borderStyle: "solid",
      borderWidth: "16px 0 16px 26px",
      borderColor: "transparent transparent transparent white",
      marginLeft: "7px"
    }
  };
  const defaultPlayIcon = /* @__PURE__ */ React.createElement("div", { style: styles.shadow, className: "react-player__shadow" }, /* @__PURE__ */ React.createElement("div", { style: styles.playIcon, className: "react-player__play-icon" }));
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: styles.preview,
      className: "react-player__preview",
      tabIndex: previewTabIndex,
      onClick: handleClick,
      onKeyDown: handleKeyPress,
      ...previewAriaLabel ? { "aria-label": previewAriaLabel } : {}
    },
    isElement ? light : null,
    playIcon || defaultPlayIcon
  );
};
var Preview_default = Preview;
const Preview$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Preview_default
});
export {
  src_default as s
};
