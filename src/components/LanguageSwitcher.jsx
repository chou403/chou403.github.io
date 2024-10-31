import { useEffect } from "react";
import useStore from "../zustand/store";
import { LOCALES } from "@/data/locale";

export default function LanguageSwitcher() {
	const currentLocale = useStore((state) => state.locale);
	const setLocale = useStore((state) => state.setLocale);

	// 使用 useEffect 监听 currentLocale 的变化
	useEffect(() => {}, [currentLocale]);

	const handleChange = (e) => {
		const newLocale = e.target.value;
		setLocale(newLocale);

		const currentUrl = window.location.pathname.split("/").slice(3).join("/"); // 获取除语言代码之外的 URL
		window.location.href = `/post/${newLocale}/${currentUrl}`; // 跳转到新的 URL，带上语言代码
	};

	return (
		<select id="language-switcher" value={currentLocale} onChange={handleChange}>
			{LOCALES.map((locale) => (
				<option key={locale} value={locale}>
					{locale}
				</option>
			))}
		</select>
	);
}
