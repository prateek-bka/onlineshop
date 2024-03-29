import { Box, Flex, Text, VStack } from "@chakra-ui/react";

const color = {
  men: "tomato",
  women: "pink",
  kids: "orange",
  "home & living": "yellow",
  beauty: "teal",
};
const dropDownData = {
  men: {
    Topwear: [
      "T-Shirts",
      "Casual Shirts",
      "Formal Shirts",
      "Sweatshirts",
      "Sweaters",
      "Jackets",
      "Blazers & Coats",
      "Suits",
      "Rain Jackets",
    ],
    "Indian & Festive Wear": [
      "Kurtas & Kurta Sets",
      "Sherwanis",
      "Nehru Jackets",
      "Dhotis",
    ],
    Bottomwear: [
      "Jeans",
      "Casual Trousers",
      "Formal Trousers",
      "Shorts",
      "Track Pants & Joggers",
    ],
    "Innerwear & Sleepwear": [
      "Briefs & Trunks",
      "Boxers",
      "Vests",
      "Sleepwear & Loungewear",
      "Thermals",
    ],
    "Plus Size": [],
    Footwear: [
      "Casual Shoes",
      "Sports Shoes",
      "Formal Shoes",
      "Sneakers",
      "Sandals & Floaters",
      "Flip Flops",
      "Socks",
    ],
    "Personal Care & Grooming": [],
    "Sunglasses & Frames": [],
    Watches: [],
    "Sports & Active Wear": [
      "Sports Shoes",
      "Sports Sandals",
      "Active T-Shirts",
      "Track Pants & Shorts",
      "Tracksuits",
      "Jackets & Sweatshirts",
      "Sports Accessories",
      "Swimwear",
    ],
    Gadgets: ["Smart Wearables", "Fitness Gadgets", "Headphones", "Speakers"],
    "Fashion Accessories": [
      "Wallets",
      "Belts",
      "Perfumes & Body Mists",
      "Trimmers",
      "Deodorants",
      "Ties, Cufflinks & Pocket Squares",
      "Accessory Gift Sets",
      "Caps & Hats",
      "Mufflers, Scarves & Gloves",
      "Phone Cases",
      "Rings & Wristwear",
      "Helmets",
    ],
    "Bags & Backpacks": [],
    "Luggages & Trolleys": [],
  },
  women: {
    "Indian & Fusion Wear": [
      "Kurtas & Suits",
      "Kurtis, Tunics & Tops",
      "Sarees",
      "Ethnic Wear",
      "Leggings, Salwars & Churidars",
      "Skirts & Palazzos",
      "Dress Materials",
      "Lehenga Cholis",
      "Dupattas & Shawls",
      "Jackets",
    ],
    "Belts, Scarves & More": [],
    "Watches & Wearables": [],
    "Western Wear": [
      "Dresses",
      "Tops",
      "Tshirts",
      "Jeans",
      "Trousers & Capris",
      "Shorts & Skirts",
      "Co-ords",
      "Playsuits",
      "Jumpsuits",
      "Shrugs",
      "Sweaters & Sweatshirts",
      "Jackets & Coats",
      "Blazers & Waistcoats",
    ],
    "Plus Size": [],
    Maternity: [],
    "Sunglasses & Frames": [],
    Footwear: [
      "Flats",
      "Casual Shoes",
      "Heels",
      "Boots",
      "Sports Shoes & Floaters",
    ],
    "Sports & Active Wear": [
      "Clothing",
      "Footwear",
      "Sports Accessories",
      "Sports Equipment",
    ],
    "Lingerie & Sleepwear": [
      "Bra",
      "Briefs",
      "Shapewear",
      "Sleepwear & Loungewear",
      "Swimwear",
      "Camisoles & Thermals",
    ],
    "Beauty & Personal Care": [
      "Makeup",
      "Skincare",
      "Premium Beauty",
      "Lipsticks",
      "Fragrances",
    ],
    Gadgets: ["Smart Wearables", "Fitness Gadgets", "Headphones", "Speakers"],
    Jewellery: ["Fashion Jewellery", "Fine Jewellery", "Earrings"],
    Backpacks: [],
    "Handbags, Bags & Wallets": [],
    "Luggages & Trolleys": [],
  },
  kids: {
    "Boys Clothing": [
      "T-Shirts",
      "Shirts",
      "Shorts",
      "Jeans",
      "Trousers",
      "Clothing Sets",
      "Ethnic Wear",
      "Track Pants & Pyjamas",
      "Jacket, Sweater & Sweatshirts",
      "Party Wear",
      "Innerwear & Thermals",
      "Nightwear & Loungewear",
      "Value Packs",
    ],
    "Girls Clothing": [
      "Dresses",
      "Tops",
      "Tshirts",
      "Clothing Sets",
      "Lehenga choli",
      "Kurta Sets",
      "Party wear",
      "Dungarees & Jumpsuits",
      "Skirts & shorts",
      "Tights & Leggings",
      "Jeans, Trousers & Capris",
      "Jacket, Sweater & Sweatshirts",
      "Innerwear & Thermals",
      "Nightwear & Loungewear",
      "Value Packs",
    ],
    Footwear: [
      "Casual Shoes",
      "Flipflops",
      "Sports Shoes",
      "Flats",
      "Sandals",
      "Heels",
      "School Shoes",
      "Socks",
    ],
    "Toys:": [
      "Learning & Development",
      "Activity Toys",
      "Soft Toys",
      "Action Figure / Play set",
    ],
    Infants: [
      "Bodysuits",
      "Rompers & Sleepsuits",
      "Clothing Sets",
      "Tshirts & Tops",
      "Dresses",
      "Bottom wear",
      "Winter Wear",
      "Innerwear & Sleepwear",
      "Infant Care",
    ],
    "Home & Bath": [],
    "Personal Care": [],
    "Kids Accessories": [
      "Bags & Backpacks",
      "Watches",
      "Jewellery & Hair accessory",
      "Sunglasses",
      "Masks & Protective Gears",
      "Caps & Hats",
    ],
    Brands: [
      "H&M",
      "Max Kids",
      "Pantaloons",
      "United Colors Of Benetton Kids",
      "YK",
      "U.S. Polo Assn. Kids",
      "Mothercare",
      "HRX",
    ],
  },
  "home & living": {
    "Bed Linen & Furnishing": [
      "Bed Runners",
      "Mattress Protectors",
      "Bedsheets",
      "Bedding Sets",
      "Blankets, Quilts & Dohars",
      "Pillows & Pillow Covers",
      "Bed Covers",
      "Diwan Sets",
      "Chair Pads & Covers",
      "Sofa Covers",
    ],
    Flooring: [
      "Floor Runners",
      "Carpets",
      "Floor Mats & Dhurries",
      "Door Mats",
    ],
    Bath: [
      "Bath Towels",
      "Hand & Face Towels",
      "Beach Towels",
      "Towels Set",
      "Bath Rugs",
      "Bath Robes",
      "Bathroom Accessories",
      "Shower Curtains",
    ],
    "Lamps & Lighting": [
      "Floor Lamps",
      "Ceiling Lamps",
      "Table Lamps",
      "Wall Lamps",
      "Outdoor Lamps",
      "String Lights",
    ],
    "Home Décor": [
      "Plants & Planters",
      "Aromas & Candles",
      "Clocks",
      "Mirrors",
      "Wall Décor",
      "Festive Decor",
      "Pooja Essentials",
      "Wall Shelves",
      "Fountains",
      "Showpieces & Vases",
      "Ottoman",
    ],
    "Cushions & Cushion Covers": [],
    Curtains: [],
    "Home Gift Sets": [],
    "Kitchen & Table": [
      "Table Runners",
      "Dinnerware & Serveware",
      "Cups and Mugs",
      "Bakeware & Cookware",
      "Kitchen Storage & Tools",
      "Bar & Drinkware",
      "Table Covers & Furnishings",
    ],
    Storage: [
      "Bins",
      "Hangers",
      "Organisers",
      "Hooks & Holders",
      "Laundry Bags",
    ],
    Brands: [
      "H&M",
      "Marks & Spencer",
      "Home Centre",
      "Spaces",
      "D'Decor",
      "Story@Home",
      "Pure Home & Living",
      "Swayam",
      "Raymond Home",
      "Maspar",
      "Trident",
      "Cortina",
      "Random",
      "Ellementry",
      "ROMEE",
      "SEJ by Nisha Gupta",
    ],
  },
  beauty: {
    Makeup: [
      "Lipstick",
      "Lip Gloss",
      "Lip Liner",
      "Mascara",
      "Eyeliner",
      "Kajal",
      "Eyeshadow",
      "Foundation",
      "Primer",
      "Concealer",
      "Compact",
      "Nail Polish",
    ],
    "Skincare, Bath & Body": [
      "Face Moisturiser",
      "Cleanser",
      "Masks & Peel",
      "Sunscreen",
      "Serum",
      "Face Wash",
      "Eye Cream",
      "Lip Balm",
      "Body Lotion",
      "Body Wash",
      "Body Scrub",
      "Hand Cream",
    ],
    "Baby Care": [],
    Masks: [],
    Haircare: [
      "Shampoo",
      "Conditioner",
      "Hair Cream",
      "Hair Oil",
      "Hair Gel",
      "Hair Color",
      "Hair Serum",
      "Hair Accessory",
    ],
    Fragrances: ["Perfume", "Deodorant", "Body Mist"],
    Appliances: ["Hair Straightener", "Hair Dryer", "Epilator"],
    "Men's Grooming": ["Trimmers", "Beard Oil", "Hair Wax"],
    "Beauty Gift & Makeup Set": ["Beauty Gift", "Makeup Kit"],
    "Premium Beauty": [],
    "Wellness & Hygiene": [],
    "Top Brands": [
      "Lakme",
      "Maybelline",
      "LOreal",
      "Philips",
      "Bath & Body Works",
      "THE BODY SHOP",
      "Biotique",
      "Mamaearth",
      "MCaffeine",
      "Nivea",
      "Lotus Herbals",
      "LOreal Professionnel",
      "KAMA AYURVEDA",
      "M.A.C",
      "Forest Essentials",
    ],
  },
};

// console.log(dropDownData.beauty.Makeup)

const Dropdown = ({ category, color }) => {
  // const category = 'beauty';
  console.log();
  return (
    <Flex
      flexDirection="column"
      h="full"
      wrap="wrap"
      justify="flex-start"
      gap="2px"
      align="start"
    >
      {Object.keys(dropDownData[category])?.map((subCategory, i) => (
        <Flex
          flexDirection="column"
          align="start"
          fontSize="sm"
          w="20%"
          cursor="pointer"
          gap="2px"
        >
          <Text key={(i + 12) * 2} fontWeight="bold" color={color}>
            {subCategory}
          </Text>
          {Object.keys(dropDownData[category][subCategory])?.map((ele, i) => (
            <Text
              key={i + 400}
              fontWeight="400"
              _hover={{ fontWeight: "bold" }}
            >
              {dropDownData[category][subCategory][ele]}
            </Text>
          ))}
          <Box borderWidth="1px" w="60%" m="5px 0px" />
        </Flex>
      ))}
    </Flex>
  );
};

export default Dropdown;
