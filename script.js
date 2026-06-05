console.log("Let's write JavaScript");

async function getSongs() {
  let a = await fetch("http://127.0.0.1:5500/song/");
  let response = await a.text();

  console.log(response);

  let div = document.createElement("div");
  div.innerHTML = response;

  let as = div.getElementsByTagName("a");
  let songs = [];

  for (let index = 0; index < as.length; index++) {
    const element = as[index];

    if (element.href.endsWith(".mp3")) {
      songs.push(element.href);
    }
  }

  return songs;
}

async function main() {
  // Get the list of songs
  let songs = await getSongs();
  console.log(songs);

  let songUL = document.querySelector(".songlist ul");

  for (const song of songs) {
    songUL.innerHTML += song;
  }

  // Play the first song
  let audio = new Audio(songs[0]);

  // audio.play();

  audio.addEventListener("loadeddata", () => {
    let duration = audio.duration;
    console.log(duration);
    // duration is in seconds
  });
}

main();
