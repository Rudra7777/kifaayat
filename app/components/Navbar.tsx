'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Navbar() {
    const { cartCount } = useCart();

    return (
        <nav className="sticky top-0 z-40 w-full bg-brand-beige/95 backdrop-blur-sm border-b border-brand-brown/10">
            <div className="mx-auto max-w-7xl px-6 h-16 md:h-20 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="font-serif text-2xl md:text-3xl text-brand-dark tracking-tight">
                    Kifaayat
                </Link>

                {/* Desktop Nav */}
                <div className="flex items-center gap-6 md:gap-8">
                    <Link href="/collection" className="text-sm font-medium text-brand-brown/70 hover:text-brand-dark transition-colors">
                        Collection
                    </Link>

                    <Link href="/cart" className="relative group">
                        <span className="sr-only">Cart</span>
                        <svg className="w-6 h-6 text-brand-dark group-hover:text-brand-terracotta transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        {/* Notification Dot (Dynamic) */}
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-terracotta text-[9px] font-bold text-white">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
