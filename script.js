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
