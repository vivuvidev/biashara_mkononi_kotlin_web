import LegalLayout from "@/components/LegalLayout";

export default function EnTerms() {
  return (
    <LegalLayout title="Terms & Conditions" lang="en">
      <h1>Terms &amp; Conditions</h1>
      <p className="text-gray-500 text-sm">Last updated: June 6, 2026</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading, installing, or using the Biashara Mkononi mobile application or accessing our backend
        API (collectively, the &quot;Service&quot;), you agree to be bound by these Terms &amp; Conditions
        (&quot;Terms&quot;). If you do not agree to these Terms, do not use the Service.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        Biashara Mkononi is a platform that enables small and medium businesses to list products and services,
        manage orders, and connect with customers through a mobile application. The backend API allows
        authorised developers to integrate Service functionality into their own applications.
      </p>

      <h2>3. Eligibility</h2>
      <ul>
        <li>You must be at least 18 years old to create an account.</li>
        <li>You must have the legal capacity to enter into a binding agreement.</li>
        <li>
          Business accounts must be operated by a person authorised to act on behalf of the registered
          business.
        </li>
      </ul>

      <h2>4. Account Registration</h2>
      <p>
        You agree to provide accurate, current, and complete information during registration and to keep your
        account information up to date. You are responsible for maintaining the confidentiality of your
        password and for all activities that occur under your account. Notify us immediately at{" "}
        <a href="mailto:support@biasharamkononi.com">support@biasharamkononi.com</a> if you suspect
        unauthorised use of your account.
      </p>

      <h2>5. User Responsibilities</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Post false, misleading, or fraudulent product listings or business information.</li>
        <li>Use the Service for any unlawful purpose or in violation of any applicable law or regulation.</li>
        <li>Harass, threaten, or harm other users.</li>
        <li>
          Attempt to gain unauthorised access to any part of the Service or its related systems.
        </li>
        <li>
          Reverse-engineer, decompile, or disassemble any software component of the Service.
        </li>
        <li>
          Use automated tools (bots, scrapers) to access or collect data from the Service without our written
          permission.
        </li>
        <li>Upload content that infringes any third party&apos;s intellectual property rights.</li>
      </ul>

      <h2>6. Listings and Transactions</h2>
      <p>
        Biashara Mkononi provides the platform for buyers and sellers to connect. We are not a party to any
        transaction between users. You are solely responsible for ensuring that your listings comply with
        applicable laws, including consumer protection and product safety regulations. We reserve the right to
        remove any listing that violates these Terms or applicable law.
      </p>

      <h2>7. Payments and Fees</h2>
      <p>
        Any fees for premium features will be clearly disclosed before purchase. Payment processing is handled
        by third-party payment processors. We are not responsible for errors or failures caused by those
        processors. All fees are non-refundable unless otherwise stated or required by law.
      </p>

      <h2>8. Intellectual Property</h2>
      <p>
        All content, trademarks, logos, and software associated with the Service are the property of Biashara
        Mkononi or its licensors. You retain ownership of content you upload but grant us a worldwide,
        royalty-free, non-exclusive licence to use, display, and distribute that content solely for the purpose
        of operating the Service.
      </p>

      <h2>9. API Access</h2>
      <p>
        Access to the Biashara Mkononi API is subject to these Terms and any additional API-specific
        documentation we provide. We reserve the right to suspend or revoke API access for abuse, excessive
        usage, or violation of these Terms without prior notice.
      </p>

      <h2>10. Disclaimer of Warranties</h2>
      <p>
        THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
        PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE,
        OR FREE OF VIRUSES.
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, BIASHARA MKONONI SHALL NOT BE LIABLE FOR ANY
        INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE,
        EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY TO YOU FOR ANY
        CLAIM SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE THREE MONTHS PRECEDING THE CLAIM.
      </p>

      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Biashara Mkononi, its officers, directors, employees, and
        agents from any claims, losses, liabilities, and expenses (including reasonable legal fees) arising from
        your use of the Service, your content, or your violation of these Terms.
      </p>

      <h2>13. Termination</h2>
      <p>
        We reserve the right to suspend or terminate your account at our discretion if you violate these Terms
        or engage in conduct we determine to be harmful to the Service or other users. You may close your
        account at any time through the app settings.
      </p>

      <h2>14. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the Republic of Kenya. Any disputes shall be resolved in the
        courts of Nairobi, Kenya, unless otherwise required by applicable consumer protection law.
      </p>

      <h2>15. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. We will notify you of material changes through the app or
        by email at least 14 days before the changes take effect. Continued use of the Service after that date
        constitutes acceptance of the revised Terms.
      </p>

      <h2>16. Contact Us</h2>
      <p>
        For questions about these Terms, contact us at:
        <br />
        <strong>Biashara Mkononi</strong>
        <br />
        Email: <a href="mailto:legal@biasharamkononi.com">legal@biasharamkononi.com</a>
      </p>
    </LegalLayout>
  );
}
