// lib/firestore.ts — FIRESTORE DATABASE HELPERS
// PURPOSE: Contains all Firestore read/write operations for the app
// Functions: saveBooking, getBookings, saveContactInquiry, getActivities, etc.
// Used by: BookingForm.tsx, Contact page, admin features
// 
// Firestore Collections:
//   bookings/    - Each booking document = one customer booking
//   contacts/    - Contact form submissions
//   activities/  - Activity data (Go Karting, Box Cricket, Indoor Games)

import { db } from "./firebase";
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";

// Collection references
const bookingsCollection = collection(db, "bookings");
const contactsCollection = collection(db, "contacts");

// Save a new booking to Firestore
export async function saveBooking(bookingData: Record<string, unknown>) {
  const docRef = await addDoc(bookingsCollection, {
    ...bookingData,
    createdAt: new Date().toISOString(),
  });
  return docRef.id;
}

// Get all bookings (for admin)
export async function getBookings() {
  const q = query(bookingsCollection, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// Save a contact form inquiry
export async function saveContactInquiry(data: Record<string, unknown>) {
  const docRef = await addDoc(contactsCollection, {
    ...data,
    createdAt: new Date().toISOString(),
  });
  return docRef.id;
}
