console.log("Let's write JavaScript");

let currentSong = new Audio();
let play = document.getElementById("play");

async function getSongs() {
  let a = await fetch("http://127.0.0.1:5500/songs/");
  let response = await a.text();

  let div = document.createElement("div");
  div.innerHTML = response;

  let as = div.getElementsByTagName("a");
  let songs = [];

  for (let index = 0; index < as.length; index++) {
    const element = as[index];

    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/songs/")[1]);
    }
  }

  return songs;
}

const playMusic = (track) => {
  currentSong.src = "/songs/" + track;
  currentSong.play();
  play.src = "pause.svg";
};

async function main() {
  // Get the list of songs
  let songs = await getSongs();
  console.log(songs);

  let songUL = document.querySelector(".songlist ul");

  for (const song of songs) {
    songUL.innerHTML += `
      <li data-track="${song}">
        <img class="invert" src="music.svg" alt="">
        
        <div class="info">
          <div>${song.replaceAll("%20", " ")}</div>
          <div>Anant</div>
        </div>

        <div class="playnow">
          <span>Play now</span>
          <img class="invert" src="play.svg" alt="">
        </div>
      </li>`;
  }

  // Attach click event to each song
  Array.from(songUL.getElementsByTagName("li")).forEach((e) => {
    e.addEventListener("click", () => {
      playMusic(e.dataset.track);
    });
  });

  // Play/Pause button
  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "pause.svg";
    } else {
      currentSong.pause();
      play.src = "play.svg";
    }
  });
}

main();
