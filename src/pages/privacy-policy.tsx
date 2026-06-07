import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="Privacy Policy for BiasharaMkononi POS — what information the app handles and how it is used."
      privacyHref="/privacy-policy"
      termsHref="/terms-of-service"
    >
      <h1>Privacy Policy — BiasharaMkononi POS</h1>
      <p className="text-gray-500 text-sm">Last updated: June 7, 2026</p>

      <p>
        BiasharaMkononi POS (&quot;the app&quot;, &quot;we&quot;, &quot;our&quot;) is a point-of-sale app for
        small business owners. It helps you manage products, record sales, print receipts, and track
        inventory directly on your phone or tablet.
      </p>
      <p>
        This policy explains, in plain language, what information the app handles and how it is used. We
        wrote it to be honest about exactly what the app does today — nothing more.
      </p>

      <h2>1. What data the app collects</h2>
      <p>
        The app only collects the information <strong>you</strong> type into it while using it as a business
        tool. This includes things like:
      </p>
      <ul>
        <li>Your shop name and basic shop details</li>
        <li>Product names, prices, quantities, and categories</li>
        <li>Sales records (items sold, amounts, dates, payment details you enter)</li>
        <li>Cashier or staff names you add to the app</li>
      </ul>
      <p>
        We do not collect any data automatically beyond what you enter to run your business in the app.
      </p>

      <h2>2. Where your data is stored</h2>
      <p>
        All of the data listed above is stored <strong>locally on your own device</strong>, in the app&apos;s
        local database (Room/SQLite and local app storage).
      </p>
      <p>
        <strong>There is currently no server or cloud account behind the app.</strong> Nothing you enter is
        uploaded, synced, or backed up to us or to any third party. Your data stays on your device unless
        you choose to back it up yourself (for example, through your phone&apos;s own backup features).
      </p>

      <h2>3. Who can access your data</h2>
      <p>
        Only you — the person using the app on your device — can access the data stored in the app. We do
        not have accounts, servers, or any way to view, copy, or retrieve your business data. We simply
        don&apos;t have it.
      </p>

      <h2>4. App permissions and why we ask for them</h2>
      <p>
        The app requests a small number of device permissions, each used only for a specific feature:
      </p>
      <table>
        <thead>
          <tr>
            <th>Permission</th>
            <th>Why the app uses it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Camera</strong>
            </td>
            <td>
              To scan product barcodes when adding or finding products. The camera is only active when you
              open the barcode scanner.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Bluetooth</strong>
            </td>
            <td>
              To connect to and print receipts on Bluetooth receipt printers. Used only when you choose to
              print a receipt.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Internet / Network state</strong>
            </td>
            <td>
              Reserved for future features (such as optional cloud backup or sync). At this time, the app
              does <strong>not</strong> use the internet to send, upload, or share any of your data.
            </td>
          </tr>
        </tbody>
      </table>
      <p>We do not use any of these permissions to collect, transmit, or share your information.</p>

      <h2>5. Data sharing</h2>
      <p>
        We do not sell, rent, share, or transfer your data to anyone — there is no third party for your
        data to go to, because the app does not send data anywhere. There are no advertising networks, data
        brokers, or partner integrations connected to the app.
      </p>

      <h2>6. Advertising, analytics, and tracking</h2>
      <p>
        The app contains <strong>no advertising SDKs, no analytics tools, and no tracking technologies</strong>.
        We do not build profiles of you or your business, and we do not monitor how you use the app.
      </p>

      <h2>7. Deleting your data</h2>
      <p>Because all data lives only on your device, you are always in full control of it. You can:</p>
      <ul>
        <li>Delete individual products, sales, or records inside the app, or</li>
        <li>Uninstall the app, which permanently removes all of its locally stored data from your device.</li>
      </ul>
      <p>We have no copy of your data to delete on our end, since none is ever sent to us.</p>

      <h2>8. Your rights and ownership</h2>
      <p>
        You own and control all the business data you enter into the app — your products, sales, and
        records belong to you. The app is simply a tool to help you manage that information on your own
        device.
      </p>

      <h2>9. Children&apos;s privacy</h2>
      <p>
        BiasharaMkononi POS is a business tool intended for adult small business owners and their staff. It
        is not designed for, marketed to, or directed at children, and we do not knowingly collect data from
        children.
      </p>

      <h2>10. Languages</h2>
      <p>
        The app is available in English and Swahili. This privacy policy may be provided in either
        language; in case of any difference, the English version applies.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        If the app&apos;s features change in the future (for example, if we introduce optional cloud backup
        or sync), this policy will be updated to clearly describe what changes and what new data, if any,
        would be involved — and we will make any new data use clear before it happens. We will update the
        &quot;Last updated&quot; date above whenever this policy changes.
      </p>

      <h2>12. Contact us</h2>
      <p>If you have questions about this privacy policy or how the app works, you can reach us at:</p>
      <ul>
        <li>
          <strong>Name/Company:</strong> Biashara Mkononi
        </li>
        <li>
          <strong>Email:</strong> <a href="mailto:privacy@biasharamkononi.com">privacy@biasharamkononi.com</a>
        </li>
      </ul>
      <p>
        See also our <Link href="/terms-of-service">Terms of Service</Link>.
      </p>
    </LegalLayout>
  );
}
