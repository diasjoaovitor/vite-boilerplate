import { useEffect, useState } from 'react'

export function useAppBar(md: boolean) {
  const [isOpened, setIsOpened] = useState(md)

  useEffect(() => {
    setIsOpened(md)
  }, [md])

  const handleOpen = () => setIsOpened((IsOpened) => !IsOpened)

  return { isOpened, handleOpen }
}
