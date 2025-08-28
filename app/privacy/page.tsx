import Link from "next/link";

const Privacy = () => {
    return (
        <div className="flex w-screen flex-col items-center">
            <div className="flex w-full flex-col gap-5 p-8 text-gray-400 lg:w-[56rem] lg:p-16">
                <h1 className="mb-8 text-3xl text-white">
                    PRIVACY POLICY
                </h1>
                <p>Last Updated: August 28, 2025</p>
                <p>
                    We respect the privacy of our Users (&quot;User&quot;, &quot;your&quot;, &quot;you&quot;). This Privacy Policy (&quot;Policy&quot;) explains how we handle your information when you use our website, <strong>europick.eu</strong> (the &quot;Site&quot;). Please read this Policy carefully to understand our practices regarding your information and how we treat it.
                </p>
                <p>
                    By accessing or using the Site, you agree to the terms of this Policy. If you do not agree with the terms of this Policy, please do not access or use the Site.
                </p>

                <h2 className="text-xl text-white">1. Introduction</h2>
                <p>
                    <strong>europick.eu</strong> allows users to create and share cards showing mainstream apps and European alternatives.
                </p>

                <h2 className="text-xl text-white">2. Data Collection and Usage</h2>
                <p>
                    Users can create and share cards displaying &quot;before&quot; and &quot;after&quot; app logos and names. These cards are only publicly viewable if shared by the user. We do not require users to provide personal information, except if you choose to contact us for support or feedback.
                </p>

                <h2 className="text-xl text-white">3. Data Sharing</h2>
                <p>
                    User-shared cards may be publicly viewable, depending on how users choose to share them. We do not sell, rent, or transfer your information to third parties. We use only European-based providers where possible and do not use third-party tracking or analytics from non-European companies.
                </p>

                <h2 className="text-xl text-white">4. User Rights</h2>
                <p>
                    You have the right to stop using the Site at any time. If you wish to remove any publicly shared card, you can do so through the Site interface. For further requests regarding your data, you may contact us at the email address below.
                </p>

                <h2 className="text-xl text-white">5. Data Retention</h2>
                <p>
                    User-shared cards remain publicly available until removed by the user. We do not retain any additional personal data beyond what is shown on publicly shared cards.
                </p>

                <h2 className="text-xl text-white">6. Children&apos;s Privacy</h2>
                <p>
                    The Site is not intended for children under the age of 13, and we do not knowingly collect personal data from children under 13. If you are under 13, please do not use the Site.
                </p>

                <h2 className="text-xl text-white">7. Cookies</h2>
                <p>
                    We do <strong>not</strong> place cookies on your device for tracking purposes. We only use essential cookies or local storage necessary for basic site functionality, and we avoid all forms of third-party tracking.
                </p>

                <h2 className="text-xl text-white">8. Changes to this Privacy Policy</h2>
                <p>
                    We may update this Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. Updates will be posted on this page.
                </p>

                <h2 className="text-xl text-white">9. Contact Us</h2>
                <p>
                    For privacy-related questions or requests, you can reach us by email at:{" "}
                    <a
                        href="mailto:support@pixelunion.eu"
                        className="underline underline-offset-2"
                    >
                        privacy@europick.eu
                    </a>
                </p>
                <p>
                    Mailing address: support@pixelunion.eu.
                </p>

                <Link href="/" className="mt-8 underline underline-offset-2">
                    Go back to homepage
                </Link>
            </div>
        </div>
    );
};

export default Privacy;
