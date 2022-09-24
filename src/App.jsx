import { HashRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import ProximosTorneos from './pages/proximosTorneos/ProximosTorneos'
import ComprarDiamantes from './pages/comprarDiamantes/ComprarDiamantes'
import Participantes from './pages/participantes/Participantes'
import Navbar from "./componentes/Navbar"

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="proximos-torneos" element={<ProximosTorneos />} />
        <Route path="comprar-diamantes" element={<ComprarDiamantes />} />
        <Route path="participantes" element={<Participantes />} />
      </Routes>
    </HashRouter>
  )
}

export default App