/**
 * HOW TO ADD YOUR REAL LOCATION:
 *
 * 1. Go to https://www.google.com/maps
 * 2. Search for "KR Funverse, Rampally, Ghatkesar, Hyderabad"
 * 3. Click the "Share" button (or the three dots → Share)
 * 4. Select "Embed a map"
 * 5. Choose the size you want (use "Medium" or "Large")
 * 6. Copy the iframe src URL — it looks like:
 *    https://www.google.com/maps/embed?pb=...
 * 7. Paste it in the src below, replacing the placeholder
 *
 * That's it! The map will show your exact location.
 */

export default function Map() {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10">
      <iframe
        title="KR Funverse Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.5439!3d17.4062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b0e1e1e1e1e%3A0x1e1e1e1e1e1e1e1e!2sKR%20Funverse!5e0!3m2!1sen!2sin!4v1"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="w-full"
      />
    </div>
  );
}
