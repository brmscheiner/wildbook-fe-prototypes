import React from 'react'

export default function Column({ children }) {
    return <div style={{ marginTop: 64, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: 420 }}>
            {children}
        </div>
    </div>
}