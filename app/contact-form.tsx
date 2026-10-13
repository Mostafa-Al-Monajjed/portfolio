"use client";

import { useForm } from "@formspree/react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xrgvvdlo");

  if (state.succeeded) {
    return (
      <div className="contact-success">
        <CheckCircle2 size={20} />
        <span>Thanks! Your message was sent successfully.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form mx-auto max-w-2xl" aria-label="Contact form">
      <div className="contact-fields">
        <label>
          Your email
          <input name="email" type="email" required placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea name="message" required rows={4} placeholder="Tell me about your project..." />
        </label>
      </div>
      {state.errors && <p className="contact-error">Please check your details and try again.</p>}
      <button className="contact-submit" type="submit" disabled={state.submitting}>
        {state.submitting ? "Sending..." : "Send message"} <Send size={15} />
      </button>
    </form>
  );
}
