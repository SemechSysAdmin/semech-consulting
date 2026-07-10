import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2349152563630?text=Hello%20Semech%20Consult%2C%20I%27d%20like%20to%20discuss%20a%20consulting%20engagement."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 bg-[oklch(0.65_0.17_150)] text-paper px-4 py-3 rounded-full shadow-elegant hover:scale-105 transition-transform"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline text-sm font-medium">Chat with us</span>
    </a>
  );
}
