import type { InferGetStaticPropsType } from 'next'
import getAllProducts from '@framework/product/getAllProducts'
import { getConfig } from '@framework/api/config'
import { Layout } from '@components/common'
import ProductCard from '@components/common/product/ProductCard/ProductCard'
import { Grid, Hero } from '@components/ui'

const description = `Cupcake ipsum dolor sit amet lemon drops pastry cotton candy. 
Sweet carrot cake macaroon bonbon croissant fruitcake jujubes macaroon oat cake. 
	Soufflé bonbon caramels jelly beans. Tiramisu sweet roll cheesecake pie carrot cake.`

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
            <Hero
                title="Dessert dragée halvah croissant"
                description={description}
            />
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
