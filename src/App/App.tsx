import { FC } from 'react'
import { Config, Home, Test } from '@/pages'
import '@/assets/css/App.css'
import { Routes, Route } from 'react-router-dom'

const App: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/config" element={<Config />} />
            <Route path="/test" element={<Test />} />
        </Routes>
    )
}

export default App
