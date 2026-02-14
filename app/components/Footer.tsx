import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-brand-brown text-brand-beige">
            {/* Final CTA Section */}
            <div className="border-b border-white/10">
                <div className="mx-auto max-w-7xl px-6 py-20 text-center">
                    <h2 className="mb-6 font-serif text-3xl md:text-4xl !text-white">
                        Discover décor with soul — without the stress of the bazaar.
                    </h2>
                    <Link href="/collection" className="inline-block mt-4 bg-brand-terracotta px-10 py-4 text-white hover:bg-white hover:text-brand-dark transition-all duration-300 font-medium tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Browse the Collection
                    </Link>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
                <div className="grid gap-12 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <span className="font-serif text-2xl font-bold text-white tracking-wide">Kifaayat.</span>
                        <p className="mt-6 max-w-sm text-sm opacity-70 font-sans leading-relaxed">
                            Curating the finest handcrafted home décor from local Indian bazaars.
                            We bargain on your behalf to bring you authentic pieces at fair prices.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-6 font-serif text-lg text-white">Shop</h3>
                        <ul className="space-y-4 text-sm opacity-70 font-sans">
                            <li><a href="#" className="hover:text-brand-terracotta transition-colors">New Arrivals</a></li>
                            <li><a href="#" className="hover:text-brand-terracotta transition-colors">Living Room</a></li>
                            <li><a href="#" className="hover:text-brand-terracotta transition-colors">Lighting</a></li>
                            <li><a href="#" className="hover:text-brand-terracotta transition-colors">Wall Art</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 font-serif text-lg text-white">Company</h3>
                        <ul className="space-y-4 text-sm opacity-70 font-sans">
                            <li><Link href="/about-us" className="hover:text-brand-terracotta transition-colors">About Us</Link></li>
                            <li><a href="#" className="hover:text-brand-terracotta transition-colors">Sustainability</a></li>
                            <li><a href="#" className="hover:text-brand-terracotta transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-brand-terracotta transition-colors">Returns</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center opacity-50 text-xs font-sans">
                    <p>&copy; {new Date().getFullYear()} Kifaayat. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
