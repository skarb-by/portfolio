import React, { useMemo } from 'react'

function Footer() {
	const style = useMemo(() => ({ textAlign: 'center', padding: 40 }), [])
	return <footer style={style}>© 2025 skarb_by</footer>
}

export default React.memo(Footer)
