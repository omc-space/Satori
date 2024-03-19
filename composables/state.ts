export const useCatalogState = () => useState<{ data: Catelog[]; show: boolean }>('catelog', () => ({
  data: [],
  show: false,
}))
