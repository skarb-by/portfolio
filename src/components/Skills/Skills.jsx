import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import TiltCard from '../TiltCard/TiltCard'
import { skills } from '../../data/skills'
import { useSafeUrl } from '../../hooks/useSafeUrl'
import './Skills.css'

const SkillCard = memo(({ skill }) => {
	const { isSafeUrl } = useSafeUrl()
	const Icon = skill.icon
	const iconElement = useMemo(() => <Icon className='skill-icon' />, [Icon])
	const safeLink = isSafeUrl(skill.link) ? skill.link : '#'
	return (
		<motion.div
			variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
		>
			<TiltCard>
				<a
					href={safeLink}
					target='_blank'
					rel='noopener noreferrer'
					className='skill-link'
				>
					<motion.div
						whileHover={{ scale: 1.15, rotate: 2 }}
						transition={{ type: 'spring', stiffness: 200 }}
					>
						{iconElement}
					</motion.div>
					<p>{skill.name}</p>
				</a>
			</TiltCard>
		</motion.div>
	)
})

const Skills = ({ lang }) => {
	const skillList = useMemo(() => skills, [])
	return (
		<motion.div
			key={lang}
			className='skills-grid'
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
			variants={{
				hidden: { opacity: 0 },
				show: { opacity: 1, transition: { staggerChildren: 0.12 } },
			}}
		>
			{skillList.map(skill => (
				<SkillCard key={skill.id} skill={skill} />
			))}
		</motion.div>
	)
}

export default memo(Skills)
