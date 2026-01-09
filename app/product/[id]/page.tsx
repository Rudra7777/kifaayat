import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AddToCartButton, { MobileAddToCartButton } from '../../components/AddToCartButton';

// --- TYPES ---
interface ProductDetails {
    material: string;
    dimensions: string;
    weight: string;
    finish: string;
    care: string;
}

interface ProductStory {
    headline: string;
    content: string[];
}

interface ProductPricingContext {
    headline: string;
    content: string;
}

interface Product {
    id: number;
    name: string;
    price: string;
    tag: string;
    availability: string;
    images: string[];
    story: ProductStory;
    pricingContext: ProductPricingContext;
    details: ProductDetails;
}

interface ProductsData {
    [key: number]: Product;
}

// --- MOCK DATA ---
const PRODUCTS_DATA: ProductsData = {
    1: {
        id: 1,
        name: "Vintage Brass Oil Lamp",
        price: "₹2,450",
        tag: "One-of-a-kind • Artisan made",
        availability: "Only 1 piece available",
        images: ["/images/lamp.png", "/images/lamp_2.png"],
        story: {
            headline: "Why this piece is special",
            content: [
                "Sourced from the winding lanes of Old Delhi’s Sunday Bazaar, this brass oil lamp (Diya) carries the patina of decades. Unlike modern reproductions, it features heavy cast brass and intricate hand-engraved floral motifs that speak to a bygone era of craftsmanship.",
                "It was likely crafted by Thathera artisans—a community of metalworkers whose craft is inscribed on the UNESCO Intangible Cultural Heritage list. The weight of the piece in your hand instantly sets it apart from the hollow, mass-produced decor found in chain stores.",
                "Its imperfection is its signature. A small dent near the base and the natural darkening of the brass are not flaws, but proof of its history and use."
            ]
        },
        pricingContext: {
            headline: "Fairly priced, not inflated",
            content: "We discovered this piece buried under a pile of generic wares. The seller’s initial asking price was inflated for tourists. Because we understand the value of the brass weight and the intricacy of the engraving, we negotiated a fair price that honors the item's worth without the 'foreigner tax'. You pay for the craft, not the markup."
        },
        details: {
            material: "Solid Brass",
            dimensions: "Height: 12 inches | Base: 4.5 inches",
            weight: "1.2 kg",
            finish: "Antique, unpolished patina",
            care: "Wipe with a soft dry cloth. Avoid abrasive cleaners to maintain patina."
        }
    },
    2: {
        id: 2,
        name: "Kashmiri Embroidered Cushion",
        price: "₹1,850",
        tag: "Limited Stock",
        availability: "3 pieces available",
        images: ["/images/cushion.png", "/images/wall_hanging_2.png"],
        story: {
            headline: "A stitch in time",
            content: [
                "Hand-stitched in the valleys of Kashmir, this cushion cover features the traditional Aari embroidery. Each motif is created using a hooked needle, forming continuous loops of fine wool thread.",
                "The artisans work from memory, creating intricate floral patterns that reflect the natural beauty of the region. This isn't just a cushion; it's a canvas of heritage."
            ]
        },
        pricingContext: {
            headline: "Direct from the artisan",
            content: "By sourcing directly from a cooperative in Srinagar, we ensure that 80% of the price goes directly to the women artisans who crafted this piece, bypassing the usual chain of middlemen."
        },
        details: {
            material: "Wool on Cotton",
            dimensions: "16 x 16 inches",
            weight: "200g",
            finish: "Textured embroidery",
            care: "Dry clean only."
        }
    },
    3: {
        id: 3,
        name: "Antique Copper Vase",
        price: "₹3,200",
        tag: "One-of-a-kind",
        availability: "Only 1 piece available",
        images: ["/images/vase.png"],
        story: {
            headline: "Vessel of history",
            content: [
                "This copper vase has likely seen over fifty years of utility before becoming a decorative object. The oxidation on the surface is natural, developed slowly over decades of exposure to air and water.",
                "Its shape suggests it was originally used for storing water, which in Ayurveda is believed to have health benefits. Today, it stands as a testament to functional beauty."
            ]
        },
        pricingContext: {
            headline: "Value in weight",
            content: "Copper prices have surged, but we priced this based on its artistic value and our acquisition cost from a rural estate sale, keeping it accessible for collectors."
        },
        details: {
            material: "Pure Copper",
            dimensions: "Height: 10 inches",
            weight: "800g",
            finish: "Oxidized verdigris",
            care: "Clean with lemon and salt if brightness is desired, or leave as is for character."
        }
    },
    4: {
        id: 4,
        name: "Hand-Carved Wooden Tray",
        price: "₹1,600",
        tag: "Artisan made",
        availability: "2 pieces available",
        images: ["/images/artisan.png"],
        story: {
            headline: "Carved from memory",
            content: [
                "This tray is hewn from reclaimed teak wood, known for its durability and rich grain. The floral carvings on the rim are done by hand, using simple chisels.",
                "No two trays are exactly alike. The slight variations in the depth of the carving show the pressure of the artisan's hand."
            ]
        },
        pricingContext: {
            headline: "Sustainable luxury",
            content: "Using reclaimed wood reduces cost and environmental impact. We pass these savings on to you, offering a piece of solid teak furniture for the price of plywood."
        },
        details: {
            material: "Reclaimed Teak Wood",
            dimensions: "12 x 8 inches",
            weight: "600g",
            finish: "Matte wax polish",
            care: "Wipe clean. Apply beeswax once a year."
        }
    },
    5: {
        id: 5,
        name: "Ceramic Pickle Jar",
        price: "₹950",
        tag: "Vintage",
        availability: "Only 1 piece available",
        images: ["/images/jar.png"],
        story: {
            headline: "The flavor of tradition",
            content: [
                "A staple in Indian households for generations, these ceramic jars (barnis) were used to store pickles and chutneys. The ceramic material keeps the contents cool and preserved.",
                "The blue and white glaze is typical of Jaipur pottery, influenced by Persian ceramics but distinctly Indian in execution."
            ]
        },
        pricingContext: {
            headline: "Accessible heritage",
            content: "We found a batch of these in an old warehouse. We believe heritage should be affordable, so we've kept the margin minimal to help find them new homes."
        },
        details: {
            material: "Glazed Ceramic",
            dimensions: "Height: 8 inches",
            weight: "1.5 kg",
            finish: "Glossy Glaze",
            care: "Hand wash with mild soap."
        }
    },
    6: {
        id: 6,
        name: "Woven Jute Wall Hanging",
        price: "₹2,100",
        tag: "One-of-a-kind",
        availability: "Only 1 piece available",
        images: ["/images/wall_hanging.png"],
        story: {
            headline: "Earth tones",
            content: [
                "Woven from natural jute fibers, this wall hanging brings the warmth of the earth indoors. The knotting technique is a local variation of macramé.",
                "It adds texture and acoustic softness to any room, perfect for breaking up the monotony of flat walls."
            ]
        },
        pricingContext: {
            headline: "Fair labor",
            content: "Weaving jute is labor-intensive. Our pricing reflects a fair daily wage for the weaver, not just the cost of the raw fiber."
        },
        details: {
            material: "Natural Jute Fiber",
            dimensions: "24 x 18 inches",
            weight: "500g",
            finish: "Raw fiber",
            care: "Dust with a soft brush or vacuum on low setting."
        }
    },
    7: {
        id: 7,
        name: "Etched Brass Table Lamp",
        price: "₹3,800",
        tag: "Timeless",
        availability: "Only 1 piece available",
        images: ["/images/lamp_2.png"],
        story: {
            headline: "Golden hour, always",
            content: [
                "This table lamp features a glass chimney protected by an etched brass shield. When lit, the etching casts lace-like shadows on the surrounding walls.",
                "It evokes the atmosphere of colonial-era dak bungalows and library reading rooms."
            ]
        },
        pricingContext: {
            headline: "Complex craft",
            content: "The price accounts for the two distinct skills required: glass blowing for the chimney and precision metal etching for the body."
        },
        details: {
            material: "Brass and Glass",
            dimensions: "Height: 14 inches",
            weight: "1.8 kg",
            finish: "Polished Brass",
            care: "Dust gently. Glass cleaner for the chimney."
        }
    },
    8: {
        id: 8,
        name: "Mosaic Glass Lantern",
        price: "₹1,450",
        tag: "Handcrafted",
        availability: "5 pieces available",
        images: ["/images/lamp_3.png"],
        story: {
            headline: "Kaleidoscope of light",
            content: [
                "Hundreds of small, hand-cut glass pieces are cemented onto a glass bowl to create this lantern. When illuminated, it bathes the room in a warm, multi-colored glow.",
                "Inspired by Turkish designs but crafted by artisans in Firozabad, India's city of glass."
            ]
        },
        pricingContext: {
            headline: "Direct import prices",
            content: "Comparable lanterns in boutique stores sell for double. We source from the Firozabad factory directly."
        },
        details: {
            material: "Glass and Cement",
            dimensions: "Diameter: 8 inches",
            weight: "1 kg",
            finish: "Textured Mosaic",
            care: "Wipe with a damp cloth."
        }
    },
    9: {
        id: 9,
        name: "Rajasthani Fabric Wall Art",
        price: "₹4,200",
        tag: "Statement Piece",
        availability: "Only 1 piece available",
        images: ["/images/wall_hanging_2.png"],
        story: {
            headline: "Stories in thread",
            content: [
                "This large textile piece is a vintage 'Toran' or door hanging, repurposed as wall art. It features motifs of elephants and peacocks, symbols of prosperity and grace in Rajasthan.",
                "The vibrant colors are derived from natural dyes, and the mirror work (abhla bharat) is intended to deflect the evil eye."
            ]
        },
        pricingContext: {
            headline: "Vintage value",
            content: "You are paying for the age and condition of this vintage textile. New pieces do not have the same color depth or density of embroidery."
        },
        details: {
            material: "Cotton and Silk thread",
            dimensions: "36 x 24 inches",
            weight: "400g",
            finish: "Vintage textile",
            care: "Keep away from direct sunlight."
        }
    },
    10: {
        id: 10,
        name: "Carved Wooden Mirror",
        price: "₹5,500",
        tag: "Rare Find",
        availability: "Only 1 piece available",
        images: ["/images/mirror_1.png"],
        story: {
            headline: "Reflecting heritage",
            content: [
                "The frame of this mirror is salvaged from an old Haveli window frame. The wood is dense, likely Rosewood or old Teak, and features deep relief carving.",
                "Repurposing architectural salvage into home decor preserves the craftsmanship of buildings that no longer exist."
            ]
        },
        pricingContext: {
            headline: "Salvage pricing",
            content: "Architectural salvage is expensive to source and restore. We've balanced the restoration costs to offer a fair price for a piece of history."
        },
        details: {
            material: "Reclaimed Hardwood",
            dimensions: "Diameter: 22 inches",
            weight: "3.5 kg",
            finish: "Dark wood stain",
            care: "Clean mirror with glass cleaner. Wood polish for frame."
        }
    },
    11: {
        id: 11,
        name: "Sunburst Brass Mirror",
        price: "₹3,100",
        tag: "Vintage Style",
        availability: "2 pieces available",
        images: ["/images/mirror_2.png"],
        story: {
            headline: "Mid-century India",
            content: [
                "The sunburst motif became popular in Indian decor in the 60s and 70s. This brass framed mirror captures that retro elegance.",
                "It serves as a striking focal point in an entryway or above a console table."
            ]
        },
        pricingContext: {
            headline: "Material worth",
            content: "Solid brass framing is becoming rare. This price reflects the raw material cost and the detailed metalworking."
        },
        details: {
            material: "Brass and Glass",
            dimensions: "Diameter: 18 inches",
            weight: "2 kg",
            finish: "Brushed Brass",
            care: "Brass polish to maintain shine."
        }
    }
};

type Props = {
    params: Promise<{
        id: string;
    }>;
};

// --- STATIC GENERATION PARAMS ---
export async function generateStaticParams() {
    return Object.keys(PRODUCTS_DATA).map((id) => ({
        id: id,
    }));
}

export default async function ProductPage({ params }: Props) {
    // Determine product ID. Fallback is handled, but try to find the exact match first.
    // If ID is not found in data, we can either show 404 or a fallback (ID 1).
    // For this demo, let's keep the fallback to ID 1 to avoid broken pages if user types random IDs,
    // but ideally we should show 404 for production.
    const resolvedParams = await params;
    const productId = Number(resolvedParams.id);
    const product = PRODUCTS_DATA[productId] || PRODUCTS_DATA[1];

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-brand-beige text-brand-brown font-sans selection:bg-brand-terracotta selection:text-white pb-32 md:pb-0">

            <div className="mx-auto max-w-7xl px-0 md:px-6 md:pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-start">

                    import {getBasePath} from '../../utils/basePath';

                    // ... (existing content)

                    {/* 1. HERO - LEFT COLUMN (GALLERY) */}
                    <div className="sticky top-0 lg:static z-0 bg-brand-beige">
                        <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-brown/5">
                            <Image
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Thumbnails (Desktop only for now) */}
                        <div className="hidden lg:flex gap-4 mt-6">
                            {product.images.map((img: string, i: number) => (
                                <div key={i} className={`relative h-24 w-24 overflow-hidden border ${i === 0 ? 'border-brand-terracotta' : 'border-transparent'} cursor-pointer opacity-90 hover:opacity-100`}>
                                    <Image src={img} alt="Detail" fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2. HERO - RIGHT COLUMN (IDENTITY & STORY) */}
                    <div className="px-6 py-8 md:py-0 lg:pt-8 bg-brand-beige relative z-10">

                        {/* IDENTITY */}
                        <header className="mb-12 border-b border-brand-brown/10 pb-8">
                            <h1 className="font-serif text-3xl md:text-5xl text-brand-dark mb-4 leading-tight">
                                {product.name}
                            </h1>
                            <div className="flex flex-col gap-2">
                                <span className="font-serif text-2xl text-brand-dark">
                                    {product.price}
                                </span>
                                <span className="text-sm font-medium tracking-wide text-brand-brown/60 uppercase">
                                    {product.tag}
                                </span>
                                <span className="text-xs font-medium text-brand-terracotta mt-1">
                                    ● {product.availability}
                                </span>
                            </div>
                        </header>

                        {/* 3. PRODUCT STORY */}
                        <section className="mb-12">
                            <h2 className="font-serif text-2xl text-brand-dark mb-6">
                                {product.story.headline}
                            </h2>
                            <div className="space-y-4 text-brand-brown/80 text-lg font-light leading-relaxed">
                                {product.story.content.map((paragraph: string, i: number) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                            </div>
                        </section>

                        {/* 4. FAIR PRICING */}
                        <section className="mb-12 bg-brand-brown/5 p-6 md:p-8 rounded-sm">
                            <h3 className="font-serif text-xl text-brand-dark mb-3">
                                {product.pricingContext.headline}
                            </h3>
                            <p className="text-brand-brown/80 font-light leading-relaxed">
                                {product.pricingContext.content}
                            </p>
                        </section>

                        {/* 5. DETAILS */}
                        <section className="mb-12 border-t border-brand-brown/10 pt-8">
                            <h3 className="font-serif text-xl text-brand-dark mb-6">Details</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                <li className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider text-brand-brown/50 mb-1">Material</span>
                                    <span className="text-brand-dark">{product.details.material}</span>
                                </li>
                                <li className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider text-brand-brown/50 mb-1">Dimensions</span>
                                    <span className="text-brand-dark">{product.details.dimensions}</span>
                                </li>
                                <li className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider text-brand-brown/50 mb-1">Weight</span>
                                    <span className="text-brand-dark">{product.details.weight}</span>
                                </li>
                                <li className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider text-brand-brown/50 mb-1">Care</span>
                                    <span className="text-brand-dark">{product.details.care}</span>
                                </li>
                            </ul>
                        </section>

                        {/* 6. TRUST */}
                        <section className="mb-16">
                            <h3 className="font-serif text-xl text-brand-dark mb-6">What you can expect</h3>
                            <ul className="space-y-3">
                                {[
                                    "Handpicked & personally quality-checked",
                                    "Sourced directly from artisans (no middlemen)",
                                    "Fair pricing through honest negotiation",
                                    "Secure payments & safe packaging"
                                ].map((item: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3 text-brand-brown/80 font-light">
                                        <span className="text-brand-terracotta mt-1">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* 7. DESKTOP CTA (Client Component) */}
                        <AddToCartButton
                            product={{
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                rawPrice: parseInt(product.price.replace(/[^0-9]/g, '')),
                                image: product.images[0],
                                category: "Décor", // Simplified for now
                                tag: product.tag,
                                isUnique: true
                            }}
                        />

                        {/* 8. BACK LINK */}
                        <div className="pt-8 border-t border-brand-brown/10">
                            <Link href="/collection" className="text-brand-dark hover:text-brand-terracotta transition-colors font-medium flex items-center gap-2">
                                ← Back to collection
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* 7. MOBILE STICKY CTA */}
            <div className="lg:hidden fixed bottom-0 left-0 w-full bg-brand-beige border-t border-brand-brown/10 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <div className="font-serif text-lg text-brand-dark">{product.price}</div>
                        <div className="text-xs text-brand-brown/60">Only 1 available</div>
                    </div>
                    <MobileAddToCartButton
                        product={{
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            rawPrice: parseInt(product.price.replace(/[^0-9]/g, '')),
                            image: product.images[0],
                            category: "Décor",
                            tag: product.tag,
                            isUnique: true
                        }}
                    />
                </div>
            </div>

        </main>
    );
}
