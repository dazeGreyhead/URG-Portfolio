import { c as createRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_chunks/_libs/react.mjs";
import { c as createClient } from "../_chunks/_libs/@sanity/client.mjs";
import { R as RiInstagramFill, I as ImFacebook2, B as BsLinkedin, F as FaYoutube } from "../_libs/react-icons.mjs";
import { i as imageUrlBuilder } from "../_chunks/_libs/@sanity/image-url.mjs";
import { u as useScroll, a as useMotionValueEvent, m as motion, M as MotionConfig } from "../_libs/framer-motion.mjs";
import { d as easeInOut } from "../_libs/motion-utils.mjs";
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
import "../_libs/motion-dom.mjs";
const FancyArrow = (props) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "svg",
  {
    width: 100,
    height: 100,
    viewBox: "0 0 100 100",
    fill: "#231F20",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Fancy Arrow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M80.9921 24.8543L80.9207 33.2572C80.9207 33.2572 60.405 29.3905 51.5151 9.04867C51.5627 53.0083 53.5373 66.5617 53.5373 100H47.5341C47.5341 64.6007 49.7466 56.2766 49.6911 9.18255C40.3809 29.6267 20 33.84 20 33.84L20.0714 25.4371C45.3929 25.2008 48.8426 4.89053 49.3263 0.0236258L52.1812 0C52.1812 0 51.9988 25.1457 81 24.8622L80.9921 24.8543Z" })
    ]
  }
);
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "px-9 py-10 sm:py-18 sm:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-[1646px]:flex-row w-full min-[1720px]:w-[95%] gap-8 2xl:gap-0 sm:justify-between items-center ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-7 2xl:gap-0 items-center 2xl:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl text-center sm:text-9xl font-primary font-extrabold uppercase hover:underline hover:underline-offset-10", children: "Umang Raj Gurung" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: scrollToTop,
          type: "button",
          className: "cursor-pointer flex flex-row items-center gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "font-light hover:underline hover:underline-offset-10", children: "Go back to the top" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FancyArrow, { className: "size-6" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col items-center 2xl:items-start gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/about-me",
          activeProps: {
            className: "underline underline-offset-10"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-light hover:underline hover:underline-offset-10", children: "About me" })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/portfolio-projects",
          activeProps: {
            className: "underline underline-offset-10"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-light hover:underline hover:underline-offset-10", children: "Projects" })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/creative-corner",
          activeProps: {
            className: "underline underline-offset-10"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-light hover:underline hover:underline-offset-10", children: "Creative Corner" })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/urg-services",
          activeProps: {
            className: "underline underline-offset-10"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-light hover:underline hover:underline-offset-10", children: "Services" })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/experience",
          activeProps: {
            className: "underline underline-offset-10"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-light hover:underline hover:underline-offset-10", children: "Experience" })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/contact",
          activeProps: {
            className: "underline underline-offset-10"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-light hover:underline hover:underline-offset-10", children: "Contact" })
        }
      ) })
    ] })
  ] }) });
}
var ButtonType = /* @__PURE__ */ ((ButtonType2) => {
  ButtonType2["primary"] = "primary-button";
  ButtonType2["secondary"] = "secondary-button";
  ButtonType2["expandArrow"] = "arrow-expand-button";
  return ButtonType2;
})(ButtonType || {});
const FancyArrowHead = (props) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "svg",
  {
    width: 100,
    height: 100,
    viewBox: "0 0 100 100",
    fill: "#231F20",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Fancy Arrow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M79.99 24.85L79.92 33.25C79.92 33.25 59.4 29.38 50.51 9.04C45.77 -1.82 52.43 0.95 48.69 9.17C39.38 29.63 19 33.84 19 33.84L19.07 25.44C44.39 25.2 47.84 4.89 48.33 0.02L51.18 0C51.18 0 51 25.15 80 24.86L79.99 24.85Z" })
    ]
  }
);
const FancyArrowStalk = (props) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "svg",
  {
    width: 100,
    height: 100,
    viewBox: "0 0 100 100",
    fill: "#231F20",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Fancy Arrow Stalk" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M48.5559 1.5197L51 1.5L50.4766 10.4143C50.5267 53.7149 52.5 67.0616 52.5 100H46.5C46.5 65.131 48.7137 56.926 48.6636 10.5423" })
    ]
  }
);
function URGButton({
  buttonType,
  className,
  children,
  type,
  arrowSpinned = false,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      className: `${buttonType} ${className} flex items-center gap-3 group`,
      type: type ? type : "button",
      onClick,
      children: [
        children,
        buttonType === ButtonType.expandArrow ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `relative h-[40px] w-[40px] ${arrowSpinned ? "rotate-180" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FancyArrowHead, { className: "absolute rotate-90 size-10 fill-urg-blue z-10 -left-[60%] group-hover:left-0 duration-200" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FancyArrowStalk, { className: "absolute rotate-90 size-10 fill-urg-blue z-0 -left-[40%] group-hover:left-0 opacity-0 group-hover:opacity-100 duration-200" })
            ]
          }
        ) : null
      ]
    }
  );
}
function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = reactExports.useState(false);
  const [headerBackdrop, setHeaderBackdrop] = reactExports.useState(false);
  const [openHamburgerMenu, setOpenHamburgerMenu] = reactExports.useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 50) {
      setHeaderBackdrop(true);
    } else {
      setHeaderBackdrop(false);
    }
    if (previous && latest > previous && latest && latest > 30) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  function showHamburgerMenu() {
    setOpenHamburgerMenu(!openHamburgerMenu);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      variants: {
        visible: { y: 0 },
        hidden: { y: "-100%" }
      },
      animate: hidden && !openHamburgerMenu ? "hidden" : "visible",
      transition: { duration: 0.3, ease: "linear" },
      className: `fixed top-0 left-0 z-100 px-7 h-18 xl:px-16 w-full md:h-[92px] flex items-center justify-center `,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex justify-end items-center md:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "absolute z-30 block 2xl:hidden top-3.3 left-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            MotionConfig,
            {
              transition: {
                duration: 0.3,
                ease: easeInOut
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.svg,
                {
                  viewBox: "0 0 62 62",
                  className: "fill-urg-black size-10 md:w-[50px] md:h-[50px]",
                  xmlns: "http://www.w3.org/2000/svg",
                  onClick: showHamburgerMenu,
                  initial: false,
                  animate: openHamburgerMenu ? "open" : "closed",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Hamburger Icon" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.line,
                      {
                        variants: {
                          open: {
                            rotate: "45deg",
                            y: 10.5,
                            x: -10.5
                          },
                          closed: {
                            rotate: "0deg",
                            y: 0,
                            x: 0
                          }
                        },
                        x1: 17,
                        y1: 20.5,
                        x2: 62,
                        y2: 20.5,
                        stroke: "#1c262b",
                        strokeWidth: 3
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.line,
                      {
                        variants: {
                          open: {
                            opacity: 0,
                            x: 10.5
                          },
                          closed: {
                            opacity: 1,
                            x: 0
                          }
                        },
                        y1: 31,
                        x2: 45,
                        y2: 31,
                        stroke: "#1c262b",
                        strokeWidth: 3
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.line,
                      {
                        variants: {
                          open: {
                            rotate: "-45deg",
                            y: -10.5,
                            x: -10.5
                          },
                          closed: { rotate: "0deg", y: 0, x: 0 }
                        },
                        x1: 17,
                        y1: 41.5,
                        x2: 62,
                        y2: 41.5,
                        stroke: "#1c262b",
                        strokeWidth: 3
                      }
                    )
                  ]
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-bold text-urg-black font-primary text-xl md:text-2xl md:ml-40 2xl:ml-0 hover:underline hover:underline-offset-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "UMANG RAJ GURUNG" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "hidden 2xl:flex items-center justify-center  flex-row gap-12 w-auto h-auto ", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/about-me",
                activeProps: {
                  className: "underline underline-offset-10"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10", children: "About me" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/portfolio-projects",
                activeProps: {
                  className: "underline underline-offset-10"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10", children: "Projects" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/creative-corner",
                activeProps: {
                  className: "underline underline-offset-10"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10", children: "Creative Corner" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/urg-services",
                activeProps: {
                  className: "underline underline-offset-10"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10", children: "Services" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/experience",
                activeProps: {
                  className: "underline underline-offset-10"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10", children: "Experience" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.ul,
            {
              className: " flex fixed left-0 bg-urg-white top-0 z-20 w-dvw h-screen flex-col items-center justify-center gap-20 2xl:hidden overflow-hidden",
              variants: {
                open: {
                  opacity: "100%",
                  pointerEvents: "auto"
                },
                closed: {
                  opacity: "0",
                  pointerEvents: "none"
                }
              },
              initial: "closed",
              animate: openHamburgerMenu ? "open" : "closed",
              transition: { duration: 0.3 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/about-me",
                    activeProps: {
                      className: "underline underline-offset-10"
                    },
                    onClick: showHamburgerMenu,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10", children: "About me" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/portfolio-projects",
                    activeProps: {
                      className: "underline underline-offset-10"
                    },
                    onClick: showHamburgerMenu,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10", children: "Projects" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/creative-corner",
                    activeProps: {
                      className: "underline underline-offset-10"
                    },
                    onClick: showHamburgerMenu,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10", children: "Creative Corner" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/urg-services",
                    activeProps: {
                      className: "underline underline-offset-10"
                    },
                    onClick: showHamburgerMenu,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10", children: "Services" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/experience",
                    activeProps: {
                      className: "underline underline-offset-10"
                    },
                    onClick: showHamburgerMenu,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10", children: "Experience" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/contact",
                    activeProps: {
                      className: "underline underline-offset-10"
                    },
                    onClick: showHamburgerMenu,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10", children: "Contact" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(URGButton, { buttonType: ButtonType.secondary, children: "Let's Work Together" }) }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: false,
            animate: { opacity: headerBackdrop ? 1 : 0 },
            transition: { duration: 1 },
            className: "absolute inset-0 -z-1 bg-white/30 backdrop-blur-sm"
          }
        )
      ]
    }
  );
}
const appCss = "/assets/styles-CuT1zA4e.css";
const Route$g = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "Umang Raj Gurung Portfolio Website"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png"
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg"
      },
      {
        rel: "shortcut icon",
        href: "/favicon.ico"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "manifest",
        href: "/site.webmanifest"
      }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
      false,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$9 = () => import("./experience-B8El091p.mjs");
const Route$f = createFileRoute("/experience")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component"),
  head: () => ({
    meta: [{
      name: "description",
      content: "Work history, education and software proficiency of Umang Raj Gurung."
    }, {
      title: "Experience - Umang Raj Gurung"
    }, {
      name: "keywords",
      content: "Umang Raj Gurung, Umang Gurung, URG, Web Developer, Tourist Guide, Video Producer, Nepal Tour Guide, Freelance Web Developer, Creative, Portfolio, Services, Writer, Director, Designer"
    }, {
      property: "og:title",
      content: "Experience - Umang Raj Gurung"
    }, {
      property: "og:description",
      content: "Work history, education and software proficiency of Umang Raj Gurung."
    }, {
      property: "og:image",
      content: "/Urg Website Landing Page.png"
    }, {
      property: "og:url",
      content: "https://www.umangrajgurung.com.np/experience"
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "site_name",
      content: "Umang Raj Gurung Portfolio Website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Experience - Umang Raj Gurung"
    }, {
      name: "twitter:description",
      content: "Work history, education and software proficiency of Umang Raj Gurung."
    }, {
      name: "twitter:image",
      content: "/Urg Website Landing Page.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.umangrajgurung.com.np/experience"
    }]
  })
});
const $$splitComponentImporter$8 = () => import("./contact-BX-qeWfx.mjs");
const Route$e = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component"),
  head: () => ({
    meta: [{
      name: "description",
      content: "Social Media links, Phone Number, Email Address to contact Umang Raj Gurung."
    }, {
      title: "Contact - Umang Raj Gurung"
    }, {
      name: "keywords",
      content: "Umang Raj Gurung, Umang Gurung, URG, Web Developer, Tourist Guide, Video Producer, Nepal Tour Guide, Freelance Web Developer, Creative, Portfolio, Services, Writer, Director, Designer"
    }, {
      property: "og:title",
      content: "Contact - Umang Raj Gurung"
    }, {
      property: "og:description",
      content: "Social Media links, Phone Number, Email Address to contact Umang Raj Gurung."
    }, {
      property: "og:image",
      content: "/Umang-Photo.jpg"
    }, {
      property: "og:url",
      content: "https://www.umangrajgurung.com.np/contact"
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "site_name",
      content: "Umang Raj Gurung Portfolio Website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Contact - Umang Raj Gurung"
    }, {
      name: "twitter:description",
      content: "Social Media links, Phone Number, Email Address to contact Umang Raj Gurung."
    }, {
      name: "twitter:image",
      content: "/Umang-Photo.jpg"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.umangrajgurung.com.np/contact"
    }]
  })
});
const $$splitComponentImporter$7 = () => import("./about-me-Do3agamW.mjs");
const Route$d = createFileRoute("/about-me")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
  head: () => ({
    meta: [{
      title: "About Me - Umang Raj Gurung"
    }, {
      name: "description",
      content: "Learn more about Umang Raj Gurung."
    }, {
      name: "keywords",
      content: "Umang Raj Gurung, Umang Gurung, URG, Web Developer, Tourist Guide, Video Producer, Nepal Tour Guide, Freelance Web Developer, Creative, Portfolio, Services, Writer, Director, Designer"
    }, {
      property: "og:title",
      content: "About Me - Umang Raj Gurung"
    }, {
      property: "og:description",
      content: "Learn more about Umang Raj Gurung."
    }, {
      property: "og:image",
      content: "/Umang-Photo.jpg"
    }, {
      property: "og:url",
      content: "https://www.umangrajgurung.com.np/about-me"
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "site_name",
      content: "Umang Raj Gurung Portfolio Website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "About Me - Umang Raj Gurung"
    }, {
      name: "twitter:description",
      content: "Learn more about Umang Raj Gurung."
    }, {
      name: "twitter:image",
      content: "/Umang-Photo.jpg"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.umangrajgurung.com.np/about-me"
    }]
  })
});
const Route$c = createFileRoute("/urg-services")({});
const Route$b = createFileRoute("/portfolio-projects")({
  staticData: { breadcrumb: "Portfolio Projects" }
});
const Route$a = createFileRoute("/creative-corner")({
  staticData: { breadcrumb: "Creative Corner" }
});
const $$splitComponentImporter$6 = () => import("./index-Bk12F7Hc.mjs");
const Route$9 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
  head: () => ({
    meta: [{
      name: "description",
      content: "Hi!, I'm Umang. I'm a creative web developer, tourist guide, video producer and much more!"
    }, {
      title: "Umang Raj Gurung Portfolio Website"
    }, {
      name: "keywords",
      content: "Umang Raj Gurung, Umang Gurung, URG, Web Developer, Tourist Guide, Video Producer, Nepal Tour Guide, Freelance Web Developer, Creative, Portfolio, Services, Writer, Director, Designer"
    }, {
      property: "og:title",
      content: "Umang Raj Gurung Portfolio Website"
    }, {
      property: "og:description",
      content: "Hi!, I'm Umang. I'm a creative web developer, tourist guide, video producer and much more!"
    }, {
      property: "og:image",
      content: "/Urg Website Landing Page.png"
    }, {
      property: "og:url",
      content: "https://www.umangrajgurung.com.np/"
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "site_name",
      content: "Umang Raj Gurung Portfolio Website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Umang Raj Gurung Portfolio Website"
    }, {
      name: "twitter:description",
      content: "Hi!, I'm Umang. I'm a creative web developer, tourist guide, video producer and much more!"
    }, {
      name: "twitter:image",
      content: "/Urg Website Landing Page.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.umangrajgurung.com.np/"
    }]
  })
});
const $$splitComponentImporter$5 = () => import("./index-DqKva3Kv.mjs");
const Route$8 = createFileRoute("/urg-services/")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  head: () => ({
    meta: [{
      title: "Services - Umang Raj Gurung"
    }, {
      name: "description",
      content: "Services provided by Umang Raj Gurung."
    }, {
      name: "keywords",
      content: "Umang Raj Gurung, Umang Gurung, URG, Web Developer, Tourist Guide, Video Producer, Nepal Tour Guide, Freelance Web Developer, Creative, Portfolio, Services, Writer, Director, Designer"
    }, {
      property: "og:title",
      content: "Services - Umang Raj Gurung"
    }, {
      property: "og:description",
      content: "Services provided by Umang Raj Gurung."
    }, {
      property: "og:image",
      content: "/Urg Website Landing Page.png"
    }, {
      property: "og:url",
      content: "https://www.umangrajgurung.com.np/urg-services"
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "site_name",
      content: "Umang Raj Gurung Portfolio Website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Services - Umang Raj Gurung"
    }, {
      name: "twitter:description",
      content: "Services provided by Umang Raj Gurung."
    }, {
      name: "twitter:image",
      content: "/Urg Website Landing Page.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.umangrajgurung.com.np/urg-services"
    }]
  })
});
const projectId = "j5zj3pm3";
const dataset = "sanitytry";
const apiVersion = "2025-09-13";
const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false
});
async function getCreativeContent() {
  try {
    const query = `*[_type == 'creative-content'] | order(publishedAt desc)`;
    const data = await client.fetch(query);
    if (!data || data.length === 0) {
      console.log("No creative content found.");
    }
    return data;
  } catch (error) {
    console.error("Failed to fetch creative content:", error);
    return [];
  }
}
async function getHomepageCreativeContent() {
  try {
    const query = `[*[_type == "creative-content" && featured == true][0],
  ...*[_type == "creative-content" && (!defined(featured) || featured != true)] | order(publishedAt desc)[0...3]]

`;
    const data = await client.fetch(query);
    if (!data || data.length === 0) {
      console.log("No creative content found.");
    }
    return data;
  } catch (error) {
    console.error("Failed to fetch creative content:", error);
    return [];
  }
}
async function getIndividualCreativeContent(slug) {
  try {
    const query = `*[_type == 'creative-content' && slug.current == $slug]{
    _createdAt,
    _id,
    title,
    mainImage,
    tags,
	description,
	coverVideo,
    publishedAt,
    body,
  }[0]`;
    const data = await client.fetch(query, { slug });
    if (!data) {
      console.log("No creative content found.");
    }
    return data;
  } catch (error) {
    console.error("Failed to fetch creative content:", error);
    return [];
  }
}
async function getHomepagePortfolioProjects() {
  try {
    const query = `*[_type == "portfolio-projects" || _type == "creative-content" && featured == true][0...6] | order(publishedAt desc)`;
    const data = await client.fetch(query);
    if (!data || data.length === 0) {
      console.log("No portfolio projects found.");
    }
    return data;
  } catch (error) {
    console.error("Failed to fetch portfolio projects:", error);
    return [];
  }
}
async function getPortfolioProjects() {
  try {
    const query = `*[_type == "portfolio-projects"] | order(publishedAt desc)`;
    const data = await client.fetch(query);
    if (!data || data.length === 0) {
      console.log("No portfolio projects found.");
    }
    return data;
  } catch (error) {
    console.error("Failed to fetch portfolio projects:", error);
    return [];
  }
}
async function getIndividualProject(slug) {
  try {
    const query = `*[_type == 'portfolio-projects' && slug.current == $slug][0]`;
    const data = await client.fetch(query, { slug });
    if (!data) {
      console.log("No portfolio project found.");
    }
    return data;
  } catch (error) {
    console.error("Failed to fetch portfolio project:", error);
    return [];
  }
}
async function getContentByCategory(categorySlug) {
  try {
    const query = `*[$categorySlug in categories[]->slug.current] | order(publishedAt desc) `;
    const data = await client.fetch(query, {
      categorySlug
    });
    if (!data || data.length === 0) {
      console.log("No projects of this category found.");
    }
    return data;
  } catch (error) {
    console.error("Failed to fetch projects of this category:", error);
    return [];
  }
}
const $$splitComponentImporter$4 = () => import("./index-CuTxCPcT.mjs");
const Route$7 = createFileRoute("/portfolio-projects/")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  loader: getPortfolioProjects,
  head: () => ({
    meta: [{
      title: "Portfolio Projects - Umang Raj Gurung"
    }, {
      name: "description",
      content: "Portfolio projects of Umang Raj Gurung."
    }, {
      name: "keywords",
      content: "Umang Raj Gurung, Umang Gurung, URG, Web Developer, Tourist Guide, Video Producer, Nepal Tour Guide, Freelance Web Developer, Creative, Portfolio, Services, Writer, Director, Designer"
    }, {
      property: "og:title",
      content: "Portfolio Projects - Umang Raj Gurung"
    }, {
      property: "og:description",
      content: "Portfolio projects of Umang Raj Gurung."
    }, {
      property: "og:image",
      content: "/Urg Website Landing Page.png"
    }, {
      property: "og:url",
      content: "https://www.umangrajgurung.com.np/portfolio-projects"
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "site_name",
      content: "Umang Raj Gurung Portfolio Website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Portfolio Projects - Umang Raj Gurung"
    }, {
      name: "twitter:description",
      content: "Portfolio projects of Umang Raj Gurung."
    }, {
      name: "twitter:image",
      content: "/Urg Website Landing Page.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.umangrajgurung.com.np/portfolio-projects"
    }]
  })
});
const $$splitComponentImporter$3 = () => import("./index-BjbltA0U.mjs");
const Route$6 = createFileRoute("/creative-corner/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  loader: getCreativeContent,
  head: () => ({
    meta: [{
      title: "Creative Corner - Umang Raj Gurung"
    }, {
      name: "description",
      content: "Creative works of Umang Raj Gurung."
    }, {
      name: "keywords",
      content: "Umang Raj Gurung, Umang Gurung, URG, Web Developer, Tourist Guide, Video Producer, Nepal Tour Guide, Freelance Web Developer, Creative, Portfolio, Services, Writer, Director, Designer"
    }, {
      property: "og:title",
      content: "Creative Corner - Umang Raj Gurung"
    }, {
      property: "og:description",
      content: "Creative works of Umang Raj Gurung."
    }, {
      property: "og:image",
      content: "/Urg Website Landing Page.png"
    }, {
      property: "og:url",
      content: "https://www.umangrajgurung.com.np/creative-corner"
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "site_name",
      content: "Umang Raj Gurung Portfolio Website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Creative Corner - Umang Raj Gurung"
    }, {
      name: "twitter:description",
      content: "Creative works of Umang Raj Gurung."
    }, {
      name: "twitter:image",
      content: "/Urg Website Landing Page.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.umangrajgurung.com.np/creative-corner"
    }]
  })
});
const Route$5 = createFileRoute("/urg-services/$service")({});
const Route$4 = createFileRoute("/portfolio-projects/$slug")({
  staticData: {
    breadcrumb: (match) => {
      console.log(match);
      return match.params.slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }
  }
});
const Route$3 = createFileRoute("/creative-corner/$slug")({
  staticData: {
    breadcrumb: (match) => {
      console.log(match);
      return match.params.slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }
  }
});
const urgContact = {
  email: "umangrajgurung@gmail.com",
  phone: "+977-9818827869",
  instagram: "https://www.instagram.com/umang_raj_gurung/",
  facebook: "https://www.facebook.com/ZAKrewdo/",
  linkedin: "https://www.linkedin.com/in/umang-raj-gurung/",
  youtube: "https://www.youtube.com/@urg6376"
};
const servicesProvided = [
  {
    title: "Web Development",
    description: "Let’s make the website that really reflects your business and what it has to offer. Make it hassle free, stable and focused on what it really needs to be.",
    icon: "/webdevelopmentServiceLogo.svg",
    softwareKnowledgeLogos: [
      "/javascriptLogo.png",
      "/reactLogo.png",
      "/WordPress_blue_logo.svg.png",
      "/Squarespace_Logo.png"
    ],
    representingColor: "#209cda",
    shadowColor: "rgba(144, 207, 238, 1)",
    slug: "web-development"
  },
  {
    title: "Video Production",
    description: "You want a video content made and we want to make it. So let’s get started. Doesn’t matter if you want a short form vertical content or a literal TV Commercial. I can make it all happen.",
    icon: "/videoproductionServiceLogo.svg",
    softwareKnowledgeLogos: [
      "/DaVinci_Resolve_Studio.png",
      "/Adobe_Premiere_Pro_CC_icon.svg.png",
      "/Adobe_After_Effects_CC_icon.svg.png"
    ],
    representingColor: "#e79536",
    shadowColor: "rgba(231, 159, 54, 0.5)",
    slug: "video-production"
  },
  {
    title: "Graphic Design",
    description: "So you need some small design made or you want to design a whole book! It doesn’t matter. Brochures, Booklets, Posters, Thumbnails? Let me handle it!",
    icon: "/graphicdesignServiceLogo.svg",
    softwareKnowledgeLogos: [
      "/Adobe_Photoshop_CC_icon.svg.png",
      "/Figma-logo.svg.png",
      "/indesignIcon.png",
      "/Adobe_Illustrator_CC_icon.svg.png"
    ],
    representingColor: "#239884",
    shadowColor: "rgba(35, 152, 132, 0.5)",
    slug: "graphic-design"
  },
  {
    title: "Writing",
    description: "Oh wait, there’s some writing to be done? Be it fiction or technical, hit me up! You want a story to tell but you don’t know how to do it? I’m here for you.",
    icon: "/writingServiceLogo.svg",
    representingColor: "#cc5c3b",
    shadowColor: "rgba(204, 92, 59, 0.5)",
    slug: "writing"
  },
  {
    title: "Tour Guiding",
    description: "So you want to experience the best parts of Nepal - it's culture, history, heritage, religious harmony and of course the mountains? You've found the right guy to show all that Nepal has to offer and much more!",
    icon: "/guideServiceLogo.svg",
    representingColor: "#3c525d",
    shadowColor: "rgba(60, 82, 93, 0.5)",
    slug: "tour-guiding",
    externalLink: "https://nepaltourandtrek.com/"
  }
];
const urgSocialMedia = [
  {
    name: "Instagram",
    icon: RiInstagramFill,
    link: urgContact.instagram,
    sizeAdd: 10
  },
  {
    name: "Facebook",
    icon: ImFacebook2,
    link: urgContact.facebook
  },
  {
    name: "LinkedIn",
    icon: BsLinkedin,
    link: urgContact.linkedin
  },
  {
    name: "Youtube",
    icon: FaYoutube,
    link: urgContact.youtube,
    sizeAdd: 18
  }
];
const urgThingsILove = [
  {
    title: "Grave of the Fireflies 1988",
    featuredImage: "/Grave Of The Fireflies Poster.png",
    altText: "Grave of the Fireflies poster",
    shortDescription: "Have only watched it once and don't have the guts to watch it again. It left quite an impact on me and this is my best film of all time. Prepare to cry a lot if you watch this movie and watch it subbed please. Yes I am a sub elitist!"
  },
  {
    title: "The Handmaiden 2016",
    featuredImage: "/The Handmaiden Poster.jpg",
    altText: "The Handmaiden poster",
    shortDescription: "Park Chan-wook is my favourite director and it is singlehandedly because of this film. I loved this film so much I watched it again as soon as it ended because I didn't want to leave the world that he had created. It's an amazing film and I love every one of Park Chan-wook's films."
  },
  {
    title: "Children of Men",
    featuredImage: "/Children of Men Poster.jpg",
    altText: "Children of Men poster",
    shortDescription: "Yup these movies changed my life. Alfonso Cuaron's one shot style might be a gimmick in a way but it makes you feel like you're in the action and it's all happening in front of you. I really like Clive Owen who was a surprise to see in such a high concept movie. I wish he did more stuff like this. Nonetheless, this movie is quite a ride."
  },
  {
    title: "Dota 2",
    featuredImage: "/Dota 2 poster.jpg",
    altText: "Dota 2",
    shortDescription: "I thought I was a hardcore gamer before I played dota 2. Turns out I knew nothing. Such a beautiful game but I wasted too much time in it that I probably could and should have used elsewhere. But yeah, a lot of memories, a lot of lessons and it just scratches that specific itch for a competitive ownage that can be had in such games. And the losses are brutal but that's just another life lesson in just another game."
  },
  {
    title: "GTA Vice City",
    featuredImage: "/GTA Vice City Poster.avif",
    altText: "GTA Vice City",
    shortDescription: "This is nostalgia bait and goddamn do I have so much nostalgia for it. I remember the pc my father bought for me and playing vice city on it for the first time. I don't think anything really comes close to that. It could be nostalgia doing the heavy lifting here but it sure is special and I hope I may some day be able to give that same feeling to someone else through my work or maybe I'll buy a pc for my future child and he or she will someday experience that."
  },
  {
    title: "Mass Effect 3",
    featuredImage: "/Mass Effect 3.jpg",
    altText: "Mass Effect 3",
    shortDescription: "A game where you have companinons who feel so real that you forget that they are actually fictional and that you are playing a game. Few pieces of art manage to do that, much less a game. I remember loading up a previous save because Tali, a companion, commited suicide because of my decision. Felt kinda like my friend died. Yup, I'll forgive the game for the shit 3 final color lame endings. The journey was very worthwhile and immensely enjoyable."
  },
  {
    title: "The Witcher 3",
    featuredImage: "/The Witcher 3 Poster.avif",
    altText: "The Witcher 3",
    shortDescription: "I don't know, I've gravitated towards medieval fantasy in anime and games but I don't really like lord of the rings. I remember trying skyrim and being quite disappointed. Somehow I had higher expectations for RPGs. Well Witcher 2 came along and blew me away. Such good graphics and story. Then witcher 3 released and became incredibly big and for a good reason. CDPR knocked it out of the park."
  },
  {
    title: "Frieren Beyond Journey's End",
    featuredImage: "/Frieren Poster.jpg",
    altText: "Frieren Beyond Journey's End",
    shortDescription: "An anime that touches your soul. In this modern world, where I began thinking classics need time to become classics or perhaps things are only good because of nostalgia, well here comes a modern masterpiece. I recommend this to everyone and gush about it everywhere. And you, whoever is reading must also watch this."
  }
];
const urgWorkHistory = [
  {
    companyName: "Gyaltsen Rug Industries / Makamali Carpet & Textile",
    position: "Freelance Web Developer & Designer",
    startDate: "April 2024",
    endDate: "Present",
    jobDescription: "Developed and maintaining both websites of Gyaltsen Rug and Makamali"
  },
  {
    companyName: "Volunteer Corps Nepal",
    position: "Freelance Graphic Designer",
    startDate: "March 2024",
    endDate: "Present",
    jobDescription: "Designing VCN website and many marketing materials"
  },
  {
    companyName: "Innovate Tech",
    position: "Associate Editor",
    startDate: "May 2022",
    endDate: "August 2023",
    jobDescription: "Editing the videos of the education platform: My Second Teacher"
  },
  {
    companyName: "AnkaEK",
    position: "Video Editor / Animator / Camera Operator / Concept Creator / Writer",
    startDate: "November 2020",
    endDate: "July 2021",
    jobDescription: "Creating concepts for short films, advertisements, documentaries etc."
  },
  {
    companyName: "Jazz Productions",
    position: "Video Editor / Production Assistant / Concept Creator",
    startDate: "August 2019",
    endDate: "February 2020",
    jobDescription: "Creating concepts for music videos, helping with the production and editing them."
  },
  {
    companyName: "Sofar Sounds Kathmandu",
    position: "Video Editor / Videographer",
    startDate: "August 2018",
    endDate: "December 2019",
    jobDescription: "Shooting the artists’ performances and editing them."
  },
  {
    companyName: "Kantipur Digital Corp.",
    position: "Intern Video Editor",
    startDate: "August 2017",
    endDate: "November 2017",
    jobDescription: "Editing footage from Kathmandu TV and radio to upload it on YouTube."
  },
  {
    companyName: "Techlekh",
    position: "Creative Design Lead / Video Editor / Videographer",
    startDate: "April 2016",
    endDate: "May 2017",
    jobDescription: "Producing, editing and shooting almost all of Techlekh videos during tenure."
  }
];
const urgEducationHistory = [
  {
    schoolName: "Deerwalk Institute of Technology",
    startDate: "2013",
    endDate: "2017",
    degree: "Bachelors of Science in Computer Science and Information Technology"
  },
  {
    schoolName: "Kathmandu Model College",
    startDate: "2011",
    endDate: "2013",
    degree: "Higher Secondary Education Board, Science"
  }
];
const urgSoftwareProficiencies = [
  {
    softwareName: "Adobe Premiere Pro",
    logo: "/Adobe_Premiere_Pro_CC_icon.svg.png"
  },
  {
    softwareName: "Davinci Resolve",
    logo: "/DaVinci_Resolve_Studio.png"
  },
  {
    softwareName: "Adobe After Effects",
    logo: "/Adobe_After_Effects_CC_icon.svg.png"
  },
  {
    softwareName: "ReactJS",
    logo: "/reactLogo.png"
  },
  {
    softwareName: "Javascript",
    logo: "/javascriptLogo.png"
  },
  {
    softwareName: "WordPress",
    logo: "/WordPress_blue_logo.svg.png"
  },
  {
    softwareName: "Squarespace",
    logo: "/Squarespace_Logo.png"
  },
  {
    softwareName: "Adobe Photoshop",
    logo: "/Adobe_Photoshop_CC_icon.svg.png"
  },
  {
    softwareName: "Figma",
    logo: "/Figma-logo.svg.png"
  },
  {
    softwareName: "Adobe InDesign",
    logo: "/indesignIcon.png"
  },
  {
    softwareName: "Adobe Illustrator",
    logo: "/Adobe_Illustrator_CC_icon.svg.png"
  }
];
const urgTestimonials = [
  {
    clientName: "Avib Adhikari",
    clientPosition: "CEO",
    companyName: "German Exam Nepal",
    companyLogo: "/German Exam Nepal Logo.jpg",
    stars: 5,
    review: `Starting German Exam Nepal, we were moving the German Language space in Nepal and when announcing TELC we  knew we didn't want the same old boring reels everyone else was doing. We had a vision for a funky, retro vibe but a very tight startup budget of under 5,000 Rs.

That’s where Umang stepped in. He didn't just direct; he captured our concept perfectly and handled the entire edit, delivering something far beyond our expectations. If you want to move away from the 'standard' and actually bring a unique idea to life, Umang is your guy. He truly knows the craft of filmmaking.`,
    clientPhoto: "/Abiv Photo 2.jpeg"
  }
];
const $$splitComponentImporter$2 = () => import("./index-_PUauKCg.mjs");
const Route$2 = createFileRoute("/urg-services/$service/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  loader: async ({
    params
  }) => {
    return await getContentByCategory(params.service);
  },
  head: ({
    params
  }) => {
    const serviceData = servicesProvided.find((item) => item.slug === params.service);
    return {
      meta: [{
        title: `${serviceData?.title || "Service"} - Umang Raj Gurung`
      }, {
        name: "description",
        content: serviceData?.description || "Services provided by Umang Raj Gurung."
      }, {
        name: "keywords",
        content: "Umang Raj Gurung, Umang Gurung, URG, Web Developer, Tourist Guide, Video Producer, Nepal Tour Guide, Freelance Web Developer, Creative, Portfolio, Services, Writer, Director, Designer"
      }, {
        property: "og:title",
        content: `${serviceData?.title || "Service"} - Umang Raj Gurung`
      }, {
        property: "og:description",
        content: serviceData?.description || "Services provided by Umang Raj Gurung."
      }, {
        property: "og:image",
        content: "/Urg Website Landing Page.png"
      }, {
        property: "og:url",
        content: `https://www.umangrajgurung.com.np/urg-services/${params.service}`
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "site_name",
        content: "Umang Raj Gurung Portfolio Website"
      }, {
        name: "twitter:card",
        content: "summary_large_image"
      }, {
        name: "twitter:title",
        content: `${serviceData?.title || "Service"} - Umang Raj Gurung`
      }, {
        name: "twitter:description",
        content: serviceData?.description || "Services provided by Umang Raj Gurung."
      }, {
        name: "twitter:image",
        content: "/Urg Website Landing Page.png"
      }],
      links: [{
        rel: "canonical",
        href: `https://www.umangrajgurung.com.np/urg-services/${params.service}`
      }]
    };
  }
});
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}
const $$splitComponentImporter$1 = () => import("./index-B-htEoSV.mjs");
const Route$1 = createFileRoute("/portfolio-projects/$slug/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  loader: async ({
    params
  }) => await getIndividualProject(params.slug),
  head: ({
    params,
    loaderData
  }) => {
    const project = loaderData && !Array.isArray(loaderData) ? loaderData : null;
    const imageUrl = project?.mainImage ? urlFor(project.mainImage).url() : "/Urg Website Landing Page.png";
    const title = `${project ? project.title : "Portfolio Projects"} - Umang Raj Gurung`;
    const description = project ? project.description : "Portfolio projects of Umang Raj Gurung.";
    const keywords = project ? project.tags?.join(", ") : "";
    const url = `https://www.umangrajgurung.com.np/portfolio-projects/${params.slug}`;
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: description
      }, {
        name: "keywords",
        content: keywords
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: description
      }, {
        property: "og:image",
        content: imageUrl
      }, {
        property: "og:url",
        content: url
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "site_name",
        content: "Umang Raj Gurung Portfolio Website"
      }, {
        name: "twitter:card",
        content: "summary_large_image"
      }, {
        name: "twitter:title",
        content: title
      }, {
        name: "twitter:description",
        content: description
      }, {
        name: "twitter:image",
        content: imageUrl
      }],
      links: [{
        rel: "canonical",
        href: url
      }]
    };
  }
});
const $$splitComponentImporter = () => import("./index-Bit3qZlG.mjs");
const Route = createFileRoute("/creative-corner/$slug/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  loader: async ({
    params
  }) => await getIndividualCreativeContent(params.slug),
  head: ({
    params,
    loaderData
  }) => {
    const project = loaderData && !Array.isArray(loaderData) ? loaderData : null;
    const imageUrl = project?.mainImage ? urlFor(project.mainImage).url() : "/Urg Website Landing Page.png";
    const title = `${project ? project.title : "Creative Content"} - Umang Raj Gurung`;
    const description = project ? project.description : "Creative works of Umang Raj Gurung.";
    const keywords = project ? project.tags?.join(", ") : "";
    const url = `https://www.umangrajgurung.com.np/creative-corner/${params.slug}`;
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: description
      }, {
        name: "keywords",
        content: keywords
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: description
      }, {
        property: "og:image",
        content: imageUrl
      }, {
        property: "og:url",
        content: url
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "site_name",
        content: "Umang Raj Gurung Portfolio Website"
      }, {
        name: "twitter:card",
        content: "summary_large_image"
      }, {
        name: "twitter:title",
        content: title
      }, {
        name: "twitter:description",
        content: description
      }, {
        name: "twitter:image",
        content: imageUrl
      }],
      links: [{
        rel: "canonical",
        href: url
      }]
    };
  }
});
const ExperienceRoute = Route$f.update({
  id: "/experience",
  path: "/experience",
  getParentRoute: () => Route$g
});
const ContactRoute = Route$e.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$g
});
const AboutMeRoute = Route$d.update({
  id: "/about-me",
  path: "/about-me",
  getParentRoute: () => Route$g
});
const UrgServicesRouteRoute = Route$c.update({
  id: "/urg-services",
  path: "/urg-services",
  getParentRoute: () => Route$g
});
const PortfolioProjectsRouteRoute = Route$b.update({
  id: "/portfolio-projects",
  path: "/portfolio-projects",
  getParentRoute: () => Route$g
});
const CreativeCornerRouteRoute = Route$a.update({
  id: "/creative-corner",
  path: "/creative-corner",
  getParentRoute: () => Route$g
});
const IndexRoute = Route$9.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$g
});
const UrgServicesIndexRoute = Route$8.update({
  id: "/",
  path: "/",
  getParentRoute: () => UrgServicesRouteRoute
});
const PortfolioProjectsIndexRoute = Route$7.update({
  id: "/",
  path: "/",
  getParentRoute: () => PortfolioProjectsRouteRoute
});
const CreativeCornerIndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => CreativeCornerRouteRoute
});
const UrgServicesServiceRouteRoute = Route$5.update({
  id: "/$service",
  path: "/$service",
  getParentRoute: () => UrgServicesRouteRoute
});
const PortfolioProjectsSlugRouteRoute = Route$4.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => PortfolioProjectsRouteRoute
});
const CreativeCornerSlugRouteRoute = Route$3.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => CreativeCornerRouteRoute
});
const UrgServicesServiceIndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => UrgServicesServiceRouteRoute
});
const PortfolioProjectsSlugIndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => PortfolioProjectsSlugRouteRoute
});
const CreativeCornerSlugIndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => CreativeCornerSlugRouteRoute
});
const CreativeCornerSlugRouteRouteChildren = {
  CreativeCornerSlugIndexRoute
};
const CreativeCornerSlugRouteRouteWithChildren = CreativeCornerSlugRouteRoute._addFileChildren(
  CreativeCornerSlugRouteRouteChildren
);
const CreativeCornerRouteRouteChildren = {
  CreativeCornerSlugRouteRoute: CreativeCornerSlugRouteRouteWithChildren,
  CreativeCornerIndexRoute
};
const CreativeCornerRouteRouteWithChildren = CreativeCornerRouteRoute._addFileChildren(CreativeCornerRouteRouteChildren);
const PortfolioProjectsSlugRouteRouteChildren = {
  PortfolioProjectsSlugIndexRoute
};
const PortfolioProjectsSlugRouteRouteWithChildren = PortfolioProjectsSlugRouteRoute._addFileChildren(
  PortfolioProjectsSlugRouteRouteChildren
);
const PortfolioProjectsRouteRouteChildren = {
  PortfolioProjectsSlugRouteRoute: PortfolioProjectsSlugRouteRouteWithChildren,
  PortfolioProjectsIndexRoute
};
const PortfolioProjectsRouteRouteWithChildren = PortfolioProjectsRouteRoute._addFileChildren(
  PortfolioProjectsRouteRouteChildren
);
const UrgServicesServiceRouteRouteChildren = {
  UrgServicesServiceIndexRoute
};
const UrgServicesServiceRouteRouteWithChildren = UrgServicesServiceRouteRoute._addFileChildren(
  UrgServicesServiceRouteRouteChildren
);
const UrgServicesRouteRouteChildren = {
  UrgServicesServiceRouteRoute: UrgServicesServiceRouteRouteWithChildren,
  UrgServicesIndexRoute
};
const UrgServicesRouteRouteWithChildren = UrgServicesRouteRoute._addFileChildren(UrgServicesRouteRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  CreativeCornerRouteRoute: CreativeCornerRouteRouteWithChildren,
  PortfolioProjectsRouteRoute: PortfolioProjectsRouteRouteWithChildren,
  UrgServicesRouteRoute: UrgServicesRouteRouteWithChildren,
  AboutMeRoute,
  ContactRoute,
  ExperienceRoute
};
const routeTree = Route$g._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  ButtonType as B,
  FancyArrow as F,
  Route$7 as R,
  URGButton as U,
  urgEducationHistory as a,
  urgSoftwareProficiencies as b,
  urgThingsILove as c,
  urlFor as d,
  getHomepagePortfolioProjects as e,
  urgContact as f,
  getHomepageCreativeContent as g,
  urgTestimonials as h,
  urgSocialMedia as i,
  Route$6 as j,
  Route$2 as k,
  Route$1 as l,
  Route as m,
  router as r,
  servicesProvided as s,
  urgWorkHistory as u
};
