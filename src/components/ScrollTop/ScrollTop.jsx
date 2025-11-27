import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './ScrollTop.css'

function ScrollTop() {
	const [visible, setVisible] = useState(false)

	// Оптимизированный listener через useCallback
	const toggleVisibility = useCallback(() => {
		const shouldBeVisible = window.scrollY > 300
		setVisible(prev => (prev !== shouldBeVisible ? shouldBeVisible : prev))
	}, [])

	// Подписка на scroll (1 раз)
	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility)
		return () => window.removeEventListener('scroll', toggleVisibility)
	}, [toggleVisibility])

	// Оптимизированная функция скролла вверх
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

	// Мемоизация иконки чтобы не пересоздавалась на каждый рендер
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

// Оборачиваем в memo → без изменений props компонент НЕ ререндерится
export default React.memo(ScrollTop)
