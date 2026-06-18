# Privacy Policy — BiasharaMkononi POS

**Last updated: June 2026**
**Developer: FlavixLabs**
**Contact: [support@flavixlabs.com]**

---

## 1. Introduction

BiasharaMkononi POS ("the App") is a point-of-sale application for small businesses, developed by FlavixLabs. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.

By using the App, you agree to the practices described in this policy.

---

## 2. Information We Collect

### 2.1 Account Information
When you sign in with Google, we receive from your Google account:
- Full name
- Email address
- Google profile photo URL
- A unique Firebase user ID

This information is used solely to identify your account and is never sold or shared with advertisers.

### 2.2 Business Data You Enter
The App stores the following business information that you provide:
- **Shop profile:** shop name, logo, address, phone number, business email, tax registration number, currency settings, and receipt header/footer text
- **Product catalogue:** product names, prices, cost prices, stock quantities, barcodes, product photos, and descriptions
- **Sales transactions:** transaction totals, discounts, tax amounts, payment method (Cash, Card, or Mobile Money), per-item breakdown, and timestamps
- **Held orders:** optional order labels and item details

### 2.3 Device Preferences (Local Only)
The following is stored only on your device and never transmitted:
- Selected language preference
- Paired Bluetooth printer name and MAC address
- Printer type preference
- Active session information

---

## 3. How We Use Your Information

We use your information exclusively to provide the App's functionality:

- **Authentication:** to verify your identity and secure your account
- **Data sync:** to back up your business data to our servers so it is available across devices and survives reinstallation
- **Image storage:** to store your shop logo and product photos securely in cloud storage
- **Plan management:** to enforce your subscription plan limits (number of shops, products)

We do not use your data for advertising, profiling, or any purpose beyond operating the App.

---

## 4. Data Storage and Security

### 4.1 On-Device Storage
All your data is stored locally first in an encrypted SQLite database on your device. This database is private to the App and cannot be accessed by other apps on your device.

### 4.2 Our Backend
When your device is online, data is synced to our backend server hosted on Render.com, with a PostgreSQL database hosted on Supabase. All communication between the App and our server uses HTTPS with JWT authentication.

### 4.3 Image Storage
Shop logos and product photos are stored in a Cloudflare R2 cloud storage bucket. Images are scoped to your user account and shop. The App never communicates with Cloudflare directly — all uploads are brokered through our backend server.

### 4.4 Offline-First Design
The App is designed to work fully offline. Your data is always written to your device first. Sync to our servers happens in the background when a network connection is available. If you are offline, the App continues to function normally.

---

## 5. Third-Party Services

The App uses the following third-party services:

| Service | Purpose | Their Privacy Policy |
|---|---|---|
| Google Firebase Authentication | Sign-in with Google | [Google Privacy Policy](https://policies.google.com/privacy) |
| Cloudflare R2 (via our backend) | Image storage | [Cloudflare Privacy Policy](https://www.cloudflare.com/privacypolicy/) |
| Google ML Kit | On-device barcode scanning — no data leaves your device | [Google Privacy Policy](https://policies.google.com/privacy) |

**Important:** The App does not include any advertising SDKs, analytics services (such as Firebase Analytics), crash reporting services, or data brokers.

Barcode scanning is performed entirely on your device using Google ML Kit. No camera frames or barcode data are transmitted anywhere.

---

## 6. Camera and Bluetooth

### 6.1 Camera
The App requests camera permission for two purposes only:
1. **Product and shop photos:** to capture images you choose to attach to your products or shop profile
2. **Barcode scanning:** to scan product barcodes for quick lookup during sales or product entry

Camera access is only active when you are actively using these features. No photos are taken in the background.

### 6.2 Bluetooth
The App requests Bluetooth permission solely for printing receipts to a Bluetooth thermal printer that you have paired on your device. The App:
- Only connects to printers you have already paired in your device's system settings
- Only sends formatted receipt data to the printer (output only)
- Does not read data from the printer beyond connection acknowledgement
- Does not use Bluetooth for location purposes (`neverForLocation` is declared)
- Saves your printer preference (name and MAC address) locally on your device only

---

## 7. Data Retention

Your data is retained on our servers for as long as your account is active.

If you delete your account through the App, we will remove your personal data and business data from our servers. Local data on your device is removed when you uninstall the App.

---

## 8. Your Rights

You have the right to:
- **Access** the data we hold about you
- **Delete** your account and all associated data
- **Export** your business data (sales records, products)
- **Correct** inaccurate information

To exercise any of these rights, contact us at **[support@flavixlabs.com]**.

Account deletion can be initiated directly from within the App.

---

## 9. Children's Privacy

The App is intended for use by business owners and their staff. It is not directed at children under the age of 13. We do not knowingly collect personal information from children.

---

## 10. Changes to This Policy

We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. Continued use of the App after changes constitutes acceptance of the updated policy.

---

## 11. Contact

If you have questions about this Privacy Policy, contact:

**FlavixLabs**
Email: [support@flavixlabs.com]

