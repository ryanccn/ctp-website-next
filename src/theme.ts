const initialFlavor =
	localStorage.getItem('flavor') ??
	(window.matchMedia('(prefers-color-scheme: dark)') ? 'macchiato' : 'latte');

console.log({ initialFlavor });

const updateFlavor = (value: string) => {
	localStorage.setItem('flavor', value);
	document.documentElement.classList.remove(
		'ctp-latte',
		'ctp-frappe',
		'ctp-macchiato',
		'ctp-mocha'
	);
	document.documentElement.classList.add('ctp-' + value);
};

const flavor = new Proxy(
	{
		value: initialFlavor
	},
	{
		set: (_, key, value) => {
			if (key === 'flavor') {
				updateFlavor(value);
				console.log({ value });
			}
			return true;
		}
	}
);

updateFlavor(initialFlavor);
window.flavorGlobal = flavor;
