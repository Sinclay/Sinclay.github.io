function soundClickDuck() {
  var audio = new Audio();
  audio.src = 'audio/quac.mp3';
  audio.volume = 0.2;
  audio.autoplay = true;
}

function soundClickButton() {
  var audio = new Audio();
  audio.src = 'audio/knopka.mp3';
  audio.volume = 0.2;
  audio.autoplay = true;
}

function soundClickBody() {
  var audio = new Audio();
  audio.src = 'audio/shoot.mp3';
  audio.volume = 0.1;
  audio.autoplay = true;
}

function onloadClap() {
  var audio = new Audio();
  audio.src = 'audio/clap.mp3';
  audio.volume = 0.1;
  audio.autoplay = true;
}
