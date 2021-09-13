const URL = 'http://localhost:4000/graphql'
type FetchParams = {
    query: string
}

type FetchReturn<T> = { data: T }

//fetch all products
const fetchApi = async <T>({ query }: FetchParams): Promise<FetchReturn<T>> => {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query
        })
    })

    const { data, errors } = await response.json()
    if (errors) throw new Error(errors[0].message ?? errors.message)
    console.log({ data })

    return { data }
}

export default fetchApi
