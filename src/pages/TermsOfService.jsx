const TermsOfService = () => {
  return (
    <div className="policy-page">
      <h1>Terms of Service</h1>
      <p className="policy-date">Last updated: February 2024</p>

      <p>
        By downloading or using Multi SMS Sender ("the App"), you agree to be bound
        by these Terms of Service. If you do not agree, please do not use the App.
      </p>

      <h2>Use of the App</h2>
      <p>Multi SMS Sender is designed for legitimate bulk SMS communication. You agree to:</p>
      <ul>
        <li>Use the App only for lawful purposes</li>
        <li>Not send spam, unsolicited, or harassing messages</li>
        <li>Comply with all applicable local, national, and international laws regarding SMS communication</li>
        <li>Obtain proper consent from message recipients where required by law</li>
      </ul>

      <h2>User Responsibility</h2>
      <p>
        You are solely responsible for the content of messages sent through the App.
        Multi SMS Sender is a tool that facilitates sending—it does not control,
        review, or take responsibility for message content.
      </p>

      <h2>SMS Charges</h2>
      <p>
        Messages are sent using your device's SIM card. Standard SMS rates from your
        mobile carrier apply. We are not responsible for any charges incurred from
        your telecom provider.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content, design, and code within the App are the intellectual property
        of Multi SMS Sender and are protected by applicable copyright and trademark laws.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        Multi SMS Sender is provided "as is" without warranties of any kind. We are not
        liable for any damages arising from the use or inability to use the App,
        including but not limited to message delivery failures, data loss, or carrier issues.
      </p>

      <h2>Termination</h2>
      <p>
        We reserve the right to terminate or restrict access to the App for any user
        who violates these terms or uses the App for illegal or harmful purposes.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We may update these Terms of Service at any time. Continued use of the App
        after changes constitutes acceptance of the new terms.
      </p>

      <h2>Governing Law</h2>
      <p>
        These terms shall be governed by and construed in accordance with applicable laws,
        without regard to conflict of law principles.
      </p>

      <h2>Contact Us</h2>
      <p>
        For questions about these Terms of Service, contact us at:{' '}
        <a href="mailto:mss.comments@gmail.com" style={{ color: '#2b5ea7' }}>
          mss.comments@gmail.com
        </a>
      </p>
    </div>
  );
};

export default TermsOfService;
