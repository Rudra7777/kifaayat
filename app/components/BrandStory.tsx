import Image from 'next/image';

export default function BrandStory() {
    return (
        <section className="bg-white text-brand-brown">
            {/* 1. WHY WE EXIST */}
            <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                    <div className="order-2 lg:order-1 relative aspect-[4/5] overflow-hidden bg-brand-beige">
                        {/* Placeholder for "Chaos of markets" vs "Calm of home" visual - using a high quality interior shot */}
                        <img
                            src="/images/artisan.png"
                            alt="A calm, curated living space"
                            className="h-full w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="font-serif text-4xl text-brand-dark md:text-5xl leading-tight">
                            Why finding good décor feels harder than it should.
                        </h2>
                        <div className="mt-8 space-y-6 text-lg font-light leading-relaxed text-brand-brown/80 font-sans">
                            <p>
                                To find something truly unique, you have to brave the chaos of the local bazaar.
                                It’s loud, crowded, and intimidating.
                            </p>
                            <p>
                                The alternative? Overpriced, mass-produced décor from big-box online stores that
                                makes your home look like everyone else's.
                            </p>
                            <p className="font-medium text-brand-dark">
                                We exist to bridge this gap. We bring the soul of the bazaar to your doorstep,
                                minus the chaos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. WHAT WE DO */}
            <div className="bg-brand-offwhite py-24">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h2 className="font-serif text-3xl text-brand-dark md:text-4xl">
                        We do the hard part. You enjoy the piece.
                    </h2>
                    <p className="mt-6 text-lg font-light leading-relaxed text-brand-brown/80 font-sans">
                        Our team scours the narrow lanes of local markets, handpicking hidden gems that
                        often go unnoticed. We apply a strict quality check, ensuring that every lamp,
                        vase, and wall art piece meets a retail-grade standard.
                    </p>
                </div>
            </div>

            {/* 3. USP (We bargain on your behalf) */}
            <div className="relative overflow-hidden py-32 bg-brand-dark text-brand-beige">
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}>
                </div> {/* Texture overlay */}

                <div className="relative mx-auto max-w-7xl px-6 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-serif text-5xl md:text-6xl !text-white mb-6">
                            We bargain <br />on your behalf.
                        </h2>
                        <div className="h-1 w-24 bg-brand-terracotta mx-auto lg:mx-0 mb-8"></div>
                        <p className="text-xl font-light text-white/80 leading-relaxed font-sans max-w-lg mx-auto lg:mx-0">
                            The hardest part of the bazaar isn't finding the item—it's the price negotiation.
                            We use our deep relationships with artisans to secure fair prices, removing the
                            inflated tourist markups. You pay for the craft, not the chaos.
                        </p>
                    </div>
                    <div className="relative h-80 lg:h-full min-h-[400px] border border-white/10 flex items-end p-8 overflow-hidden group">

                        {/* Background Image filling the box */}
                        <img
                            src="/images/fair_price.png"
                            alt="Fair Price Handshake"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Gradient Overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        {/* Content positioned at bottom */}
                        <div className="relative z-10 w-full text-left">
                            <div className="text-2xl font-serif text-white mb-2">Fair Price Guarantee</div>
                            <div className="text-white/80 font-sans text-sm leading-relaxed">
                                No hidden markups. <br />Direct from artisan to you.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
