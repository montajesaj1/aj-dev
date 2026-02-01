globalThis.process ??= {}; globalThis.process.env ??= {};
import { h as decodeKey } from './chunks/astro/server_D02kQFOn.mjs';
import './chunks/astro-designed-error-pages_BWQ3OpdA.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_DHLw2iAW.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/ne0/Projects/aj-dev/","cacheDir":"file:///home/ne0/Projects/aj-dev/node_modules/.astro/","outDir":"file:///home/ne0/Projects/aj-dev/dist/","srcDir":"file:///home/ne0/Projects/aj-dev/src/","publicDir":"file:///home/ne0/Projects/aj-dev/public/","buildClientDir":"file:///home/ne0/Projects/aj-dev/dist/","buildServerDir":"file:///home/ne0/Projects/aj-dev/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"posts/post-1/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post-1","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-1\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-1.md","pathname":"/posts/post-1","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"posts/post-2/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post-2","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-2\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-2.md","pathname":"/posts/post-2","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"resume/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/resume","isIndex":false,"type":"page","pattern":"^\\/resume\\/?$","segments":[[{"content":"resume","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resume.astro","pathname":"/resume","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/ne0/Projects/aj-dev/src/pages/posts/post-1.md",{"propagation":"none","containsHead":true}],["/home/ne0/Projects/aj-dev/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["/home/ne0/Projects/aj-dev/src/pages/posts/post-2.md",{"propagation":"none","containsHead":true}],["/home/ne0/Projects/aj-dev/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/ne0/Projects/aj-dev/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/ne0/Projects/aj-dev/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["/home/ne0/Projects/aj-dev/src/pages/resume.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/posts/post-1@_@md":"pages/posts/post-1.astro.mjs","\u0000@astro-page:src/pages/posts/post-2@_@md":"pages/posts/post-2.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/resume@_@astro":"pages/resume.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Ah_NYl8Q.mjs","/home/ne0/Projects/aj-dev/src/components/ThemeIcon.astro?astro&type=script&index=0&lang.ts":"_astro/ThemeIcon.astro_astro_type_script_index_0_lang.DnMHz85Q.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/ne0/Projects/aj-dev/src/components/ThemeIcon.astro?astro&type=script&index=0&lang.ts","const o=()=>typeof localStorage<\"u\"&&localStorage.getItem(\"theme\")||\"light\",t=e=>{document.documentElement.setAttribute(\"data-theme\",e),typeof localStorage<\"u\"&&localStorage.setItem(\"theme\",e)},m=o();t(m);const n=document.getElementById(\"theme-toggle\");n&&n.addEventListener(\"click\",()=>{const c=document.documentElement.getAttribute(\"data-theme\")===\"light\"?\"dark\":\"light\";t(c)});document.addEventListener(\"astro:page-load\",()=>{const e=o();t(e)});"]],"assets":["/_astro/kode-mono-latin-ext-400-normal.EAjZ4cli.woff2","/_astro/kode-mono-latin-400-normal.B2kgRoZt.woff2","/_astro/kode-mono-latin-ext-400-normal.lFll6h0n.woff","/_astro/kode-mono-latin-400-normal.BFDIz5Ud.woff","/_astro/blog.-vo4sO70.css","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/_noop-actions.mjs","/_worker.js/index.js","/_worker.js/renderers.mjs","/icons/amazon-logo.jpg","/icons/apryse-logo.jpg","/icons/epam.png","/icons/global.png","/icons/icon.svg","/icons/speedline-logo.jpg","/icons/ubc-logo.jpg","/_worker.js/_astro/blog.-vo4sO70.css","/_worker.js/_astro/kode-mono-latin-400-normal.B2kgRoZt.woff2","/_worker.js/_astro/kode-mono-latin-400-normal.BFDIz5Ud.woff","/_worker.js/_astro/kode-mono-latin-ext-400-normal.EAjZ4cli.woff2","/_worker.js/_astro/kode-mono-latin-ext-400-normal.lFll6h0n.woff","/_worker.js/pages/404.astro.mjs","/_worker.js/pages/blog.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/projects.astro.mjs","/_worker.js/pages/resume.astro.mjs","/_worker.js/chunks/BaseLayout_Dtui8y9A.mjs","/_worker.js/chunks/BlogLayout_CFgcnaO5.mjs","/_worker.js/chunks/ThemeIcon_DWRB30W5.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_D0ndC37N.mjs","/_worker.js/chunks/_noop-actions_Dk2yPKP3.mjs","/_worker.js/chunks/astro-designed-error-pages_BWQ3OpdA.mjs","/_worker.js/chunks/astro_BfhJpDdV.mjs","/_worker.js/chunks/index_E1rik4FL.mjs","/_worker.js/chunks/noop-middleware_DHLw2iAW.mjs","/_worker.js/chunks/post-1_BKHQqJUU.mjs","/_worker.js/chunks/post-2_BN6kvIka.mjs","/_worker.js/pages/posts/post-1.astro.mjs","/_worker.js/pages/posts/post-2.astro.mjs","/_worker.js/chunks/astro/server_D02kQFOn.mjs","/404.html","/blog/index.html","/posts/post-1/index.html","/posts/post-2/index.html","/projects/index.html","/resume/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"aMO8AKw9ZYuyAu8KgZqOm9ho3DaIrD7VRQ4NdZyBo38="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
