import React from 'react'

export const ControlledComponent = ({onClick, title}) => {
    return (
        <button onClick={onClick}>{title}</button>
    )
}
