export type PriceItem = {
  id?: string
  category_id?: string
  name: string
  price: string | null
  sort_order: number
  is_active: boolean
}

export type PriceCategory = {
  id?: string
  title: string
  description: string | null
  sort_order: number
  is_active: boolean
  price_items?: PriceItem[]
  services?: PriceItem[]
}
