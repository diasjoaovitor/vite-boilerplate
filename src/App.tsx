import { Router } from './Router'
import { ThemeProvider } from './shared/contexts'

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  )
}

export default App
