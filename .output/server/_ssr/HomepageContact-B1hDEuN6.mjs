import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { e as emailjs } from "../_chunks/_libs/@emailjs/browser.mjs";
import { a } from "../_chunks/_libs/@hookform/resolvers.mjs";
import { u as useForm } from "../_libs/react-hook-form.mjs";
import { M as MdPhone } from "../_libs/react-icons.mjs";
import { f as urgContact, s as servicesProvided, i as urgSocialMedia } from "./router-BcETx6jF.mjs";
import { o as objectType, s as stringType, b as arrayType } from "../_libs/zod.mjs";
function SocialMediaIcons({
  flexAndGap,
  size,
  color,
  logoStyles
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: flexAndGap, children: urgSocialMedia?.map((logo) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: logo.link,
      target: "_blank",
      rel: "noopener noreferrer",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        logo.icon,
        {
          className: logoStyles,
          size: logo.sizeAdd ? logo.sizeAdd + size : size,
          color
        }
      )
    },
    logo.name
  )) });
}
const emailJSServiceID = "service_0s4txyo";
const emailJSTemplateID = "template_yqera5t";
const emailJSPublicKey = "3JVXlhYT6yLk1Icak";
const schema = objectType({
  client_name: stringType().min(1, "Name is required"),
  client_phone: stringType().min(5, "Valid phone number is required"),
  client_email: stringType().email("Invalid email address"),
  needed_services: arrayType(stringType()).min(1, "Select at least one service"),
  client_message: stringType().min(5, "Message must be at least 5 characters")
});
function HomepageContact({
  isHomepage = false
}) {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: a(schema)
  });
  const sendEmail = async (data) => {
    try {
      const templateParams = {
        ...data
      };
      await emailjs.send(emailJSServiceID, emailJSTemplateID, templateParams, {
        publicKey: emailJSPublicKey
      });
      alert("Your email was sent a successfully!");
      reset();
    } catch (error) {
      setError("root", {
        message: error?.text || "Failed to send email. Please try again."
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: `px-9 py-18 md:pt-22 xl:px-16 xl:pb-35  ${isHomepage ? "h-fit" : "min-h-screen"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 mb-14 xlm:mb-0 w-full xl:w-[430px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-urg-black", children: "Let's Work Together" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-urg-black-75", children: "Now you've seen what I'm capable of, why don't we work together?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-20 lg:justify-between flex-col xl:flex-row w-full 2xl:w-[90%] h-fit", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 w-full lg:w-[430px] items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Connect With Me" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${urgContact.email}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "primary-button text-2xl px-6 xl:px-12 w-fit",
                type: "button",
                children: urgContact.email
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row gap-2 items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MdPhone, { className: "size-10 fill-urg-black" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: urgContact.phone })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SocialMediaIcons,
                {
                  flexAndGap: "flex flex-row gap-10 items-center",
                  logoStyles: "hover:fill-urg-blue ",
                  color: "var(--color-urg-black)",
                  size: 45
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              className: "flex flex-col gap-10 w-full lg:w-[50%] items-center lg:items-start",
              onSubmit: handleSubmit(sendEmail),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " flex flex-col w-full 2xl:flex-row gap-10 2xl:gap-20", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "uppercase mb-1", children: "Name" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          ...register("client_name"),
                          type: "text",
                          placeholder: "Enter Your Name...",
                          className: "p-big text-urg-black w-full lg:w-[340px] h-11 border-b-2 border-urg-black p-4 focus:outline-urg-blue focus:border-urg-blue placeholder:text-urg-black-50"
                        }
                      )
                    ] }),
                    errors.client_name && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error mt-2", children: errors.client_name.message })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "uppercase mb-1", children: "Phone" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          ...register("client_phone"),
                          type: "tel",
                          placeholder: "Enter Your Phone number...",
                          className: "p-big text-urg-black w-full lg:w-[340px] h-11 border-b-2 border-urg-black p-4 focus:outline-urg-blue focus:border-urg-blue placeholder:text-urg-black-50"
                        }
                      )
                    ] }),
                    errors.client_phone && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error mt-2", children: errors.client_phone.message })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "w-full", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "uppercase mb-1", children: "Email" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        ...register("client_email"),
                        type: "email",
                        placeholder: "example@gmail.com",
                        className: "p-big text-urg-black w-full lg:w-[500px] h-11 border-b-2 border-urg-black p-4 focus:outline-urg-blue focus:border-urg-blue placeholder:text-urg-black-50"
                      }
                    )
                  ] }),
                  errors.client_email && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error mt-2", children: errors.client_email.message })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "uppercase mb-5 lg:mb-3", children: "What do you need?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:flex-wrap gap-4 lg:gap-x-16 lg:gap-y-6", children: [
                    servicesProvided.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "label",
                      {
                        className: "flex gap-2 items-center w-fit",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              type: "checkbox",
                              value: service.title,
                              ...register("needed_services"),
                              className: "size-4 accent-urg-blue "
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-big", children: service.title })
                        ]
                      },
                      service.title
                    )),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex gap-2 items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "checkbox",
                          value: "Other",
                          ...register("needed_services"),
                          className: "size-4 accent-urg-blue"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-big", children: "Other" })
                    ] })
                  ] }),
                  errors.needed_services && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error mt-2", children: errors.needed_services.message })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "w-full", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "uppercase mb-3", children: "Your Message" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "textarea",
                      {
                        ...register("client_message"),
                        placeholder: "Send me a message...",
                        rows: 4,
                        className: "p-big text-urg-black w-full border-2 border-urg-black px-4 py-2 rounded-lg focus:outline-urg-blue focus:border-urg-blue placeholder:text-urg-black-50"
                      }
                    )
                  ] }),
                  errors.client_message && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error mt-2", children: errors.client_message.message })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    disabled: isSubmitting,
                    type: "submit",
                    className: "secondary-button w-full xl:w-fit",
                    children: isSubmitting ? "Sending..." : "Send Me Your Message"
                  }
                ),
                errors.root && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error mt-2", children: errors.root.message })
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  HomepageContact as H
};
