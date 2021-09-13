import { fetchApi, normalizeProduct, getAllProductsQuery } from '../utils'
import { ProductConnection } from '../schema'
import { Product } from '@common/type/product'

type FetcherReturnType = {
    products: ProductConnection
}
const getAllProducts = async (): Promise<Product[]> => {
    const { data } = await fetchApi<FetcherReturnType>({
        query: getAllProductsQuery
    })
    const productList =
        data.products.edges.map(({ node: product }) => {
            return normalizeProduct(product)
        }) ?? []
    return productList
}

export default getAllProducts
