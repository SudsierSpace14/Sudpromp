import React from 'react'

interface Props {
    msg: string
}

export const Error: React.FC<Props> = ({ msg }) => {
    return (
        <div className='p-4 bg-red-400 border-2 border-red-900'>
            {msg}
        </div>
    )
}
