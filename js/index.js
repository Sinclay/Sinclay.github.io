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

function checkClick() {
  document.getElementById('bonusDuck').checked = false;
  document.getElementById('duck1').checked = false;
  document.getElementById('duck2').checked = false;
  document.getElementById('duck3').checked = false;
  document.getElementById('duck4').checked = false;
  document.getElementById('duck5').checked = false;
  document.getElementById('duck6').checked = false;
  document.getElementById('duck7').checked = false;
  document.getElementById('duck8').checked = false;
  document.getElementById('duck9').checked = false;
  document.getElementById('duck10').checked = false;
  document.getElementById('duck11').checked = false;
  document.getElementById('duck12').checked = false;
  document.getElementById('duck13').checked = false;
  document.getElementById('duck14').checked = false;
  document.getElementById('duck15').checked = false;
}
