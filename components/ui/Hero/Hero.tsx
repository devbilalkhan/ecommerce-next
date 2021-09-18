import s from './Hero.module.css'
import Link from 'next/link'
import { Container } from '..'
interface HeroProps {
    title: string
    description: string
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
    return (
        <div className={s.root}>
            <Container>
                <div className={s.hero}>
                    <h2 className={s.headline}>{title}</h2>
                    <div className={s.descAndLink}>
                        <p className={s.paragraph}>{description}</p>
                        <Link href="/">
                            <a className={s.link}>Find more</a>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Hero
