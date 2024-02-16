import gsap from 'gsap';

const carAnim = () => {
	const windowHeight = window.innerHeight;

	const handleScroll = () => {
		if (window.scrollY + windowHeight >= 1184) {
			const toggleColors = () => {
				const carWrapper = document.querySelector('.your_awesome_traffic__car_wrapper');
				let count = 0;

				const intervalId = setInterval(() => {
					carWrapper.classList.toggle('car_headlights--yellow');
					count += 1;

					if (count === 4) {
						clearInterval(intervalId);
					}
				}, 300);
			};

			let tl = gsap.timeline();
			tl.to('.your_awesome_traffic__car_wrapper', {
				x: 600,
				duration: 1.5,
				delay: 0.3,
				onComplete: toggleColors,
			});

			window.removeEventListener('scroll', handleScroll);
		}
	};

	window.addEventListener('scroll', handleScroll);

	handleScroll();
};

export default carAnim;
