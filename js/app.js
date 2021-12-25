import { values, tips, inputs, allInp, tipCustom } from './variables.js';
import { addTip, blockLetters, addValue } from './functions.js';
import { findTip } from './helpers.js';
const onlyNumbers = input => input.addEventListener('keypress', blockLetters);
//prettier-ignore
const addTipBill = tip =>
	tip.addEventListener('click', addTip.bind(this, values, tips, tip, findTip));
// prettier-ignore
const addTipCustom = () =>
	tipCustom.addEventListener('keyup', addTip.bind(this, values, tips, false, findTip));

const addEveryBill = (input, i) =>
	input.addEventListener('keyup', addValue.bind(this, values, i));
export const App = () => {
	tips.forEach(addTipBill);
	inputs.forEach(addEveryBill);
	allInp.forEach(onlyNumbers);
	addTipCustom();
};
