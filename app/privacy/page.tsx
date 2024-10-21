import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-6 text-sm md:text-base">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">1. Introduction</h2>
          <p>
            Welcome to FileDrive. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service. By accessing or using FileDrive, you agree to the terms outlined in this policy. We encourage you to read this document carefully to understand our practices regarding your personal data.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">2. Information We Collect</h2>
          <p>
            We collect personal information that you provide to us such as name, email address, and usage data. We also automatically collect certain information when you use our service, including your IP address and device information. This may include:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Account information: When you create an account, we collect your name, email address, and password.</li>
            <li>Profile information: Any additional information you choose to add to your profile, such as a profile picture or job title.</li>
            <li>Usage data: Information on how you interact with our service, including file uploads, downloads, and sharing activities.</li>
            <li>Device and connection information: We collect data about your device, operating system, browser type, and IP address.</li>
            <li>Cookies and similar technologies: We use cookies and similar tracking technologies to collect information about your browsing activities.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
          <p>
            We use your information to provide, improve, and customize our services, communicate with you, and comply with legal obligations. We do not sell your personal information to third parties. Specifically, we use your information to:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Facilitate and improve your user experience on FileDrive.</li>
            <li>Analyze usage patterns and trends to enhance our service.</li>
            <li>Communicate with you about your account, updates, and promotional offers (with your consent).</li>
            <li>Respond to your inquiries and provide customer support.</li>
            <li>Detect, prevent, and address technical issues or fraudulent activities.</li>
            <li>Comply with legal requirements and enforce our terms of service.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, so we cannot guarantee absolute security. Our security measures include:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Encryption of data in transit and at rest using industry-standard protocols.</li>
            <li>Regular security audits and vulnerability assessments.</li>
            <li>Access controls and authentication mechanisms to prevent unauthorized access.</li>
            <li>Employee training on data protection and privacy best practices.</li>
            <li>Incident response plans to address potential data breaches promptly.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">5. Your Rights</h2>
          <p>
            You have certain rights regarding your personal information. These include:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>The right to access the personal information we hold about you.</li>
            <li>The right to request correction of any inaccurate data.</li>
            <li>The right to request deletion of your personal information in certain circumstances.</li>
            <li>The right to object to processing of your personal data in certain situations.</li>
            <li>The right to data portability, allowing you to obtain and reuse your data for your own purposes.</li>
            <li>The right to withdraw consent at any time, where we rely on consent to process your data.</li>
          </ul>
          <p className="mt-2">
            If you wish to exercise any of these rights or have any questions about this Privacy Policy or our practices, please contact us at privacy@filedrive.com or through our dedicated privacy portal.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">6. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">7. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please don&apos;t hesitate to contact us at:
          </p>
          <p className="mt-2">
            FileDrive Privacy Team<br />
            Lokoja, Kogi State, Nigeria<br />
            Email: clinton2167@gmail.com<br />
            Phone: (234) 70253-55327
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
