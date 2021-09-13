import {
    ImageConnection,
    ImageEdge,
    Product as ShopifyProduct
} from '../schema'

import { Product } from '../../common/type/product'
const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }): any =>
    edges.map(({ node: { originalSrc: url, ...rest } }) => ({
        url: `/images/${url}`,
        ...rest
    }))

const normalizeProduct = (productNode: ShopifyProduct): Product => {
    const {
        id,
        title: name,
        handle,
        vendor,
        description,
        images: imageConnection,
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
        ...rest
    }
    return product
}

export default normalizeProduct
