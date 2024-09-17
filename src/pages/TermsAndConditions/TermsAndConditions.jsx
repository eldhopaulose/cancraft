import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>

                <p>Effective Date: 03-07-2024</p>

                <p>Welcome to Cancraft Studio! These terms and conditions outline the rules and regulations for the use of Cancraft Studio's website, located at <a href="https://cancraftstudio.com/">https://cancraftstudio.com/</a>. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Cancraft Studio if you do not agree to take all of the terms and conditions stated on this page.</p>

                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">1. Definitions</h2>
                <ul className="list-disc pl-6">
                    <li><strong>Website:</strong> refers to https://cancraftstudio.com/.</li>
                    <li><strong>We, Us, Our:</strong> refers to Cancraft Studio.</li>
                    <li><strong>You, Your:</strong> refers to the user of our website.</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">2. Use of the Website</h2>
                <p>By accessing our website, you agree to use it only for lawful purposes and in a manner that does not infringe the rights of or restrict the use and enjoyment of this site by any third party.</p>

                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">3. Accounts and Registration</h2>
                <p>To access certain features of our website, you may be required to register for an account. You agree to provide accurate and complete information when registering and to keep this information up-to-date.</p>

                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">4. Orders and Payment</h2>
                <p><strong>Order Process:</strong> You can place an order for custom canvas prints by uploading your photos, customizing your canvas, and completing the checkout process.</p>
                <p><strong>Payment:</strong> All prices are listed in AED. Payments must be made at the time of order placement via the available payment methods on our website.</p>
                <p><strong>Order Confirmation:</strong> You will receive an order confirmation email once your order is successfully placed.</p>

                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">5. Delivery</h2>
                <p>We strive to ensure timely delivery of your canvas prints. Delivery times may vary depending on your location and other factors. Any delivery dates provided are estimates and not guaranteed.</p>

                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">6. Returns and Refunds</h2>
                <p>Due to the custom nature of our products, we do not accept returns or offer refunds unless the product arrives damaged or defective. If you receive a damaged or defective product, please contact us within 7 days of receiving your order.</p>

                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">7. Intellectual Property Rights</h2>
                <p>Unless otherwise stated, Cancraft Studio and/or its licensors own the intellectual property rights for all material on the website. All intellectual property rights are reserved. You may access this from the website for your own personal use subject to restrictions set in these terms and conditions.</p>

                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">8. User-Provided Content</h2>
                <p>By uploading photos and other content to our website, you grant Cancraft Studio a non-exclusive, royalty-free, worldwide license to use, reproduce, modify, and display such content solely for the purpose of fulfilling your order.</p>

                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">9. Privacy</h2>
                <p>Our Privacy Policy, which explains how we collect and use your personal data, is part of these terms and conditions. By using our website, you consent to the collection and use of information as outlined in our Privacy Policy.</p>

                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">10. Links to Other Websites</h2>
                <p>Our website may contain links to third-party websites that are not controlled or operated by us. We are not responsible for the content, privacy policies, or practices of these third-party websites.</p>

                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">11. Limitation of Liability</h2>
                <p>Cancraft Studio shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or the inability to use our website or services.</p>

                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">12. Changes to Terms and Conditions</h2>
                <p>We reserve the right to revise these terms and conditions at any time. By continuing to use the website after any changes, you agree to be bound by the revised terms.</p>

                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">13. Governing Law</h2>
                <p>These terms and conditions are governed by and construed in accordance with the laws of the UAE. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of the UAE.</p>

                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">14. Contact Us</h2>
                <p>If you have any questions about these terms and conditions, please contact us at <a href="mailto:support@cancraftstudio.com" className='text-blue-500'>support@cancraftstudio.com</a>.</p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
