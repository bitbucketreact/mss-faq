const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <h1>Privacy Policy</h1>
      <p className="policy-date">Last updated: February 2024</p>

      <p>
        Multi SMS Sender ("we", "our", or "us") is committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, and safeguard your information
        when you use our mobile application.
      </p>

      <h2>Information We Collect</h2>
      <p>Our app may collect the following information:</p>
      <ul>
        <li>Contact list access (to select message recipients)</li>
        <li>SMS permissions (to send messages on your behalf)</li>
        <li>Device information for analytics and crash reporting</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the collected information solely for:</p>
      <ul>
        <li>Enabling bulk SMS sending functionality</li>
        <li>Tracking message delivery status</li>
        <li>Improving app performance and user experience</li>
      </ul>

      <h2>Data Storage & Security</h2>
      <p>
        All messages are sent directly from your device using your mobile SIM.
        We do not store, transmit, or have access to your message content or contact data on our servers.
        Your data stays on your device.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Our app may use third-party services such as Google Analytics for Firebase
        for anonymous usage analytics. These services have their own privacy policies.
      </p>

      <h2>User Control</h2>
      <p>
        You have full control over your data. You can revoke permissions at any time
        through your device settings. Uninstalling the app removes all locally stored data.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        Our app is not intended for use by children under 13. We do not knowingly
        collect personal information from children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify users
        of any significant changes through the app or our website.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us at:{' '}
        <a href="mailto:mss.comments@gmail.com" style={{ color: '#2b5ea7' }}>
          mss.comments@gmail.com
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
