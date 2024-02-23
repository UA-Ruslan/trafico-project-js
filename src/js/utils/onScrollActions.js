const createDynamicProps = (property, startEndValues, optionFn) => {
	return {
		property,
		propertyValues: startEndValues.map((values) => ({ startValue: values[0], endValue: values[1] })),
		option: (values) => optionFn(...values),
	};
};

export const elementParamsOnScroll = [
	{
		className: '.about__img_block',

		dynamicProps: [
			{
				property: 'background-color',
				startValue: [244, 149, 120, 1],
				endValue: [244, 149, 120, 0],
			},
			{
				property: 'transform',
				propertyValues: [
					{ startValue: 0.5, endValue: 1 },
					{ startValue: 90, endValue: 0 },
					{ startValue: -90, endValue: 20 },
				],
				option: (values) => `scale(${values[0]}) rotateX(${values[1]}deg) rotateY(${values[2]}deg)`,
			},
			{
				property: 'border-radius',
				propertyValues: [{ startValue: 50, endValue: 10 }],
				option: (values) => `${values[0]}%`,
			},
		],
	},

	{
		className: '.how_to_apply__img_block',
		dynamicProps: [
			{
				property: 'background-color',
				startValue: [244, 149, 120, 1],
				endValue: [244, 149, 120, 0],
			},
			{
				property: 'transform',
				propertyValues: [
					{ startValue: 0.5, endValue: 1 },
					{ startValue: 90, endValue: 0 },
					{ startValue: 90, endValue: 20 },
				],
				option: (values) => `scale(${values[0]}) rotateX(${values[1]}deg) rotateY(${values[2]}deg)`,
			},
			{
				property: 'border-radius',
				propertyValues: [{ startValue: 50, endValue: 10 }],
				option: (values) => `${values[0]}%`,
			},
		],
	},
	{
		className: '.faq__img_block',
		dynamicProps: [
			{
				property: 'background-color',
				startValue: [244, 149, 120, 1],
				endValue: [244, 149, 120, 0],
			},
			{
				property: 'transform',
				propertyValues: [
					{ startValue: 0.5, endValue: 1 },
					{ startValue: 90, endValue: 0 },
					{ startValue: -90, endValue: 20 },
				],
				option: (values) => `scale(${values[0]}) rotateX(${values[1]}deg) rotateY(${values[2]}deg)`,
			},
			{
				property: 'border-radius',
				propertyValues: [{ startValue: 50, endValue: 10 }],
				option: (values) => `${values[0]}%`,
			},
		],
	},
	{
		className: '.about__text_block',
		dynamicProps: [createDynamicProps('opacity', [[0, 1]], (opacity) => opacity)],
	},
	{
		className: '.how_to_apply__text_block',
		dynamicProps: [createDynamicProps('opacity', [[0, 1]], (opacity) => opacity)],
	},
	{
		className: '.faq__text_block',
		dynamicProps: [createDynamicProps('opacity', [[0, 1]], (opacity) => opacity)],
	},
	{
		className: '.faq__left_list_item',

		dynamicProps: [
			{
				property: 'transform',
				propertyValues: [{ startValue: -150, endValue: 0 }],
				option: (values) => `translateX(${values[0]}px)`,
			},
		],
	},
	{
		className: '.faq__right_list_item',

		dynamicProps: [
			{
				property: 'transform',
				propertyValues: [{ startValue: 150, endValue: 0 }],
				option: (values) => `translateX(${values[0]}px)`,
			},
		],
	},
];

// const onScrollActions = (elProps) => {
// 	window.onbeforeunload = () => window.scrollTo(0, 0);

// 	function colorChange(startValue, endValue, progress) {
// 		const r = startValue[0] + (endValue[0] - startValue[0]) * progress;
// 		const g = startValue[1] + (endValue[1] - startValue[1]) * progress;
// 		const b = startValue[2] + (endValue[2] - startValue[2]) * progress;
// 		const a = (startValue[3] + (endValue[3] - startValue[3]) * progress).toFixed(2);

// 		return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${a})`;
// 	}

// 	const handleScroll = () => {
// 		elProps.forEach((elProp) => {
// 			const domElement = document.querySelector(elProp.className);
// 			const viewportHeight = window.innerHeight;
// 			const domElementParams = domElement.getBoundingClientRect();
// 			const animationViewportGup = 150;
// 			const animationStart =
// 				viewportHeight <= domElementParams.height
// 					? (domElementParams.y - viewportHeight) * -1
// 					: (domElementParams.y - viewportHeight + animationViewportGup) * -1;

// 			const animationEnd =
// 				viewportHeight <= domElementParams.height
// 					? viewportHeight
// 					: domElementParams.height + animationViewportGup;
// 			let animationProgress = 0;

// 			if (animationStart >= 0 && animationStart <= animationEnd) {
// 				animationProgress = animationStart / (animationEnd / 100);

// 				elProp.dynamicProps.forEach((dynamicProp) => {
// 					if (typeof dynamicProp.option === 'function') {
// 						let startValues;
// 						let endValues;
// 						if (!dynamicProp.propertyValues) {
// 							return;
// 						} else {
// 							startValues = dynamicProp.propertyValues.map((el) => el.startValue);
// 							endValues = dynamicProp.propertyValues.map((el) => el.endValue);
// 						}

// 						const progressArray = startValues.map((start, index) => {
// 							const progress = start + (endValues[index] - start) * (animationProgress / 100);
// 							return progress;
// 						});

// 						domElement.style[dynamicProp.property] = dynamicProp.option(progressArray);
// 					} else if (
// 						(!dynamicProp.option && dynamicProp.property === 'background') ||
// 						dynamicProp.property === 'background-color'
// 					) {
// 						const interpolatedColor = colorChange(
// 							dynamicProp.startValue,
// 							dynamicProp.endValue,
// 							animationProgress / 100,
// 						);

// 						domElement.style[dynamicProp.property] = interpolatedColor;
// 					}
// 				});
// 			} else if (animationStart > animationEnd) {
// 				animationProgress = 100;
// 			} else animationProgress = 0;
// 		});
// 	};

// 	document.addEventListener('DOMContentLoaded', () => {
// 		handleScroll();
// 	});

// 	window.addEventListener('scroll', handleScroll);
// };

const onScrollActions = (elProps) => {
	window.onbeforeunload = () => window.scrollTo(0, 0);

	function colorChange(startValue, endValue, progress) {
		const r = startValue[0] + (endValue[0] - startValue[0]) * progress;
		const g = startValue[1] + (endValue[1] - startValue[1]) * progress;
		const b = startValue[2] + (endValue[2] - startValue[2]) * progress;
		const a = (startValue[3] + (endValue[3] - startValue[3]) * progress).toFixed(2);
		if (progress > 0.8) {
			return `rgb(${endValue})`;
		} else return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${a})`;
	}

	const handleScroll = () => {
		elProps.forEach((elProp) => {
			const domElements = document.querySelectorAll(elProp.className);
			const viewportHeight = window.innerHeight;

			domElements.forEach((domElement) => {
				const domElementParams = domElement.getBoundingClientRect();
				const animationViewportGup = 150;
				const animationStart =
					viewportHeight <= domElementParams.height
						? (domElementParams.y - viewportHeight) * -1
						: (domElementParams.y - viewportHeight + animationViewportGup) * -1;

				const animationEnd =
					viewportHeight <= domElementParams.height
						? viewportHeight
						: domElementParams.height + animationViewportGup;
				let animationProgress = 0;

				if (animationStart >= 0 && animationStart <= animationEnd) {
					animationProgress = animationStart / (animationEnd / 100);

					elProp.dynamicProps.forEach((dynamicProp) => {
						const elementStyle = domElement.style;
						if (typeof dynamicProp.option === 'function') {
							let startValues;
							let endValues;
							if (!dynamicProp.propertyValues) {
								return;
							} else {
								startValues = dynamicProp.propertyValues.map((el) => el.startValue);
								endValues = dynamicProp.propertyValues.map((el) => el.endValue);
							}

							const progressArray = startValues.map((start, index) => {
								const progress = start + (endValues[index] - start) * (animationProgress / 100);
								return progress;
							});

							const result = animationProgress >= 75 ? endValues : progressArray;

							if (elementStyle) {
								elementStyle[dynamicProp.property] = dynamicProp.option(result);
							}
						} else if (
							(!dynamicProp.option && dynamicProp.property === 'background') ||
							dynamicProp.property === 'background-color'
						) {
							const interpolatedColor = colorChange(
								dynamicProp.startValue,
								dynamicProp.endValue,
								animationProgress / 100,
							);

							if (elementStyle) {
								elementStyle[dynamicProp.property] = interpolatedColor;
							}
						}
					});
				} else if (animationStart > animationEnd) {
					animationProgress = 100;
				} else animationProgress = 0;
			});
		});
	};

	document.addEventListener('DOMContentLoaded', () => {
		handleScroll();
	});

	window.addEventListener('scroll', handleScroll);
};

export default onScrollActions;
