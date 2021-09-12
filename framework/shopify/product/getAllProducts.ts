import getAllProductsQuery from '../utils/queries/getAllProductsQ'

const URL = 'http://localhost:4000/graphql'
type FetchParams = {
    query: string
}

const fetchApi = async ({ query }: FetchParams) => {
    const request = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query
        })
    })

    const data = await request.json()
    return { data }
}

const getAllProducts = async (): Promise<any[]> => {
    const products = await fetchApi({ query: getAllProductsQuery })

    return products.data
}

export default getAllProducts
