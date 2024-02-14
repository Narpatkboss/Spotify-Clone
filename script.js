// console.log("Welcome to here!");

// Initialize the Variables
let songindex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));


let songs = [
  { songname: "Peaches- Diljit Dosanjh", filePath: "1.mp3", coverPath: "1.jpg" },
  { songname: "Lover- Diljit Dosanjh", filePath: "2.mp3", coverPath: "theme2.jpg" },
  { songname: "Vibe- Diljit Dosanjh", filePath: "3.mp3", coverPath: "theme2.jpg" },
  { songname: "Champagne- Diljit Dosanjh", filePath: "4.mp3", coverPath: "theme2.jpg" },
  { songname: "Ishq Di Baajiyaan", filePath: "5.mp3", coverPath: "5.jpg" },
  { songname: "Lemonade- Diljit Dosanjh", filePath: "6.mp3", coverPath: "6.jpg" },
  { songname: "Vanilla- Diljit Dosanjh", filePath: "7.mp3", coverPath: "7.jpg" },
  { songname: "Ikk kudi- Diljit Dosanjh", filePath: "8.mp3", coverPath: "ikk.jpg" },
  { songname: "Big Scene- Diljit Dosanjh", filePath: "9.mp3", coverPath: "big.webp" },
  { songname: "5-Taara- Diljit Dosanjh", filePath: "10.mp3", coverPath: "5taara.jpg" },
  { songname: "Borne To Shine- Diljit Dosanjh", filePath: "11.mp3", coverPath: "7.jpg" },
  { songname: "Clash- Diljit Dosanjh", filePath: "12.mp3", coverPath: "7.jpg" },
  { songname: "Luna- Diljit Dosanjh", filePath: "13.mp3", coverPath: "Luna.jpg" },
  { songname: "Sher- Diljit Dosanjh", filePath: "14.mp3", coverPath: "cher.jpg" },
  { songname: "G O A T - Diljit Dosanjh", filePath: "15.mp3", coverPath: "goat.jpg" },
  { songname: "chauffeur- Diljit Dosanjh", filePath: "16.mp3", coverPath: "Chau.jpg" },
  { songname: "Putt Jatt Da- Diljit Dosanjh", filePath: "17.mp3", coverPath: "putt.jpg" },
  { songname: "Do You Know- Diljit Dosanjh", filePath: "18.mp3", coverPath: "do.jpeg" },
  { songname: "Patiala- Diljit Dosanjh", filePath: "19.mp3", coverPath: "Patiala.jpg" },
  { songname: "Muchh- Diljit Dosanjh", filePath: "20.mp3", coverPath: "muchh.jpg" },
  { songname: "Veer Vaar- Diljit Dosanjh", filePath: "21.mp3", coverPath: "veer.jpg" },
  { songname: "Raat Di Gedi- Diljit Dosanjh", filePath: "22.mp3", coverPath: "raat.jpg" },
  { songname: "Laembadgini- Diljit Dosanjh", filePath: "23.mp3", coverPath: "gini.jpg" },
  { songname: "Happy Birthday- Diljit Dosanjh", filePath: "24.mp3", coverPath: "happy.webp" },
  { songname: "What Ve- Diljit Dosanjh", filePath: "25.mp3", coverPath: "what.webp" },
  { songname: "Mashup- Diljit Dosanjh", filePath: "26.mp3", coverPath: "happy.webp" },
  { songname: "Koka- Diljit Dosanjh", filePath: "27.mp3", coverPath: "koka.jpg" },
  { songname: "Lak 28 Kudi Da-Honey & Diljit Dosanjh", filePath: "28.mp3", coverPath: "lak.jpeg" },
  { songname: "Sauda Khara_khara-Good News", filePath: "29.mp3", coverPath: "sauda.jpeg" },
  { songname: "Proper Patola-  Namaste England", filePath: "30.mp3", coverPath: "proper.jpeg" },
  { songname: "Hass-Hass- Diljit Dosanjh", filePath: "31.mp3", coverPath: "Hass-Hass.jpg" },
  { songname: "Case- Diljit Dosanjh", filePath: "32.mp3", coverPath: "case.jpg" },
  { songname: "Love Ya- Diljit Dosanjh", filePath: "33.mp3", coverPath: "love ya.jpeg" },

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
