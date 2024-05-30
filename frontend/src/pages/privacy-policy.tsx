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

  const Introduction = () => {
    return (
      <>
        <h3>1. Introduction</h3>
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          We at <span>{title}</span> ("we", "us", "our") are committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website <a href={projectUrl}>{projectUrl}</a>, use our services, or
          interact with us in other ways. By using our services, you agree to
          the collection and use of information in accordance with this policy.
        </p>
      </>
    );
  };

  const Information = () => {
    return (
      <>
        <h3>2. Information We Collect</h3>
        <div className='ml-2'>
          <h4>2.1 Personal Identification Information</h4>
          <p>
            We collect various types of personal information in connection with
            the services we provide, including:
          </p>
          <ul role='list'>
            <li>
              Contact Information: Name, email address, phone number, mailing
              address.
            </li>
            <li>Account Information: Username, password, profile picture.</li>
            <li>Payment Information: Credit card details, billing address.</li>
            <li>Demographic Information: Age, gender, interests.</li>
          </ul>
          <h4>2.2 Technical Data</h4>
          <p>
            We automatically collect certain information when you visit, use, or
            navigate our services. This information may include:
          </p>
          <ul role='list'>
            <li>
              Device Information: IP address, browser type, operating system,
              device type.
            </li>
            <li>
              Usage Data: Pages visited, time spent on each page, links clicked,
              and other actions taken on our site.
            </li>
          </ul>
          <h4>2.3 Cookies and Tracking Technologies</h4>
          <p>
            We use cookies and similar tracking technologies to track the
            activity on our service and hold certain information. You can
            instruct your browser to refuse all cookies or to indicate when a
            cookie is being sent.
          </p>
        </div>
      </>
    );
  };

  const HowToUser = () => {
    return (
      <>
        <h3>3. How We Use Your Information</h3>
        <p>We use the information we collect in various ways, including to:</p>
        <ul role='list' className=''>
          <li>Provide, operate, and maintain our website and services.</li>
          <li>Improve, personalize, and expand our website and services.</li>
          <li>Understand and analyze how you use our website and services.</li>
          <li>Develop new products, services, features, and functionality.</li>
          <li>
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the website, and for
            marketing and promotional purposes.
          </li>
          <li>
            Process your transactions and send you related information,
            including purchase confirmations and invoices.
          </li>
          <li>Find and prevent fraud.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </>
    );
  };

  const DataProtection = () => {
    return (
      <>
        <h3>4. Data Protection and Security</h3>
        <p>
          We implement a variety of security measures to maintain the safety of
          your personal information. These measures include:
        </p>
        <ul role='list'>
          <li>
            Encryption: We use encryption to protect sensitive information
            transmitted online. Access Controls: We restrict access to your
            personal data to authorized personnel only. Regular Security Audits:
            We conduct regular audits to identify and address potential security
            vulnerabilities.
          </li>
        </ul>
      </>
    );
  };

  const Sharing = () => {
    return (
      <>
        <h3>5. Sharing Your Information</h3>
        <p>
          We do not sell, trade, or otherwise transfer your Personally
          Identifiable Information to outside parties without your consent,
          except in the following cases:
        </p>
        <ul role='list'>
          <li>
            Service Providers: We may share your information with third-party
            service providers who perform services on our behalf, such as
            payment processing, data analysis, email delivery, hosting services,
            customer service, and marketing assistance.
          </li>
          <li>
            Business Transfers: In the event of a merger, acquisition, or sale
            of all or a portion of our assets, your information may be
            transferred as part of that transaction.
          </li>
          <li>
            Legal Requirements: We may disclose your information if required to
            do so by law or in response to valid requests by public authorities
            (e.g., a court or a government agency).
          </li>
        </ul>
      </>
    );
  };

  const ProtectionRights = () => {
    return (
      <>
        <h3>6. Your Data Protection Rights</h3>
        <p>
          Depending on your location, you may have the following rights
          regarding your personal data:
        </p>
        <ul role='list'>
          <li>
            The Right to Access: You have the right to request copies of your
            personal data.
          </li>
          <li>
            The Right to Rectification: You have the right to request that we
            correct any information you believe is inaccurate or complete
            information you believe is incomplete.
          </li>
          <li>
            The Right to Erasure: You have the right to request that we erase
            your personal data, under certain conditions.
          </li>
          <li>
            The Right to Restrict Processing: You have the right to request that
            we restrict the processing of your personal data, under certain
            conditions.
          </li>
          <li>
            The Right to Object to Processing: You have the right to object to
            our processing of your personal data, under certain conditions.
          </li>
          <li>
            The Right to Data Portability: You have the right to request that we
            transfer the data that we have collected to another organization, or
            directly to you, under certain conditions.
          </li>
        </ul>
      </>
    );
  };

  const DataTransfers = () => {
    return (
      <>
        <h3>7. International Data Transfers</h3>
        <p>
          Your information, including personal data, may be transferred to — and
          maintained on — computers located outside of your state, province,
          country, or other governmental jurisdiction where the data protection
          laws may differ from those of your jurisdiction. We will take all
          steps reasonably necessary to ensure that your data is treated
          securely and in accordance with this Privacy Policy.
        </p>
      </>
    );
  };

  const RetentionOfData = () => {
    return (
      <>
        <h3>8. Retention of Data</h3>
        <p>
          We will retain your personal data only for as long as is necessary for
          the purposes set out in this Privacy Policy. We will retain and use
          your personal data to the extent necessary to comply with our legal
          obligations, resolve disputes, and enforce our policies.
        </p>
      </>
    );
  };

  const ChangePrivacy = () => {
    return (
      <>
        <h3>9. Changes to This Privacy Policy</h3>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page. You are
          advised to review this Privacy Policy periodically for any changes.
          Changes to this Privacy Policy are effective when they are posted on
          this page.
        </p>
      </>
    );
  };

  const ContactUs = () => {
    return (
      <>
        <h3>10. Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <div>
          By email:{' '}
          <a href='mailto:support@flatlogic.com'> [support@flatlogic.com]</a>
        </div>
        <div>
          By visiting this page on our website:{' '}
          <a href='https://flatlogic.com/contact'>Contact Us</a>
        </div>
      </>
    );
  };

  return (
    <div className='prose prose-slate mx-auto max-w-none'>
      <Head>
        <title>{getPageTitle('Privacy Policy')}</title>
      </Head>

      <div className='flex justify-center'>
        <div className='z-10 md:w-10/12 my-4 bg-white border border-pavitra-400 rounded'>
          <div className='p-8 lg:px-12 lg:py-10'>
            <h1>Privacy Policy</h1>
            <Introduction />
            <Information />
            <HowToUser />
            <DataProtection />
            <Sharing />
            <ProtectionRights />
            <DataTransfers />
            <RetentionOfData />
            <ChangePrivacy />
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
