import Link from "next/link";

const Terms = () => {
    return (
        <div className="flex w-screen flex-col items-center">
            <div className="flex w-full flex-col gap-5 p-8 text-gray-400 lg:w-[56rem] lg:p-16">
                <h1 className="mb-8 text-3xl text-white">
                    TERMS AND CONDITIONS
                </h1>
                <p>Last Updated: August 28, 2025</p>
                <p>
                    These Terms and Conditions (&quot;Agreement&quot; or &quot;Terms&quot;) are a legally binding agreement between the operator of this website (&quot;we&quot;, &quot;our&quot;) and any person (&quot;User&quot;, &quot;you&quot;, &quot;your&quot;) who accesses or uses our website <strong>europick.eu</strong> (the &quot;Site&quot;). This Agreement, along with our{" "}
                    <Link
                        href="/privacy"
                        className="underline underline-offset-2"
                    >
                        Privacy Policy
                    </Link>{" "}
                    and any other referenced policies, governs your use of our services.
                </p>
                <p>
                    By accessing or using the Site, you agree to be bound by these Terms. If you do not agree with any part of this Agreement, please do not use the Site.
                </p>

                <h2 className="text-xl text-white">
                    1. Description of Services
                </h2>
                <p>
                    <strong>europick.eu</strong> allows users to create and share cards showing mainstream apps and privacy-respecting European alternatives. The Site is for informational and educational purposes only.
                </p>

                <h2 className="text-xl text-white">
                    2. Use of Logos and Intellectual Property
                </h2>
                <p>
                    All app logos and trademarks are property of their respective owners. We do not claim any ownership of these logos. Use of logos is solely for informational and comparative purposes, and we respect the intellectual property rights of all third parties.
                </p>

                <h2 className="text-xl text-white">3. Privacy Policy</h2>
                <p>
                    Our{" "}
                    <Link
                        href="/privacy"
                        className="underline underline-offset-2"
                    >
                        Privacy Policy
                    </Link>{" "}
                    explains how we handle your information. By using the Site, you agree to the practices described there.
                </p>

                <h2 className="text-xl text-white">4. Eligibility</h2>
                <p>To use the Site, Users must:</p>
                <ul className="list-disc pl-8">
                    <li>Be 13 years of age or older.</li>
                    <li>Not be prohibited from using the Site under applicable laws.</li>
                    <li>Not use the Site for illegal, competitive, or malicious purposes.</li>
                </ul>

                <h2 className="text-xl text-white">5. User Responsibilities</h2>
                <p>
                    <strong>(a) No Malicious Use:</strong> You agree not to use the Site to distribute malware, spam, or otherwise disrupt the Site or its services.
                </p>
                <p>
                    <strong>(b) Public Visibility:</strong> Packs submitted by users may be publicly viewable. No personally identifiable information is disclosed unless voluntarily included in content by the user.
                </p>

                <h2 className="text-xl text-white">6. Limitations of Liability</h2>
                <p>
                    To the fullest extent permitted by law, we are not liable for any damages, losses, or claims arising from your use of the Site or use of logos and app comparisons.
                </p>

                <h2 className="text-xl text-white">7. Indemnification</h2>
                <p>
                    You agree to indemnify and hold us harmless from any claims, damages, or legal costs arising from your content submissions or violation of these Terms.
                </p>

                <h2 className="text-xl text-white">8. Modifications to Terms</h2>
                <p>
                    We may update these Terms at any time. Changes are effective upon posting. Continued use of the Site after updates constitutes acceptance of the revised Terms.
                </p>

                <h2 className="text-xl text-white">9. Governing Law</h2>
                <p>
                    These Terms are governed by the laws of the European Union, unless otherwise required by local law. Any disputes shall be resolved under applicable European jurisdiction.
                </p>

                <h2 className="text-xl text-white">10. Miscellaneous</h2>
                <p>
                    These Terms, together with the Privacy Policy, represent the entire agreement between you and us regarding the Site. Failure to enforce any provision does not waive our rights under these Terms.
                </p>

                <h2 className="text-xl text-white">11. Contact Us</h2>
                <p>
                    You can reach us by email at:{" "}
                    <a
                        href="mailto:support@pixelunion.eu"
                        className="underline underline-offset-2"
                    >
                        support@pixelunion.eu
                    </a>
                </p>
                <p>

                </p>

                <Link href="/" className="mt-8 underline underline-offset-2">
                    Go back to homepage
                </Link>
            </div>
        </div>
    );
};

export default Terms;
