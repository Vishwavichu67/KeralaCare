import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-p:text-foreground/80 prose-headings:text-primary prose-strong:text-foreground">
          <h1>Privacy and Data Protection</h1>
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to KeralaCare. We are committed to protecting your privacy and ensuring that your personal data is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information in compliance with the Digital Personal Data Protection (DPDP) Act, 2023 of India.
          </p>

          <h2>2. Data We Collect</h2>
          <p>We may collect the following types of personal data:</p>
          <ul>
            <li><strong>Personal Identification Information:</strong> Name, age, gender, contact number, email address.</li>
            <li><strong>Health Information:</strong> Medical history, vaccination records, allergies, blood group, diagnostic reports, and other health-related data you provide.</li>
            <li><strong>Usage Data:</strong> Information on how you use our platform, such as appointment bookings and feature usage.</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>Your data is used for the following purposes:</p>
          <ul>
            <li>To create and manage your digital health record.</li>
            <li>To facilitate appointment bookings with healthcare providers.</li>
            <li>To provide you with access to your health information in emergencies.</li>
            <li>To improve our services and platform functionality.</li>
            <li>To generate anonymized, aggregated data for public health analysis and reporting by government bodies.</li>
          </ul>

          <h2>4. Data Storage and Security</h2>
          <p>
            Your data is securely stored using Firebase services (Firestore and Firebase Storage). We implement industry-standard security measures, including encryption and access controls, to protect your data from unauthorized access, alteration, or disclosure.
          </p>

          <h2>5. Your Rights as a Data Principal</h2>
          <p>Under the DPDP Act, 2023, you have the right to:</p>
          <ul>
            <li>Access a summary of your personal data being processed.</li>
            <li>Correct, complete, and update your personal data.</li>
            <li>Withdraw your consent for data processing at any time.</li>
            <li>Grievance redressal for any issues related to your data.</li>
            <li>Nominate another individual to exercise your rights in case of your death or incapacity.</li>
          </ul>

          <h2>6. Data Sharing and Disclosure</h2>
          <p>
            We will not share your identifiable personal health information with third parties without your explicit consent, except as required by law. Anonymized and aggregated data may be shared with government health departments for policy-making and statistical analysis.
          </p>
          
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or your data, please contact us through our <a href="/contact">Contact Page</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
