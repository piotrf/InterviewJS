"use strict";var precacheConfig=[["/my/index.html","7a0e7bf234bfb0c078fcf9736f4875e9"],["/my/static/css/main.1cbc8e89.css","1da70745cd311cb93d99ad428559cd9c"],["/my/static/js/main.03374073.js","f750defca746b7341066bcfdece6e0af"],["/my/static/media/ShapeAttachedLeft.3e6a1d35.svg","3e6a1d350360ef521e2adfd25b67497c"],["/my/static/media/ShapeAttachedRight.2e234a75.svg","2e234a75c8cf7591d2af1b0ea3fd9db7"],["/my/static/media/ava.b1c05c82.png","b1c05c8251766f8f6ec0d7ff443e3404"],["/my/static/media/chandran.3621629e.png","3621629e6833ca306162274d6b552ea3"],["/my/static/media/hyland.0005619b.png","0005619b30a86291d97dab60a9eda767"],["/my/static/media/icomoon.30bd1fd7.eot","30bd1fd73a3e324ea1d379fd66c638b1"],["/my/static/media/icomoon.7cbf484e.woff","7cbf484eb5d1707e8fef7018a5a96684"],["/my/static/media/icomoon.a4c5630b.ttf","a4c5630b7eb9f0f1920fc71789ffa022"],["/my/static/media/icomoon.d3e3e236.svg","d3e3e23620c2b8883055147abadb2cdc"],["/my/static/media/logo.8fb96054.png","8fb9605468ebd00252d678af8eaf91b8"],["/my/static/media/obama.7e3f94e2.png","7e3f94e2c39026829e0f4dd29d6c84d7"],["/my/static/media/trump.007a82cd.png","007a82cd04dbe9566f5ad5d47bb2e658"],["/my/static/media/welcome-image.8b6c5213.png","8b6c521353b2d0087030ff62d59d2ea8"],["/my/static/media/zenger.0c5c5c6f.jpg","0c5c5c6f0048e8b51b155035076ab5be"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/my/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});