import Image from 'next/image';
import Link from 'next/link';

const PRODUCTS = [
    {
        id: 5,
        name: "Ceramic Pickle Jar",
        price: "₹ 950",
        image: "/images/jar.png",
        tag: "Vintage"
    },
    {
        id: 1,
        name: "Vintage Brass Oil Lamp",
        price: "₹ 2,450",
        image: "/images/lamp.png",
        tag: "One-of-a-kind"
    },
    {
        id: 10,
        name: "Carved Wooden Mirror",
        price: "₹ 5,500",
        image: "/images/mirror_1.png",
        tag: "Rare Find"
    },
    {
        id: 4,
        name: "Hand-Carved Wooden Tray",
        price: "₹ 1,600",
        image: "/images/artisan.png",
        tag: "Artisan made"
    },
    {
        id: 2,
        name: "Kashmiri Embroidered Cushion",
        price: "₹ 1,850",
        image: "/images/cushion.png",
        tag: "Limited Stock"
    },
    {
        id: 11,
        name: "Sunburst Brass Mirror",
        price: "₹ 3,100",
        image: "/images/mirror_2.png",
        tag: "Vintage Style"
    }
];

export default function FeaturedCollection() {
    return (
        <section className="bg-brand-offwhite py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 flex items-end justify-between">
                    <div>
                        <h2 className="font-serif text-3xl text-brand-dark md:text-5xl">
                            Curated Finds
                        </h2>
                        <p className="mt-2 text-brand-brown/60 font-sans">Fresh from the market this week.</p>
                    </div>
                    <Link href="/collection" className="hidden text-sm font-medium uppercase tracking-widest text-brand-terracotta transition-colors hover:text-brand-dark md:block">
                        View All Products &rarr;
                    </Link>
                </div>

                <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {PRODUCTS.map((product) => (
                        <div key={product.id} className="group relative cursor-pointer">
                            <div className="relative aspect-[3/4] overflow-hidden bg-brand-beige">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs uppercase tracking-wider text-brand-dark backdrop-blur-sm z-10">
                                    {product.tag}
                                </div>

                                {/* Overlay Action */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20">
                                    <Link
                                        href={`/product/${product.id}`}
                                        className="bg-white px-6 py-3 text-sm font-medium uppercase tracking-wider text-brand-dark hover:bg-brand-terracotta hover:text-white transition-colors shadow-lg"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-4 flex justify-between items-start">
                                <div>
                                    <h3 className="font-serif text-lg text-brand-dark group-hover:text-brand-terracotta transition-colors">
                                        <Link href={`/product/${product.id}`}>
                                            {product.name}
                                        </Link>
                                    </h3>
                                    <p className="mt-1 text-sm text-brand-brown/60 font-sans">Authentic Handcrafted</p>
                                </div>
                                <span className="font-medium text-brand-dark font-sans">{product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/collection" className="inline-block w-full border border-brand-dark py-4 text-sm font-medium uppercase tracking-widest text-brand-dark hover:bg-brand-dark hover:text-white transition-colors">
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    );
}
