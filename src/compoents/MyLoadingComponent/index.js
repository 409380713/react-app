import React from 'react';
export default function MyLoadingComponent({ error, pastDelay }) {
    console.log('pastDelay',pastDelay)
    if (error) {
        return (
            <div>Error!</div>
        )
    } else if (pastDelay) {
        return (
            // <div>loading...</div>
            null
        )
    } else {
        return null
    }
}