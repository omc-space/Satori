export function useCatalogState() {
  return useState<{ data: Catelog[], show: boolean }>('catelog', () => ({
    data: [],
    show: false,
  }))
}
