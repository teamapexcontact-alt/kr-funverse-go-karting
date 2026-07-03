// data/reviews.ts — GOOGLE REVIEWS DATA
// PURPOSE: Customer reviews displayed on the homepage
// Contains: Array of review objects with name, rating, text, photo, date
// Used by: ReviewCard component
// Why a separate file? Makes it easy to add/edit reviews; can later be replaced with live API data

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  photo: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Arun Sharma",
    rating: 5,
    text: "Best go karting track in Hyderabad! The track is well-maintained and the staff is very professional.",
    photo: "/images/review-1.svg",
    date: "2024-12-15",
  },
  {
    id: "2",
    name: "Priya Reddy",
    rating: 5,
    text: "Had an amazing time at KR Funverse. The indoor games are great fun for the whole family.",
    photo: "/images/review-2.svg",
    date: "2024-11-20",
  },
  {
    id: "3",
    name: "Rahul Verma",
    rating: 4,
    text: "Great place for corporate events. We had our team outing here and everyone loved it.",
    photo: "/images/review-3.svg",
    date: "2024-10-05",
  },
  {
    id: "4",
    name: "Sneha K.",
    rating: 5,
    text: "The laser tag arena is unreal! Fog machines, strobes, and the sound system makes it feel like a real battlefield.",
    photo: "/images/review-4.svg",
    date: "2025-01-12",
  },
  {
    id: "5",
    name: "Vikram Reddy",
    rating: 5,
    text: "Box cricket setup is fantastic. Turf quality is top-notch and the floodlights make night games perfect.",
    photo: "/images/review-5.svg",
    date: "2025-02-08",
  },
  {
    id: "6",
    name: "Ananya Patel",
    rating: 5,
    text: "Took my kids for the VR zone and they absolutely loved it. The racing simulator was the highlight!",
    photo: "/images/review-6.svg",
    date: "2025-03-01",
  },
  {
    id: "7",
    name: "Karthik N.",
    rating: 4,
    text: "Been here multiple times. Go karting track is well maintained and the staff is always professional and helpful.",
    photo: "/images/review-7.svg",
    date: "2025-03-15",
  },
  {
    id: "8",
    name: "Divya M.",
    rating: 5,
    text: "Best place for a family outing! The indoor games kept everyone entertained for hours. Will definitely come back.",
    photo: "/images/review-1.svg",
    date: "2025-04-02",
  },
  {
    id: "9",
    name: "Sai Kumar",
    rating: 5,
    text: "The VR zone is incredible. The racing simulator felt so real! Great value for money.",
    photo: "/images/review-2.svg",
    date: "2025-04-10",
  },
  {
    id: "10",
    name: "Neha Gupta",
    rating: 4,
    text: "Hosted my son's birthday party here and it was fantastic. The team handled everything perfectly.",
    photo: "/images/review-3.svg",
    date: "2025-04-18",
  },
];
