/* eslint no-param-reassign: 2 */

import { onWindowResize } from '../utils/index';

const Accordion = ({ triggers, activeStateName }) => {
	const CLASSNAMES = {
		defaultActiveState: 'accordion__item--active-mod',
	};

	let $allTriggers = triggers || null;
	let enabled = true;

	const isEnabled = () => enabled;

	const onResize = () => {
		if (isEnabled()) {
			$allTriggers.forEach(($item) => {
				const $parentEl = $item.parentNode;

				if ($parentEl.classList.contains(activeStateName)) {
					const $nextElementSibling = $item.nextElementSibling;
					$nextElementSibling.style.maxHeight = `${$nextElementSibling.scrollHeight}px`;
				}
			});
		}
	};

	const closeAccordion = ($parentEl, $nextElementSibling) => {
		$parentEl.classList.remove(activeStateName);
		$nextElementSibling.style.maxHeight = null;
	};

	const closeAllAccordion = () => {
		$allTriggers.forEach(($item) => {
			closeAccordion($item.parentNode, $item.nextElementSibling);
		});
	};

	const openAccordion = ($parentEl, $nextElementSibling) => {
		setTimeout(() => {
			closeAllAccordion();

			$parentEl.classList.add(activeStateName);
			$nextElementSibling.style.maxHeight = `${$nextElementSibling.scrollHeight}px`;
		}, 100);
	};

	const toggleActiveState = ($trigger) => {
		if (enabled) {
			if (!$trigger) return;

			const $parentEl = $trigger.parentNode;
			const $nextElementSibling = $trigger.nextElementSibling;

			if ($parentEl.classList.contains(activeStateName)) {
				closeAccordion($parentEl, $nextElementSibling);
			} else {
				openAccordion($parentEl, $nextElementSibling);
			}
		}
	};

	if ($allTriggers) {
		onWindowResize(onResize);
		$allTriggers.forEach(($item) => {
			const $parentEl = $item.parentNode;

			if ($parentEl.classList.contains(activeStateName) && isEnabled()) {
				const $nextElementSibling = $item.nextElementSibling;

				openAccordion($parentEl, $nextElementSibling);
			}

			$item.addEventListener('click', () => {
				toggleActiveState($item);
			});
		});
	}
};

export default Accordion;

// ------------ how init
// copy past this

// import this and if u need fix path
// import Accordion from './components/accordion';

// add it in loadFunc
// const accordion = Accordion({
// 	triggers: document.querySelectorAll('.accordion__item_head'),
// 	activeStateName: 'accordion__item--active-mod',
// });
