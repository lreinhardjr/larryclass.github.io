
function turnOnSound () {
	sound.style.backgroundcolor = 'red';
}

const sound = document.getElementById('sound');
console.log(sound);




sound.addEventListener('click', function turnOnSound() {
  sound.style.backgroundColor = 'salmon';
});