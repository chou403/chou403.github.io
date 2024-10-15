import { useState, useEffect } from "react";
import useStore from "../zustand/store"; // 调用你的 Zustand 状态管理
import { LOCALES } from "@/data/locale";

export default function LanguageSwitcher() {
	// const [currentLocale, setCurrentLocale] = useState(useStore.getState().locale); // 通过 useState 来存储当前的 locale
	// const setLocale = useStore((state) => state.setLocale);
	const currentLocale = useStore((state) => state.locale);
	const setLocale = useStore((state) => state.setLocale);

	const handleChange = (e) => {
		const newLocale = e.target.value;
		console.log(newLocale);

		setLocale(newLocale);
	};

	useEffect(() => {
		const languageSwitcher = document.getElementById("language-switcher");
		if (languageSwitcher) {
			languageSwitcher.addEventListener("change", (e) => {
				const target = e.target;
				setLocale(target.value); // 更新全局 locale
				// setCurrentLocale(target.value);  // 更新组件状态，触发重渲染
				console.log("Locale changed to:", target.value);
			});
		}

		// 清除事件监听器
		return () => {
			if (languageSwitcher) {
				languageSwitcher.removeEventListener("change", () => {});
			}
		};
	}, [setLocale]); // 添加 setLocale 作为依赖

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
