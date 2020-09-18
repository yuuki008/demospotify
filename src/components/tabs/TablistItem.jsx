import React from 'react'
import {Link} from 'react-router-dom'

const TablistItem = ({label, path}) => {
    return (
        <Link to={path} role="presentation" style={{textDecoration: 'underline', color: '#fff'}}>
            <a>{label}</a>  
        </Link>
    )
}

export default TablistItem
