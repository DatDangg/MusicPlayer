const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const PLAYER_STORAGE_KEY = "Dat";

const songImg = $(".song-title__img");
const songName = $(".song-name");
const songAuthor = $(".song-author");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const volumeCtrl = $("#volume");
const volumeBtnCtrl = $(".btn-volume .fas");
const progress = $("#progress");
const option = $(".options-content");
const optionClose = $(".option-close");
const optionOpen = $(".option-open");
const optionSide = $(".options");
const recent = $(".recent-songs__content");
const search = $("#search");
const sort = $(".option-footer__sort");
const overlay = $(".overlay");
const link = $("link[rel~='icon']");
const main = $(".main-content");
const control = $(".control");
const body = $("body");

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  randomList: [],
  listRecentSong: [],
  currentVolume: 1,
  isSort: false,
  config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
  songs: [
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (1).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (2).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (3).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (4).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (5).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (6).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (7).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (8).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (9).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (10).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (11).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (12).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (13).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (14).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (15).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (16).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (17).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (18).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (19).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (20).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (21).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (22).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (23).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (24).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (25).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (26).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (27).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (28).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (29).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (30).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (31).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (32).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (33).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (34).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (35).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (36).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (37).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (38).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (39).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (40).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (41).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (42).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (43).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (44).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (45).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (46).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (47).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (48).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (49).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (50).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (51).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (52).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (53).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (54).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (55).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (56).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (57).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (58).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (59).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (60).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (61).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (62).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (63).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (64).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (65).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (66).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (67).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (68).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (69).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (70).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (71).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (72).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (73).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (74).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (75).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (76).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (77).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (78).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (79).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (80).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (81).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (82).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (83).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (84).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (85).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (86).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (87).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (88).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (89).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (90).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (91).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (92).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (93).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (94).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (95).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (96).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (97).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (98).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (99).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (100).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (101).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (102).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (103).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (104).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (105).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (106).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (107).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (108).mp3", image: "./assets/img/ThanhHoa.jpg" },
  { name: "Thanh Hoa", singer: "Thanh Hoa", path: "./assets/songs/ThanhHoa (109).mp3", image: "./assets/img/ThanhHoa.jpg" },
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  searchSong: function (keyword) {
    const lowerKeyword = keyword.toLowerCase();
    const list = this.songs
      .map((song, index) => ({ ...song, originalIndex: index }))
      .filter(
        (song) =>
          song.name.toLowerCase().includes(lowerKeyword) ||
          song.singer.toLowerCase().includes(lowerKeyword)
      );

    const _list = list.map((song) => {
      return `
                  <div class="option ${
                    song.originalIndex === this.currentIndex ? "active" : ""
                  }" data-index="${song.originalIndex}">
                    <div class="option__img" style="background-image: url('${
                      song.image
                    }');"></div>
                    <div class="option__desc">
                      <div class="option-name">${song.name}</div>
                      <div class="option-author">${song.singer}</div>
                    </div>
                  </div>
                `;
    });
    option.innerHTML = _list.join("\n");
  },
  sortSong: function (isSort) {
    if (!isSort) {
      songs = this.songs.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      songs = this.songs.sort((b, a) => a.name.localeCompare(b.name));
    }

    const list = songs.map((song, index) => {
      return `
                <div class="option ${
                  index === this.currentIndex ? "active" : ""
                }" data-index="${index}">
                    <div class="option__img" style="background-image: url('${
                      song.image
                    }');"></div>
                    <div class="option__desc">
                        <div class="option-name">${song.name}</div>
                        <div class="option-author">${song.singer}</div>
                    </div>
                </div>
            `;
    });
    option.innerHTML = list.join("\n");
  },
  renderListSong: function () {
    const list = this.songs.map((song, index) => {
      return `
                <div class="option ${
                  index === this.currentIndex ? "active" : ""
                }" data-index="${index}">
                    <div class="option__img" style="background-image: url('${
                      song.image
                    }');"></div>
                    <div class="option__desc">
                        <div class="option-name">${song.name}</div>
                        <div class="option-author">${song.singer}</div>
                    </div>
                </div>
            `;
    });
    option.innerHTML = list.join("\n");
  },
  renderRecentSong: function () {
    const recentList = this.listRecentSong.slice(-3).map((recentSong) => {
      return `
                <div class="recent-song" data-index="${recentSong.index}">
                    <div class="recent-song__name">${recentSong.song.name}</div>
                    <div class="recent-song__author">
                        <span>From: </span>${recentSong.song.singer}
                    </div>
                </div>
            `;
    });
    recent.innerHTML = recentList.join("\n");
  },

  handleEvent: function () {
    const _this = this;

    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    audio.onplay = function () {
      _this.isPlaying = true;
      playBtn.classList.add("playing");
    };

    audio.onpause = function () {
      _this.isPlaying = false;
      playBtn.classList.remove("playing");
    };

    audio.ontimeupdate = function () {
      if (audio.duration) {
        const currProgress = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = currProgress;
      }

      let minute = Math.floor(audio.currentTime / 60);
      let second = Math.floor(audio.currentTime % 60);
      $("#time-count").textContent = `${minute < 10 ? `0${minute}` : minute}:${
        second < 10 ? `0${second}` : second
      }`;
    };

    progress.oninput = function (e) {
      audio.currentTime = (e.target.value / 100) * audio.duration;
    };

    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.randomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.renderListSong();
    };

    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.randomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.renderListSong();
    };

    randomBtn.onclick = function () {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };

    repeatBtn.onclick = function () {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };

    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    option.onclick = function (e) {
      optionSide.classList.add("hidden");
      overlay.classList.add("hidden");
      const songNode = e.target.closest(".option:not(.active)");
      if (songNode) {
        _this.currentIndex = Number(songNode.dataset.index);
        _this.loadCurrentSong();
        _this.renderListSong();
        audio.play();
      }
    };

    recent.onclick = function (e) {
      const recentSong = e.target.closest(".recent-song");
      if (recentSong) {
        _this.currentIndex = Number(recentSong.dataset.index);
        _this.loadCurrentSong();

        audio.play();
      }
    };

    volumeCtrl.oninput = function (e) {
      audio.volume = volumeCtrl.value;
      _this.currentVolume = volumeCtrl.value;
      if (volumeCtrl.value == 0) {
        volumeBtnCtrl.classList.add("fa-volume-mute");
        volumeBtnCtrl.classList.remove("fa-volume-up");
      }
      _this.setConfig("currentVolume", _this.currentVolume);
    };

    volumeBtnCtrl.onclick = function (e) {
      if (e.target === volumeCtrl) return;
      if (volumeBtnCtrl.classList.contains("fa-volume-up")) {
        volumeBtnCtrl.classList.add("fa-volume-mute");
        volumeBtnCtrl.classList.remove("fa-volume-up");
        audio.muted = !audio.muted;
        volumeCtrl.value = 0;
      } else {
        volumeBtnCtrl.classList.remove("fa-volume-mute");
        volumeBtnCtrl.classList.add("fa-volume-up");
        volumeCtrl.value = _this.currentVolume;
        audio.muted = !audio.muted;
      }
    };

    optionOpen.onclick = function () {
      optionSide.classList.remove("hidden");
      overlay.classList.remove("hidden");
    };

    optionClose.onclick = function () {
      optionSide.classList.add("hidden");
      overlay.classList.add("hidden");
    };

    search.oninput = function (e) {
      const keyword = search.value.trim();
      _this.searchSong(keyword);
    };

    sort.onclick = function () {
      _this.isSort = !_this.isSort;
      sort.classList.toggle("sort", _this.isSort);
      _this.sortSong(_this.isSort);
    };
  },
  defineProperty: function () {
    Object.defineProperty(this, "currentSong", {
      get() {
        return this.songs[this.currentIndex];
      },
    });
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom || false;
    this.isRepeat = this.config.isRepeat || false;
    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
    this.currentIndex = this.config.currentIndex || 0;
    this.currentVolume = this.config.currentVolume || 1;
  },
  loadCurrentSong: function () {
    document.title = this.currentSong.name;
    link.href = this.currentSong.image;
    songImg.style.backgroundImage = `url('${this.currentSong.image}')`;
    songName.textContent = this.currentSong.name;
    songAuthor.textContent = this.currentSong.singer;
    this.setConfig("currentIndex", this.currentIndex);
    audio.src = this.currentSong.path;
    audio.addEventListener("loadedmetadata", function () {
      let totalMinute = Math.floor(audio.duration / 60);
      let totalSecond = Math.floor(audio.duration % 60);
      $("#time-total").textContent = `${
        totalMinute < 10 ? `0${totalMinute}` : totalMinute
      }:${totalSecond < 10 ? `0${totalSecond}` : totalSecond}`;
    });
    audio.volume = this.currentVolume;
    volumeCtrl.value = this.currentVolume;
    this.pushRecentSong(this.currentIndex);
    this.renderRecentSong();

    let x = screen.height - 80 - control.clientHeight;
    if (main.clientHeight > x) main.style.height = x + "px";
    body.style.height = screen.height + "px";
    console.log(x);
  },
  pushRecentSong: function (value) {
    this.listRecentSong = this.listRecentSong.filter(
      (item) => item.index !== value
    );
    this.listRecentSong.push({ song: this.songs[value], index: value });
  },

  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  randomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (
      newIndex === this.currentIndex ||
      this.randomList.includes(newIndex)
    );
    if (this.randomList.length == this.songs.length - 1) {
      this.randomList = [];
      this.randomList.push(newIndex);
    } else this.randomList.push(newIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {
    this.loadConfig();
    this.defineProperty();
    this.loadCurrentSong();
    this.renderListSong();
    this.handleEvent();
  },
};

app.start();
