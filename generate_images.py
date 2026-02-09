"""
Product Image Generator using Gemini 2.5 Flash Image Model
Generates high-quality product images for Kifaayat's artisan products.
"""

from google import genai
from google.genai import types
from PIL import Image
import os
import io
import time

# Initialize the client with the API key
client = genai.Client(api_key="AIzaSyDs1B2hH9esmFMQCrtU41HJYCPvDM5rCrk")

# Output directory
OUTPUT_DIR = "public/images/generated"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Product prompts for the 20 new products
PRODUCTS = [
    # Lighting (5 products)
    {
        "id": 12,
        "name": "copper_pendant",
        "prompt": "A high-resolution, studio-lit product photograph of a hand-beaten copper pendant lamp with a warm amber glow emanating from within. Artisan hammered texture visible. Presented on a dark wooden surface with soft shadows. Three-point lighting, ultra-realistic, sharp focus. Square image, white background."
    },
    {
        "id": 13,
        "name": "terracotta_lamp",
        "prompt": "A high-resolution, studio-lit product photograph of a rustic terracotta table lamp with a natural earthy brown finish. Organic texture and warm ambient light. Placed on a linen cloth surface. Soft diffused lighting, ultra-realistic. Square image, beige background."
    },
    {
        "id": 14,
        "name": "iron_lantern",
        "prompt": "A high-resolution, studio-lit product photograph of a black wrought iron cutwork lantern with intricate geometric patterns. Shadows cast through the cutwork design. Placed on a stone surface. Dramatic lighting, ultra-realistic. Square image, neutral background."
    },
    {
        "id": 15,
        "name": "brass_diya",
        "prompt": "A high-resolution, studio-lit product photograph of a traditional Indian standing brass diya (oil lamp) with ornate engravings. Golden polished finish, ceremonial style. Placed on a marble surface. Warm lighting, ultra-realistic. Square image, cream background."
    },
    {
        "id": 16,
        "name": "amber_glass_light",
        "prompt": "A high-resolution, studio-lit product photograph of a retro amber glass hanging pendant light with textured glass surface. Warm honey-colored glow. Brass fittings. Soft lighting, ultra-realistic. Square image, white background."
    },
    # Showpieces (5 products)
    {
        "id": 17,
        "name": "marble_lotus_bowl",
        "prompt": "A high-resolution, studio-lit product photograph of a white Agra marble lotus-shaped decorative bowl with delicate hand-carved petals. Polished finish, elegant classic style. Placed on a dark surface. Soft lighting, ultra-realistic. Square image, neutral background."
    },
    {
        "id": 18,
        "name": "wooden_spice_box",
        "prompt": "A high-resolution, studio-lit product photograph of a traditional Indian wooden spice box (masala dabba) with multiple compartments and a rotating lid. Rich teak wood grain. Placed on a kitchen counter. Warm lighting, ultra-realistic. Square image, beige background."
    },
    {
        "id": 19,
        "name": "brass_elephant",
        "prompt": "A high-resolution, studio-lit product photograph of a solid brass elephant figurine with intricate engraved details and antique patina finish. Traditional Indian style, lucky charm. Placed on a wooden surface. Warm lighting, ultra-realistic. Square image, neutral background."
    },
    {
        "id": 20,
        "name": "painted_chowki",
        "prompt": "A high-resolution, studio-lit product photograph of a hand-painted wooden chowki (low stool) with colorful Rajasthani folk art patterns. Vibrant reds, blues, and yellows. Placed on a tiled floor. Bright lighting, ultra-realistic. Square image, white background."
    },
    {
        "id": 21,
        "name": "terracotta_jug",
        "prompt": "A high-resolution, studio-lit product photograph of a traditional Indian terracotta water jug (matka) with a natural clay finish and rustic texture. Traditional cooling vessel. Placed on a wooden surface. Warm natural lighting, ultra-realistic. Square image, beige background."
    },
    # Wall Art (5 products)
    {
        "id": 22,
        "name": "madhubani_painting",
        "prompt": "A high-resolution product photograph of a traditional Madhubani painting on handmade paper featuring intricate fish and peacock motifs. Vibrant natural colors, folk art style from Bihar, India. Framed. Flat lay presentation, even lighting, ultra-realistic. Square image."
    },
    {
        "id": 23,
        "name": "bamboo_wall_fan",
        "prompt": "A high-resolution, studio-lit product photograph of a large decorative woven bamboo wall fan with natural split cane texture. Bohemian coastal style. Hung on a white wall. Soft lighting, ultra-realistic. Square image, minimal background."
    },
    {
        "id": 24,
        "name": "kalamkari_panel",
        "prompt": "A high-resolution product photograph of a Kalamkari fabric wall hanging panel featuring traditional Indian temple motifs and floral patterns. Natural vegetable dyes in earthy tones. Flat lay presentation, even lighting, ultra-realistic. Square image."
    },
    {
        "id": 25,
        "name": "vintage_key_holder",
        "prompt": "A high-resolution, studio-lit product photograph of a vintage-style wooden key holder with decorative hooks and distressed reclaimed wood finish. Rustic farmhouse style. Mounted on a white wall. Soft lighting, ultra-realistic. Square image."
    },
    {
        "id": 26,
        "name": "wooden_mask",
        "prompt": "A high-resolution, studio-lit product photograph of a hand-painted tribal wooden mask with vibrant colors and traditional Indian folk art patterns. Cultural wall decor. Mounted on a neutral wall. Dramatic lighting, ultra-realistic. Square image."
    },
    # Mirrors (5 products)
    {
        "id": 27,
        "name": "octagonal_brass_mirror",
        "prompt": "A high-resolution, studio-lit product photograph of an octagonal wall mirror with an ornate brass frame and gold finish. Geometric Art Deco style. Hung on a white wall. Soft lighting, reflections visible, ultra-realistic. Square image."
    },
    {
        "id": 28,
        "name": "painted_mirror_frame",
        "prompt": "A high-resolution, studio-lit product photograph of a hand-painted wooden mirror frame with colorful floral motifs on a bright background. Folk art style. Hung on a neutral wall. Bright lighting, ultra-realistic. Square image."
    },
    {
        "id": 29,
        "name": "jute_rope_mirror",
        "prompt": "A high-resolution, studio-lit product photograph of a round wall mirror with a natural jute rope frame in a coastal bohemian style. Nautical texture. Hung on a white wall. Soft natural lighting, ultra-realistic. Square image."
    },
    {
        "id": 30,
        "name": "archway_mirror",
        "prompt": "A high-resolution, studio-lit product photograph of an architectural archway-style wall mirror with a distressed wooden frame resembling an Indian jharokha window. Vintage look. Hung on a white wall. Soft lighting, ultra-realistic. Square image."
    },
    {
        "id": 31,
        "name": "travel_mirror",
        "prompt": "A high-resolution, studio-lit product photograph of a small folding travel mirror with a brass case and antique gold finish. Compact and elegant. Placed on a velvet surface. Soft lighting, ultra-realistic. Square image."
    },
]

def generate_image(product):
    """Generate an image for a single product using the correct method."""
    print(f"Generating image for: {product['name']} (ID: {product['id']})")
    
    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash-exp-image-generation",
            contents=product["prompt"],
            config=types.GenerateContentConfig(
                response_modalities=['TEXT', 'IMAGE']
            )
        )
        
        for part in response.candidates[0].content.parts:
            if part.inline_data is not None:
                # Use as_image() method to get PIL Image
                image = part.as_image()
                
                # Save the image
                filename = f"{product['name']}.png"
                filepath = os.path.join(OUTPUT_DIR, filename)
                image.save(filepath)
                
                # Verify file size
                file_size = os.path.getsize(filepath)
                print(f"  ✓ Saved: {filepath} ({file_size / 1024:.1f} KB)")
                return filepath
            elif hasattr(part, 'text') and part.text:
                print(f"  Text: {part.text[:80]}...")
        
        print(f"  ✗ No image generated for {product['name']}")
        return None
        
    except Exception as e:
        print(f"  ✗ Error generating {product['name']}: {str(e)}")
        return None

def main():
    """Generate images for all products."""
    print("\n" + "="*60)
    print("Kifaayat Product Image Generator v2")
    print("Using Gemini 2.0 Flash Experimental Image Generation")
    print("="*60 + "\n")
    
    successful = 0
    failed = 0
    
    for i, product in enumerate(PRODUCTS):
        print(f"\n[{i+1}/{len(PRODUCTS)}]", end=" ")
        result = generate_image(product)
        
        if result:
            successful += 1
        else:
            failed += 1
        
        # Rate limiting - wait 3 seconds between requests
        if i < len(PRODUCTS) - 1:
            time.sleep(3)
    
    print("\n" + "="*60)
    print(f"Generation Complete!")
    print(f"  Successful: {successful}")
    print(f"  Failed: {failed}")
    print(f"  Output directory: {OUTPUT_DIR}")
    print("="*60 + "\n")

if __name__ == "__main__":
    main()
