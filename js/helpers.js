import { btnReset, tipElement, totalElement } from './variables.js';
import { allReset } from './forms.js';
export const printBill = ({ everyTip, everyPerson }) => {
	if (!(1 / everyPerson) || everyTip === '0.00') {
		allReset();
		return;
	}
	btnReset.addEventListener('click', allReset);
	tipElement.textContent = `$${everyTip}`;
	totalElement.textContent = `$${everyPerson}`;
	removeBtn(btnReset);
};
const totalBill = (bill, tip) => bill + bill * (tip / 100);

const perPerson = (total, people) => total / people;

const tipPerson = (bill, tip, people) => perPerson(bill * (tip / 100), people);

const objToNumbers = obj => Object.values(obj).map(Number);

export const calcBill = obj => {
	const [bill, people, tip] = objToNumbers(obj);
	const everyTip = tipPerson(bill, tip, people).toFixed(2);
	const everyPerson = perPerson(totalBill(bill, tip), people).toFixed(2);
	printBill({ everyTip, everyPerson });
};

export const addBtn = btn => btn.parentElement.classList.add('empty');
export const removeBtn = btn => btn.parentElement.classList.remove('empty');
export const findTip = tip => tip.classList.contains('select');

export const toggleClasses = (previous, next) => {
	previous.classList.remove('select');
	next.classList.add('select');
};
export const elementTipRemove = (tips, findTip) =>
	tips.findIndex(findTip) === -1 ? 0 : tips.findIndex(findTip);
