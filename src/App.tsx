import { Main } from '@/components'

const key = process.env.VITE_API_KEY

export const App = () => {
  return (
    <>
      <div>App</div>
      <div>{key}</div>
      <Main />
    </>
  )
}

export default App
