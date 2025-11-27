import { memo } from 'react'
import DOMPurify from 'dompurify'
import Header from './components/Header/Header'
import Section from './components/Section'
import TiltCard from './components/TiltCard/TiltCard'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop/ScrollTop'
import { useLanguage } from './hooks/useLanguage'
import { useTheme } from './hooks/useTheme'

const App = () => {
	const { theme, toggleTheme } = useTheme()
	const { lang, t, switchLang } = useLanguage()

	return (
		<>
			<Header
				theme={theme}
				toggleTheme={toggleTheme}
				lang={lang}
				switchLang={switchLang}
				t={t}
			/>

			<Section id='about' title={t.about}>
				<TiltCard>
					<div
						className='tilt-card-content'
						dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t.text) }}
					/>
				</TiltCard>
			</Section>

			<Section id='skills' title={t.skills}>
				<Skills lang={lang} />
			</Section>

			<Section id='projects' title={t.projects}>
				<Projects lang={lang} />
			</Section>

			<Section id='contact' title={t.contact}>
				<Contacts lang={lang} />
			</Section>

			<ScrollTop />
			<Footer />
		</>
	)
}

export default memo(App)
