import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { ListadoApp } from './components/ListadoApp'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<div style={{backgroundColor: 'black'}}>
<StrictMode>

<ListadoApp />

</StrictMode>
</div>)