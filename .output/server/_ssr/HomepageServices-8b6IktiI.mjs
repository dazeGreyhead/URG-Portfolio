import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { F as FancyArrow } from "./router-BI5_5ib4.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function HomepageServices({
  servicesProvided,
  isHomepage = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: ` ${isHomepage ? "h-fit" : "min-h-screen"} px-9 py-18 md:pt-22 sm:pb-48 sm:px-16`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-10 sm:mt-18", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-x-25 w-full sm:w-[84%] gap-y-17", children: servicesProvided.map((service) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/urg-services/$service",
              params: {
                service: service.slug
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  whileHover: {
                    scale: 1.03,
                    boxShadow: `0px 4px 4px 0px ${service.shadowColor}, 0px 8px 22.2px 0px ${service.shadowColor}`,
                    transition: { duration: 0.3 }
                  },
                  className: "bg-white/30 border border-b-8 flex flex-col items-center gap-12 w-full sm:w-[430px] px-4 pb-6 pt-4 rounded-xl hover:cursor-pointer",
                  style: {
                    borderColor: service.representingColor
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-xl bg-urg-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FancyArrow, { className: "size-13 rotate-45 fill-urg-white" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-8 items-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: service.icon,
                            alt: service.title,
                            className: "h-22 w-[102px]"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 items-center", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-urg-black uppercase", children: service.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center", children: service.description })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-6", children: service.softwareKnowledgeLogos?.map((logo) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: logo,
                        alt: logo,
                        className: "h-12 w-12 object-contain"
                      },
                      logo
                    )) })
                  ]
                }
              )
            },
            service.title
          );
        }) }) })
      ]
    }
  );
}
export {
  HomepageServices as H
};
