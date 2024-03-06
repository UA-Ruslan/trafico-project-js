import gsap from 'gsap';

let windowWidth = window.innerWidth;
let scrolledValue = window.scrollY;
let intervalDisableBtn;
const dropdownBtn = document.querySelector('.dropdown_btn');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const headerContainer = document.querySelector('.header_content');
const navbarLinks = document.querySelectorAll('.navbar_list__link');
const navbarBtn = document.querySelector('.navbar_btn');
const isDropdownBtnActive = body.classList.contains('body--header__hidden');

const onWindowScroll = () => {
	if (windowWidth <= 1024) {
		body.classList.remove('body--header__hidden', 'body--dropdown_btn__visible');
	} else {
		window.addEventListener('scroll', () => {
			scrolledValue = window.scrollY;
			clearTimeout(intervalDisableBtn);
			dropdownBtn.disabled = true;

			intervalDisableBtn = setTimeout(() => {
				dropdownBtn.disabled = false;
			}, 100);

			if (scrolledValue > 50 && windowWidth > 1024) {
				body.classList.add('body--header__hidden', 'body--dropdown_btn__visible');

				gsap.to('.dropdown_btn__first_item', {
					rotation: 0,
					duration: 0.5,
				});
				gsap.to('.dropdown_btn__second_item', {
					rotation: 0,
					duration: 0.5,
				});
			} else {
				body.classList.remove('body--header__hidden', 'body--dropdown_btn__visible');
				header.classList.remove('header--bg__brown');
			}
		});
	}
};

onWindowScroll();

const headerDropdownBtnActions = () => {
	body.classList.add('body--header__hidden');
	const isDropdownBtnActive = body.classList.contains('body--mob_dropdown_active');

	gsap.to('.dropdown_btn__first_item', {
		rotation: isDropdownBtnActive ? -45 : 0,
		duration: 0.5,
	});
	gsap.to('.dropdown_btn__second_item', {
		rotation: isDropdownBtnActive ? 45 : 0,
		duration: 0.5,
	});
};

const onWindowResize = () => {
	window.addEventListener('resize', () => {
		body.classList.remove('body--mob_dropdown_active');
		onWindowScroll();
		headerDropdownBtnActions();
		windowWidth = window.innerWidth;

		if (windowWidth > 1024 && scrolledValue > 50) {
			body.classList.add('body--dropdown_btn__visible');
		} else if (windowWidth > 1024 && scrolledValue <= 50) {
			body.classList.remove('body--dropdown_btn__visible', 'body--header__hidden');
		}
	});
};

const dropdownActions = () => {
	body.addEventListener('click', () => {
		body.classList.add('body--header__hidden');
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

	const btnAnim = (isDropdownBtnActive) => {
		gsap.to('.dropdown_btn__first_item', {
			rotation: isDropdownBtnActive ? -45 : 0,
			duration: 0.5,
		});
		gsap.to('.dropdown_btn__second_item', {
			rotation: isDropdownBtnActive ? 45 : 0,
			duration: 0.5,
		});
	};
	if (windowWidth <= 1024) {
		navbarLinks.forEach((link) => {
			link.addEventListener('click', (e) => {
				body.classList.remove('body--mob_dropdown_active');
				body.classList.add('body--header__hidden');

				btnAnim(isDropdownBtnActive);
			});
		});

		navbarBtn.addEventListener('click', () => {
			body.classList.remove('body--mob_dropdown_active');
			body.classList.add('body--header__hidden');

			btnAnim(isDropdownBtnActive);
		});
	}

	dropdownBtn.addEventListener('click', (e) => {
		if (e) {
			e.stopPropagation();
		}

		if (windowWidth > 1024) {
			const isDropdownBtnActive = body.classList.contains('body--header__hidden');

			body.classList.toggle('body--header__hidden');
			header.classList.add('header--bg__brown');

			btnAnim(isDropdownBtnActive);
		} else {
			body.classList.toggle('body--mob_dropdown_active');

			headerDropdownBtnActions();
		}
	});
};

export { dropdownActions, onWindowScroll, onWindowResize };
