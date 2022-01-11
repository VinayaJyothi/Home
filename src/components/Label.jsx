import React from 'react'
import './label.css'

function Label (props) {
    const { className = 'textbox', children, ...rest } = props
    return (
        <label className={'input ${class}'} {...rest}>
            {children}
        </label>
    )
}

export default Label