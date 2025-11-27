import { useState, useMemo, useCallback, memo } from 'react'
import './Header.css'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { FaLaptopCode } from 'react-icons/fa'
import { AiOutlineMoon, AiOutlineSun } from 'react-icons/ai'

const Flag = memo(() => (
	<svg
		width='24'
		height='16'
		viewBox='0 0 24 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		style={{ borderRadius: '2px' }}
	>
		<rect width='24' height='16' fill='#D22730' />
		<rect y='8' width='24' height='8' fill='#00A651' />
		<path d='M0 0H2V16H0V0Z' fill='white' />
		<path d='M0 0H2V16H0V0Z' fill='red' opacity='0.7' />
	</svg>
))

const Header = memo(({ theme, toggleTheme, lang, switchLang, t }) => {
	const [open, setOpen] = useState(false)

	const closeMenu = useCallback(() => setOpen(false), [])

	const navItems = useMemo(
		() => [
			{ id: 'about', label: t.about },
			{ id: 'skills', label: t.skills },
			{ id: 'projects', label: t.projects },
			{ id: 'contact', label: t.contact },
		],
		[t]
	)

	return (
		<header className='header'>
			<div className='header-bg'></div>

			<div className='header-inner'>
				<motion.div
					className='logo'
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ type: 'spring', stiffness: 120, damping: 12 }}
				>
					<FaLaptopCode className='logo-symbol' />
					<span className='logo-text'>
						Sergey Nedelko.dev <Flag />
					</span>
				</motion.div>

				<nav className={open ? 'nav open' : 'nav'}>
					{navItems.map(item => (
						<Link
							key={item.id}
							className='nav-button'
							to={item.id}
							smooth={true}
							duration={500}
							onClick={closeMenu}
						>
							{item.label}
						</Link>
					))}
				</nav>

				<div className='controls'>
					<button className='theme-btn' onClick={toggleTheme}>
						{theme === 'light' ? <AiOutlineMoon /> : <AiOutlineSun />}
					</button>
					<button className='lang-btn' onClick={switchLang}>
						{lang.toUpperCase()}
					</button>
				</div>

				<div
					className={`burger ${open ? 'active' : ''}`}
					onClick={() => setOpen(!open)}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div className='header-content'>
				<motion.h1
					className='apple-text'
					initial={{ y: -30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
				>
					{t.title}
				</motion.h1>
				<motion.p
					className='subtitle'
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
				>
					{t.subtitle}
				</motion.p>
			</div>
		</header>
	)
})

export default Header
