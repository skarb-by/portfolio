import { motion } from 'framer-motion'
import TiltCard from '../TiltCard/TiltCard'
import { projects } from '../../data/projects'
import { FaGithub } from 'react-icons/fa'
import { memo, useMemo } from 'react'
import { useSafeUrl } from '../../hooks/useSafeUrl'
import './Projects.css'

// --- карточка проекта ---
const ProjectCard = memo(({ p }) => {
	const { isSafeUrl } = useSafeUrl()
	const safeLink = isSafeUrl(p.link) ? p.link : '#'

	return (
		<TiltCard>
			<a
				href={safeLink}
				target='_blank'
				rel='noopener noreferrer'
				className='project-card'
			>
				<p className='project-name'>{p.name}</p>
				<p className='project-type'>{p.type}</p>
				<p className='project-desc'>{p.desc}</p>

				<span className='project-github'>
					<FaGithub className='github-icon' />
					<span>{p.text}</span>
				</span>
			</a>
		</TiltCard>
	)
})

// --- основной компонент Projects ---
const Projects = ({ lang }) => {
	const containerVariants = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { staggerChildren: 0.15 } },
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 40 },
		show: { opacity: 1, y: 0 },
	}

	const projectCards = useMemo(
		() =>
			projects[lang].map(p => (
				<motion.div
					key={p.id}
					variants={itemVariants}
					transition={{ duration: 0.5, ease: 'easeOut' }}
				>
					<ProjectCard p={p} />
				</motion.div>
			)),
		[lang]
	)

	return (
		<div className='projects-wrapper'>
			<motion.div
				key={lang} // сброс анимации при смене языка
				className='projects-grid'
				initial='hidden'
				animate='show'
				variants={containerVariants}
			>
				{projectCards}
			</motion.div>
		</div>
	)
}

export default memo(Projects)
