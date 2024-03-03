export const formBgAnim = () => {
	const line = document.querySelector('.form__bg_line');
	let viewportHeight;

	window.addEventListener('scroll', () => {
		viewportHeight = window.innerHeight;
		const lineProps = line.getBoundingClientRect();
		const linePosition = lineProps.y - viewportHeight + lineProps.height;
		let percents;
		let result;
		if (linePosition > 0) {
			percents = 0;
			result = 2500;
		} else if (linePosition <= 0 && linePosition >= -210) {
			percents = linePosition / -2.1;
			result = 2500 - 2500 * (percents / 100);
		} else if (linePosition < -210) {
			percents = 100;
			result = 0;
		}

		line.style.strokeDashoffset = result;
	});
};

export const formValidation = () => {
	const formBtn = document.querySelector('.form__btn');

	formBtn.addEventListener('click', (e) => {
		e.preventDefault();
	});
};
