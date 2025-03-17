import { Product } from "@/lib/types";

export const products: Product[] = [
//   {
//     id: 1,
//     name: "NoteNest",
//     price: 25000,
//     promoPrice: 12500,
//     category: "Accesorios funcionales",
//     image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     features: [
//       "Brazo completamente ajustable",
//       "5 niveles de brillo",
//       "3 temperaturas de color",
//       "Base estable con acabado premium",
//       "Puerto USB integrado para carga de dispositivos"
//     ],
//     specifications: {
//       "Dimensiones": "45 x 15 x 40 cm",
//       "Material": "Aluminio y plástico ABS",
//       "Color": "Negro mate",
//       "Potencia": "10W",
//       "Voltaje": "100-240V",
//       "Vida útil": "50,000 horas"
//     },
//     images: [
//       "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
//     ],
//     rating: 4.8,
//     reviewCount: 124,
//     collection: "Minimalista",
//     inStock: true,
//   },
  {
    id: 1,
    name: "Organizador de libros",
    price: 22000,
    promoPrice: 11000,
    category: "Accesorios funcionales",
    image: "/images/bookshelf-rema.png",
    colors: [
        "crema",
        "rosa",
        "gris",
        "blanco",
    ],
    features: [
      "Soporte vertical para libros",
    ],
    specifications: {
        
    },
    images: [
        "/images/bookshelf-rema.png",
      "/images/bookshelf-rosa.png",
      "/images/bookshelf-gris.png",
      "/images/bookshelf-blanco.png"
    ],
    rating: 4.8,
    reviewCount: 124,
    collection: "Minimalista",
    inStock: true,
  },
  {
    id: 3,
    name: "Lampara de mesa RectaGlow",
    price: 38000,
    promoPrice: 19000,
    category: "Iluminacion",
    image: "/images/rectaglow.png",
    colors: [
        "gris",
    ],
    features: [
      "Lampara de escritorio decorativa",
    ],
    specifications: {
      "Material": "Plastico Biodegradable",
    },
    images: [
      "/images/rectaglow.png",
      "/images/rectaglow-1.png",
      "/images/rectaglow-2.png"
    ],
    rating: 4.8,
    reviewCount: 124,
    collection: "Minimalista",
    inStock: true,
  },
  {
    id: 4,
    name: "Soporte para Auriculares",
    price: 9900,
    promoPrice: 4950,
    category: "Accesorios funcionales",
    image: "/images/headphone-stand.png",
    colors: [
        "negro"
    ],
    features: [
      "Soporte para auriculares",
    ],
    specifications: {
        "Material": "Plastico PLA Biodegradable",
    },
    images: [
        "/images/headphone-stand.png",
        "/images/headphone-stand-1.png"
    ],
    rating: 4.8,
    reviewCount: 124,
    collection: "Minimalista",
    inStock: true,
  },
  {
    id: 5,
    name: "Bandejas Apilables",
    price: 18000,
    promoPrice: 9000,
    category: "Accesorios funcionales",
    image: "/images/bandejas-apilables-blanco.png",
    colors: [
        "blanco",
        "crema",
        "marmol",
        "negro",
        "marron",
    ],
    features: [
      "Bandejas organizadoras apilables",
    ],
    specifications: {
        "Material": "Plastico PLA Biodegradable",
    },
    images: [
        "/images/bandejas-apilables-blanco.png",
        "/images/bandejas-apilables-crema.png",
        "/images/bandejas-apilables-marmol.png",
        "/images/bandejas-apilables-negro.png",
        "/images/bandejas-apilables-marron.png",
    ],
    rating: 4.8,
    reviewCount: 124,
    collection: "Minimalista",
    inStock: true,
  }
];