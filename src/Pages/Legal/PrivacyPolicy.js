import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PrivacyPolicy = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [location])
  return (
    <div className="mx-auto pt-32 px-28 pb-20">
      <h1 className="text-6xl font-bold mb-6">Arktic Studios Privacy Policy</h1>

      <p className="text-gray-700 mb-4">
        At Arktic Studios, we are committed to protecting your privacy and personal information.
        This Privacy Policy outlines how we collect, use, share, and protect your data in
        providing our services related to photography, videography, social media management, SEO,
        and web design.
      </p>

      <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We may collect the following types of personal information when you engage with our services:
        name, email address, phone number, billing information, and other details necessary for
        providing our services. Additionally, we may collect non-personal information, such as
        browsing behavior and preferences, using cookies or similar technologies.
      </p>

      <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
      <p className="text-gray-700 mb-4">
        We use the collected personal information for the following purposes:
        <ul className="list-disc pl-8">
          <li>Providing and improving our services</li>
          <li>Communicating with you about your projects</li>
          <li>Processing payments for our services</li>
          <li>Enhancing your overall experience with Arktic Studios</li>
        </ul>
      </p>

      <h2 className="text-2xl font-bold mb-4">Sharing Your Information</h2>
      <p className="text-gray-700 mb-4">
        We do not sell or rent your personal information to third parties. We may share your information
        with trusted third-party service providers who assist us in delivering our services. These service
        providers are contractually obligated to comply with applicable privacy laws and maintain the
        confidentiality and security of your information.
      </p>

      <h2 className="text-2xl font-bold mb-4">Your Consent</h2>
      <p className="text-gray-700 mb-4">
        By using our services or providing your information to us, you consent to the collection,
        use, and disclosure of your information in accordance with this Privacy Policy.
      </p>

      <h2 className="text-2xl font-bold mb-4">Access and Correction</h2>
      <p className="text-gray-700 mb-4">
        You have the right to access and correct your personal information held by Arktic Studios.
        To request access or corrections, please contact us using the information below.
      </p>

      <h2 className="text-2xl font-bold mb-4">Security Measures</h2>
      <p className="text-gray-700 mb-4">
        We take reasonable measures to protect your personal information against unauthorized access,
        disclosure, or alteration. These measures include encryption, secure data storage, and access controls.
        However, no method of transmission over the internet or electronic storage is completely secure.
      </p>

      <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
      <p className="text-gray-700 mb-4">
        We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws.
        Any changes will be reflected on this page. Please review this policy periodically for updates.
      </p>

      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-700">
        For more information about our privacy practices, to exercise your rights, or to make a complaint,
        please contact us at:
        <br />
        Arktic Studios
        <br />
        Calgary, Alberta, Canada
        <br />
        Email: contact@arkticstudios.com
      </p>
    </div>
  );
};

export default PrivacyPolicy;
