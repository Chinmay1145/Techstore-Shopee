import { Product, Category } from "@/types/product";
import phone1 from "@/assets/phone-1.jpg";
import earbuds1 from "@/assets/earbuds-1.jpg";
import watch1 from "@/assets/watch-1.jpg";
import laptop1 from "@/assets/laptop-1.jpg";
import tablet1 from "@/assets/tablet-1.jpg";
import cable1 from "@/assets/cable-1.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "OnePlus 15",
    price: 72999,
    image: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/09/oneplus-15-sand-storm-back.jpg?quality=90&strip=all&crop=16.65,0,66.7,100",
    category: "Smartphones",
    rating: 4.8,
    reviews: 342,
    description: "Latest flagship smartphone with advanced camera system and all-day battery life.",
    inStock: true,
    features: [
      "6.7-inch AMOLED Display",
      "128GB Storage",
      "5G Connectivity",
      "48MP Triple Camera",
      "Fast Charging"
    ]
  },
  {
    id: "2",
    name: "Boat Airdopes 141",
    price: 8999,
    image: "https://www.boat-lifestyle.com/cdn/shop/files/3.1_1_1500x.jpg?v=1722233657",
    category: "Audio",
    rating: 4.6,
    reviews: 523,
    description: "Premium wireless earbuds with active noise cancellation and premium sound quality.",
    inStock: true,
    features: [
      "Active Noise Cancellation",
      "30-hour Battery Life",
      "IPX4 Water Resistance",
      "Touch Controls",
      "Premium Audio Drivers"
    ]
  },
  {
    id: "3",
    name: "Redmi Watch 5 Active",
    price: 8999,
    image: "https://media.mi-home.pl/products/redmi-watch-5-active/redmi-watch-5-active-8.JPG",
    category: "Wearables",
    rating: 4.7,
    reviews: 289,
    description: "Feature-packed smartwatch with health tracking and seamless connectivity.",
    inStock: true,
    features: [
      "Always-on Display",
      "Heart Rate Monitor",
      "GPS Tracking",
      "7-day Battery Life",
      "Water Resistant"
    ]
  },
  {
    id: "4",
    name: "HP 15-HR1000TU Thin & Light Laptop",
    price: 73999,
    image: "https://rukminim2.flixcart.com/image/480/640/xif0q/computer/r/6/h/-original-imahbpzxrubr8h7g.jpeg?q=90",
    category: "Computers",
    rating: 4.9,
    reviews: 156,
    description: "Powerful laptop for professionals with stunning display and long battery life.",
    inStock: true,
    features: [
      "Intel Core i7 Processor",
      "16GB RAM",
      "512GB SSD",
      "15.6-inch 4K Display",
      "All-day Battery"
    ]
  },
  {
    id: "5",
    name: "Lenovo Tab P12 Pro ",
    price: 50000,
    image: "https://www.gadgetmatch.com/wp-content/uploads/2021/09/gadgetmatch-lenovo-september-2021-tab-p12-pro.jpg",
    category: "Tablets",
    rating: 4.7,
    reviews: 198,
    description: "Versatile tablet perfect for work and entertainment with stylus support.",
    inStock: true,
    features: [
      "12.9-inch Liquid Retina Display",
      "256GB Storage",
      "Stylus Support",
      "All-day Battery",
      "Face Recognition"
    ]
  },
  {
    id: "6",
    name: "Xiaomi HyperCharge Cable 6A",
    price: 799,
    image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/12/1/cc941a37-b1ea-401f-a494-c000a0711e93_69313_6.jpg",
    category: "Accessories",
    rating: 4.4,
    reviews: 876,
    description: "Durable USB-C charging cable with fast charging support.",
    inStock: true,
    features: [
      "USB-C to USB-C",
      "Fast Charging Support",
      "Braided Design",
      "2-meter Length",
      "Universal Compatibility"
    ]
  },
  {
    id: "7",
    name: "Realme GT 8 Pro",
    price: 79999,
    image: "https://www.themobileindian.com/wp-content/uploads/2025/11/GT-8-Pro-Dream-Edition-specs-600x600.jpg",
    category: "Smartphones",
    rating: 4.9,
    reviews: 567,
    description: "Top-of-the-line smartphone with cutting-edge technology and premium build.",
    inStock: true,
    features: [
      "6.9-inch AMOLED Display",
      "256GB Storage",
      "5G Connectivity",
      "108MP Quad Camera",
      "Wireless Charging"
    ]
  },
  {
    id: "8",
    name: "JBL Tune 760NC",
    price: 15999,
    image: "https://m.media-amazon.com/images/I/71TvdUf4kyL.jpg",
    category: "Audio",
    rating: 4.7,
    reviews: 423,
    description: "Over-ear headphones with superior noise cancellation and premium comfort.",
    inStock: true,
    features: [
      "Active Noise Cancellation",
      "40-hour Battery Life",
      "Premium Leather Cushions",
      "Hi-Res Audio",
      "Foldable Design"
    ]
  },
  {
    id: "9",
    name: "Garmin Forerunner 55",
    price: 18500,
    image: "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/2023/04/garminforerunner55-1.jpg?q=50&fit=contain&w=420&dpr=1.5",
    category: "Wearables",
    rating: 4.5,
    reviews: 345,
    description: "Advanced fitness tracker with comprehensive health monitoring features.",
    inStock: true,
    features: [
      "Blood Oxygen Monitor",
      "Sleep Tracking",
      "50+ Sport Modes",
      "10-day Battery Life",
      "5ATM Water Resistant"
    ]
  },
  {
    id: "10",
    name: "HP Victus Gaming Laptop",
    price: 75500,
    image: "https://www.cnet.com/a/img/resize/4cbf541c59e87e5754d30fb6fb4e59f3028c2b73/hub/2024/02/23/346b9b88-7868-49f1-a944-94f1388605a5/hp-victus-16-overview.jpg?auto=webp&fit=crop&height=900&precrop=2751,2068,x604,y124&width=1200",
    category: "Computers",
    rating: 4.8,
    reviews: 234,
    description: "High-performance gaming laptop with RGB keyboard and advanced cooling.",
    inStock: true,
    features: [
      "Intel Core i9 Processor",
      "32GB RAM",
      "1TB SSD",
      "RTX 4070 Graphics",
      "144Hz Display"
    ]
  },
  {
    id: "11",
    name: "Apple iPad mini Wi-Fi",
    price: 79990,
    image: "https://www.imagineonline.store/cdn/shop/files/iPad_mini_Cellular_Starlight_PDP_Image_Position_2__en-IN_23d19b08-efda-4fa8-abe7-9dcbf5bfe8aa.jpg?v=1729009637&width=823",
    category: "Tablets",
    rating: 4.6,
    reviews: 289,
    description: "Compact tablet perfect for reading and casual browsing.",
    inStock: true,
    features: [
      "8.3-inch Retina Display",
      "128GB Storage",
      "All-day Battery",
      "Touch ID",
      "Ultra Portable"
    ]
  },
  {
    id: "12",
    name: "Samsung Super Fast Wireless Charger Duo Pad 15W",
    price: 4999,
    image: "https://media.printables.com/media/prints/1065750/images/8064005_facb1c81-912f-4105-89d3-6f778c56c510_e2388369-620c-49a9-9002-90c39f0e6f4c/thumbs/inside/1280x960/jpg/large_display_bf699730-c73e-4c95-a987-7320d8f421dd_1065750.webp",
    category: "Accessories",
    rating: 4.3,
    reviews: 567,
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    inStock: true,
    features: [
      "15W Fast Charging",
      "Universal Compatibility",
      "LED Indicator",
      "Non-slip Surface",
      "Compact Design"
    ]
  },
  {
    id: "13",
    name: "Samsung Galaxy S25 Ultra",
    price: 80999,
    image: "https://images.unsplash.com/photo-1738830274216-20f63b8a0c02?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Ftc3VuZyUyMGdhbGF4eSUyMHMyNSUyMHVsdHJhfGVufDB8fDB8fHww",
    category: "Smartphones",
    rating: 4.2,
    reviews: 789,
    description: "Affordable smartphone with essential features and reliable performance.",
    inStock: true,
    features: [
      "6.5-inch HD+ Display",
      "64GB Storage",
      "4G Connectivity",
      "13MP Dual Camera",
      "Long Battery Life"
    ]
  },
  {
    id: "14",
    name: "Samsung Galaxy Buds3 Pro",
    price: 14999,
    image: "https://image-us.samsung.com/SamsungUS/home/mobile-audio/galaxy-buds3-pro/images/SDSAC-9252-Buds3_Pro_ProductKV_2P_CES_Logo_RGB-800X600.jpg?$product-details-jpg$",
    category: "Audio",
    rating: 4.8,
    reviews: 645,
    description: "Premium earbuds with spatial audio and adaptive transparency.",
    inStock: true,
    features: [
      "Spatial Audio",
      "Adaptive ANC",
      "35-hour Total Battery",
      "IPX5 Water Resistance",
      "Wireless Charging Case"
    ]
  },
  {
    id: "15",
    name: "Samsung Galaxy Watch8",
    price: 39999,
    image: "https://img.global.news.samsung.com/global/wp-content/uploads/2025/07/Samsung-Mobile-Galaxy-Unpacked-July-2025-Galaxy-Watch8-Series-Classic-Ultra-Comfort-PR_dl1.jpg",
    category: "Wearables",
    rating: 4.9,
    reviews: 156,
    description: "Premium smartwatch with titanium case and sapphire crystal display.",
    inStock: true,
    features: [
      "Titanium Body",
      "Sapphire Crystal",
      "ECG Capable",
      "Always-on Display",
      "Cellular Connectivity"
    ]
  },
  {
    id: "16",
    name: "Asus Zenbook 14 Intel Core Ultra",
    price: 94990,
    image: "https://www.asus.com/media/global/SKU/90NB11R1-M001L0/r6uuyvfm6nujxzaz.jpg",
    category: "Computers",
    rating: 4.7,
    reviews: 298,
    description: "Lightweight business laptop with enterprise-grade security.",
    inStock: true,
    features: [
      "Intel Core i5 Processor",
      "16GB RAM",
      "512GB SSD",
      "14-inch Full HD Display",
      "Fingerprint Reader"
    ]
  },
  {
    id: "17",
    name: "OnePlus Pad Go",
    price: 19999,
    image: "https://i.pinimg.com/736x/88/37/80/883780002e017c841b9a2d02d1ba6e71.jpg",
    category: "Tablets",
    rating: 4.4,
    reviews: 423,
    description: "Compact tablet perfect for reading and casual browsing.",
    inStock: true,
    features: [
      "10-inch HD Display",
      "64GB Storage",
      "Parental Controls",
      "Educational Content"
    ]
  },
  {
    id: "18",
    name: "Lemorele TC38L USB-C 8-in-1 Hub",
    price: 2499,
    image: "https://us.lemorele.com/cdn/shop/files/1_3daef8b7-56b7-4e9c-8ddd-d6dc85017a10.jpg?v=1710326730&width=1090",
    category: "Accessories",
    rating: 4.5,
    reviews: 734,
    description: "7-in-1 USB-C hub with multiple ports for enhanced connectivity.",
    inStock: true,
    features: [
      "HDMI 4K Output",
      "3x USB 3.0 Ports",
      "SD Card Reader",
      "USB-C PD Charging",
      "Aluminum Body"
    ]
  },
  {
    id: "19",
    name: "Vivo X300 Pro",
    price: 72550,
    image: "https://images-cdn.ubuy.co.in/68fd0b2d5a3de016b109e99e-vivo-x300-pro-5g-mobile-phone-6-78-inch.jpg",
    category: "Smartphones",
    rating: 4.6,
    reviews: 445,
    description: "Advanced 5G smartphone with excellent camera system and fast charging.",
    inStock: true,
    features: [
      "6.6-inch AMOLED Display",
      "128GB Storage",
      "5G Connectivity",
      "64MP Triple Camera",
      "65W Fast Charging"
    ]
  },
  {
    id: "20",
    name: "Sony MDR-MV1 Open Back Studio Monitor Headphone",
    price: 18999,
    image: "https://m.media-amazon.com/images/I/61C4FkFBpYL._AC_UF1000,1000_QL80_.jpg",
    category: "Audio",
    rating: 4.8,
    reviews: 234,
    description: "Professional studio-grade headphones for audio enthusiasts.",
    inStock: true,
    features: [
      "Studio-Quality Sound",
      "Detachable Cable",
      "50mm Drivers",
      "Comfortable Padding",
      "Frequency Response 5Hz-40kHz"
    ]
  },
  {
    id: "21",
    name: "Apple Watch SE 3",
    price: 30999,
    image: "https://i.ytimg.com/vi/zAcAXapN8-4/sddefault.jpg",
    category: "Wearables",
    rating: 4.3,
    reviews: 892,
    description: "Affordable fitness band with essential health tracking features.",
    inStock: true,
    features: [
      "Heart Rate Monitor",
      "Step Counter",
      "Sleep Tracking",
      "14-day Battery Life",
      "Water Resistant"
    ]
  },
  {
    id: "22",
    name: "ASUS Vivobook 16 Laptop",
    price: 65999,
    image: "https://www.computronicsmultivision.com/uploaded_files/more_image/95687951.jpg",
    category: "Computers",
    rating: 4.9,
    reviews: 167,
    description: "Ultra-thin premium laptop with exceptional build quality and performance.",
    inStock: true,
    features: [
      "Intel Core i7 Processor",
      "16GB RAM",
      "1TB SSD",
      "13.3-inch 4K OLED Display",
      "Thunderbolt 4 Ports"
    ]
  },
  {
    id: "23",
    name: "Huion Kamvas Pro 19 Pen & Touch Display",
    price: 68999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDG-Och0JC8SRDVWrGNEQZ7_2Q56MpGifPw&s",
    category: "Tablets",
    rating: 4.7,
    reviews: 178,
    description: "Professional drawing tablet with pressure-sensitive stylus.",
    inStock: true,
    features: [
      "12.9-inch Display",
      "8192 Pressure Levels",
      "Tilt Recognition",
      "USB-C Connectivity",
      "Anti-glare Screen"
    ]
  },
  {
    id: "24",
    name: "Anker MagGo Wireless Charger 2-in-1 Stand",
    price: 4999,
    image: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/MagGo-Wireless-Charger-2-in-1-Stand-header.jpg",
    category: "Accessories",
    rating: 4.4,
    reviews: 567,
    description: "2-in-1 phone stand with wireless charging capability.",
    inStock: true,
    features: [
      "Adjustable Angle",
      "15W Fast Charging",
      "Qi Compatible",
      "LED Ring Light",
      "Anti-slip Base"
    ]
  },
  {
    id: "25",
    name: "Tecno Phantom V Fold 2",
    price: 69999,
    image: "https://www.cnet.com/a/img/resize/ff60ae9ade41dfed6769722c7820aadf9501bcae/hub/2024/09/13/d359ca65-27ca-4048-9479-b42136de4d44/phantom-v-fold-2-6986.jpg?auto=webp&fit=crop&height=1200&width=1200",
    category: "Smartphones",
    rating: 4.7,
    reviews: 123,
    description: "Innovative foldable smartphone with dual-screen technology.",
    inStock: true,
    features: [
      "7.6-inch Foldable Display",
      "512GB Storage",
      "5G Connectivity",
      "50MP Camera System",
      "Multi-window Support"
    ]
  },
  {
    id: "26",
    name: "BoAt Stone Spinx Pro Bluetooth Speaker",
    price: 6999,
    image: "https://cdn1.smartprix.com/rx-iXaZ0H6Sr-w420-h420/boat-stone-spinx-pro.webp",
    category: "Audio",
    rating: 4.6,
    reviews: 456,
    description: "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
    inStock: true,
    features: [
      "360-degree Sound",
      "20-hour Battery Life",
      "IPX7 Waterproof",
      "True Wireless Stereo",
      "Built-in Microphone"
    ]
  },
  {
    id: "27",
    name: "Apple MacBook Air M2",
    price: 99900,
    image: "https://i.pinimg.com/474x/05/b8/d5/05b8d552c1e280fc830acada5d353e94.jpg",
    category: "Computers",
    rating: 4.8,
    reviews: 312,
    description: "Sleek aluminum laptop with stunning Retina display and all-day battery.",
    inStock: true,
    features: [
      "M2 Chip",
      "16GB Unified Memory",
      "512GB SSD",
      "13.6-inch Liquid Retina",
      "18-hour Battery Life"
    ]
  },
  {
    id: "28",
    name: "AlignMaster Full Cover Screen Protector for iPhone 13 Series",
    price: 599,
    image: "https://www.spigenstore.com.au/assets/full/va4460.jpg?20230614203454",
    category: "Accessories",
    rating: 4.5,
    reviews: 923,
    description: "Premium tempered glass screen protector with easy installation kit.",
    inStock: true,
    features: [
      "9H Hardness",
      "Oleophobic Coating",
      "Bubble-free Installation",
      "Ultra-clear",
      "Case Friendly"
    ]
  },
  {
    id: "29",
    name: "Dell Inspiron 14 5000 Laptop",
    price: 55999,
    image: "https://www.notebookcheck.net/uploads/tx_nbc2/Dell_Inspiron_14_5441__1_.JPG",
    category: "Computers",
    rating: 4.6,
    reviews: 214,
    description: "Versatile laptop with touchscreen and solid performance for everyday tasks.",
    inStock: true,
    features: [
      "14-inch Touchscreen",
      "Intel Core i5",
      "8GB RAM",
      "512GB SSD",
      "Windows 11"
    ]
  },
  {
    id: "30",
    name: "Oppo Find X9",
    price: 74999,
    image: "https://cdn.beebom.com/content/2025/10/find-x9-series-fi.jpg",
    category: "Smartphones",
    rating: 4.7,
    reviews: 378,
    description: "Flagship smartphone with cutting-edge features and sleek design.",
    inStock: true,
    features: [
      "6.7-inch AMOLED Display",
      "256GB Storage",
      "5G Connectivity",
      "50MP Quad Camera",
      "80W Fast Charging"
    ]
  },
  {
    id: "31",
    name: "Samsung Galaxy Tab S9+",
    price: 84999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9GrGo3Eo2FpvAYDgck6yNRr1jmeexDXebww&s",
    category: "Tablets",
    rating: 4.8,
    reviews: 256,
    description: "High-end tablet with vibrant display and powerful performance for multitasking.",
    inStock: true,
    features: [
      "12.4-inch Super AMOLED Display",
      "512GB Storage",
      "S Pen Support",
      "All-day Battery",
      "5G Connectivity"
    ]
  },
  {
    id: "32",
    name: "Anker PowerCore 10000 Portable Charger",
    price: 2499,
    image: "https://m.media-amazon.com/images/I/61s+OTDUsKL.jpg",
    category: "Accessories",
    rating: 4.9,
    reviews: 1456,
    description: "Compact portable charger with high-capacity battery for on-the-go charging.",
    inStock: true,
    features: [
      "10000mAh Capacity",
      "Fast Charging",
      "Lightweight Design",
      "Multi-device Charging",
      "Safety Protection"
    ]
  },
  {
    id: "33",
    name: "Google Pixel 8 Pro",
    price: 79999,
    image: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-10/27/full/1698383812-4721.jpeg",
    category: "Smartphones",
    rating: 4.8,
    reviews: 412,
    description: "Flagship smartphone with advanced camera and AI features.",
    inStock: true,
    features: [
      "6.7-inch OLED Display",
      "512GB Storage",
      "5G Connectivity",
      "50MP Triple Camera",
      "Fast Charging"
    ]
  },
  {
    id: "34",
    name: "Bose QuietComfort 45 Headphones",
    price: 24999,
    image: "https://cdn.headphonecheck.com/wp-content/uploads/Bose-QuietComfort-45-10-1920x1080.jpg",
    category: "Audio",
    rating: 4.9,
    reviews: 678,
    description: "Premium over-ear headphones with world-class noise cancellation.",
    inStock: true,
    features: [
      "Active Noise Cancellation",
      "24-hour Battery Life",
      "Comfortable Fit",
      "High-fidelity Audio",
      "Voice Assistant Integration"
    ]
  },
  {
    id: "35",
    name: "Fitbit Charge 5",
    price: 14999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZ62dh-zt4iZa7hJwFwcX3Ed4_NZpNb1O9w&s",
    category: "Wearables",
    rating: 4.6,
    reviews: 789,
    description: "Advanced fitness tracker with built-in GPS and health monitoring features.",
    inStock: true,
    features: [
      "Built-in GPS",
      "Heart Rate Monitoring",
      "Sleep Tracking",
      "Stress Management",
      "Water Resistant"
    ]
  },
  {
    id: "36",
    name: "Microsoft Surface Laptop 5",
    price: 99990,
    image: "https://www.cnet.com/a/img/resize/458eb717d7e3caab3cf241be4c2bdb38ce3d8220/hub/2022/10/11/399a1299-66ba-4917-b6db-eabcfb5ecf95/microsoft-surface-laptop-5-sage.jpg?auto=webp&fit=crop&height=900&width=1200",
    category: "Computers",
    rating: 4.7,
    reviews: 321,
    description: "Sleek and powerful laptop with high-resolution touchscreen and premium build quality.",
    inStock: true,
    features: [
      "13.5-inch PixelSense Display",
      "Intel Core i7 Processor",
      "16GB RAM",
      "512GB SSD",
      "Windows 11"
    ]
  },
  {
    id: "37",
    name: "Samsung Galaxy Tab A8",
    price: 21999,
    image: "https://www.samsungmobilepress.com/file/2DD3FCD96E837AEF02C6A8110769D3941CEF64CBDEE174C599596568BCEB77D022E93A194568B90EE4F0EF8C59A8846BFB18EF14ED8CE4C5D100F90634F6084C20E83C67AF88F6B575BF19092F77E3702ECEF6DE2B4A914C933283562A3ED5016A133B636A731E278824C8A18D51751EDD143A88667B1952C79E97BAE67021D4018057A414EC8C0676F047314DC56A05",
    category: "Tablets",
    rating: 4.5,
    reviews: 345,
    description: "Affordable tablet with vibrant display and solid performance for everyday use.",
    inStock: true,
    features: [
      "10.5-inch TFT Display",
      "64GB Storage",
      "All-day Battery",
      "Dolby Atmos Speakers",
      "Kids Mode"
    ]
  },
  {
    id: "38",
    name: "RAVPower 65W 4-Port USB-C Charger",
    price: 3999,
    image: "https://www.ravpower.com/cdn/shop/files/RP-PC1034_V1_PP_JPG_4.jpg?v=1752232133&width=1780",
    category: "Accessories",
    rating: 4.8,
    reviews: 890,
    description: "Compact USB-C charger with multiple ports for fast charging of all your devices.",
    inStock: true,
    features: [
      "65W Power Output",
      "4 USB-C Ports",
      "Compact Design",
      "Overcharge Protection",
      "Universal Compatibility"
    ]
  },
  {
    id: "39",
    name: "Sony Xperia 1 V",
    price: 89999,
    image: "https://images.gizbot.com/hi/img/2023/05/sony-xperia-1-v-smartphone-1683800163.jpg",
    category: "Smartphones",
    rating: 4.7,
    reviews: 321,
    description: "Flagship smartphone with advanced camera and AI features.",
    inStock: true,
    features: [
      "6.7-inch OLED Display",
      "512GB Storage",
      "5G Connectivity",
      "50MP Triple Camera",
      "Fast Charging"
    ]
  },
  {
    id: "40",
    name: "Jabra Elite 7 Pro",
    price: 17999,
    image: "https://m.media-amazon.com/images/I/51C4tMQrgJL._AC_UF1000,1000_QL80_.jpg",
    category: "Audio",
    rating: 4.6,
    reviews: 456,
    description: "Premium true wireless earbuds with advanced noise cancellation and superior sound quality.",
    inStock: true,
    features: [
      "Advanced Noise Cancellation",
      "8-hour Battery Life",
      "IP57 Water Resistance",
      "Customizable Sound",
      "Wireless Charging Case"
    ]
  },
  {
    id: "41",
    name: "Garmin Venu 2",
    price: 24999,
    image: "https://ph.garmin.com/m/ph/g/products/venu-2-plus-black-cf-lg.jpg",
    category: "Wearables",
    rating: 4.8,
    reviews: 678,
    description: "Stylish smartwatch with advanced health tracking and GPS features.",
    inStock: true,
    features: [
      "1.3-inch AMOLED Display",
      "Built-in GPS",
      "Health Monitoring",
      "Music Storage",
      "Smart Notifications"
    ]
  },
  {
    id: "42",
    name: "Lenovo IdeaPad Slim 5i",
    price: 54999,
    image: "https://electronicparadise.in/cdn/shop/files/Lenovo_IdeaPad_Slim_5_Intel_Core_i5_13th_Gen_2.jpg?v=1729242210&width=1214",
    category: "Computers",
    rating: 4.5,
    reviews: 234,
    description: "Slim and lightweight laptop with powerful performance for work and play.",
    inStock: true,
    features: [
      "14-inch Full HD Display",
      "Intel Core i5 Processor",
      "8GB RAM",
      "512GB SSD",
      "Windows 11"
    ]
  },
  {
    id: "43",
    name: "Amazon Fire HD 10 Tablet",
    price: 14999,
    image: "https://m.media-amazon.com/images/G/01/kindle/journeys/obm87zLmbZZ2FnF3yH3CQlaK2mz74NJ95jimp31nmMSk3D/NmEyNDgwYjAt",
    category: "Tablets",
    rating: 4.4,
    reviews: 567,
    description: "Affordable tablet with vibrant display and solid performance for everyday use.",
    inStock: true,
    features: [
      "10.1-inch Full HD Display",
      "32GB Storage",
      "All-day Battery",
      "Alexa Built-in",
      "Hands-free Mode"
    ]
  },
  {
    id: "44",
    name: "AUKEY Omnia Mix 65W PD Charger",
    price: 2999,
    image: "https://i.redd.it/is-there-a-charger-as-small-as-the-aukey-omnis-65w-v0-uzj28expnsld1.jpg?width=800&format=pjpg&auto=webp&s=f0f8869b0db8b865887cf103c96d7cd88d6d2102",
    category: "Accessories",
    rating: 4.7,
    reviews: 789,
    description: "Compact USB-C charger with multiple ports for fast charging of all your devices.",
    inStock: true,
    features: [
      "65W Power Output",
      "2 USB-C Ports",
      "Compact Design",
      "Overcharge Protection",
      "Universal Compatibility"
    ]
  },
  {
    id: "45",
    name: "Motorola Edge 30 Fusion",
    price: 45999,
    image: "https://c.ndtvimg.com/2023-01/4fbuo8h_motorolaedge30fusion-motorola_625x300_09_January_23.jpg?downsize=545:307",
    category: "Smartphones",
    rating: 4.5,
    reviews: 345,
    description: "Mid-range smartphone with impressive features and performance.",
    inStock: true,
    features: [
      "6.55-inch OLED Display",
      "128GB Storage",
      "5G Connectivity",
      "50MP Dual Camera",
      "Fast Charging"
    ]
  },
  {
    id: "46",
    name: "Skullcandy Crusher Evo Wireless Headphones",
    price: 14999,
    image: "https://images.jdmagicbox.com/quickquotes/images_main/skullcandy-headphones-10-06-2021-190-227360404-9wor0.jpg",
    category: "Audio",
    rating: 4.6,
    reviews: 234,
    description: "Wireless headphones with powerful bass and personalized sound experience.",
    inStock: true,
    features: [
      "Personalized Sound",
      "40-hour Battery Life",
      "Rapid Charge",
      "Built-in Tile Tracker",
      "Comfortable Fit"
    ]
  },
  {
    id: "47",
    name: "Samsung Galaxy Watch Active 2",
    price: 19999,
    image: "https://www.corning.com/microsites/csm/gorillaglass/Samsung/CGGproducts2019_Wearables.jpg",
    category: "Wearables",
    rating: 4.7,
    reviews: 456,
    description: "Lightweight smartwatch with fitness tracking and smart features.",
    inStock: true,
    features: [
      "1.4-inch Super AMOLED Display",
      "Advanced Fitness Tracking",
      "Built-in GPS",
      "Heart Rate Monitoring",
      "Water Resistant"
    ]
  },
  {
    id: "48",
    name: "HP Envy x360 2-in-1 Laptop",
    price: 75999,
    image: "https://5.imimg.com/data5/SELLER/Default/2025/1/480290257/OL/HR/KJ/222112159/hp-envy-x360-laptop-500x500.jpg",
    category: "Computers",
    rating: 4.8,
    reviews: 198,
    description: "Versatile 2-in-1 laptop with touchscreen and powerful performance for work and play.",
    inStock: true,
    features: [
      "13.3-inch Full HD Touchscreen",
      "Intel Core i7 Processor",
      "16GB RAM",
      "512GB SSD",
      "Windows 11"
    ]
  },
  {
    id: "49",
    name: "Lenovo Tab M10 Plus",
    price: 15999,
    image: "https://i5.walmartimages.com/asr/a719a940-12e5-4e55-bc5b-fbad7576c398.c940b86170e7fc62dd6d25764e76ff3d.jpeg",
    category: "Tablets",
    rating: 4.3,
    reviews: 321,
    description: "Affordable tablet with a vibrant display and solid performance for everyday use.",
    inStock: true,
    features: [
      "10.1-inch Full HD Display",
      "32GB Storage",
      "All-day Battery",
      "Alexa Built-in",
      "Hands-free Mode"
    ]
  },
  {
    id: "50",
    name: "CHOETECH 100W USB-C GaN Charger",
    price: 3999,
    image: "https://mac-more.co.ke/wp-content/uploads/2025/07/PD6028-9.jpg",
    category: "Accessories",
    rating: 4.6,
    reviews: 123,
    description: "High-power USB-C GaN charger for fast and efficient charging.",
    inStock: true,
    features: [
      "100W Power Output",
      "GaN Technology",
      "Compact Design",
      "Multiple USB-C Ports",
      "Overheat Protection"
    ]
  },
  {
    id: "51",
    name: "Nokia G22",
    price: 12999,
    image: "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/2023/02/nokia-g22-meteor-grey-emotional-3.jpg?q=50&fit=contain&w=420&dpr=1.5",
    category: "Smartphones",
    rating: 4.4,
    reviews: 234,
    description: "Budget-friendly smartphone with essential features and reliable performance.",
    inStock: true,
    features: [
      "6.5-inch HD+ Display",
      "64GB Storage",
      "4G Connectivity",
      "13MP Dual Camera",
      "Long-lasting Battery"
    ]
  },
  {
    id: "52",
    name: "Skullcandy Indy Evo True Wireless Earbuds",
    price: 6999,
    image: "https://skdy-assets.s3.amazonaws.com/b6119ce32537ceac3f2fd552edb9bfef2eab4d05bda96da5b731470556d10d1b.jpg",
    category: "Audio",
    rating: 4.5,
    reviews: 345,
    description: "Affordable true wireless earbuds with impressive sound quality and comfort.",
    inStock: true,
    features: [
      "6-hour Battery Life",
      "IP55 Sweat Resistance",
      "Customizable Fit",
      "Built-in Microphone",
      "Voice Assistant Support"
    ]
  },
  {
    id: "53",
    name: "Amazfit Bip U Pro",
    price: 4999,
    image: "https://in.amazfit.com/cdn/shop/products/amazfit-bip-u-with-spo2-60-sports-modes-25d-gorilla-glass-anti-fingerprint-763378.jpg?v=1705328963&width=1131",
    category: "Wearables",
    rating: 4.3,
    reviews: 567,
    description: "Affordable smartwatch with essential health tracking features and long battery life.",
    inStock: true,
    features: [
      "1.43-inch HD Display",
      "SpO2 Measurement",
      "Built-in GPS",
      "9-day Battery Life",
      "Water Resistant"
    ]
  },
  {
    id: "54",
    name: "Acer Aspire 5 Slim Laptop",
    price: 45999,
    image: "https://www.myg.in/images/thumbnails/300/300/detailed/42/ac2_a7nu-qu.jpg.png",
    category: "Computers",
    rating: 4.4,
    reviews: 198,
    description: "Slim and lightweight laptop with solid performance for everyday tasks.",
    inStock: true,
    features: [
      "15.6-inch Full HD Display",
      "AMD Ryzen 5 Processor",
      "8GB RAM",
      "512GB SSD",
      "Windows 11"
    ]
  },
  {
    id: "55",
    name: "Lenovo Tab P11 Plus",
    price: 19999,
    image: "https://mcprod.hnak.com/media/catalog/product/d/a/dasdfgh_2.jpg?quality=60&fit=bounds&height=&width=",
    category: "Tablets",
    rating: 4.5,
    reviews: 150,
    description: "High-performance tablet with a vibrant display and versatile features.",
    inStock: true,
    features: [
      "11-inch 2K Display",
      "64GB Storage",
      "4GB RAM",
      "Android 11",
      "Dolby Atmos Speakers"
    ]
  },
  {
    id: "56",
    name: "Samsung Galaxy Buds Pro",
    price: 12999,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjT9GW9ji1sed3ngF7Z7p3TMpBPE6XbGyKKnfCDtBEHMqk5JRBmIRj-rFgX5d1Pe69roSJkzfAzNP0HKvhm6EbJtrGnBexel1h0Ow3-zUawfHhoDWrGzikJcSQk2Q-j0T3qh1S60g6OpWpg/s16000-rw/Samsung+Galaxy+Buds+Pro+Unboxing+and+Review+The+Premium+Earbuds+From+Samsung+07.jpg",
    category: "Audio",
    rating: 4.7,
    reviews: 210,
    description: "Premium true wireless earbuds with active noise cancellation and immersive sound.",
    inStock: true,
    features: [
      "Active Noise Cancellation",
      "11mm Woofer + 6.5mm Tweeter",
      "IPX7 Water Resistance",
      "Wireless Charging",
      "Voice Assistant Support"
    ]
  },
  {
    id: "57",
    name: "Realme Watch 3 Pro",
    price: 6999,
    image: "https://static.beebom.com/wp-content/uploads/2022/09/realme-watch-3-pro-launched-in-India.jpg?w=750&quality=75",
    category: "Wearables",
    rating: 4.4,
    reviews: 320,
    description: "Affordable smartwatch with large display and comprehensive health tracking features.",
    inStock: true,
    features: [
      "1.78-inch AMOLED Display",
      "Heart Rate & SpO2 Monitoring",
      "14-day Battery Life",
      "Built-in GPS",
      "Water Resistant"
    ]
  },
  {
    id: "58",
    name: "Dell XPS 13 Laptop",
    price: 99999,
    image: "https://cdn.mos.cms.futurecdn.net/dYA33XiAbrwUWm55juc5GU.jpg",
    category: "Computers",
    rating: 4.6,
    reviews: 150,
    description: "High-performance laptop with a sleek design and powerful features.",
    inStock: true,
    features: [
      "13.4-inch FHD+ Display",
      "Intel Core i7 Processor",
      "16GB RAM",
      "512GB SSD",
      "Windows 11"
    ]
  },
  {
    id: "59",
    name: "Samsung Galaxy Tab S6 Lite",
    price: 29999,
    image: "https://cdn.mos.cms.futurecdn.net/mNbstu9ZC5wAF4MzFYYRuZ.jpg",
    category: "Tablets",
    rating: 4.5,
    reviews: 280,
    description: "Versatile tablet with S Pen support and immersive display for work and play.",
    inStock: true,
    features: [
      "10.4-inch TFT Display",
      "64GB Storage",
      "All-day Battery",
      "S Pen Included",
      "Dolby Atmos Speakers"
    ]
  },
  {
    id: "60",
    name: "Anker PowerPort III 65W Pod",
    price: 3499,
    image: "https://erp-image.sgliteasset.com/_next/image?url=https%3A%2F%2Fcdn1.sgliteasset.com%2FBANANALOVEWATERMELON%2Fimages%2Fproduct%2Fproduct-4324095%2FHQxPDRM1660164cf32849_1711367375.jpg&w=3840&q=100",
    category: "Accessories",
    rating: 4.8,
    reviews: 400,
    description: "Compact and powerful USB-C charger for fast charging of all your devices.",
    inStock: true,
    features: [
      "65W Power Output",
      "USB-C PD Technology",
      "Compact Design",
      "Overcharge Protection",
      "Universal Compatibility"
    ]
  },
  {
    id: "61",
    name: "Infinix Zero 5G 2023",
    price: 15999,
    image: "https://images.livemint.com/img/2022/12/02/600x338/infinix_zero_5g_1669969705422_1669969717237_1669969717237.jpg",
    category: "Smartphones",
    rating: 4.3,
    reviews: 210,
    description: "Affordable 5G smartphone with solid performance and essential features.",
    inStock: true,
    features: [
      "6.78-inch IPS LCD",
      "128GB Storage",
      "5G Connectivity",
      "50MP Quad Camera",
      "5000mAh Battery"
    ]
  },
  {
    id: "62",
    name: "Skullcandy Sesh Evo True Wireless Earbuds",
    price: 4999,
    image: "https://m.media-amazon.com/images/I/71ya34cJD2L._AC_UF350,350_QL80_.jpg",
    category: "Audio",
    rating: 4.2,
    reviews: 320,
    description: "Affordable true wireless earbuds with decent sound quality and comfort.",
    inStock: true,
    features: [
      "5-hour Battery Life",
      "IP55 Sweat Resistance",
      "Customizable Fit",
      "Built-in Microphone",
      "Voice Assistant Support"
    ]
  },
  {
    id: "63",
    name: "Realme Band 2",
    price: 2499,
    image: "https://static.toiimg.com/thumb/msid-85367386,width-400,resizemode-4/85367386.jpg",
    category: "Wearables",
    rating: 4.1,
    reviews: 180,
    description: "Affordable fitness band with essential health tracking features.",
    inStock: true,
    features: [
      "1.4-inch Color Display",
      "Heart Rate Monitoring",
      "SpO2 Measurement",
      "14-day Battery Life",
      "Water Resistant"
    ]
  },
  {
    id: "64",
    name: "Acer Swift 3 Laptop",
    price: 64999,
    image: "https://www.cnet.com/a/img/resize/3334b0512c7fe4be8523e8aa1be3e008427f1061/hub/2020/01/06/f277d8c4-581d-482b-9e18-89412bad0a80/acer-swift-3-athena-7716.jpg?auto=webp&fit=crop&height=675&width=1200",
    category: "Computers",
    rating: 4.5,
    reviews: 220,
    description: "Lightweight and powerful laptop with a sleek design and solid performance.",
    inStock: true,
    features: [
      "14-inch Full HD Display",
      "AMD Ryzen 5 Processor",
      "8GB RAM",
      "512GB SSD",
      "Windows 11"
    ]
  },
  {
    id: "65",
    name: "Huawei MatePad T10s",
    price: 13999,
    image: "https://m.media-amazon.com/images/I/41ICPNIAGuL._SL500_.jpg",
    category: "Tablets",
    rating: 4.2,
    reviews: 150,
    description: "Affordable tablet with a vibrant display and solid performance for everyday use.",
    inStock: true,
    features: [
      "10.1-inch Full HD Display",
      "32GB Storage",
      "All-day Battery",
      "Kids Mode",
      "Dual Speakers"
    ]
  },
  {
    id: "66",
    name: "RAVPower 61W PD 3.0 Wall Charger",
    price: 2999,
    image: "https://i0.wp.com/switchchargers.com/wp-content/uploads/2019/07/RAVPower-PD-Pioneer-61W-Marketing.jpg?ssl=1",
    category: "Accessories",
    rating: 4.7,
    reviews: 250,
    description: "Compact USB-C charger with Power Delivery 3.0 for fast and efficient charging.",
    inStock: true,
    features: [
      "61W Power Output",
      "USB-C PD 3.0 Technology",
      "Compact Design",
      "Overcharge Protection",
      "Universal Compatibility"
    ]
  },
  {
    id: "67",
    name: "Infinix Hot 12i",
    price: 8999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxyfY05pqKTHsP6gAC4q0Iyr22xS-0_DHcg&s",
    category: "Smartphones",
    rating: 4.0,
    reviews: 180,
    description: "Budget-friendly smartphone with essential features and reliable performance.",
    inStock: true,
    features: [
      "6.6-inch IPS LCD",
      "64GB Storage",
      "4G Connectivity",
      "13MP Dual Camera",
      "5000mAh Battery"
    ]
  },
  {
    id: "68",
    name: "JBL Tune 225TWS True Wireless Earbuds",
    price: 7999,
    image: "https://images.offerup.com/fShMZFguwhwErPk7CTfiMlV0_Wc=/1002x1280/e353/e353f07b589242c3b1708be594774a84.jpg",
    category: "Audio",
    rating: 4.4,
    reviews: 290,
    description: "Affordable true wireless earbuds with JBL signature sound and comfort.",
    inStock: true,
    features: [
      "5-hour Battery Life",
      "IPX4 Sweat Resistance",
      "JBL Signature Sound",
      "Built-in Microphone",
      "Voice Assistant Support"
    ]
  },
  {
    id: "69",
    name: "Noise ColorFit Pro 3",
    price: 5999,
    image: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010977213_437Wx649H_202110211435061.jpeg",
    category: "Wearables",
    rating: 4.2,
    reviews: 220,
    description: "Affordable smartwatch with essential health tracking features and vibrant display.",
    inStock: true,
    features: [
      "1.55-inch Color Display",
      "Heart Rate Monitoring",
      "SpO2 Measurement",
      "10-day Battery Life",
      "Water Resistant"
    ]
  },
  {
    id: "70",
    name: "ASUS VivoBook 15 Laptop",
    price: 49999,
    image: "https://nationalpc.in/image/cache/catalog/product/Laptop/ASUS/OLED/Vivobook-15/X1502ZA-EJ524WS/1-320x320.jpg.webp",
    category: "Computers",
    rating: 4.3,
    reviews: 200,
    description: "Affordable laptop with solid performance and a sleek design for everyday use.",
    inStock: true,
    features: [
      "15.6-inch Full HD Display",
      "Intel Core i3 Processor",
      "8GB RAM",
      "256GB SSD",
      "Windows 11"
    ]
  },
  {
    id: "71",
    name: "Lenovo Tab M8 HD",
    price: 9999,
    image: "https://images-cdn.ubuy.co.in/64a05614dca08733823aefcd-lenovo-tab-m8-4th-gen-2023-tablet.jpg",
    category: "Tablets",
    rating: 4.1,
    reviews: 130,
    description: "Compact and affordable tablet with essential features for everyday use.",
    inStock: true,
    features: [
      "8-inch HD Display",
      "32GB Storage",
      "All-day Battery",
      "Kids Mode",
      "Dual Speakers"
    ]
  },
  {
    id: "72",
    name: "AUKEY Minima 20W USB-C Charger",
    price: 1999,
    image: "https://www.aukey.my/cdn/shop/products/PA-Y20S-SQUARE-BK-_1.jpg?v=1655364002",
    category: "Accessories",
    rating: 4.5,
    reviews: 180,
    description: "Compact and efficient USB-C charger with 20W power output for fast charging.",
    inStock: true,
    features: [
      "20W Power Output",
      "USB-C Compatibility",
      "Compact Design",
      "Overcharge Protection",
      "Universal Compatibility"
    ]
  },
  {
    id: "73",
    name: "Lava Blaze 2",
    price: 7999,
    image: "https://static.digit.in/image-521.png",
    category: "Smartphones",
    rating: 4.0,
    reviews: 150,
    description: "Budget-friendly smartphone with essential features and reliable performance.",
    inStock: true,
    features: [
      "6.5-inch HD+ Display",
      "64GB Storage",
      "4G Connectivity",
      "13MP Dual Camera",
      "5000mAh Battery"
    ]
  },
  {
    id: "74",
    name: "Skullcandy Grind Wireless Headphones",
    price: 5999,
    image: "https://i0.wp.com/www.gizmotimes.com/wp-content/uploads/2016/12/Skullcandy-Grind-Wireless-Headphones-Review.jpg?fit=1200%2C800&ssl=1",
    category: "Audio",
    rating: 4.3,
    reviews: 210,
    description: "Affordable wireless headphones with powerful sound and comfortable fit.",
    inStock: true,
    features: [
      "40mm Drivers",
      "Up to 12-hour Battery Life",
      "Built-in Microphone",
      "Adjustable Headband",
      "Comfortable Ear Cushions"
    ]
  },
  {
    id: "75",
    name: "Realme Band",
    price: 1999,
    image: "https://zoneofdeals.com/wp-content/uploads/2023/12/realme-band-2-1.jpg",
    category: "Wearables",
    rating: 4.1,
    reviews: 200,
    description: "Affordable fitness band with essential health tracking features.",
    inStock: true,
    features: [
      "0.96-inch Color Display",
      "Heart Rate Monitoring",
      "Sleep Tracking",
      "9-day Battery Life",
      "Water Resistant"
    ]
  },
  {
    id: "76",
    name: "HP Pavilion 15 Laptop",
    price: 57999,
    image: "https://www.gstrader.com.pk/wp-content/uploads/2024/01/5-1-506x488.png",
    category: "Computers",
    rating: 4.4,
    reviews: 170,
    description: "Versatile laptop with solid performance and a sleek design for everyday use.",
    inStock: true,
    features: [
      "15.6-inch Full HD Display",
      "Intel Core i5 Processor",
      "8GB RAM",
      "512GB SSD",
      "Windows 11"
    ]
  },
  {
    id: "77",
    name: "Samsung Galaxy Tab A7",
    price: 17999,
    image: "https://m.media-amazon.com/images/I/51bfS0ZyyKL.jpg",
    category: "Tablets",
    rating: 4.2,
    reviews: 160,
    description: "Affordable tablet with a vibrant display and solid performance for everyday use.",
    inStock: true,
    features: [
      "10.4-inch TFT Display",
      "32GB Storage",
      "All-day Battery",
      "Dolby Atmos Speakers",
      "Kids Mode"
    ]
  },
  {
    id: "78",
    name: "CHOETECH 18W USB-C Fast Charger",
    price: 1499,
    image: "https://leaders.jo/wp-content/uploads/2025/06/charger-home-adapetr-pd-38w-pd5002-white-choetech-1.jpg",
    category: "Accessories",
    rating: 4.4,
    reviews: 140,
    description: "Compact USB-C charger with 18W power output for fast charging.",
    inStock: true,
    features: [
      "18W Power Output",
      "USB-C Compatibility",
      "Compact Design",
      "Overcharge Protection",
      "Universal Compatibility"
    ]
  },
  {
    id: "79",
    name: "itel Vision 3 Pro",
    price: 6999,
    image: "https://d3jbu7vaxvlagf.cloudfront.net/small/v2/category_media/basic_img_16862251253364.jpg",
    category: "Smartphones",
    rating: 4.0,
    reviews: 130,
    description: "Budget-friendly smartphone with essential features and reliable performance.",
    inStock: true,
    features: [
      "6.52-inch HD+ Display",
      "32GB Storage",
      "4G Connectivity",
      "8MP Dual Camera",
      "5000mAh Battery"
    ]
  },
  {
    id: "80",
    name: "JBL C100TWS True Wireless Earbuds",
    price: 4999,
    image: "https://rukminim2.flixcart.com/image/480/640/kfikya80-0/headphone/0/f/v/t100tws-jbl-original-imafvy9emmfvevay.jpeg?q=90",
    category: "Audio",
    rating: 4.2,
    reviews: 250,
    description: "Affordable true wireless earbuds with JBL signature sound and comfort.",
    inStock: true,
    features: [
      "4-hour Battery Life",
      "IPX4 Sweat Resistance",
      "JBL Signature Sound",
      "Built-in Microphone",
      "Voice Assistant Support"
    ]
  },
  {
    id: "81",
    name: "boAt Xtend Smartwatch",
    price: 4999,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/9/XW/EL/PZ/23694326/boat-xtend-smart-watch-500x500.jpg",
    category: "Wearables",
    rating: 4.1,
    reviews: 190,
    description: "Affordable smartwatch with essential health tracking features and vibrant display.",
    inStock: true,
    features: [
      "1.69-inch Color Display",
      "Heart Rate Monitoring",
      "SpO2 Measurement",
      "7-day Battery Life",
      "Water Resistant"
    ]
  },
  {
    id: "82",
    name: "Dell Inspiron 15 3000 Laptop",
    price: 42999,
    image: "https://rukminim2.flixcart.com/image/480/640/xif0q/computer/x/o/u/-original-imagzyfza8qedfwa.jpeg?q=90",
    category: "Computers",
    rating: 4.2,
    reviews: 160,
    description: "Affordable laptop with solid performance and a sleek design for everyday use.",
    inStock: true,
    features: [
      "15.6-inch HD Display",
      "Intel Core i3 Processor",
      "8GB RAM",
      "256GB SSD",
      "Windows 11"
    ]
  },
  {
    id: "83",
    name: "Amazon Fire HD 8 Tablet",
    price: 8999,
    image: "https://m.media-amazon.com/images/G/15/kindle/journeys/YjMyNDE1M2Et/YjMyNDE1M2Et-NWYzMDgyYjgt._CB665984812_.jpg",
    category: "Tablets",
    rating: 4.1,
    reviews: 140,
    description: "Compact and affordable tablet with essential features for everyday use.",
    inStock: true,
    features: [
      "8-inch HD Display",
      "32GB Storage",
      "All-day Battery",
      "Alexa Built-in",
      "Hands-free Mode"
    ]
  },
  {
    id: "84",
    name: "RAVPower 30W USB-C Charger",
    price: 2499,
    image: "https://electrongy.com/cdn/shop/files/RAVPower30WGaNTechUSB-CWallCharger-PC169_6_800x.jpg?v=1731046303",
    category: "Accessories",
    rating: 4.6,
    reviews: 200,
    description: "Compact USB-C charger with 30W power output for fast charging.",
    inStock: true,
    features: [
      "30W Power Output",
      "USB-C Compatibility",
      "Compact Design",
      "Overcharge Protection",
      "Universal Compatibility"
    ]
  },
  {
    id: "85",
    name: "Lava Blaze 1",
    price: 6999,
    image: "https://pbs.twimg.com/media/GwJ0BjjacAAfC7y.jpg",
    category: "Smartphones",
    rating: 3.9,
    reviews: 120,
    description: "Budget-friendly smartphone with essential features and reliable performance.",
    inStock: true,
    features: [
      "6.5-inch HD+ Display",
      "32GB Storage",
      "4G Connectivity",
      "8MP Dual Camera",
      "5000mAh Battery"
    ]
  },
  {
    id: "86",
    name: "JBL Wave 100TWS True Wireless Earbuds",
    price: 3999,
    image: "https://m.media-amazon.com/images/I/71kYP-nrimL._AC_UF1000,1000_QL80_.jpg",
    category: "Audio",
    rating: 4.0,
    reviews: 220,
    description: "Affordable true wireless earbuds with JBL signature sound and comfort.",
    inStock: true,
    features: [
      "4-hour Battery Life",
      "IPX4 Sweat Resistance",
      "JBL Signature Sound",
      "Built-in Microphone",
      "Voice Assistant Support"
    ]
  },
  {
    id: "87",
    name: "Fire-Boltt Ninja 3 Smartwatch",
    price: 5999,
    image: "https://regalcorporategift.com/wp-content/uploads/2022/10/617LbQ8rK2L._SL1500_.jpg",
    category: "Wearables",
    rating: 4.0,
    reviews: 170,
    description: "Affordable smartwatch with essential health tracking features and vibrant display.",
    inStock: true,
    features: [
      "1.69-inch Color Display",
      "Heart Rate Monitoring",
      "SpO2 Measurement",
      "7-day Battery Life",
      "Water Resistant"
    ]
  },
  {
    id: "88",
    name: "Acer Aspire 3 Laptop",
    price: 39999,
    image: "https://www.v5itsolution.in/wp-content/uploads/2023/11/V-1-1.jpg",
    category: "Computers",
    rating: 4.1,
    reviews: 150,
    description: "Reliable laptop with essential features for everyday computing tasks.",
    inStock: true,
    features: [
      "15.6-inch Full HD Display",
      "Intel Core i5 Processor",
      "8GB RAM",
      "512GB SSD",
      "Windows 11"
    ]
  },
  {
    id: "89",
    name: "Lenovo Tab M7",
    price: 7999,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/12/372997117/AY/XN/IS/3529379/lenovo-tab-m-10-500x500.webp",
    category: "Tablets",
    rating: 4.0,
    reviews: 120,
    description: "Compact and affordable tablet with essential features for everyday use.",
    inStock: true,
    features: [
      "7-inch Display",
      "16GB Storage",
      "2MP Camera",
      "Quad-core Processor",
      "3500mAh Battery"
    ]
  },
  {
    id: "90",
    name: "Anker PowerPort II 2-Port 24W Charger",
    price: 1999,
    image: "https://m.media-amazon.com/images/I/81l3ckVkGDL.jpg",
    category: "Accessories",
    rating: 4.5,
    reviews: 160,
    description: "Compact dual-port USB charger for efficient charging of multiple devices.",
    inStock: true,
    features: [
      "24W Total Power Output",
      "2 USB Ports",
      "Compact Design",
      "Overcharge Protection",
      "Universal Compatibility"
    ]
  },
  {
    id: "91",
    name: "Samsung Galaxy M12",
    price: 10999,
    image: "https://images.gizbot.com/ph-big/2021/03/samsung-galaxy-m12_16161505139.jpg",
    category: "Smartphones",
    rating: 4.1,
    reviews: 140,
    description: "Budget-friendly smartphone with essential features and reliable performance.",
    inStock: true,
    features: [
      "6.5-inch HD+ Display",
      "64GB Storage",
      "4G Connectivity",
      "48MP Quad Camera",
      "6000mAh Battery"
    ]
  },
  {
    id: "92",
    name: "boAt Airdopes 441 True Wireless Earbuds",
    price: 2999,
    image: "https://www.navinmart.com/cdn/shop/files/7_950e1ffc-afe4-4ca0-b3ff-47e0d0bf6c90.jpg?v=1751548232&width=1500",
    category: "Audio",
    rating: 4.2,
    reviews: 200,
    description: "Affordable true wireless earbuds with decent sound quality and comfort.",
    inStock: true,
    features: [
      "3.5-hour Battery Life",
      "IPX5 Sweat Resistance",
      "Customizable Fit",
      "Built-in Microphone",
      "Voice Assistant Support"
    ]
  },
  {
    id: "93",
    name: "Fire-Boltt Beast Smartwatch",
    price: 6999,
    image: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/002_f9766eca-fb97-462a-ac64-d324064d7f39_480x480.jpg?v=1624543894",
    category: "Wearables",
    rating: 4.1,
    reviews: 180,
    description: "Affordable smartwatch with essential health tracking features and vibrant display.",
    inStock: true,
    features: [
      "1.69-inch Color Display",
      "Heart Rate Monitoring",
      "SpO2 Measurement",
      "7-day Battery Life",
      "Water Resistant"
    ]
  },
  {
    id: "94",
    name: "HP Chromebook 14 Laptop",
    price: 34999,
    image: "https://www.cnet.com/a/img/resize/8293641733b12d9c52d16f33d11043b23b3d5ae0/hub/2019/01/05/4eb9fbb1-4d00-40f6-a899-6f73446c4608/hp-chromebook-14-with-amd-processors001.jpg?auto=webp&width=1200",
    category: "Computers",
    rating: 4.0,
    reviews: 130,
    description: "Affordable Chromebook with essential features for everyday computing tasks.",
    inStock: true,
    features: [
      "14-inch HD Display",
      "Intel Celeron Processor",
      "4GB RAM",
      "64GB eMMC",
      "Chrome OS"
    ]
  },
  {
    id: "95",
    name: "Logitech MX Master 3 Wireless Mouse",
    price: 9599,
    image: "https://m.media-amazon.com/images/I/61ni3t1ryQL.jpg",
    category: "Accessories",
    rating: 4.7,
    reviews: 210,
    description: "Ergonomic wireless mouse with advanced features for productivity and comfort.",
    inStock: true,
    features: [
      "Ergonomic Design",
      "Wireless Connectivity",
      "Customizable Buttons",
      "Fast Scrolling",
      "Rechargeable Battery"
    ]
  },
  {
    id: "96",
    name: "Samsung Galaxy A03s",
    price: 8999,
    image: "https://utterlytechie.com/wp-content/uploads/2022/03/Samsung-Galaxy-A03-First-Impressions-Header-1.jpg",
    category: "Smartphones",
    rating: 4.0,
    reviews: 110,
    description: "Budget-friendly smartphone with essential features and reliable performance.",
    inStock: true,
    features: [
      "6.5-inch HD+ Display",
      "32GB Storage",
      "4G Connectivity",
      "13MP Triple Camera",
      "5000mAh Battery"
    ]
  },
  {
    id: "97",
    name: "Skullcandy Jib True Wireless Earbuds",
    price: 1999,
    image: "https://m.media-amazon.com/images/I/719DUK88V9L.jpg",
    category: "Audio",
    rating: 4.1,
    reviews: 180,
    description: "Affordable true wireless earbuds with decent sound quality and comfort.",
    inStock: true,
    features: [
      "4-hour Battery Life",
      "IPX4 Sweat Resistance",
      "Customizable Fit",
      "Built-in Microphone",
      "Voice Assistant Support"
    ]
  },
  {
    id: "98",
    name: "Noise Fit Endure Smartwatch",
    price: 4999,
    image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/11822154/2020/5/6/726735cd-ce0e-4b21-bc65-6b4521b70e651588768971243NOISEUnisexTealBlueNoiseFitEndureSmartWatchWithLeatherStrap2.jpg",
    category: "Wearables",
    rating: 4.0,
    reviews: 160,
    description: "Affordable smartwatch with essential health tracking features and vibrant display.",
    inStock: true,
    features: [
      "1.28-inch Color Display",
      "Heart Rate Monitoring",
      "SpO2 Measurement",
      "7-day Battery Life",
      "Water Resistant"
    ]
  },
  {
    id: "99",
    name: "Lenovo IdeaPad 3 Laptop",
    price: 37999,
    image: "https://www.myg.in/images/thumbnails/300/300/detailed/28/82KU017KIN-3.jpg.png",
    category: "Computers",
    rating: 4.2,
    reviews: 140,
    description: "Affordable laptop with solid performance and a sleek design for everyday use.",
    inStock: true,
    features: [
      "15.6-inch Full HD Display",
      "AMD Ryzen 5 Processor",
      "8GB RAM",
      "512GB SSD",
      "Windows 11"
    ]
  },
  {
    id: "100",
    name: "TP-Link Archer T2U Plus AC600 USB WiFi Adapter",
    price: 999,
    image: "https://m.media-amazon.com/images/I/61UgLQi+ILL._AC_UF350,350_QL80_.jpg",
    category: "Accessories",
    rating: 4.5,
    reviews: 190,
    description: "Compact USB WiFi adapter for fast and reliable wireless connectivity.",
    inStock: true,
    features: [
      "Dual Band WiFi",
      "Up to 600Mbps Speed",
      "USB 2.0 Interface",
      "Easy Setup",
      "Compact Design"
    ]
  }
];

export const categories: Category[] = [
  {
    id: "smartphones",
    name: "Smartphones",
    image: phone1,
    productCount: 17
  },
  {
    id: "audio",
    name: "Audio",
    image: earbuds1,
    productCount: 17
  },
  {
    id: "wearables",
    name: "Wearables",
    image: watch1,
    productCount: 16
  },
  {
    id: "computers",
    name: "Computers",
    image: laptop1,
    productCount: 18
  },
  {
    id: "tablets",
    name: "Tablets",
    image: tablet1,
    productCount: 15
  },
  {
    id: "accessories",
    name: "Accessories",
    image: cable1,
    productCount: 17
  }
];
