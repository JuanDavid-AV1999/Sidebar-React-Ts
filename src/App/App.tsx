import { FC } from 'react'
import { Template } from '@/components'
import { Router } from '@/routes/Router'
import '@/assets/css/App.css'

const App: FC = () => {
    return (
        <Template>
            <Router />
        </Template>
    )
}

export default App
