import gsap from 'gsap';

const logoAnim = () => {
	const logo = document.querySelector('.logo_wrapper');
	const animDuration = 0.25;
	let tlSmallRectangle = gsap.timeline();
	let tlLargeRectangle = gsap.timeline();

	const createSmallRectangleTimeline = () => {
		return gsap
			.timeline()
			.to('.small_logo_rectangle', {
				rotation: 180,
				scale: 2,
				duration: animDuration,
				xPercent: 50,
				yPercent: 50,
			})
			.to('.small_logo_rectangle', {
				rotation: 0,
				scale: 1,
				duration: animDuration,
				xPercent: 0,
				yPercent: 0,
			})
			.to('.small_logo_rectangle', {
				rotation: -180,
				scale: 2,
				duration: animDuration,
				xPercent: 50,
				yPercent: 50,
			})
			.to('.small_logo_rectangle', {
				rotation: 0,
				scale: 1,
				duration: animDuration,
				xPercent: 0,
				yPercent: 0,
			});
	};

	const createLargeRectangleTimeline = () => {
		return gsap
			.timeline()
			.to('.large_logo_rectangle', {
				rotation: 180,
				scale: 0.5,
				duration: animDuration,
				xPercent: -50,
				yPercent: -50,
			})
			.to('.large_logo_rectangle', {
				rotation: 0,
				scale: 1,
				duration: animDuration,
				xPercent: 0,
				yPercent: 0,
			})
			.to('.large_logo_rectangle', {
				rotation: -180,
				scale: 0.5,
				duration: animDuration,
				xPercent: -50,
				yPercent: -50,
			})
			.to('.large_logo_rectangle', {
				rotation: 0,
				scale: 1,
				duration: animDuration,
				xPercent: 0,
				yPercent: 0,
			});
	};

	logo.addEventListener('mouseenter', () => {
		tlSmallRectangle = createSmallRectangleTimeline();
		tlLargeRectangle = createLargeRectangleTimeline();
	});

	logo.addEventListener('mouseleave', () => {
		tlSmallRectangle.reverse();
		tlLargeRectangle.reverse();
	});
};

export default logoAnim;
