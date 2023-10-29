import { Router } from './Router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider, ThemeProvider } from './shared/contexts'

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
