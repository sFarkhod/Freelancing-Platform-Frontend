import type { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'

interface ProviderType {
	children?: React.ReactNode
}

const ProviderConfig: FC<ProviderType> = ({ children }) => {
	return (
		<>
			<BrowserRouter>{children}</BrowserRouter>
		</>
	)
}

export default ProviderConfig
