import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What DevDen collects, why, who processes it, and how to delete your data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const email = SITE.supportEmail;
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro={
        <p>
          DevDen is a study community for computer-science students. This policy explains
          what we collect when you use the DevDen iPhone app and this website, why we
          collect it, who helps us process it, and the choices you have. We do not sell
          your personal data.
        </p>
      }
    >
      <h2>Who we are</h2>
      <p>
        DevDen (&ldquo;DevDen&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is built and run by a
        small team of students in India. We decide how your data is used, so we are the
        data controller (a &ldquo;Data Fiduciary&rdquo; under India&apos;s Digital Personal Data
        Protection Act, 2023). You can reach us at{" "}
        <a href={`mailto:${email}`}>{email}</a>.
      </p>

      <h2>What we collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li>
          <strong>Account details:</strong> your email address and a password (stored only as
          a one-way hash, never in readable form). If you use Sign in with Apple, we receive
          an Apple user identifier, your email address or an Apple private-relay address,
          and your name if you choose to share it.
        </li>
        <li>
          <strong>Profile:</strong> name, username, profile photo, bio, skills, your college,
          graduation year and the companies you are preparing for, if you add them.
        </li>
        <li>
          <strong>Coding-platform usernames:</strong> if you link GitHub, LeetCode, Codeforces,
          CodeChef, GeeksforGeeks or HackerRank, we store the username and fetch the public
          statistics shown on that platform&apos;s profile page.
        </li>
        <li>
          <strong>Content you create:</strong> posts, images, comments, doubts, answers,
          interview experiences, canvases, community details and direct or group messages.
        </li>
        <li>
          <strong>Reports and blocks:</strong> the content or person you report, the reason
          you choose, and the people you block.
        </li>
        <li>
          <strong>Messages to us:</strong> anything you send to our support email.
        </li>
      </ul>

      <h3>Information created as you use DevDen</h3>
      <ul>
        <li>
          <strong>Activity:</strong> who you follow, the communities you join, your upvotes,
          saved articles and accepted answers, so the app can show them to you.
        </li>
        <li>
          <strong>Sign-in sessions:</strong> a session token for each device you sign in on.
          We store only a hash of it, and it expires after 60 days without use.
        </li>
        <li>
          <strong>Advertising data (through Google AdMob):</strong> the ads you are shown and
          tap, approximate location derived from your IP address, app launches, and basic
          performance and crash data. If you allow tracking when iOS asks, AdMob also
          receives your device&apos;s advertising identifier. If you don&apos;t, it does not.
        </li>
      </ul>

      <h3>What we do not collect</h3>
      <ul>
        <li>
          <strong>Voice:</strong> voice channels on a canvas are streamed live between
          participants and are never recorded or stored.
        </li>
        <li>Your contacts, photos you don&apos;t choose to upload, precise location, or health data.</li>
        <li>Payment information. DevDen is free and has no in-app purchases.</li>
      </ul>

      <h2>Why we use it</h2>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Data used</th>
              <th>Basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Create your account and keep you signed in</td>
              <td>Account details, sessions</td>
              <td>To provide the service you asked for</td>
            </tr>
            <tr>
              <td>Show your profile, posts, answers and messages to the people they are meant for</td>
              <td>Profile, content, activity</td>
              <td>To provide the service</td>
            </tr>
            <tr>
              <td>Verify your campus and your coding-platform accounts</td>
              <td>Email domain, platform usernames and public stats</td>
              <td>To provide the service</td>
            </tr>
            <tr>
              <td>Send sign-up and password-reset codes</td>
              <td>Email address</td>
              <td>To provide the service</td>
            </tr>
            <tr>
              <td>Keep DevDen safe: review reports, remove abuse, stop spam and misuse</td>
              <td>Reports, blocks, content, account details</td>
              <td>Legitimate interest and legal obligations</td>
            </tr>
            <tr>
              <td>Show ads that keep DevDen free</td>
              <td>Advertising data</td>
              <td>Your consent for personalised ads; otherwise legitimate interest</td>
            </tr>
            <tr>
              <td>Answer you when you contact us</td>
              <td>Your message and email</td>
              <td>To respond to your request</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Who sees your information</h2>
      <ul>
        <li>
          <strong>Other DevDen users</strong> see your public profile (name, username, photo,
          bio, college, skills, linked coding stats), your posts, comments, doubts and answers,
          and experiences you share under your name. Your email address is never shown to
          other users. Messages are visible only to the people in that conversation.
        </li>
        <li>
          <strong>Anonymous experiences</strong> are shown without your name. We still keep the
          link to your account so we can act on reports.
        </li>
        <li>
          <strong>Service providers</strong> who process data for us under contract, only to
          run DevDen:
          <ul>
            <li>Convex — database and backend hosting</li>
            <li>Cloudinary — storing and delivering images you upload</li>
            <li>Resend — sending verification and password-reset emails</li>
            <li>LiveKit — relaying live voice in canvas voice channels</li>
            <li>
              Google AdMob — serving ads (see{" "}
              <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">
                how Google uses information from apps that use its services
              </a>
              )
            </li>
            <li>Apple — Sign in with Apple and App Store distribution</li>
          </ul>
        </li>
        <li>
          <strong>Authorities,</strong> only when the law requires it, or to protect someone
          from serious harm.
        </li>
      </ul>
      <p>
        These providers may process data on servers outside India, including in the United
        States. We use providers that protect data with industry-standard safeguards.
      </p>

      <h2>How long we keep it</h2>
      <ul>
        <li>Your account data, for as long as your account exists.</li>
        <li>Email verification codes expire after 10 minutes and are then deleted.</li>
        <li>Sign-in sessions end after 60 days without use, or when you sign out.</li>
        <li>
          When you delete your account, we delete your sign-in, all your sessions and your
          email address, and remove your name, photo, bio and college from your profile.
          Posts, answers and messages you wrote stay, labelled &ldquo;Deleted User&rdquo;, so
          other people&apos;s conversations still make sense. Delete anything you want gone
          before you delete your account, or ask us and we will remove it.
        </li>
        <li>
          Copies in our backups are overwritten on a rolling schedule and are not used for
          anything else.
        </li>
      </ul>

      <h2>Your choices and rights</h2>
      <ul>
        <li>
          <strong>See and correct</strong> your profile at any time in the app (Profile →
          Settings → Edit Profile).
        </li>
        <li>
          <strong>Delete</strong> your account in the app (Profile → Settings → Edit Profile →
          Delete Account), or by emailing us. See{" "}
          <a href="/support#delete-account">deleting your account</a>.
        </li>
        <li>
          <strong>Tracking:</strong> change your answer any time in iOS Settings → Privacy &amp;
          Security → Tracking.
        </li>
        <li>
          <strong>Get a copy</strong> of your data, ask us to correct or erase it, or withdraw
          consent, by emailing <a href={`mailto:${email}`}>{email}</a>. We reply within 30 days.
        </li>
        <li>
          Under India&apos;s DPDP Act you may also nominate someone to exercise these rights for
          you, and complain to the Data Protection Board of India. If you are in the EU or UK,
          you have the rights in the GDPR, including to object and to complain to your local
          data protection authority.
        </li>
      </ul>

      <h2>Security</h2>
      <p>
        All traffic between the app and our servers is encrypted with HTTPS. Passwords and
        session tokens are stored only as hashes, and your session on the phone is kept in
        the iOS Keychain. No system is perfectly secure; if a breach affects you, we will tell
        you and the authorities as the law requires.
      </p>

      <h2>Children</h2>
      <p>
        DevDen is for people aged {SITE.minimumAge} and over. If you are under 18, you need
        your parent or guardian&apos;s permission to use it. We do not knowingly collect data
        from anyone under {SITE.minimumAge}. If you think a child has an account, email us and
        we will delete it.
      </p>

      <h2>This website</h2>
      <p>
        This website does not use cookies, analytics or ads. It stores your light or dark
        theme choice in your browser&apos;s local storage, which never leaves your device.
      </p>

      <h2>Changes</h2>
      <p>
        If we change this policy, we will update the date at the top. If the change is
        significant, we will tell you in the app before it takes effect.
      </p>

      <h2>Contact and grievances</h2>
      <p>
        For any privacy question, request or complaint, write to our Grievance Officer at{" "}
        <a href={`mailto:${email}?subject=Privacy%20request`}>{email}</a> with
        &ldquo;Privacy request&rdquo; in the subject. We acknowledge within 72 hours and resolve
        within 30 days.
      </p>
    </LegalPage>
  );
}
