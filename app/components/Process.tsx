export default function Process() {
    const steps = [
        {
            id: 1,
            title: "Explore",
            desc: "We visit local markets and artisan workshops.",
            icon: "🔍"
        },
        {
            id: 2,
            title: "Handpick",
            desc: "We curate only the finest, authentic pieces.",
            icon: "✨"
        },
        {
            id: 3,
            title: "Negotiate",
            desc: "We bargain hard so you don't have to.",
            icon: "💬"
        },
        {
            id: 4,
            title: "Deliver",
            desc: "Quality-checked décor delivered to your door.",
            icon: "📦"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <h2 className="font-serif text-3xl text-brand-dark md:text-5xl">
                        How it works
                    </h2>
                    <div className="mt-4 h-0.5 w-20 bg-brand-terracotta mx-auto"></div>
                </div>

                <div className="grid gap-12 md:grid-cols-4 md:gap-8">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative flex flex-col items-center text-center group">
                            {/* Connector Line (Desktop only, except last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-brand-brown/10 -z-10" />
                            )}

                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-beige border border-brand-brown/10 text-2xl shadow-sm transition-transform group-hover:scale-110">
                                {step.icon}
                            </div>

                            <h3 className="mb-2 font-serif text-xl font-medium text-brand-dark">
                                {step.title}
                            </h3>

                            <p className="text-sm font-medium leading-relaxed text-brand-brown/80 font-sans max-w-[200px]">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
