import { useMemo, memo } from 'react'
import TiltCard from '../TiltCard/TiltCard'
import { contactsData } from '../../data/contactsData'
import { useSafeUrl } from '../../hooks/useSafeUrl'

// --- отдельный компонент карточки контакта ---
const ContactCard = memo(({ Icon, title, value, link }) => {
	const { isSafeUrl } = useSafeUrl()
	const safeLink = isSafeUrl(link) ? link : '#'

	return (
		<a href={safeLink} target='_blank' rel='noopener noreferrer'>
			<TiltCard>
				<Icon className='contact-icon' />
				<h3>{title}</h3>
				<p>{value}</p>
			</TiltCard>
		</a>
	)
})

// --- основной компонент Contacts ---
export default function Contacts() {
	const contactCards = useMemo(() => {
		return contactsData.map(({ id, icon, title, value, link }) => (
			<ContactCard
				key={id}
				Icon={icon}
				title={title}
				value={value}
				link={link}
			/>
		))
	}, []) // contactsData статичен

	return <div className='contact-grid'>{contactCards}</div>
}
