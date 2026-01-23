import { j as jsxRuntimeExports, r as reactExports } from "../_chunks/_libs/react.mjs";
import { P as PortableText } from "../_chunks/_libs/@portabletext/react.mjs";
import { s as src_default } from "../_libs/react-player.mjs";
import { d as urlFor } from "./router-BcETx6jF.mjs";
import { d as dateFormatter } from "./dateFormatter-DjxP4Ii3.mjs";
import { u as useMatches, L as Link, d as useLocation } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { a as BsShare, L as LuLink, b as FaFacebookF, B as BsLinkedin, c as BsTwitterX, d as FaReddit, e as MdEmail, f as BiSolidChevronRight } from "../_libs/react-icons.mjs";
import { G as GrainyBackground } from "./GrainyBackground-CUqq47fm.mjs";
import { S as Slot } from "../_chunks/_libs/@radix-ui/react-slot.mjs";
const components = {
  types: {
    image: (props) => props.value ? /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          className: "rounded-lg not-prose w-full h-auto",
          src: urlFor(props.value).quality(80).auto("format").url(),
          alt: props?.value?.alt || "",
          width: "100%",
          height: "auto"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "p-small text-urg-black-50 mt-1 italic", children: props.value?.caption })
    ] }) : null,
    youtube: ({ value }) => {
      const { url } = value || {};
      return url ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        src_default,
        {
          src: url,
          controls: false,
          playing: true,
          loop: true,
          height: 500,
          width: 1e3
        }
      ) : null;
    }
  },
  marks: {
    link: ({ value }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: value.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-urg-blue visited:text-urg-blue-dark hover:underline no-underline",
          children: value.href
        }
      );
    }
  }
};
function ContentShareButtons({
  title,
  description,
  buttonContainerStyles,
  iconStyles,
  className
}) {
  const [currentUrl, setCurrentUrl] = reactExports.useState("");
  const location = useLocation();
  reactExports.useEffect(() => {
    const baseUrl = window.location.origin;
    setCurrentUrl(`${baseUrl}${location.href}`);
  }, [location.href]);
  const shareData = {
    title,
    text: description,
    url: currentUrl
  };
  const handleUniversalShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.debug("Share cancelled");
      }
    } else {
      console.log("Share didn't work...");
    }
  };
  const shareToPlatform = (platform) => {
    const encodedUrl = encodeURIComponent(shareData.url);
    const encodedTitle = encodeURIComponent(shareData.title);
    const encodedText = encodeURIComponent(shareData.text);
    let shareUrl = "";
    switch (platform) {
      case "x":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case "reddit":
        shareUrl = `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`;
        break;
      case "email":
        shareUrl = `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`;
        break;
      default:
        return;
    }
    window.open(shareUrl, "_blank", "width=600,height=400,noopener,noreferrer");
  };
  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(shareData.url);
      alert(`Copied the text: ${shareData.url}`);
    } catch (err) {
      alert("Failed to copy link.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: handleUniversalShare,
        className: buttonContainerStyles,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(BsShare, { className: iconStyles })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: copyToClipboard,
        className: buttonContainerStyles,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuLink, { className: iconStyles })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => shareToPlatform("facebook"),
        className: buttonContainerStyles,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaFacebookF, { className: iconStyles })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => shareToPlatform("linkedin"),
        className: buttonContainerStyles,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(BsLinkedin, { className: iconStyles })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => shareToPlatform("x"),
        className: buttonContainerStyles,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(BsTwitterX, { className: iconStyles })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => shareToPlatform("reddit"),
        className: buttonContainerStyles,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaReddit, { className: iconStyles })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => shareToPlatform("email"),
        className: buttonContainerStyles,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(MdEmail, { className: iconStyles })
      }
    )
  ] });
}
function Breadcrumb({ ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "nav",
    {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      className: "mb-5 xl:mb-3",
      ...props
    }
  );
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: `text-urg-black-50 flex flex-wrap items-center gap-1.5 p-regular wrap-break-word sm:gap-2.5 ${className ?? ""}`,
      ...props
    }
  );
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: `inline-flex items-center gap-1.5 ${className ?? ""}`,
      ...props
    }
  );
}
function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      "data-slot": "breadcrumb-link",
      className: `hover:text-urg-blue hover:underline hover:underline-offset-5 transition-colors ${className ?? ""}`,
      ...props
    }
  );
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: `text-slate-950 font-normal ${className ?? ""}`,
      ...props
    }
  );
}
function BreadcrumbSeparator({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: `[&>svg]:w-3.5 [&>svg]:h-3.5 ${className ?? ""}`,
      ...props,
      children: children ?? /* @__PURE__ */ jsxRuntimeExports.jsx(BiSolidChevronRight, { className: "text-urg-blue" })
    }
  );
}
function RouterBreadcrumb() {
  const matches = useMatches();
  const breadcrumbs = matches.flatMap((match) => {
    const staticData = match.staticData;
    if (!staticData?.breadcrumb) return [];
    const breadcrumbValue = typeof staticData.breadcrumb === "function" ? staticData.breadcrumb(match) : staticData.breadcrumb;
    const items = Array.isArray(breadcrumbValue) ? breadcrumbValue : [breadcrumbValue];
    return items.map((item) => ({
      label: item,
      path: match.pathname
    }));
  });
  if (breadcrumbs.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbList, { children: breadcrumbs.map((crumb, index) => {
    const isLast = index === breadcrumbs.length - 1;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: isLast ? /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbPage, { children: crumb.label }) : /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: crumb.path, children: crumb.label }) }) }),
      !isLast && /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbSeparator, {})
    ] }, `${crumb.path}-${index}`);
  }) }) });
}
function ContentPage({ content }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-9 pt-16 pb-10 md:pt-22 xl:px-16 xl:pb-35 h-fit min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RouterBreadcrumb, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex flex-col xl:flex-row justify-center", children: content && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col w-full gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col xl:flex-row xl:justify-between gap-5 xl:gap-10 h-auto items-center mb-0 xl:mb-10 border-urg-black", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 xl:gap-6 ", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-6xl xl:text-8xl", children: content.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-urg-orange p-normal xl:p-big", children: dateFormatter(content.publishedAt) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-urg-black-75 p-big", children: content.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 xl:gap-4", children: content.tags.map((tag) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "tag", children: tag }, tag);
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ContentShareButtons,
            {
              title: content.title,
              description: content.description,
              className: "flex gap-4 md:gap-6 xl:gap-8 flex-row flex-wrap justify-center xl:justify-normal",
              buttonContainerStyles: "group cursor-pointer p-2 md:p-3 xl:p-4 rounded-full hover:bg-urg-black",
              iconStyles: "size-4.5 md:size-6 xl:size-8 text-urg-black group-hover:text-urg-white"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("figure", { className: "h-auto w-full xl:w-[55%] overflow-hidden shrink-0 ", children: content.coverVideo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          src_default,
          {
            src: content.coverVideo.url,
            style: {
              width: "100%",
              height: "auto",
              aspectRatio: 16 / 9,
              marginBottom: "24px"
            },
            controls: true
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: urlFor(content.mainImage).url(),
              alt: content.mainImage.alt,
              className: "grow h-auto w-full "
            }
          ),
          content.mainImage.caption && /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "p-small uppercase text-urg-black-50 mt-3 italic", children: content.mainImage.caption })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "prose lg:prose-xl max-w-none w-full md:w-[80%] 2xl:w-[50%]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PortableText, { value: content.body, components }) }) })
    ] }, content._id) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GrainyBackground, {})
  ] });
}
export {
  ContentPage as C
};
