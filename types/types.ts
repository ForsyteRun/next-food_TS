export type CardDataType = {
  id: number
  imageUrl: string
  name: string
  types: Array<number>
  sizes: Array<number>
  price: number
  category: number
  rating: number
}

export type shortCardDataType = {
  id: number
  img: string
  name: string
  type: string
  size: number
  price: number
}

export type sortItems = {
  value: string
  label: string
  id: number
}

export interface UrlObject {
  category: string
  sort: string
  p: string
  search: string
}
