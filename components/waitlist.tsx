"use client";

import { useId, useRef, useState } from "react";
import { ArrowRight, CheckGlyph } from "@/components/icons";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const id = useId();

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      setStatus("error");
      inputRef.current?.focus();
      return;
    }
    setStatus("done");
  };

  if (status === "done") {
    return (
      <div className="space-y-4">
        <div
          className="fade-up mx-auto flex max-w-[460px] items-center justify-center gap-3 rounded-full border border-white/12 bg-white/[0.05] px-6 py-4 backdrop-blur-md"
          role="status"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent">
            <CheckGlyph size={14} />
          </span>
          <span className="text-[0.875rem] text-white/75">
            You&apos;re on the list. We&apos;ll write when DevDen opens.
          </span>
        </div>
        <p className="text-center text-[0.75rem] text-white/45">
          Have queries in the meantime? Reach us directly at{" "}
          <a
            href="mailto:wonderbuilder07@gmail.com?subject=DevDen%20Query"
            className="font-medium text-paper underline decoration-accent/60 underline-offset-4 transition-colors hover:text-accent"
          >
            wonderbuilder07@gmail.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="mx-auto max-w-[500px]">
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <div className="waitlist">
        <input
          ref={inputRef}
          id={id}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@devden.app"
          value={email}
          aria-invalid={status === "error"}
          aria-describedby={`${id}-hint`}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") setStatus("idle");
          }}
        />
        <button type="submit">
          Discover DevDen
          <ArrowRight size={14} className="btn-arrow inline-block align-middle" />
        </button>
      </div>
      <p
        id={`${id}-hint`}
        aria-live="polite"
        className={`mt-3 text-[0.6875rem] ${
          status === "error" ? "text-accent" : "text-white/30"
        }`}
      >
        {status === "error"
          ? "That email doesn't look right. Try again?"
          : "Join the waitlist for early access on iOS. One email, no noise."}
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 text-[0.75rem] text-white/45">
        <span>For any queries or feedback, email us at</span>
        <a
          href="mailto:wonderbuilder07@gmail.com?subject=DevDen%20Query"
          className="font-medium text-paper underline decoration-accent/60 underline-offset-4 transition-colors hover:text-accent"
        >
          wonderbuilder07@gmail.com
        </a>
      </div>
    </form>
  );
}
