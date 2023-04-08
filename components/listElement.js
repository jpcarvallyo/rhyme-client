import { rhymeContainer } from '../modules/selectors.js';

function ListElementBuilder(acc, listItem) {
	const string = acc + '<li>' + listItem + '</li>';
	return string;
}

export function listElement(data) {
	const { meaning, rhymesWith } = data;
	const listItems = rhymesWith.reduce(ListElementBuilder, '');
	const udList = document.createElement('ul');
	udList.innerHTML = listItems;
	rhymeContainer.append(udList);
}