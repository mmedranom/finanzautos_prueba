import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import Blank_2 from './pages/Blank_2'
import Blank_3 from './pages/Blank_3'
import MainLayout from './layout/MainLayout'
import { data } from './constants'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Blank tableContent={data.dataTable} />} />
                    <Route path="matriz" element={<Blank_2 />} />
                    <Route path="pdf" element={<Blank_3 companyDetails= {data.dataTable[1]} />} />      
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
