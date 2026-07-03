// data/faqs.ts — FAQ DATA
// PURPOSE: Frequently Asked Questions content for the FAQ accordion
// Contains: Array of FAQ objects with question and answer
// Used by: FAQAccordion component on homepage
// Why a separate file? Makes it easy to add/remove FAQs without touching component code

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What are your operating hours?",
    answer: "We are open from 10:00 AM to 10:00 PM, 7 days a week. Last entry is at 9:00 PM.",
  },
  {
    question: "Do I need to book in advance?",
    answer: "Walk-ins are welcome, but advance booking is recommended, especially on weekends and holidays.",
  },
  {
    question: "Is there an age limit for Go Karting?",
    answer: "Go Karting is suitable for ages 12 and above. Junior karts are available for children aged 8-12.",
  },
  {
    question: "Do you have safety measures in place?",
    answer: "Absolutely. We provide helmets, safety barriers, trained staff supervision, and brief all participants before each activity.",
  },
  {
    question: "Can I host a birthday party at KR Funverse?",
    answer: "Yes! We offer customizable birthday packages with activities, food, and dedicated party areas.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, we have spacious free parking for cars and two-wheelers.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Free cancellation up to 24 hours before your booking. Late cancellations may incur a 50% charge.",
  },
  {
    question: "Do you offer group discounts?",
    answer: "Yes! Groups of 6 or more get special discounted rates. Contact us for a custom quote.",
  },
  {
    question: "Is there a dress code?",
    answer: "Comfortable clothing and closed-toe shoes are recommended. We provide all safety gear including helmets and racing suits.",
  },
  {
    question: "Can I bring my own food?",
    answer: "Outside food is not allowed, but we have an on-site cafe with snacks, beverages, and meal combos.",
  },
  {
    question: "Do you have lockers?",
    answer: "Yes, free lockers are available to store your belongings while you race and play.",
  },
  {
    question: "Are there any height or weight restrictions?",
    answer: "Minimum height for Go Karting is 4.5 ft. There is no strict weight limit, but guests must be able to fit safely in the kart with the seatbelt fastened.",
  },
];
