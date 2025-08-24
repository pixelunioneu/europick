import Link from "next/link";

const Privacy = () => {
    return (
        <div className="flex w-screen flex-col items-center">
            <div className="flex w-full flex-col gap-5 p-8 text-gray-400 lg:w-[56rem] lg:p-16">
                <h1 className="mb-8 text-3xl text-white">PRIVACY POLICY</h1>
                <p>Last Updated: August 23, 2025</p>
                <p>
                    We respect the privacy of our Users (&quot;User&quot;,
                    &quot;your&quot;, &quot;you&quot;). This Privacy Policy
                    (&quot;Policy&quot;) explains how we handle your information
                    when you use our website, <strong>europick.eu</strong>{" "}
                    (the &quot;Site&quot;). Please read this Policy carefully to
                    understand our practices regarding your information and how
                    we treat it.
                </p>
                <p>
                    By accessing or using the Site, you agree to the terms of
                    this Policy. If you do not agree with the terms of this
                    Policy, please do not access or use the Site.
                </p>

                <h2 className="text-xl text-white">1. Introduction</h2>
                <p>
                    <strong>europick.eu</strong> allows users to create and
                    share cards showing the mainstream apps they previously used
                    and the privacy-respecting alternatives they have switched
                    to.
                </p>

                <h2 className="text-xl text-white">
                    2. Data Collection and Usage
                </h2>
                <p>
                    Users can create and share cards displaying
                    &quot;before&quot; and &quot;after&quot; app logos. These
                    cards are publicly viewable only if shared by the user.
                </p>

                <h2 className="text-xl text-white">3. Data Sharing</h2>
                <p>
                    User-shared cards may be publicly viewable, depending on how
                    users choose to share them.
                </p>

                <h2 className="text-xl text-white">4. User Rights</h2>
                <p>
                    Users have the right to stop using the Site at any time. If
                    you wish to remove any publicly shared card, you can do so
                    through the Site interface.
                </p>

                <h2 className="text-xl text-white">5. Data Retention</h2>
                <p>
                    User-shared cards remain publicly available until removed by
                    the user.
                </p>

                <h2 className="text-xl text-white">
                    6. Children&apos;s Privacy
                </h2>
                <p>
                    The Site is not intended for children under the age of 13,
                    and we do not knowingly collect personal data from children
                    under 13. If you are under 13, please do not use the Site.
                </p>

                <h2 className="text-xl text-white">7. Cookies</h2>
                <p>
                    We do not place cookies on your device for tracking
                    purposes.
                </p>

                <h2 className="text-xl text-white">
                    8. Changes to this Privacy Policy
                </h2>
                <p>
                    We may update this Privacy Policy to reflect changes in our
                    practices or for other operational, legal, or regulatory
                    reasons. Updates will be posted on this page.
                </p>

                <h2 className="text-xl text-white">9. Contact Us</h2>
                <p>
                    You can reach us by email at:{" "}
                    <a
                        href="mailto: privacy@ente.io"
                        className="underline underline-offset-2"
                    >
                        privacy@ente.io
                    </a>
                </p>
                <p>
                    Mailing address: EnteIO Technologies Private Limited, 72/12,
                    Whitefield, Bengaluru, India.
                </p>

                <Link href="/" className="mt-8 underline underline-offset-2">
                    Go back to homepage
                </Link>
            </div>
        </div>
    );
};

export default Privacy;
