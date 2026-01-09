'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the shape of a Cart Item
export interface CartItem {
    id: number;
    name: string;
    price: string; // Keeping as string for now to match mock data (e.g. "₹2,450")
    rawPrice: number; // For calculations
    image: string;
    category: string;
    tag: string;
    isUnique: boolean;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    cartCount: number;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    // Load from local storage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('kifaayat_cart');
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart data", e);
            }
        }
    }, []);

    // Save to local storage whenever items change
    useEffect(() => {
        localStorage.setItem('kifaayat_cart', JSON.stringify(items));
    }, [items]);

    const addToCart = (newItem: CartItem) => {
        setItems((prevItems) => {
            // If item is unique, check if it already exists
            if (newItem.isUnique) {
                const exists = prevItems.find((item) => item.id === newItem.id);
                if (exists) return prevItems; // Don't add if unique and already there
            }
            // For now, simplicity: just add to array (no qty > 1 logic yet for this simplified versions)
            // If we wanted quantity, we'd check ID and increment a qty field.
            // But requirement is "Quantity = 1" for unique items. 
            // We'll simplisticly assume everything is quantity 1 for now or check duplication.

            // Check if already in cart to prevent duplicates for unique items
            if (prevItems.some(item => item.id === newItem.id)) {
                return prevItems;
            }

            return [...prevItems, newItem];
        });
        setIsOpen(true); // Open cart sidebar or notify (optional, for now just tracking state)
    };

    const removeFromCart = (id: number) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const cartCount = items.length;

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, cartCount, isOpen, setIsOpen }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
