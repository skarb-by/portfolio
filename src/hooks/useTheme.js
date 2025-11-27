import { useState, useEffect, useCallback } from 'react'

export const useTheme = () => {
	const [theme, setTheme] = useState(() => {
		try {
			return localStorage.getItem('theme') || 'light'
		} catch {
			return 'light'
		}
	})

	useEffect(() => {
		document.body.dataset.theme = theme
		try {
			localStorage.setItem('theme', theme)
		} catch { }
	}, [theme])

	const toggleTheme = useCallback(() => {
		setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
	}, [])

	return { theme, toggleTheme }
}
