import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { G as GrainyBackground } from "./GrainyBackground-CUqq47fm.mjs";
import { c as urgThingsILove } from "./router-BcETx6jF.mjs";
import "../_chunks/_libs/@tanstack/react-router.mjs";
import "../_libs/tiny-warning.mjs";
import "../_chunks/_libs/@tanstack/router-core.mjs";
import "../_chunks/_libs/@tanstack/store.mjs";
import "../_chunks/_libs/@tanstack/history.mjs";
import "../_libs/tiny-invariant.mjs";
import "node:stream/web";
import "node:stream";
import "../_chunks/_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_chunks/_libs/@tanstack/react-store.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_chunks/_libs/@tanstack/react-devtools.mjs";
import "../_chunks/_libs/@tanstack/devtools.mjs";
import "../_chunks/_libs/@tanstack/react-router-devtools.mjs";
import "../_chunks/_libs/@sanity/client.mjs";
import "../_libs/get-it.mjs";
import "http";
import "https";
import "tty";
import "../_chunks/_libs/decompress-response.mjs";
import "zlib";
import "../_libs/mimic-response.mjs";
import "../_chunks/_libs/follow-redirects.mjs";
import "url";
import "assert";
import "../_chunks/_libs/debug.mjs";
import "../_libs/ms.mjs";
import "querystring";
import "../_libs/through2.mjs";
import "../_chunks/_libs/readable-stream.mjs";
import "events";
import "buffer";
import "../_libs/util-deprecate.mjs";
import "node:string_decoder";
import "../_chunks/_libs/tunnel-agent.mjs";
import "tls";
import "../_libs/safe-buffer.mjs";
import "../_libs/is-retry-allowed.mjs";
import "../_libs/rxjs.mjs";
import "../_libs/nanoid.mjs";
import "../_libs/react-icons.mjs";
import "../_chunks/_libs/@sanity/image-url.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function AboutMe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "px-9 py-12 xl:pt-32 xl:px-16 xl:pb-12 h-fit min-h-screen flex flex-col gap-10 xl:gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flex justify-center items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8.5 xl:mt-10 flex flex-col xl:flex-row gap-8 xl:gap-20 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-[350px] h-[500px] xl:w-[400px] xl:h-[600px] rounded-[35px] xl:rounded-[50px] overflow-hidden ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "absolute min-h-full w-auto h-full max-w-none block transform -translate-x-1/2 left-1/2 ", src: "/Umang-Photo.jpg", alt: "Umang about me" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-8 w-full xl:w-[700px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-4xl sm:text-5xl", children: [
          "The name's ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-primary font-bold text-urg-blue", children: "Umang Raj Gurung" }),
          ". Could you tell?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-big text-urg-black-75", children: "As you probably read in the homepage, I'm a creative professional engaged in multiple disciplines: Web Development, Video Production, Graphic Design, Writing etc. I've had the creative bug bite me when I was a kid and I've tried to create things ever since. You can see some of what I make in my creative corner. The aim is to make a film somewhere in the timeline of my life. Gotta make it big and I ain't stoppin." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-col gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Here are some assortments of things I love" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 xl:grid-cols-2 min-[115rem]:grid-cols-3 gap-8", children: urgThingsILove.map((lovelyThings) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-[500px] sm:w-full sm:h-full aspect-none sm:aspect-video rounded-3xl overflow-hidden group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute z-10 w-full h-full bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute z-20 flex flex-col gap-2 left-6 right-6 bottom-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-urg-white", children: lovelyThings.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: " text-urg-black-25 p-regular", children: lovelyThings.shortDescription })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "absolute z-0 w-full h-full object-cover", src: lovelyThings.featuredImage, alt: lovelyThings.altText })
        ] }, lovelyThings.title);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GrainyBackground, {})
  ] });
}
export {
  AboutMe as component
};
