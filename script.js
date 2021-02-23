const list = document.createElement('ul');
const body = document.querySelector('body');
body.prepend(list);

const xhr = new XMLHttpRequest();

xhr.responseType = 'json';

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');

xhr.send();

xhr.onload = () => {

	for (let i = 0; i < xhr.response.length; i++) {

		const listItem = document.createElement('li');
		listItem.innerHTML = xhr.response[i].title;
		list.appendChild(listItem);

		if (xhr.response[i].completed) {
			listItem.style.backgroundColor = '#5CCCCC';
		} else {
			listItem.style.backgroundColor = '#FF2C00'
		}
	}
}