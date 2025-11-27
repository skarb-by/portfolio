import { useState, useCallback } from 'react'
import { langPack } from '../data/i18n'

export const useLanguage = (initialLang = 'ru') => {
	const [lang, setLang] = useState(() => {
		try {
			return localStorage.getItem('lang') || initialLang
		} catch {
			return initialLang
		}
	})

	const t = langPack[lang]

	const switchLang = useCallback(() => {
		setLang(prev => {
			const next = prev === 'ru' ? 'en' : 'ru'
			try {
				localStorage.setItem('lang', next)
			} catch { }
			return next
		})
	}, [])

	return { lang, t, switchLang }
}
