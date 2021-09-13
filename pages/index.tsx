import type { InferGetStaticPropsType } from 'next'
import getAllProducts from '@framework/product/getAllProducts'
export default function Home({
    products
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div>
            <pre>{JSON.stringify(products, null, 2)}</pre>
        </div>
    )
}

export const getStaticProps = async () => {
    const products = await getAllProducts()

    return {
        props: { products },
        revalidate: 4 * 60 * 60
    }
}
