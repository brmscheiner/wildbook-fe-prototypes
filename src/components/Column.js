import React from 'react'
import Paper from '@material-ui/core/Paper'

export default function Column({ children }) {
    return <div style={{ marginTop: 80, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Paper elevation={5} style={{ maxWidth: 600, width: '90%', paddingBottom: 40, marginBottom: 80 }}>
            {children}
        </Paper>
    </div>
}