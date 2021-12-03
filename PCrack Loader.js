// ==UserScript==
// @name Krunker  PETIUKACRACKware Loader
// @description   Krunker software [cracked by UNO XS]
// @version       0.1
// @author        UNO XS
// @iconURL       https://cdn.discordapp.com/attachments/747504225205878814/834058167594778754/tenor.gif
// @match         *://krunker.io/*
// @exclude       *://krunker.io/editor*
// @exclude       *://krunker.io/social*
// @run-at        document-start
// @grant         none
// ==/UserScript==

/* eslint-env es6 */
/* eslint-disable curly, no-undef, no-loop-func, no-return-assign, no-sequences */

/* Very buggy loader */
(async function() {
    'use strict';

    console.log("[PCrack Loader] Downloading script...");
    await new Promise(r => setTimeout(r, 0));
    var LoadP = document.createElement('script');
    LoadP.src = "https://rawcdn.githack.com/nounoxs/pwarecrack/d16e286993fb44b99533cf926578442ad0e673ce/pware.js";
    document.head.append(LoadP)
})();
