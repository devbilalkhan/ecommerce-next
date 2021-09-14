import { ApiFetchArgs, ApiFetchResults } from '@common/type/api'

const URL = 'http://localhost:4000/graphql'

//fetch all products
const fetchApi = async <T>({
    url,
    query
}: ApiFetchArgs): Promise<ApiFetchResults<T>> => {
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

    return { data }
}

export default fetchApi
