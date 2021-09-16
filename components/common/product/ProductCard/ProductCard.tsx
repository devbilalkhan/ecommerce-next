import { Product } from '@common/type/product'
import Link from 'next/link'
import Image from 'next/image'
interface ProductCardProps {
    product: Product
}

const placeholderImage = '/product-image-placeholder.svg'
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Link href={`/product/${product.slug}`}>
            <a>
                <div>
                    <h3>
                        <span>{product.name}</span>
                    </h3>
                    <span>$14</span>
                    {product.images && (
                        <Image
                            alt={product.name ?? 'product image'}
                            src={product.images[0].url ?? placeholderImage}
                            height={400}
                            width={400}
                            quality="85"
                            layout="responsive"
                        />
                    )}
                </div>
            </a>
        </Link>
    )
}

export default ProductCard
