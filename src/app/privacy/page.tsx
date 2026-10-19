import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy policy" };
export default function PrivacyPage() {
  return (
    <>
      <header>
        <Link aria-label="Portfolio home" className="brand" href="/">
          m<span>.</span>
        </Link>
        <Link href="/">← Back to portfolio</Link>
      </header>
      <main className="section policy">
        <p className="eyebrow">LAST UPDATED / 28 SEPTEMBER 2026</p>
        <h1>Privacy policy</h1>
        <p>
          This is Manasseh Oruebor’s personal portfolio. It shares my work,
          experience, and interests. This page describes the portfolio’s own
          behaviour and the services involved in visiting it.
        </p>
        <h2>Information this site collects</h2>
        <p>
          The portfolio has no contact form, newsletter, advertising, or visitor
          analytics added by me. Its code does not set cookies or store visitor
          details in local storage. The motion control lasts for the current
          page visit.
        </p>
        <h2>Hosting and access</h2>
        <p>
          This portfolio may be served through GitHub Pages or, for its ChatGPT
          Sites edition, through OpenAI. Hosting providers may process technical
          request information such as IP addresses, browser information, and
          access or security logs. These processes are controlled by the hosting
          provider, not by the portfolio’s page code.
        </p>
        <p>
          For the GitHub Pages edition, see{" "}
          <a
            href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
            rel="noreferrer"
            target="_blank"
          >
            GitHub’s privacy statement
          </a>
          . For the ChatGPT Sites edition, see{" "}
          <a
            href="https://openai.com/policies/privacy-policy/"
            rel="noreferrer"
            target="_blank"
          >
            OpenAI’s privacy policy
          </a>
          . Restricted ChatGPT Sites access may require sign-in and platform
          authentication cookies.
        </p>
        <h2>Page assets</h2>
        <p>
          Fonts, animation libraries, and project listings are served as part of
          this site. There are no embedded LinkedIn feeds or GitHub tracking
          widgets. Loading the portfolio does not automatically open those
          services.
        </p>
        <h2>External links and messages</h2>
        <p>
          Links to GitHub, LinkedIn, and other websites take you to services
          with their own privacy policies. If you contact me by email, phone, or
          LinkedIn, I use the contact information and message you provide to
          respond to your enquiry. Your email, telephone, or LinkedIn provider
          may also process that communication under its own policies. Clicking
          an email or phone link opens your device’s email or calling
          application; the portfolio does not submit a form. Please avoid
          sending sensitive personal information in an introductory message.
        </p>
        <h2>Questions and changes</h2>
        <p>
          For questions about this portfolio or to request correction of
          information you have shared with me,{" "}
          <a href="mailto:manassehoruebor@gmail.com">
            email manassehoruebor@gmail.com
          </a>
          . I’ll update this page if the site’s data practices change.
        </p>
      </main>
      <footer className="section">
        <Link href="/">← Return to portfolio</Link>
      </footer>
    </>
  );
}
