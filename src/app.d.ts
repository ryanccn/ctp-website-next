declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface Window {
		flavorGlobal: {
			value: string;
		};
	}
}

export {};
