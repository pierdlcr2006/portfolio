import { defaultLang, ui, type Lang, type UiKey } from './ui';

/** Devuelve el idioma activo a partir de `Astro.currentLocale`. */
export function getLang(locale: string | undefined): Lang {
	return locale && locale in ui ? (locale as Lang) : defaultLang;
}

/** Crea la función `t(clave, variables?)` para un idioma. */
export function useTranslations(lang: Lang) {
	return (key: UiKey, vars: Record<string, string> = {}): string => {
		let text: string = ui[lang][key] ?? ui[defaultLang][key];
		for (const [name, value] of Object.entries(vars)) {
			text = text.replaceAll(`{${name}}`, value);
		}
		return text;
	};
}
