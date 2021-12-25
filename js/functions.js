import { formComplete } from './forms.js';
import { toggleClasses, elementTipRemove } from './helpers.js';
import { tips } from './variables.js';
const observer = (obj, tipRemove, { target }) => {
	if (Number(obj.tip) < 1 || !obj.tip || Number(target.value) < 1) {
		obj.tip = '10';
		toggleClasses(tips[tipRemove], tips[1]);
	}
};
export const addTip = (obj, tips, tip, findTip, value) => {
	const tipRemove = elementTipRemove(tips, findTip);

	if (!tip) {
		tips[tipRemove].classList.remove('select');
		obj.tip = value.target.value || observer(obj, tipRemove, value);
		formComplete(obj);
		return;
	}
	obj.tip = tip.firstElementChild.textContent.slice(0, -1);
	toggleClasses(tips[tipRemove], tip);
	formComplete(obj);
};
export const blockLetters = e => {
	const regex = new RegExp('^[0-9]+$');
	const key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
	if (!regex.test(key)) {
		e.preventDefault();
		return false;
	}
};
export const addValue = (obj, prop, value) => {
	obj[prop] = value.target.value;
	formComplete(obj);
};
