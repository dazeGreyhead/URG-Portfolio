import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { F as FetchedProjectList } from "./FetchedProjectList-JSdVgtU5.mjs";
import { G as GrainyBackground } from "./GrainyBackground-CUqq47fm.mjs";
import { R as Route$7 } from "./router-BI5_5ib4.mjs";
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
import "./dateFormatter-DjxP4Ii3.mjs";
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
function PortfolioProjects() {
  const portfolioProjects = Route$7.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-9 py-18 md:pt-22 xl:px-16 xl:pb-35 h-fit min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-6 xl:flex-row items-center xl:justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 w-full xl:w-[430px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "My Portfolio Projects" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-urg-black-75", children: "Here's some of the projects I've worked on over the years." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FetchedProjectList, { projectList: portfolioProjects }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GrainyBackground, {})
  ] });
}
export {
  PortfolioProjects as component
};
