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

var precacheConfig = [["2019-11-09-题解P1049【装箱问题】/index.html","a87b8daae13a0f75b7674acaa4329879"],["2020-02-02-CSP与NOIP/index.html","7572373391dd0dcab7d67248d464b952"],["2020-02-03-题解P1765【手机】/index.html","09ddca6cd99570a8b8d21638f8e163fc"],["2020-02-04-题解P5015【标题统计】/index.html","b9cee5c36c23ea79388d44c68067a5cd"],["2020-02-05-题解P1424【小鱼的航程改进版】/index.html","b1e39e6e5365c3008969e159baa3b6de"],["2020-02-18-洛谷2月月赛/index.html","9b6dd97f66a7621c587771edc05ddb97"],["2020-02-19-博弈论/index.html","66cec7343f72a898fbf87b5fec590bfe"],["2020-02-20-深度优先搜索与广度优先搜索/index.html","a09fdc5c90f968aeaffb4f376197780e"],["2020-02-22-运算符与条件分⽀专题复习讲义/index.html","a0303283bfa5487532676a6695d3ade3"],["2020-03-02-一群鬼才/index.html","7aa9dc8ca85615b0ba3f679df132381c"],["2020-03-10-洛谷3月月赛/index.html","f2594518f485fc0a39607196657de263"],["2020-03-15-yuesai3-1/index.html","bb10d19064661f89e27c9a6dc59ca1b0"],["2020-03-20-深入浅出评测/index.html","2acb5c376e0efd6e61dd20f43d72c304"],["2020-03-21-天堂哀鸣曲/index.html","972aeb27aaa5864932291c388b066ad8"],["2020-03-22-哈德逊河奇迹/index.html","df67fa60bde679d862ed275684c0c717"],["2020-03-29-yuesai3-2总结/index.html","b4b425a1e07f2c0f9f7a55d8a5ef5160"],["2020-04-02-iPad-Pro/index.html","e45434c410e0f3330109eb2f1e5e293c"],["2020-04-10-Apple实用小技巧/index.html","36fbe3821c12ccb69e119b4a530c0175"],["2020-04-12-diguitui/index.html","6373efd155bcf53f39802c2eed6f47ce"],["2020-04-13-luoguyuesai4-2-2/index.html","e4d89763cff104a87b7de278962a1aea"],["2020-04-16-iPhone-SE/index.html","ed01f25f37ca0150f126ac65bdca2d72"],["2020-04-20-状压dp/index.html","213e0e4dfd8ad732aec2b9d7e71a1965"],["2020-05-03-biyedianli/index.html","3dbbb66d40c6a4e2cfdd7278af84a94e"],["2020-05-03-moni-gaojingdu/index.html","4bf8a1de0e097f1d46bf285307c2c9cd"],["2020-05-31-巴基斯坦空难/index.html","9716eb56f2069b849fe9fe43858afea0"],["2020-06-20-yuesai6-1/index.html","af26d461612b96576dc723aa18673022"],["2020-06-23-wwdc20/index.html","41e3f4ad9ad1b6cb1e337fa3005cfea2"],["2020-07-23-test/index.html","dc4094376da174e9da7810536fa6184a"],["2020-07-25-tu1/index.html","5d67b124741155c581fb31fed7b62802"],["2020-08-10-planestop/index.html","2b4deea0d646643247338b42b1c245fd"],["2020-08-19-ifmengxin/index.html","9cfecc23f6986e07cc5bdd185bf652e1"],["2020年度飞行报告/index.html","dba59691203f512000df9e23c5f52dc9"],["404.html","8b426d9e5f104b8f447a7409f76d7c19"],["CSP-J:S复赛常见问题与策略/index.html","9b406f7a872b7cbe72f1b57ddcd88e80"],["CSP-JS 竞赛环境与注意事项/index.html","7fa0b1998b264ec20cdb9f8c2488cb98"],["CSP-JS-初赛考纲/index.html","369f8bf85a9102a3d4733327327e006b"],["CSP-JS备考指南/index.html","27adfa34f656485ad19402f9dc35a5e7"],["CSP-JS复赛文件读写与数论模板/index.html","2afdcc3efac69352ddb4990a13ea6331"],["CSP-JS复赛模板库/index.html","5f83a15d7819f0973fdda5dcef7c12aa"],["CSP2020-2/index.html","39fb18f73210f4b3910e3bffd4554c93"],["CSP2020/index.html","1b199b2bac69048dfdd5c49f2972f5b4"],["about/index.html","69e63fb3c187bccb0b1a58cdc6df5f6d"],["airpodsmax/index.html","3e9ff151fc6e43a168785d96298c9437"],["apple2020-2/index.html","b6d0633a1e90a52bfe26426240360053"],["apple2020-3/index.html","ff86e022ce68e16094f0e8417deb3d15"],["apple2020/index.html","80e75cb90c49fadc0cae9a7542116908"],["archives/2019/11/index.html","ddae67cec7afa42abaab13d57c3db202"],["archives/2019/index.html","8c6486563bdd81db3636425dc3c4cf0d"],["archives/2020/02/index.html","faae9c9f2bb329ebcb14ba0d0140319a"],["archives/2020/03/index.html","3b58c523f89f30a610cce527d15a3e6f"],["archives/2020/04/index.html","6c3b4b059bbd98d4f55e213d9e2acce4"],["archives/2020/05/index.html","4316c561d2020531e4ff7c209d4cd28c"],["archives/2020/06/index.html","587a14313d185784ffeb343984b10dba"],["archives/2020/07/index.html","08adacbc7743752a69616db199f07898"],["archives/2020/08/index.html","793514b70827d4410487f6164766758b"],["archives/2020/09/index.html","cd59d865b0de7be43797f50dc936d2cc"],["archives/2020/10/index.html","f1b3692c26e8c18291b7067578b541a1"],["archives/2020/10/page/2/index.html","cb0175bd598043b18b2306eef81d2b32"],["archives/2020/11/index.html","593ea5e4f1345cae794b2f01b262d5ac"],["archives/2020/12/index.html","742a2da92afb39638856076a6dcde1ff"],["archives/2020/index.html","75ae5aec92b50bd788959403a9e1125b"],["archives/2020/page/2/index.html","798eff3fd56272b83061c7308df66836"],["archives/2020/page/3/index.html","936b357bf7aba9797aa6ebfa15ee3162"],["archives/2020/page/4/index.html","edf25784643c026ec0707f6a0da290cb"],["archives/2020/page/5/index.html","b95af27b7a4d317fd139a163cdf3f485"],["archives/index.html","cff01f288012352e1fec2b4dc5105eaf"],["archives/page/2/index.html","ff7d221ddb7dcfb903580947bc059ee8"],["archives/page/3/index.html","d97222ab3993bdb661091b0bdbe9c758"],["archives/page/4/index.html","8d774f55156355d53d88f0b88cec0550"],["archives/page/5/index.html","6cd0acbe96f73537d512e1110e258e0a"],["assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["changelog/index.html","63df0d153c10c3f9de52a3e3867cba9c"],["css/index.css","8722fc2985d9d2763531085bbc492eb2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["dangerairpot/index.html","9976d0d4e2e89d86c50d249b3360e2c3"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","1a4698fc92fdefdbbabd65367696861d"],["js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["link/index.html","2caf96046176966165de8d9e9aea7f85"],["page/2/index.html","8d8ec2f0a97bfa17a99133a81fa12466"],["page/3/index.html","45fe4d37b2ca6d96ee22d8a56ba43b3c"],["page/4/index.html","c9bcc1cb6a6554b4e3ac8e54957fa403"],["page/5/index.html","21308a71fced91758e41b30eb5037057"],["tags/Apple/index.html","dfad625c7ab8550ed10981a00e6027f2"],["tags/C-讲义/index.html","c01f5c543e1224006f7c4e48fc2699f6"],["tags/CSP-J-S初赛/index.html","1f79759f37ae34c85213e11d2ea8f0ff"],["tags/CSP-J-S复赛/index.html","4413633331d46beb067e684cb0b58174"],["tags/index.html","ec646ad259e72b53190296233802aec2"],["tags/《深入浅出基础篇》/index.html","06813a41c31df4c554b70df43a9820df"],["tags/信息学竞赛/index.html","3a144243d481f3fc2ab8018bd1a99751"],["tags/信息学竞赛/page/2/index.html","82a20202e90a2a70885f655fe0519698"],["tags/模拟飞行/index.html","d176dac09a012ca6e895f8144ef56214"],["tags/民航/index.html","b081fed9061dae0da67a7a256e2dc2ba"],["tags/洛谷/index.html","aa8bf7f843f1d0086bdd6aaae2b919f7"],["tags/空难纪实/index.html","80e8b7568f89ed9b23aa8daf387f08f2"],["tags/算法/index.html","b7f647bb74528d9ba87c628c5af3b456"],["tags/题解/index.html","b4a2b54cc7426507aa6de0691c47fad5"],["模拟题一/index.html","809d01eba00b373a809ee3fb51750152"],["模拟题三/index.html","3a8f3117597ef7efb961e49f4802697d"],["模拟题二/index.html","87ae166e63fe7ba2f9d094a6c95e9cfa"],["洛谷模拟题/index.html","3ef87aad3a63aadd10ad6f203a185a39"]];
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






