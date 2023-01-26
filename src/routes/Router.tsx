import { FC } from "react"
import { Routes, Route } from 'react-router-dom'
import { Config, Home, Test } from '@/pages'

export const Router: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/config" element={<Config />} />
            <Route path="/test" element={<Test />} />
        </Routes>
    )
}

