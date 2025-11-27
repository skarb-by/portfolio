import React, { useEffect, useState, useMemo } from 'react'
import './TextAnimate.css'

function TextAnimate({ words }) {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		setIndex(0)
	}, [words])

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prev => (prev + 1) % words.length)
		}, 2000)

		return () => clearInterval(interval)
	}, [words.length])

	const currentWord = useMemo(() => words[index], [index, words])

	return <span className='magic-word'>{currentWord}</span>
}

export default React.memo(TextAnimate)
