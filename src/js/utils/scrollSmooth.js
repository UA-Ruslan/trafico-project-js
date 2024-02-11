import LocomotiveScroll from 'locomotive-scroll';

let locomotiveScroll;

export default () => {
	if (!locomotiveScroll) {
		locomotiveScroll = new LocomotiveScroll({
			el: document.querySelector('.main_container'),
			smooth: true,
		});
	}
};
