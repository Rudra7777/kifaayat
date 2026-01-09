export default function EmotionalSection() {
    return (
        <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
            {/* Background with Parallax effect */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: 'url("/images/cta.png")',
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 max-w-4xl px-6 text-center text-white">
                <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8 !text-white drop-shadow-md">
                    Your home deserves more than mass production.
                </h2>
                <p className="text-xl font-light md:text-2xl opacity-90 font-sans leading-relaxed text-white drop-shadow-sm">
                    Every scratch, every weave, every imperfection tells a story of a hand that made it.
                    Fill your space with warmth, identity, and soul.
                </p>
            </div>
        </section>
    );
}
