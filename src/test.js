import string from "./css";

const player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector("#demo"),
    demo1: document.querySelector("#demo1"),
  },
  n: 1,
  init: () => {
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo1.innerHTML = string.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]; // pause / play /slow
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: () => {
    player.n += 1;
    if (string.length < player.n) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo1.innerHTML = string.substr(0, player.n);
    player.ui.demo.scrollTop = demo.scrollHeight;
  },
  play: () => {
    player.pause();
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};

player.init();
