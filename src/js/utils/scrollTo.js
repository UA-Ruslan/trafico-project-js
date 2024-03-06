import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();
const links = document.querySelectorAll('.navbar_list__link');
const awesomeTrafficBtn = document.querySelector('.awesome_traffic__btn');
const navbarBtn = document.querySelector('.navbar_btn');

export default function scrollTo(params) {
	locomotiveScroll.scrollTo(params);
}

links.forEach((link) => {
	link.addEventListener('click', (event) => {
		event.preventDefault();
		const targetId = link.getAttribute('href').substring(1);
		const targetElement = document.getElementById(targetId);
		scrollTo(targetElement);
	});
});

awesomeTrafficBtn.addEventListener('click', () => {
	const targetElement = document.getElementById('form-section');
	scrollTo(targetElement);
});

navbarBtn.addEventListener('click', () => {
	const targetElement = document.getElementById('form-section');
	scrollTo(targetElement);
});
