export default function TrustStrip() {
    return (
        <div className="w-full border-b border-brand-brown/10 bg-brand-offwhite py-6">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6 text-center text-sm uppercase tracking-widest text-brand-brown/80 font-sans md:justify-between">
                <span>Handpicked from local bazaars</span>
                <span className="hidden md:block text-brand-terracotta/50">•</span>
                <span>Quality-checked</span>
                <span className="hidden md:block text-brand-terracotta/50">•</span>
                <span>Fair pricing (We bargain for you)</span>
                <span className="hidden md:block text-brand-terracotta/50">•</span>
                <span>One-of-a-kind pieces</span>
            </div>
        </div>
    );
}
