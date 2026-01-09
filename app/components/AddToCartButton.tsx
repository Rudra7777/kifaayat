'use client';

import React, { useState } from 'react';
import { useCart, CartItem } from '../context/CartContext';
import { useRouter } from 'next/navigation';

export default function AddToCartButton({ product }: { product: CartItem }) {
    const { addToCart } = useCart();
    const [isAdding, setIsAdding] = useState(false);
    const router = useRouter();

    const handleAddToCart = () => {
        setIsAdding(true);
        addToCart(product);

        // Simulate a small delay for better UX ("Adding...") then redirect
        setTimeout(() => {
            setIsAdding(false);
            router.push('/cart');
        }, 600);
    };

    return (
        <div className="hidden lg:block mb-8">
            <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className="w-full bg-brand-dark text-brand-beige py-4 text-lg font-medium hover:bg-brand-brown transition-colors mb-3 disabled:opacity-80 disabled:cursor-wait"
            >
                {isAdding ? "Reserving..." : "Reserve this piece"}
            </button>
            <p className="text-center text-sm text-brand-brown/60 italic">
                This piece is unique — once sold, it won’t be restocked.
            </p>
        </div>
    );
}

// Separate component for Mobile Sticky Bar to avoid code duplication issues if needed, 
// or we can export two components from here.
export function MobileAddToCartButton({ product }: { product: CartItem }) {
    const { addToCart } = useCart();
    const router = useRouter();

    const handleAddToCart = () => {
        addToCart(product);
        router.push('/cart');
    };

    return (
        <button
            onClick={handleAddToCart}
            className="flex-1 bg-brand-dark text-brand-beige py-3 font-medium text-base shadow-sm active:bg-brand-brown"
        >
            Reserve this piece
        </button>
    );
}
