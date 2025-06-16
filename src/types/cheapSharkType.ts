export interface Deal {
  dealID: string
  title: string
  storeID: string
  gameID: string
  salePrice: string
  normalPrice: string
  savings: string
  thumb: string
}

export interface Store {
  storeID: string
  storeName: string
  isActive: number
  images: {
    banner: string
    icon: string
    logo: string
  }
}
