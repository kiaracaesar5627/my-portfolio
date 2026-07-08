"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/lib/data";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  name: "",
  email: "",
  message: "",
};

function validate(form: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  } else if (form.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    field: keyof FormData,
    value: string,
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const subject = `Portfolio message from ${form.name.trim()}`;
    const body = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      "",
      form.message.trim(),
    ].join("\n");

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setForm(initialForm);
    setErrors({});
  };

  const inputClassName =
    "w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:ring-2 focus:ring-accent/20";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(event) => handleChange("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`${inputClassName} ${errors.name ? "border-red-500/70 focus:border-red-500/70" : "border-border focus:border-accent"}`}
          placeholder="Your name"
        />
        {errors.name ? (
          <p id="name-error" className="mt-2 text-sm text-red-400">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(event) => handleChange("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`${inputClassName} ${errors.email ? "border-red-500/70 focus:border-red-500/70" : "border-border focus:border-accent"}`}
          placeholder="you@example.com"
        />
        {errors.email ? (
          <p id="email-error" className="mt-2 text-sm text-red-400">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(event) => handleChange("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClassName} resize-y min-h-[120px] ${errors.message ? "border-red-500/70 focus:border-red-500/70" : "border-border focus:border-accent"}`}
          placeholder="Tell me about your project or question..."
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-red-400">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition hover:bg-accent-light sm:w-auto"
      >
        Send message
      </button>

      {submitted ? (
        <p className="text-sm text-accent-light" role="status">
          Thanks! Your email app should open with your message ready to send.
        </p>
      ) : null}
    </form>
  );
}
