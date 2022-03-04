// ==UserScript==
// @name         Autoconnnect to CESI portal
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include        https://wifi.viacesi.fr:1003/*
// @icon         https://www.google.com/s2/favicons?domain=viacesi.fr
// @grant        none
// ==/UserScript==

'use strict'
function click() {
    document.querySelector('input[value^="Oui"]').click();
}

function fill(callback){
    document.querySelector('input[name="username"]').value="matheo.berger@viacesi.fr";
    //    document.querySelector('input[name="password"]').value=;
    callback();
}

fill(click);
