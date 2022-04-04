// ==UserScript==
// @name         Auto redirect on "click on index.html" moddle page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://moodle-ingenieurs.cesi.fr/mod/resource/*
// @icon         https://www.google.com/s2/favicons?domain=cesi.fr
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var isIndexPage = document.querySelector(".resourceworkaround");

    if (isIndexPage){
        console.log("is index page, auto redirecting");
        var res = document.querySelector(".resourceworkaround > a");
        window.location.href = res.href;
    }
})();
