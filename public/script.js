// Songs list (replace with your songs inside /public/songs folder)
const songs = [
  { title: "One Of The Girls", file: "one_of_the_girls.mp3" },
  { title: "Under The Influence", file: "under_the_influence.mp3" },
  { title: "Timeless", file: "timeless.mp3" },
  { title: "Too Many Nights", file: "too_many_nights.mp3" },
];

let currentSongIndex = 0;
let audio = new Audio(`/songs/${songs[currentSongIndex].file}`);

// Play/Pause buttons
const playButtons = document.querySelectorAll(".pause");
const backButtons = document.querySelectorAll(".back");
const forwardButtons = document.querySelectorAll(".forw");

// Attach events
playButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      btn.classList.remove("fa-pause");
      btn.classList.add("fa-play");
    } else {
      audio.pause();
      btn.classList.remove("fa-play");
      btn.classList.add("fa-pause");
    }
  });
});

backButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audio.src = `/songs/${songs[currentSongIndex].file}`;
    audio.play();
  });
});

forwardButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = `/songs/${songs[currentSongIndex].file}`;
    audio.play();
  });
});
