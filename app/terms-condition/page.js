import Layout from '@/components/layout/Layout';
import moment from 'moment';
import React from 'react';

export const metadata = {
    title: "GENZ IT Blogs | Terms and Conditions",
}

const page = () => {
    return (
        <Layout>
            <div className="container my-5">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title text-center mb-4">Terms and Conditions</h1>
                        <p className="card-text">
                            <strong>Last Updated:</strong> {moment(new Date('2025-01-01')).format('MMMM D, YYYY')}
                        </p>
                        <p className="card-text">
                            Welcome to <strong>GENZ IT</strong> By accessing or using our technology blog website <a href="https://genzit.xyz/" className="text-decoration-none">https://genzit.xyz/</a>, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
                        </p>
                        <h2 className="card-title mt-4">1. Acceptance of Terms</h2>
                        <p className="card-text">
                            By using our website, you agree to these Terms and Conditions. If you do not agree, please do not use our website.
                        </p>
                        <h2 className="card-title mt-4">2. User Responsibilities</h2>
                        <p className="card-text">
                            You agree to:
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Use the website only for lawful purposes and not engage in any harmful activities.</li>
                            <li className="list-group-item">Respect intellectual property rights and not reproduce or distribute content without permission.</li>
                            <li className="list-group-item">Provide accurate and truthful information when leaving comments or contacting us.</li>
                        </ul>
                        <h2 className="card-title mt-4">3. Intellectual Property</h2>
                        <p className="card-text">
                            All content on this website, including blog posts, images, and graphics, is the property of GENZ IT or its contributors and is protected by copyright laws. You may not reproduce, distribute, or modify any content without our prior written consent.
                        </p>
                        <h2 className="card-title mt-4">4. User-Generated Content</h2>
                        <p className="card-text">
                            By leaving comments or submitting content, you grant us a non-exclusive, royalty-free license to use, reproduce, and display your content on our website. You are solely responsible for the content you submit.
                        </p>
                        <h2 className="card-title mt-4">5. Limitation of Liability</h2>
                        <p className="card-text">
                            GENZ IT shall not be liable for any damages arising from your use of the website or reliance on its content. The information provided on this blog is for general informational purposes only and should not be considered professional advice.
                        </p>
                        <h2 className="card-title mt-4">6. Changes to Terms</h2>
                        <p className="card-text">
                            We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page with an updated "Last Updated" date.
                        </p>
                        <h2 className="card-title mt-4">7. Contact Us</h2>
                        <p className="card-text">
                            If you have any questions about these Terms and Conditions, please contact us at:
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