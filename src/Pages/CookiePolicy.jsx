import React from "react";
import SectionWrapper from "../Components/SectionWrapper";

const CookiePolicy = () => {
  return (
    <SectionWrapper>
      <div className="min-h-screen bg-[var(--color-bg-secondary)] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-[var(--color-bg-primary)] rounded-lg shadow-lg border border-[var(--color-border)] p-8">
          <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-8">
            Cookie Policy
          </h1>

          <div className="space-y-8 text-[var(--color-text-secondary)]">
            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                1. What Are Cookies?
              </h2>
              <p className="mb-4">
                Cookies are small text files that are placed on your device when
                you visit a website. They help websites remember information
                about your visit, such as your preferences and login details.
                Cookies are widely used and serve important functions on
                websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                2. How We Use Cookies
              </h2>
              <p className="mb-4">
                Habit Tracker uses cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Essential Cookies:</strong> Required for basic
                  functionality like authentication and security
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your preferences
                  such as language and theme settings
                </li>
                <li>
                  <strong>Performance Cookies:</strong> Collect information
                  about how you use our site to improve performance
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand visitor
                  behavior and optimize the user experience
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Used to deliver
                  personalized content and advertisements
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                3. Types of Cookies We Use
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Session Cookies:</h3>
                  <p>
                    These cookies are temporary and are deleted when you close
                    your browser. They are used to maintain your session and
                    keep you logged in.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Persistent Cookies:</h3>
                  <p>
                    These cookies remain on your device for an extended period.
                    They remember your preferences and login information across
                    visits.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Third-Party Cookies:</h3>
                  <p>
                    Some cookies may be set by third-party services embedded in
                    our website, such as analytics providers and social media
                    platforms.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                4. How Long Do Cookies Last?
              </h2>
              <p className="mb-4">
                The duration of cookies varies depending on their type:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Session Cookies:</strong> Deleted when you close your
                  browser
                </li>
                <li>
                  <strong>Persistent Cookies:</strong> Can last from a few days
                  to several years
                </li>
                <li>
                  <strong>Performance Cookies:</strong> Typically set for up to
                  2 years
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                5. Cookie Consent and Control
              </h2>
              <p className="mb-4">
                When you first visit our website, we display a cookie consent
                banner. You can:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Accept all cookies by clicking "Accept"</li>
                <li>Reject non-essential cookies by clicking "Reject"</li>
                <li>Customize your cookie preferences in the settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                6. Managing Cookies in Your Browser
              </h2>
              <p className="mb-4">
                Most web browsers allow you to control cookies through their
                settings. You can:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>View cookies stored on your device</li>
                <li>Delete cookies individually or in bulk</li>
                <li>Block cookies from being stored</li>
                <li>Set preferences for specific websites</li>
              </ul>
              <p className="mt-4">
                For instructions on managing cookies in your browser, please
                consult your browser's help documentation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                7. Impact of Disabling Cookies
              </h2>
              <p className="mb-4">
                If you disable cookies, you may experience reduced functionality
                on our website. Some features may not work properly, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Difficulty logging in to your account</li>
                <li>Loss of saved preferences</li>
                <li>Inability to track your habit progress properly</li>
                <li>Reduced personalization of content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                8. Third-Party Analytics
              </h2>
              <p className="mb-4">
                We may use third-party analytics services such as Google
                Analytics to understand how visitors use our site. These
                services may collect information about your interactions with
                our website. For more information, please review the privacy
                policy of the respective service provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                9. Do Not Track Signals
              </h2>
              <p className="mb-4">
                Some browsers include a "Do Not Track" feature. Our website
                currently does not respond to DNT signals. However, you can use
                other privacy tools to control the information collected about
                you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                10. Updates to This Policy
              </h2>
              <p className="mb-4">
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or to comply with legal requirements.
                Your continued use of our website after any changes constitutes
                your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                11. Contact Us
              </h2>
              <p className="mb-4">
                If you have questions about this Cookie Policy, please contact
                us at:
              </p>
              <ul className="space-y-2 ml-4">
                <li>
                  <strong>Email:</strong> habittracker@gmail.com
                </li>
                <li>
                  <strong>Phone:</strong> 470-686-9003
                </li>
                <li>
                  <strong>Address:</strong> House 99, Sonargaon Janapath Road,
                  Sector-11, Uttara, Dhaka
                </li>
              </ul>
            </section>

            <div className="mt-8 p-4 bg-[var(--color-bg-tertiary)]/30 rounded-lg">
              <p className="text-sm text-[var(--color-text-secondary)]">
                Last updated: January 2, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CookiePolicy;
