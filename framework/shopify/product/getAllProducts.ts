import fetchApi from '../utils/fetchapi'
import getAllProductsQuery from '../utils/queries/getAllProductsQ'
import { ProductConnection } from '../schema'
import normalizeProduct from '../utils/normalize'
import { Product } from '../../common/type/product'

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
