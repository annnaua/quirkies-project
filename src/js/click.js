// video click

const videoEl = document.querySelector('video');
const buttonSound = document.querySelector('[data-sound-button]');

buttonSound.addEventListener('click', () => {
	videoEl.muted = !videoEl.muted;
	videoEl.volume = 0.1;

	buttonSound.classList.toggle('sound');
});

const faqsCardHeaders = document.querySelectorAll('.faqs-card__header');

faqsCardHeaders.forEach((faqsCardHeader) => {
	faqsCardHeader.addEventListener('click', () => {
		faqsCardHeader.classList.toggle('open');

		const faqsCardBody = faqsCardHeader.nextElementSibling;

		if (faqsCardHeader.classList.contains('open')) {
			faqsCardBody.style.maxHeight = faqsCardBody.scrollHeight + 'px';
		} else {
			faqsCardBody.style.maxHeight = 0;
		}
	});
});
