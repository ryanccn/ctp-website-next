export interface Port {
	name: string;
	category?: string;
	color?: string;
	platform: string[];
}

export interface PortCategory {
	key: string;
	name: string;
	emoji: string;
}

export interface Userstyle {
	name: string | string[];
	category: string;
	icon?: string;
	color?: string;
	readme?: {
		'app-link'?: string;
		usage?: string;
		'current-maintainers'?: { name: string; url: string };
	};
}
