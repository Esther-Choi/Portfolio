const home = document.querySelector(".home");
const about = document.querySelector(".about");
const port = document.querySelector(".port");
const cont = document.querySelector(".cont");
let index = 0;

// 스크린 사이즈 별 메뉴 컬러
function Screen1680() {
  let current = window.scrollY;
  if (current < 311) {
    home.className = "color";
  } else {
    home.className = "home";
  }
  if (324 < current && current < 1346) {
    about.className = "color";
  } else {
    about.className = "about";
  }
  if (1346 < current && current < 2619) {
    port.className = "color";
  } else {
    port.className = "port";
  }
  if (current > 2619) {
    cont.className = "color";
  } else {
    cont.className = "cont";
  }
}

function screen1665() {
  let current = window.scrollY;
  if (current < 294) {
    home.className = "color";
  } else {
    home.className = "home";
  }
  if (294 < current && current < 1356) {
    about.className = "color";
  } else {
    about.className = "about";
  }
  if (1356 < current && current < 3123) {
    port.className = "color";
  } else {
    port.className = "port";
  }
  if (current > 3123) {
    cont.className = "color";
  } else {
    cont.className = "cont";
  }
}

function screen1439() {
  let current = window.scrollY;
  if (current < 313) {
    home.className = "color";
  } else {
    home.className = "home";
  }
  if (313 < current && current < 1974) {
    about.className = "color";
  } else {
    about.className = "about";
  }
  if (1974 < current && current < 3735) {
    port.className = "color";
  } else {
    port.className = "port";
  }
  if (current > 3735) {
    cont.className = "color";
  } else {
    cont.className = "cont";
  }
}

function screen1373() {
  let current = window.scrollY;
  if (current < 305) {
    home.className = "color";
  } else {
    home.className = "home";
  }
  if (305 < current && current < 1979) {
    about.className = "color";
  } else {
    about.className = "about";
  }
  if (1979 < current && current < 3741) {
    port.className = "color";
  } else {
    port.className = "port";
  }
  if (current > 3741) {
    cont.className = "color";
  } else {
    cont.className = "cont";
  }
}

function screen1222() {
  let current = window.scrollY;
  if (current < 298) {
    home.className = "color";
  } else {
    home.className = "home";
  }
  if (298 < current && current < 2272) {
    about.className = "color";
  } else {
    about.className = "about";
  }
  if (2272 < current && current < 4032) {
    port.className = "color";
  } else {
    port.className = "port";
  }
  if (current > 4032) {
    cont.className = "color";
  } else {
    cont.className = "cont";
  }
}

function screen1200() {
  let current = window.scrollY;
  if (current < 298) {
    home.className = "color";
  } else {
    home.className = "home";
  }
  if (298 < current && current < 2283) {
    about.className = "color";
  } else {
    about.className = "about";
  }
  if (2283 < current && current < 5543) {
    port.className = "color";
  } else {
    port.className = "port";
  }
  if (current > 5849) {
    cont.className = "color";
  } else {
    cont.className = "cont";
  }
}
5543;

function screen925() {
  let current = window.scrollY;
  if (current < 298) {
    home.className = "color";
  } else {
    home.className = "home";
  }
  if (298 < current && current < 2577) {
    about.className = "color";
  } else {
    about.className = "about";
  }
  if (2577 < current && current < 5849) {
    port.className = "color";
  } else {
    port.className = "port";
  }
  if (current > 5849) {
    cont.className = "color";
  } else {
    cont.className = "cont";
  }
}

// 스크롤 위치 별 메뉴 컬러
function getScrollPosition() {
  let current = window.innerWidth;

  if (current > 1665) {
    Screen1680();
  }
  if (1439 < current && current < 1665) {
    screen1665();
  }
  if (1373 < current && current < 1439) {
    screen1373();
  }
  if (1222 < current && current < 1373) {
    screen1222();
  }
  if (925 < current && current < 1222) {
    screen1200();
  }
  if (current < 925) {
    screen925();
  }
}

function init() {
  document.addEventListener("scroll", getScrollPosition);
  changeWord();
}
init();

function changeWord() {
  let x = document.getElementsByClassName("text");

  // x.length, 즉 이미지 개수 만큼 반복하며
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none"; // i를 인덱스로 모두 dispaly를 none으로 바꾼다.
  }

  index++; // 이미지 인덱스를 플러스 하고

  // 만약 이미지 인덱스 번호가 이미지 개수보다 크면 다시 1로 초기화(무한반복을 위해)
  if (index > x.length) {
    index = 1;
  }

  // image[0(순서대로 계속 바뀜)]의 display를 "block"으로 즉 표시 되게끔 수정
  x[index - 1].style.display = "inline";

  // x[index - 1].className = "textin";
  // 위 내용의 함수들을 10초마다 다시 호출
  setTimeout(changeWord, 4000);
}
