import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import Blank_2 from './pages/Blank_2'
import MainLayout from './layout/MainLayout'
import { data } from './constants'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Blank tableContent={data.dataTable} />} />
                    <Route path="matriz" element={<Blank_2 />} />      
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
