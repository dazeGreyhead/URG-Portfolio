import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { F as FetchedProjectList } from "./FetchedProjectList-JSdVgtU5.mjs";
import { G as GrainyBackground } from "./GrainyBackground-CUqq47fm.mjs";
import { k as Route$2, s as servicesProvided, U as URGButton, B as ButtonType } from "./router-BI5_5ib4.mjs";
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
function Service() {
  const categoryProjects = Route$2.useLoaderData();
  const {
    service: serviceSlug
  } = Route$2.useParams();
  const serviceData = servicesProvided.find((item) => item.slug === serviceSlug);
  if (!serviceData) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-9 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Service Not Found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "We couldn't find the service: ",
        serviceSlug
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-9 py-18 md:pt-22 xl:px-16  h-fit min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-6 lg:gap-15 p-6 lg:p-10 w-full lg:w-[84%] border border-b-8 rounded-xl mt-6 items-center", style: {
      borderColor: serviceData.representingColor
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-5 xl:gap-8 w-[40%]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: serviceData.icon, alt: serviceData.title, className: "h-22 w-[102px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-urg-black uppercase text-center", children: serviceData.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-big text-trim", children: serviceData.description }),
        serviceData.softwareKnowledgeLogos && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col xl:flex-row items-center gap-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-trim", children: "Tools I Use: " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center flex-row flex-wrap gap-10", children: serviceData.softwareKnowledgeLogos?.map((logo) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: logo, className: "size-15 object-contain" }, logo)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center xl:justify-end gap-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(URGButton, { buttonType: ButtonType.secondary, children: "Contact me about this!" }) }),
          serviceData.externalLink && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: serviceData.externalLink, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(URGButton, { buttonType: ButtonType.primary, children: [
            "Check this out: ",
            serviceData.externalLink
          ] }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "pl-0 xl:pl-[7.5vw]", children: [
        "Projects that involve:",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          color: serviceData.representingColor
        }, children: serviceData.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FetchedProjectList, { projectList: categoryProjects })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GrainyBackground, {})
  ] });
}
export {
  Service as component
};
