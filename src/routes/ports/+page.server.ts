import { parse } from 'yaml';
import type { Port, PortCategory, Userstyle } from './types';

export async function load() {
	const [portsResp, userstylesResp] = await Promise.all([
		fetch('https://raw.githubusercontent.com/catppuccin/catppuccin/main/resources/ports.yml'),
		fetch('https://raw.githubusercontent.com/catppuccin/userstyles/main/scripts/userstyles.yml')
	]);

	const [portsRaw, userstylesRaw] = await Promise.all([portsResp.text(), userstylesResp.text()]);
	const { ports, categories: portCategories } = parse(portsRaw) as {
		ports: { [id: string]: Port };
		categories: PortCategory[];
	};
	const { userstyles } = parse(userstylesRaw) as { userstyles: { [id: string]: Userstyle } };

	return { ports, portCategories, userstyles };
}

export const config = { isr: 3600 };
