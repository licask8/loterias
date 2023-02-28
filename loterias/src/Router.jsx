import {Mega} from './pages/mega'
import {Quina} from './pages/quina'
import {TimeMania} from './pages/timeMania'
import {LotoFacil} from './pages/lotoFacil'
import {LotoMania} from './pages/lotoMania'
import {DiaDeSorte} from './pages/diaDeSorte'
import { Routes, Route } from 'react-router-dom'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Mega />} />
            <Route path='/quina' element={<Quina />} />
            <Route path='/lotofacil' element={<LotoFacil />} />
            <Route path='/lotomania' element={<LotoMania />} />
            <Route path='/timemania' element={<TimeMania />} />
            <Route path='/dia-de-sorte' element={<DiaDeSorte />} />
        </Routes>
    )
}