import LegalLayout from "@/components/LegalLayout";

export default function EnPrivacy() {
  return (
    <LegalLayout title="Privacy Policy" lang="en">
      <h1>Privacy Policy</h1>
      <p className="text-gray-500 text-sm">Last updated: June 6, 2026</p>

      <h2>1. Introduction</h2>
      <p>
        Biashara Mkononi (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the Biashara Mkononi mobile
        application and backend API (collectively, the &quot;Service&quot;). This Privacy Policy explains how we
        collect, use, disclose, and safeguard your information when you use our Service.
      </p>

      <h2>2. Information We Collect</h2>
      <h3>2.1 Information You Provide</h3>
      <ul>
        <li>
          <strong>Account information:</strong> name, email address, phone number, and password when you
          register.
        </li>
        <li>
          <strong>Business information:</strong> business name, description, product listings, prices, and
          images you upload.
        </li>
        <li>
          <strong>Transaction data:</strong> order details, payment references, and delivery addresses.
        </li>
        <li>
          <strong>Communications:</strong> messages you send through our in-app chat or support channels.
        </li>
      </ul>

      <h3>2.2 Information Collected Automatically</h3>
      <ul>
        <li>
          <strong>Device information:</strong> device model, operating system version, unique device
          identifiers, and mobile network information.
        </li>
        <li>
          <strong>Usage data:</strong> pages viewed, features used, time spent, and crash reports.
        </li>
        <li>
          <strong>Location data:</strong> approximate location (city/region) derived from IP address; precise
          GPS location only with your explicit permission.
        </li>
        <li>
          <strong>Log data:</strong> IP address, browser type, access times, and referring URLs for API
          consumers.
        </li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, operate, and improve the Service.</li>
        <li>Create and manage your account.</li>
        <li>Process transactions and send related notices.</li>
        <li>Send administrative messages, updates, and security alerts.</li>
        <li>Respond to your comments and support requests.</li>
        <li>Monitor and analyze usage trends to improve user experience.</li>
        <li>Detect and prevent fraudulent transactions and other illegal activities.</li>
        <li>Comply with legal obligations.</li>
      </ul>

      <h2>4. Sharing Your Information</h2>
      <p>We do not sell your personal information. We may share your information with:</p>
      <ul>
        <li>
          <strong>Service providers:</strong> third-party vendors who perform services on our behalf (hosting,
          analytics, payment processing, SMS delivery) under confidentiality agreements.
        </li>
        <li>
          <strong>Other users:</strong> your public business profile and product listings are visible to other
          app users.
        </li>
        <li>
          <strong>Legal requirements:</strong> when required by law, court order, or governmental authority.
        </li>
        <li>
          <strong>Business transfers:</strong> in connection with a merger, acquisition, or sale of assets,
          with notice to affected users.
        </li>
      </ul>

      <h2>5. Data Retention</h2>
      <p>
        We retain your personal data for as long as your account is active or as needed to provide the Service.
        You may request deletion of your account at any time; we will delete or anonymize your data within 30
        days, except where retention is required by law.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We implement industry-standard technical and organizational measures to protect your information,
        including encryption in transit (TLS) and at rest. However, no method of transmission over the internet
        is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2>7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Correct inaccurate or incomplete data.</li>
        <li>Request deletion of your data.</li>
        <li>Withdraw consent for optional data processing at any time.</li>
        <li>Lodge a complaint with your local data protection authority.</li>
      </ul>
      <p>
        To exercise these rights, contact us at{" "}
        <a href="mailto:privacy@biasharamkononi.com">privacy@biasharamkononi.com</a>.
      </p>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        The Service is not directed to children under the age of 13. We do not knowingly collect personal
        information from children under 13. If you believe we have inadvertently collected such information,
        please contact us immediately.
      </p>

      <h2>9. Third-Party Links</h2>
      <p>
        The Service may contain links to third-party websites. We are not responsible for the privacy practices
        of those sites and encourage you to review their privacy policies.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of material changes by posting
        the new policy on this page and updating the &quot;Last updated&quot; date. Continued use of the Service
        after changes constitutes acceptance of the revised policy.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us at:
        <br />
        <strong>Biashara Mkononi</strong>
        <br />
        Email: <a href="mailto:privacy@biasharamkononi.com">privacy@biasharamkononi.com</a>
      </p>
    </LegalLayout>
  );
}
