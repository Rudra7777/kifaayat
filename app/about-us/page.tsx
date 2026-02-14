import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'About Us | Kifaayat — Curated Local Décor',
    description:
        'Discover the story behind Kifaayat — how we bring handcrafted, authentic Indian décor from local bazaars to your doorstep at fair prices.',
};

export default function AboutUs() {
    return (
        <main className="flex flex-col w-full overflow-x-hidden bg-brand-offwhite">

            {/* ─── Hero Banner ─── */}
            <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <Image
                    src="/images/About Us/Generated Image February 15, 2026 - 12_41AM.jpeg"
                    alt="The vibrant bazaars that inspire Kifaayat"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
                <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-sans uppercase tracking-[0.3em] text-brand-beige/80">
                            Our Story
                        </p>
                        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl !text-white leading-tight" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.5)' }}>
                            Bringing the Bazaar <br className="hidden md:block" /> to Your&nbsp;Home
                        </h1>
                        <p className="mt-6 max-w-xl mx-auto text-base md:text-lg text-brand-beige/80 font-sans leading-relaxed">
                            We scour India&rsquo;s most storied markets so you don&rsquo;t have to &mdash; curating authentic handcraft at prices that honour both maker and buyer.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── Why We Exist ─── */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
                    <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
                        <div className="relative aspect-[4/5] overflow-hidden bg-brand-beige">
                            <Image
                                src="/images/About Us/Generated Image February 15, 2026 - 12_45AM.jpeg"
                                alt="Artisan crafting handmade décor piece"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="mb-3 text-sm font-sans uppercase tracking-[0.25em] text-brand-terracotta">
                                Why We Exist
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark leading-snug">
                                Authentic Décor, <br /> Without the Hassle
                            </h2>
                            <div className="mt-8 space-y-5 text-brand-brown/80 font-sans leading-relaxed">
                                <p>
                                    India&rsquo;s bazaars are treasure troves of handcrafted beauty &mdash; intricate
                                    pottery, hand-loomed textiles, and sculptural art that carry centuries of
                                    tradition. But finding the right pieces means navigating crowded lanes,
                                    endless bargaining, and quality guesswork.
                                </p>
                                <p>
                                    <strong className="text-brand-dark">Kifaayat was born to bridge that gap.</strong>{' '}
                                    We do the walking, the talking, and the bargaining &mdash; so the only thing
                                    you need to worry about is where to place your new favourite piece.
                                </p>
                                <p>
                                    Every item in our collection has been hand-selected, quality-checked, and
                                    priced fairly — because beautiful homes shouldn&rsquo;t cost a fortune.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Our Values ─── */}
            <section className="bg-brand-beige">
                <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
                    <p className="mb-3 text-sm font-sans uppercase tracking-[0.25em] text-brand-terracotta">
                        What Drives Us
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-16">
                        Our Core Values
                    </h2>
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: '🤝',
                                title: 'Fair Pricing',
                                desc: 'We bargain hard so you pay a fair price — never inflated, never exploitative. Value for every rupee.',
                            },
                            {
                                icon: '✋',
                                title: 'Handcraft First',
                                desc: 'Every piece is made by skilled artisans using time-honoured techniques. No mass-produced imitations.',
                            },
                            {
                                icon: '🌿',
                                title: 'Sustainability',
                                desc: 'We champion eco-friendly materials and traditional methods that leave a lighter footprint on the planet.',
                            },
                            {
                                icon: '🏡',
                                title: 'Doorstep Delivery',
                                desc: 'From the bazaar to your living room — carefully packaged and delivered with care across India.',
                            },
                            {
                                icon: '🔍',
                                title: 'Quality Curated',
                                desc: 'Each item passes our rigorous quality check before it earns a spot in the Kifaayat collection.',
                            },
                            {
                                icon: '❤️',
                                title: 'Community Love',
                                desc: 'Your purchase directly supports local artisan families and keeps traditional crafts alive.',
                            },
                        ].map((v) => (
                            <div
                                key={v.title}
                                className="bg-white p-8 md:p-10 text-left hover:shadow-lg transition-shadow duration-300"
                            >
                                <span className="text-3xl">{v.icon}</span>
                                <h3 className="mt-5 font-serif text-xl text-brand-dark">{v.title}</h3>
                                <p className="mt-3 text-sm text-brand-brown/70 font-sans leading-relaxed">
                                    {v.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── How It Works ─── */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
                    <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <p className="mb-3 text-sm font-sans uppercase tracking-[0.25em] text-brand-terracotta">
                                How It Works
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark leading-snug">
                                From Bazaar to <br /> Your Doorstep
                            </h2>
                            <ol className="mt-10 space-y-8 font-sans">
                                {[
                                    {
                                        step: '01',
                                        title: 'We Source',
                                        desc: 'Our scouts visit local bazaars and artisan workshops across India to discover unique handcrafted pieces.',
                                    },
                                    {
                                        step: '02',
                                        title: 'We Curate',
                                        desc: 'Every item is inspected for quality, authenticity, and aesthetic appeal before it makes the cut.',
                                    },
                                    {
                                        step: '03',
                                        title: 'We Negotiate',
                                        desc: 'We bargain on your behalf to lock in the fairest possible price — no middlemen markups.',
                                    },
                                    {
                                        step: '04',
                                        title: 'You Enjoy',
                                        desc: 'Browse, order, and receive beautifully packaged décor at your doorstep. Hassle-free.',
                                    },
                                ].map((s) => (
                                    <li key={s.step} className="flex gap-5">
                                        <span className="flex-shrink-0 font-serif text-2xl text-brand-terracotta/40 leading-none mt-1">
                                            {s.step}
                                        </span>
                                        <div>
                                            <h3 className="text-lg font-medium text-brand-dark">{s.title}</h3>
                                            <p className="mt-1 text-sm text-brand-brown/70 leading-relaxed">
                                                {s.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden bg-brand-beige">
                            <Image
                                src="/images/About Us/Generated Image February 15, 2026 - 1_03AM.jpeg"
                                alt="Handcrafted items at a local Indian bazaar"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Promise Strip ─── */}
            <section className="bg-brand-dark text-white">
                <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
                    <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
                        <div className="relative aspect-video lg:aspect-[4/3] overflow-hidden">
                            <Image
                                src="/images/About Us/Generated Image February 15, 2026 - 1_07AM.jpeg"
                                alt="Our promise — quality and authenticity"
                                fill
                                className="object-cover opacity-90"
                            />
                        </div>
                        <div>
                            <p className="mb-3 text-sm font-sans uppercase tracking-[0.25em] text-brand-terracotta">
                                Our Promise
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl leading-snug">
                                Décor with Soul, <br /> Priced with&nbsp;Sense
                            </h2>
                            <p className="mt-6 text-brand-beige/70 font-sans leading-relaxed">
                                At Kifaayat, we believe that beautiful, meaningful décor shouldn&rsquo;t be a luxury.
                                Every piece we bring you supports a real artisan, carries a real story, and makes
                                a real difference in your space — all at a price that makes you smile.
                            </p>
                            <Link
                                href="/collection"
                                className="inline-block mt-8 bg-brand-terracotta px-10 py-4 text-white hover:bg-white hover:text-brand-dark transition-all duration-300 font-medium tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Explore Our Collection
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
