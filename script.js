// ==UserScript==
// @name         FoodNetwork skip ads
// @namespace    http://tampermonkey.net/
// @version      2024-01-30
// @description  Simple plugin to skip FoodNetwork ads.
// @author       Grzegorz "Grzojda" Walewski
// @match        https://watch.foodnetwork.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=foodnetwork.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
let player;
let adVisibility;

function checkAdVisibility() {
  player = document.getElementById('player');
  adVisibility = null;
    if (document.querySelectorAll('[class^="AdsContainer"]')[0] != undefined) {
adVisibility = document.querySelectorAll('[class^="AdsContainer"]')[0].parentElement.offsetParent;
    }
  if (adVisibility !== null) {
      console.log('sa reklamy');
    var timeString = document.querySelectorAll('[class^="TimeIndicator"]')[0].textContent;
var [minutes, seconds] = timeString.split(':');
var totalSeconds = parseInt(minutes, 10) * 60 + parseInt(seconds, 10);
document.getElementById('player').currentTime += totalSeconds - 3;

  }

  setTimeout(checkAdVisibility, 5000);
}

checkAdVisibility();
})();
