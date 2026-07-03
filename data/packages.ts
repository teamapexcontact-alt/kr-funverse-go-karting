export interface Package {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  isPopular: boolean;
  tier: "basic" | "pro" | "ultra";
}

export const packages: Package[] = [
  {
    id: "basic",
    name: "Basic",
    price: 499,
    duration: "Per person",
    features: [
      "1 Go Karting session (10 mins)",
      "1 Indoor game",
      "Safety gear included",
      "Certificate of participation",
    ],
    isPopular: false,
    tier: "basic",
  },
  {
    id: "pro",
    name: "Pro",
    price: 999,
    duration: "Per person",
    features: [
      "3 Go Karting sessions (10 mins each)",
      "All Indoor games",
      "Safety gear included",
      "Photo booth access",
      "Priority queue",
      "Certificate of participation",
    ],
    isPopular: false,
    tier: "pro",
  },
  {
    id: "ultra",
    name: "Ultra",
    price: 1999,
    duration: "Per person",
    features: [
      "5 Go Karting sessions (10 mins each)",
      "All Indoor games + Laser Tag + VR Zone",
      "Safety gear included",
      "Photo booth access",
      "Priority queue — skip the line",
      "Meal coupon (₹200)",
      "Exclusive KR Funverse merch",
      "VIP lounge access",
      "Dedicated event coordinator",
    ],
    isPopular: true,
    tier: "ultra",
  },
];
