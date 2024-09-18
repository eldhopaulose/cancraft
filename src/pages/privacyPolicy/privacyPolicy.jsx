import React, { useEffect } from "react";
const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>

        <p>Effective Date: 03-07-2024</p>

        <p>
          At Cancraft Studio, accessible from{" "}
          <a href="https://cancraftstudio.com/" className="text-blue-500">
            https://cancraftstudio.com/
          </a>
          , we are committed to protecting the privacy and security of our
          users' personal information. This Privacy Policy outlines how we
          collect, use, and safeguard your information. By using our website,
          you agree to the terms of this policy.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
          1. Information Collection and Use
        </h2>
        <p>
          We may collect personal information such as your name, email address,
          and contact details, as well as automatically collected data like IP
          addresses and cookies, to maintain and improve our services.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
          2. User-Generated Content
        </h2>
        <p>
          When users upload photos or other content, we collect and store the
          data to provide our services. Content should comply with our terms and
          not violate third-party rights.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
          3. Cookies
        </h2>
        <p>
          We use cookies to improve user experience and deliver personalized
          content. Cookies help us understand user preferences and are assigned
          a unique User ID. Advertisers may also assign their own cookies, which
          are beyond our control.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
          4. IP Address Collection
        </h2>
        <p>
          We collect IP addresses automatically when you visit our site to
          tailor the experience and measure traffic. IP addresses do not
          identify you personally.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
          5. Information Sharing
        </h2>
        <p>
          We do not share sensitive personal information without consent, except
          in legal cases or with group companies for processing. We ensure that
          information shared complies with this policy and relevant laws.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
          6. Information Security
        </h2>
        <p>
          We use security measures like encryption and firewalls to protect your
          data, but no security system is impenetrable. We cannot guarantee the
          complete security of information transmitted to us over the Internet.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
          7. Privacy Policy Changes
        </h2>
        <p>
          We may update our Privacy Policy as necessary to reflect changes in
          the law or our services. We encourage users to review this policy
          periodically.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
          8. Grievance Redressal
        </h2>
        <p>
          If you have any complaints or concerns, please contact our designated
          Grievance Officer:
        </p>
        <ul className="list-disc pl-6">
          <li>Grievance Officer: Levin Wilson</li>
          <li>
            Email:{" "}
            <a
              href="mailto:support@cancraftstudio.com"
              className="text-blue-500"
            >
              support@cancraftstudio.com
            </a>
          </li>
          <li>Address: Dubai, UAE</li>
          <li>Phone: +971566575191</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
          9. Contact Us
        </h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a href="mailto:support@cancraftstudio.com" className="text-blue-500">
            support@cancraftstudio.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
