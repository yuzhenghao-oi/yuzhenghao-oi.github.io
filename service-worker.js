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

var precacheConfig = [["2019-11-09-题解P1049【装箱问题】/index.html","89082d068c8ae2e39776a13d37dce3cc"],["2020-02-02-CSP与NOIP/index.html","84c970362d6519b27496c35b6756e19c"],["2020-02-03-题解P1765【手机】/index.html","40335bd275fde378321c97fb5135d359"],["2020-02-04-题解P5015【标题统计】/index.html","0cda0e7e069b8161fbb4f7457978f188"],["2020-02-05-题解P1424【小鱼的航程改进版】/index.html","df9f9012b6cb6002cc5f83f645838181"],["2020-02-18-洛谷2月月赛/index.html","f90ce2f7b6cee31c67386a7a6d3750ca"],["2020-02-19-博弈论/index.html","bb13149784df49d0a4a5d73a1c12e99f"],["2020-02-20-深度优先搜索与广度优先搜索/index.html","08927c137d9aeb5c227bc624b41fe48a"],["2020-02-22-运算符与条件分⽀专题复习讲义/index.html","46ebe516213e7dad9baa9353abde2f9a"],["2020-03-02-一群鬼才/index.html","ea533fb5bcf27951b9cc87d7d16ed864"],["2020-03-10-洛谷3月月赛/index.html","6c6db7aa69b53eecd4106fe31bf36d7a"],["2020-03-15-yuesai3-1/index.html","07dea36ded7a06de1e64c350c4e71845"],["2020-03-20-深入浅出评测/index.html","bbc7b460ad5c8cf9f57ae59c11e90eca"],["2020-03-21-天堂哀鸣曲/index.html","a3f3c133c2716d4616dc7bf0b4233793"],["2020-03-22-哈德逊河奇迹/index.html","8d05cd903af032e6e7d5a34c756f550c"],["2020-03-29-yuesai3-2总结/index.html","3a9eb37d311e503e2b71fb7a2468b948"],["2020-04-02-iPad-Pro/index.html","f83cbea6c347392b991ea98ce8f496c5"],["2020-04-10-Apple实用小技巧/index.html","0e301abd420a8e49b53b31967d511413"],["2020-04-12-diguitui/index.html","6b5f53214d15b6dd3aee2ad494e2dd67"],["2020-04-13-luoguyuesai4-2-2/index.html","638a89aecd35b7eab2d96d7bd4edca78"],["2020-04-16-iPhone-SE/index.html","93c0b1478021eea915652cd04c0a03a9"],["2020-04-20-状压dp/index.html","dcc8d18cc78ba02c19eefcbdaaf7e150"],["2020-05-03-biyedianli/index.html","867040c39ad91105c93a8d8f76f53ab0"],["2020-05-03-moni-gaojingdu/index.html","dbb148f9947c29fab06f10badd369e2d"],["2020-05-31-巴基斯坦空难/index.html","c95f33aad01454e3dc7aa80def507f86"],["2020-06-20-yuesai6-1/index.html","df35f99ee0f414e89543d137db95f05e"],["2020-06-23-wwdc20/index.html","2b92fc3b1bff1f47ef8434bd5fbcdf35"],["2020-07-23-test/index.html","f58288d8807c2404498acc77371e4c96"],["2020-07-25-tu1/index.html","e96ea0e92383efa76234745288f62d19"],["2020-08-10-planestop/index.html","ea5acca0627a108920db576fd58a8e26"],["2020-08-19-ifmengxin/index.html","f04562ef72fa976a99d24e0558a998a1"],["2020年度飞行报告/index.html","94ae32ef71cd3c84afa60e7476f91871"],["404.html","7a18e029948bbbec22e5a2b77fa085d2"],["CSP-J:S复赛常见问题与策略/index.html","cf84a7a4b5d7908de589d8cda20b09e8"],["CSP-JS 竞赛环境与注意事项/index.html","ef33d69900a9e235f24b59379cbb768f"],["CSP-JS-初赛考纲/index.html","9f636ec234e8b1c72e8c706f1365d2e3"],["CSP-JS备考指南/index.html","b6392b1630e38b5d6c718597572c6a5a"],["CSP-JS复赛文件读写与数论模板/index.html","1ba76cfaaa331fad99bcda5d8bd78e05"],["CSP-JS复赛模板库/index.html","eadbc82ec869de3f4e3c4072555d07c6"],["CSP2020-2/index.html","10e69192cc2de41b41e8cb147dfad56b"],["CSP2020/index.html","1eb6338489daab207e93965a01768905"],["about/index.html","9dde1c593a7722b83fa5dc600b87d679"],["airpodsmax/index.html","c4c80856ad6b83d135b47d09ca7e0048"],["apple2020-2/index.html","f4b25286a69c217d13ddda9afc0ade6a"],["apple2020-3/index.html","0efb0f0b90fdb80d183f80981de83bf0"],["apple2020/index.html","59d72fa61cbac7526781d9378f9865e2"],["archives/2019/11/index.html","e1a9c743496405d0a22633c94d4195a4"],["archives/2019/index.html","f2b3f094fe83b36a7d67e510e265248a"],["archives/2020/02/index.html","abbea21ebfd7241757e713a637685bda"],["archives/2020/03/index.html","500c61f7004f4bfc50696bb18a576f96"],["archives/2020/04/index.html","bae11237a8f5bc84bbd4dab86e4282fa"],["archives/2020/05/index.html","d559cedc33c27d8ecab0a3bbecbf80cf"],["archives/2020/06/index.html","58aaa315de38634e0a7d699bcb91c483"],["archives/2020/07/index.html","4b8b7511e3d9e31c41b6c69dae019d1d"],["archives/2020/08/index.html","5ceaf62d069bba1394c00f833b8c81a2"],["archives/2020/09/index.html","0f01f4745eb931c8779449bb9ab92436"],["archives/2020/10/index.html","a45919a6350fce714a73f138c2df587c"],["archives/2020/10/page/2/index.html","459f18a768169cefa4f99ade4542a96a"],["archives/2020/11/index.html","bec86a4c977c087be55536b72dcdf7df"],["archives/2020/12/index.html","635996c4ae55690111deb67905bc229b"],["archives/2020/index.html","4a3d07d8d60722cdeb9ec33d09d2be60"],["archives/2020/page/2/index.html","c3b91d7b12d20022ae74999c82799f66"],["archives/2020/page/3/index.html","a93662c3d7c87c7b04867a26319f249b"],["archives/2020/page/4/index.html","849f2cce4fb43a69d253233569ff86c7"],["archives/2020/page/5/index.html","44dc0dd6064cbfa4acd7f47ae4895b82"],["archives/index.html","d6c749aa00c6450223f54145dda87f5f"],["archives/page/2/index.html","a835305956e86a85b12f561c0f610dfc"],["archives/page/3/index.html","348d47e2bc92222b1fc21509936a2fc3"],["archives/page/4/index.html","e77391d944f0c89404bb9c574d54dd40"],["archives/page/5/index.html","e71777ab1371f7ffbf5ea5dcfb81f824"],["assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["changelog/index.html","ad450e18c7c44dc733517805f5a85b66"],["css/index.css","8722fc2985d9d2763531085bbc492eb2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["dangerairpot/index.html","8adbbf6cc52d2ea46908de71f041883c"],["img/1favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/favicon.png","54f198aa4a08ad085aa0944450b8f545"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","779673206868a62032e30de8ef4f7f72"],["js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["link/index.html","8eb5f71eb46dd2661c86ca6c4a6ed4e7"],["page/2/index.html","c097956b99bd42fc9fc42571445d02b4"],["page/3/index.html","37472f2b597950f43f6b0780ad6f1730"],["page/4/index.html","28c045c7f286e22390a2f5c1f456ecf5"],["page/5/index.html","7ee0dfdaf808dad3dcc2d412672c70c6"],["tags/Apple/index.html","4e306e1d6162528b4bb311013b5ce1ea"],["tags/C-讲义/index.html","c753babd3bfcfb7183952be9d9c212f4"],["tags/CSP-J-S初赛/index.html","84b3e97a67aeec5937e2df67eebf511d"],["tags/CSP-J-S复赛/index.html","02b1418d6c3c3e2586e6db98a18ae88c"],["tags/index.html","47ad9a13229c19173af1fa29590cceb4"],["tags/《深入浅出基础篇》/index.html","3214b96a2eec2add53aed0089355326c"],["tags/信息学竞赛/index.html","5c1419d00ae030c19136dfb2de3ddd64"],["tags/信息学竞赛/page/2/index.html","92c9df85a780cd4dc90d7d9c97a4042b"],["tags/模拟飞行/index.html","0729fda777455b24eb943e3c7146b48a"],["tags/民航/index.html","0e0b083a5bf904bb788851c1ee72c2b3"],["tags/洛谷/index.html","0e86d173ac6aac98342e7d5768d01ce8"],["tags/空难纪实/index.html","60007601c3c16218b0bb20da2823d593"],["tags/算法/index.html","e493ec8e9d06c3018e2df2fa14c5b856"],["tags/题解/index.html","f4d26be4fec9255af7bf33018201092d"],["模拟题一/index.html","c346db7d695975d93c1471bd9f4ed51f"],["模拟题三/index.html","333f201c32175dd936335218343f48d4"],["模拟题二/index.html","a682d8a257a4ab39b5b6ddcf4c065b8e"],["洛谷模拟题/index.html","5c4cbbcbf640f1f6a5060c89034bb5c8"]];
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







