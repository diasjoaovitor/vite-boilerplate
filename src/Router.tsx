import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Login, Page2, Page3, Register } from './pages'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/entrar" element={<Login />} />
        <Route path="/registrar" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/pagina2" element={<Page2 />} />
        <Route path="/pagina3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  )
}
