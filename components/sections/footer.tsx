import { Wordmark } from "@/components/logo";
import { SITE, mailto } from "@/lib/site";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Doubts", href: "/#doubts" },
      { label: "Interview experiences", href: "/#interviews" },
      { label: "Canvas", href: "/#canvas" },
      { label: "Learn", href: "/#learn" },
      { label: "Screens", href: "/#screens" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Support", href: "/support" },
      { label: "FAQ", href: "/#faq" },
      { label: "Delete your account", href: "/support#delete-account" },
      { label: "Contact us", href: mailto("DevDen support") },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Community Guidelines", href: "/guidelines" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-2">
      <div className="wrap grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="max-w-[300px] sm:col-span-2 lg:col-span-1">
          <Wordmark />
          <p className="mt-4 text-[0.9063rem] leading-relaxed text-fg-2">
            A study community for computer-science students. Built by students, for
            students.
          </p>
          <a href={`mailto:${SITE.supportEmail}`} className="text-link mt-5 inline-block text-[0.875rem]">
            {SITE.supportEmail}
          </a>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-fg-3">
              {column.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[0.9063rem] text-fg-2 transition-colors hover:text-fg">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="wrap flex flex-col gap-2 border-t border-line py-6 text-[0.8125rem] text-fg-3 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 DevDen. All rights reserved.</span>
        <span>Made for iPhone. Apple and App Store are trademarks of Apple Inc.</span>
      </div>
    </footer>
  );
}
