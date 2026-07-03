export interface Activity {
  id: string;
  title: string;
  description: string;
  longDesc: string;
  image: string;
  duration: string;
  suitableFor: string;
  ctaText: string;
  ctaLink: string;
  features: string[];
  highlights: string[];
  stats: { label: string; value: string }[];
}

export const activities: Activity[] = [
  {
    id: "go-karting",
    title: "Go Karting",
    description: "Experience the thrill of racing on our premium 400M+ track. High-speed karts, safe barriers, and timed laps.",
    longDesc: "Feel the adrenaline as you tear through 13 turns on our F1-inspired circuit. With high-performance rental karts, real-time lap timing, and professional marshals, every session is a race against the clock.",
    image: "/images/go-karting.svg",
    duration: "10 min sessions",
    suitableFor: "Ages 12+",
    ctaText: "Race Now",
    ctaLink: "/activities/go-karting",
    features: ["Professional karts", "Timed laps", "Safety barriers", "Helmet & gear provided", "Live leaderboard", "Race formats available"],
    highlights: ["400M+ track with 13 turns", "Up to 40 km/h top speed", "Real-time lap timing", "Beginner & pro modes"],
    stats: [
      { label: "Track Length", value: "400M+" },
      { label: "Top Speed", value: "40 km/h" },
      { label: "Session", value: "10 min" },
    ],
  },
  {
    id: "box-cricket",
    title: "Box Cricket",
    description: "Enjoy cricket in a confined box setup with turf wickets, floodlights, and scoreboards.",
    longDesc: "Step into the box and unleash your inner cricketer. Our enclosed cricket boxes feature genuine turf wickets, professional floodlighting, and electronic scoreboards for the complete match experience.",
    image: "/images/box-cricket.svg",
    duration: "60 min slots",
    suitableFor: "Groups of 6-10",
    ctaText: "Reserve Your Lane",
    ctaLink: "/activities/box-cricket",
    features: ["Turf wicket", "Floodlights", "Scoreboard", "Changing rooms", "Equipment provided", "Tournament format"],
    highlights: ["Full-size turf pitch", "Professional floodlighting", "Electronic scoreboard", "Team packages available"],
    stats: [
      { label: "Duration", value: "60 min" },
      { label: "Players", value: "6-10" },
      { label: "Format", value: "T20" },
    ],
  },
  {
    id: "indoor-games",
    title: "Indoor Games",
    description: "A variety of indoor games — table tennis, foosball, air hockey, arcade, and more for all ages.",
    longDesc: "Challenge your friends across multiple indoor arenas. From rapid-fire foosball matches to precision table tennis rallies, our indoor gaming zone has something for every competitive spirit.",
    image: "/images/indoor-games.svg",
    duration: "Flexible hours",
    suitableFor: "All ages",
    ctaText: "Challenge Your Crew",
    ctaLink: "/activities/indoor-games",
    features: ["Table Tennis", "Foosball", "Air Hockey", "Arcade Games", "Carrom Board", "Snooker Table"],
    highlights: ["6+ game varieties", "Climate-controlled hall", "All-day passes available", "Family-friendly environment"],
    stats: [
      { label: "Games", value: "6+" },
      { label: "Capacity", value: "40+" },
      { label: "Access", value: "All Day" },
    ],
  },
];
