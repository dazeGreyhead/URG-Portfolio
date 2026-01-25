import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { d as urlFor, U as URGButton, B as ButtonType } from "./router-BI5_5ib4.mjs";
import { d as dateFormatter } from "./dateFormatter-DjxP4Ii3.mjs";
function FeaturedProjectRender({
  featuredProject
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col xl:flex-row gap-8 group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: featuredProject._type === "portfolio-projects" ? "/portfolio-projects/$slug" : "/creative-corner/$slug",
        params: {
          slug: featuredProject.slug.current
        },
        className: "w-full xl:w-2/3",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("figure", { className: "h-auto w-full aspect-video overflow-hidden shrink-0 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: urlFor(featuredProject.mainImage).width(1e3).height(600).url(),
            alt: featuredProject.title,
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
          slug: featuredProject.slug.current
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "group-hover:text-urg-blue", children: featuredProject.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-urg-orange p-small", children: dateFormatter(featuredProject.publishedAt) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4", children: featuredProject.tags.map((tag) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "tag", children: tag }, tag);
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-urg-black-75 p-big", children: featuredProject.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(URGButton, { buttonType: ButtonType.expandArrow, children: featuredProject.coverVideo ? "Watch" : "Read more" })
        ] })
      }
    )
  ] });
}
function NonFeaturedProjectRender({
  projects
}) {
  return projects.map((project) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: project._type === "portfolio-projects" ? "/portfolio-projects/$slug" : "/creative-corner/$slug",
      params: {
        slug: project.slug.current
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row xl:flex-col w-full gap-5 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("figure", { className: "h-[80px] w-[150px] xl:h-auto xl:w-full aspect-video overflow-hidden group-hover:brightness-75", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: urlFor(project.mainImage).width(500).height(290).url(),
            alt: project.title,
            className: "h-full w-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "group-hover:text-urg-blue", children: project.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-urg-orange p-small", children: dateFormatter(project.publishedAt) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-urg-black-75 xl:p-big", children: project.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(URGButton, { buttonType: ButtonType.expandArrow, children: project.coverVideo ? "Watch" : "Read more" })
        ] })
      ] })
    },
    project._id
  ));
}
function FetchedProjectList({
  projectList,
  highlightFeatured = false
}) {
  let featuredProject;
  let otherProjects;
  if (highlightFeatured) {
    featuredProject = projectList.find((item) => item.featured);
    otherProjects = projectList.filter(
      (item) => item._id !== featuredProject?._id
    );
  } else {
    featuredProject = void 0;
    otherProjects = projectList;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full xl:w-[84%] flex flex-col gap-16 xl:gap-24", children: [
    highlightFeatured && featuredProject ? /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedProjectRender, { featuredProject }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-8 xl:grid xl:grid-cols-3 xl:gap-24", children: otherProjects && /* @__PURE__ */ jsxRuntimeExports.jsx(NonFeaturedProjectRender, { projects: otherProjects }) })
  ] }) });
}
export {
  FetchedProjectList as F
};
