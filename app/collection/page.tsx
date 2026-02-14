'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- MOCK DATA ---
const PRODUCTS = [
    {
        id: 1,
        name: "Vintage Brass Oil Lamp",
        price: "₹999",
        image: "/images/lamp.png",
        tag: "One-of-a-kind",
        desc: "Handcrafted • locally sourced",
        category: "Lighting"
    },
    {
        id: 2,
        name: "Kashmiri Embroidered Cushion",
        price: "₹899",
        image: "/images/cushion.png",
        tag: "Limited Stock",
        desc: "Hand-stitched wool",
        category: "Showpieces"
    },
    {
        id: 3,
        name: "Jute Terracotta Vase",
        price: "₹1,299",
        image: "/images/vase.png",
        tag: "One-of-a-kind",
        desc: "Oxidized finish",
        category: "Showpieces"
    },
    {
        id: 4,
        name: "Hand-Carved Wooden Tray",
        price: "₹799",
        image: "/images/artisan.png",
        tag: "Artisan made",
        desc: "Teak wood",
        category: "Showpieces"
    },
    {
        id: 5,
        name: "Ceramic Pickle Jar",
        price: "₹499",
        image: "/images/jar.png",
        tag: "Vintage",
        desc: "Jaipur pottery",
        category: "Showpieces"
    },
    {
        id: 6,
        name: "Woven Jute Wall Hanging",
        price: "₹899",
        image: "/images/wall_hanging.png",
        tag: "One-of-a-kind",
        desc: "Natural fibers",
        category: "Wall Art"
    },
    // --- NEW PRODUCTS (Batch 1) ---
    {
        id: 7,
        name: "Etched Brass Table Lamp",
        price: "₹1,499",
        image: "/images/lamp_2.png",
        tag: "Timeless",
        desc: "Warm ambient light with etched detailing",
        category: "Lighting"
    },
    {
        id: 8,
        name: "Mosaic Glass Lantern",
        price: "₹699",
        image: "/images/lamp_3.png",
        tag: "Handcrafted",
        desc: "Vibrant stained glass work",
        category: "Lighting"
    },
    {
        id: 9,
        name: "Rajasthani Fabric Wall Art",
        price: "₹1,399",
        image: "/images/wall_hanging_2.png",
        tag: "Statement Piece",
        desc: "Antique textile embroidery",
        category: "Wall Art"
    },
    {
        id: 10,
        name: "Carved Wooden Mirror",
        price: "₹1,499",
        image: "/images/mirror_1.png",
        tag: "Rare Find",
        desc: "Intricate floral woodwork",
        category: "Mirrors"
    },
    {
        id: 11,
        name: "Sunburst Brass Mirror",
        price: "₹1,299",
        image: "/images/mirror_2.png",
        tag: "Vintage Style",
        desc: "Retro brass sunburst design",
        category: "Mirrors"
    },
    // --- BATCH 2 (Requested by User) - AI Generated Images ---
    // Lighting
    { id: 12, name: "Hand-Beaten Copper Pendant", price: "₹1,299", image: "/images/generated/copper_pendant.png", tag: "Artisan", desc: "Warm glow", category: "Lighting" },
    { id: 13, name: "Terracotta Table Lamp", price: "₹899", image: "/images/generated/terracotta_lamp.png", tag: "Earthy", desc: "Natural finish", category: "Lighting" },
    { id: 14, name: "Cutwork Iron Lantern", price: "₹799", image: "/images/generated/iron_lantern.png", tag: "Rustic", desc: "Shadow play", category: "Lighting" },
    { id: 15, name: "Standing Brass Diya", price: "₹1,499", image: "/images/generated/brass_diya.png", tag: "Traditional", desc: "Ceremonial", category: "Lighting" },
    { id: 16, name: "Amber Glass Hanging Light", price: "₹1,199", image: "/images/generated/amber_glass_light.png", tag: "Retro", desc: "Textured glass", category: "Lighting" },
    // Showpieces
    { id: 17, name: "Marble Lotus Bowl", price: "₹999", image: "/images/generated/marble_lotus_bowl.png", tag: "Classic", desc: "Agra marble", category: "Showpieces" },
    { id: 18, name: "Wooden Spice Box", price: "₹1,299", image: "/images/generated/wooden_spice_box.png", tag: "Essential", desc: "Kitchen staple", category: "Showpieces" },
    { id: 19, name: "Brass Elephant Figurine", price: "₹699", image: "/images/generated/brass_elephant.png", tag: "Lucky", desc: "Solid brass", category: "Showpieces" },
    { id: 20, name: "Painted Wooden Chowki", price: "₹1,499", image: "/images/generated/painted_chowki.png", tag: "Decor", desc: "Low stool", category: "Showpieces" },
    { id: 21, name: "Terracotta Vase", price: "₹599", image: "/images/generated/terracotta_jug.png", tag: "Cooling", desc: "Clay fired", category: "Showpieces" },
    // Wall Art
    { id: 22, name: "Madhubani Painting", price: "₹1,199", image: "/images/generated/madhubani_painting.png", tag: "Folk Art", desc: "Hand painted", category: "Wall Art" },
    { id: 23, name: "Bamboo Wall Fan", price: "₹699", image: "/images/generated/bamboo_wall_fan.png", tag: "Natural", desc: "Woven split cane", category: "Wall Art" },
    { id: 24, name: "Kalamkari Fabric Panel", price: "₹1,299", image: "/images/generated/kalamkari_panel.png", tag: "Textile", desc: "Vegetable dye", category: "Wall Art" },
    { id: 25, name: "Vintage Key Holder", price: "₹899", image: "/images/generated/vintage_key_holder.png", tag: "Useful", desc: "Reclaimed wood", category: "Wall Art" },
    { id: 26, name: "Hand-Painted Wooden Mask", price: "₹1,399", image: "/images/generated/wooden_mask.png", tag: "Cultural", desc: "Wall accent", category: "Wall Art" },
    // Mirrors
    { id: 27, name: "Octagonal Brass Mirror", price: "₹1,499", image: "/images/generated/octagonal_brass_mirror.png", tag: "Geometric", desc: "Gold finish", category: "Mirrors" },
    { id: 28, name: "Hand-Painted Mirror Frame", price: "₹1,199", image: "/images/generated/painted_mirror_frame.png", tag: "Bright", desc: "Floral motif", category: "Mirrors" },
    { id: 29, name: "Jute Rope Round Mirror", price: "₹999", image: "/images/generated/jute_rope_mirror.png", tag: "Coastal", desc: "Natural texture", category: "Mirrors" },
    { id: 30, name: "Archway Wall Mirror", price: "₹1,299", image: "/images/generated/archway_mirror.png", tag: "Architectural", desc: "Window style", category: "Mirrors" },
    { id: 31, name: "Small Travel Mirror", price: "₹499", image: "/images/generated/travel_mirror.png", tag: "Compact", desc: "Folding case", category: "Mirrors" }
];

const CATEGORIES = ["All", "Lighting", "Wall Art", "Mirrors", "Showpieces"];

export default function CollectionPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = selectedCategory === "All"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === selectedCategory);

    return (
        <main className="min-h-screen bg-brand-beige text-brand-brown font-sans selection:bg-brand-terracotta selection:text-white">

            {/* 1. HEADER SPACER (Header removed per request) */}
            <div className="pt-12 md:pt-16" />

            {/* 2. SECTION INTRO (Moved ABOVE filter bar per user request) */}
            <section className="mb-12 px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-6">
                        Décor with character — not copies.
                    </h2>
                    <p className="text-brand-brown/70 leading-relaxed font-light text-lg max-w-2xl mx-auto">
                        Local markets are treasure troves, but navigating them is chaos.
                        We’ve done the legwork—scouring narrow lanes and bargaining with artisans—to
                        bring you a collection that feels personal, not produced.
                    </p>
                </div>
            </section>

            {/* 3. FUNCTIONAL FILTER BAR */}
            <div className="border-y border-brand-brown/10 mb-20 sticky top-0 bg-brand-beige/95 backdrop-blur-sm z-30 shadow-sm">
                <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                    <span className="text-sm font-medium text-brand-dark/60 uppercase tracking-widest hidden md:block">
                        Browse by category:
                    </span>
                    <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar justify-center">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap 
                                    ${selectedCategory === cat
                                        ? 'bg-brand-dark text-brand-beige shadow-md'
                                        : 'bg-transparent text-brand-brown/70 hover:bg-brand-brown/5 hover:text-brand-dark'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. PRODUCT GRID */}
            <section className="px-6 mb-32 min-h-[500px]">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 animate-fade-in-up">
                        {filteredProducts.map((product) => (
                            <Link href={`/product/${product.id}`} key={product.id} className="group cursor-pointer flex flex-col">
                                <article className="flex flex-col h-full">
                                    {/* Image Container */}
                                    <div className="relative aspect-[3/4] overflow-hidden bg-brand-brown/5 mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />

                                        {/* Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-brand-beige/90 backdrop-blur px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-dark border border-brand-brown/10">
                                                {product.tag}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-1 text-center md:text-left">
                                        <h3 className="font-serif text-xl text-brand-dark group-hover:text-brand-terracotta transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-brand-brown/60 font-light">
                                            {product.desc}
                                        </p>
                                        <div className="pt-2 font-medium text-brand-dark font-serif">
                                            {product.price}
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20 text-brand-brown/60">
                            No products found in this category.
                        </div>
                    )}
                </div>
            </section>

            {/* 5. SCARCITY & VALUE */}
            <section className="bg-brand-offwhite py-24 mb-24 px-6 border-y border-brand-brown/5">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-6">
                        Once sold, it won’t be restocked.
                    </h2>
                    <p className="text-brand-brown/70 leading-relaxed font-light text-lg">
                        Because we source directly from individual artisans and small batches,
                        inventory is extremely limited. Many of these are one-of-one finds.
                        When they’re gone, they’re gone for good.
                    </p>
                </div>
            </section>

            {/* 6. TRUST & REASSURANCE */}
            <section className="px-6 mb-32">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-2xl md:text-3xl text-brand-dark">Why shop with us?</h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-brand-brown/10">
                        {[
                            { title: "Handpicked", desc: "Curated from local bazaars" },
                            { title: "Quality Checked", desc: "Retail-grade standards" },
                            { title: "Fair Pricing", desc: "Bargained at the source" },
                            { title: "Authentic", desc: "Direct from artisans" }
                        ].map((item, i) => (
                            <div key={i} className="pt-8 md:pt-0 px-4">
                                <h4 className="font-serif text-lg text-brand-dark mb-2">{item.title}</h4>
                                <p className="text-sm text-brand-brown/70">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. SOFT CLOSING COPY */}
            <section className="text-center pb-32 px-6">
                <p className="font-serif text-2xl md:text-3xl italic text-brand-terracotta/80">
                    "Take your time. The right piece will speak to you."
                </p>
            </section>

        </main>
    );
}
