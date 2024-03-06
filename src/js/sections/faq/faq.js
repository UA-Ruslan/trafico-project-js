import { faqData } from '../../../static/faqData';

const onFaqBtnClick = (data, startIndex, endIndex) => {
	return data.slice(startIndex, endIndex);
};

const faqActions = () => {
	const faqLeftList = document.querySelector('.faq__left_list');
	const faqRightList = document.querySelector('.faq__right_list');
	const faqMoreBtn = document.querySelector('.faq__load_more_btn');
	const faqCloseBtn = document.querySelector('.faq__close_btn');
	const itemsPerPage = 10;
	let startIndex = 0;
	let endIndex = itemsPerPage;
	let currentActiveItem = null;

	const renderFaqItems = (data) => {
		data.forEach((faqItem, index) => {
			const listItem = document.createElement('li');
			const listQuestionWrapper = document.createElement('div');
			const listQuestionContent = document.createElement('div');
			const listQuestionTextWrapper = document.createElement('div');
			const listQuestionText = document.createElement('p');
			const listAnswerContent = document.createElement('div');
			const listAnswerText = document.createElement('p');

			listQuestionWrapper.classList.add('faq__question_wrapper');
			listQuestionContent.classList.add('faq__question_content');
			listQuestionTextWrapper.classList.add('faq__question_text_wrapper');
			listQuestionText.classList.add('faq__question_text');
			listAnswerContent.classList.add('faq__answer_content');
			listAnswerText.classList.add('faq__answer_text');

			listItem.appendChild(listQuestionWrapper);
			listItem.appendChild(listAnswerContent);
			listAnswerContent.appendChild(listAnswerText);
			listAnswerText.textContent = faqItem.answer;
			listQuestionWrapper.appendChild(listQuestionContent);
			listQuestionContent.appendChild(listQuestionTextWrapper);
			listQuestionTextWrapper.appendChild(listQuestionText);
			listQuestionText.textContent = faqItem.question;

			if (index % 2 === 0) {
				listItem.classList.add('faq__list_item', 'faq__left_list_item');
				faqLeftList.appendChild(listItem);
			} else {
				listItem.classList.add('faq__list_item', 'faq__right_list_item');
				faqRightList.appendChild(listItem);
			}

			listQuestionWrapper.addEventListener('click', (e) => {
				e.stopPropagation();

				if (currentActiveItem && currentActiveItem !== listItem) {
					currentActiveItem.classList.remove('faq__list_item--active');
				}

				listItem.classList.toggle('faq__list_item--active');

				currentActiveItem = listItem;
			});

			listItem.addEventListener('click', (e) => {
				e.stopPropagation();
			});
			document.addEventListener('click', () => {
				listItem.classList.remove('faq__list_item--active');
			});

			window.addEventListener('resize', () => {
				const TextWrapperHeight = listQuestionTextWrapper.getBoundingClientRect().height;
				const scrollHeight = listQuestionTextWrapper.scrollHeight;

				if (TextWrapperHeight < scrollHeight) {
					listQuestionTextWrapper.style.alignItems = 'flex-start';
				}
			});
		});
	};

	const loadMoreItems = () => {
		const sliceFaqItems = onFaqBtnClick(faqData, startIndex, endIndex);
		renderFaqItems(sliceFaqItems);

		if (startIndex > 0) {
			faqCloseBtn.disabled = false;
		}

		startIndex += itemsPerPage;
		endIndex += itemsPerPage;

		if (startIndex >= faqData.length) {
			faqMoreBtn.disabled = true;
		}
	};

	const closeItems = () => {
		faqLeftList.innerHTML = '';
		faqRightList.innerHTML = '';

		const sliceFaqItems = onFaqBtnClick(faqData, 0, itemsPerPage);
		renderFaqItems(sliceFaqItems);

		startIndex = itemsPerPage;
		endIndex = startIndex + itemsPerPage;
		faqCloseBtn.disabled = true;
		if (startIndex < faqData.length) {
			faqMoreBtn.disabled = false;
		}
	};

	loadMoreItems();

	faqMoreBtn.addEventListener('click', () => loadMoreItems());
	faqCloseBtn.addEventListener('click', () => closeItems());
};

export default faqActions;
