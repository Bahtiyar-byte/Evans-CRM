import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import LayoutGuest from '../layouts/Guest';
import { getPageTitle } from '../config';

export default function PrivacyPolicy() {
  const title = 'Evans CRM';
  const [projectUrl, setProjectUrl] = useState('');

  useEffect(() => {
    setProjectUrl(location.origin);
  }, []);

  const Information = () => {
    return (
      <>
        <h3>1. Acceptance of Terms</h3>
        <div className=''>
          <p>
            By accessing and using our application, you agree to comply with and
            be bound by these Terms of Use. If you do not agree to these terms,
            please do not use the application.
          </p>
        </div>
      </>
    );
  };

  const ChangesTerms = () => {
    return (
      <>
        <h3>2. Changes to Terms</h3>
        <p>
          We reserve the right to modify these Terms of Use at any time. Any
          changes will be effective immediately upon posting. Your continued use
          of the application after any such changes constitutes your acceptance
          of the new terms.
        </p>
      </>
    );
  };

  const UseApplication = () => {
    return (
      <>
        <h3>3. Use of the Application</h3>
        <p>
          You agree to use the application only for lawful purposes and in a way
          that does not infringe the rights of, restrict, or inhibit anyone
          else’s use and enjoyment of the application. Prohibited behavior
          includes harassing or causing distress or inconvenience to any other
          user, transmitting obscene or offensive content, or disrupting the
          normal flow of dialogue within the application.
        </p>
      </>
    );
  };

  const IntellectualProperty = () => {
    return (
      <>
        <h3>4. Intellectual Property</h3>
        <p>
          All content included on the application, such as text, graphics,
          logos, images, and software, is the property of {title} or its content
          suppliers and protected by international copyright laws. Unauthorized
          use of the content may violate copyright, trademark, and other laws.
        </p>
      </>
    );
  };

  const UserContent = () => {
    return (
      <>
        <h3>5. User Content</h3>
        <p>
          You are responsible for any content you upload, post, or otherwise
          make available through the application. You grant {title}a worldwide,
          irrevocable, non-exclusive, royalty-free license to use, reproduce,
          modify, publish, and distribute such content for any purpose.
        </p>
      </>
    );
  };

  const Privacy = () => {
    return (
      <>
        <h3>6. Privacy</h3>
        <p>
          Your privacy is important to us. Please review our Privacy Policy to
          understand our practices regarding the collection, use, and disclosure
          of your personal information.
        </p>
      </>
    );
  };

  const Liability = () => {
    return (
      <>
        <h3>7. Limitation of Liability</h3>
        <p>
          The application is provided “as is” and “as available” without any
          warranties of any kind, either express or implied. {title}
          does not warrant that the application will be uninterrupted or
          error-free. In no event shall {title} be liable for any damages
          arising out of your use of the application.
        </p>
      </>
    );
  };

  const Indemnification = () => {
    return (
      <>
        <h3>8. Indemnification</h3>
        <p>
          You agree to indemnify, defend, and hold harmless {title}, its
          officers, directors, employees, and agents from and against any
          claims, liabilities, damages, losses, and expenses, including without
          limitation reasonable legal and accounting fees, arising out of or in
          any way connected with your access to or use of the application or
          your violation of these Terms of Use.
        </p>
      </>
    );
  };

  const Termination = () => {
    return (
      <>
        <h3>9. Termination</h3>
        <p>
          We reserve the right to terminate or suspend your access to the
          application at our sole discretion, without notice and without
          liability, for any reason, including if we believe you have violated
          these Terms of Use.
        </p>
      </>
    );
  };

  const GoverningLaw = () => {
    return (
      <>
        <h3>10. Governing Law</h3>
        <p>
          These Terms of Use are governed by and interpreted in accordance with
          applicable laws, without regard to any conflict of law principles. You
          agree to submit to the exclusive jurisdiction of the courts that have
          authority to resolve any dispute arising from the use of the
          application.
        </p>
      </>
    );
  };

  const ContactUs = () => {
    return (
      <>
        <h3>11. Contact Information</h3>
        <p>
          If you have any questions about these Terms of Use, please contact us
          at:{' '}
          <a href='mailto:support@flatlogic.com'> [support@flatlogic.com]</a>
        </p>
      </>
    );
  };

  return (
    <div className='prose prose-slate mx-auto max-w-none'>
      <Head>
        <title>{getPageTitle('Terms of Use')}</title>
      </Head>

      <div className='flex justify-center'>
        <div className='z-10 md:w-10/12 my-4 bg-white border border-pavitra-400 rounded'>
          <div className='p-8 lg:px-12 lg:py-10'>
            <h1>Terms of Use</h1>

            <Information />
            <ChangesTerms />
            <UseApplication />
            <IntellectualProperty />
            <UserContent />
            <Privacy />
            <Liability />
            <Indemnification />
            <Termination />
            <GoverningLaw />
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
}

PrivacyPolicy.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
