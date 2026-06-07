import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";

export default function TermsOfService() {
  return (
    <LegalLayout
      title="Terms of Service"
      description="Terms of Service for BiasharaMkononi POS — the agreement that applies when you use the app."
      privacyHref="/privacy-policy"
      termsHref="/terms-of-service"
    >
      <h1>Terms of Service — BiasharaMkononi POS</h1>
      <p className="text-gray-500 text-sm">Last updated: June 7, 2026</p>

      <p>
        Welcome to BiasharaMkononi POS (&quot;the app&quot;, &quot;we&quot;, &quot;our&quot;). By
        downloading, installing, or using the app, you agree to these Terms of Service
        (&quot;Terms&quot;). Please read them carefully. If you do not agree to these Terms, please do not
        use the app.
      </p>

      <h2>1. What the app is</h2>
      <p>
        BiasharaMkononi POS is a point-of-sale tool designed to help small business owners manage their
        day-to-day operations — including managing products, recording sales, printing receipts, and
        tracking inventory — directly from their phone or tablet.
      </p>
      <p>
        It is built primarily for small business owners and their staff, including those running shops,
        kiosks, and similar businesses in Tanzania and other countries.
      </p>

      <h2>2. The app is a tool — you own your data</h2>
      <p>
        The app is simply a tool to help you organize and run your business. All business data you enter —
        shop details, products, sales records, staff names, and similar information — belongs to{" "}
        <strong>you</strong>. We do not claim any ownership over your business data.
      </p>
      <p>
        As described in our <Link href="/privacy-policy">Privacy Policy</Link>, this data is stored locally
        on your device, and we do not have access to it.
      </p>

      <h2>3. Acceptable use</h2>
      <p>You agree to use the app only for lawful, legitimate business purposes. You agree not to:</p>
      <ul>
        <li>Use the app for any illegal activity or to record fraudulent transactions;</li>
        <li>
          Attempt to reverse-engineer, modify, or interfere with the app in ways not permitted by
          applicable law; or
        </li>
        <li>Use the app in any way that could harm, disable, or impair its functioning for yourself or others.</li>
      </ul>

      <h2>4. No warranties — &quot;as is&quot;</h2>
      <p>
        The app is provided to you <strong>&quot;as is&quot; and &quot;as available,&quot;</strong> without
        warranties of any kind, whether express or implied. We do our best to keep the app working well and
        to fix issues we become aware of, but we do not guarantee that the app will be error-free,
        uninterrupted, or suitable for every business need.
      </p>

      <h2>5. Your business decisions and records</h2>
      <p>You are solely responsible for:</p>
      <ul>
        <li>
          The accuracy and completeness of the information you enter into the app (such as prices, stock
          levels, and sales records);
        </li>
        <li>Any business, financial, or operational decisions you make based on information from the app; and</li>
        <li>
          Maintaining your own business records, receipts, and tax filings as required by the laws that
          apply to your business.
        </li>
      </ul>
      <p>
        The app is a record-keeping and sales tool — it does not provide financial, legal, tax, or business
        advice, and we are not responsible for outcomes resulting from how you choose to run your business.
      </p>

      <h2>6. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by applicable law, we will not be liable for any indirect,
        incidental, or consequential loss or damage arising from your use of, or inability to use, the app —
        including loss of business data, revenue, or profits — except where such liability cannot be
        excluded by law.
      </p>
      <p>
        Because your data is stored only on your device, we strongly encourage you to back up important
        business records regularly using your device&apos;s own backup tools, in case your device is lost,
        damaged, or the app is uninstalled.
      </p>

      <h2>7. Updates to the app and these terms</h2>
      <p>
        We may update the app from time to time to fix issues, improve features, or add new functionality.
        We may also update these Terms to reflect such changes. If we make significant changes, we will
        update the &quot;Last updated&quot; date above and, where reasonable, let you know within the app.
      </p>
      <p>Continuing to use the app after an update means you accept the revised Terms.</p>

      <h2>8. Governing law</h2>
      <p>
        These Terms are primarily governed by the laws of <strong>Tanzania</strong>. If you are using the
        app from another country, you remain responsible for complying with the laws that apply to you and
        your business in your own location, and nothing in these Terms limits any rights you may have under
        those local laws.
      </p>

      <h2>9. Contact us</h2>
      <p>If you have questions about these Terms, you can reach us at:</p>
      <ul>
        <li>
          <strong>Name/Company:</strong> Biashara Mkononi
        </li>
        <li>
          <strong>Email:</strong> <a href="mailto:legal@biasharamkononi.com">legal@biasharamkononi.com</a>
        </li>
      </ul>
      <p>
        See also our <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    </LegalLayout>
  );
}
