import { AppProps } from 'next/app'
import { FC } from 'react'
import '@assets/main.css'

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({
    Component,
    pageProps
}: AppProps & { Component: { Layout: FC } }) {
    const Layout = Component.Layout ?? Noop
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
