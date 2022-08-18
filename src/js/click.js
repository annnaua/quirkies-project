// video click

const videoEl = document.querySelector('video');
const buttonSound = document.querySelector('[data-volume-button]');
const buttonSoundIcon = document.querySelector('.button-sound__icon');

buttonSound.addEventListener('click', () => {
	videoEl.muted = !videoEl.muted;
	videoEl.volume = 0.1;

	buttonSoundIcon.classList.toggle('sound');
});

// roadmap click

const roadmapCard = document.querySelectorAll('.roadmap-card');

for (const card of roadmapCard) {
	card.addEventListener('click', function () {
		card.classList.toggle('open');
	});
}
