import gsap from 'gsap';

const body = document.body;
const header = document.querySelector('.header');

export const handleScroll = () => {
	const scrollSize = window.scrollY;

	if (scrollSize > 50) {
		gsap.to('.dropdown_btn__first_item', {
			rotation: 0,
			duration: 0.5,
		});
		gsap.to('.dropdown_btn__second_item', {
			rotation: 0,
			duration: 0.5,
		});

		body.classList.add('body--header_on_scroll', 'body--dropdown_btn__visible');
		header.classList.remove('header--bg_change__grey');
	} else {
		body.classList.remove('body--header_on_scroll', 'body--dropdown_btn__visible');
	}

	return scrollSize;
};

const headerActions = () => {
	const headerContainer = document.querySelector('.header_container');

	body.addEventListener('click', () => {
		body.classList.add('body--header_on_scroll');
		gsap.to('.dropdown_btn__first_item', {
			rotation: 0,
			duration: 0.5,
		});
		gsap.to('.dropdown_btn__second_item', {
			rotation: 0,
			duration: 0.5,
		});
	});
	headerContainer.addEventListener('click', (e) => {
		e.stopPropagation();
	});

	window.addEventListener('scroll', handleScroll);

	handleScroll();
};

export default headerActions;
