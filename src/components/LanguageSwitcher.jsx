// LanguageSwitcher.jsx
import { useEffect } from "react";
import useStore from "@/zustand/store";
import { LOCALES } from "@/data/locale";

export default function LanguageSwitcher() {
	const currentLocale = useStore((state) => state.locale); // 获取当前语言
	console.log(currentLocale);

	const setLocale = useStore((state) => state.setLocale);

	useEffect(() => {
		const languageSwitcher = document.getElementById("language-switcher");
		if (languageSwitcher) {
			languageSwitcher.addEventListener("change", (e) => {
				const target = e.target;
				setLocale(target.value);
			});
		}

		return () => {
			if (languageSwitcher) {
				languageSwitcher.removeEventListener("change", () => {});
			}
		};
	}, []);

	return (
		<select id="language-switcher" defaultValue={currentLocale}>
			{LOCALES.map((locale) => (
				<option key={locale} value={locale}>
					{locale}
				</option>
			))}
		</select>
	);
}
