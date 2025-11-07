const productsData = [
  {
    id: 1,
    name: "Adjustable Dumbbell Set (5-50 lbs)",
    description:
      "Compact and versatile dumbbell set with quick-adjust weight settings for efficient home workouts.",
    price: 299.99,
    original_price: 449.99,
    rating: 4.8,
    reviews: 1247,
    in_stock: true,
    image_urls: [
      "https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg",
      "https://images.pexels.com/photos/4162484/pexels-photo-4162484.jpeg",
      "https://images.pexels.com/photos/4162485/pexels-photo-4162485.jpeg",
    ],
    features: [
      "15 adjustable weight settings",
      "Rubber-coated grip handles",
      "Compact storage tray",
      "Durable steel construction",
    ],
    specifications: {
      "Weight Range": "5-50 lbs per dumbbell",
      Material: "Steel, Rubber",
      Warranty: "2 Years",
      Dimensions: '16" x 8" x 9"',
    },
  },
  {
    id: 2,
    name: "Flat Weight Bench",
    description:
      "Heavy-duty flat bench ideal for strength training, dumbbell workouts, and core exercises.",
    price: 129.99,
    original_price: 179.99,
    rating: 4.6,
    reviews: 892,
    in_stock: true,
    image_urls: [
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
      "https://images.pexels.com/photos/1552243/pexels-photo-1552243.jpeg",
    ],
    features: [
      "High-density foam padding",
      "Steel frame with powder coating",
      "Non-slip rubber feet",
    ],
    specifications: {
      "Max Weight Capacity": "800 lbs",
      Material: "Steel, Vinyl",
      Warranty: "1 Year",
      Dimensions: '45" x 16" x 18"',
    },
  },
  {
    id: 3,
    name: "Adjustable Workout Bench",
    description:
      "Multi-angle adjustable bench for incline, decline, and flat workouts with comfort padding.",
    price: 189.99,
    original_price: 259.99,
    rating: 4.7,
    reviews: 1032,
    in_stock: true,
    image_urls: [
      "https://images.pexels.com/photos/4753879/pexels-photo-4753879.jpeg",
      "https://images.pexels.com/photos/4761664/pexels-photo-4761664.jpeg",
    ],
    features: [
      "7 adjustable backrest positions",
      "Foldable for easy storage",
      "Thick foam cushioning",
    ],
    specifications: {
      "Weight Capacity": "600 lbs",
      Material: "Steel, Foam",
      Warranty: "2 Years",
    },
  },
  {
    id: 4,
    name: "Foldable Treadmill Pro 5000",
    description:
      "Powerful home treadmill with incline control, Bluetooth speakers, and foldable design.",
    price: 799.99,
    original_price: 1099.99,
    rating: 4.9,
    reviews: 2143,
    in_stock: true,
    image_urls: [
      "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
      "https://images.pexels.com/photos/1954525/pexels-photo-1954525.jpeg",
    ],
    features: [
      "3.5 HP motor with auto incline",
      "Bluetooth speakers",
      "Shock-absorbing deck",
      "Foldable design",
    ],
    specifications: {
      Speed: "0.5–12 mph",
      Incline: "0–15%",
      Warranty: "3 Years motor",
      "Max User Weight": "300 lbs",
    },
  },
  {
    id: 5,
    name: "Stationary Exercise Bike X200",
    description:
      "Silent magnetic resistance bike with digital display and adjustable seat height.",
    price: 399.99,
    original_price: 599.99,
    rating: 4.7,
    reviews: 874,
    in_stock: true,
    image_urls: [
      "https://images.pexels.com/photos/1954528/pexels-photo-1954528.jpeg",
      "https://images.pexels.com/photos/1954529/pexels-photo-1954529.jpeg",
    ],
    features: [
      "8 resistance levels",
      "LCD performance monitor",
      "Quiet magnetic system",
      "Adjustable seat and handlebars",
    ],
    specifications: {
      "Max User Weight": "265 lbs",
      Resistance: "Magnetic",
      Warranty: "2 Years",
    },
  },
  {
    id: 6,
    name: "Yoga Mat Pro 10mm",
    description:
      "Non-slip, high-density yoga mat providing superior cushioning and stability.",
    price: 49.99,
    original_price: 79.99,
    rating: 4.5,
    reviews: 546,
    in_stock: true,
    image_urls: [
      "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg",
      "https://images.pexels.com/photos/3823077/pexels-photo-3823077.jpeg",
    ],
    features: [
      "Non-slip surface texture",
      "Eco-friendly material",
      "Extra thick (10mm)",
    ],
    specifications: {
      Dimensions: '72" x 24" x 10mm',
      Material: "TPE Foam",
      Warranty: "1 Year",
    },
  },
  {
    id: 7,
    name: "Kettlebell Set (5–50 lbs)",
    description:
      "Full set of vinyl-coated kettlebells ideal for cross-training and functional workouts.",
    price: 259.99,
    original_price: 349.99,
    rating: 4.8,
    reviews: 734,
    in_stock: true,
    image_urls: [
      "https://images.pexels.com/photos/949132/pexels-photo-949132.jpeg",
      "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg",
    ],
    features: [
      "Vinyl coating prevents floor damage",
      "Wide handles for firm grip",
      "Clearly marked weight indicators",
    ],
    specifications: {
      "Weight Range": "5–50 lbs",
      Material: "Cast Iron, Vinyl",
      Warranty: "2 Years",
    },
  },
  {
    id: 8,
    name: "Resistance Band Set (11 pcs)",
    description:
      "Portable resistance bands with handles, ankle straps, and door anchor for full-body workouts.",
    price: 39.99,
    original_price: 59.99,
    rating: 4.6,
    reviews: 1284,
    in_stock: true,
    image_urls: [
      "https://images.pexels.com/photos/6453391/pexels-photo-6453391.jpeg",
      "https://images.pexels.com/photos/6453392/pexels-photo-6453392.jpeg",
    ],
    features: [
      "5 color-coded resistance bands",
      "Anti-snap latex material",
      "Includes handles and bag",
    ],
    specifications: {
      Resistance: "10–50 lbs",
      Material: "Natural Latex",
      Warranty: "6 Months",
    },
  },
  {
    id: 9,
    name: "Pull-Up Bar Doorway Mount",
    description:
      "Adjustable doorway pull-up bar with anti-slip grips and easy setup for upper body training.",
    price: 59.99,
    original_price: 89.99,
    rating: 4.4,
    reviews: 423,
    in_stock: true,
    image_urls: [
      "https://images.pexels.com/photos/3823035/pexels-photo-3823035.jpeg",
      "https://images.pexels.com/photos/3823037/pexels-photo-3823037.jpeg",
    ],
    features: [
      "No screws required",
      "Foam anti-slip grips",
      "Adjustable length design",
    ],
    specifications: {
      "Max Load": "220 lbs",
      Material: "Steel, Foam",
      Warranty: "1 Year",
    },
  },
  {
    id: 10,
    name: "Barbell Set 100kg",
    description:
      "Olympic-style barbell and weight plate set for serious strength training at home.",
    price: 549.99,
    original_price: 749.99,
    rating: 4.9,
    reviews: 612,
    in_stock: true,
    image_urls: [
      "https://images.pexels.com/photos/669580/pexels-photo-669580.jpeg",
      "https://images.pexels.com/photos/669577/pexels-photo-669577.jpeg",
    ],
    features: [
      "Includes 7ft Olympic barbell",
      "Rubber-coated plates",
      "Spring collars included",
    ],
    specifications: {
      "Total Weight": "100kg",
      Material: "Steel, Rubber",
      Warranty: "3 Years",
    },
  },
  // --- Add 10 more to reach 20 ---
  {
    id: 11,
    name: "Foam Roller Pro",
    description:
      "High-density foam roller for deep tissue massage and muscle recovery.",
    price: 34.99,
    original_price: 49.99,
    rating: 4.6,
    reviews: 521,
    in_stock: true,
    image_urls: [
      "https://images.pexels.com/photos/6453398/pexels-photo-6453398.jpeg",
    ],
    features: [
      "Textured surface",
      "Lightweight and portable",
      "Durable EVA foam",
    ],
    specifications: {
      Length: '24"',
      Material: "EVA Foam",
    },
  },
  {
    id: 12,
    name: "Ab Wheel Roller Kit",
    description:
      "Core strengthening kit with ab wheel, knee pad, and resistance bands.",
    price: 29.99,
    original_price: 49.99,
    rating: 4.5,
    reviews: 631,
    in_stock: true,
    image_urls: [
      "https://images.pexels.com/photos/3823061/pexels-photo-3823061.jpeg",
    ],
    features: ["Non-slip handles", "Smooth rolling", "Includes knee pad"],
    specifications: {
      Material: "Steel, ABS Plastic",
    },
  },
  {
    id: 13,
    name: "Gym Gloves GripX",
    description:
      "Breathable, padded workout gloves for improved grip and hand protection.",
    price: 24.99,
    original_price: 34.99,
    rating: 4.3,
    reviews: 412,
    in_stock: true,
    image_urls: [
      "https://images.pexels.com/photos/3823082/pexels-photo-3823082.jpeg",
    ],
    features: ["Anti-slip palm", "Adjustable wrist strap", "Breathable mesh"],
    specifications: {
      Material: "Synthetic Leather, Mesh",
    },
  },
  {
    id: 14,
    name: "Gym Bag Pro Duffel",
    description:
      "Spacious waterproof duffel bag with separate shoe compartment.",
    price: 59.99,
    original_price: 79.99,
    rating: 4.8,
    reviews: 728,
    in_stock: true,
    image_urls: [
      "https://images.pexels.com/photos/6453401/pexels-photo-6453401.jpeg",
    ],
    features: [
      "Water-resistant fabric",
      "Separate shoe pocket",
      "Adjustable strap",
    ],
    specifications: {
      Capacity: "45L",
      Material: "Nylon",
    },
  },
  {
    id: 15,
    name: "Skipping Rope SpeedPro",
    description:
      "Adjustable speed jump rope for cardio, boxing, and HIIT training.",
    price: 19.99,
    original_price: 29.99,
    rating: 4.5,
    reviews: 954,
    in_stock: true,
    image_urls: [
      "https://images.pexels.com/photos/6453390/pexels-photo-6453390.jpeg",
    ],
    features: [
      "Adjustable cable",
      "Tangle-free bearings",
      "Lightweight design",
    ],
    specifications: {
      Length: "3m adjustable",
      Material: "Steel cable, PVC",
    },
  },
  {
    id: 16,
    name: "Power Rack Home Gym",
    description:
      "Full cage power rack for squats, pull-ups, and bench presses with safety bars.",
    price: 999.99,
    original_price: 1299.99,
    rating: 4.9,
    reviews: 337,
    in_stock: true,
    image_urls: [
      "https://images.pexels.com/photos/1552246/pexels-photo-1552246.jpeg",
    ],
    features: [
      "Adjustable safety spotters",
      "Pull-up bar included",
      "Heavy-duty steel frame",
    ],
    specifications: {
      "Max Weight Capacity": "800 lbs",
      Material: "Steel",
      Warranty: "3 Years",
    },
  },
  {
    id: 17,
    name: "Smith Machine Combo Rack",
    description:
      "Commercial-grade Smith machine with cable system and pull-up bar.",
    price: 1899.99,
    original_price: 2499.99,
    rating: 5.0,
    reviews: 189,
    in_stock: true,
    image_urls: [
      "https://images.pexels.com/photos/1552248/pexels-photo-1552248.jpeg",
    ],
    features: [
      "Integrated cable pulley system",
      "Linear bearing barbell guides",
      "Multi-grip pull-up bar",
    ],
    specifications: {
      "Max Load": "900 lbs",
      Material: "Steel",
      Warranty: "3 Years",
    },
  },
  {
    id: 18,
    name: "Adjustable Aerobic Stepper",
    description:
      "Sturdy step platform with height adjustments for cardio and strength workouts.",
    price: 59.99,
    original_price: 89.99,
    rating: 4.6,
    reviews: 489,
    in_stock: true,
    image_urls: [
      "https://images.pexels.com/photos/6453389/pexels-photo-6453389.jpeg",
    ],
    features: [
      "3 adjustable heights",
      "Non-slip surface",
      "Durable plastic base",
    ],
    specifications: {
      "Max Weight": "250 lbs",
      Material: "ABS Plastic",
    },
  },
  {
    id: 19,
    name: "Medicine Ball 10lb",
    description:
      "Durable rubber medicine ball ideal for functional and core exercises.",
    price: 39.99,
    original_price: 59.99,
    rating: 4.7,
    reviews: 312,
    in_stock: true,
    image_urls: [
      "https://images.pexels.com/photos/6453388/pexels-photo-6453388.jpeg",
    ],
    features: [
      "Textured surface for grip",
      "Bounce-resistant",
      "Durable rubber shell",
    ],
    specifications: {
      Weight: "10 lbs",
      Diameter: '12"',
    },
  },
  {
    id: 20,
    name: "Gym Floor Mats (Set of 6)",
    description:
      "Interlocking EVA foam mats for floor protection and shock absorption.",
    price: 79.99,
    original_price: 109.99,
    rating: 4.8,
    reviews: 406,
    in_stock: true,
    image_urls: [
      "https://images.pexels.com/photos/6453387/pexels-photo-6453387.jpeg",
    ],
    features: [
      "Slip-resistant texture",
      "Easy interlocking design",
      "Waterproof and easy to clean",
    ],
    specifications: {
      "Mat Size": '24" x 24" each',
      Material: "EVA Foam",
    },
  },
];

export default productsData;
