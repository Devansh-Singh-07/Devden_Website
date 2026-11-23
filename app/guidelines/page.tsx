import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description: "How to be a good member of DevDen, and what happens when someone isn't.",
  alternates: { canonical: "/guidelines" },
};

export default function GuidelinesPage() {
  return (
    <LegalPage
      eyebrow="Community"
      title="Community Guidelines"
      intro={
        <p>
          DevDen works because people feel safe asking questions they think are silly. These
          guidelines protect that. They are part of our <a className="text-link" href="/terms">Terms of Use</a>.
        </p>
      }
    >
      <h2>Do</h2>
      <ul>
        <li><strong>Assume good faith.</strong> Everyone was a beginner once. Answer the question asked, not the person.</li>
        <li><strong>Explain, don&apos;t just paste.</strong> Say why an approach works. A canvas or a step-by-step note beats a wall of code.</li>
        <li><strong>Credit others.</strong> Link the problem, the article or the person whose idea you are sharing.</li>
        <li><strong>Mark the answer that helped</strong> so the next person finds it quickly.</li>
        <li><strong>Be honest in interview experiences.</strong> Share what was asked and how it went, good or bad.</li>
      </ul>

      <h2>Don&apos;t</h2>
      <ul>
        <li><strong>Harass, bully, threaten or mock anyone,</strong> in public posts or in private messages.</li>
        <li><strong>Post hate</strong> based on caste, religion, gender, sexuality, disability, region or anything else about who someone is.</li>
        <li><strong>Post sexual, violent or shocking content.</strong></li>
        <li><strong>Spam:</strong> repeated posts, referral links, promotions or paid services nobody asked for.</li>
        <li><strong>Cheat or help others cheat:</strong> no questions or answers from a live exam, online assessment or contest while it is running, and no interview questions you agreed to keep confidential.</li>
        <li><strong>Share private information</strong> about anyone: phone numbers, addresses, screenshots of private chats, or someone else&apos;s marks.</li>
        <li><strong>Impersonate</strong> another student, a teacher, a college or a company.</li>
        <li><strong>Post work that isn&apos;t yours</strong> as if it were, or pirated books and courses.</li>
      </ul>

      <h2>If you see something wrong</h2>
      <ul>
        <li><strong>Report it:</strong> long-press a message or comment, or use the ··· menu on a post, doubt, answer, experience or profile, then choose Report.</li>
        <li><strong>Block the person:</strong> ··· menu on their profile or in the chat. You will no longer see their posts, comments or messages, and they can&apos;t message you. You can unblock in Settings → Blocked Users.</li>
        <li>
          <strong>Something urgent?</strong> Email <a href={`mailto:${SITE.supportEmail}?subject=Urgent%20report`}>{SITE.supportEmail}</a> with &ldquo;Urgent report&rdquo; in the subject. If anyone is in danger, contact local emergency services first.
        </li>
      </ul>

      <h2>What we do</h2>
      <p>
        We review every report within 24 hours. Depending on how serious it is, we remove the
        content, warn the person, suspend the account, or remove it permanently. Content that
        threatens someone&apos;s safety or breaks the law means immediate removal, and we may
        report it to the authorities.
      </p>
    </LegalPage>
  );
}
