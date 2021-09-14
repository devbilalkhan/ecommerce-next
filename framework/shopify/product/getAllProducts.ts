import { fetchApi, normalizeProduct, getAllProductsQuery } from '../utils'
import { ProductConnection } from '../schema'
import { Product } from '@common/type/product'
import { ApiConfig } from '@common/type/api'

type FetcherReturnType = {
    products: ProductConnection
}
const getAllProducts = async (apiConfig: ApiConfig): Promise<Product[]> => {
    const { data } = await apiConfig.fetch<FetcherReturnType>({
        url: apiConfig.apiUrl,
        query: getAllProductsQuery
    })
    const productList =
        data.products.edges.map(({ node: product }) => {
            return normalizeProduct(product)
        }) ?? []
    return productList
}

export default getAllProducts
