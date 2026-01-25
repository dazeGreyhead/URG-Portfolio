globalThis.__nitro_main__ = import.meta.url;
import { N as NodeResponse, s as serve } from "./_libs/srvx.mjs";
import { d as defineHandler, H as HTTPError, t as toEventHandler, a as defineLazyEventHandler, b as H3Core, c as toRequest } from "./_libs/h3.mjs";
import { d as decodePath, w as withLeadingSlash, a as withoutTrailingSlash, j as joinURL } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import "node:http";
import "node:stream";
import "node:https";
import "node:http2";
import "./_libs/rou3.mjs";
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled;
  const status = error.status || 500;
  const url = event.url || new URL(event.req.url);
  if (status === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.req.method}] ${url}
`, error);
  }
  const headers2 = {
    "content-type": "application/json",
    "x-content-type-options": "nosniff",
    "x-frame-options": "DENY",
    "referrer-policy": "no-referrer",
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  if (status === 404 || !event.res.headers.has("cache-control")) {
    headers2["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    status,
    statusText: error.statusText,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status,
    statusText: error.statusText,
    headers: headers2,
    body
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/Adobe_Illustrator_CC_icon.svg.png": {
    "type": "image/png",
    "etag": '"e939-2i9k/ZYf+o1eVlXvpd6FgvxFxCE"',
    "mtime": "2025-08-05T13:47:08.181Z",
    "size": 59705,
    "path": "../public/Adobe_Illustrator_CC_icon.svg.png"
  },
  "/Abiv Photo 2.jpeg": {
    "type": "image/jpeg",
    "etag": '"1323d-kHoOeYj2ts8Rx+e6/hMX8sHdvQw"',
    "mtime": "2026-01-18T18:24:49.932Z",
    "size": 78397,
    "path": "../public/Abiv Photo 2.jpeg"
  },
  "/arrow up right.svg": {
    "type": "image/svg+xml",
    "etag": '"1e9-kNw7gKcBnw3Eou16xF4WRtRsjpk"',
    "mtime": "2025-08-29T11:33:53.925Z",
    "size": 489,
    "path": "../public/arrow up right.svg"
  },
  "/Abiv Photo.jpg": {
    "type": "image/jpeg",
    "etag": '"1cd5c-+HG933kSdVJJ8s3E+sCSdgRPqGg"',
    "mtime": "2026-01-18T06:56:10.697Z",
    "size": 118108,
    "path": "../public/Abiv Photo.jpg"
  },
  "/Adobe_Premiere_Pro_CC_icon.svg.png": {
    "type": "image/png",
    "etag": '"257d-BjeufptXwnd1Ho+TWumtrHd7J9M"',
    "mtime": "2025-08-05T13:45:20.595Z",
    "size": 9597,
    "path": "../public/Adobe_Premiere_Pro_CC_icon.svg.png"
  },
  "/Adobe_Photoshop_CC_icon.svg.png": {
    "type": "image/png",
    "etag": '"5862-b1CvdeWhsXqIcTGn93Iroa0tnC4"',
    "mtime": "2025-08-05T13:45:46.149Z",
    "size": 22626,
    "path": "../public/Adobe_Photoshop_CC_icon.svg.png"
  },
  "/Children of Men Poster.jpg": {
    "type": "image/jpeg",
    "etag": '"251c8-m9/7JSj1nFO5lOKk5fbd8gSNRzY"',
    "mtime": "2025-09-08T10:53:51.845Z",
    "size": 152008,
    "path": "../public/Children of Men Poster.jpg"
  },
  "/Adobe_After_Effects_CC_icon.svg.png": {
    "type": "image/png",
    "etag": '"8a9c-WGzIfjmnvbBhsdM9Z7P6PVl8Pvg"',
    "mtime": "2025-08-05T13:45:33.267Z",
    "size": 35484,
    "path": "../public/Adobe_After_Effects_CC_icon.svg.png"
  },
  "/Blue Go @4x.png": {
    "type": "image/png",
    "etag": '"362a-l/dx+Tu7FpaWVQDQw8zmm/wYu3s"',
    "mtime": "2025-08-11T12:58:44.872Z",
    "size": 13866,
    "path": "../public/Blue Go @4x.png"
  },
  "/Circle Path.svg": {
    "type": "image/svg+xml",
    "etag": '"171-iu5rLku0dK7qmV6Tc/f7DURf2l0"',
    "mtime": "2025-08-22T20:43:15.568Z",
    "size": 369,
    "path": "../public/Circle Path.svg"
  },
  "/apple-touch-icon.png": {
    "type": "image/png",
    "etag": '"a7f3-WqsPDhw8Rv36n/tcjifVKltsQek"',
    "mtime": "2026-01-23T13:54:10.000Z",
    "size": 42995,
    "path": "../public/apple-touch-icon.png"
  },
  "/Creative corner black@4x.png": {
    "type": "image/png",
    "etag": '"33c1-XekEcj5spvmFMHVf3uifx8gzZGI"',
    "mtime": "2025-08-11T12:52:41.519Z",
    "size": 13249,
    "path": "../public/Creative corner black@4x.png"
  },
  "/Dark blue go@4x.png": {
    "type": "image/png",
    "etag": '"3646-9Ugcz1fYUOfwmmFdn9SiqX7jqus"',
    "mtime": "2025-08-11T12:59:49.521Z",
    "size": 13894,
    "path": "../public/Dark blue go@4x.png"
  },
  "/Creative Corner CTA@4x.png": {
    "type": "image/png",
    "etag": '"57f6-PwBndEqfgFEWYV6mWqLXsf6SAwA"',
    "mtime": "2025-08-11T12:47:07.865Z",
    "size": 22518,
    "path": "../public/Creative Corner CTA@4x.png"
  },
  "/Dota 2 poster.jpg": {
    "type": "image/jpeg",
    "etag": '"111ae-BjomPN7je25uXM2uwS5T4TZpluU"',
    "mtime": "2025-09-08T10:53:52.172Z",
    "size": 70062,
    "path": "../public/Dota 2 poster.jpg"
  },
  "/Fancy arrow.svg": {
    "type": "image/svg+xml",
    "etag": '"1de-ocXDOF3A80OFTD2iA25DsdVqe80"',
    "mtime": "2025-08-29T11:46:30.711Z",
    "size": 478,
    "path": "../public/Fancy arrow.svg"
  },
  "/facebook-svgrepo-com.svg": {
    "type": "image/svg+xml",
    "etag": '"2a7-V8+vFlrYb4vDj8JNhUYceZXYNYg"',
    "mtime": "2025-08-23T12:12:25.256Z",
    "size": 679,
    "path": "../public/facebook-svgrepo-com.svg"
  },
  "/Fancy arrowhead.svg": {
    "type": "image/svg+xml",
    "etag": '"15d-scK8lCRr1qJhtMs6wylSJ3Qp9K8"',
    "mtime": "2025-09-16T16:30:38.300Z",
    "size": 349,
    "path": "../public/Fancy arrowhead.svg"
  },
  "/DaVinci_Resolve_Studio.png": {
    "type": "image/png",
    "etag": '"1cae9-K8duVq2sC/uxDDE4uwm02WgRAsg"',
    "mtime": "2025-08-05T13:45:05.697Z",
    "size": 117481,
    "path": "../public/DaVinci_Resolve_Studio.png"
  },
  "/Fancy arrowstalk.svg": {
    "type": "image/svg+xml",
    "etag": '"103-GPSLwp9c9wphGnqrXGfcrqGTa8E"',
    "mtime": "2025-09-16T16:30:17.753Z",
    "size": 259,
    "path": "../public/Fancy arrowstalk.svg"
  },
  "/DSC09016.webp": {
    "type": "image/webp",
    "etag": '"5befe-yESC6Zj2jjD4q0Nz0lwv5Es1+E0"',
    "mtime": "2025-08-04T05:53:45.774Z",
    "size": 376574,
    "path": "../public/DSC09016.webp"
  },
  "/cardboard-texture.jpg": {
    "type": "image/jpeg",
    "etag": '"fc3de-N/VfV3u8xa0olHZ4zp3Izti2xyE"',
    "mtime": "2025-09-04T18:19:50.765Z",
    "size": 1033182,
    "path": "../public/cardboard-texture.jpg"
  },
  "/Breaking Bad Poster.jpg": {
    "type": "image/jpeg",
    "etag": '"1382e0-QzgLfB1aaXFptL3nTMqze+e+RdE"',
    "mtime": "2025-09-08T10:53:51.653Z",
    "size": 1278688,
    "path": "../public/Breaking Bad Poster.jpg"
  },
  "/Dark Poster.png": {
    "type": "image/png",
    "etag": '"1bc19b-ee9xjqTxyDKRcIvFLNRSed0eeBQ"',
    "mtime": "2025-09-08T10:53:52.001Z",
    "size": 1819035,
    "path": "../public/Dark Poster.png"
  },
  "/favicon-96x96.png": {
    "type": "image/png",
    "etag": '"33e4-CRPCONK2Z4qdCPEaVSQT5Aofjhk"',
    "mtime": "2026-01-23T13:54:10.000Z",
    "size": 13284,
    "path": "../public/favicon-96x96.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"3aee-2gLfP0ekTeHZFTK5mMKBY/Awa/I"',
    "mtime": "2026-01-23T13:54:10.000Z",
    "size": 15086,
    "path": "../public/favicon.ico"
  },
  "/favicon.svg": {
    "type": "image/svg+xml",
    "etag": '"8932-fQ2Fe2rinUaUJG/gIX5VII8P6l4"',
    "mtime": "2026-01-23T13:54:10.000Z",
    "size": 35122,
    "path": "../public/favicon.svg"
  },
  "/Favicon.png": {
    "type": "image/png",
    "etag": '"656f-TMXmRYCdymyW+gvqgAt/SLSGw/E"',
    "mtime": "2026-01-10T05:29:36.753Z",
    "size": 25967,
    "path": "../public/Favicon.png"
  },
  "/Figma-logo.svg.png": {
    "type": "image/png",
    "etag": '"138b3-HIYF2+7QW96Eftd3SuHYUJTpP6M"',
    "mtime": "2025-08-05T13:46:18.947Z",
    "size": 80051,
    "path": "../public/Figma-logo.svg.png"
  },
  "/filmscreengrab.jpeg": {
    "type": "image/jpeg",
    "etag": '"3d7ee-XQfQl5DzvozBl94TRgCwtMA3Xhg"',
    "mtime": "2025-08-21T01:15:38.180Z",
    "size": 251886,
    "path": "../public/filmscreengrab.jpeg"
  },
  "/goToLinkButton.svg": {
    "type": "image/svg+xml",
    "etag": '"2c4-eMjQWmIBAXYAakjZqvL4Ou5DcIw"',
    "mtime": "2025-08-21T17:32:32.431Z",
    "size": 708,
    "path": "../public/goToLinkButton.svg"
  },
  "/German Exam Nepal Logo.jpg": {
    "type": "image/jpeg",
    "etag": '"da39-OIa5VeelEyMo/0CD6dXEZdU1dpw"',
    "mtime": "2026-01-17T11:14:41.526Z",
    "size": 55865,
    "path": "../public/German Exam Nepal Logo.jpg"
  },
  "/graphicdesignServiceLogo.svg": {
    "type": "image/svg+xml",
    "etag": '"bb8-S7LvhhpCJM/rMxxHyea+BIyqx94"',
    "mtime": "2025-08-21T16:11:17.535Z",
    "size": 3e3,
    "path": "../public/graphicdesignServiceLogo.svg"
  },
  "/Gruff Bike Rider.jpg": {
    "type": "image/jpeg",
    "etag": '"12da8-bl5zlKm6TGaKkt2vr4livTn/VPA"',
    "mtime": "2025-09-13T18:38:44.548Z",
    "size": 77224,
    "path": "../public/Gruff Bike Rider.jpg"
  },
  "/guideServiceLogo.svg": {
    "type": "image/svg+xml",
    "etag": '"be0-UhBuNnoQA9FTOH3rryCbiSCkSL8"',
    "mtime": "2026-01-01T14:14:12.826Z",
    "size": 3040,
    "path": "../public/guideServiceLogo.svg"
  },
  "/Hamburger-Icon.svg": {
    "type": "image/svg+xml",
    "etag": '"145-+kjsWzJUyt1FCkdXH50sSFs/5nE"',
    "mtime": "2025-08-26T12:47:24.813Z",
    "size": 325,
    "path": "../public/Hamburger-Icon.svg"
  },
  "/GTA Vice City Poster.avif": {
    "type": "image/avif",
    "etag": '"596f-OYVWlhXLMd5QsSYftuKfoZVp4xU"',
    "mtime": "2025-09-08T10:53:52.782Z",
    "size": 22895,
    "path": "../public/GTA Vice City Poster.avif"
  },
  "/indesignIcon.png": {
    "type": "image/png",
    "etag": '"82d-KU6IPY+Zj36B4eAO9PD/TTuPWdk"',
    "mtime": "2025-08-05T13:46:09.346Z",
    "size": 2093,
    "path": "../public/indesignIcon.png"
  },
  "/instagram-1-svgrepo-com.svg": {
    "type": "image/svg+xml",
    "etag": '"d57-u98mXnaGndAzUjKrgjUYwQ7nU6E"',
    "mtime": "2025-08-23T12:11:46.265Z",
    "size": 3415,
    "path": "../public/instagram-1-svgrepo-com.svg"
  },
  "/Grave Of The Fireflies Poster.png": {
    "type": "image/png",
    "etag": '"8eea2-mCQGZpAmn4JrvBFiUg/UmTmtQ0g"',
    "mtime": "2025-09-08T10:53:52.658Z",
    "size": 585378,
    "path": "../public/Grave Of The Fireflies Poster.png"
  },
  "/javascriptLogo.png": {
    "type": "image/png",
    "etag": '"7ae-jr1GFsfGEnZpVOEnSoyZRgrCHn4"',
    "mtime": "2025-08-04T14:45:53.856Z",
    "size": 1966,
    "path": "../public/javascriptLogo.png"
  },
  "/film-grain.jpg": {
    "type": "image/jpeg",
    "etag": '"16d73d-2tKw0SGuK5hEp9djsr0CQ4A7w2E"',
    "mtime": "2025-09-17T04:25:19.190Z",
    "size": 1496893,
    "path": "../public/film-grain.jpg"
  },
  "/john wick.jpeg": {
    "type": "image/jpeg",
    "etag": '"198b-sjFOIE3U3e2Gg4dBZwOzyUmIm2k"',
    "mtime": "2025-12-31T06:20:54.635Z",
    "size": 6539,
    "path": "../public/john wick.jpeg"
  },
  "/Frieren Poster.jpg": {
    "type": "image/jpeg",
    "etag": '"1b6c69-tY3lxLlW/KTdyFdT+XZ1FljMo94"',
    "mtime": "2025-09-08T10:53:52.530Z",
    "size": 1797225,
    "path": "../public/Frieren Poster.jpg"
  },
  "/grain-uber.png": {
    "type": "image/png",
    "etag": '"1f270a-uqnVgNZXGlPy51IaxAbpfCq1TGc"',
    "mtime": "2025-09-17T04:37:00.087Z",
    "size": 2041610,
    "path": "../public/grain-uber.png"
  },
  "/grainy-background.png": {
    "type": "image/png",
    "etag": '"1b41f0-qimb+LfDkYoqWaChWBz+s2N+i9U"',
    "mtime": "2025-09-04T19:25:04.206Z",
    "size": 1786352,
    "path": "../public/grainy-background.png"
  },
  "/John_Wick_franchise.png": {
    "type": "image/png",
    "etag": '"107ad-//UOOoZuU8UVQsEixdGlVZOJw3U"',
    "mtime": "2025-12-31T06:23:43.345Z",
    "size": 67501,
    "path": "../public/John_Wick_franchise.png"
  },
  "/linkedin-svgrepo-com.svg": {
    "type": "image/svg+xml",
    "etag": '"2d4-jmoazvQqMB7xSuoT/87Z1jTjHdA"',
    "mtime": "2025-08-23T12:13:29.898Z",
    "size": 724,
    "path": "../public/linkedin-svgrepo-com.svg"
  },
  "/Logo_Williams_F1.png": {
    "type": "image/png",
    "etag": '"101c0-26MIeFx66zRzLD68nZYT8d37wY4"',
    "mtime": "2025-12-31T06:26:38.238Z",
    "size": 65984,
    "path": "../public/Logo_Williams_F1.png"
  },
  "/noun-graphic-design-7970132.svg": {
    "type": "image/svg+xml",
    "etag": '"a3d-5mlRJog3CjWSrpoZ3LSm8EEDtUs"',
    "mtime": "2025-08-05T14:00:12.039Z",
    "size": 2621,
    "path": "../public/noun-graphic-design-7970132.svg"
  },
  "/noun-guide-5996774.svg": {
    "type": "image/svg+xml",
    "etag": '"d0d-xWPFO1hJBBBsCyeTnaecGPOZaiA"',
    "mtime": "2026-01-01T04:12:09.093Z",
    "size": 3341,
    "path": "../public/noun-guide-5996774.svg"
  },
  "/Kaiju In Kathmandu.webp": {
    "type": "image/webp",
    "etag": '"32718-J5xy80ncsdru5cDOpkuwvEJYVoU"',
    "mtime": "2025-08-07T16:45:07.739Z",
    "size": 206616,
    "path": "../public/Kaiju In Kathmandu.webp"
  },
  "/noun-play-button-5214721.svg": {
    "type": "image/svg+xml",
    "etag": '"315-5QNMKrSdTYMuar6hATqdHv7BoU4"',
    "mtime": "2025-08-05T13:59:13.701Z",
    "size": 789,
    "path": "../public/noun-play-button-5214721.svg"
  },
  "/OG_(Redbull).png": {
    "type": "image/png",
    "etag": '"b8bc-YQlu0lAlkYMJnIFddLFHnMeazYg"',
    "mtime": "2025-12-31T13:08:44.745Z",
    "size": 47292,
    "path": "../public/OG_(Redbull).png"
  },
  "/noun-quill-129745.svg": {
    "type": "image/svg+xml",
    "etag": '"8cc-FFBcNAFmUNz5tKZCVvEYEqfo2lA"',
    "mtime": "2025-08-05T14:01:49.927Z",
    "size": 2252,
    "path": "../public/noun-quill-129745.svg"
  },
  "/Orange Go@4x.png": {
    "type": "image/png",
    "etag": '"3646-dWne8V49zp+lcUU3QXjV3E3Hmx4"',
    "mtime": "2025-08-11T12:59:20.257Z",
    "size": 13894,
    "path": "../public/Orange Go@4x.png"
  },
  "/noun-wifi-5203893.svg": {
    "type": "image/svg+xml",
    "etag": '"5e8-5eSy/UdrOIMyAdzINlN4OVEXhco"',
    "mtime": "2025-08-05T13:57:45.047Z",
    "size": 1512,
    "path": "../public/noun-wifi-5203893.svg"
  },
  "/Monkey Temple yaad Haru le.png": {
    "type": "image/png",
    "etag": '"fb836-QtuFrC+xJZhFsiH3Tq3srJNpK4A"',
    "mtime": "2025-09-18T15:53:03.150Z",
    "size": 1030198,
    "path": "../public/Monkey Temple yaad Haru le.png"
  },
  "/proper path.svg": {
    "type": "image/svg+xml",
    "etag": '"21d-pitfEUE2sY1Odz7NXCP/kK1/bQ8"',
    "mtime": "2025-08-17T04:53:04.044Z",
    "size": 541,
    "path": "../public/proper path.svg"
  },
  "/reconnection.jpg": {
    "type": "image/jpeg",
    "etag": '"1770-vD/ULzEpSIbSKl1g5ah3tfLu8zc"',
    "mtime": "2025-08-07T16:47:00.001Z",
    "size": 6e3,
    "path": "../public/reconnection.jpg"
  },
  "/rect innit.svg": {
    "type": "image/svg+xml",
    "etag": '"1c4-3JF57DQshr+eSWntfmpt3IFUGGU"',
    "mtime": "2025-08-18T00:51:06.902Z",
    "size": 452,
    "path": "../public/rect innit.svg"
  },
  "/repeating path_1.svg": {
    "type": "image/svg+xml",
    "etag": '"222-Vsa9bsrHsvxh3ypisLElfEAKj/c"',
    "mtime": "2025-08-18T00:29:57.093Z",
    "size": 546,
    "path": "../public/repeating path_1.svg"
  },
  "/Rick and Morty.avif": {
    "type": "image/avif",
    "etag": '"18056-x//0Elo1jlwKJr4eEkpecyG2sUU"',
    "mtime": "2025-09-08T10:53:53.589Z",
    "size": 98390,
    "path": "../public/Rick and Morty.avif"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"43-BEzmj4PuhUNHX+oW9uOnPSihxtU"',
    "mtime": "2025-07-23T15:11:56.924Z",
    "size": 67,
    "path": "../public/robots.txt"
  },
  "/Mass Effect 3.jpg": {
    "type": "image/jpeg",
    "etag": '"187958-44RbPVdgAWakpOu1nIwrcGavhjE"',
    "mtime": "2025-09-08T10:53:53.183Z",
    "size": 1603928,
    "path": "../public/Mass Effect 3.jpg"
  },
  "/person 1.jpg": {
    "type": "image/jpeg",
    "etag": '"1f4830-9SazqeFTnXrYVlCuTm8R7IBsboU"',
    "mtime": "2025-12-31T06:19:07.534Z",
    "size": 2050096,
    "path": "../public/person 1.jpg"
  },
  "/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"1c6-ssmEsF9G6sCX0y8Sx5NdLpD+6TE"',
    "mtime": "2026-01-18T18:50:44.396Z",
    "size": 454,
    "path": "../public/sitemap.txt"
  },
  "/Squarespace_Logo.png": {
    "type": "image/png",
    "etag": '"bd4-drl4jG9bvVR2fgVUzwtG5Reosu0"',
    "mtime": "2025-08-21T16:07:08.926Z",
    "size": 3028,
    "path": "../public/Squarespace_Logo.png"
  },
  "/svg-generated-grain-small.png": {
    "type": "image/png",
    "etag": '"3b88-bylB+LRyZNohPlxiTU6tRDMyc2I"',
    "mtime": "2025-09-17T05:24:28.903Z",
    "size": 15240,
    "path": "../public/svg-generated-grain-small.png"
  },
  "/site.webmanifest": {
    "type": "application/manifest+json",
    "etag": '"1a4-xOodHaQHRjzOZb+nQIk8lLQxkSE"',
    "mtime": "2026-01-24T06:14:45.897Z",
    "size": 420,
    "path": "../public/site.webmanifest"
  },
  "/test-model-photo.jpg": {
    "type": "image/jpeg",
    "etag": '"2e5a1-R+iP7wUAIv97LXPq9l3AtDn+z+I"',
    "mtime": "2025-09-05T04:32:32.478Z",
    "size": 189857,
    "path": "../public/test-model-photo.jpg"
  },
  "/test.jpg": {
    "type": "image/jpeg",
    "etag": '"102ce-d4+hY/Li8CvE4xp5L6GB0r+E7nY"',
    "mtime": "2025-09-05T14:32:09.569Z",
    "size": 66254,
    "path": "../public/test.jpg"
  },
  "/The Deal.jpg": {
    "type": "image/jpeg",
    "etag": '"2b15-QSGVA0+ek9fPcJzja+VfThh4L2E"',
    "mtime": "2025-08-07T16:45:50.705Z",
    "size": 11029,
    "path": "../public/The Deal.jpg"
  },
  "/The Handmaiden Poster.jpg": {
    "type": "image/jpeg",
    "etag": '"8485-Jyjpwl/uM5iJR4Oq6le9HoFy0Yc"',
    "mtime": "2025-09-08T10:53:53.851Z",
    "size": 33925,
    "path": "../public/The Handmaiden Poster.jpg"
  },
  "/The Macist Thumbnail.png": {
    "type": "image/png",
    "etag": '"13044-RqtqTsQ8HwrltysPKMP7xf/uXiM"',
    "mtime": "2025-09-16T18:55:53.181Z",
    "size": 77892,
    "path": "../public/The Macist Thumbnail.png"
  },
  "/noisy-background.jpg": {
    "type": "image/jpeg",
    "etag": '"2b9bd0-5nsaGq6hArjvnanWH7OdtJICa9Q"',
    "mtime": "2025-09-04T18:19:32.911Z",
    "size": 2857936,
    "path": "../public/noisy-background.jpg"
  },
  "/person 2.jpg": {
    "type": "image/jpeg",
    "etag": '"25a3cb-7ckekOZAa0J28C2T3IfYTvNDv5U"',
    "mtime": "2025-12-31T06:19:37.174Z",
    "size": 2466763,
    "path": "../public/person 2.jpg"
  },
  "/serrated-grain.jpg": {
    "type": "image/jpeg",
    "etag": '"159a5c-O7Vh5QMxklXQOUwt9HfTRN1aU0k"',
    "mtime": "2025-09-17T04:37:00.112Z",
    "size": 1415772,
    "path": "../public/serrated-grain.jpg"
  },
  "/svg-generated-grain.png": {
    "type": "image/png",
    "etag": '"160bf4-13PYT9nYGsCFNgrv9X7zcSBI9Vg"',
    "mtime": "2025-09-17T04:52:48.204Z",
    "size": 1444852,
    "path": "../public/svg-generated-grain.png"
  },
  "/theForgottenMan.webp": {
    "type": "image/webp",
    "etag": '"2dd44-bby1MDQaRledZvaE/dDvEAfKMKQ"',
    "mtime": "2025-08-07T16:45:32.633Z",
    "size": 187716,
    "path": "../public/theForgottenMan.webp"
  },
  "/The Witcher 3 Poster.avif": {
    "type": "image/avif",
    "etag": '"4807a-a8jMdrMoR5H6LFSnTbnZMW7ceQs"',
    "mtime": "2025-09-08T10:53:53.978Z",
    "size": 295034,
    "path": "../public/The Witcher 3 Poster.avif"
  },
  "/The White Lotus Poster.jpg": {
    "type": "image/jpeg",
    "etag": '"99c1b-JL9nO9nZepLls2p+0JVwQdfKV0Y"',
    "mtime": "2025-09-08T10:53:54.147Z",
    "size": 629787,
    "path": "../public/The White Lotus Poster.jpg"
  },
  "/VC Website Figma Image.png": {
    "type": "image/png",
    "etag": '"665da-beI1VO+LN4svXJCakVpnozc51nM"',
    "mtime": "2025-12-28T02:19:43.269Z",
    "size": 419290,
    "path": "../public/VC Website Figma Image.png"
  },
  "/videoproductionServiceLogo.svg": {
    "type": "image/svg+xml",
    "etag": '"2a0-18xuLZsT0k+5w8ZxdnTdrexsnCI"',
    "mtime": "2025-08-21T16:10:53.715Z",
    "size": 672,
    "path": "../public/videoproductionServiceLogo.svg"
  },
  "/web-app-manifest-192x192.png": {
    "type": "image/png",
    "etag": '"b29a-eu/0Ti6H+Ojy7AZhxlyGbr6iXgE"',
    "mtime": "2026-01-23T13:54:10.000Z",
    "size": 45722,
    "path": "../public/web-app-manifest-192x192.png"
  },
  "/VCN Homepage.jpg": {
    "type": "image/jpeg",
    "etag": '"749bc-uwQUE0acdOIMuCWxLoBq0Qkdy2I"',
    "mtime": "2025-09-17T10:16:26.043Z",
    "size": 477628,
    "path": "../public/VCN Homepage.jpg"
  },
  "/webdevelopmentServiceLogo.svg": {
    "type": "image/svg+xml",
    "etag": '"67b-Q6weLKNAIrm12e4MtU/NOTpQHyE"',
    "mtime": "2025-08-21T16:03:32.969Z",
    "size": 1659,
    "path": "../public/webdevelopmentServiceLogo.svg"
  },
  "/WordPress_blue_logo.svg.png": {
    "type": "image/png",
    "etag": '"a13b-8RgmKTZirxykbrPeDmvoQjfJP5k"',
    "mtime": "2025-08-04T14:47:06.752Z",
    "size": 41275,
    "path": "../public/WordPress_blue_logo.svg.png"
  },
  "/web-app-manifest-512x512.png": {
    "type": "image/png",
    "etag": '"33f73-RH3tns6nSj3+fTcjkhVhgS10W/c"',
    "mtime": "2026-01-23T13:54:10.000Z",
    "size": 212851,
    "path": "../public/web-app-manifest-512x512.png"
  },
  "/The Prisoner Thumbnail.jpg": {
    "type": "image/jpeg",
    "etag": '"13bbb5-fopZTNIcAgmiReIfGTOu3r2RPCs"',
    "mtime": "2025-09-16T19:12:02.077Z",
    "size": 1293237,
    "path": "../public/The Prisoner Thumbnail.jpg"
  },
  "/writingServiceLogo.svg": {
    "type": "image/svg+xml",
    "etag": '"8f6-jZ1GIezrWGnip+1p9Mcogu2jyUE"',
    "mtime": "2026-01-01T14:13:43.353Z",
    "size": 2294,
    "path": "../public/writingServiceLogo.svg"
  },
  "/youtube-svgrepo-com.svg": {
    "type": "image/svg+xml",
    "etag": '"265-+3AFNqmoxeqRkQcmz1ojot6kI3c"',
    "mtime": "2025-08-23T12:14:01.031Z",
    "size": 613,
    "path": "../public/youtube-svgrepo-com.svg"
  },
  "/assets/about-me-C92qH8Z4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"94c-PijUFLNUnsrwDN6uUep8ARha2tk"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 2380,
    "path": "../public/assets/about-me-C92qH8Z4.js"
  },
  "/assets/AV Estiana-VF-CNb_UGz_.ttf": {
    "type": "font/ttf",
    "etag": '"22230-tbdgadOD6Axuzyr6SAxAYhJ0puE"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 139824,
    "path": "../public/assets/AV Estiana-VF-CNb_UGz_.ttf"
  },
  "/svg-generated-grain-hd.png": {
    "type": "image/png",
    "etag": '"2da4ac-R685S8Ngxw9ytmfZOPIguQ6huV0"',
    "mtime": "2025-09-17T05:25:49.725Z",
    "size": 2991276,
    "path": "../public/svg-generated-grain-hd.png"
  },
  "/assets/browser-DKl9zybw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"30df-JFCelXxITpXYtUK1EZO1P9C5Vfg"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 12511,
    "path": "../public/assets/browser-DKl9zybw.js"
  },
  "/Umang-Photo.jpg": {
    "type": "image/jpeg",
    "etag": '"14b9dc-j5FpoHYoe6mEszSR6rBklUS1GrQ"',
    "mtime": "2025-09-05T04:06:21.402Z",
    "size": 1358300,
    "path": "../public/Umang-Photo.jpg"
  },
  "/assets/contact-C7dLX3Lc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"119-OzguV/vQ8K9/WsHk/Zfo0FO6w+g"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 281,
    "path": "../public/assets/contact-C7dLX3Lc.js"
  },
  "/assets/ContentPage-CgnFI3KV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"596a-dTPe6a7BmOpa16jYgyHcEOoCQoc"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 22890,
    "path": "../public/assets/ContentPage-CgnFI3KV.js"
  },
  "/assets/dateFormatter-kYCX6GPW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"94-dw2bUCdHp2i3JElBgzUOnoYoEL4"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 148,
    "path": "../public/assets/dateFormatter-kYCX6GPW.js"
  },
  "/assets/experience-CTKgkHtp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9c8-KLZVZBf1RCWou2oyAEzT5eDlGRU"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 2504,
    "path": "../public/assets/experience-CTKgkHtp.js"
  },
  "/assets/FetchedProjectList-CRbDZLKN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa3-W2WG2nMkcsG9sVUv6zJkR10jCDg"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 2723,
    "path": "../public/assets/FetchedProjectList-CRbDZLKN.js"
  },
  "/assets/GrainyBackground-C30pY-dD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4-Kc8cn+BhphQVcvEP5tQlCB0PwhY"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 228,
    "path": "../public/assets/GrainyBackground-C30pY-dD.js"
  },
  "/assets/HomepageContact-CLo2rZuk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161d0-PLiFwxtWG3G7XGLhNNGnh05EKcw"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 90576,
    "path": "../public/assets/HomepageContact-CLo2rZuk.js"
  },
  "/assets/hls-Cp2x8l1r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7f318-B4eQICrsEJwxQj4UZ21A07BolWg"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 520984,
    "path": "../public/assets/hls-Cp2x8l1r.js"
  },
  "/assets/index-bVDUBI5u.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"899-QgHis7ngimsG4RdUhFD9sLErBHA"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 2201,
    "path": "../public/assets/index-bVDUBI5u.js"
  },
  "/assets/HomepageServices-wErZFjCk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"611-Ndtm97x0sA7Is1Dwk/IbUqJIZH0"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 1553,
    "path": "../public/assets/HomepageServices-wErZFjCk.js"
  },
  "/assets/index-CggtWrQC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2dd-3XTlgrajaQiiJITEiMirrr3L9qs"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 733,
    "path": "../public/assets/index-CggtWrQC.js"
  },
  "/assets/index-D4Zy9A_h.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2f7-jU2Y7tZDNxrkwvgMyaw6FyZmgYU"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 759,
    "path": "../public/assets/index-D4Zy9A_h.js"
  },
  "/assets/index-CGVCrrLK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"114-IIsEuHM1HYKN2OR4GO5oHfSh+XQ"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 276,
    "path": "../public/assets/index-CGVCrrLK.js"
  },
  "/assets/dash.all.min-D_hFuBFJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f22d2-Y94EYoWaUvCf1GKWl2B46bDW/Gc"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 991954,
    "path": "../public/assets/dash.all.min-D_hFuBFJ.js"
  },
  "/Urg Website Landing Page.png": {
    "type": "image/png",
    "etag": '"2fb46c-EKbkklNOWKDBNqLfYuA7G0HLdoA"',
    "mtime": "2026-01-18T09:05:12.200Z",
    "size": 3126380,
    "path": "../public/Urg Website Landing Page.png"
  },
  "/assets/index-DlD1maWb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"11f-ZouSMeYN7eTHxh/HQH7D6qgAR2k"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 287,
    "path": "../public/assets/index-DlD1maWb.js"
  },
  "/assets/index-FF10sGiz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"11f-9/Acm7RsTsPS9TiI1sxr+xaKAxY"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 287,
    "path": "../public/assets/index-FF10sGiz.js"
  },
  "/assets/index-XyM75Gr6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"18bde-ekQkS9qEI/pdRqSOXgE4qd4BLpM"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 101342,
    "path": "../public/assets/index-XyM75Gr6.js"
  },
  "/assets/index-u6AEliip.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7c3a8-WBunbIy/I0brCsTCofUHjFCR7FE"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 508840,
    "path": "../public/assets/index-u6AEliip.js"
  },
  "/assets/index-ZHP9EJOY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2d5-oBSGWFot8mcY47+f+RVheY58oC8"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 725,
    "path": "../public/assets/index-ZHP9EJOY.js"
  },
  "/assets/mixin-D3UDm--6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3ae6-pL6mbg/V+qyRRjjb5nuwiPAN01g"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 15078,
    "path": "../public/assets/mixin-D3UDm--6.js"
  },
  "/assets/Preview-CifWO033.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5e0-uOpOd7BOK2V6AjiWUyGQWkszsVM"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 1504,
    "path": "../public/assets/Preview-CifWO033.js"
  },
  "/assets/main-BwpfEz-K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8dfd2-EtLTOijAXYmxZ14FisSOSuX15kU"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 581586,
    "path": "../public/assets/main-BwpfEz-K.js"
  },
  "/assets/react--1EUw4fM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a25-XMdlW26bIs/JsJEah/B6YiJftYI"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 6693,
    "path": "../public/assets/react--1EUw4fM.js"
  },
  "/assets/react-B1dRjjlH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2db7-a46LXTgwD39ZdSOoPnt8JLW29/4"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 11703,
    "path": "../public/assets/react-B1dRjjlH.js"
  },
  "/assets/react-BDp3mU85.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"24cc-WDXYJt+c8u3yJDmR8faopvNs9cs"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 9420,
    "path": "../public/assets/react-BDp3mU85.js"
  },
  "/assets/react-BXHcVcOZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"157c-gRUAob9BqLSJlnxer11esJTKtss"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 5500,
    "path": "../public/assets/react-BXHcVcOZ.js"
  },
  "/assets/react-DkKGAe80.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c1a0-MgCzJao9l6ysO0zmaIrAgcU5t/U"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 49568,
    "path": "../public/assets/react-DkKGAe80.js"
  },
  "/assets/react-CxzLh2js.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1de3-bN6Gewwd1VEPXcBz2Rc8lOL7Ir8"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 7651,
    "path": "../public/assets/react-CxzLh2js.js"
  },
  "/assets/react-exSA7ZZf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2240-U6kUsc6HIGX7Q87xIZraoyua70s"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 8768,
    "path": "../public/assets/react-exSA7ZZf.js"
  },
  "/assets/react-oP8C-Zb7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1bc7-+NVwWJc0hWQ9roBeie4azIFBwvk"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 7111,
    "path": "../public/assets/react-oP8C-Zb7.js"
  },
  "/assets/Satoshi-Variable-ChAXbpFa.ttf": {
    "type": "font/ttf",
    "etag": '"1f1bc-1Jhyp0WELzibydJLc9CjCQ/OULE"',
    "mtime": "2026-01-25T07:13:52.441Z",
    "size": 127420,
    "path": "../public/assets/Satoshi-Variable-ChAXbpFa.ttf"
  },
  "/assets/stegaEncodeSourceMap-DckyaoBr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"20b8-p1ArGrRto1d3tefxvYUkYlH5RQ8"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 8376,
    "path": "../public/assets/stegaEncodeSourceMap-DckyaoBr.js"
  },
  "/assets/Satoshi-VariableItalic-Bb7sdEFv.ttf": {
    "type": "font/ttf",
    "etag": '"1fad4-YsNERCIf8X6TqOHK3+pajGjqcFs"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 129748,
    "path": "../public/assets/Satoshi-VariableItalic-Bb7sdEFv.ttf"
  },
  "/assets/styles-ByaJOy_Z.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"f936-R1AYqfqsPQfOBSnxelVosMtEmLE"',
    "mtime": "2026-01-25T07:13:52.447Z",
    "size": 63798,
    "path": "../public/assets/styles-ByaJOy_Z.css"
  },
  "/Monkey Temple Yaad Harule FP Intro.mov": {
    "type": "video/quicktime",
    "etag": '"d43055-V19vjMhqCz6ST19qHmOsjFVRcqQ"',
    "mtime": "2025-12-23T16:00:58.126Z",
    "size": 13906005,
    "path": "../public/Monkey Temple Yaad Harule FP Intro.mov"
  },
  "/10 sec For Website.mov": {
    "type": "video/quicktime",
    "etag": '"1340c70-LkAeoqxRZQ7zGt18TfvkcFBAgeI"',
    "mtime": "2026-01-16T17:33:37.598Z",
    "size": 20188272,
    "path": "../public/10 sec For Website.mov"
  },
  "/GRI FP Intro.mov": {
    "type": "video/quicktime",
    "etag": '"11b9f99-aKnQBfqTB+M+JeFIruiVxb9Ai6Y"',
    "mtime": "2025-12-23T16:37:36.099Z",
    "size": 18587545,
    "path": "../public/GRI FP Intro.mov"
  },
  "/The Deal FP Intro.mov": {
    "type": "video/quicktime",
    "etag": '"ecd0d5-bRkbSAite9vIfAqvgdzim4dXej0"',
    "mtime": "2025-12-23T16:24:32.641Z",
    "size": 15519957,
    "path": "../public/The Deal FP Intro.mov"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br"
};
const _3TW2Nd = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/");
    s.length - 1;
    if (s[1] === "assets") {
      r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
    }
    return r;
  };
})();
const _lazy_KBssou = defineLazyEventHandler(() => Promise.resolve().then(function() {
  return ssrRenderer$1;
}));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_KBssou };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const globalMiddleware = [
  toEventHandler(_3TW2Nd)
].filter(Boolean);
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function createNitroApp() {
  const hooks = void 0;
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({
          error,
          context: errorCtx
        });
      }
    }
  };
  const h3App = createH3App({ onError(error, event) {
    return errorHandler(error, event);
  } });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  const app = {
    fetch: appHandler,
    h3: h3App,
    hooks,
    captureError
  };
  return app;
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~middleware"].push(...globalMiddleware);
  {
    h3App["~getMiddleware"] = (event, route) => {
      const pathname = event.url.pathname;
      const method = event.req.method;
      const middleware = [];
      {
        const routeRules = getRouteRules(method, pathname);
        event.context.routeRules = routeRules?.routeRules;
        if (routeRules?.routeRuleMiddleware.length) {
          middleware.push(...routeRules.routeRuleMiddleware);
        }
      }
      middleware.push(...h3App["~middleware"]);
      if (route?.data?.middleware?.length) {
        middleware.push(...route.data.middleware);
      }
      return middleware;
    };
  }
  return h3App;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  for (const rule of Object.values(routeRules)) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const port = Number.parseInt(process.env.NITRO_PORT || process.env.PORT || "") || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: nitroApp.fetch
});
trapUnhandledErrors();
const nodeServer = {};
function fetchViteEnv(viteEnvName, input, init) {
  const envs = globalThis.__nitro_vite_envs__ || {};
  const viteEnv = envs[viteEnvName];
  if (!viteEnv) {
    throw HTTPError.status(404);
  }
  return Promise.resolve(viteEnv.fetch(toRequest(input, init)));
}
function ssrRenderer({ req }) {
  return fetchViteEnv("ssr", req);
}
const ssrRenderer$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: ssrRenderer
});
export {
  nodeServer as default
};
