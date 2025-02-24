import Layout from '@/components/layout/Layout';
import moment from 'moment';
import React from 'react';

export const metadata = {
    title: "GENZ IT Blogs | Privacy Policy",
}

const page = () => {
    return (
        <Layout>
            <div className="container my-5">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title text-center mb-4">Privacy Policy</h1>
                        <p className="card-text">
                            <strong>Last Updated:</strong> {moment(new Date('2025-01-01')).format('MMMM D, YYYY')}
                        </p>
                        <p className="card-text">
                            Welcome to <strong>GENZ IT</strong> We are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy explains how we collect, use, and protect your information when you visit our technology blog website <a href="https://genzit.xyz/" className="text-decoration-none">https://genzit.xyz/</a>.
                        </p>
                        <h2 className="card-title mt-4">1. Information We Collect</h2>
                        <p className="card-text">
                            We may collect the following types of information:
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Personal Information:</strong> Name, email address, and other details when you subscribe to our blog, leave comments, or contact us.</li>
                            <li className="list-group-item"><strong>Usage Data:</strong> Information about how you interact with our website, such as your IP address, browser type, pages visited, and time spent on the site.</li>
                            <li className="list-group-item"><strong>Cookies:</strong> We use cookies to enhance your experience. You can manage cookies through your browser settings.</li>
                        </ul>
                        <h2 className="card-title mt-4">2. How We Use Your Information</h2>
                        <p className="card-text">
                            We use the information we collect for the following purposes:
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">To provide and improve our technology blog content.</li>
                            <li className="list-group-item">To communicate with you, respond to comments, and send newsletters (if you subscribe).</li>
                            <li className="list-group-item">To analyze website traffic and user behavior to enhance user experience.</li>
                        </ul>
                        <h2 className="card-title mt-4">3. Sharing Your Information</h2>
                        <p className="card-text">
                            We do not sell, trade, or rent your personal information to third parties. However, we may share anonymized data with analytics providers to improve our website.
                        </p>
                        <h2 className="card-title mt-4">4. Data Security</h2>
                        <p className="card-text">
                            We implement security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                        </p>
                        <h2 className="card-title mt-4">5. Your Rights</h2>
                        <p className="card-text">
                            You have the right to:
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Access, update, or delete your personal information.</li>
                            <li className="list-group-item">Opt-out of receiving newsletters or marketing emails.</li>
                            <li className="list-group-item">Request that we stop using your data for analytics.</li>
                        </ul>
                        <h2 className="card-title mt-4">6. Contact Us</h2>
                        <p className="card-text">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Name:</strong> Tamiz Uddin</li>
                            <li className="list-group-item"><strong>Email:</strong> <a href="mailto:tamizrabbi@gmail.com" className="text-decoration-none">tamizrabbi@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default page;