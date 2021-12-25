export const inputs = [...document.querySelectorAll('.many-input')];
export const tips = [...document.querySelectorAll('.box-tip')].slice(0, -1);
export const tipCustom = document.querySelector('.tip-custom');
export const btnReset = document.querySelector('.reset');
export const [tipElement, totalElement] = [
	...document.querySelectorAll('.total'),
];
export const values = { tip: '10' };
export const allInp = [inputs, tipCustom].flatMap(e => e);
