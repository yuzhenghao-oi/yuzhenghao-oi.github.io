/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2019-11-09-题解P1049【装箱问题】/index.html","bdb1b437137f21ab595e497138ee01e2"],["2020-02-02-CSP与NOIP/index.html","fd6a9618da742aed7b2b243374d2ccbe"],["2020-02-03-题解P1765【手机】/index.html","06add425a18fb79f0f2be424be234c3d"],["2020-02-04-题解P5015【标题统计】/index.html","567573144c4330d415f7e52728a8051b"],["2020-02-05-题解P1424【小鱼的航程改进版】/index.html","49dfddaa00db49aa9a40f078afced3e4"],["2020-02-18-洛谷2月月赛/index.html","6b9ebd10711c61f00a3aea5eb81742c9"],["2020-02-19-博弈论/index.html","74b8af771a729dbcdf46a3acff8cae48"],["2020-02-20-深度优先搜索与广度优先搜索/index.html","785355bbc91119be208a17fbea1dffbf"],["2020-02-22-运算符与条件分⽀专题复习讲义/index.html","0270d84d20227cde9bbae94ec0bec439"],["2020-03-02-一群鬼才/index.html","9703f02e8b952390bf6187f4649b4778"],["2020-03-10-洛谷3月月赛/index.html","e479a5fb98e8011c7f1a188efd05b422"],["2020-03-15-yuesai3-1/index.html","4b8474f93933358b353a822e979b6790"],["2020-03-20-深入浅出评测/index.html","bb3a47978096c63fce83b92ef652f30a"],["2020-03-21-天堂哀鸣曲/index.html","a0406cbe59ae4673ea033628d113b4cb"],["2020-03-22-哈德逊河奇迹/index.html","14779780223f75233106964c90043e55"],["2020-03-29-yuesai3-2总结/index.html","3438db740ba1e31bf6b67ca46370a898"],["2020-04-02-iPad-Pro/index.html","be82cad280b9217441d9605de6504c50"],["2020-04-10-Apple实用小技巧/index.html","904df311baaffd6da2f402ae5e9f385e"],["2020-04-12-diguitui/index.html","2980298fdd79ac3d9636edd42bd37290"],["2020-04-13-luoguyuesai4-2-2/index.html","b95478938a614cd298c0d15042f18cd9"],["2020-04-16-iPhone-SE/index.html","e7036ca6eca3d4dd9cbdff240b928aa2"],["2020-04-20-状压dp/index.html","4f568baa5108cd6be5d347b82c6037f0"],["2020-05-03-biyedianli/index.html","0afc56ea488191b52a8e11657aaeba88"],["2020-05-03-moni-gaojingdu/index.html","4b61b9bfe8e66f9e34a31a114a399ec1"],["2020-05-31-巴基斯坦空难/index.html","9515aa7eb9411ab80f8d7cb87be0b445"],["2020-06-20-yuesai6-1/index.html","c1efacdd02343d9b1c9f9b9137e9c4e1"],["2020-06-23-wwdc20/index.html","ca40058ae40013ddd01689e26ad13861"],["2020-07-23-test/index.html","ede86bfd39645688cd5bedf16cb1c90f"],["2020-07-25-tu1/index.html","3bef6a21bec30f13b20c6b36fc7aab53"],["2020-08-10-planestop/index.html","2d7c50c674b0652cc58f1c3a2b7a0b3b"],["2020-08-19-ifmengxin/index.html","84394d20ebffe0cd472d100b5a2bc640"],["2020年度飞行报告/index.html","34d1626e40b23655d3b7ceadb588df63"],["404.html","835ad7c0e27c86e0e1195b868c914f32"],["CSP-J:S复赛常见问题与策略/index.html","3ff02b79cb12cefd0f3fa2373f0c3c47"],["CSP-JS 竞赛环境与注意事项/index.html","55ebe9022b978ef731417d153f318a1a"],["CSP-JS-初赛考纲/index.html","f60b907bed2c87cd988d24f9bd28d36f"],["CSP-JS备考指南/index.html","613806aeab9e38df3d888980d4b19319"],["CSP-JS复赛文件读写与数论模板/index.html","358ef4ec65e3cc101113adfc0bbb2204"],["CSP-JS复赛模板库/index.html","5093bd36a965c99594c38b8c88cf2c44"],["CSP2020-2/index.html","ab2c8dcf773e63eef360fcfe1c5aaa9a"],["CSP2020/index.html","da34eeaa950bd666099df376979931f6"],["about/index.html","575661c9bee7c4c4c9c703ea6b23ed2a"],["airpodsmax/index.html","e002a30d9a18e200da8a87ce774f1dab"],["apple2020-2/index.html","fa286a813cb160d7cec988e74dc0d0e1"],["apple2020-3/index.html","e2ddd1c68d368acdc23427d7d21b2c28"],["apple2020/index.html","929f403cf7d20340b1c1e4e005f842f3"],["archives/2019/11/index.html","adfb48f55410326c5508efb301c7fcb5"],["archives/2019/index.html","ea6208fbae057e2add9c3aa333f3b625"],["archives/2020/02/index.html","2f270d6ef667e829e3a3183a3e5f3041"],["archives/2020/03/index.html","53ecbee95e1cb5f943d8b8a94bfaf1a7"],["archives/2020/04/index.html","11c1bda21345ab5d830e43dc43f85117"],["archives/2020/05/index.html","0657c657e7aa9e6b9c9134577658589b"],["archives/2020/06/index.html","8aa1e902d2de4fc5ca3e105f6dca1a95"],["archives/2020/07/index.html","680370934d7b2ea086336721410fe446"],["archives/2020/08/index.html","06669bad5e3b589f1b15e44be21319e9"],["archives/2020/09/index.html","26bbe72679f320fb8d81c18979207fb0"],["archives/2020/10/index.html","b131cd167a3599687c89971e76572042"],["archives/2020/10/page/2/index.html","a922420d4a6a812d48bd1359a32aab01"],["archives/2020/11/index.html","8581813db7a0d42068be251b7cf3790b"],["archives/2020/12/index.html","53ff57a7d6c66bb89e64b853a706434c"],["archives/2020/index.html","0b923ac48972990adb7cdff8fea4ac1c"],["archives/2020/page/2/index.html","8db6ff99bf7f238114bf31e400a98a20"],["archives/2020/page/3/index.html","0e11226185e1817263b2efdbf366ffc1"],["archives/2020/page/4/index.html","ef9179962090e2ae2117f7b619041fd0"],["archives/2020/page/5/index.html","5541d656de08e84a544b67ec8cdf5ad9"],["archives/index.html","9e777be45cfcb10f9ef913411f2ff29d"],["archives/page/2/index.html","e0a39497998cc071025c68d8fcf0fcb4"],["archives/page/3/index.html","474f5caaa68a9e2dbdca498d0ad08f8b"],["archives/page/4/index.html","47167af2b81057e7cbf05cbad98167b8"],["archives/page/5/index.html","2cea57a10a52410dada6c2168411668d"],["assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["changelog/index.html","61a05c0024c634f33f9adabee524b0fe"],["css/index.css","8722fc2985d9d2763531085bbc492eb2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["dangerairpot/index.html","b07291cd25b221a184d6293931b458e8"],["img/1favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/favicon.png","54f198aa4a08ad085aa0944450b8f545"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","1b7239851bbb30b5dfdb4dcad828b2f2"],["js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["link/index.html","f34f4a1a2d3ebf3f0775ede5c95043f4"],["page/2/index.html","36e02d2d667a5e59497937ced14e70ca"],["page/3/index.html","4f71e9ee6f30d24ee0e9e1672d319201"],["page/4/index.html","0360dbd18d0022b17f690f1edafd389b"],["page/5/index.html","8d96375652020ab391dcfc144cc3db35"],["tags/Apple/index.html","a8797ae10b223c7b9d067b3281458796"],["tags/C-讲义/index.html","6c19dc0d322bd8c74e7b08afaa95f655"],["tags/CSP-J-S初赛/index.html","d9984908cdf3644e5d5d03f3029baced"],["tags/CSP-J-S复赛/index.html","65b111ba89fb8d647c0d30d8c5ae5d6e"],["tags/index.html","683c42e6bb1db12cd62f58877920e9ef"],["tags/《深入浅出基础篇》/index.html","ce84b0661341989fd5594ea59b066fb8"],["tags/信息学竞赛/index.html","59c754d9c94494ced33d56d899e382bf"],["tags/信息学竞赛/page/2/index.html","c2e79560f85f733c4b0e27fd8724da0f"],["tags/模拟飞行/index.html","70735ff5c16f3c40b86a661b03d5fda5"],["tags/民航/index.html","ba5c4e634627f2269301137db4bf4d9a"],["tags/洛谷/index.html","a58e03a8e2b69cae934eee5112a35183"],["tags/空难纪实/index.html","41ba593c40a7bcb424d019d569231ad3"],["tags/算法/index.html","bb1f9205e4e19e5cdd2728552c4182bf"],["tags/题解/index.html","111ae74ec284331a7aaa910df0c4beaf"],["模拟题一/index.html","6ed1d6bb50611359b01bad73a70933e2"],["模拟题三/index.html","99f1ed9201a72278cfd3c597fcfca342"],["模拟题二/index.html","ec3a2b7f12d83d6df801a2bcfe15abf6"],["洛谷模拟题/index.html","6c6aba0f47b64790aa5741f3cd58e9e3"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







