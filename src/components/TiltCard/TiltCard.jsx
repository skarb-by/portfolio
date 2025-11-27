import './TiltCard.css'

export default function TiltCard({ children }) {
	const tilt = e => {
		const card = e.currentTarget
		const rect = card.getBoundingClientRect()
		const x = (e.clientX - rect.left - rect.width / 2) / 15
		const y = (e.clientY - rect.top - rect.height / 2) / -15

		card.style.transform = `rotateX(${y}deg) rotateY(${x}deg) scale(1.06)`
	}

	const reset = e => {
		e.currentTarget.style.transform = 'rotateX(0) rotateY(0) scale(1)'
	}

	return (
		<div className='tilt-card' onMouseMove={tilt} onMouseLeave={reset}>
			<div className='tilt-inner'>{children}</div>
		</div>
	)
}
