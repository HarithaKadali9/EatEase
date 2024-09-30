import React from 'react';

const PrivacyStatement = () => {
  return (
    <div className="bg-gray-100 privacystatement py-10 px-6 md:px-12 lg:px-24 text-gray-800" id='privacystatement'>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">Privacy Statement</h2>
        <p className="text-lg mb-4">
          At <span className="font-bold">EatEase</span>, we value your privacy and are committed to protecting your personal information. This Privacy Statement outlines how we collect, use, and protect the information you provide to us when you use our services. By using our website and services, you consent to the data practices described in this policy.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-orange-500">Information We Collect</h3>
        <p className="text-base mb-4">
          We collect personal information such as your name, email address, contact information, and payment details when you register on our site, place an order, subscribe to our newsletter, or interact with us through other services. We may also collect non-personal information about your browsing behavior, preferences, and usage of our website.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-orange-500">How We Use Your Information</h3>
        <p className="text-base mb-4">
          The information we collect is used to improve our services, process your orders, respond to your inquiries, and provide you with a personalized experience. We may use your contact details to send promotional offers, newsletters, or other updates, but you can opt-out of these communications at any time.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-orange-500">How We Protect Your Information</h3>
        <p className="text-base mb-4">
          We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or alteration. We ensure that sensitive data such as payment details are encrypted and transmitted securely. However, no system can be 100% secure, and we cannot guarantee the absolute security of your information.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-orange-500">Third-Party Sharing</h3>
        <p className="text-base mb-4">
          We do not sell or share your personal information with third parties for their marketing purposes. However, we may share your data with trusted partners to help us operate our website, process payments, or deliver orders, provided they agree to keep your information confidential.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-orange-500">Your Choices and Rights</h3>
        <p className="text-base mb-4">
          You have the right to access, update, or delete your personal information at any time. You can also choose to opt-out of receiving marketing communications from us. To exercise these rights, please contact our support team.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-orange-500">Changes to This Privacy Statement</h3>
        <p className="text-base mb-4">
          We may update this Privacy Statement from time to time. Any changes will be posted on this page, and we encourage you to review it regularly. Your continued use of our services after any updates constitutes your acceptance of the revised Privacy Statement.
        </p>

        <p className="text-base text-center mt-8">
          If you have any questions about our privacy practices, please contact us at <a href="mailto:privacy@eatease.com" className="text-orange-600 hover:underline">privacy@eatease.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyStatement;
