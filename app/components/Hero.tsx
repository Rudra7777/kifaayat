import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative h-[90vh] w-full bg-brand-beige overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/images/hero.png")',
                }}
            >
                <div className="absolute inset-0 bg-black/50" /> {/* Darker overlay for text readability */}
            </div>



            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-end justify-center px-6 md:px-20 max-w-7xl mx-auto text-right">
                <h1 className="max-w-3xl text-5xl font-medium leading-tight !text-white md:text-7xl font-serif animate-fade-in-up drop-shadow-md">
                    The local décor bazaar, <br />
                    <span className="italic">curated for modern homes.</span>
                </h1>

                <p className="mt-6 max-w-xl text-lg font-light !text-white/95 md:text-xl font-sans animate-fade-in-up delay-100 drop-shadow-sm ml-auto">
                    We handpick authentic décor from local artisans and street markets — and bargain on your behalf.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in-up delay-200 justify-end">
                    <Link href="/collection" className="group relative overflow-hidden bg-brand-offwhite px-8 py-4 text-brand-dark transition-transform hover:scale-[1.02] shadow-lg text-center">
                        <span className="relative z-10 font-medium font-sans tracking-wide">Explore the Collection</span>
                    </Link>

                    <button className="group flex items-center gap-2 px-8 py-4 !text-white hover:!text-brand-terracotta transition-colors backdrop-blur-sm bg-white/10">
                        <span className="font-medium font-sans tracking-wide border-b border-white/40 pb-0.5 group-hover:border-brand-terracotta">See how it works</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
