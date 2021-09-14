import type { InferGetStaticPropsType } from 'next'
import getAllProducts from '@framework/product/getAllProducts'
import { getConfig } from '@framework/api/config'
export default function Home({
    products
}: InferGetStaticPropsType<typeof getStaticProps>) {
    console.log(getConfig())

    return (
        <div>
            <pre>{JSON.stringify(products, null, 2)}</pre>
        </div>
    )
}

export const getStaticProps = async () => {
    const products = await getAllProducts(getConfig())

    return {
        props: { products },
        revalidate: 4 * 60 * 60
    }
}
