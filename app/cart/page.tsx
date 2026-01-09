'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export default function CartPage() {
    const { items, removeFromCart } = useCart();

    const subtotal = items.reduce((sum, item) => {
        // Parse the price string (e.g. "₹2,450" -> 2450) if rawPrice isn't consistent, 
        // but we saved rawPrice in the Context.
        return sum + (item.rawPrice || 0);
    }, 0);

    // Format helper
    const formatPrice = (p: number) => `₹${p.toLocaleString('en-IN')}`;

    const formattedSubtotal = formatPrice(subtotal);
    const formattedTotal = formattedSubtotal; // Simplified logic

    if (items.length === 0) {
        return (
            <main className="min-h-screen bg-brand-beige text-brand-brown font-sans selection:bg-brand-terracotta selection:text-white pb-32 md:pb-16 flex flex-col items-center justify-center">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <h1 className="font-serif text-3xl md:text-5xl text-brand-dark mb-6">
                        Your cart is empty
                    </h1>
                    <p className="text-brand-brown/70 font-light text-lg mb-8">
                        The artisans are waiting. Discover something unique.
                    </p>
                    <Link href="/collection" className="inline-block bg-brand-dark text-brand-beige px-8 py-4 text-lg font-medium hover:bg-brand-brown transition-colors">
                        Browse the Collection
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-brand-beige text-brand-brown font-sans selection:bg-brand-terracotta selection:text-white pb-32 md:pb-16">

            <div className="mx-auto max-w-7xl px-6 pt-12 md:pt-16">

                {/* 1. PAGE HEADER */}
                <header className="mb-12 border-b border-brand-brown/10 pb-8">
                    <h1 className="font-serif text-3xl md:text-5xl text-brand-dark mb-3">
                        Your selected pieces
                    </h1>
                    <p className="text-brand-brown/70 font-light text-lg">
                        Each item in your cart has been handpicked and fairly priced.
                    </p>
                </header>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

                    {/* 2. CART ITEMS LIST (Left Column) */}
                    <div className="flex-1 w-full space-y-12">
                        {items.map((item) => (
                            <div key={item.id} className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start pb-12 border-b border-brand-brown/5 last:border-0 last:pb-0">
                                {/* Thumbnail */}
                                <div className="relative w-32 h-32 md:w-40 md:h-40 bg-brand-brown/5 flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Details */}
                                <div className="flex-1 w-full">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="font-serif text-xl text-brand-dark mb-1">
                                                <Link href={`/product/${item.id}`} className="hover:text-brand-terracotta transition-colors">
                                                    {item.name}
                                                </Link>
                                            </h3>
                                            <p className="text-sm text-brand-brown/50 uppercase tracking-wide mb-3">
                                                {item.category}
                                            </p>
                                        </div>
                                        <div className="font-serif text-xl text-brand-dark">
                                            {item.price}
                                        </div>
                                    </div>

                                    {/* Tags & Context */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="bg-brand-brown/5 px-2 py-1 text-xs font-medium uppercase tracking-wider text-brand-dark">
                                            {item.tag}
                                        </span>
                                    </div>

                                    {/* Product Context Note */}
                                    {item.isUnique && (
                                        <p className="text-sm text-brand-brown/70 italic mb-6">
                                            This piece is unique and sourced in limited quantity.
                                        </p>
                                    )}

                                    {/* Controls */}
                                    <div className="flex items-center justify-between sm:justify-start sm:gap-12">
                                        {/* Quantity (Static/Disabled for uniqueness) */}
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm text-brand-brown/50">Qty</span>
                                            <div className="flex items-center border border-brand-brown/20 px-3 py-1 bg-white/50">
                                                <span className="text-brand-dark font-medium">1</span>
                                            </div>
                                        </div>

                                        {/* Remove Link */}
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-sm text-brand-brown/50 hover:text-brand-terracotta underline underline-offset-4 transition-colors"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Secondary Nav (Desktop) */}
                        <div className="hidden md:block pt-6">
                            <Link href="/collection" className="text-brand-dark hover:text-brand-terracotta transition-colors font-medium flex items-center gap-2">
                                ← Continue browsing
                            </Link>
                        </div>
                    </div>

                    {/* 3. ORDER SUMMARY (Right Column) */}
                    <div className="w-full lg:w-96 sticky top-24">
                        <div className="bg-brand-brown/5 p-8 rounded-sm">
                            <h2 className="font-serif text-2xl text-brand-dark mb-6">Summary</h2>

                            <div className="space-y-4 mb-6 border-b border-brand-brown/10 pb-6">
                                <div className="flex justify-between items-center text-brand-brown/80 font-light">
                                    <span>Subtotal</span>
                                    <span>{formattedSubtotal}</span>
                                </div>
                                <div className="flex justify-between items-center text-brand-brown/80 font-light">
                                    <span>Shipping</span>
                                    <span className="text-sm text-brand-brown/50 italic">Calculated at checkout</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-8">
                                <span className="font-serif text-xl text-brand-dark">Total</span>
                                <span className="font-serif text-xl text-brand-dark">{formattedTotal}</span>
                            </div>

                            {/* Trust Strip */}
                            <div className="mb-8 p-4 border border-brand-brown/10 bg-brand-beige/50">
                                <p className="text-xs font-medium uppercase tracking-wider text-brand-brown/50 mb-3">
                                    What you can expect
                                </p>
                                <ul className="space-y-2 text-sm text-brand-brown/70 font-light">
                                    <li className="flex gap-2">
                                        <span className="text-brand-terracotta">✓</span> Handpicked & quality-checked
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-brand-terracotta">✓</span> Fair pricing
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-brand-terracotta">✓</span> Secure payments
                                    </li>
                                </ul>
                            </div>

                            {/* Desktop CTA */}
                            <div className="hidden lg:block">
                                <button className="w-full bg-brand-dark text-brand-beige py-4 text-lg font-medium hover:bg-brand-brown transition-colors mb-2">
                                    Proceed to Checkout
                                </button>
                                <p className="text-center text-xs text-brand-brown/50 flex items-center justify-center gap-1">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                    Secure checkout. No account required.
                                </p>
                            </div>
                        </div>

                        {/* Mobile Secondary Nav (Below summary on mobile) */}
                        <div className="md:hidden pt-8 text-center pb-8">
                            <Link href="/collection" className="text-brand-dark hover:text-brand-terracotta transition-colors font-medium">
                                ← Continue browsing
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* 4. MOBILE STICKY CTA */}
            <div className="lg:hidden fixed bottom-0 left-0 w-full bg-brand-beige border-t border-brand-brown/10 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center text-brand-dark font-serif">
                        <span>Total</span>
                        <span>{formattedTotal}</span>
                    </div>
                    <button className="w-full bg-brand-dark text-brand-beige py-3 font-medium text-base shadow-sm">
                        Proceed to Checkout
                    </button>
                    <p className="text-center text-[10px] text-brand-brown/50 uppercase tracking-widest">
                        Secure Checkout
                    </p>
                </div>
            </div>

        </main>
    );
}
