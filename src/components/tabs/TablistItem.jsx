import React from 'react'

const TablistItem = ({label}) => {
    return (
        <li role="presentation" style={{textDecoration: 'underline', color: '#fff'}}>
            <a>{label}</a>  
        </li>
    )
}

export default TablistItem
