// ==UserScript==
// @name         Ent auto mail interface
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://wayf.cesi.fr/login?service=https%3A%2F%2Fmoodle-ingenieurs.cesi.fr%2Flogin%2Findex.php%3FauthCAS%3DCAS
// @icon         https://www.google.com/s2/favicons?domain=cesi.fr
// @grant        none
// ==/UserScript==


'use strict'
function click() {
    document.querySelector(".submit").click();
}

function fill(callback){
    document.querySelector("#login").value="matheo.berger@viacesi.fr";
    callback();
}

fill(click);

//document.querySelector("#login").value="matheo.berger@viacesi.fr";
//document.querySelector("#login").click();
