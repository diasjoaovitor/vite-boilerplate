import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Login, Page2, Page3, Register } from './pages'
import { PrivateRoute } from './shared/contexts'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/entrar" element={<Login />} />
        <Route path="/registrar" element={<Register />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/pagina2" element={<PrivateRoute />}>
          <Route path="/pagina2" element={<Page2 />} />
        </Route>
        <Route path="/pagina3" element={<PrivateRoute />}>
          <Route path="/pagina3" element={<Page3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
