// ==UserScript==
// @name         Home CESI interface autoselect ENT connection
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://moodle-ingenieurs.cesi.fr/login/index.php
// @icon         https://www.google.com/s2/favicons?domain=cesi.fr
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     document.querySelector(".btn-ENT").click();
})();