// console.log("Welcome to here!");

// Initialize the Variables
let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));


let songs = [
  { songname: "Peaches- Diljit Dosanjh", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
  { songname: "Lover- Diljit Dosanjh", filePath: "songs/2.mp3", coverPath: "covers/theme2.jpg" },
  { songname: "Vibe- Diljit Dosanjh", filePath: "songs/3.mp3", coverPath: "covers/theme2.jpg" },
  { songname: "Champagne- Diljit Dosanjh", filePath: "songs/4.mp3", coverPath: "covers/theme2.jpg" },
  { songname: "Ishq Di Baajiyaan", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
  { songname: "Lemonade- Diljit Dosanjh", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
  { songname: "Vanilla- Diljit Dosanjh", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },


  { songname: "Ikk kudi- Diljit Dosanjh", filePath: "songs/8.mp3", coverPath: "covers/ikk.jpg" },
  { songname: "Big Scene- Diljit Dosanjh", filePath: "songs/9.mp3", coverPath: "covers/big.webp" },
  { songname: "5-Taara- Diljit Dosanjh", filePath: "songs/10.mp3", coverPath: "covers/5taara.jpg" },
  { songname: "Borne To Shine- Diljit Dosanjh", filePath: "songs/11.mp3", coverPath: "covers/7.jpg" },
  { songname: "Clash- Diljit Dosanjh", filePath: "songs/12.mp3", coverPath: "covers/7.jpg" },
  { songname: "Luna- Diljit Dosanjh", filePath: "songs/13.mp3", coverPath: "covers/Luna.jpg" },
  { songname: "Sher- Diljit Dosanjh", filePath: "songs/14.mp3", coverPath: "covers/cher.jpg" },
  { songname: "G O A T - Diljit Dosanjh", filePath: "songs/15.mp3", coverPath: "covers/goat.jpg" },
  { songname: "chauffeur- Diljit Dosanjh", filePath: "songs/16.mp3", coverPath: "covers/Chau.jpg" },
  { songname: "Putt Jatt Da- Diljit Dosanjh", filePath: "songs/17.mp3", coverPath: "covers/putt.jpg" },
  { songname: "Do You Know- Diljit Dosanjh", filePath: "songs/18.mp3", coverPath: "covers/do.jpeg" },
  { songname: "Patiala- Diljit Dosanjh", filePath: "songs/19.mp3", coverPath: "covers/Patiala.jpg" },
  { songname: "Muchh- Diljit Dosanjh", filePath: "songs/20.mp3", coverPath: "covers/muchh.jpg" },
  { songname: "Veer Vaar- Diljit Dosanjh", filePath: "songs/21.mp3", coverPath: "covers/veer.jpg" },
  { songname: "Raat Di Gedi- Diljit Dosanjh", filePath: "songs/22.mp3", coverPath: "covers/raat.jpg" },
  { songname: "Laembadgini- Diljit Dosanjh", filePath: "songs/23.mp3", coverPath: "covers/gini.jpg" },
  { songname: "Happy Birthday- Diljit Dosanjh", filePath: "songs/24.mp3", coverPath: "covers/happy.webp" },
  { songname: "What Ve- Diljit Dosanjh", filePath: "songs/25.mp3", coverPath: "covers/what.webp" },
  { songname: "Mashup- Diljit Dosanjh", filePath: "songs/26.mp3", coverPath: "covers/happy.webp" },
  { songname: "Koka- Diljit Dosanjh", filePath: "songs/27.mp3", coverPath: "covers/koka.jpg" },
  { songname: "Lak 28 Kudi Da-Honey & Diljit Dosanjh", filePath: "songs/28.mp3", coverPath: "covers/lak.jpeg" },
  { songname: "Sauda Khara_khara-Good News", filePath: "songs/29.mp3", coverPath: "covers/sauda.jpeg" },
  { songname: "Proper Patola-  Namaste England", filePath: "songs/30.mp3", coverPath: "covers/proper.jpeg" },

  { songname: "Hass-Hass- Diljit Dosanjh", filePath: "songs/31.mp3", coverPath: "covers/Hass-Hass.jpg" },
  { songname: "Case- Diljit Dosanjh", filePath: "songs/32.mp3", coverPath: "covers/case.jpg" },
  { songname: "Love Ya- Diljit Dosanjh", filePath: "songs/33.mp3", coverPath: "covers/love ya.jpeg" },

]


songitems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;

  }
  else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;

  }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myprogressbar.value = progress;

})

myprogressbar.addEventListener('change', () => {

  audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;

})

// new add by me
// Next song play automatic

audioElement.addEventListener('ended', () => {

  if (songindex >= 32) {
    songindex = 0
  }
  else {
    songindex += 1;
  }
  audioElement.src = `songs/${songindex + 1}.mp3`;
  mastersongname.innerText = songs[songindex].songname;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');

})

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    makeAllPlays();
    songindex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songindex + 1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');


  })
})

document.getElementById('next').addEventListener('click', () => {
  if (songindex >= 32) {
    songindex = 0
  }
  else {
    songindex += 1;
  }
  audioElement.src = `songs/${songindex + 1}.mp3`;
  mastersongname.innerText = songs[songindex].songname;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
  if (songindex <= 0) {
    songindex = 0
  }
  else {
    songindex -= 1;
  }
  audioElement.src = `songs/${songindex + 1}.mp3`;
  mastersongname.innerText = songs[songindex].songname;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})