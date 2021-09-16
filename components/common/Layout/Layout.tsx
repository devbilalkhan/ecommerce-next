import { FC } from 'react'
import './Layout.module.css'
const Layout: FC = ({ children }) => {
    return <main className="root">{children}</main>
}

export default Layout
