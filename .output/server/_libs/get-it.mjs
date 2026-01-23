import require$$1, { Agent } from "http";
import require$$2, { Agent as Agent$1 } from "https";
import require$$0 from "tty";
import require$$1$1 from "util";
import { e as e$1 } from "../_chunks/_libs/decompress-response.mjs";
import { t as t$1 } from "../_chunks/_libs/follow-redirects.mjs";
import n$2 from "querystring";
import { Readable } from "stream";
import c$1 from "url";
import { a as a$1 } from "./through2.mjs";
import { i } from "../_chunks/_libs/tunnel-agent.mjs";
import { u as u$1 } from "./is-retry-allowed.mjs";
const e = !(typeof navigator > "u") && "ReactNative" === navigator.product, t = { timeout: e ? 6e4 : 12e4 }, r$1 = function(r2) {
  const a2 = { ...t, ..."string" == typeof r2 ? { url: r2 } : r2 };
  if (a2.timeout = o$2(a2.timeout), a2.query) {
    const { url: t2, searchParams: r3 } = (function(t3) {
      const r4 = t3.indexOf("?");
      if (-1 === r4) return { url: t3, searchParams: new URLSearchParams() };
      const o2 = t3.slice(0, r4), a3 = t3.slice(r4 + 1);
      if (!e) return { url: o2, searchParams: new URLSearchParams(a3) };
      if ("function" != typeof decodeURIComponent) throw new Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");
      const s2 = new URLSearchParams();
      for (const e2 of a3.split("&")) {
        const [t4, r5] = e2.split("=");
        t4 && s2.append(n$1(t4), n$1(r5 || ""));
      }
      return { url: o2, searchParams: s2 };
    })(a2.url);
    for (const [e2, n2] of Object.entries(a2.query)) {
      if (void 0 !== n2) if (Array.isArray(n2)) for (const t3 of n2) r3.append(e2, t3);
      else r3.append(e2, n2);
      const o2 = r3.toString();
      o2 && (a2.url = `${t2}?${o2}`);
    }
  }
  return a2.method = a2.body && !a2.method ? "POST" : (a2.method || "GET").toUpperCase(), a2;
};
function n$1(e2) {
  return decodeURIComponent(e2.replace(/\+/g, " "));
}
function o$2(e2) {
  if (false === e2 || 0 === e2) return false;
  if (e2.connect || e2.socket) return e2;
  const r2 = Number(e2);
  return isNaN(r2) ? o$2(t.timeout) : { connect: r2, socket: r2 };
}
const a = /^https?:\/\//i, s = function(e2) {
  if (!a.test(e2.url)) throw new Error(`"${e2.url}" is not a valid URL`);
};
const r = ["request", "response", "progress", "error", "abort"], o$1 = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
function n(s$1, i2) {
  const u2 = [], a2 = o$1.reduce((e2, t2) => (e2[t2] = e2[t2] || [], e2), { processOptions: [r$1], validateOptions: [s] });
  function c2(e2) {
    const t2 = r.reduce((e3, t3) => (e3[t3] = /* @__PURE__ */ (function() {
      const e4 = /* @__PURE__ */ Object.create(null);
      let t4 = 0;
      return { publish: function(t5) {
        for (const r2 in e4) e4[r2](t5);
      }, subscribe: function(r2) {
        const o3 = t4++;
        return e4[o3] = r2, function() {
          delete e4[o3];
        };
      } };
    })(), e3), {}), o2 = /* @__PURE__ */ ((e3) => function(t3, r2, ...o3) {
      const n3 = "onError" === t3;
      let s3 = r2;
      for (let r3 = 0; r3 < e3[t3].length && (s3 = (0, e3[t3][r3])(s3, ...o3), !n3 || s3); r3++) ;
      return s3;
    })(a2), n2 = o2("processOptions", e2);
    o2("validateOptions", n2);
    const s2 = { options: n2, channels: t2, applyMiddleware: o2 };
    let u3;
    const c3 = t2.request.subscribe((e3) => {
      u3 = i2(e3, (r2, n3) => ((e4, r3, n4) => {
        let s3 = e4, i3 = r3;
        if (!s3) try {
          i3 = o2("onResponse", r3, n4);
        } catch (e5) {
          i3 = null, s3 = e5;
        }
        s3 = s3 && o2("onError", s3, n4), s3 ? t2.error.publish(s3) : i3 && t2.response.publish(i3);
      })(r2, n3, e3));
    });
    t2.abort.subscribe(() => {
      c3(), u3 && u3.abort();
    });
    const l2 = o2("onReturn", t2, s2);
    return l2 === t2 && t2.request.publish(s2), l2;
  }
  return c2.use = function(e2) {
    if (!e2) throw new Error("Tried to add middleware that resolved to falsey value");
    if ("function" == typeof e2) throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
    if (e2.onReturn && a2.onReturn.length > 0) throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
    return o$1.forEach((t2) => {
      e2[t2] && a2[t2].push(e2[t2]);
    }), u2.push(e2), c2;
  }, c2.clone = () => n(u2, i2), s$1.forEach(c2.use), c2;
}
function p$1(e2) {
  return Object.keys(e2 || {}).reduce((t2, o2) => (t2[o2.toLowerCase()] = e2[o2], t2), {});
}
let u = 1;
const d = 65535;
let h$1 = null;
const l$1 = function() {
  u = u + 1 & d;
};
function f(e2) {
  let t2 = e2.length || 0, o2 = 0, r2 = Date.now() + e2.time, n2 = 0;
  const s2 = (function() {
    h$1 || (h$1 = setInterval(l$1, 250), h$1.unref && h$1.unref());
    const e3 = [0];
    let t3 = 1, o3 = u - 1 & d;
    return { getSpeed: function(r3) {
      let n3 = u - o3 & d;
      for (n3 > 20 && (n3 = 20), o3 = u; n3--; ) 20 === t3 && (t3 = 0), e3[t3] = e3[0 === t3 ? 19 : t3 - 1], t3++;
      r3 && (e3[t3 - 1] += r3);
      const s3 = e3[t3 - 1], c3 = e3.length < 20 ? 0 : e3[20 === t3 ? 0 : t3];
      return e3.length < 4 ? s3 : 4 * (s3 - c3) / e3.length;
    }, clear: function() {
      h$1 && (clearInterval(h$1), h$1 = null);
    } };
  })(), c2 = Date.now(), i2 = { percentage: 0, transferred: o2, length: t2, remaining: t2, eta: 0, runtime: 0, speed: 0, delta: 0 }, p2 = function(a2) {
    i2.delta = n2, i2.percentage = a2 ? 100 : t2 ? o2 / t2 * 100 : 0, i2.speed = s2.getSpeed(n2), i2.eta = Math.round(i2.remaining / i2.speed), i2.runtime = Math.floor((Date.now() - c2) / 1e3), r2 = Date.now() + e2.time, n2 = 0, f2.emit("progress", i2);
  }, f2 = a$1({}, function(e3, s3, c3) {
    const a2 = e3.length;
    o2 += a2, n2 += a2, i2.transferred = o2, i2.remaining = t2 >= o2 ? t2 - o2 : 0, Date.now() >= r2 && p2(false), c3(null, e3);
  }, function(e3) {
    p2(true), s2.clear(), e3();
  }), m2 = function(e3) {
    t2 = e3, i2.length = t2, i2.remaining = t2 - i2.transferred, f2.emit("length", t2);
  };
  return f2.on("pipe", function(e3) {
    if (!(t2 > 0)) {
      if (e3.readable && !("writable" in e3) && "headers" in e3 && "object" == typeof (o3 = e3.headers) && null !== o3 && !Array.isArray(o3)) {
        const t3 = "string" == typeof e3.headers["content-length"] ? parseInt(e3.headers["content-length"], 10) : 0;
        return m2(t3);
      }
      if ("length" in e3 && "number" == typeof e3.length) return m2(e3.length);
      e3.on("response", function(e4) {
        if (e4 && e4.headers && "gzip" !== e4.headers["content-encoding"] && e4.headers["content-length"]) return m2(parseInt(e4.headers["content-length"]));
      });
    }
    var o3;
  }), f2.progress = function() {
    return i2.speed = s2.getSpeed(0), i2.eta = Math.round(i2.remaining / i2.speed), i2;
  }, f2;
}
function m(e2) {
  return e2.replace(/^\.*/, ".").toLowerCase();
}
function g$1(e2) {
  const t2 = e2.trim().toLowerCase(), o2 = t2.split(":", 2);
  return { hostname: m(o2[0]), port: o2[1], hasPort: t2.indexOf(":") > -1 };
}
const y$1 = ["protocol", "slashes", "auth", "host", "port", "hostname", "hash", "search", "query", "pathname", "path", "href"], b$1 = ["accept", "accept-charset", "accept-encoding", "accept-language", "accept-ranges", "cache-control", "content-encoding", "content-language", "content-location", "content-md5", "content-range", "content-type", "connection", "date", "expect", "max-forwards", "pragma", "referer", "te", "user-agent", "via"], x$1 = ["proxy-authorization"], w$1 = (e2) => null !== e2 && "object" == typeof e2 && "function" == typeof e2.pipe, O$1 = "node";
let T$1 = class T extends Error {
  request;
  code;
  constructor(e2, t2) {
    super(e2.message), this.request = t2, this.code = e2.code;
  }
};
const v$1 = (e2, t2, o2, r2, n2) => ({ body: n2, url: o2, method: r2, headers: e2.headers, statusCode: e2.statusCode || 0, statusMessage: e2.statusMessage || "", remoteAddress: t2 }), R$1 = (a2, u2) => {
  const { options: d2 } = a2, h2 = Object.assign({}, c$1.parse(d2.url));
  if ("function" == typeof fetch && d2.fetch) {
    const e2 = new AbortController(), t2 = a2.applyMiddleware("finalizeOptions", { ...h2, method: d2.method, headers: { ..."object" == typeof d2.fetch && d2.fetch.headers ? p$1(d2.fetch.headers) : {}, ...p$1(d2.headers) }, maxRedirects: d2.maxRedirects }), o2 = { credentials: d2.withCredentials ? "include" : "omit", ..."object" == typeof d2.fetch ? d2.fetch : {}, method: t2.method, headers: t2.headers, body: d2.body, signal: e2.signal }, r2 = a2.applyMiddleware("interceptRequest", void 0, { adapter: O$1, context: a2 });
    if (r2) {
      const e3 = setTimeout(u2, 0, null, r2);
      return { abort: () => clearTimeout(e3) };
    }
    const n2 = fetch(d2.url, o2);
    return a2.applyMiddleware("onRequest", { options: d2, adapter: O$1, request: n2, context: a2 }), n2.then(async (e3) => {
      const t3 = d2.rawBody ? e3.body : await e3.text(), o3 = {};
      e3.headers.forEach((e4, t4) => {
        o3[t4] = e4;
      }), u2(null, { body: t3, url: e3.url, method: d2.method, headers: o3, statusCode: e3.status, statusMessage: e3.statusText });
    }).catch((e3) => {
      "AbortError" != e3.name && u2(e3);
    }), { abort: () => e2.abort() };
  }
  const l2 = w$1(d2.body) ? "stream" : typeof d2.body;
  if ("undefined" !== l2 && "stream" !== l2 && "string" !== l2 && !Buffer.isBuffer(d2.body)) throw new Error(`Request body must be a string, buffer or stream, got ${l2}`);
  const R2 = {};
  d2.bodySize ? R2["content-length"] = d2.bodySize : d2.body && "stream" !== l2 && (R2["content-length"] = Buffer.byteLength(d2.body));
  let j2 = false;
  const M2 = (e2, t2) => !j2 && u2(e2, t2);
  a2.channels.abort.subscribe(() => {
    j2 = true;
  });
  let $ = Object.assign({}, h2, { method: d2.method, headers: Object.assign({}, p$1(d2.headers), R2), maxRedirects: d2.maxRedirects });
  const q2 = (function(e2) {
    const t2 = typeof e2.proxy > "u" ? (function(e3) {
      const t3 = process.env.NO_PROXY || process.env.no_proxy || "";
      return "*" === t3 || "" !== t3 && (function(e4, t4) {
        const o2 = e4.port || ("https:" === e4.protocol ? "443" : "80"), r2 = m(e4.hostname || "");
        return t4.split(",").map(g$1).some((e5) => {
          const t5 = r2.indexOf(e5.hostname), n2 = t5 > -1 && t5 === r2.length - e5.hostname.length;
          return e5.hasPort ? o2 === e5.port && n2 : n2;
        });
      })(e3, t3) ? null : "http:" === e3.protocol ? process.env.HTTP_PROXY || process.env.http_proxy || null : "https:" === e3.protocol && (process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy) || null;
    })(c$1.parse(e2.url)) : e2.proxy;
    return "string" == typeof t2 ? c$1.parse(t2) : t2 || null;
  })(d2), C2 = q2 && (function(e2) {
    return typeof e2.tunnel < "u" ? !!e2.tunnel : "https:" === c$1.parse(e2.url).protocol;
  })(d2), S2 = a2.applyMiddleware("interceptRequest", void 0, { adapter: O$1, context: a2 });
  if (S2) {
    const e2 = setImmediate(M2, null, S2);
    return { abort: () => clearImmediate(e2) };
  }
  if (0 !== d2.maxRedirects && ($.maxRedirects = d2.maxRedirects || 5), q2 && C2 ? $ = (function(e2 = {}, t2) {
    const o2 = Object.assign({}, e2), r2 = b$1.concat(o2.proxyHeaderWhiteList || []).map((e3) => e3.toLowerCase()), n2 = x$1.concat(o2.proxyHeaderExclusiveList || []).map((e3) => e3.toLowerCase()), s2 = (c2 = o2.headers, a3 = r2, Object.keys(c2).filter((e3) => -1 !== a3.indexOf(e3.toLowerCase())).reduce((e3, t3) => (e3[t3] = c2[t3], e3), {}));
    var c2, a3;
    s2.host = (function(e3) {
      const t3 = e3.port, o3 = e3.protocol;
      let r3 = `${e3.hostname}:`;
      return r3 += t3 || ("https:" === o3 ? "443" : "80"), r3;
    })(o2), o2.headers = Object.keys(o2.headers || {}).reduce((e3, t3) => (-1 === n2.indexOf(t3.toLowerCase()) && (e3[t3] = o2.headers[t3]), e3), {});
    const p2 = (function(e3, t3) {
      const o3 = (function(e4) {
        return y$1.reduce((t4, o4) => (t4[o4] = e4[o4], t4), {});
      })(e3), r3 = (function(e4, t4) {
        return `${"https:" === e4.protocol ? "https" : "http"}Over${"https:" === t4.protocol ? "Https" : "Http"}`;
      })(o3, t3);
      return i[r3];
    })(o2, t2), u3 = (function(e3, t3, o3) {
      return { proxy: { host: t3.hostname, port: +t3.port, proxyAuth: t3.auth, headers: o3 }, headers: e3.headers, ca: e3.ca, cert: e3.cert, key: e3.key, passphrase: e3.passphrase, pfx: e3.pfx, ciphers: e3.ciphers, rejectUnauthorized: e3.rejectUnauthorized, secureOptions: e3.secureOptions, secureProtocol: e3.secureProtocol };
    })(o2, t2, s2);
    return o2.agent = p2(u3), o2;
  })($, q2) : q2 && !C2 && ($ = (function(e2, t2, o2) {
    const r2 = e2.headers || {}, n2 = Object.assign({}, e2, { headers: r2 });
    return r2.host = r2.host || (function(e3) {
      const t3 = e3.port || ("https:" === e3.protocol ? "443" : "80");
      return `${e3.hostname}:${t3}`;
    })(t2), n2.protocol = o2.protocol || n2.protocol, n2.hostname = (o2.host || "hostname" in o2 && o2.hostname || n2.hostname || "").replace(/:\d+/, ""), n2.port = o2.port ? `${o2.port}` : n2.port, n2.host = (function(e3) {
      let t3 = e3.host;
      return e3.port && ("80" === e3.port && "http:" === e3.protocol || "443" === e3.port && "https:" === e3.protocol) && (t3 = e3.hostname), t3;
    })(Object.assign({}, t2, o2)), n2.href = `${n2.protocol}//${n2.host}${n2.path}`, n2.path = c$1.format(t2), n2;
  })($, h2, q2)), !C2 && q2 && q2.auth && !$.headers["proxy-authorization"]) {
    const [e2, t2] = "string" == typeof q2.auth ? q2.auth.split(":").map((e3) => n$2.unescape(e3)) : [q2.auth.username, q2.auth.password], o2 = Buffer.from(`${e2}:${t2}`, "utf8").toString("base64");
    $.headers["proxy-authorization"] = `Basic ${o2}`;
  }
  const z2 = (function(e2, n2, s2) {
    const c2 = "https:" === e2.protocol, a3 = 0 === e2.maxRedirects ? { http: require$$1, https: require$$2 } : { http: t$1.http, https: t$1.https };
    if (!n2 || s2) return c2 ? a3.https : a3.http;
    let i2 = 443 === n2.port;
    return n2.protocol && (i2 = /^https:?/.test(n2.protocol)), i2 ? a3.https : a3.http;
  })($, q2, C2);
  "function" == typeof d2.debug && q2 && d2.debug("Proxying using %s", $.agent ? "tunnel agent" : `${$.host}:${$.port}`);
  const E2 = "HEAD" !== $.method;
  let L;
  E2 && !$.headers["accept-encoding"] && false !== d2.compress && ($.headers["accept-encoding"] = typeof Bun < "u" ? "gzip, deflate" : "br, gzip, deflate");
  const k2 = a2.applyMiddleware("finalizeOptions", $), P2 = z2.request(k2, (t2) => {
    const o2 = E2 ? e$1(t2) : t2;
    L = o2;
    const r2 = a2.applyMiddleware("onHeaders", o2, { headers: t2.headers, adapter: O$1, context: a2 }), n2 = "responseUrl" in t2 ? t2.responseUrl : d2.url, s2 = o2.socket?.remoteAddress;
    d2.stream ? M2(null, v$1(o2, s2, n2, $.method, r2)) : (function(e2, t3) {
      const o3 = [];
      e2.on("data", function(e3) {
        o3.push(e3);
      }), e2.once("end", function() {
        t3 && t3(null, Buffer.concat(o3)), t3 = null;
      }), e2.once("error", function(e3) {
        t3 && t3(e3), t3 = null;
      });
    })(r2, (e2, t3) => {
      if (e2) return M2(e2);
      const r3 = d2.rawBody ? t3 : t3.toString(), c2 = v$1(o2, s2, n2, $.method, r3);
      return M2(null, c2);
    });
  });
  function B2(e2) {
    L && L.destroy(e2), P2.destroy(e2);
  }
  P2.once("socket", (e2) => {
    e2.once("error", B2), P2.once("response", (t2) => {
      t2.once("end", () => {
        e2.removeListener("error", B2);
      });
    });
  }), P2.once("error", (e2) => {
    L || M2(new T$1(e2, P2));
  }), d2.timeout && (function(e2, t2) {
    if (e2.timeoutTimer) return e2;
    const o2 = isNaN(t2) ? t2 : { socket: t2, connect: t2 }, r2 = e2.getHeader("host"), n2 = r2 ? " to " + r2 : "";
    function s2() {
      e2.timeoutTimer && (clearTimeout(e2.timeoutTimer), e2.timeoutTimer = null);
    }
    function c2(t3) {
      if (s2(), void 0 !== o2.socket) {
        const r3 = () => {
          const e3 = new Error("Socket timed out on request" + n2);
          e3.code = "ESOCKETTIMEDOUT", t3.destroy(e3);
        };
        t3.setTimeout(o2.socket, r3), e2.once("response", (e3) => {
          e3.once("end", () => {
            t3.removeListener("timeout", r3);
          });
        });
      }
    }
    void 0 !== o2.connect && (e2.timeoutTimer = setTimeout(function() {
      const t3 = new Error("Connection timed out on request" + n2);
      t3.code = "ETIMEDOUT", e2.destroy(t3);
    }, o2.connect)), e2.on("socket", function(e3) {
      e3.connecting ? e3.once("connect", () => c2(e3)) : c2(e3);
    }), e2.on("error", s2);
  })(P2, d2.timeout);
  const { bodyStream: H2, progress: A2 } = (function(e2) {
    if (!e2.body) return {};
    const t2 = w$1(e2.body), o2 = e2.bodySize || (t2 ? null : Buffer.byteLength(e2.body));
    if (!o2) return t2 ? { bodyStream: e2.body } : {};
    const r2 = f({ time: 32, length: o2 });
    return { bodyStream: (t2 ? e2.body : Readable.from(e2.body)).pipe(r2), progress: r2 };
  })(d2);
  return a2.applyMiddleware("onRequest", { options: d2, adapter: O$1, request: P2, context: a2, progress: A2 }), H2 ? H2.pipe(P2) : P2.end(d2.body), { abort: () => P2.abort() };
};
const o = (r2 = [], o2 = R$1) => n(r2, o2);
function c(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
const p = /^https:/i;
function l(s2) {
  const n2 = new Agent(s2), r2 = new Agent$1(s2), o2 = { http: n2, https: r2 };
  return { finalizeOptions: (e2) => {
    if (e2.agent) return e2;
    if (e2.maxRedirects > 0) return { ...e2, agents: o2 };
    const t2 = p.test(e2.href || e2.protocol);
    return { ...e2, agent: t2 ? r2 : n2 };
  } };
}
var h, g, C, b, y, w = { exports: {} }, O = { exports: {} };
function F() {
  return b ? C : (b = 1, C = function(e2) {
    function t2(e3) {
      let n3, r2, o2, i2 = null;
      function c2(...e4) {
        if (!c2.enabled) return;
        const s3 = c2, r3 = Number(/* @__PURE__ */ new Date()), o3 = r3 - (n3 || r3);
        s3.diff = o3, s3.prev = n3, s3.curr = r3, n3 = r3, e4[0] = t2.coerce(e4[0]), "string" != typeof e4[0] && e4.unshift("%O");
        let i3 = 0;
        e4[0] = e4[0].replace(/%([a-zA-Z%])/g, (n4, r4) => {
          if ("%%" === n4) return "%";
          i3++;
          const o4 = t2.formatters[r4];
          if ("function" == typeof o4) {
            const t3 = e4[i3];
            n4 = o4.call(s3, t3), e4.splice(i3, 1), i3--;
          }
          return n4;
        }), t2.formatArgs.call(s3, e4), (s3.log || t2.log).apply(s3, e4);
      }
      return c2.namespace = e3, c2.useColors = t2.useColors(), c2.color = t2.selectColor(e3), c2.extend = s2, c2.destroy = t2.destroy, Object.defineProperty(c2, "enabled", { enumerable: true, configurable: false, get: () => null !== i2 ? i2 : (r2 !== t2.namespaces && (r2 = t2.namespaces, o2 = t2.enabled(e3)), o2), set: (e4) => {
        i2 = e4;
      } }), "function" == typeof t2.init && t2.init(c2), c2;
    }
    function s2(e3, s3) {
      const n3 = t2(this.namespace + (typeof s3 > "u" ? ":" : s3) + e3);
      return n3.log = this.log, n3;
    }
    function n2(e3, t3) {
      let s3 = 0, n3 = 0, r2 = -1, o2 = 0;
      for (; s3 < e3.length; ) if (n3 < t3.length && (t3[n3] === e3[s3] || "*" === t3[n3])) "*" === t3[n3] ? (r2 = n3, o2 = s3, n3++) : (s3++, n3++);
      else {
        if (-1 === r2) return false;
        n3 = r2 + 1, o2++, s3 = o2;
      }
      for (; n3 < t3.length && "*" === t3[n3]; ) n3++;
      return n3 === t3.length;
    }
    return t2.debug = t2, t2.default = t2, t2.coerce = function(e3) {
      return e3 instanceof Error ? e3.stack || e3.message : e3;
    }, t2.disable = function() {
      const e3 = [...t2.names, ...t2.skips.map((e4) => "-" + e4)].join(",");
      return t2.enable(""), e3;
    }, t2.enable = function(e3) {
      t2.save(e3), t2.namespaces = e3, t2.names = [], t2.skips = [];
      const s3 = ("string" == typeof e3 ? e3 : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const e4 of s3) "-" === e4[0] ? t2.skips.push(e4.slice(1)) : t2.names.push(e4);
    }, t2.enabled = function(e3) {
      for (const s3 of t2.skips) if (n2(e3, s3)) return false;
      for (const s3 of t2.names) if (n2(e3, s3)) return true;
      return false;
    }, t2.humanize = (function() {
      if (g) return h;
      g = 1;
      var e3 = 1e3, t3 = 60 * e3, s3 = 60 * t3, n3 = 24 * s3, r2 = 7 * n3;
      function o2(e4, t4, s4, n4) {
        var r3 = t4 >= 1.5 * s4;
        return Math.round(e4 / s4) + " " + n4 + (r3 ? "s" : "");
      }
      return h = function(i2, c2) {
        c2 = c2 || {};
        var a2, u2, p2 = typeof i2;
        if ("string" === p2 && i2.length > 0) return (function(o3) {
          if (!((o3 = String(o3)).length > 100)) {
            var i3 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o3);
            if (i3) {
              var c3 = parseFloat(i3[1]);
              switch ((i3[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return 315576e5 * c3;
                case "weeks":
                case "week":
                case "w":
                  return c3 * r2;
                case "days":
                case "day":
                case "d":
                  return c3 * n3;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return c3 * s3;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return c3 * t3;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return c3 * e3;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return c3;
                default:
                  return;
              }
            }
          }
        })(i2);
        if ("number" === p2 && isFinite(i2)) return c2.long ? (a2 = i2, (u2 = Math.abs(a2)) >= n3 ? o2(a2, u2, n3, "day") : u2 >= s3 ? o2(a2, u2, s3, "hour") : u2 >= t3 ? o2(a2, u2, t3, "minute") : u2 >= e3 ? o2(a2, u2, e3, "second") : a2 + " ms") : (function(r3) {
          var o3 = Math.abs(r3);
          return o3 >= n3 ? Math.round(r3 / n3) + "d" : o3 >= s3 ? Math.round(r3 / s3) + "h" : o3 >= t3 ? Math.round(r3 / t3) + "m" : o3 >= e3 ? Math.round(r3 / e3) + "s" : r3 + "ms";
        })(i2);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(i2));
      };
    })(), t2.destroy = function() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }, Object.keys(e2).forEach((s3) => {
      t2[s3] = e2[s3];
    }), t2.names = [], t2.skips = [], t2.formatters = {}, t2.selectColor = function(e3) {
      let s3 = 0;
      for (let t3 = 0; t3 < e3.length; t3++) s3 = (s3 << 5) - s3 + e3.charCodeAt(t3), s3 |= 0;
      return t2.colors[Math.abs(s3) % t2.colors.length];
    }, t2.enable(t2.load()), t2;
  });
}
var v, j, x, E, k = { exports: {} }, R = /* @__PURE__ */ c((E || (E = 1, typeof process > "u" || "renderer" === process.type || true === process.browser || process.__nwjs ? w.exports = (y || (y = 1, (function(e2, t2) {
  t2.formatArgs = function(t3) {
    if (t3[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t3[0] + (this.useColors ? "%c " : " ") + "+" + e2.exports.humanize(this.diff), !this.useColors) return;
    const s3 = "color: " + this.color;
    t3.splice(1, 0, s3, "color: inherit");
    let n2 = 0, r2 = 0;
    t3[0].replace(/%[a-zA-Z%]/g, (e3) => {
      "%%" !== e3 && (n2++, "%c" === e3 && (r2 = n2));
    }), t3.splice(r2, 0, s3);
  }, t2.save = function(e3) {
    try {
      e3 ? t2.storage.setItem("debug", e3) : t2.storage.removeItem("debug");
    } catch {
    }
  }, t2.load = function() {
    let e3;
    try {
      e3 = t2.storage.getItem("debug") || t2.storage.getItem("DEBUG");
    } catch {
    }
    return !e3 && typeof process < "u" && "env" in process && (e3 = process.env.DEBUG), e3;
  }, t2.useColors = function() {
    if (typeof window < "u" && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return true;
    if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
    let e3;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (e3 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e3[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }, t2.storage = (function() {
    try {
      return localStorage;
    } catch {
    }
  })(), t2.destroy = /* @__PURE__ */ (() => {
    let e3 = false;
    return () => {
      e3 || (e3 = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), t2.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t2.log = console.debug || console.log || (() => {
  }), e2.exports = F()(t2);
  const { formatters: s2 } = e2.exports;
  s2.j = function(e3) {
    try {
      return JSON.stringify(e3);
    } catch (e4) {
      return "[UnexpectedJSONParseError]: " + e4.message;
    }
  };
})(O, O.exports)), O.exports) : w.exports = (x || (x = 1, (function(e2, t2) {
  const s2 = require$$0, o2 = require$$1$1;
  t2.init = function(e3) {
    e3.inspectOpts = {};
    const s3 = Object.keys(t2.inspectOpts);
    for (let n2 = 0; n2 < s3.length; n2++) e3.inspectOpts[s3[n2]] = t2.inspectOpts[s3[n2]];
  }, t2.log = function(...e3) {
    return process.stderr.write(o2.formatWithOptions(t2.inspectOpts, ...e3) + "\n");
  }, t2.formatArgs = function(s3) {
    const { namespace: n2, useColors: r2 } = this;
    if (r2) {
      const t3 = this.color, r3 = "\x1B[3" + (t3 < 8 ? t3 : "8;5;" + t3), o3 = `  ${r3};1m${n2} \x1B[0m`;
      s3[0] = o3 + s3[0].split("\n").join("\n" + o3), s3.push(r3 + "m+" + e2.exports.humanize(this.diff) + "\x1B[0m");
    } else s3[0] = (t2.inspectOpts.hideDate ? "" : /* @__PURE__ */ (/* @__PURE__ */ new Date()).toISOString() + " ") + n2 + " " + s3[0];
  }, t2.save = function(e3) {
    e3 ? process.env.DEBUG = e3 : delete process.env.DEBUG;
  }, t2.load = function() {
    return process.env.DEBUG;
  }, t2.useColors = function() {
    return "colors" in t2.inspectOpts ? !!t2.inspectOpts.colors : s2.isatty(process.stderr.fd);
  }, t2.destroy = o2.deprecate(() => {
  }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."), t2.colors = [6, 2, 3, 4, 5, 1];
  try {
    const e3 = (function() {
      if (j) return v;
      j = 1;
      const e4 = (function() {
        const e5 = /(Chrome|Chromium)\/(?<chromeVersion>\d+)\./.exec(navigator.userAgent);
        if (e5) return Number.parseInt(e5.groups.chromeVersion, 10);
      })() >= 69 && { level: 1, hasBasic: true, has256: false, has16m: false };
      return v = { stdout: e4, stderr: e4 };
    })();
    e3 && (e3.stderr || e3).level >= 2 && (t2.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221]);
  } catch {
  }
  t2.inspectOpts = Object.keys(process.env).filter((e3) => /^debug_/i.test(e3)).reduce((e3, t3) => {
    const s3 = t3.substring(6).toLowerCase().replace(/_([a-z])/g, (e4, t4) => t4.toUpperCase());
    let n2 = process.env[t3];
    return n2 = !!/^(yes|on|true|enabled)$/i.test(n2) || !/^(no|off|false|disabled)$/i.test(n2) && ("null" === n2 ? null : Number(n2)), e3[s3] = n2, e3;
  }, {}), e2.exports = F()(t2);
  const { formatters: i2 } = e2.exports;
  i2.o = function(e3) {
    return this.inspectOpts.colors = this.useColors, o2.inspect(e3, this.inspectOpts).split("\n").map((e4) => e4.trim()).join(" ");
  }, i2.O = function(e3) {
    return this.inspectOpts.colors = this.useColors, o2.inspect(e3, this.inspectOpts);
  };
})(k, k.exports)), k.exports)), w.exports));
const A = ["cookie", "authorization"], q = Object.prototype.hasOwnProperty;
function S(e2 = {}) {
  const t2 = e2.verbose, s2 = e2.namespace || "get-it", n2 = R(s2), r2 = e2.log || n2, o2 = r2 === n2 && !R.enabled(s2);
  let i2 = 0;
  return { processOptions: (e3) => (e3.debug = r2, e3.requestId = e3.requestId || ++i2, e3), onRequest: (s3) => {
    if (o2 || !s3) return s3;
    const n3 = s3.options;
    if (r2("[%s] HTTP %s %s", n3.requestId, n3.method, n3.url), t2 && n3.body && "string" == typeof n3.body && r2("[%s] Request body: %s", n3.requestId, n3.body), t2 && n3.headers) {
      const t3 = false === e2.redactSensitiveHeaders ? n3.headers : ((e3, t4) => {
        const s4 = {};
        for (const n4 in e3) q.call(e3, n4) && (s4[n4] = t4.indexOf(n4.toLowerCase()) > -1 ? "<redacted>" : e3[n4]);
        return s4;
      })(n3.headers, A);
      r2("[%s] Request headers: %s", n3.requestId, JSON.stringify(t3, null, 2));
    }
    return s3;
  }, onResponse: (e3, s3) => {
    if (o2 || !e3) return e3;
    const n3 = s3.options.requestId;
    return r2("[%s] Response code: %s %s", n3, e3.statusCode, e3.statusMessage), t2 && e3.body && r2("[%s] Response body: %s", n3, (function(e4) {
      return -1 !== (e4.headers["content-type"] || "").toLowerCase().indexOf("application/json") ? (function(e5) {
        try {
          const t3 = "string" == typeof e5 ? JSON.parse(e5) : e5;
          return JSON.stringify(t3, null, 2);
        } catch {
          return e5;
        }
      })(e4.body) : e4.body;
    })(e3)), e3;
  }, onError: (e3, t3) => {
    const s3 = t3.options.requestId;
    return e3 ? (r2("[%s] ERROR: %s", s3, e3.message), e3) : (r2("[%s] Error encountered, but handled by an earlier middleware", s3), e3);
  } };
}
function I(e2, t2 = {}) {
  return { processOptions: (s2) => {
    const n2 = s2.headers || {};
    return s2.headers = t2.override ? Object.assign({}, n2, e2) : Object.assign({}, e2, n2), s2;
  } };
}
const T2 = typeof Buffer > "u" ? () => false : (e2) => Buffer.isBuffer(e2);
function M(e2) {
  return "[object Object]" === Object.prototype.toString.call(e2);
}
function P(e2) {
  if (false === M(e2)) return false;
  const t2 = e2.constructor;
  if (void 0 === t2) return true;
  const s2 = t2.prototype;
  return !(false === M(s2) || false === s2.hasOwnProperty("isPrototypeOf"));
}
const z = ["boolean", "string", "number"];
function B() {
  return { processOptions: (e2) => {
    const t2 = e2.body;
    return !t2 || "function" == typeof t2.pipe || T2(t2) || -1 === z.indexOf(typeof t2) && !Array.isArray(t2) && !P(t2) ? e2 : Object.assign({}, e2, { body: JSON.stringify(e2.body), headers: Object.assign({}, e2.headers, { "Content-Type": "application/json" }) });
  } };
}
function D(e2) {
  return { onResponse: (s2) => {
    const n2 = s2.headers["content-type"] || "", r2 = e2 && e2.force || -1 !== n2.indexOf("application/json");
    return s2.body && n2 && r2 ? Object.assign({}, s2, { body: t2(s2.body) }) : s2;
  }, processOptions: (e3) => Object.assign({}, e3, { headers: Object.assign({ Accept: "application/json" }, e3.headers) }) };
  function t2(e3) {
    try {
      return JSON.parse(e3);
    } catch (e4) {
      throw e4.message = `Failed to parsed response body as JSON: ${e4.message}`, e4;
    }
  }
}
let J = {};
typeof globalThis < "u" ? J = globalThis : typeof window < "u" ? J = window : typeof global < "u" ? J = global : typeof self < "u" && (J = self);
var U = J;
function G(e2 = {}) {
  const t2 = e2.implementation || U.Observable;
  if (!t2) throw new Error("`Observable` is not available in global scope, and no implementation was passed");
  return { onReturn: (e3, s2) => new t2((t3) => (e3.error.subscribe((e4) => t3.error(e4)), e3.progress.subscribe((e4) => t3.next(Object.assign({ type: "progress" }, e4))), e3.response.subscribe((e4) => {
    t3.next(Object.assign({ type: "response" }, e4)), t3.complete();
  }), e3.request.publish(s2), () => e3.abort.publish())) };
}
function H(e2) {
  return (t2) => ({ stage: e2, percent: t2.percentage, total: t2.length, loaded: t2.transferred, lengthComputable: !(0 === t2.length && 0 === t2.percentage) });
}
function V() {
  let e2 = false;
  const t2 = H("download"), s2 = H("upload");
  return { onHeaders: (e3, s3) => {
    const n2 = f({ time: 32 });
    return n2.on("progress", (e4) => s3.context.channels.progress.publish(t2(e4))), e3.pipe(n2);
  }, onRequest: (t3) => {
    t3.progress && t3.progress.on("progress", (n2) => {
      e2 = true, t3.context.channels.progress.publish(s2(n2));
    });
  }, onResponse: (t3, n2) => (!e2 && typeof n2.options.body < "u" && n2.channels.progress.publish(s2({ length: 0, transferred: 0, percentage: 100 })), t3) };
}
var X = (e2, t2, s2) => !("GET" !== s2.method && "HEAD" !== s2.method || e2.response && e2.response.statusCode) && u$1(e2);
function Y(e2) {
  return 100 * Math.pow(2, e2) + 100 * Math.random();
}
const ee = (e2 = {}) => ((e3) => {
  const t2 = e3.maxRetries || 5, s2 = e3.retryDelay || Y, n2 = e3.shouldRetry;
  return { onError: (e4, r2) => {
    const o2 = r2.options, i2 = o2.maxRetries || t2, c2 = o2.retryDelay || s2, a2 = o2.shouldRetry || n2, u2 = o2.attemptNumber || 0;
    if (null !== (p2 = o2.body) && "object" == typeof p2 && "function" == typeof p2.pipe || !a2(e4, u2, o2) || u2 >= i2) return e4;
    var p2;
    const l2 = Object.assign({}, r2, { options: Object.assign({}, o2, { attemptNumber: u2 + 1 }) });
    return setTimeout(() => r2.channels.request.publish(l2), c2(u2)), null;
  } };
})({ shouldRetry: X, ...e2 });
ee.shouldRetry = X;
export {
  B,
  D,
  G,
  I,
  S,
  V,
  ee as e,
  l,
  o
};
