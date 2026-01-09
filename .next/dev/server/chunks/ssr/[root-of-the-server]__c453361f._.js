module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/product/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
// --- MOCK DATA ---
const PRODUCTS_DATA = {
    1: {
        id: 1,
        name: "Vintage Brass Oil Lamp",
        price: "₹2,450",
        tag: "One-of-a-kind • Artisan made",
        availability: "Only 1 piece available",
        images: [
            "/images/lamp.png",
            "/images/lamp_2.png"
        ],
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
        images: [
            "/images/cushion.png",
            "/images/wall_hanging_2.png"
        ],
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
        images: [
            "/images/vase.png"
        ],
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
        images: [
            "/images/artisan.png"
        ],
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
        images: [
            "/images/jar.png"
        ],
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
        images: [
            "/images/wall_hanging.png"
        ],
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
        images: [
            "/images/lamp_2.png"
        ],
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
        images: [
            "/images/lamp_3.png"
        ],
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
        images: [
            "/images/wall_hanging_2.png"
        ],
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
        images: [
            "/images/mirror_1.png"
        ],
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
        images: [
            "/images/mirror_2.png"
        ],
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
async function ProductPage({ params }) {
    // Determine product ID. Fallback is handled, but try to find the exact match first.
    // If ID is not found in data, we can either show 404 or a fallback (ID 1).
    // For this demo, let's keep the fallback to ID 1 to avoid broken pages if user types random IDs,
    // but ideally we should show 404 for production.
    const resolvedParams = await params;
    const productId = Number(resolvedParams.id);
    const product = PRODUCTS_DATA[productId] || PRODUCTS_DATA[1];
    if (!product) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-brand-beige text-brand-brown font-sans selection:bg-brand-terracotta selection:text-white pb-32 md:pb-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-0 md:px-6 md:pt-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 lg:static z-0 bg-brand-beige",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative aspect-[4/5] w-full overflow-hidden bg-brand-brown/5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: product.images[0],
                                        alt: product.name,
                                        fill: true,
                                        className: "object-cover",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 360,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/product/[id]/page.tsx",
                                    lineNumber: 359,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:flex gap-4 mt-6",
                                    children: product.images.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `relative h-24 w-24 overflow-hidden border ${i === 0 ? 'border-brand-terracotta' : 'border-transparent'} cursor-pointer opacity-90 hover:opacity-100`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                src: img,
                                                alt: "Detail",
                                                fill: true,
                                                className: "object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 372,
                                                columnNumber: 37
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/app/product/[id]/page.tsx",
                                            lineNumber: 371,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/product/[id]/page.tsx",
                                    lineNumber: 369,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/product/[id]/page.tsx",
                            lineNumber: 358,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 py-8 md:py-0 lg:pt-8 bg-brand-beige relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                    className: "mb-12 border-b border-brand-brown/10 pb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "font-serif text-3xl md:text-5xl text-brand-dark mb-4 leading-tight",
                                            children: product.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/product/[id]/page.tsx",
                                            lineNumber: 383,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-serif text-2xl text-brand-dark",
                                                    children: product.price
                                                }, void 0, false, {
                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium tracking-wide text-brand-brown/60 uppercase",
                                                    children: product.tag
                                                }, void 0, false, {
                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium text-brand-terracotta mt-1",
                                                    children: [
                                                        "● ",
                                                        product.availability
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/product/[id]/page.tsx",
                                            lineNumber: 386,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/product/[id]/page.tsx",
                                    lineNumber: 382,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "mb-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-serif text-2xl text-brand-dark mb-6",
                                            children: product.story.headline
                                        }, void 0, false, {
                                            fileName: "[project]/app/product/[id]/page.tsx",
                                            lineNumber: 401,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 text-brand-brown/80 text-lg font-light leading-relaxed",
                                            children: product.story.content.map((paragraph, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: paragraph
                                                }, i, false, {
                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/product/[id]/page.tsx",
                                            lineNumber: 404,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/product/[id]/page.tsx",
                                    lineNumber: 400,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "mb-12 bg-brand-brown/5 p-6 md:p-8 rounded-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-serif text-xl text-brand-dark mb-3",
                                            children: product.pricingContext.headline
                                        }, void 0, false, {
                                            fileName: "[project]/app/product/[id]/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-brand-brown/80 font-light leading-relaxed",
                                            children: product.pricingContext.content
                                        }, void 0, false, {
                                            fileName: "[project]/app/product/[id]/page.tsx",
                                            lineNumber: 416,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/product/[id]/page.tsx",
                                    lineNumber: 412,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "mb-12 border-t border-brand-brown/10 pt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-serif text-xl text-brand-dark mb-6",
                                            children: "Details"
                                        }, void 0, false, {
                                            fileName: "[project]/app/product/[id]/page.tsx",
                                            lineNumber: 423,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs uppercase tracking-wider text-brand-brown/50 mb-1",
                                                            children: "Material"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/product/[id]/page.tsx",
                                                            lineNumber: 426,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-brand-dark",
                                                            children: product.details.material
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/product/[id]/page.tsx",
                                                            lineNumber: 427,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs uppercase tracking-wider text-brand-brown/50 mb-1",
                                                            children: "Dimensions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/product/[id]/page.tsx",
                                                            lineNumber: 430,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-brand-dark",
                                                            children: product.details.dimensions
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/product/[id]/page.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs uppercase tracking-wider text-brand-brown/50 mb-1",
                                                            children: "Weight"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/product/[id]/page.tsx",
                                                            lineNumber: 434,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-brand-dark",
                                                            children: product.details.weight
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/product/[id]/page.tsx",
                                                            lineNumber: 435,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs uppercase tracking-wider text-brand-brown/50 mb-1",
                                                            children: "Care"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/product/[id]/page.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-brand-dark",
                                                            children: product.details.care
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/product/[id]/page.tsx",
                                                            lineNumber: 439,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/product/[id]/page.tsx",
                                            lineNumber: 424,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/product/[id]/page.tsx",
                                    lineNumber: 422,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "mb-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-serif text-xl text-brand-dark mb-6",
                                            children: "What you can expect"
                                        }, void 0, false, {
                                            fileName: "[project]/app/product/[id]/page.tsx",
                                            lineNumber: 446,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3",
                                            children: [
                                                "Handpicked & personally quality-checked",
                                                "Sourced directly from artisans (no middlemen)",
                                                "Fair pricing through honest negotiation",
                                                "Secure payments & safe packaging"
                                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-3 text-brand-brown/80 font-light",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-brand-terracotta mt-1",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/product/[id]/page.tsx",
                                                            lineNumber: 455,
                                                            columnNumber: 41
                                                        }, this),
                                                        item
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/product/[id]/page.tsx",
                                            lineNumber: 447,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/product/[id]/page.tsx",
                                    lineNumber: 445,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:block mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full bg-brand-dark text-brand-beige py-4 text-lg font-medium hover:bg-brand-brown transition-colors mb-3",
                                            children: "Reserve this piece"
                                        }, void 0, false, {
                                            fileName: "[project]/app/product/[id]/page.tsx",
                                            lineNumber: 464,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center text-sm text-brand-brown/60 italic",
                                            children: "This piece is unique — once sold, it won’t be restocked."
                                        }, void 0, false, {
                                            fileName: "[project]/app/product/[id]/page.tsx",
                                            lineNumber: 467,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/product/[id]/page.tsx",
                                    lineNumber: 463,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-8 border-t border-brand-brown/10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/collection",
                                        className: "text-brand-dark hover:text-brand-terracotta transition-colors font-medium flex items-center gap-2",
                                        children: "← Back to collection"
                                    }, void 0, false, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 474,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/product/[id]/page.tsx",
                                    lineNumber: 473,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/product/[id]/page.tsx",
                            lineNumber: 379,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/product/[id]/page.tsx",
                    lineNumber: 355,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 354,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden fixed bottom-0 left-0 w-full bg-brand-beige border-t border-brand-brown/10 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-serif text-lg text-brand-dark",
                                    children: product.price
                                }, void 0, false, {
                                    fileName: "[project]/app/product/[id]/page.tsx",
                                    lineNumber: 487,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-brand-brown/60",
                                    children: "Only 1 available"
                                }, void 0, false, {
                                    fileName: "[project]/app/product/[id]/page.tsx",
                                    lineNumber: 488,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/product/[id]/page.tsx",
                            lineNumber: 486,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex-1 bg-brand-dark text-brand-beige py-3 font-medium text-base shadow-sm",
                            children: "Reserve this piece"
                        }, void 0, false, {
                            fileName: "[project]/app/product/[id]/page.tsx",
                            lineNumber: 490,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/product/[id]/page.tsx",
                    lineNumber: 485,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 484,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/product/[id]/page.tsx",
        lineNumber: 352,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/product/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/product/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c453361f._.js.map