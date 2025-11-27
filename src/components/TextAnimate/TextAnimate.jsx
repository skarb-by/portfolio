import React, { useEffect, useState, useMemo } from 'react'
import './TextAnimate.css'

function TextAnimate({ words }) {
	const [index, setIndex] = useState(0)

	// Если words изменится — сбросить индекс
	useEffect(() => {
		setIndex(0)
	}, [words])

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prev => (prev + 1) % words.length)
		}, 2000)

		return () => clearInterval(interval)
	}, [words.length]) // если массив слов изменится — пересоздаём интервал

	// Мемоизация выводимого слова (чисто косметика)
	const currentWord = useMemo(() => words[index], [index, words])

	return <span className='magic-word'>{currentWord}</span>
}

export default React.memo(TextAnimate)
