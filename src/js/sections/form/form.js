export const formBgAnim = () => {
	const line = document.querySelector('.form__bg_line');
	let viewportHeight;

	window.addEventListener('scroll', () => {
		viewportHeight = window.innerHeight;
		const lineProps = line.getBoundingClientRect();
		const linePosition = lineProps.y - viewportHeight + lineProps.height;
		let percents;
		let result;
		if (linePosition > 0) {
			percents = 0;
			result = 2500;
		} else if (linePosition <= 0 && linePosition >= -210) {
			percents = linePosition / -2.1;
			result = 2500 - 2500 * (percents / 100);
		} else if (linePosition < -210) {
			percents = 100;
			result = 0;
		}

		line.style.strokeDashoffset = result;
	});
};

export const formValidation = () => {
	const form = document.querySelector('.form');
	const inputName = document.querySelector('.form__input_name');
	const inputEmail = document.querySelector('.form__input_email');
	const inputs = document.querySelectorAll('.form__input');
	const emailError = document.querySelector('.form__email_error');
	const successMessage = document.querySelector('.form__success_message');
	let isSubmitClicked = false;
	const formData = {
		name: '',
		email: '',
	};

	function fieldsValuesValidate(fields) {
		let isValid = true;
		const minValue = 3;
		const maxValue = 20;

		fields.forEach((field) => {
			const errorElement = field.nextElementSibling;
			if (field.value === '') {
				field.classList.add('form_input--error');
				errorElement.innerText = 'required field';
				isValid = false;
			} else if (field === inputName && field.value.length < minValue) {
				field.classList.add('form_input--error');
				errorElement.innerText = `at least ${minValue} characters`;
				isValid = false;
			} else if (field === inputName && field.value.length > maxValue) {
				field.classList.add('form_input--error');
				errorElement.innerText = `no more than ${maxValue} characters`;
				isValid = false;
			} else {
				field.classList.remove('form_input--error');
				errorElement.innerText = '';
			}
		});
		return isValid;
	}

	function emailValid(email) {
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (email) {
			if (!emailRegex.test(email)) {
				inputEmail.classList.add('form_input--error');
				emailError.innerText = 'Invalid email';
				return false;
			} else {
				inputEmail.classList.remove('form_input--error');
				emailError.innerText = '';
				return true;
			}
		}
		return false;
	}

	function onInputChange() {
		if (fieldsValuesValidate(inputs) && emailValid(inputEmail.value)) {
			formData.name = inputName.value;
			formData.email = inputEmail.value;
		}
		if (isSubmitClicked) {
			fieldsValuesValidate(inputs);
			emailValid(inputEmail.value);

			if (successMessage.classList.contains('form__success_message--visible')) {
				successMessage.classList.remove('form__success_message--visible');
			}
		}
	}

	function formSend(e) {
		e.preventDefault();
		isSubmitClicked = true;
		fieldsValuesValidate(inputs);
		emailValid(inputEmail.value);
		if (emailValid(inputEmail.value) && fieldsValuesValidate(inputs)) {
			setTimeout(() => {
				window.alert(JSON.stringify(formData));
				form.reset();
				successMessage.classList.add('form__success_message--visible');
			}, 1500);
		}
	}

	inputs.forEach((input) => {
		input.addEventListener('input', onInputChange);
	});

	form.addEventListener('submit', formSend);
};
