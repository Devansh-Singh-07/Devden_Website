import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The rules for using DevDen, including our zero-tolerance policy for abuse.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const email = SITE.supportEmail;
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      intro={
        <p>
          These terms are the agreement between you and DevDen for using the DevDen iPhone
          app and this website. By creating an account or using DevDen, you agree to them.
          The short version: be kind, post only what you have the right to post, and we
          will remove anyone who abuses others.
        </p>
      }
    >
      <h2>1. Who can use DevDen</h2>
      <ul>
        <li>You must be at least {SITE.minimumAge} years old.</li>
        <li>
          If you are under 18 (or under the age of majority where you live), you may use
          DevDen only with your parent or guardian&apos;s permission, and they accept these
          terms on your behalf.
        </li>
        <li>You must not have been removed from DevDen before.</li>
      </ul>

      <h2>2. Your account</h2>
      <ul>
        <li>Give accurate information and keep your password to yourself.</li>
        <li>One person, one account. Don&apos;t impersonate anyone or a college or company.</li>
        <li>
          You are responsible for what happens under your account. Tell us straight away at{" "}
          <a href={`mailto:${email}`}>{email}</a> if you think someone else has access.
        </li>
        <li>
          You can delete your account at any time in the app: Profile → Settings → Edit
          Profile → Delete Account.
        </li>
      </ul>

      <h2>3. Zero tolerance for objectionable content and abuse</h2>
      <p>
        DevDen has <strong>no tolerance</strong> for objectionable content or abusive users.
        You must follow our <a href="/guidelines">Community Guidelines</a>. In particular, you
        must not post or send anything that:
      </p>
      <ul>
        <li>harasses, bullies, threatens or demeans anyone;</li>
        <li>is hateful towards anyone for who they are, including caste, religion, gender, sexuality, disability or origin;</li>
        <li>is sexual, pornographic or violent;</li>
        <li>is spam, a scam, or advertising you weren&apos;t asked for;</li>
        <li>shares someone else&apos;s private information without their permission;</li>
        <li>
          helps anyone cheat: questions or answers from a live exam, online assessment or
          contest while it is running, or interview questions you promised to keep confidential;
        </li>
        <li>infringes someone else&apos;s copyright, trademark or other rights; or</li>
        <li>breaks the law.</li>
      </ul>
      <p>
        You can report any post, comment, doubt, answer, experience, message or profile, and
        block any user, from inside the app. We review every report within 24 hours. When
        content breaks these terms we remove it, and we suspend or permanently remove the
        account that posted it.
      </p>

      <h2>4. Your content</h2>
      <ul>
        <li>You keep ownership of everything you post.</li>
        <li>
          You give DevDen a worldwide, non-exclusive, royalty-free licence to host, store,
          display and share your content inside DevDen, as needed to run the service. This
          licence ends when the content is deleted, except for copies other users already
          shared in their own messages.
        </li>
        <li>You confirm you have the right to post what you post.</li>
        <li>
          Interview experiences are personal accounts. They are not verified by us or by the
          companies named, and they may be wrong or out of date.
        </li>
      </ul>

      <h2>5. Using DevDen properly</h2>
      <ul>
        <li>Don&apos;t try to break, overload, reverse-engineer or get around the security of DevDen.</li>
        <li>Don&apos;t scrape or collect other users&apos; data, or use bots to post.</li>
        <li>Don&apos;t use DevDen to send spam or to sell things without our permission.</li>
      </ul>

      <h2>6. Ads and third-party services</h2>
      <p>
        DevDen is free and shows ads served by Google AdMob. Links to other websites and
        statistics from coding platforms (GitHub, LeetCode, Codeforces, CodeChef,
        GeeksforGeeks, HackerRank) are provided for convenience. Those services have their
        own terms; we are not responsible for them, and their names belong to their owners.
        DevDen is not affiliated with or endorsed by them.
      </p>

      <h2>7. Changes and availability</h2>
      <p>
        We are improving DevDen all the time, so features may change or stop. We may update
        these terms; if a change is significant, we will tell you in the app before it takes
        effect. Continuing to use DevDen after that means you accept the new terms.
      </p>

      <h2>8. Ending your use</h2>
      <p>
        You can stop using DevDen and delete your account whenever you like. We may suspend
        or close your account if you break these terms, or if the law requires us to. Sections
        4, 9, 10 and 12 continue after your account ends.
      </p>

      <h2>9. No warranty</h2>
      <p>
        DevDen is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. Answers, articles and
        experiences come from students and may contain mistakes. To the extent the law allows,
        we make no promises that DevDen will be error-free, always available, or fit for a
        particular purpose such as getting you a job.
      </p>

      <h2>10. Limit of liability</h2>
      <p>
        To the extent the law allows, DevDen is not liable for indirect or consequential
        losses, or for content posted by other users. Our total liability to you for any claim
        is limited to INR 1,000. Nothing in these terms limits liability that cannot be limited
        by law.
      </p>

      <h2>11. Apple</h2>
      <p>If you downloaded DevDen from Apple&apos;s App Store:</p>
      <ul>
        <li>These terms are between you and DevDen only, not Apple. DevDen, not Apple, is responsible for the app and its content.</li>
        <li>You may use the app on Apple devices you own or control, as allowed by the App Store Usage Rules.</li>
        <li>Apple has no obligation to provide maintenance or support for the app.</li>
        <li>
          DevDen is free; if the app fails to meet a warranty, you may notify Apple, and to the
          extent the law allows Apple has no other warranty obligation.
        </li>
        <li>
          DevDen, not Apple, is responsible for any claims about the app, including product
          liability, legal or regulatory requirements, consumer protection and privacy, and
          intellectual-property claims.
        </li>
        <li>You confirm you are not in a country under a U.S. Government embargo or on a U.S. Government list of prohibited or restricted parties.</li>
        <li>Apple and its subsidiaries are third-party beneficiaries of these terms and may enforce them against you.</li>
      </ul>

      <h2>12. Law and disputes</h2>
      <p>
        These terms are governed by the laws of India. Please contact us first so we can try
        to fix the problem. If we can&apos;t, the courts of India have jurisdiction. If you live
        in the EU or UK, you also keep the protection of the mandatory consumer laws of your
        country.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </LegalPage>
  );
}
