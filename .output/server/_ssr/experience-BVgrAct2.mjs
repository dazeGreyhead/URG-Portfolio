import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { G as GrainyBackground } from "./GrainyBackground-CUqq47fm.mjs";
import { u as urgWorkHistory, a as urgEducationHistory, b as urgSoftwareProficiencies } from "./router-BcETx6jF.mjs";
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
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "px-9 py-18 md:pt-22 xl:px-16 xl:pb-35 h-fit min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-6 xl:flex-row items-center xl:justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 w-full xl:w-[430px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Curriculum Vitae" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-urg-black-75", children: "You'll notice I've bounced around a lot of places." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex mt-12 flex-col gap-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col xl:flex-row items-stretch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full xl:w-[580px] pb-6 xl:pb-27", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "static xl:sticky xl:top-30 ", children: "Work History" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-10 ", children: urgWorkHistory.map((workplace) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-urg-orange", children: workplace.companyName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "text-urg-black-75", children: workplace.position }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-big text-urg-black-75", children: `${workplace.startDate} - ${workplace.endDate}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-urg-black-75", children: workplace.jobDescription })
          ] }, workplace.companyName);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col xl:flex-row items-stretch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full xl:w-[580px] pb-6 xl:pb-27", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "static xl:sticky xl:top-30 ", children: "Education" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-10", children: urgEducationHistory.map((school) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-urg-orange", children: school.schoolName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "text-urg-black-75", children: school.degree }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-big text-urg-black-75", children: `${school.startDate} - ${school.endDate}` })
          ] }, school.schoolName);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col xl:flex-row items-stretch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full xl:w-[580px] pb-15 xl:pb-27", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "static xl:sticky xl:top-30 ", children: "Software Proficiency" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-y-13 gap-x-2 sm:gap-x-30 sm:gap-y-23", children: urgSoftwareProficiencies.map((software) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: software.logo, alt: software.softwareName, className: "size-13 sm:size-20 object-contain" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-lg text-center sm:text-xl", children: software.softwareName })
          ] }, software.softwareName);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GrainyBackground, {})
  ] });
}
export {
  Experience as component
};
