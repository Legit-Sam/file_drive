import React from "react";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
      <div className="space-y-6 text-sm md:text-base">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using FileDrive, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our service.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">2. Use of Service</h2>
          <p>
            You must be at least 18 years old to use FileDrive. You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">3. User Content</h2>
          <p>
            You retain all rights to the content you upload to FileDrive. However, by uploading content, you grant FileDrive a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content in connection with the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">4. Prohibited Activities</h2>
          <p>
            You agree not to engage in any of the following activities:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Violating any applicable laws or regulations</li>
            <li>Infringing on the intellectual property rights of others</li>
            <li>Uploading malicious software or content</li>
            <li>Attempting to gain unauthorized access to other users' accounts</li>
            <li>Using the service for any illegal or unauthorized purpose</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">5. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your account and access to the service at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">6. Disclaimer of Warranties</h2>
          <p>
            FileDrive is provided "as is" without any warranties, expressed or implied. We do not warrant that the service will be uninterrupted or error-free.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">7. Limitation of Liability</h2>
          <p>
            FileDrive shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. We will notify users of any significant changes. Your continued use of FileDrive after such modifications constitutes your acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">9. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="mt-2">
            FileDrive Legal Team<br />
            Lokoja, Kogi State, Nigeria<br />
            Email: clinton2167@gmail.com<br />
            Phone: (234) 70253-55327
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
