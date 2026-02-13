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
// --- MOCK DATA ---
const PRODUCTS_DATA: ProductsData = {
    1: {
        id: 1,
        name: "Vintage Brass Oil Lamp",
        price: "₹999",
        tag: "One-of-a-kind • Artisan made",
        availability: "Only 1 piece available",
        images: ["/images/wiki_lamp.jpg", "/images/wiki_lamp.jpg"],
        story: {
            headline: "Why this piece is special",
            content: [
                "Sourced from the winding lanes of Old Delhi’s Sunday Bazaar, this brass oil lamp (Diya) carries the patina of decades. Unlike modern reproductions, it features heavy cast brass and intricate floral motifs.",
                "It was crafted by Thathera artisans—metalworkers whose craft is inscribed on the UNESCO Intangible Cultural Heritage list. The weight of the piece instantly sets it apart.",
                "Its imperfection is its signature. A small dent near the base and the natural darkening of the brass are proof of its history."
            ]
        },
        pricingContext: {
            headline: "Fairly priced",
            content: "We negotiated a price that honors the item's worth without the 'foreigner tax'. You pay for the craft, not the markup."
        },
        details: {
            material: "Solid Brass",
            dimensions: "Height: 12 inches | Base: 4.5 inches",
            weight: "1.2 kg",
            finish: "Antique patina",
            care: "Wipe with a soft dry cloth."
        }
    },
    2: {
        id: 2,
        name: "Kashmiri Embroidered Cushion",
        price: "₹899",
        tag: "Limited Stock",
        availability: "3 pieces available",
        images: ["/images/wiki_cushion.jpg", "/images/wiki_cushion.jpg"],
        story: {
            headline: "A stitch in time",
            content: [
                "Hand-stitched in Kashmir, this cushion cover features traditional Aari embroidery. Each motif is created using a hooked needle, forming continuous loops of fine wool thread.",
                "The artisans work from memory, creating intricate floral patterns that reflect the natural beauty of the region."
            ]
        },
        pricingContext: {
            headline: "Direct from the artisan",
            content: "By sourcing directly from a cooperative in Srinagar, we ensure that 80% of the price goes directly to the women artisans who crafted this piece."
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
        price: "₹1,299",
        tag: "Vintage Find",
        availability: "Only 1 piece available",
        images: ["/images/wiki_copper.jpg", "/images/wiki_copper.jpg"],
        story: {
            headline: "Vessel of history",
            content: [
                "This copper vessel was once a staple in a rural Rajasthani kitchen. The hammered texture improves strength and heat distribution.",
                "We've repurposed it as a statement vase. The verdigris (green patina) has been preserved to authenticity."
            ]
        },
        pricingContext: {
            headline: "Value in heritage",
            content: "Sourced from a scrap dealer who was going to melt it down. We saved it for its aesthetic and historical value."
        },
        details: {
            material: "Hammered Copper",
            dimensions: "Height: 10 inches",
            weight: "800g",
            finish: "Verdigris patina",
            care: "Do not scrub. Rinse only."
        }
    },
    4: {
        id: 4,
        name: "Hand-Carved Wooden Tray",
        price: "₹799",
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
        price: "₹499",
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
        price: "₹899",
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
        price: "₹1,499",
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
        price: "₹699",
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
        price: "₹1,399",
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
        price: "₹1,499",
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
        price: "₹1,299",
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
    },
    // --- BATCH 2 (Requested by User) - AI Generated Images ---
    12: {
        id: 12, name: "Hand-Beaten Copper Pendant", price: "₹1,299", tag: "Artisan",
        availability: "Waitlist", images: ["/images/generated/copper_pendant.png"],
        story: { headline: "Warmth from above", content: ["Hand-beaten copper that glows warmly."] },
        pricingContext: { headline: "Artisan direct", content: "Direct from Moradabad." },
        details: { material: "Copper", dimensions: "10in dia", weight: "800g", finish: "Hammered", care: "Dust" }
    },
    13: {
        id: 13, name: "Terracotta Table Lamp", price: "₹899", tag: "Earthy",
        availability: "In Stock", images: ["/images/generated/terracotta_lamp.png"],
        story: { headline: "Earthy illumination", content: ["Natural clay lamp base."] },
        pricingContext: { headline: "Local craft", content: "Potter community support." },
        details: { material: "Terracotta", dimensions: "12in height", weight: "1.5kg", finish: "Raw", care: "Dry cloth" }
    },
    14: {
        id: 14, name: "Cutwork Iron Lantern", price: "₹799", tag: "Rustic",
        availability: "In Stock", images: ["/images/generated/iron_lantern.png"],
        story: { headline: "Shadow dancer", content: ["Iron lantern creating intricate shadows."] },
        pricingContext: { headline: "Standard", content: "Market price." },
        details: { material: "Iron", dimensions: "8in height", weight: "600g", finish: "Black coated", care: "Wipe clean" }
    },
    15: {
        id: 15, name: "Standing Brass Diya", price: "₹1,499", tag: "Traditional",
        availability: "Last Piece", images: ["/images/generated/brass_diya.png"],
        story: { headline: "Sacred light", content: ["Traditional standing lamp for pooja."] },
        pricingContext: { headline: "Brass value", content: "Heavy gauge brass." },
        details: { material: "Brass", dimensions: "18in height", weight: "2kg", finish: "Gold", care: "Pitambari" }
    },
    16: {
        id: 16, name: "Amber Glass Hanging Light", price: "₹1,199", tag: "Retro",
        availability: "In Stock", images: ["/images/generated/amber_glass_light.png"],
        story: { headline: "Retro glow", content: ["Amber glass casting a honey hue."] },
        pricingContext: { headline: "Import replacement", content: "Made locally." },
        details: { material: "Glass", dimensions: "8in dia", weight: "1kg", finish: "Amber", care: "Glass cleaner" }
    },
    // Showpieces
    17: { id: 17, name: "Marble Lotus Bowl", price: "₹999", tag: "Classic", availability: "In Stock", images: ["/images/generated/marble_lotus_bowl.png"], story: { headline: "Mughal elegance", content: ["Hand carved marble."] }, pricingContext: { headline: "Direct", content: "Agra artisans." }, details: { material: "Marble", dimensions: "6in", weight: "800g", finish: "Polished", care: "Wipe" } },
    18: { id: 18, name: "Wooden Spice Box", price: "₹1,299", tag: "Essential", availability: "In Stock", images: ["/images/generated/wooden_spice_box.png"], story: { headline: "Kitchen heart", content: ["Teak wood spice box."] }, pricingContext: { headline: "Wood value", content: "Old teak." }, details: { material: "Teak", dimensions: "8in", weight: "1kg", finish: "Oil", care: "Dry" } },
    19: { id: 19, name: "Brass Elephant Figurine", price: "₹699", tag: "Lucky", availability: "In Stock", images: ["/images/generated/brass_elephant.png"], story: { headline: "Gentle giant", content: ["Solid brass elephant."] }, pricingContext: { headline: "Metal weight", content: "Solid casting." }, details: { material: "Brass", dimensions: "4in", weight: "500g", finish: "Antique", care: "Wipe" } },
    20: { id: 20, name: "Painted Wooden Chowki", price: "₹1,499", tag: "Decor", availability: "One piece", images: ["/images/generated/painted_chowki.png"], story: { headline: "Royal seat", content: ["Hand painted low stool."] }, pricingContext: { headline: "Art work", content: "Detailed painting." }, details: { material: "Wood", dimensions: "12x12in", weight: "2kg", finish: "Painted", care: "Dry" } },
    21: { id: 21, name: "Terracotta Water Jug", price: "₹599", tag: "Cooling", availability: "In Stock", images: ["/images/generated/terracotta_jug.png"], story: { headline: "Cool water", content: ["Natural cooling jug."] }, pricingContext: { headline: "Pottery", content: "Standard." }, details: { material: "Clay", dimensions: "1L", weight: "800g", finish: "Raw", care: "Rinse" } },
    // Wall Art
    22: { id: 22, name: "Madhubani Painting", price: "₹1,199", tag: "Folk Art", availability: "Unique", images: ["/images/generated/madhubani_painting.png"], story: { headline: "Mithila art", content: ["Original painting."] }, pricingContext: { headline: "Artist direct", content: "Bihar cluster." }, details: { material: "Paper", dimensions: "A3", weight: "N/A", finish: "Matte", care: "Frame" } },
    23: { id: 23, name: "Bamboo Wall Fan", price: "₹699", tag: "Natural", availability: "In Stock", images: ["/images/generated/bamboo_wall_fan.png"], story: { headline: "Cool breeze", content: ["Woven bamboo fan."] }, pricingContext: { headline: "Craft", content: "Hand woven." }, details: { material: "Bamboo", dimensions: "12in", weight: "200g", finish: "Natural", care: "Dust" } },
    24: { id: 24, name: "Kalamkari Fabric Panel", price: "₹1,299", tag: "Textile", availability: "Limited", images: ["/images/generated/kalamkari_panel.png"], story: { headline: "Pen art", content: ["Kalamkari painting."] }, pricingContext: { headline: "Textile art", content: "Andhra artisans." }, details: { material: "Cotton", dimensions: "20x20in", weight: "100g", finish: "Soft", care: "Dry clean" } },
    25: { id: 25, name: "Vintage Key Holder", price: "₹899", tag: "Useful", availability: "In Stock", images: ["/images/generated/vintage_key_holder.png"], story: { headline: "Key keeper", content: ["Reclaimed wood holder."] }, pricingContext: { headline: "Upcycle", content: "Scrap wood." }, details: { material: "Wood", dimensions: "10in", weight: "500g", finish: "Distressed", care: "Wipe" } },
    26: { id: 26, name: "Hand-Painted Wooden Mask", price: "₹1,399", tag: "Cultural", availability: "Unique", images: ["/images/generated/wooden_mask.png"], story: { headline: "Tribal face", content: ["Traditional mask."] }, pricingContext: { headline: "Art", content: "Hand carved." }, details: { material: "Wood", dimensions: "10in", weight: "400g", finish: "Painted", care: "Dust" } },
    // Mirrors
    27: { id: 27, name: "Octagonal Brass Mirror", price: "₹1,499", tag: "Geometric", availability: "In Stock", images: ["/images/generated/octagonal_brass_mirror.png"], story: { headline: "Eight sides", content: ["Geometric brass mirror."] }, pricingContext: { headline: "Metal", content: "Brass frame." }, details: { material: "Brass", dimensions: "12in", weight: "1kg", finish: "Gold", care: "Clean glass" } },
    28: { id: 28, name: "Hand-Painted Mirror Frame", price: "₹1,199", tag: "Bright", availability: "One piece", images: ["/images/generated/painted_mirror_frame.png"], story: { headline: "Floral reflection", content: ["Painted wood frame."] }, pricingContext: { headline: "Artisan", content: "Hand painted." }, details: { material: "Wood", dimensions: "14in", weight: "1.2kg", finish: "Painted", care: "Clean glass" } },
    29: { id: 29, name: "Jute Rope Round Mirror", price: "₹999", tag: "Coastal", availability: "In Stock", images: ["/images/generated/jute_rope_mirror.png"], story: { headline: "Nautical feel", content: ["Rope framed mirror."] }, pricingContext: { headline: "Material", content: "Jute rope." }, details: { material: "Jute/Glass", dimensions: "16in", weight: "1.5kg", finish: "Natural", care: "Dust" } },
    30: { id: 30, name: "Archway Wall Mirror", price: "₹1,299", tag: "Architectural", availability: "In Stock", images: ["/images/generated/archway_mirror.png"], story: { headline: "Jharokha style", content: ["Arch design."] }, pricingContext: { headline: "Design", content: "Complex frame." }, details: { material: "Wood/Glass", dimensions: "18in", weight: "2kg", finish: "Distressed", care: "Clean glass" } },
    31: { id: 31, name: "Small Travel Mirror", price: "₹499", tag: "Compact", availability: "In Stock", images: ["/images/generated/travel_mirror.png"], story: { headline: "Vanity to go", content: ["Portable mirror."] }, pricingContext: { headline: "Utility", content: "Simple mechanism." }, details: { material: "Brass/Glass", dimensions: "4in", weight: "200g", finish: "Gold", care: "Wipe" } }
};

// End of PRODUCTS_DATA

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
