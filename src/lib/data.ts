import {
  Scissors,
  PlusSquare,
  ShoppingBag,
  Store,
  Users,
  Star,
  Heart,
  Utensils,
  Bone,
  ToyBrick,
  Backpack,
  HeartPulse,
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  Home,
  Dog,
  Stethoscope,
  ShoppingBasket,
  Info,
  Contact as ContactIcon,
  HelpCircle,
  Sparkles,
  LifeBuoy,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export const siteConfig = {
  name: "Pet's Need",
  phone: "7411576879",
  whatsapp: "917411576879",
  email: "contact@petsneed.in",
  address: "10/1D, Diamond Harbour Road, Alipore, Kolkata, West Bengal 700027",
  mapLink: "https://maps.app.goo.gl/uJpGvXy8q7z9w9fC6",
  googleReviewsLink: "https://www.google.com/maps/search/?api=1&query=Pet's+Need+Alipore+Kolkata",
};

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { title: "Home", href: "/", icon: Home },
  { title: "Grooming", href: "/grooming", icon: Scissors },
  { title: "Clinic", href: "/clinic", icon: Stethoscope },
  { title: "Products", href: "/products", icon: ShoppingBasket },
  { title: "About", href: "/about", icon: Info },
  { title: "Contact", href: "/contact", icon: ContactIcon },
];

export const trustBarItems = [
  "5.0 Star Rating on Google",
  "3000+ Happy Pet Parents",
  "All-in-One Pet Care Center in Alipore, Kolkata",
];

export const services = [
  {
    title: "Pet Grooming",
    icon: Scissors,
    description: "Spa-like pampering for your furry friends. Safe baths, stylish cuts, de-shedding, and seasonal grooming to keep them looking and feeling their best in Alipore, Kolkata.",
    cta: {
      text: "Learn More & Book",
      href: "/grooming",
    },
    imageId: "service-grooming",
  },
  {
    title: "Veterinary Clinic",
    icon: PlusSquare,
    description: "Expert veterinary care when you need it most. Checkups, vaccinations, treatments, and trusted health advice from experienced doctors in Alipore, Kolkata.",
    cta: {
      text: "Learn More & Book",
      href: "/clinic",
    },
    imageId: "service-clinic",
  },
  {
    title: "Pet Store & Pharmacy",
    icon: ShoppingBag,
    description: "Everything for your pet's happiness in one place. Quality food, fun toys, comfy accessories, and essential medicines from trusted brands in Alipore, Kolkata.",
    cta: {
      text: "Learn More & Book",
      href: "/products",
    },
    imageId: "service-store",
  },
];

export const whyUsFeatures = [
  {
    icon: Store,
    title: "All-in-One Convenience",
    description: "Vet care, grooming, and shopping—all under one roof in Alipore, Kolkata. Save time while giving your pet the best.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Qualified veterinarians and professional groomers who treat every pet with patience, care, and expertise.",
  },
  {
    icon: Star,
    title: "Quality You Can Trust",
    description: "Carefully selected food, toys, medicines, and accessories from brands pet parents across Kolkata rely on.",
  },
  {
    icon: Heart,
    title: "3000+ Happy Pet Parents",
    description: "Trusted by pet families across Alipore, Behala, Tollygunge, and beyond. Join our caring community today.",
  },
];

export const testimonials = [
  {
    name: "Imran Rahaman",
    rating: 5,
    review: "I was blown away by the exceptional service, wide range of products, and dedication to animal welfare. Pet's Need exceeded my expectations in every way.",
  },
  {
    name: "KOUMARI NAG",
    rating: 5,
    review: "Extremely satisfied with the gentle and professional way they handled my Shitzu while grooming. Very good experience!",
  },
  {
    name: "Rabin Halder",
    rating: 5,
    review: "Best place for my pet—neat, clean, comfortable. All pet foods and doctors are available, and the grooming services are too good!",
  },
  {
    name: "Nasreen Khan",
    rating: 5,
    review: "Excellent place. Dam good service, caring and cooperative staff members. I can never trust any other place over this. Thank you.",
  },
  {
    name: "Sneha Dasgupta",
    rating: 5,
    review: "I bring my dogs for grooming here, they do a wonderful job every time. Very friendly and Amar da does a good job.",
  },
  {
    name: "Nausheen Iqbal",
    rating: 5,
    review: "Best services within affordable rates. Staff's behaviour is very good. Premium quality food. Overall amazing 💯💯",
  },
];

export const productCategories = [
  { name: "Pet Food", icon: Utensils },
  { name: "Treats", icon: Bone },
  { name: "Toys", icon: ToyBrick },
  { name: "Accessories", icon: Backpack },
  { name: "Grooming", icon: Scissors },
  { name: "Health & Pharmacy", icon: HeartPulse },
];

export const homeFaqs = {
  General: [
    {
      question: "What are your hours of operation?",
      answer: "Our store, grooming, and pharmacy are open daily from 10 AM to 10 PM. For clinic services, please call before visiting as doctor availability varies.",
    },
    {
      question: "Do I need an appointment for the vet?",
      answer: "For clinic services, please call us at 7411576879 before visiting to check doctor availability. Our store and grooming services welcome walk-ins daily.",
    },
    {
      question: "Where are you located?",
      answer: "We are located at 10/1D, Diamond Harbour Road, Alipore, Kolkata, West Bengal 700027. We are easily accessible from all parts of South Kolkata.",
    },
    {
      question: "Is parking available near your center?",
      answer: "Yes, parking is available near our location on Diamond Harbour Road in Alipore, Kolkata.",
    },
    {
      question: "What kind of pets do you cater to?",
      answer: "We provide products and services for dogs, cats, birds, and small animals like rabbits and hamsters. We are a complete pet care solution in Alipore, Kolkata."
    }
  ],
  Grooming: [
    {
      question: "How often should I groom my pet?",
      answer: "It depends on the breed, but we recommend every 4-6 weeks for long-haired pets and 8-12 weeks for short-haired ones to keep them healthy and comfortable."
    },
    {
      question: "Is grooming stressful for cats?",
      answer: "Not when done right! Our expert groomers in Alipore, Kolkata are trained to handle cats gently, ensuring a calm and positive experience."
    },
    {
      question: "What does a full grooming session include?",
      answer: "A full session includes a bath, blow-dry, stylish haircut, nail clipping, ear cleaning, and sanitary trimming for your pet's complete hygiene."
    },
    {
      question: "Can you handle matted fur?",
      answer: "Yes, we are experienced in gentle de-matting for both dogs and cats. It is a crucial service to prevent skin irritation and discomfort."
    },
    {
      question: "What products do you use?",
      answer: "We use high-quality, pet-safe shampoos and conditioners. We also have medicated and hypoallergenic options for pets with sensitive skin."
    }
  ],
  Clinic: [
    {
      question: "Do you handle emergencies?",
      answer: "We provide first-aid and stabilization during operating hours. For critical emergencies, we can refer you to a 24-hour animal hospital in Kolkata."
    },
    {
      question: "What are your consultation fees?",
      answer: "Please call us for current pricing. We are always transparent about costs before proceeding with any treatment for your pet."
    },
    {
      question: "What vaccinations does my pet need?",
      answer: "We provide all essential vaccinations for puppies, kittens, and adult pets, including anti-rabies shots. Our vets will recommend a schedule based on your pet's age and lifestyle."
    },
    {
      question: "Do you offer home visits?",
      answer: "Yes, our veterinarians can provide at-home visits for checkups and vaccinations for pets who are unable to travel. Please call to schedule."
    },
    {
      question: "Can you perform diagnostic tests?",
      answer: "We perform thorough physical examinations and can arrange for blood work, stool analysis, and other lab tests through our trusted partner diagnostic facilities."
    }
  ],
  Products: [
    {
      question: "Do you offer home delivery?",
      answer: "Currently, we operate as a walk-in store only. Visit us in Alipore, Kolkata to explore our wide range of pet products."
    },
    {
      question: "Are your products authentic?",
      answer: "Absolutely. We source all our products directly from authorized distributors to ensure you get only genuine, high-quality items for your pet."
    },
    {
      question: "What brands do you carry?",
      answer: "We stock a wide variety of trusted brands, including Royal Canin, Pedigree, Drools, Farmina, Whiskas, and many more."
    },
    {
      question: "Do you stock pet medicines?",
      answer: "Yes, our in-store pharmacy has a comprehensive range of veterinary medicines, health supplements, and prescription diets for your convenience."
    },
    {
      question: "What if I can't find a specific product?",
      answer: "Our friendly staff is here to help! If we don't have an item in stock, we can try to special-order it for you or suggest the best alternative."
    }
  ]
};

export const quickContact = [
  {
    icon: Phone,
    title: "CALL US",
    value: siteConfig.phone,
    label: "Talk to our team",
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: MessageCircle,
    title: "WHATSAPP US",
    value: "Quick responses",
    label: "Chat with us now",
    href: `https://wa.me/${siteConfig.whatsapp}`,
  },
  {
    icon: MapPin,
    title: "VISIT US",
    value: "10/1D, Diamond Harbour Rd",
    label: "Alipore, Kolkata 700027",
    href: siteConfig.mapLink,
  },
  {
    icon: Mail,
    title: "EMAIL US",
    value: siteConfig.email,
    label: "We'll reply soon",
    href: `mailto:${siteConfig.email}`,
  },
]

export const footerLinks = {
  quickLinks: [
    { title: "Home", href: "/" },
    { title: "Grooming", href: "/grooming" },
    { title: "Clinic", href: "/clinic" },
    { title: "Products", href: "/products" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
  ourServices: [
    { title: "Pet Grooming", href: "/grooming" },
    { title: "Veterinary Care", href: "/clinic" },
    { title: "Pet Supplies & Food", href: "/products" },
    { title: "Pet Pharmacy", href: "/products#pharmacy" },
    { title: "Dog Grooming Kolkata", href: "/grooming" },
    { title: "Cat Grooming Kolkata", href: "/grooming" },
  ]
}

export const doctors = [
  {
    name: "Dr. Amit Chatterjee, BVSc & AH",
    experience: "8 years",
    specialization: "Small & Large Animal Medicine",
    description: "Dr. Chatterjee completed his veterinary degree from West Bengal University of Animal & Fishery Sciences and has been caring for pets across Kolkata for nearly a decade. He specializes in internal medicine, diagnostics, and routine surgical procedures, with a gentle approach that puts nervous pets at ease.",
    imageId: "doctor-1",
  },
  {
    name: "Dr. Priya Banerjee, BVSc & AH, MVSc",
    experience: "6 years",
    specialization: "Preventive Care & Pet Nutrition",
    description: "Dr. Banerjee holds both bachelor's and master's degrees in veterinary science, with advanced training in preventive medicine and animal nutrition. She's passionate about educating pet parents on proper diet, weight management, and wellness programs that keep pets thriving throughout their lives.",
    imageId: "doctor-2",
  },
  {
    name: "Dr. Arjun Das, BVSc & AH",
    experience: "7 years",
    specialization: "Emergency Care & Surgical Procedures",
    description: "Dr. Das brings extensive experience in emergency veterinary medicine and has performed hundreds of successful surgeries. His calm demeanor and quick decision-making make him invaluable during critical situations. He's also skilled at post-operative care and rehabilitation guidance.",
    imageId: "doctor-3",
  },
];

export const allProducts = {
  "Pet Food": [
    { id: 'pf1', name: "Dry Dog Food", description: "Complete nutrition for all breeds and life stages", brands: "Pedigree, Royal Canin, Drools, Farmina", imageId: "product-dry-food" },
    { id: 'pf2', name: "Wet Dog Food", description: "Flavorful meals in cans and pouches", brands: "Pedigree, Cesar, Purina", imageId: "product-wet-food" },
    { id: 'pf3', name: "Cat Food", description: "Complete meals for feline health", brands: "Whiskas, Royal Canin, Me-O", imageId: "product-cat-food" },
    { id: 'pf4', name: "Breed-Specific Formulas", description: "Tailored nutrition for specific breeds like Labradors, German Shepherds, and Persian cats.", brands: "Royal Canin", imageId: "product-breed-food" },
    { id: 'pf5', name: "Puppy & Kitten Food", description: "Specialized growth formulas for the youngest members of your family.", brands: "Royal Canin, Drools, Whiskas", imageId: "product-puppy-food" },
    { id: 'pf6', name: "Small Pet Food", description: "Pellets, seeds, and mixes for rabbits, hamsters, and guinea pigs.", brands: "Vitapol, Taiyo", imageId: "product-small-pet-food" },
    { id: 'pf7', name: "Bird Food", description: "Nutritious seeds, pellets, and treats for parakeets, cockatiels, and other birds.", brands: "SmartHeart, Boltz", imageId: "product-bird-food" },
    { id: 'pf8', name: "Fish Feed", description: "High-quality flakes, pellets, and specialty feed for all types of aquarium fish.", brands: "Taiyo, Takara, Tetra", imageId: "product-fish-food" },
    { id: 'pf9', name: "Grain-Free & Sensitive Diet", description: "Special formulas for pets with allergies or sensitive stomachs.", brands: "Farmina N&D, Taste of the Wild", imageId: "product-grain-free" },
  ],
  "Treats": [
    { id: 't1', name: "Training Treats", description: "Small, delicious treats perfect for positive reinforcement during training sessions.", brands: "Chip Chops, Gnawlers", imageId: "product-training-treats" },
    { id: 't2', name: "Chew Sticks", description: "Long-lasting natural chews that help keep your dog engaged and support dental health.", brands: "Goodies, Dogsee Chew", imageId: "product-chew-sticks" },
    { id: 't3', name: "Jerky & Real Meat Treats", description: "High-protein jerky strips and real meat treats that dogs and cats love.", brands: "Chip Chops, JerHigh", imageId: "product-jerky" },
    { id: 't4', name: "Biscuits & Cookies", description: "Classic crunchy rewards in a variety of flavors and shapes for a satisfying snack.", brands: "Pedigree, Choostix, Meat Up", imageId: "product-biscuits" },
    { id: 't5', name: "Dental Chews", description: "Specially designed chews that help reduce plaque and tartar buildup for fresher breath.", brands: "Pedigree Dentastix, Greenies", imageId: "product-dental-chews" },
    { id: 't6', name: "Natural & Organic Treats", description: "Wholesome, single-ingredient treats with no artificial additives, colors, or preservatives.", brands: "Dogsee Chew", imageId: "product-natural-treats" },
    { id: 't7', name: "Catnip & Cat Treats", description: "A range of crunchy, creamy, and catnip-infused treats to delight your feline friend.", brands: "Temptations, Me-O", imageId: "product-catnip" },
    { id: 't8', name: "Lickable Treats for Cats", description: "Creamy, savory treats in convenient tubes, perfect for bonding with your cat.", brands: "Sheba, Meow-Meow", imageId: "product-lickable-treats" },
  ],
  "Toys": [
    { id: 'ty1', name: "Chew Toys", description: "Durable toys made from rubber and nylon to satisfy your dog's natural urge to chew.", brands: "KONG, Nylabone", imageId: "product-chew-toys" },
    { id: 'ty2', name: "Plush & Squeaky Toys", description: "Soft, cuddly, and squeaky toys for comfort and playful fun.", brands: "Trixie, GiGwi", imageId: "product-plush-toys" },
    { id: 'ty3', name: "Interactive & Puzzle Toys", description: "Engaging toys that challenge your pet's mind and help prevent boredom.", brands: "Trixie, Outward Hound", imageId: "product-puzzle-toys" },
    { id: 'ty4', name: "Fetch Toys", description: "Balls, frisbees, and launchers for endless games of fetch at the park or at home.", brands: "Chuckit!, KONG", imageId: "product-fetch-toys" },
    { id: 'ty5', name: "Cat Teasers & Wands", description: "Feather wands and teaser toys to stimulate your cat's hunting instincts.", brands: "GiGwi, Trixie", imageId: "product-cat-wands" },
    { id: 'ty6', name: "Balls & Chase Toys for Cats", description: "Lightweight balls, mice, and other chase toys to keep your cat active and entertained.", brands: "Trixie", imageId: "product-cat-balls" },
  ],
  "Accessories": [
    { id: 'ac1', name: "Leashes & Harnesses", description: "A wide variety of styles and sizes for safe and comfortable walks.", brands: "Trixie, Ruffwear", imageId: "product-leashes" },
    { id: 'ac2', name: "Collars & ID Tags", description: "Stylish and durable collars with options for custom ID tags for your pet's safety.", brands: "Heads Up For Tails", imageId: "product-collars" },
    { id: 'ac3', name: "Beds & Bedding", description: "Cozy and comfortable beds in various sizes to give your pet a perfect place to rest.", brands: "Trixie, HUFT", imageId: "product-beds" },
    { id: 'ac4', name: "Food & Water Bowls", description: "Durable and easy-to-clean bowls in stainless steel, ceramic, and plastic.", brands: "Trixie, Savic", imageId: "product-bowls" },
    { id: 'ac5', name: "Carriers & Travel Gear", description: "Safe and comfortable carriers for travel, from short trips to the vet to longer journeys.", brands: "Trixie, Savic", imageId: "product-carriers" },
    { id: 'ac6', name: "Clothing & Apparel", description: "Stylish and functional apparel like raincoats and winter jackets to keep your pet comfortable.", brands: "Trixie", imageId: "product-apparel" },
    { id: 'ac7', name: "Litter Boxes & Scoops", description: "A selection of litter boxes and accessories to keep your cat's space clean and odor-free.", brands: "Savic, Trixie", imageId: "product-litter-box" },
    { id: 'ac8', name: "Cages & Habitats", description: "Secure and spacious cages for birds, hamsters, and other small pets.", brands: "Vitapol, Imac", imageId: "product-cages" },
  ],
  "Grooming": [
    { id: 'gr1', name: "Shampoos & Conditioners", description: "Medicated, hypoallergenic, and regular shampoos for all coat types.", brands: "Himalaya, Tropiclean", imageId: "product-shampoo" },
    { id: 'gr2', name: "Brushes & Combs", description: "Slicker brushes, de-shedding tools, and combs for maintaining a healthy coat.", brands: "Trixie, Andis", imageId: "product-brushes" },
    { id: 'gr3', name: "Nail Clippers & Files", description: "Easy-to-use nail clippers and grinders for stress-free nail care at home.", brands: "Andis, Trixie", imageId: "product-nail-clippers" },
    { id: 'gr4', name: "Paw & Skin Care", description: "Balms and creams to soothe and protect your pet's paw pads and skin.", brands: "Himalaya, Natural Remedies", imageId: "product-paw-care" },
  ],
  "Health & Pharmacy": [
    { id: 'hp1', name: "Flea & Tick Prevention", description: "Spot-on treatments, collars, and sprays to protect your pet from parasites.", brands: "Bay-o-pet, Frontline", imageId: "product-flea-tick" },
    { id: 'hp2', name: "Deworming Medication", description: "Tablets and syrups for preventing and treating intestinal worms.", brands: "Drontal, Canworm", imageId: "product-deworming" },
    { id: 'hp3', name: "Vitamins & Supplements", description: "Joint support, skin & coat supplements, and multivitamins for overall health.", brands: "Virbac, Beaphar", imageId: "product-supplements" },
    { id: 'hp4', name: "Prescription Diets", description: "Veterinarian-prescribed food for specific health conditions like kidney or urinary issues.", brands: "Royal Canin Veterinary", imageId: "product-rx-diet" },
    { id: 'hp5', name: "First Aid Supplies", description: "Antiseptic solutions, bandages, and other essentials for a pet first-aid kit.", brands: "Himalaya, Cipla", imageId: "product-first-aid" },
    { id: 'hp6', name: "Calming Aids", description: "Products to help reduce anxiety and stress in pets during travel or thunderstorms.", brands: "Beaphar, Natural Remedies", imageId: "product-calming" },
  ],
};

export type Product = (typeof allProducts)[keyof typeof allProducts][number];
export type ProductCategory = keyof typeof allProducts;


export const petNameGenerator = {
  adjectives: ["Buddy", "Lucy", "Max", "Bella", "Charlie", "Daisy", "Rocky", "Molly", "Toby", "Sadie", "Coco", "Lola", "Leo", "Zoe", "Milo", "Ruby", "Oscar", "Rosie", "Teddy", "Penny", "Winston", "Stella", "Simba", "Chloe", "Gus", "Lily", "Henry", "Luna", "Oliver", "Nala"],
  nouns: ["Sparky", "Shadow", "Smokey", "Ginger", "Pepper", "Oreo", "Mocha", "Cinnamon", "Biscuit", "Waffles", "Peanut", "Pickles", "Nugget", "Muffin", "Pumpkin", "Snickers", "Blue", "Bear", "Moose", "Goose", "Pippin", "Gizmo", "Zeus", "Apollo", "Thor", "Loki", "Athena", "Hera", "Artemis", "Atlas"]
};
