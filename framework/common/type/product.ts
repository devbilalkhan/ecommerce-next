export interface ProductImage {
    url: string
    alt?: string
}

export interface ProductPriceRange {
    value: number
    currencyCode: string
}
export interface Product {
    id: string
    name: string
    description: string
    slug: string
    path: string
    images: ProductImage[]
    price: ProductPriceRange
}
