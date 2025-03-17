export interface Product {
  id: number;
  name: string;
  price: number;
  colors: string[];
  promoPrice: number;
  category: string;
  image: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  images: string[];
  rating: number;
  reviewCount: number;
  collection: string;
  inStock: boolean;
}
  
  export interface CartItem {
    product: Product;
    quantity: number;
  }
  
  export interface ShippingInfo {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    notes?: string;
  }