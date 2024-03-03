import gsap from 'gsap';

const logoAnim = () => {
	const logoSelectors = ['.logo', '.logo__mob_wrapper', '.form__logo_wrapper'];
	const animDuration = 0.25;
	let tlSmallRectangle = gsap.timeline();
	let tlLargeRectangle = gsap.timeline();

	const createSmallRectangleTimeline = () => {
		return gsap
			.timeline()
			.to('.logo__small_rectangle', {
				rotation: 180,
				scale: 2,
				duration: animDuration,
				xPercent: 50,
				yPercent: 50,
				fill: '#ee4d47',
			})
			.to('.logo__small_rectangle', {
				rotation: 0,
				scale: 1,
				duration: animDuration,
				xPercent: 0,
				yPercent: 0,
				fill: '#ffffff',
			})
			.to('.logo__small_rectangle', {
				rotation: -180,
				scale: 2,
				duration: animDuration,
				xPercent: 50,
				yPercent: 50,
				fill: '#ee4d47',
			})
			.to('.logo__small_rectangle', {
				rotation: 0,
				scale: 1,
				duration: animDuration,
				xPercent: 0,
				yPercent: 0,
				fill: '#ffffff',
			});
	};

	const createLargeRectangleTimeline = () => {
		return gsap
			.timeline()
			.to('.logo__large_rectangle', {
				rotation: 180,
				scale: 0.5,
				duration: animDuration,
				xPercent: -50,
				yPercent: -50,
				fill: '#ee4d47',
			})
			.to('.logo__large_rectangle', {
				rotation: 0,
				scale: 1,
				duration: animDuration,
				xPercent: 0,
				yPercent: 0,
				fill: '#ffffff',
			})
			.to('.logo__large_rectangle', {
				rotation: -180,
				scale: 0.5,
				duration: animDuration,
				xPercent: -50,
				yPercent: -50,
				fill: '#ee4d47',
			})
			.to('.logo__large_rectangle', {
				rotation: 0,
				scale: 1,
				duration: animDuration,
				xPercent: 0,
				yPercent: 0,
				fill: '#ffffff',
			});
	};

	const addListeners = (selector) => {
		const logoElement = document.querySelector(selector);
		logoElement.addEventListener('mouseenter', () => {
			tlSmallRectangle = createSmallRectangleTimeline(selector);
			tlLargeRectangle = createLargeRectangleTimeline(selector);
		});

		logoElement.addEventListener('mouseleave', () => {
			tlSmallRectangle.reverse();
			tlLargeRectangle.reverse();
		});
	};

	logoSelectors.forEach(addListeners);
};

export default logoAnim;
