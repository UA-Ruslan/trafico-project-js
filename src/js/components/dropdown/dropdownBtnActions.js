import gsap from 'gsap';

const dropdownBtn = document.querySelector('.dropdown_btn');
const body = document.querySelector('body');
const header = document.querySelector('.header');

const dropdownBtnActions = () => {
	dropdownBtn.addEventListener('click', (e) => {
		const isDropdownBtnActive = body.classList.contains('body--header_on_scroll');
		if (e) {
			e.stopPropagation();
		}

		body.classList.toggle('body--header_on_scroll');
		header.classList.add('header--bg_change__grey');

		gsap.to('.dropdown_btn__first_item', {
			rotation: isDropdownBtnActive ? -45 : 0,
			duration: 0.5,
		});
		gsap.to('.dropdown_btn__second_item', {
			rotation: isDropdownBtnActive ? 45 : 0,
			duration: 0.5,
		});
	});
};

export default dropdownBtnActions;
