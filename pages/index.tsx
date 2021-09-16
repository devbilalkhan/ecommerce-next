import type { InferGetStaticPropsType } from 'next'
import getAllProducts from '@framework/product/getAllProducts'
import { getConfig } from '@framework/api/config'
import { Layout } from '@components/common'
import ProductCard from '@components/common/product/ProductCard/ProductCard'
import { Grid } from '@components/ui'

export default function Home({
    products
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div>
            <Grid>
                {products.slice(0, 3).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Grid>
        </div>
    )
}

Home.Layout = Layout
export const getStaticProps = async () => {
    const products = await getAllProducts(getConfig())

    return {
        props: { products },
        revalidate: 4 * 60 * 60
    }
}
