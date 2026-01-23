import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { A as Analytics } from "../_chunks/_libs/@vercel/analytics.mjs";
import { S as SpeedInsights } from "../_chunks/_libs/@vercel/speed-insights.mjs";
import { R as ReactLenis } from "../_libs/lenis.mjs";
import { H as HomepageContact } from "./HomepageContact-B1hDEuN6.mjs";
import { L as Link, C as ClientOnly } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { h as urgTestimonials, s as servicesProvided, U as URGButton, B as ButtonType, F as FancyArrow, d as urlFor, f as urgContact, g as getHomepageCreativeContent, e as getHomepagePortfolioProjects } from "./router-BcETx6jF.mjs";
import { d as dateFormatter } from "./dateFormatter-DjxP4Ii3.mjs";
import { H as HomepageServices } from "./HomepageServices-DGoEVpON.mjs";
import { v as frame, w as cancelFrame } from "../_libs/motion-dom.mjs";
import { u as useScroll, m as motion, b as useTransform, A as AnimatePresence, c as useMotionValue } from "../_libs/framer-motion.mjs";
import "../_chunks/_libs/@emailjs/browser.mjs";
import "../_chunks/_libs/@hookform/resolvers.mjs";
import "../_libs/react-hook-form.mjs";
import "../_libs/zod.mjs";
import "../_libs/react-icons.mjs";
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
import "../_chunks/_libs/@sanity/image-url.mjs";
import "../_libs/motion-utils.mjs";
function HomepageCreativeOutlet() {
  const [creativeContent, setCreativeContent] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHomepageCreativeContent();
        setCreativeContent(data);
      } catch (e) {
        if (e instanceof Error) {
          console.error("Failed to fetch data: ", e);
          setError(e.message);
        } else {
          console.error("An unknown error occurred");
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center h-screen bg-gray-100 font-sans", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-700 animate-pulse", children: "Loading creative content..." }) });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center h-screen bg-gray-100 font-sans", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl text-red-500", children: [
      "Error: ",
      error
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-9 py-12 xl:pt-22 xl:px-16 xl:pb-35 h-fit min-h-screen bg-urg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 xl:flex-row items-center xl:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 w-full xl:w-[430px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-urg-white", children: "My Creative Outlet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-urg-black-25", children: "Sometimes inspiration strikes and you make something just for you." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/creative-corner", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative size-[120px] xl:size-[190px] continuous-spin-circle-button cursor-pointer group hover:scale-108 transition-transform duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 100 100",
            className: "absolute overflow-visible continuous-spin-circle-animation size-[120px] xl:size-[190px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Spinning Circle Text" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  stroke: "none",
                  fill: "none",
                  id: "circle-text-path",
                  d: "M 50, 10 A 40,40 0 1,1 50,90 A 40,40 0 1,1 50,10"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textPath",
                  {
                    className: "spinning-text-button font-primary font-light text-[65%] fill-urg-black-50 creative-marquee group-hover:fill-urg-blue",
                    href: "#circle-text-path",
                    children: "Go to Creative Corner."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textPath",
                  {
                    className: "spinning-text-button font-primary font-light text-[65%] fill-urg-black-50 creative-marquee group-hover:fill-urg-blue",
                    href: "#circle-text-path",
                    startOffset: "50%",
                    children: "Go to Creative Corner."
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FancyArrow, { className: "absolute fill-urg-black-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 spinning-text-button size-[40px] xl:size-[90px] rotate-45 group-hover:fill-urg-blue" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center mt-15 xl:mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full xl:w-[84%] flex flex-col gap-16 xl:gap-24", children: [
      creativeContent.map(
        (content) => content.featured ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col xl:flex-row gap-8 group ",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/creative-corner/$slug",
                  params: {
                    slug: content.slug.current
                  },
                  className: "w-full xl:w-2/3",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("figure", { className: "h-auto w-full aspect-video overflow-hidden shrink-0 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: urlFor(content.mainImage).url(),
                      alt: content.title,
                      className: "h-auto w-full object-cover group-hover:brightness-75"
                    }
                  ) })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/creative-corner/$slug",
                  params: {
                    slug: content.slug.current
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col ", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 ", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-urg-white group-hover:text-urg-blue", children: content.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-urg-orange p-small", children: dateFormatter(content.publishedAt) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4", children: content.tags.map((tag) => {
                        return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "tag", children: tag }, tag);
                      }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-urg-black-25 p-big", children: content.description })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      URGButton,
                      {
                        className: "text-urg-white",
                        buttonType: ButtonType.expandArrow,
                        children: content.coverVideo ? "Watch" : "Read more"
                      }
                    )
                  ] })
                }
              )
            ]
          },
          content._id
        ) : null
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-8 xl:grid xl:grid-cols-3 xl:gap-24", children: creativeContent.map(
        (content) => content.featured ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/creative-corner/$slug",
            params: {
              slug: content.slug.current
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row xl:flex-col w-full gap-5 group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("figure", { className: "h-[80px] w-[150px] xl:h-auto xl:w-full aspect-video overflow-hidden group-hover:brightness-75", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: urlFor(content.mainImage).width(500).height(290).url(),
                  alt: content.title,
                  className: "h-full w-full object-cover"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-urg-white group-hover:text-urg-blue", children: content.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-urg-orange p-small", children: dateFormatter(content.publishedAt) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-urg-black-25 xl:p-big", children: content.description })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  URGButton,
                  {
                    className: "text-urg-white",
                    buttonType: ButtonType.expandArrow,
                    children: content.coverVideo ? "Watch" : "Read more"
                  }
                )
              ] })
            ] })
          },
          content._id
        )
      ) })
    ] }) })
  ] });
}
const StarSVG = ({ colorClass }) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: `w-5 h-5 fill-current ${colorClass}`, viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) });
function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-0.5", children: [
    [...Array(fullStars)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StarSVG, { colorClass: "text-yellow-400" }, `full-${i}`)),
    hasHalfStar && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StarSVG, { colorClass: "text-gray-200" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 overflow-hidden w-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StarSVG, { colorClass: "text-yellow-400" }) })
    ] }),
    [...Array(emptyStars)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StarSVG, { colorClass: "text-gray-200" }, `empty-${i}`))
  ] });
}
function HomepageTestimonials({
  urgTestimonials: urgTestimonials2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "h-fit px-9 pt-12 pb-12 sm:pt-22 sm:pb-22 sm:px-16 ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 w-full xl:w-[430px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-urg-black", children: "Testimonials" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-urg-black-75", children: "Some kind words from my amazing clients." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-10 sm:mt-18", children: urgTestimonials2 && urgTestimonials2.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-20 xl:gap-10", children: urgTestimonials2.map((testimonial) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-0 sm:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-x-7 gap-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("figure", { className: "w-30 h-40 sm:w-50 sm:h-60 rounded-xl overflow-hidden row-span-1 xl:row-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: testimonial.clientPhoto,
          alt: testimonial.clientName,
          className: "h-full w-full block object-cover"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col  xl:flex-row justify-between items-start gap-4 xl:items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: " font-bold", children: testimonial.clientName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h6", { className: " text-urg-blue-dark text-lg", children: [
              testimonial.clientPosition,
              testimonial.companyName ? ` at ${testimonial.companyName}` : ""
            ] })
          ] }),
          testimonial.companyLogo && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: testimonial.companyLogo,
              alt: testimonial.companyName,
              className: "w-auto h-8"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: testimonial.stars })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-urg-black-75 p-big col-span-2 xl:col-span-1", children: testimonial.review })
    ] }) }, testimonial.clientName)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No testimonials available." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center xl:flex-row gap-8 xl:gap-20 justify-center mt-18", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://share.google/YSool0AaGfAFVlPpM",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "w-full xl:w-fit",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            URGButton,
            {
              buttonType: ButtonType.secondary,
              className: "text-2xl xl:px-16 w-full xl:w-fit flex justify-center",
              children: "See More Reviews"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://g.page/r/CSt2uV8IbIEvEBM/review",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "w-full xl:w-fit",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            URGButton,
            {
              buttonType: ButtonType.primary,
              className: "text-2xl xl:px-16 w-full xl:w-fit flex justify-center",
              children: "Write a Review"
            }
          )
        }
      )
    ] })
  ] });
}
function PlayButton({
  className,
  playVideo,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, {});
}
function HomepageFeaturedWorks({
  sliderDuration = 3e3,
  className,
  scrollYProgress
}) {
  const [currentProjectIndex, setCurrentProjectIndex] = reactExports.useState(0);
  const [prevProjectIndex, setPrevProjectIndex] = reactExports.useState(null);
  const [isPaused, setIsPaused] = reactExports.useState(false);
  const videoRefs = reactExports.useRef([]);
  const [portfolioProjects, setPortfolioProjects] = reactExports.useState(
    []
  );
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const opacity = useTransform(scrollYProgress, [0.05, 0.6], [0, 1]);
  reactExports.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHomepagePortfolioProjects();
        setPortfolioProjects(data);
      } catch (e) {
        if (e instanceof Error) {
          console.error("Failed to fetch data: ", e);
          setError(e.message);
        } else {
          console.error("An unknown error occurred");
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  reactExports.useEffect(() => {
    if (loading) return;
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === currentProjectIndex && !isPaused) {
        video.play().catch(() => {
          console.log("Autoplay blocked");
        });
      } else {
        video.pause();
      }
    });
  }, [currentProjectIndex, isPaused, loading]);
  const paginate = (newDirection) => {
    if (loading) return;
    setPrevProjectIndex(currentProjectIndex);
    setCurrentProjectIndex(
      (prev) => (prev + newDirection + portfolioProjects.length) % portfolioProjects.length
    );
  };
  reactExports.useEffect(() => {
    if (loading || isPaused || portfolioProjects.length === 0) return;
    const timer = setInterval(() => {
      paginate(1);
    }, sliderDuration);
    return () => clearInterval(timer);
  }, [currentProjectIndex, loading, isPaused, portfolioProjects]);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center h-screen bg-gray-100 font-sans", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-700 animate-pulse", children: "Loading projects..." }) });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center h-screen bg-gray-100 font-sans", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl text-red-500", children: [
      "Error: ",
      error
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.section,
    {
      style: { opacity },
      className: `relative h-screen overflow-hidden ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "absolute z-10 left-9 top-12 sm:left-16 sm:top-25 text-urg-white", children: "My Featured Works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex w-screen h-screen z-0", children: [
          portfolioProjects.map((project, index) => {
            const isActive = index === currentProjectIndex;
            const wasActive = index === prevProjectIndex;
            const zIndex = isActive ? 2 : wasActive ? 1 : 0;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: `absolute inset-0 h-full w-screen overflow-hidden`,
                initial: false,
                animate: {
                  WebkitMaskImage: isActive ? "linear-gradient(120deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 110%)" : "linear-gradient(120deg, rgba(0,0,0,1) -10%, rgba(0,0,0,0) 0%)"
                },
                transition: {
                  WebkitMaskImage: { duration: 3, ease: "linear" }
                },
                style: {
                  zIndex,
                  WebkitMaskSize: "300% 100%",
                  maskSize: "300% 100%",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      animate: { opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 },
                      transition: { delay: 0.8, duration: 1.2 },
                      className: "absolute z-20 left-9 sm:left-16 top-auto bottom-63 lg:bottom-40 flex flex-col gap-4 min-w-0 max-w-[355px] w-fit sm:max-w-[950px] ",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Link,
                        {
                          to: project._type === "portfolio-projects" ? "/portfolio-projects/$slug" : "/creative-corner/$slug",
                          params: {
                            slug: project.slug.current
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col gap-2 lg:gap-3", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col-reverse lg:flex-row gap-2 lg:gap-10 lg:items-center", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-urg-white text-3xl lg:text-6xl uppercase group-hover:underline", children: project.title }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative size-[80px] lg:size-[140px] cursor-pointer group-hover:scale-108 transition-transform duration-300", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  "svg",
                                  {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 100 100",
                                    className: "absolute overflow-visible continuous-spin-circle-animation size-[80px] lg:size-[140px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                    children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Spinning Circle Text" }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                                        "path",
                                        {
                                          stroke: "none",
                                          fill: "none",
                                          id: "circle-text-path",
                                          d: "M 50, 10 A 40,40 0 1,1 50,90 A 40,40 0 1,1 50,10"
                                        }
                                      ),
                                      /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                                          "textPath",
                                          {
                                            className: "spinning-text-button font-primary font-light text-[65%] fill-urg-white group-hover:fill-urg-blue",
                                            href: "#circle-text-path",
                                            children: "Open the Project Page."
                                          }
                                        ),
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                                          "textPath",
                                          {
                                            className: "spinning-text-button font-primary font-light text-[65%] fill-urg-white group-hover:fill-urg-blue",
                                            href: "#circle-text-path",
                                            startOffset: "50%",
                                            children: "Open the Project Page."
                                          }
                                        )
                                      ] })
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(FancyArrow, { className: "absolute fill-urg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 spinning-text-button size-[40px] lg:size-[70px] rotate-45 group-hover:fill-urg-blue" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-urg-white text-lg lg:text-2xl", children: project.description }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: project.tags.map((tag) => {
                              return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "tag", children: tag }, tag);
                            }) })
                          ] })
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full absolute z-10 bg-radial-[at_60%_30%] from-black/10 from-35% to-black/80 to-100%" }),
                  project.localIntroVideo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "video",
                    {
                      src: `/${project.localIntroVideo}`,
                      ref: (videRef) => {
                        if (videRef) videoRefs.current[index] = videRef;
                      },
                      autoPlay: true,
                      muted: true,
                      loop: true,
                      className: " h-full w-full object-cover"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("figure", { className: "absolute z-0 h-full w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.img,
                    {
                      initial: { scale: isActive ? 1.2 : 1 },
                      animate: { scale: isActive ? 1 : 1.2 },
                      transition: { duration: 11, ease: "linear" },
                      className: " h-full w-full object-cover",
                      src: urlFor(project.mainImage).url(),
                      alt: project.mainImage.alt || "Project Image"
                    }
                  ) })
                ]
              },
              project.title
            );
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-full h-2 z-40 bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { width: "0%" },
              animate: { width: isPaused ? "0%" : "100%" },
              transition: {
                duration: isPaused ? 0 : sliderDuration / 1e3,
                ease: "linear"
              },
              className: "h-full bg-urg-blue shadow-[0_0_10px_rgba(32,156,218,0.5)]"
            },
            `bar-${currentProjectIndex}`
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-28 lg:bottom-13 left-9 sm:left-16 z-50 flex flex-col lg:flex-row gap-6 lg:gap-20 lg:items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0 },
                transition: { duration: 0.8 },
                className: "text-white font-bold text-3xl lg:text-5xl font-secondary min-w-[100px]",
                children: [
                  currentProjectIndex + 1,
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/20 text-lg lg:text-2xl ml-2 font-secondary", children: [
                    "/ ",
                    portfolioProjects.length
                  ] })
                ]
              },
              currentProjectIndex
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => paginate(-1),
                  className: "px-8 py-3 lg:px-10 lg:py-2 hover:bg-white/10 text-white transition-colors border border-white/10 rounded-2xl backdrop-blur-sm cursor-pointer",
                  type: "button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(FancyArrow, { className: "size-9 lg:size-11 -rotate-90 fill-urg-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => paginate(1),
                  className: "px-8 py-3 lg:px-10 lg:py-2 hover:bg-white/10 text-white transition-colors border border-white/10 rounded-2xl backdrop-blur-sm cursor-pointer",
                  type: "button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(FancyArrow, { className: "size-9 lg:size-11 rotate-90 fill-urg-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setIsPaused(!isPaused),
                  className: "px-8 py-3 lg:px-10 lg:py-2 hover:bg-white/10 text-white transition-colors border border-white/10 rounded-2xl backdrop-blur-sm cursor-pointer",
                  type: "button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    PlayButton,
                    {
                      className: "size-7 lg:size-9 fill-urg-white",
                      playVideo: !isPaused
                    }
                  )
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-13 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-16 z-50 flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                animate: {
                  y: [8, -8, 8]
                },
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(FancyArrow, { className: "size-10 rotate-180 fill-urg-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-normal text-urg-white", children: "Testimonials" })
          ] })
        ] })
      ]
    }
  );
}
function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  reactExports.useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, {});
}
const urgDisciplines = [
  "Writer",
  "Graphic Designer",
  "Web Developer",
  "Video Producer",
  "Director",
  "Tourist Guide"
];
const TOTAL_ITEMS = urgDisciplines.length;
const ITEM_WIDTH = 450;
const CYCLE_MS = 2e3;
const TRANSITION_DURATION = 0.7;
function HomepageLanding({ className }) {
  const [offsetStep, setOffsetStep] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setOffsetStep((prev) => (prev + 1) % TOTAL_ITEMS);
    }, CYCLE_MS);
    return () => clearInterval(interval);
  }, []);
  const calculateItemSlot = (itemIndex, currentOffset) => {
    return (currentOffset - itemIndex + TOTAL_ITEMS) % TOTAL_ITEMS;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: `flex flex-col justify-center items-center h-screen px-7 py-9 md:py-10 md:px-16 overflow-hidden ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-[77vh] sm:h-full w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center grow-1 gap-2 sm:pt-12 md:gap-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-primary font-bold text-5xl/15 text-urg-black md:text-[64px]/12 text-center", children: "Hi! I'm Umang. I'm a" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/creative-corner", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-center h-40 md:h-49 w-[600px] hover:scale-105 transition-transform duration-300 cursor-pointer group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute font-primary font-bold text-urg-black creative-text text-7xl md:text-9xl group-hover:text-urg-blue-dark", children: "Creative" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 163.97 43.97",
                  className: "overflow-visible w-[350px] md:w-[600px]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Text circling on Creative word" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        stroke: "none",
                        fill: "none",
                        id: "text-path",
                        d: "M156.79,43.84H7.17c-3.89,0-7.05-3.16-7.05-7.05V7.17C.12,3.28,3.28.12,7.17.12h149.62c3.89,0,7.05,3.16,7.05,7.05v29.62c0,3.89-3.16,7.05-7.05,7.05Z M156.79,43.84H7.17c-3.89,0-7.05-3.16-7.05-7.05V7.17C.12,3.28,3.28.12,7.17.12h149.62c3.89,0,7.05,3.16,7.05,7.05v29.62c0,3.89-3.16,7.05-7.05,7.05Z"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.text, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.textPath,
                      {
                        className: "font-primary font-light text-[9.1px] fill-urg-black-50 group-hover:fill-urg-blue-dark",
                        href: "#text-path",
                        initial: { startOffset: "0%" },
                        animate: { startOffset: "50%" },
                        transition: {
                          duration: 30,
                          repeat: Infinity,
                          ease: "linear"
                        },
                        children: "Go to Creative Corner. Go to Creative Corner. Go to Creative Corner. Go to Creative Corner."
                      }
                    ) })
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[80px] w-[1400px] mask-gradient", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex h-[50px] justify-center items-center font-primary text-4xl md:text-6xl text-urg-white whitespace-nowrap mt-4 relative", children: urgDisciplines.map((discipline, index) => {
              const slot = calculateItemSlot(index, offsetStep);
              const isCenter = slot === 2;
              const x = (slot - 2) * 100;
              const scale = isCenter ? 1 : 0.6;
              const opacity = slot === 0 || slot === TOTAL_ITEMS - 1 ? 0 : 1;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.li,
                {
                  className: "absolute text-center",
                  style: {
                    width: ITEM_WIDTH,
                    color: isCenter ? "var(--color-urg-black)" : "var(--color-urg-black-75)"
                  },
                  initial: false,
                  animate: {
                    x: `${x}%`,
                    scale,
                    opacity
                  },
                  transition: { duration: TRANSITION_DURATION },
                  children: discipline
                },
                `${discipline} ${index}`
              );
            }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-0 md:items-end ", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${urgContact.email}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              URGButton,
              {
                buttonType: ButtonType.secondary,
                className: "text-2xl px-6 xl:px-12",
                children: urgContact.email
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex  gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  animate: {
                    y: [8, -8, 8]
                  },
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(FancyArrow, { className: "size-10 rotate-180" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-normal", children: "My Featured Works" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBackground, {})
      ]
    }
  );
}
function StickyContentWrapper() {
  const container = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: container
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: container, className: "relative isolate", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HomepageLanding, { className: "z-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[130vh] sticky bottom-0 -z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      HomepageFeaturedWorks,
      {
        className: "sticky top-0 origin-top",
        sliderDuration: 1e4,
        scrollYProgress
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-full h-full bg-black -z-30 top-0" })
  ] });
}
function App() {
  const lenisRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    function update(data) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }
    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReactLenis, { root: true, options: {
      autoRaf: false
    }, ref: lenisRef }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyContentWrapper, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HomepageTestimonials, { urgTestimonials }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HomepageServices, { isHomepage: true, servicesProvided }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HomepageCreativeOutlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HomepageContact, { isHomepage: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SpeedInsights, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Analytics, {})
  ] });
}
export {
  App as component
};
