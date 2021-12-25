import {
	btnReset,
	tipElement,
	totalElement,
	tips,
	values,
	inputs,
	tipCustom,
} from './variables.js';
import {
	elementTipRemove,
	findTip,
	toggleClasses,
	addBtn,
	calcBill,
} from './helpers.js';

const resultReset = () => {
	tipElement.textContent = '$0.00';
	totalElement.textContent = '$0.00';
	delete values[0];
	delete values[1];
	values.tip = '10';
	addBtn(btnReset);
};

const sizeOf = obj => Object.entries(obj).length === 3;

export const allReset = () => {
	inputs.forEach(input => (input.value = ''));
	tipCustom.value = '';
	inputs[0].focus();
	const tipRemove = elementTipRemove(tips, findTip);
	toggleClasses(tips[tipRemove], tips[1]);
	resultReset();
};

export const formComplete = obj => sizeOf(obj) && calcBill(obj);
