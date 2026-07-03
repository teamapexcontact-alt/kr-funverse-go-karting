// utils/validation.ts — FORM VALIDATION HELPERS
// PURPOSE: Validation functions for form inputs across the site
// Functions: validateEmail, validatePhone, validateRequired, validateBookingForm
// Used by: BookingForm, Contact form
// Why separate file? Keeps validation logic reusable and testable

export function validateEmail(email: string): string | null {
  if (!email) return "Email is required";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Please enter a valid email address";
  return null; // null = no error
}

export function validatePhone(phone: string): string | null {
  if (!phone) return "Phone number is required";
  const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile number format
  if (!phoneRegex.test(phone)) return "Please enter a valid 10-digit phone number";
  return null;
}

export function validateRequired(value: string, fieldName: string): string | null {
  if (!value || value.trim() === "") return `${fieldName} is required`;
  return null;
}
