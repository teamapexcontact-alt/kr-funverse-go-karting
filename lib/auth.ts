// lib/auth.ts — AUTHENTICATION HELPERS
// PURPOSE: Firebase Authentication functions for signup, login, logout
// Functions: signUp, logIn, logOut, getCurrentUser
// Used by: Any component/page needing user authentication
// 
// Auth Providers: Email/Password, Google (expandable)
// Auth state is managed by Firebase SDK — use onAuthStateChanged to listen

import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

// Sign up with email & password
export async function signUp(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Log in with email & password
export async function logIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Log out
export async function logOut() {
  return signOut(auth);
}

// Listen for auth state changes (runs whenever user logs in/out)
export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
