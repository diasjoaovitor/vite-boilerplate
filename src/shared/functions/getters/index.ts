export function getElementValues(
  e: React.FormEvent<HTMLFormElement>,
  elements: string[]
): string[] {
  return elements.map((elementName) => {
    const element = e.currentTarget.elements.namedItem(
      elementName
    ) as HTMLInputElement | null
    return element ? element.value : ''
  })
}
