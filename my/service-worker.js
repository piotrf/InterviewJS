"use strict";var precacheConfig=[["/my/index.html","670cb1f067624dfe0ff98623bc8a65f7"],["/my/static/css/main.f7fee8d7.css","76c97e2748a8eab2fcc8a0d590a48e72"],["/my/static/js/main.ddd1e6a4.js","d19ed3be68848ce17ee03f1c6e3bda66"],["/my/static/media/ShapeAttachedLeft.3e6a1d35.svg","3e6a1d350360ef521e2adfd25b67497c"],["/my/static/media/ShapeAttachedRight.2e234a75.svg","2e234a75c8cf7591d2af1b0ea3fd9db7"],["/my/static/media/ava.b1c05c82.png","b1c05c8251766f8f6ec0d7ff443e3404"],["/my/static/media/icomoon.0871095a.ttf","0871095a3ee5403f36aef33a020f4561"],["/my/static/media/icomoon.3099515c.svg","3099515c0c699c830bb1b452b68e6aff"],["/my/static/media/icomoon.c3cc18c9.woff","c3cc18c9b8df8a41c09ba9a16f9a22f5"],["/my/static/media/icomoon.d2624d9a.eot","d2624d9a04d822c96a47668e75006c27"],["/my/static/media/obama.7e3f94e2.png","7e3f94e2c39026829e0f4dd29d6c84d7"],["/my/static/media/trump.007a82cd.png","007a82cd04dbe9566f5ad5d47bb2e658"],["/my/static/media/welcome-image.8b6c5213.png","8b6c521353b2d0087030ff62d59d2ea8"],["/my/static/media/zenger.0c5c5c6f.jpg","0c5c5c6f0048e8b51b155035076ab5be"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var r="/my/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});