export interface NavigationItem {
  name: string
  path: string
  iconClass?: string
  children?: NavigationItem[]
}
