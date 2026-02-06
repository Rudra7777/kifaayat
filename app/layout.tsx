import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Kifaayat | Curated Local Décor',
    description: 'Handpicked home décor from local artisans and bazaars, curated for modern homes.',
};

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

// ... (existing imports)

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <body className="antialiased min-h-screen flex flex-col bg-brand-beige">
                <CartProvider>
                    <Navbar />
                    <div className="flex-1">
                        {children}
                    </div>
                    <Footer />
                </CartProvider>
            </body>
            <GoogleAnalytics gaId="G-R609L6TTTB" />
        </html>
    );
}
