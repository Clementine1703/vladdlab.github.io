const text = document.querySelector('#textarea');
const button = document.querySelector('.news__comment_add button');
const display = document.querySelector('.comments');
let comments = JSON.parse(localStorage.getItem('comments'));


if (comments != null) {
	for (let i = 0; i < comments.length; i++) {
		let el = document.createElement('p');
		let comText = comments[i];
		el.append(comText);
		display.append(el);
	}
}
else {
	comments = [];
}

checkArea();

text.addEventListener('input', checkArea);

button.addEventListener('click', () => {
	let el = document.createElement('p');
	let comText = document.createTextNode(text.value);
	el.appendChild(comText);
	display.append(el);
	comments.push(text.value);
	localStorage.setItem('comments', JSON.stringify(comments));
	text.value = '';
	checkArea();
})

function checkArea() {
	if (text.value.split(' ').join('') == '') {
		text.classList.add('error');
		button.disabled = true;
	}

	else {
		text.classList.remove('error');
		button.disabled = false;
	}
}
