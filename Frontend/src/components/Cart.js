import React from 'react';

export default function Cart({cart}) {
    return (
        <>
        <svg color='#fff' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
        </svg>
        <span style={{color: "black"}}>{cart.length}</span>
        </>
    )
}