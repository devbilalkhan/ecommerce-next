import React from 'react'
import s from './Grid.module.css'
interface GridProps {}

const Grid: React.FC<React.ReactNode> = ({ children }) => {
    return <div className={s.root}>{children}</div>
}

export default Grid
