import { FaTelegramPlane, FaInstagram, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export const contactsData = [
	{
		id: 1,
		icon: FaTelegramPlane,
		title: 'Telegram',
		value: '@robin_hood_8',
		link: 'https://t.me/robin_hood_8',
	},
	{
		id: 2,
		icon: MdEmail,
		title: 'Email',
		value: 'skarb_gaspadar@mail.ru',
		link: 'mailto:skarb_gaspadar@mail.ru',
	},
	{
		id: 3,
		icon: FaInstagram,
		title: 'Instagram',
		value: 'sergey_it_developer',
		link: 'https://instagram.com/sergey_it_developer',
	},
	{
		id: 4,
		icon: FaGithub,
		title: 'GitHub',
		value: 'skarb-by',
		link: 'https://github.com/skarb-by',
	},
]
