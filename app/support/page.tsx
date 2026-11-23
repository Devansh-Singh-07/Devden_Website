import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { SITE, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with DevDen: contact the team, fix sign-in problems, report abuse or delete your account.",
  alternates: { canonical: "/support" },
};

const topics = [
  {
    q: "I didn't get my verification code",
    a: "Check your spam or promotions folder, then tap Resend Code after 30 seconds. Codes work for 10 minutes. If you asked for several codes, wait 2 minutes before trying again.",
  },
  {
    q: "I forgot my password",
    a: "On the Sign In screen, tap Forgot Password?, enter your email and use the 6-digit code we send you to choose a new password. This signs you out on your other devices.",
  },
  {
    q: "Sign in with Apple isn't working",
    a: "Check you are signed in to an Apple Account in iPhone Settings and try again. If you chose Hide My Email, your DevDen account uses Apple's private relay address, so use Sign in with Apple again rather than the email form.",
  },
  {
    q: "How do I verify my campus?",
    a: "Go to Profile → Settings → Campus and choose your college. Your campus is verified automatically when your account email is on your college's email domain.",
  },
  {
    q: "How do I link LeetCode, GitHub or another coding platform?",
    a: "Go to Profile → Settings → Coding Platforms, add your username, and follow the steps to place a one-time code on that platform's public profile. Once we see it, the platform is verified and you can remove the code.",
  },
  {
    q: "Voice on a canvas isn't working",
    a: "Allow microphone access in iPhone Settings → DevDen → Microphone. Voice needs at least two people on the same canvas to hear each other.",
  },
  {
    q: "How do I report a post or block someone?",
    a: "Long-press a message or comment, or use the ··· menu on a post, doubt, answer, experience or profile, then choose Report or Block. We review every report within 24 hours.",
  },
];

export default function SupportPage() {
  const email = SITE.supportEmail;
  return (
    <LegalPage
      eyebrow="Help"
      title="Support"
      updated={false}
      intro={
        <p>
          We are a small team of students and we read every message. Email{" "}
          <a className="text-link" href={mailto("DevDen support")}>{email}</a> and we will
          reply within 2 working days.
        </p>
      }
    >
      <div className="not-prose mt-8 grid gap-4 sm:grid-cols-2">
        <a href={mailto("DevDen support")} className="card block p-6 transition-transform duration-300 hover:-translate-y-0.5">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-accent">Email us</p>
          <p className="mt-2 text-[1.0625rem] font-semibold text-fg">{email}</p>
          <p className="mt-1 text-[0.9063rem] text-fg-2">Questions, bugs, feedback and privacy requests.</p>
        </a>
        <a href={mailto("Urgent report")} className="card block p-6 transition-transform duration-300 hover:-translate-y-0.5">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-accent">Report abuse</p>
          <p className="mt-2 text-[1.0625rem] font-semibold text-fg">Urgent report</p>
          <p className="mt-1 text-[0.9063rem] text-fg-2">For anything that can&apos;t wait for an in-app report.</p>
        </a>
      </div>

      <h2>Common questions</h2>
      {topics.map((topic) => (
        <div key={topic.q}>
          <h3>{topic.q}</h3>
          <p>{topic.a}</p>
        </div>
      ))}

      <h2 id="delete-account">Deleting your account</h2>
      <p><strong>In the app</strong> (the fastest way):</p>
      <ul>
        <li>Open DevDen and tap your avatar at the top right of For You.</li>
        <li>Tap the gear to open Settings, then <strong>Edit Profile</strong>.</li>
        <li>Scroll down, tap <strong>Delete Account</strong>, and confirm.</li>
      </ul>
      <p>
        <strong>By email:</strong> if you can&apos;t sign in, write to{" "}
        <a href={mailto("Delete my account")}>{email}</a> from the email address on your
        account with &ldquo;Delete my account&rdquo; in the subject. We delete it within 7 days
        and confirm by email.
      </p>
      <p><strong>What happens:</strong></p>
      <ul>
        <li>Your sign-in, email address and every session are deleted, so you are signed out on all devices.</li>
        <li>Your name, photo, bio and college are removed from your profile.</li>
        <li>
          Posts, answers and messages you wrote stay, shown as &ldquo;Deleted User&rdquo;, so other
          people&apos;s conversations still make sense. Delete any you want gone first, or ask
          us in your email and we will remove them.
        </li>
        <li>If you used Sign in with Apple, DevDen&apos;s access to your Apple ID is revoked.</li>
        <li>You can sign up again later with the same email, as a new account.</li>
      </ul>

      <h2>Policies</h2>
      <ul>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Use</a></li>
        <li><a href="/guidelines">Community Guidelines</a></li>
      </ul>
    </LegalPage>
  );
}
