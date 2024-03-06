const preloader = () => {
	document.addEventListener('DOMContentLoaded', () => {
		const files = document.querySelectorAll('img, link, svg');
		let i = 0;
		files.forEach((file) => {
			let currentFile = file;
			currentFile.onload = () => {
				console.log(currentFile);
			};
		});
	});
};

export default preloader;
