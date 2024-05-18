import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './root'
import ProviderConfig from './tools/provider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<ProviderConfig>
		<Root />
	</ProviderConfig>
)
