import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Page2, Page3 } from './pages'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagina2" element={<Page2 />} />
        <Route path="/pagina3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  )
}
