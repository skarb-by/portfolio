// src/hooks/useSafeUrl.js
import { useCallback } from 'react'

export const useSafeUrl = () => {
	const isSafeUrl = useCallback(url => {
		try {
			const u = new URL(url)
			return u.protocol === 'https:' || u.protocol === 'http:'
		} catch {
			return false
		}
	}, [])

	return { isSafeUrl }
}
