import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './ScrollTop.css'

function ScrollTop() {
	const [visible, setVisible] = useState(false)

	const toggleVisibility = useCallback(() => {
		const shouldBeVisible = window.scrollY > 300
		setVisible(prev => (prev !== shouldBeVisible ? shouldBeVisible : prev))
	}, [])

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility)
		return () => window.removeEventListener('scroll', toggleVisibility)
	}, [toggleVisibility])

	const scrollToTop = useCallback(() => {
		const start = window.scrollY
		const duration = 600
		const startTime = performance.now()
		const easeOutQuad = t => t * (2 - t)
		const animate = currentTime => {
			const timeElapsed = currentTime - startTime
			const progress = Math.min(timeElapsed / duration, 1)
			window.scrollTo(0, start * (1 - easeOutQuad(progress)))
			if (progress < 1) {
				requestAnimationFrame(animate)
			}
		}

		requestAnimationFrame(animate)
	}, [])

	const memoIcon = useMemo(() => <FaArrowUp />, [])
	return (
		<button
			className={`scroll-top ${visible ? 'show' : ''}`}
			onClick={scrollToTop}
			aria-label='Scroll to top'
		>
			{memoIcon}
		</button>
	)
}

export default React.memo(ScrollTop)
