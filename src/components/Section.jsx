import React, { useEffect, useRef, useMemo, useCallback } from 'react'

function Section({ id, children, title }) {
	const ref = useRef()

	// мемоизированные настройки
	const options = useMemo(() => ({ threshold: 0.3 }), [])

	// мемоизированный callback
	const handleIntersect = useCallback(entries => {
		if (entries[0].isIntersecting) {
			ref.current?.classList.add('visible')
		}
	}, [])

	useEffect(() => {
		if (!ref.current) return

		const obs = new IntersectionObserver(handleIntersect, options)
		obs.observe(ref.current)

		return () => {
			obs.disconnect()
		}
	}, [handleIntersect, options])

	return (
		<section id={id} ref={ref}>
			<h2>{title}</h2>
			{children}
		</section>
	)
}

export default React.memo(Section)
