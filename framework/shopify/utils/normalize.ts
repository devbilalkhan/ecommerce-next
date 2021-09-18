import {
    ImageConnection,
    ImageEdge,
    ProductPriceRange,
    Product as ShopifyProduct,
    MoneyV2
} from '../schema'

import { Product } from '@common/type/product'
const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }): any =>
    edges.map(({ node: { originalSrc: url, ...rest } }) => ({
        url: `/images/${url}`,
        ...rest
    }))

const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2) => ({
    value: +amount,
    currencyCode
})

const normalizeProduct = (productNode: ShopifyProduct): Product => {
    const {
        id,
        title: name,
        handle,
        vendor,
        description,
        images: imageConnection,
        priceRange,
        ...rest
    } = productNode

    const product = {
        id,
        name,
        vendor,
        description,
        path: `/${handle}`,
        slug: handle.replace(/^\/+|\/+$/g, ''),
        images: normalizeProductImages(imageConnection),
        price: normalizeProductPrice(priceRange.minVariantPrice),
        ...rest
    }
    return product
}

export default normalizeProduct
